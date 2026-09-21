/* Minda Tenang — app logic.
   Hash routes (#/urgent, #/calm …) so every page has its own link and the phone's Back button works.
   All wording lives in content/ms.js and content/en.js. Nothing is sent anywhere. */
(function () {
  "use strict";

  var SITE = {
    version: "0.4",
    reviewed: "21/09/2026",
    draft: true            // set to false after HOD sign-off: hides the draft banner
  };

  // Phone numbers are the same in both languages. Checked 18/09/2026 (see Content Evidence Base §6).
  var LINES = [
    { key: "heal",   tel: "15555",       show: "15555" },
    { key: "bfkch",  tel: "082242800",   show: "082-242 800" },
    { key: "bfkl",   tel: "0376272929",  show: "03-7627 2929" },
    { key: "kasih",  tel: "15999",       show: "15999" },
    { key: "miasa",  tel: "1800180066",  show: "1800 180 066" },
    { key: "mhak",   tel: "082231459",   show: "082-231 459" }
  ];
  var DEPT = { tel: "0133362896", show: "013-336 2896" };

  // Anonymous suggestion form (Google Forms, owned by the unit). Opens in a new tab; nothing is sent from this site.
  var FEEDBACK_URL = "https://docs.google.com/forms/d/e/1FAIpQLScMLOH_tChxjNBxlmL39CdWqtF9_FIYZ2uqgoRFDm5vqwy2TA/viewform";

  // Colour of the rounded square behind each page's icon.
  var TONE = {
    calm: "teal", toolbox: "amber", learn: "blue", sleep: "purple", medicine: "emerald",
    appointment: "indigo", family: "sky", urgent: "rose", about: "teal",
    anxiety: "blue", panic: "orange", stress: "amber", depression: "violet"
  };
  function tone(id) { return TONE[id] || "teal"; }
  function icTile(icon, id) {
    return '<span class="ic-tile t-' + tone(id) + '" aria-hidden="true">' + (icon || "") + "</span>";
  }

  var C = window.MT_CONTENT;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var lang = store.get("mt-lang") === "en" ? "en" : "ms";
  var big = store.get("mt-big") === "1";
  var app = document.getElementById("app");
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var timer = null;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  // Tiny inline formatter: **bold**, *italic*, [label](#/route) or [label](tel:…)
  function fmt(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.+?)\*/g, "<i>$1</i>")
      .replace(/\[(.+?)\]\(((?:#\/|tel:)[^)\s]*)\)/g, '<a href="$2">$1</a>');
  }
  function U() { return C[lang].ui; }
  function P(id) { return C[lang].pages[id]; }

  /* ---------- voice guide ----------
     Uses a recorded MP3 if one is listed in ui.audio (content/*.js), otherwise the phone's own
     text-to-speech voice. Nothing is sent anywhere. */
  var voiceOn = store.get("mt-voice") !== "0";
  var curAudio = null;
  var hasTTS = "speechSynthesis" in window;
  function pickVoice() {
    if (!hasTTS) return null;
    var vs = speechSynthesis.getVoices() || [];
    var want = lang === "ms" ? ["ms", "id"] : ["en"];   // no Malay voice? Indonesian reads BM well
    for (var w = 0; w < want.length; w++) {
      for (var i = 0; i < vs.length; i++) {
        if (vs[i].lang && vs[i].lang.toLowerCase().replace("_", "-").indexOf(want[w]) === 0) return vs[i];
      }
    }
    return null;
  }
  function tts(text, rate) {
    if (!hasTTS) return;
    try {   // a voice problem must never stop the exercise itself
      var utt = new SpeechSynthesisUtterance(text), v = pickVoice();
      utt.lang = v ? v.lang : (lang === "ms" ? "ms-MY" : "en-GB");
      if (v) { try { utt.voice = v; } catch (e) {} }
      utt.rate = rate || 0.85;
      speechSynthesis.speak(utt);
      return utt;
    } catch (e) { return null; }
  }
  function hush() {
    if (curAudio) { try { curAudio.pause(); } catch (e) {} curAudio = null; }
    if (hasTTS) { try { speechSynthesis.cancel(); } catch (e) {} }
  }
  function say(text, key) {
    if (!voiceOn) return;
    hush();
    var file = (U().audio || {})[key];
    if (file) {
      try {
        curAudio = new Audio(file);
        var pr = curAudio.play();
        if (pr && pr.catch) pr.catch(function () { tts(text); });
        return;
      } catch (e) {}
    }
    tts(text);
  }
  function voiceBtn() {
    var u = U();
    if (!hasTTS && !Object.keys(u.audio || {}).length) return "";
    return '<button class="tbtn vbtn" type="button" id="vtoggle" aria-pressed="' + voiceOn + '">' +
      (voiceOn ? "🔈 " : "🔇 ") + esc(voiceOn ? u.voiceOn : u.voiceOff) + "</button>";
  }
  function voiceNote() {
    var u = U();
    if (!hasTTS) return '<p class="fine">' + esc(u.voiceNone) + "</p>";
    var vs = speechSynthesis.getVoices() || [];
    if (lang === "ms" && vs.length && !pickVoice()) return '<p class="fine" id="vnote">' + esc(u.voiceNoBM) + "</p>";
    return '<p class="fine" id="vnote"></p>';
  }

  /* ---------- block renderer ---------- */
  function blocks(list) { return (list || []).map(block).join(""); }
  function li(items) { return items.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join(""); }

  function block(b) {
    var u = U();
    switch (b.t) {
      case "h":  return "<h2>" + fmt(b.x) + "</h2>";
      case "h3": return "<h3>" + fmt(b.x) + "</h3>";
      case "p":  return "<p>" + fmt(b.x) + "</p>";
      case "ul": return "<ul>" + li(b.items) + "</ul>";
      case "ol": return "<ol>" + li(b.items) + "</ol>";
      case "box":
        return '<section class="box ' + (b.tone || "blue") + '">' +
          (b.title ? "<h2>" + fmt(b.title) + "</h2>" : "") + blocks(b.body) + "</section>";
      case "card":
        return '<section class="card">' + (b.title ? "<h2>" + fmt(b.title) + "</h2>" : "") + blocks(b.body) + "</section>";
      case "call999":
        return '<a class="call" href="tel:999">' + phoneIcon() + esc(u.call999) + "</a>";
      case "go":
        return '<a class="go ' + (b.tone || "") + '" href="' + esc(b.to) + '">' + esc(b.x) + "</a>";
      case "links":
        return '<div class="links">' + b.items.map(function (it) {
          var pg = P(it) || {};
          return '<a class="link" href="#/' + it + '">' + icTile(pg.icon, it) +
            "<div><b>" + esc(pg.title || it) + "</b>" + (pg.short ? "<small>" + esc(pg.short) + "</small>" : "") +
            '</div><span class="arr" aria-hidden="true">›</span></a>';
        }).join("") + "</div>";
      case "ex": return exercise(b);
      case "situations": return situations(b.items);
      case "helplines": return helplines();
      case "dept":
        return '<a class="line" href="tel:' + DEPT.tel + '"><div><b>' + esc(u.deptName) + "</b><small>" + esc(u.deptHours) +
          '</small></div><span class="num">' + DEPT.show + "</span></a>";
      case "checklist": return checklist(b.items);
      default: return "";
    }
  }

  function exercise(e) {
    var u = U();
    var tool = e.tool ? '<a class="go" href="#/' + e.tool + '">' + esc(e.toolLabel || u.startGuide) + "</a>" : "";
    return '<article class="card" id="ex-' + esc(e.id) + '"><h2>' + esc(e.name) + "</h2>" +
      '<div class="meta"><span class="chip">' + esc(e.time) + "</span></div>" +
      '<p><span class="lbl">' + esc(u.when) + "</span> " + fmt(e.when) + "</p>" +
      (e.steps ? "<ol>" + li(e.steps) + "</ol>" : "") +
      (e.body ? blocks(e.body) : "") +
      (e.notice ? '<p><span class="lbl">' + esc(u.notice) + "</span> " + fmt(e.notice) + "</p>" : "") +
      (e.care ? '<p class="caution"><span class="lbl">' + esc(u.care) + "</span> " + fmt(e.care) + "</p>" : "") +
      tool + "</article>";
  }

  var SIT_TONES = ["blue", "orange", "violet", "sky", "rose", "purple", "amber", "emerald"];
  function situations(items) {
    var u = U();
    return '<div class="stack">' + items.map(function (s, si) {
      return '<details class="sit"><summary><span class="ic-tile t-' + SIT_TONES[si % SIT_TONES.length] + '" aria-hidden="true">' + (s.icon || "") + "</span>" + esc(s.feel) +
        '</summary><div class="in">' +
        '<p><span class="lbl">' + esc(u.tryFirst) + "</span> " + fmt(s.first) + "</p>" +
        '<p><span class="lbl">' + esc(u.then) + "</span> " + fmt(s.then) + "</p>" +
        '<p class="caution"><span class="lbl">' + esc(u.care) + "</span> " + fmt(s.care) + "</p>" +
        "</div></details>";
    }).join("") + "</div>";
  }

  function helplines() {
    var u = U();
    return '<div class="links">' + LINES.map(function (l) {
      var d = u.lines[l.key] || [l.key, ""];
      return '<a class="line" href="tel:' + l.tel + '"><div><b>' + esc(d[0]) + "</b><small>" + esc(d[1]) +
        '</small></div><span class="num">' + esc(l.show) + "</span></a>";
    }).join("") + "</div>";
  }

  function checklist(items) {
    var u = U();
    return '<form class="card check" onsubmit="return false">' + items.map(function (q, i) {
      var id = "q" + i, inner = "";
      if (q.opts) {
        inner = '<div class="opts" role="group" aria-labelledby="' + id + '">' + q.opts.map(function (o) {
          return '<label><input type="radio" name="' + id + '"> ' + esc(o) + "</label>";
        }).join("") + "</div>";
      }
      if (q.text !== false && !q.opts || q.text) {
        inner += '<textarea aria-labelledby="' + id + '" rows="2"></textarea>';
      }
      return '<div class="q"><span id="' + id + '">' + fmt(q.q) + "</span>" +
        (q.hint ? '<p class="hint">' + fmt(q.hint) + "</p>" : "") + inner + "</div>";
    }).join("") +
      '<p class="fine">' + esc(u.checkPrivacy) + "</p>" +
      '<div class="noprint btnrow">' +
      '<button class="go" type="button" id="doprint">' + esc(u.print) + "</button>" +
      '<button class="go ghost" type="button" id="doclear">' + esc(u.clear) + "</button></div></form>";
  }

  function phoneIcon() {
    return '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>';
  }

  /* ---------- views ---------- */
  function banners() {
    var u = U(), h = "";
    var parts = [];
    if (SITE.draft) parts.push(u.draftSite);
    if (lang === "ms" && u.draftBM) parts.push(u.draftBM);
    if (parts.length) h = '<p class="banner">' + esc(parts.join(" ")) + "</p>";
    return h;
  }

  function home() {
    var u = U();
    var mods = ["toolbox", "learn", "sleep", "medicine", "appointment", "family"];
    return banners() +
      '<section class="hero"><span class="tag">\ud83d\udccb ' + esc(u.unit) + '</span>' +
      "<h1>" + esc(u.hello) + "</h1><p>" + esc(u.helloP) + "</p></section>" +
      '<div class="duo">' +
      '<a class="calm" href="#/calm"><span class="ic" aria-hidden="true">\ud83e\udec1</span><b>' +
      esc(P("calm").title) + "</b><small>" + esc(u.calmSub) + "</small></a>" +
      '<a class="crisis" href="#/urgent"><span class="ic" aria-hidden="true">\ud83d\udea8</span><b>' +
      esc(P("urgent").title) + "</b><small>" + esc(u.sosSub) + "</small></a></div>" +
      '<h2 class="seclbl">' + esc(u.sections) + "</h2>" +
      '<nav class="links" aria-label="' + esc(u.sections) + '">' +
      mods.map(function (id) {
        var pg = P(id);
        return '<a class="link" href="#/' + id + '">' + icTile(pg.icon, id) +
          "<div><b>" + esc(pg.tileTitle || pg.title) + "</b>" +
          (pg.short || pg.lead ? "<small>" + esc(pg.short || plain(pg.lead)) + "</small>" : "") +
          '</div><span class="arr" aria-hidden="true">\u203a</span></a>';
      }).join("") + "</nav>" +
      '<div class="note"><p>' + esc(u.disc) + "</p><p>" + esc(u.priv) + "</p><p>" +
      esc(u.reviewed) + " " + SITE.reviewed + " \u00b7 " + esc(u.version) + " " + SITE.version +
      '</p><p><a href="#/about">' + esc(P("about").title) + "</a></p></div>";
  }

  // strip **bold**/[links] and shorten a page lead so it fits one line under the title
  function plain(t) {
    var x = String(t || "").replace(/\*\*/g, "").replace(/\*/g, "").replace(/\[(.+?)\]\(.+?\)/g, "$1");
    return x.length > 74 ? x.slice(0, 71).replace(/[,;:\s]+\S*$/, "") + "\u2026" : x;
  }

  function page(id) {
    var pg = P(id), u = U();
    var parent = pg.parent || "";
    var h = banners() + '<section class="pagehead"><a class="back" href="#/' + parent + '">' + esc(u.back) + "</a>" +
      "<h1>" + (pg.icon ? '<span aria-hidden="true">' + pg.icon + " </span>" : "") + esc(pg.title) + "</h1>" +
      (pg.lead ? '<p class="lead">' + fmt(pg.lead) + "</p>" : "") + "</section>" +
      '<div class="flow">' + (pg.blocks && pg.blocks.length ? blocks(pg.blocks)
        : '<p class="banner">' + (lang === "ms" ? "Kandungan halaman ini sedang disediakan." : "This page's content is being prepared.") + "</p>") + "</div>";
    if (id !== "urgent" && id !== "about") {
      h += '<section class="box blue foot"><h2>' + esc(u.footTitle) + "</h2><p>" + fmt(u.footText) + "</p>" +
        (pg.edu ? "<p>" + fmt(u.footMeds) + "</p>" : "") +
        '<a class="go ghost" href="#/urgent">' + esc(u.footBtn) + "</a></section>";
    }
    return h;
  }

  function breatheView(mode) {
    var u = U(), ex = u.breath[mode];
    return banners() + '<section class="pagehead"><a class="back" href="#/calm">' + esc(u.back) + "</a><h1>" + esc(ex.name) + "</h1></section>" +
      '<div class="breathe"><nav class="seg" aria-label="' + esc(u.pattern) + '">' +
      '<a href="#/breathe-46"' + (mode === "b46" ? ' aria-current="page"' : "") + ">4-6</a>" +
      '<a href="#/breathe-box"' + (mode === "box" ? ' aria-current="page"' : "") + ">4-4-4-4</a></nav>" +
      '<div class="stage" aria-hidden="true"><div class="halo"></div><div class="ball" id="ball"></div><div class="count" id="count"></div></div>' +
      '<p class="phase" id="phase" aria-live="polite">' + esc(u.ready) + "</p>" +
      '<div class="row"><button class="go" type="button" id="bstart">' + esc(u.start) + "</button>" + voiceBtn() + "</div>" +
      voiceNote() +
      '<p class="cycles" id="cycles">' + esc(u.rounds) + ": 0</p>" +
      '<p class="caution"><span class="lbl">' + esc(u.care) + "</span> " + fmt(ex.care) + "</p></div>";
  }

  function groundView(step) {
    var u = U(), g = u.ground, body;
    if (step < 5) {
      body = '<div class="gstep"><div class="pips" aria-hidden="true">' + [0, 1, 2, 3, 4].map(function (i) {
        return '<i class="' + (i <= step ? "on" : "") + '"></i>';
      }).join("") + '</div><div class="gnum">' + (5 - step) + "</div><h2>" + esc(g.titles[step]) + "</h2><p>" +
        esc(g.texts[step]) + '</p><button class="go" type="button" id="gnext">' + esc(u.next) + "</button></div>";
    } else {
      body = '<div class="gstep"><h2>' + esc(g.done) + '</h2><button class="go ghost" type="button" id="gagain">' +
        esc(u.again) + "</button></div>";
    }
    return banners() + '<section class="pagehead"><a class="back" href="#/calm">' + esc(u.back) + "</a><h1>" + esc(g.name) +
      '</h1></section><article class="card" aria-live="polite">' + body + "</article>" +
      '<div class="row mt12">' + voiceBtn() + "</div>" + voiceNote();
  }

  /* ---------- timed voice-guided exercises (muscle relaxation, 1-minute pause) ---------- */
  function guideView(id) {
    var u = U(), g = u.guides[id];
    return banners() + '<section class="pagehead"><a class="back" href="#/calm/' + g.from + '">' + esc(u.back) + "</a><h1>" + esc(g.name) + "</h1>" +
      '<p class="lead">' + fmt(g.lead) + "</p></section>" +
      '<article class="card guide"><div class="pips" aria-hidden="true">' + g.steps.map(function () { return "<i></i>"; }).join("") + "</div>" +
      '<p class="gtext" id="gtext" aria-live="polite">' + esc(u.ready) + "</p>" +
      '<div class="gnum" id="gcount" aria-hidden="true"></div>' +
      '<div class="row"><button class="go" type="button" id="gstart">' + esc(u.start) + "</button>" + voiceBtn() + "</div>" +
      voiceNote() + "</article>" +
      '<p class="caution mt12"><span class="lbl">' + esc(u.care) + "</span> " + fmt(g.care) + "</p>";
  }
  function runGuide(id, onEnd) {
    var g = U().guides[id], i = 0, sec = 0;
    var tx = document.getElementById("gtext"), cn = document.getElementById("gcount"),
      pips = app.querySelectorAll(".guide .pips i");
    function step() {
      if (i >= g.steps.length) {
        tx.textContent = g.done; cn.textContent = ""; say(g.done, id + "-done"); timer = null; onEnd(); return;
      }
      for (var k = 0; k < pips.length; k++) pips[k].className = k <= i ? "on" : "";
      tx.textContent = g.steps[i][0];
      say(g.steps[i][0], id + "-" + (i + 1));
      sec = g.steps[i][1]; tick();
    }
    function tick() {
      cn.textContent = sec;
      timer = setTimeout(function () { sec--; if (sec > 0) tick(); else { i++; step(); } }, 1000);
    }
    step();
  }

  /* ---------- breathing guide ---------- */
  function stopBreath() { if (timer) { clearTimeout(timer); timer = null; } }
  function runBreath(mode) {
    var u = U();
    var seq = mode === "box"
      ? [["inhale", 4, 2.2], ["hold", 4, 2.2], ["exhale", 4, 1], ["hold", 4, 1]]
      : [["inhale", 4, 2.2], ["exhale", 6, 1]];
    var ball = document.getElementById("ball"), c = document.getElementById("count"),
      p = document.getElementById("phase"), cy = document.getElementById("cycles");
    var i = 0, sec = 0, rounds = 0;
    function phaseStart() {
      var k = seq[i][0], dur = seq[i][1], scale = seq[i][2];
      p.textContent = u[k];
      say(u.voice[k], "breath-" + k);
      ball.style.transition = (reduce || k === "hold") ? "none" : "transform " + dur + "s ease-in-out";
      ball.style.transform = "scale(" + scale + ")";
      sec = dur; tick();
    }
    function tick() {
      c.textContent = sec;
      timer = setTimeout(function () {
        sec--;
        if (sec > 0) tick();
        else {
          i = (i + 1) % seq.length;
          if (i === 0) { rounds++; cy.textContent = u.rounds + ": " + rounds; }
          phaseStart();
        }
      }, 1000);
    }
    phaseStart();
  }
  function resetBall() {
    var ball = document.getElementById("ball"), c = document.getElementById("count"), p = document.getElementById("phase");
    if (ball) { ball.style.transition = "transform .6s ease"; ball.style.transform = "scale(1)"; }
    if (c) c.textContent = "";
    if (p) p.textContent = U().ready;
  }

  /* ---------- router ---------- */
  var groundStep = 0;
  function route() {
    return (location.hash || "").replace(/^#\/?/, "").split("?")[0].split("/")[0];
  }
  function render(keepScroll) {
    stopBreath();
    stopSpeech();
    var u = U(), r = route(), html;
    document.documentElement.lang = lang;
    document.documentElement.style.setProperty("--fs", big ? "21px" : "18px");
    headerText();

    if (r === "" || r === "home") html = home();
    else if (r === "breathe-46") html = breatheView("b46");
    else if (r === "breathe-box") html = breatheView("box");
    else if (r === "ground") html = groundView(groundStep);
    else if (u.guides[r]) html = guideView(r);
    else if (P(r)) html = page(r);
    else { html = home(); r = ""; }

    html += '<footer class="sitefoot"><p>' + esc(u.fbAsk) + '</p>' +
      '<a href="' + FEEDBACK_URL + '" target="_blank" rel="noopener noreferrer">' + esc(u.fbLink) + ' \u2197</a>' +
      '<small>' + esc(u.fbNote) + "</small></footer>";
    app.innerHTML = html;
    var pg = P(r);
    var tname = pg ? pg.title : r.indexOf("breathe") === 0 ? u.breath[r === "breathe-box" ? "box" : "b46"].name
      : r === "ground" ? u.ground.name : u.guides[r] ? u.guides[r].name : "";
    document.title = (tname ? tname + " · " : "") + "Minda Tenang";
    // #/calm/pause → open the Calm page at the "pause" exercise card
    var anchor = (location.hash || "").split("/")[2];
    var target = anchor && document.getElementById("ex-" + anchor);
    if (target && !keepScroll) {
      app.focus({ preventScroll: true });
      var y = target.getBoundingClientRect().top + window.pageYOffset - document.querySelector(".top").offsetHeight - 8;
      window.scrollTo(0, y);
    } else if (!keepScroll) { window.scrollTo(0, 0); app.focus({ preventScroll: true }); }
    bind(r);
    if (r === "ground" && !keepScroll) speakGround();   // read out the first step when the page opens
  }

  function bind(r) {
    var bs = document.getElementById("bstart");
    if (bs) bs.onclick = function () {
      if (timer) { stopBreath(); hush(); resetBall(); bs.textContent = U().start; }
      else { bs.textContent = U().stop; runBreath(r === "breathe-box" ? "box" : "b46"); }
    };
    var gn = document.getElementById("gnext");
    if (gn) gn.onclick = function () { groundStep++; render(true); speakGround(); };
    var ga = document.getElementById("gagain");
    if (ga) ga.onclick = function () { groundStep = 0; render(true); speakGround(); };
    var vt = document.getElementById("vtoggle");
    if (vt) vt.onclick = function () {
      voiceOn = !voiceOn; store.set("mt-voice", voiceOn ? "1" : "0");
      if (!voiceOn) hush();
      vt.setAttribute("aria-pressed", voiceOn ? "true" : "false");
      vt.textContent = (voiceOn ? "🔈 " : "🔇 ") + (voiceOn ? U().voiceOn : U().voiceOff);
      if (voiceOn && r === "ground") speakGround();
    };
    var gs = document.getElementById("gstart");
    if (gs) gs.onclick = function () {
      if (timer) { stopBreath(); hush(); gs.textContent = U().start; document.getElementById("gtext").textContent = U().ready; document.getElementById("gcount").textContent = ""; }
      else { gs.textContent = U().stop; runGuide(r, function () { gs.textContent = U().again; }); }
    };
    var pr = document.getElementById("doprint");
    if (pr) pr.onclick = function () { window.print(); };
    var cl = document.getElementById("doclear");
    if (cl) cl.onclick = function () { var f = app.querySelector("form"); if (f) f.reset(); };
  }

  function speakGround() {
    var g = U().ground;
    if (groundStep < 5) say(g.titles[groundStep] + ". " + g.texts[groundStep], "ground-" + (groundStep + 1));
    else say(g.done, "ground-done");
  }

  function headerText() {
    var u = U();
    document.getElementById("unit").textContent = u.unit;
    var sp = document.getElementById("speak"), bg = document.getElementById("bigger");
    sp.setAttribute("aria-label", u.readAloud); sp.title = u.readAloud;
    bg.setAttribute("aria-label", u.textSize); bg.title = u.textSize;
    bg.setAttribute("aria-pressed", big ? "true" : "false");
    document.getElementById("lang-ms").setAttribute("aria-pressed", lang === "ms" ? "true" : "false");
    document.getElementById("lang-en").setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    document.getElementById("sos").innerHTML = phoneIcon() + esc(u.sos) + " <span>· " + esc(u.sosSub) + "</span>";
    document.getElementById("skip").textContent = u.skip;
  }

  /* ---------- read aloud (phone's own text-to-speech; nothing is sent) ---------- */
  var sp = document.getElementById("speak");
  function stopSpeech() {
    hush();
    sp.setAttribute("aria-pressed", "false");
  }
  if (!("speechSynthesis" in window)) sp.hidden = true;
  sp.onclick = function () {
    if (speechSynthesis.speaking) { stopSpeech(); return; }
    var utt = tts(app.innerText.replace(/[‹›🔈🔇]/g, ""), 0.92);
    if (!utt) return;
    utt.onend = function () { sp.setAttribute("aria-pressed", "false"); };
    sp.setAttribute("aria-pressed", "true");
  };

  document.getElementById("bigger").onclick = function () { big = !big; store.set("mt-big", big ? "1" : "0"); render(true); };
  document.getElementById("lang-ms").onclick = function () { lang = "ms"; store.set("mt-lang", "ms"); render(true); };
  document.getElementById("lang-en").onclick = function () { lang = "en"; store.set("mt-lang", "en"); render(true); };
  if (hasTTS && speechSynthesis.addEventListener) speechSynthesis.addEventListener("voiceschanged", function () {
    var n = document.getElementById("vnote");
    if (n) n.textContent = (lang === "ms" && !pickVoice()) ? U().voiceNoBM : "";
  });
  window.addEventListener("hashchange", function () { if (route() !== "ground") groundStep = 0; render(false); });
  render(false);
})();
