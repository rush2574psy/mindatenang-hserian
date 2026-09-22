/* Minda Tenang — VIDEO LIST (same for both languages).
   How it works: nothing loads from YouTube until the person taps "Play". Then YouTube's
   privacy-enhanced player (youtube-nocookie.com) opens, with captions switched on.

   Each video:  key: { yt: "YouTube ID", by: "publisher", lang: "en"|"ms", mins: "", title: { en, ms } }
   An external page instead of YouTube: use  url: "https://…"  in place of yt.
   To REMOVE a video: delete its line here AND any { t: "video", v: "key" } that uses it in ms.js / en.js.

   Every video here was checked on 22/09/2026: it exists, the publisher is as stated, and YouTube allows it
   to be embedded. CLINICAL APPROVAL IS STILL NEEDED for each one — record it in
   2026-09-22-daftar-kandungan-video-minda-tenang.xlsx (reviewer, date, next review). */
window.MT_VIDEOS = {
  /* ---- Breathing ---- */
  "breath-nhsinform": { yt: "IYTZwBzjNC0", by: "NHS inform (Scotland)", lang: "en", mins: "",
    title: { en: "Steps for Stress: breathing exercise", ms: "Steps for Stress: latihan pernafasan" } },
  "breath-cwpt": { yt: "GqfrbGtorBE", by: "Coventry and Warwickshire Partnership NHS Trust", lang: "en", mins: "",
    title: { en: "Relaxation: breathing techniques", ms: "Relaksasi: teknik pernafasan" } },
  "breath-box": { yt: "tEmt1Znux58", by: "Sunnybrook Hospital (Canada)", lang: "en", mins: "",
    title: { en: "Box breathing: calming stress or anxiety", ms: "Pernafasan kotak: meredakan tekanan atau kebimbangan" } },

  /* ---- Grounding ---- */
  "ground-who": { yt: "lW21fyxBNs4", by: "World Health Organization (WHO South-East Asia)", lang: "en", mins: "",
    title: { en: "Managing Stress Better, Tool 3: Grounding", ms: "Mengurus Tekanan, Alat 3: Grounding (membumikan diri)" } },
  "ground-paho": { yt: "9wTTAQt6XC0", by: "Pan American Health Organization (WHO)", lang: "en", mins: "",
    title: { en: "Ground yourself (Doing What Matters in Times of Stress)", ms: "Bumikan diri anda (Doing What Matters in Times of Stress)" } },

  /* ---- Muscle relaxation ---- */
  "pmr-therapistaid": { yt: "1nZEdqcGVzo", by: "Therapist Aid", lang: "en", mins: "",
    title: { en: "How to do progressive muscle relaxation", ms: "Cara melakukan relaksasi otot progresif" } },
  "pmr-hss": { yt: "2IJUD-e14FY", by: "Hospital for Special Surgery (USA)", lang: "en", mins: "",
    title: { en: "Guided progressive muscle relaxation", ms: "Relaksasi otot progresif berpandu" } },
  "relax-cwpt": { yt: "RgOeC2JrIbg", by: "Coventry and Warwickshire Partnership NHS Trust", lang: "en", mins: "",
    title: { en: "Relaxation session", ms: "Sesi relaksasi" } },
  "kkm-pernafasan": { url: "https://infosihat.moh.gov.my/penerbitan-multimedia/video/item/teknik-pernafasan-dan-relaksasi-otot.html",
    by: "Kementerian Kesihatan Malaysia (Info Sihat)", lang: "ms", mins: "",
    title: { en: "Breathing and muscle relaxation techniques (in Malay)", ms: "Teknik Pernafasan dan Relaksasi Otot" },
    note: { en: "Opens the Ministry of Health website. Large video file: use Wi-Fi if you can.",
            ms: "Dibuka di laman web KKM. Fail video besar: guna Wi-Fi jika boleh." } },

  /* ---- Mindfulness & stress ---- */
  "mind-nhs24": { yt: "yWuPJFAx3rA", by: "NHS 24 (Scotland)", lang: "en", mins: "",
    title: { en: "An introduction to mindfulness", ms: "Pengenalan kepada kesedaran penuh (mindfulness)" } },
  "stress-who": { yt: "E3Cts45FNrk", by: "World Health Organization (WHO)", lang: "en", mins: "",
    title: { en: "Doing What Matters in Times of Stress", ms: "Doing What Matters in Times of Stress (WHO)" } },
  "room-who": { yt: "rC3U9H3HWyk", by: "World Health Organization (WHO South-East Asia)", lang: "en", mins: "",
    title: { en: "Managing Stress Better, Tool 6: Making room", ms: "Mengurus Tekanan, Alat 6: Memberi ruang kepada perasaan" } },

  /* ---- Sleep ---- */
  "sleep-emm": { yt: "OvQTjAlIvI8", by: "Every Mind Matters (NHS England)", lang: "en", mins: "",
    title: { en: "Simple tips for better sleep", ms: "Tip mudah untuk tidur lebih lena" } },

  /* ---- Understanding ---- */
  "dep-who": { yt: "XiCrniLQGYc", by: "World Health Organization (WHO)", lang: "en", mins: "",
    title: { en: "I had a black dog, his name was depression", ms: "\"I had a black dog\": memahami kemurungan (WHO)" } }
};
