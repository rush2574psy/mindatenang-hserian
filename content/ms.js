/* Minda Tenang — kandungan BAHASA MELAYU.
   DRAF terjemahan oleh Claude daripada teks Inggeris (en.js). Perlu terjemahan-balik oleh 2 kakitangan sebelum dilancarkan.
   Format: **tebal**, *condong*, [label](#/halaman). */
window.MT_CONTENT = window.MT_CONTENT || {};
window.MT_CONTENT.ms = {
  ui: {
    unit: "Unit Psikiatri & Kesihatan Mental, Hospital Serian",
    skip: "Langkau ke kandungan",
    readAloud: "Baca dengan kuat", textSize: "Besarkan tulisan",
    draftSite: "Draf untuk semakan Ketua Jabatan. Kandungan belum diluluskan secara klinikal.",
    draftBM: "Teks Bahasa Melayu ini masih DRAF dan belum disemak.",
    hello: "Selamat datang. Anda tidak keseorangan.",
    helloP: "Maklumat mudah dan latihan menenangkan diri untuk anda dan keluarga, antara temujanji klinik.",
    calmSub: "Pernafasan, bertenang & meditasi, 1–5 minit",
    sections: "Bahagian",
    disc: "Laman ini menyokong, bukan menggantikan, rawatan daripada doktor dan pasukan anda.",
    priv: "Kami tidak mengumpul sebarang maklumat tentang anda. Tiada log masuk.",
    reviewed: "Semakan terakhir:", version: "Versi",
    fbAsk: "Ada cadangan untuk menambah baik laman ini?",
    fbLink: "Beri cadangan (tanpa nama)",
    fbNote: "Dibuka dalam Google Forms. Jangan tulis maklumat peribadi. Bukan untuk kecemasan.",
    sos: "BANTUAN SEGERA", sosSub: "Kecemasan & talian bantuan",
    back: "‹ Kembali",
    when: "Bila guna:", notice: "Mungkin anda rasa:", care: "Berhati-hati:",
    tryFirst: "Cuba dulu:", then: "Kemudian:",
    startGuide: "Mula dengan panduan",
    footTitle: "Perlu bantuan sekarang?",
    footText: "Jika anda atau orang lain mungkin dalam bahaya, hubungi **999** atau pergi ke Unit Kecemasan yang terdekat.",
    footMeds: "Jangan berhenti atau tukar ubat tanpa berbincang dengan doktor anda.",
    footBtn: "Pergi ke Bantuan Segera",
    call999: "Hubungi 999",
    deptName: "Unit Psikiatri & Kesihatan Mental, Hospital Serian",
    deptHours: "Waktu pejabat",
    lines: {
      heal:  ["Talian HEAL (KKM)", "8 pagi – 12 tengah malam, setiap hari"],
      bfkch: ["Befrienders Kuching", "6.30 – 9.30 malam, setiap hari"],
      bfkl:  ["Befrienders Kuala Lumpur", "24 jam"],
      kasih: ["Talian Kasih", "24 jam · WhatsApp 019-261 5999"],
      miasa: ["Talian krisis MIASA", "WhatsApp 03-9765 6088"],
      mhak:  ["Persatuan Kesihatan Mental Kuching", "Telefon untuk waktu operasi"]
    },
    pattern: "Corak pernafasan",
    inhale: "Tarik nafas…", exhale: "Hembus…", hold: "Tahan…", ready: "Tekan Mula bila sedia",
    start: "Mula", stop: "Berhenti", rounds: "Pusingan", next: "Seterusnya", again: "Ulang",
    breath: {
      b46: { name: "Pernafasan Perlahan 4-6", care: "Bernafas dengan lembut. Jangan paksa tarik nafas besar. Berhenti jika rasa pening." },
      box: { name: "Pernafasan Kotak", care: "Jika anda ada masalah jantung atau paru-paru, darah tinggi, sedang hamil, atau rasa pening, jangan tahan nafas. Guna 4-6 sahaja." }
    },
    ground: {
      name: "Latihan 5-4-3-2-1",
      titles: ["Nampak", "Sentuh", "Dengar", "Hidu", "Rasa"],
      texts: [
        "Lihat sekeliling. Sebut 5 benda yang anda nampak.",
        "Sebut 4 benda yang anda boleh sentuh. Rasakan permukaannya.",
        "Diam sejenak. Sebut 3 bunyi yang anda dengar.",
        "Sebut 2 bau yang anda hidu, atau bau yang anda suka.",
        "Sebut 1 rasa di mulut anda, atau minum seteguk air."
      ],
      done: "Selesai. Bagus. Hembus nafas perlahan sekali lagi."
    },
    voiceOn: "Suara: hidup", voiceOff: "Suara: tutup",
    voiceNoBM: "Telefon ini tiada suara Bahasa Melayu, jadi sebutan mungkin kurang tepat. Anda boleh tutup suara dan ikut tulisan di skrin.",
    voiceNone: "Pelayar ini tidak dapat memainkan panduan suara. Sila ikut tulisan di skrin.",
    voice: { inhale: "Tarik nafas, perlahan", exhale: "Hembus, perlahan-lahan", hold: "Tahan, dengan lembut" },
    amb: { off: "🎵 Bunyi latar: tutup", rain: "🌧 Bunyi latar: hujan", hum: "🎵 Bunyi latar: dengung lembut" },
    left: "lagi",
    /* Rakaman suara (pilihan). Letak fail MP3 dalam site/audio/ms/ dan senaraikan di sini, contoh:
       "breath-inhale": "audio/ms/breath-inhale.mp3". Kunci yang tiada di sini akan guna suara telefon.
       Senarai kunci ada dalam skrip rakaman (2026-09-18-skrip-rakaman-suara.docx). */
    audio: {},
    guides: {
      /* ---- Meditasi berpandu (med: true = paparan tenang, loceng, bar kemajuan) ---- */
      "med-breath-guide": {
        name: "Nafas Berkesedaran", from: "med-breath", med: true,
        lead: "Ikut suara. Lebih kurang 3 minit. Anda boleh buka mata bila-bila masa.",
        care: "Jika ingatan yang menyedihkan atau fikiran yang mengelirukan muncul, buka mata, berhenti, dan guna [latihan 5-4-3-2-1](#/ground).",
        steps: [
          ["Duduk dengan selesa. Biarkan bahu jatuh. Pejamkan mata, atau pandang lembut ke lantai.", 12],
          ["Bernafas seperti biasa. Tidak perlu mengubah apa-apa.", 12],
          ["Perhatikan udara masuk melalui hidung, dan keluar semula.", 15],
          ["Rasakan dada atau perut naik perlahan, dan turun perlahan.", 18],
          ["Pilih satu tempat untuk merehatkan perhatian. Hujung hidung, dada, atau perut.", 18],
          ["Fikiran akan melayang. Itu perkara biasa.", 12],
          ["Apabila anda sedar fikiran telah melayang, bawa perhatian kembali kepada nafas, dengan lembut.", 22],
          ["Tarik nafas. Dan hembus.", 15],
          ["Setiap kali anda kembali kepada nafas, itulah latihannya. Anda sedang melakukannya dengan baik.", 22],
          ["Terus bernafas dengan tenang, ikut rentak anda sendiri.", 25],
          ["Sekarang, perlahan-lahan, perhatikan bunyi di sekeliling anda.", 10]
        ],
        done: "Selesai. Buka mata perlahan-lahan apabila anda sedia."
      },
      "med-body-guide": {
        name: "Imbasan Badan", from: "med-body", med: true,
        lead: "Ikut suara. Lebih kurang 5 minit. Sesuai juga sebelum tidur.",
        care: "Jika ada bahagian yang sakit atau cedera, cukup perhatikan dari jauh, atau langkau. Jika ingatan yang menyedihkan muncul, buka mata dan guna [latihan 5-4-3-2-1](#/ground).",
        steps: [
          ["Baring atau duduk dengan selesa. Pejamkan mata jika anda mahu.", 12],
          ["Tarik nafas perlahan, dan hembus panjang. Biarkan badan menjadi berat.", 15],
          ["Bawa perhatian ke tapak kaki. Perhatikan apa sahaja yang anda rasa. Hangat, sejuk, atau tiada rasa langsung.", 25],
          ["Naik ke buku lali dan betis. Jika ada rasa tegang, biarkan ia lembut dengan setiap hembusan.", 25],
          ["Sekarang lutut dan paha. Rasakan berat kaki anda disokong.", 22],
          ["Pinggul dan bahagian bawah belakang. Hembus, dan biarkan ia longgar.", 22],
          ["Perut. Rasakan perut naik dan turun bersama nafas.", 22],
          ["Dada dan bahagian atas belakang. Tiada apa yang perlu diubah. Hanya perhatikan.", 22],
          ["Tangan dan jari. Biarkan tangan berehat, berat dan lembut.", 22],
          ["Lengan dan bahu. Biarkan bahu jatuh, jauh dari telinga.", 22],
          ["Leher dan rahang. Longgarkan rahang. Biarkan gigi tidak rapat.", 22],
          ["Muka. Dahi, mata dan pipi. Biarkan muka menjadi tenang.", 22],
          ["Sekarang rasakan seluruh badan anda, dari hujung kaki hingga kepala, bernafas dengan tenang.", 30],
          ["Perlahan-lahan, gerakkan jari tangan dan jari kaki.", 12]
        ],
        done: "Selesai. Ambil masa sebelum anda bangun."
      },
      "med-place-guide": {
        name: "Tempat Yang Tenang", from: "med-place", med: true,
        lead: "Ikut suara. Lebih kurang 5 minit. Bayangkan satu tempat yang membuat anda rasa tenang dan selamat.",
        care: "Jika tiada tempat yang terasa selamat, bayangkan tempat rekaan. Jika ingatan yang menyedihkan muncul, buka mata, rasakan kaki di lantai, dan guna [latihan 5-4-3-2-1](#/ground).",
        steps: [
          ["Duduk atau baring dengan selesa. Pejamkan mata, atau pandang lembut ke bawah.", 12],
          ["Bernafas perlahan beberapa kali. Biarkan hembusan lebih panjang daripada tarikan.", 18],
          ["Bayangkan satu tempat di mana anda rasa tenang dan selamat. Ia boleh jadi tempat sebenar, seperti kampung, tepi sungai atau kebun. Atau tempat yang anda reka sendiri.", 30],
          ["Lihat sekeliling tempat itu. Apa warna yang anda nampak? Bagaimana cahayanya?", 25],
          ["Dengar. Mungkin bunyi air, angin, burung, atau hanya sunyi.", 25],
          ["Rasakan. Mungkin angin sejuk di kulit, tanah di bawah kaki, atau cahaya matahari yang hangat.", 25],
          ["Hidu. Mungkin bau hujan, bunga, atau makanan kegemaran anda.", 22],
          ["Di sini, tiada apa yang perlu anda buat. Anda boleh berehat.", 25],
          ["Rasakan badan anda menjadi lebih tenang, dan lebih ringan.", 25],
          ["Jika mahu, beri tempat ini satu perkataan, seperti tenang, atau rumah. Anda boleh ingat perkataan ini bila-bila masa untuk kembali ke sini.", 30],
          ["Nikmati tempat ini seketika lagi.", 25],
          ["Sekarang, perlahan-lahan kembali ke bilik ini. Rasakan kaki anda di lantai.", 15]
        ],
        done: "Selesai. Tempat ini sentiasa ada untuk anda. Buka mata perlahan-lahan."
      },
      "med-kind-guide": {
        name: "Kebaikan & Kasih Sayang", from: "med-kind", med: true,
        lead: "Ikut suara. Lebih kurang 4 minit. Menghantar harapan yang baik kepada diri sendiri dan orang lain.",
        care: "Tidak perlu rasa sesuatu yang istimewa. Jika terasa sukar atau sedih, itu biasa. Anda boleh guna kata-kata atau doa mengikut kepercayaan anda sendiri.",
        steps: [
          ["Duduk dengan selesa. Letakkan tangan di dada jika anda mahu.", 12],
          ["Bernafas perlahan. Fikirkan seseorang yang mudah anda sayangi. Keluarga, kawan, atau haiwan peliharaan.", 22],
          ["Dalam hati, ucapkan kepadanya. Semoga kamu selamat. Semoga kamu sihat. Semoga kamu tenang.", 25],
          ["Perhatikan apa yang anda rasa. Mungkin hangat, mungkin tiada apa-apa. Kedua-duanya tidak mengapa.", 20],
          ["Sekarang, ucapkan kepada diri sendiri. Semoga saya selamat. Semoga saya sihat. Semoga saya tenang.", 25],
          ["Jika terasa sukar, itu biasa. Cukup ulang dengan perlahan.", 18],
          ["Fikirkan seseorang yang anda kenal sedikit, seperti jiran atau rakan sekerja. Semoga kamu selamat, sihat, dan tenang.", 25],
          ["Kini, fikirkan semua orang di rumah anda, di kampung anda, dan di mana-mana sahaja. Semoga semua selamat, sihat, dan tenang.", 28],
          ["Bernafas dengan tenang, dan rasakan kebaikan ini.", 25],
          ["Perlahan-lahan, buka mata apabila anda sedia.", 10]
        ],
        done: "Selesai. Bawa sedikit kebaikan ini bersama anda hari ini."
      },
      "pmr-guide": {
        name: "Relaksasi Otot", from: "pmr",
        lead: "Ikut suara. Lebih kurang 2 minit. Ulang jika anda mahu.",
        care: "Tegang dengan lembut, jangan sampai sakit. Langkau bahagian yang sakit atau cedera.",
        steps: [
          ["Duduk atau baring dengan selesa. Pejamkan mata jika anda mahu.", 6],
          ["Tangan. Genggam tangan dengan lembut, dan tahan.", 5],
          ["Lepaskan. Rasakan perbezaannya.", 10],
          ["Bahu. Angkat bahu perlahan ke arah telinga, dan tahan.", 5],
          ["Lepaskan. Biarkan bahu jatuh.", 10],
          ["Muka. Kerutkan muka dengan lembut, dan tahan.", 5],
          ["Lepaskan. Biarkan muka menjadi lembut.", 10],
          ["Perut. Ketatkan otot perut, dan tahan.", 5],
          ["Lepaskan. Hembus nafas perlahan-lahan.", 10],
          ["Kaki. Tekan tapak kaki ke lantai, dan tahan.", 5],
          ["Lepaskan. Rasakan kaki menjadi berat.", 10],
          ["Bernafas perlahan-lahan, dan rasakan seluruh badan anda.", 15]
        ],
        done: "Selesai. Bagus. Ambil masa sebelum anda bangun."
      },
      "pause-guide": {
        name: "Rehat 1 Minit", from: "pause",
        lead: "Ikut suara. Lebih kurang 1 minit.",
        care: "Jika ingatan yang menyedihkan atau fikiran yang mengelirukan muncul, berhenti dan guna [latihan 5-4-3-2-1](#/ground).",
        steps: [
          ["Berhenti daripada apa yang anda sedang buat.", 6],
          ["Rasakan kaki anda di lantai.", 12],
          ["Perhatikan satu bunyi yang anda dengar.", 12],
          ["Perhatikan satu bau.", 10],
          ["Perhatikan satu benda yang anda nampak.", 10],
          ["Hembus nafas perlahan sekali.", 10]
        ],
        done: "Selesai. Teruskan hari anda dengan tenang."
      }
    },
    print: "Cetak atau simpan sebagai PDF", clear: "Kosongkan",
    checkPrivacy: "Apa yang anda tanda atau tulis di sini kekal dalam telefon ini dan tidak dihantar ke mana-mana. Ia hilang apabila anda tutup halaman."
  },

  pages: {

    /* ================= BANTUAN SEGERA ================= */
    urgent: {
      title: "Bantuan Segera", icon: "🚨",
      blocks: [
        { t: "box", tone: "red", title: "Jika nyawa mungkin dalam bahaya sekarang", body: [
          { t: "p", x: "Hubungi **999** atau pergi ke Unit Kecemasan yang terdekat (Unit Kecemasan Hospital Serian) jika seseorang:" },
          { t: "ul", items: [
            "ada rancangan untuk menamatkan nyawanya, atau telah mencederakan diri",
            "telah mengambil ubat berlebihan, racun perosak atau racun lain, **walaupun dia nampak okay**. Sesetengah racun tidak menunjukkan tanda selama berjam-jam, sedangkan kerosakan sedang berlaku di dalam badan.",
            "mungkin mencederakan orang lain",
            "sangat gelisah, keliru atau luar biasa mengantuk",
            "mendengar suara atau mempercayai sesuatu yang membahayakan dirinya atau orang lain",
            "sakit dada, sangat susah bernafas, pengsan atau sawan"
          ] },
          { t: "call999" }
        ] },
        { t: "box", tone: "amber", title: "Sementara menunggu bantuan", body: [
          { t: "ul", items: [
            "Temani dia. Jangan tinggalkan dia seorang diri.",
            "Jika selamat, jauhkan ubat, benda tajam, tali, racun perosak dan racun lain.",
            "Bercakap dengan tenang. Anda tidak perlu cari kata-kata yang sempurna; kehadiran anda sudah membantu."
          ] }
        ] },
        { t: "box", tone: "teal", body: [
          { t: "p", x: "**Cubaan bunuh diri bukan lagi satu jenayah di Malaysia.** Mendapatkan bantuan, untuk diri sendiri atau orang lain, tidak akan menyebabkan sesiapa berdepan masalah dengan polis." }
        ] },
        { t: "h", x: "Perlu bercakap dengan seseorang sekarang?" },
        { t: "p", x: "Panggilan adalah sulit. Anda tidak perlu terangkan semuanya; cukup katakan anda perlu bercakap." },
        { t: "helplines" },
        { t: "box", tone: "blue", title: "Bukan kecemasan?", body: [
          { t: "p", x: "Contohnya: kesan sampingan ubat yang ringan, ubat hampir habis, simptom yang perlahan-lahan bertambah teruk, atau soalan tentang temujanji." },
          { t: "dept" },
          { t: "ul", items: [
            "Atau datang pada temujanji anda yang seterusnya dan bawa buku temujanji anda.",
            "Atau pergi ke Klinik Kesihatan yang berhampiran."
          ] }
        ] },
        { t: "box", tone: "amber", title: "Simpan racun perosak dengan selamat", body: [
          { t: "p", x: "Simpan bahan kimia ladang dalam tempat berkunci, di luar rumah, dalam bekas asalnya. Ini melindungi kanak-kanak dan sesiapa yang sedang melalui masa yang sukar." }
        ] },
        { t: "p", x: "*Laman web ini tidak dapat menerima mesej. Semasa krisis, gunakan nombor di atas atau 999. Nombor disemak: 18/09/2026.*" }
      ]
    },

    /* ================= TENANGKAN DIRI ================= */
    calm: {
      title: "Tenangkan Diri Sekarang", icon: "🫁",
      lead: "Pilih satu latihan. Kebanyakannya boleh dibuat sambil duduk, tanpa sesiapa perasan.",
      blocks: [
        { t: "box", tone: "amber", body: [
          { t: "p", x: "**Sebelum mula:** latihan ini membantu untuk tekanan, kerisauan dan panik harian. Ia tidak menggantikan rawatan anda. Jika anda ada masalah jantung atau paru-paru, sedang hamil, atau tidak pasti, tanya doktor atau jururawat dahulu sebelum cuba menahan nafas atau menyapu air sejuk ke muka." }
        ] },
        { t: "ex", id: "b46", name: "Pernafasan Perlahan (4-6)", time: "2–5 minit",
          when: "Cemas, risau, jantung berdebar, atau sebelum tidur.",
          steps: [
            "Duduk dengan selesa. Longgarkan pakaian yang ketat.",
            "Tarik nafas perlahan melalui hidung: kira 4.",
            "Hembus perlahan melalui mulut: kira 6.",
            "Pastikan hembusan lebih panjang daripada tarikan. Ulang selama 2–5 minit."
          ],
          notice: "Jantung berdegup lebih perlahan dan anda rasa lebih tenang atau mengantuk.",
          care: "Bernafas dengan lembut. Jangan paksa tarik nafas besar. Berhenti jika rasa pening.",
          tool: "breathe-46" },
        { t: "ex", id: "box", name: "Pernafasan Kotak", time: "2–4 minit",
          when: "Anda mahu ikut rentak yang tetap.",
          steps: ["Tarik nafas: kira 4.", "Tahan: kira 4.", "Hembus: kira 4.", "Tahan: kira 4, kemudian ulang."],
          care: "Jika anda ada masalah jantung atau paru-paru, darah tinggi, sedang hamil, atau rasa pening, jangan tahan nafas. Tarik dan hembus sahaja.",
          tool: "breathe-box" },
        { t: "ex", id: "g54321", name: "Latihan 5-4-3-2-1", time: "2–3 minit",
          when: "Panik, fikiran berlumba-lumba, atau rasa jauh atau \"tidak nyata\".",
          body: [{ t: "p", x: "Sebut 5 benda yang anda **nampak**, 4 yang anda boleh **sentuh**, 3 yang anda **dengar**, 2 yang anda **hidu**, dan 1 yang anda **rasa** di mulut." }],
          notice: "Anda rasa lebih \"di sini dan sekarang\".",
          care: "Tiada cara yang salah. Buat ikut kadar anda sendiri.",
          tool: "ground", toolLabel: "Buat langkah demi langkah" },
        { t: "ex", id: "cool", name: "Air Sejuk & Sentuhan", time: "1–3 minit",
          when: "Perasaan yang sangat kuat, atau rasa terasing.",
          steps: [
            "Alirkan air sejuk ke tangan dan pergelangan tangan, pegang minuman panas, atau pegang sesuatu yang bertekstur.",
            "Tumpukan perhatian pada rasanya: suhu, berat dan permukaannya."
          ],
          care: "Air sejuk pada tangan selamat untuk hampir semua orang." },
        { t: "ex", id: "face", name: "Sejuk pada Muka (pilihan lebih kuat)", time: "lebih kurang 30 saat",
          when: "Serangan panik yang sangat kuat.",
          steps: [
            "Percikkan air sejuk ke muka, atau letakkan kain basah yang sejuk atau pek ais berbalut kain di pipi.",
            "Biarkan selama lebih kurang 30 saat sambil bernafas perlahan."
          ],
          notice: "Jantung berdegup lebih perlahan dengan cepat. Ini perkara biasa.",
          care: "**Tanya doktor dahulu** jika anda ada penyakit jantung, makan ubat jantung atau darah tinggi, sedang hamil, atau pernah mengalami masalah pemakanan (eating disorder). Jangan letak ais terus pada kulit." },
        { t: "ex", id: "pmr", name: "Relaksasi Otot", time: "3–5 minit",
          when: "Badan tegang, rasa terlalu tertekan, atau sebelum tidur.",
          steps: [
            "Tegangkan satu bahagian badan dengan lembut (tangan, bahu, muka, perut atau kaki) selama 5 saat.",
            "Lepaskan selama 10 saat dan rasakan perbezaannya.",
            "Beralih ke bahagian seterusnya."
          ],
          care: "Tegang dengan lembut, jangan sampai sakit. Langkau bahagian yang sakit atau cedera.",
          tool: "pmr-guide", toolLabel: "Mula dengan panduan suara" },
        { t: "ex", id: "pause", name: "Rehat 1 Minit", time: "1 minit",
          when: "Saat sibuk atau tertekan.",
          steps: ["Berhenti.", "Rasakan kaki anda di lantai.", "Perhatikan satu bunyi, satu bau dan satu benda yang anda nampak.", "Hembus nafas perlahan sekali."],
          care: "Jika ingatan yang menyedihkan atau fikiran yang mengelirukan muncul, berhenti dan guna latihan 5-4-3-2-1.",
          tool: "pause-guide", toolLabel: "Mula dengan panduan suara" },
        { t: "ex", id: "count", name: "Permainan Mengira", time: "1–3 minit",
          when: "Kerisauan tidak mahu berhenti.",
          steps: ["Kira mundur dari 100, tolak 7 setiap kali, atau kira semua benda berwarna merah di sekeliling anda."],
          care: "Ini cara mengalih perhatian untuk menenangkan fikiran, bukan rawatan." },
        { t: "h", x: "🧘 Meditasi Berpandu" },
        { t: "p", x: "Cari tempat yang tenang. Pakai fon telinga jika ada, dan tekan **Bunyi latar** untuk bunyi hujan atau dengung lembut. Anda boleh buka mata dan berhenti bila-bila masa." },
        { t: "ex", id: "med-breath", name: "Nafas Berkesedaran", time: "3 minit",
          when: "Fikiran sibuk, mahu rasa lebih tenang dan fokus.",
          steps: ["Rehatkan perhatian pada nafas.", "Apabila fikiran melayang, bawa ia kembali dengan lembut."],
          care: "Jika ingatan yang menyedihkan muncul, buka mata dan guna latihan 5-4-3-2-1.",
          tool: "med-breath-guide", toolLabel: "Mula meditasi berpandu" },
        { t: "ex", id: "med-body", name: "Imbasan Badan", time: "5 minit",
          when: "Badan tegang, penat, atau sebelum tidur.",
          steps: ["Bawa perhatian perlahan-lahan dari tapak kaki hingga ke kepala.", "Perhatikan, dan biarkan setiap bahagian menjadi lembut."],
          care: "Langkau bahagian yang sakit atau cedera.",
          tool: "med-body-guide", toolLabel: "Mula meditasi berpandu" },
        { t: "ex", id: "med-place", name: "Tempat Yang Tenang", time: "5 minit",
          when: "Risau, tertekan, atau perlu rehat seketika daripada fikiran.",
          steps: ["Bayangkan tempat yang tenang dan selamat.", "Guna semua deria: lihat, dengar, rasa dan hidu."],
          care: "Jika tiada tempat yang terasa selamat, bayangkan tempat rekaan.",
          tool: "med-place-guide", toolLabel: "Mula meditasi berpandu" },
        { t: "ex", id: "med-kind", name: "Kebaikan & Kasih Sayang", time: "4 minit",
          when: "Rasa marah, sunyi, atau terlalu mengkritik diri sendiri.",
          steps: ["Hantar harapan yang baik kepada orang tersayang, diri sendiri, dan orang lain."],
          care: "Anda boleh guna kata-kata atau doa mengikut kepercayaan anda sendiri.",
          tool: "med-kind-guide", toolLabel: "Mula meditasi berpandu" },
        { t: "p", x: "Bagi ramai orang, berdoa atau bertafakur dengan tenang juga membawa ketenangan. Gunakan apa yang membantu anda." },
        { t: "card", title: "Masih tidak lega?", body: [
          { t: "p", x: "Latihan ini membantu, tetapi ia bukan rawatan. Jika perasaan ini kerap berlaku, beritahu pasukan anda pada temujanji seterusnya. Jika anda rasa tidak selamat, pergi ke [Bantuan Segera](#/urgent)." }
        ] }
      ]
    },

    /* ================= APA YANG SAYA RASA ================= */
    toolbox: {
      title: "Apa yang saya rasa?", icon: "🧰",
      lead: "Tekan perasaan yang paling hampir dengan anda untuk tahu apa yang boleh dicuba dahulu.",
      blocks: [
        { t: "situations", items: [
          { icon: "🌀", feel: "Saya rasa cemas",
            first: "[Pernafasan perlahan 4-6](#/breathe-46)",
            then: "[Rehat 1 minit](#/calm/pause)",
            care: "Berhenti jika rasa pening." },
          { icon: "⚡", feel: "Saya mengalami serangan panik",
            first: "Hembus nafas perlahan-lahan, kemudian buat [latihan 5-4-3-2-1](#/ground).",
            then: "[Sejuk pada muka](#/calm/face) selama lebih kurang 30 saat.",
            care: "Baca amaran jantung dahulu sebelum guna air sejuk pada muka. Jika ini serangan **pertama** anda, atau anda sakit dada, baca tanda amaran di halaman [Serangan panik](#/panic)." },
          { icon: "💭", feel: "Saya tak boleh berhenti risau",
            first: "Tulis kerisauan itu dan simpan untuk \"masa risau\" 15 minit anda setiap hari.",
            then: "[Permainan mengira](#/calm/count).",
            care: "Mengalih perhatian bukan penyelesaian. Beritahu pasukan anda jika kerisauan memenuhi kebanyakan hari anda." },
          { icon: "🌊", feel: "Saya rasa terlalu tertekan",
            first: "[Rehat 1 minit](#/calm/pause), kemudian pilih satu langkah kecil yang seterusnya.",
            then: "[Relaksasi otot](#/calm/pmr).",
            care: "Minta seseorang bantu anda dengan satu tugasan." },
          { icon: "🔥", feel: "Saya marah",
            first: "Beredar sebentar dan katakan: \"Saya akan datang balik dalam 20 minit untuk berbincang.\"",
            then: "[Pernafasan perlahan](#/breathe-46), berjalan kaki, atau air sejuk pada tangan.",
            care: "Tangguhkan mesej dan keputusan. Jauhkan diri daripada apa-apa yang boleh mencederakan." },
          { icon: "🌙", feel: "Saya tak boleh tidur",
            first: "Jika sudah terjaga lebih kurang 20 minit, bangun dan buat sesuatu yang tenang.",
            then: "[Relaksasi otot](#/calm/pmr) dalam cahaya malap. Lihat juga [Tidur](#/sleep).",
            care: "Jangan guna telefon, dan jangan asyik tengok jam." },
          { icon: "🌫️", feel: "Saya rasa terasing atau tidak nyata",
            first: "[Air sejuk & sentuhan](#/calm/cool).",
            then: "[Latihan 5-4-3-2-1](#/ground). Sebut tarikh hari ini dan \"Saya selamat.\"",
            care: "Dalam keadaan ini, buat latihan 5-4-3-2-1 dahulu sebelum latihan pernafasan." }
        ] }
      ]
    },

    /* ================= FAHAMI ================= */
    learn: {
      title: "Fahami kesihatan mental saya", tileTitle: "Fahami kesihatan mental", icon: "🧠",
      lead: "Masalah kesihatan mental adalah biasa dan boleh dirawat. Meminta bantuan ialah tanda kekuatan.",
      blocks: [
        { t: "links", items: ["anxiety", "panic", "stress", "depression", "sleep"] }
      ]
    },

    anxiety: {
      title: "Kebimbangan (anxieti)", short: "Risau, tegang dan badan sentiasa berjaga-jaga", icon: "🌀", parent: "learn", edu: true,
      blocks: [
        { t: "h", x: "Apakah itu?" },
        { t: "p", x: "Kebimbangan ialah sistem penggera badan anda. Kadang-kadang penggera ini berbunyi walaupun tiada bahaya sebenar, atau ia tidak mahu berhenti." },
        { t: "ul", items: [
          "**Badan:** jantung berdebar, dada rasa ketat, berpeluh, menggeletar, perut tidak selesa, otot tegang, susah tidur.",
          "**Fikiran:** \"sesuatu yang buruk akan berlaku\", susah fokus, rasa tidak tenteram."
        ] },
        { t: "h", x: "Apa yang memburukkannya?" },
        { t: "ul", items: [
          "Mengelak perkara yang menakutkan anda",
          "Terlalu banyak kopi, teh atau minuman tenaga",
          "Kurang tidur",
          "Alkohol, termasuk tuak (ia menenangkan pada mulanya, kemudian memburukkan kebimbangan)",
          "Bertanya \"betul ke saya okay?\" berulang kali",
          "Terlalu banyak membaca berita yang menakutkan"
        ] },
        { t: "h", x: "Apa yang boleh saya buat?" },
        { t: "ul", items: [
          "[Pernafasan perlahan 4-6](#/breathe-46)",
          "Tulis kerisauan sebaik ia datang. Lihat semula hanya semasa \"masa risau\" 15 minit setiap hari.",
          "Ambil langkah kecil ke arah perkara yang anda elakkan",
          "Kekal aktif",
          "Bercakap dengan orang yang anda percayai",
          "Teruskan rawatan anda"
        ] },
        { t: "box", tone: "blue", title: "Bila perlu dapatkan bantuan?", body: [
          { t: "p", x: "Beritahu pasukan anda jika:" },
          { t: "ul", items: [
            "kebimbangan menghalang anda bekerja, tidur atau menjaga keluarga",
            "ia berlaku hampir setiap hari selama beberapa minggu",
            "anda guna alkohol atau pil untuk mengatasinya"
          ] },
          { t: "p", x: "Ada fikiran untuk mencederakan diri → [Bantuan Segera](#/urgent)." }
        ] }
      ]
    },

    panic: {
      title: "Serangan panik", short: "Gelombang ketakutan mengejut yang akan berlalu", icon: "⚡", parent: "learn", edu: true,
      blocks: [
        { t: "h", x: "Apakah itu?" },
        { t: "p", x: "Gelombang ketakutan yang datang secara tiba-tiba dan kuat. Ia menakutkan, tetapi ia sendiri tidak berbahaya. Biasanya ia paling teruk dalam masa lebih kurang 10 minit, kemudian reda dalam 20–30 minit berikutnya." },
        { t: "h", x: "Semasa serangan" },
        { t: "ol", items: [
          "Duduk di tempat yang selamat.",
          "Hembus nafas perlahan-lahan. Pastikan hembusan lebih panjang daripada tarikan.",
          "Buat [latihan 5-4-3-2-1](#/ground).",
          "Katakan pada diri sendiri: \"Ini panik. Ia akan berlalu.\"",
          "Biarkan perasaan itu naik dan turun seperti ombak."
        ] },
        { t: "box", tone: "red", title: "Jangan anggap ia \"cuma cemas\"", body: [
          { t: "p", x: "Hubungi **999** atau pergi ke Unit Kecemasan jika:" },
          { t: "ul", items: [
            "ini **kali pertama** anda mengalami simptom ini",
            "sakit atau rasa tekanan di dada merebak ke lengan, rahang, leher atau belakang",
            "sakit dada disertai peluh, loya atau muntah",
            "sakit bermula semasa membuat kerja berat, atau tidak reda apabila berehat",
            "anda pengsan, sangat sesak nafas, atau bibir menjadi biru atau kelabu",
            "anda sudah berumur, atau ada penyakit jantung, kencing manis, darah tinggi atau kolesterol tinggi, atau anda merokok",
            "simptomnya berbeza daripada serangan biasa anda",
            "**Wanita:** serangan jantung mungkin muncul sebagai rasa letih luar biasa, sesak nafas, loya, atau rasa tidak selesa di belakang atau rahang, tanpa sakit dada yang kuat"
          ] },
          { t: "p", x: "**Rasa cemas tidak bermakna tiada masalah jantung. Jika ragu-ragu, dapatkan pemeriksaan.**" },
          { t: "p", x: "**Tanda strok ialah kecemasan yang berbeza.** Hubungi 999 jika muka senget, sebelah badan lemah, atau percakapan pelat." },
          { t: "call999" }
        ] },
        { t: "h", x: "Untuk jangka panjang" },
        { t: "p", x: "Amalkan [pernafasan perlahan](#/breathe-46) setiap hari, bukan hanya semasa serangan. Mengelak tempat tertentu akan membuat panik lebih kuat dari semasa ke semasa. Tanya pasukan anda tentang terapi bercakap (kaunseling) atau ubat." }
      ]
    },

    stress: {
      title: "Tekanan (stres)", short: "Apabila tekanan hidup bertimbun", icon: "🪨", parent: "learn", edu: true,
      blocks: [
        { t: "h", x: "Tanda-tanda tekanan" },
        { t: "p", x: "Rasa tegang, cepat marah, letih, sakit kepala, susah tidur, makan lebih atau kurang daripada biasa." },
        { t: "h", x: "Punca biasa" },
        { t: "p", x: "Wang, kerisauan tentang ladang atau hasil tuaian, tekanan keluarga, menjaga ahli keluarga yang sakit." },
        { t: "h", x: "Lima tunjang" },
        { t: "ul", items: [
          "**Tidur:** tidur dan bangun pada waktu yang tetap.",
          "**Bergerak:** berjalan 20–30 minit, berkebun atau buat kerja rumah.",
          "**Berehat:** latihan pernafasan, berdoa, masa bersendirian yang tenang.",
          "**Selesaikan:** guna lima langkah di bawah.",
          "**Berhubung:** bercakap dengan keluarga, kawan, atau pemimpin agama atau masyarakat."
        ] },
        { t: "h", x: "Lima langkah menyelesaikan masalah" },
        { t: "ol", items: [
          "Nyatakan masalah itu dengan jelas.",
          "Senaraikan semua penyelesaian yang mungkin.",
          "Timbang baik dan buruk setiap satu.",
          "Pilih satu dan buat rancangan kecil.",
          "Cuba, lihat hasilnya, dan cuba cara lain jika perlu."
        ] },
        { t: "h", x: "Elakkan" },
        { t: "p", x: "Alkohol atau tuak, berjudi, dan pil tidur yang bukan dipreskripsi untuk anda." },
        { t: "box", tone: "blue", title: "Bila perlu dapatkan bantuan?", body: [
          { t: "ul", items: [
            "Tekanan telah menjejaskan tidur, kerja atau hubungan anda lebih daripada 2 minggu",
            "Anda guna alkohol atau pil untuk mengatasinya",
            "Anda rasa putus asa (pergi ke [Bantuan Segera](#/urgent) jika ada fikiran untuk menamatkan nyawa)"
          ] }
        ] }
      ]
    },

    depression: {
      title: "Murung & kemurungan", short: "Lebih daripada rasa sedih", icon: "🌧️", parent: "learn", edu: true,
      blocks: [
        { t: "h", x: "Apa rasanya?" },
        { t: "p", x: "Kemurungan lebih daripada rasa sedih. Anda mungkin rasa letih sepanjang masa, hilang minat pada perkara yang dulu anda suka, atau cepat marah. Ia juga boleh muncul pada badan: sakit-sakit badan, hilang selera makan, atau rasa lambat bergerak. Ini simptom yang sebenar." },
        { t: "h", x: "Adakah ini kemurungan?" },
        { t: "p", x: "Jika beberapa tanda ini berlaku hampir sepanjang hari, hampir setiap hari, selama **2 minggu atau lebih**, dapatkan pemeriksaan daripada pasukan anda." },
        { t: "h", x: "Apa yang boleh saya buat, bersama rawatan saya?" },
        { t: "ul", items: [
          "Buat **satu perkara kecil** hari ini. Bertindak dahulu, rasa lebih baik kemudian. Jangan tunggu sampai anda rasa mahu.",
          "Setiap hari, rancang satu perkara yang anda suka dan satu tugasan yang berguna.",
          "**Berjalan kaki setiap hari**, mulakan dengan 10 minit. Ini antara perkara yang paling terbukti membantu.",
          "Keluar rumah dan dapatkan cahaya pagi.",
          "Makan pada waktu yang tetap.",
          "Terus berhubung dengan keluarga atau kawan, walaupun sekejap.",
          "Elakkan alkohol."
        ] },
        { t: "h", x: "Tentang ubat" },
        { t: "ul", items: [
          "Ubat antidepresan mengambil masa. Ada orang nampak perubahan kecil dalam 1–2 minggu; kesan penuh boleh mengambil masa sehingga 6 minggu.",
          "Jangan berhenti hanya kerana belum rasa perubahan. Bincang dengan doktor dahulu.",
          "Selepas anda rasa lebih baik, rawatan biasanya diteruskan **sekurang-kurangnya 6 bulan**, dan lebih lama jika anda pernah mengalami kemurungan sebelum ini. Doktor anda akan membimbing anda."
        ] },
        { t: "box", tone: "blue", title: "Bila perlu dapatkan bantuan?", body: [
          { t: "ul", items: [
            "Simptom berlarutan lebih daripada 2 minggu, atau semakin teruk",
            "Anda rasa putus asa",
            "Rasa letih atau sakit-sakit badan tidak berkurang dan tiada punca lain"
          ] },
          { t: "p", x: "Ada fikiran untuk mencederakan diri atau menamatkan nyawa → [Bantuan Segera](#/urgent) sekarang." }
        ] }
      ]
    },

    sleep: {
      title: "Tidur & kesihatan mental", tileTitle: "Tidur", short: "Tabiat yang membantu, dan tanda amaran", icon: "😴", edu: true,
      blocks: [
        { t: "h", x: "Kenapa ia penting" },
        { t: "p", x: "Kurang tidur memburukkan emosi, dan emosi yang murung memburukkan tidur. Bagi sesetengah penyakit, seperti gangguan bipolar atau psikosis, perubahan tidur yang mengejut ialah tanda amaran awal. Contohnya **tidur jauh lebih sedikit tetapi rasa penuh tenaga**, atau **tidur jauh lebih banyak daripada biasa**. Beritahu pasukan anda, walaupun anda rasa sihat." },
        { t: "h", x: "Tabiat ini membantu, bersama rawatan anda" },
        { t: "ul", items: [
          "Bangun pada waktu yang sama setiap hari, termasuk hujung minggu.",
          "Guna katil untuk tidur sahaja, bukan untuk telefon atau untuk risau.",
          "Berhenti minum kopi, teh, kola dan minuman tenaga **sekurang-kurangnya 8 jam sebelum tidur**. Jika tidur pukul 10 malam, jangan minum selepas pukul 2 petang.",
          "Jangan guna skrin 30–60 minit sebelum tidur.",
          "Pastikan bilik sejuk, gelap dan senyap.",
          "Elakkan makan berat, alkohol dan merokok menjelang waktu tidur.",
          "Jika tidur siang, kurang daripada 30 minit dan sebelum pukul 3 petang."
        ] },
        { t: "h", x: "Tak boleh tidur?" },
        { t: "p", x: "Jika sudah terjaga lebih kurang 20 minit, bangun. Buat sesuatu yang tenang dalam cahaya malap, seperti [relaksasi otot](#/calm/pmr), dan kembali ke katil apabila mengantuk." },
        { t: "box", tone: "amber", title: "Keselamatan pil tidur", body: [
          { t: "p", x: "Jangan sekali-kali ambil pil lebih daripada yang diberi atau pil orang lain, dan jangan campur dengan alkohol. Jika dos anda tidak berkesan, beritahu pasukan anda." }
        ] },
        { t: "box", tone: "blue", title: "Bila perlu dapatkan bantuan?", body: [
          { t: "ul", items: [
            "Tidur tidak bertambah baik selepas mencuba tabiat ini selama beberapa minggu",
            "Ada perubahan besar secara tiba-tiba dalam jumlah tidur anda",
            "Kurang tidur menjejaskan emosi atau kehidupan harian anda"
          ] }
        ] }
      ]
    },

    /* ================= UBAT ================= */
    medicine: {
      title: "Ubat saya", icon: "💊", edu: true,
      lead: "Maklumat umum sahaja. Doktor dan ahli farmasi anda akan menasihati tentang ubat anda sendiri.",
      blocks: [
        { t: "h", x: "Kenapa ubat membantu" },
        { t: "p", x: "Ubat boleh melegakan simptom dan membantu mengelakkannya berulang. Ia paling berkesan bersama sokongan pasukan rawatan dan keluarga, serta rutin yang sihat. Ia tidak mengubah diri anda." },
        { t: "h", x: "Cara mengambilnya" },
        { t: "ul", items: [
          "Ambil seperti yang diarahkan oleh doktor atau ahli farmasi, pada waktu yang sama setiap hari.",
          "Penggera telefon atau kotak ubat mingguan boleh membantu.",
          "Ahli keluarga boleh bantu mengingatkan anda."
        ] },
        { t: "h", x: "Terlupa satu dos?" },
        { t: "p", x: "Tindakan yang betul bergantung pada ubat anda. Baca label atau tanya farmasi. **Jangan sekali-kali ambil dua dos sekali gus untuk menggantikannya**, kecuali doktor atau ahli farmasi menyuruh anda." },
        { t: "h", x: "Kesan sampingan" },
        { t: "p", x: "Kebanyakannya ringan dan hilang dalam 1–2 minggu, seperti mengantuk, mulut kering atau loya sedikit. Beritahu pasukan anda tentang apa-apa yang mengganggu anda. Selalunya mereka boleh membantu." },
        { t: "box", tone: "red", title: "Dapatkan bantuan pada hari yang sama, atau pergi ke Unit Kecemasan, jika anda mengalami:", body: [
          { t: "ol", items: [
            "Ruam bersama demam, melecur, atau ulser di mulut atau mata",
            "Otot sangat kaku bersama demam atau keliru",
            "Demam tinggi, berpeluh, menggeletar dan keliru tidak lama selepas mula atau menambah dos ubat",
            "Demam bersama sakit tekak atau ulser mulut",
            "Jantung berdegup laju semasa berehat, sakit dada, atau sesak nafas",
            "Menggeletar, tidak stabil, muntah atau cirit-birit, penglihatan kabur atau keliru, pada masa yang sama",
            "Bengkak pada muka, bibir, lidah atau tekak, atau susah bernafas",
            "Mata atau kulit kuning, air kencing gelap, atau sakit perut yang teruk",
            "Sembelit teruk (tidak buang air besar beberapa hari), perut kembung atau muntah",
            "Sawan atau pengsan",
            "Sangat gelisah, tidak boleh duduk diam, terutamanya jika ada fikiran untuk mencederakan diri",
            "Zakar tegang yang sakit lebih daripada 4 jam"
          ] },
          { t: "p", x: "**Fikiran bunuh diri yang baru atau semakin teruk**, terutamanya dalam kalangan orang muda pada minggu-minggu awal ubat baru atau selepas dos ditukar → [Bantuan Segera](#/urgent)." },
          { t: "p", x: "Semua ini jarang berlaku. Jika ragu-ragu, telefon atau datang. Kami lebih suka memeriksa." }
        ] },
        { t: "h", x: "Jangan berhenti secara tiba-tiba" },
        { t: "p", x: "Berhenti secara tiba-tiba boleh menyebabkan simptom kembali atau kesan tarikan (withdrawal). Bagi sesetengah penyakit, risiko kambuh lebih dua kali ganda selepas berhenti ubat. Jika anda mahu kurangkan atau berhenti, rancang bersama pasukan anda; biasanya ia dibuat secara perlahan-lahan." },
        { t: "h", x: "Beritahu pasukan anda tentang" },
        { t: "ul", items: [
          "Ubat lain, vitamin dan makanan tambahan",
          "Ubat herba atau tradisional (jamu, ubat kampung, ketum), kerana sesetengahnya mengubah kesan ubat anda",
          "Alkohol",
          "Hamil, menyusu badan, atau merancang untuk hamil. Jangan berhenti atau tukar ubat sendiri."
        ] },
        { t: "h", x: "Suntikan" },
        { t: "p", x: "Tulis tarikh suntikan seterusnya di tempat yang anda nampak. Jika tidak dapat datang, telefon sebelum tarikh itu." },
        { t: "h", x: "Keselamatan di rumah" },
        { t: "p", x: "Simpan ubat jauh daripada kanak-kanak. Jika ada yang risau tentang keselamatan, ahli keluarga yang dipercayai boleh menyimpan ubat dan memberikan setiap dos. Minta bantuan kami untuk mengaturnya." },
        { t: "box", tone: "blue", title: "Hubungi kami jika", body: [
          { t: "ul", items: ["Ubat anda hampir habis", "Kesan sampingan merisaukan anda", "Anda rasa ubat tidak berkesan"] },
          { t: "dept" }
        ] }
      ]
    },

    /* ================= TEMUJANJI ================= */
    appointment: {
      title: "Sedia untuk temujanji", icon: "📅",
      lead: "Isi sebelum temujanji anda, kemudian cetak atau tunjukkan di telefon anda.",
      blocks: [
        { t: "checklist", items: [
          { q: "Sejak temujanji lepas, saya rasa:", opts: ["Lebih baik", "Sama", "Lebih teruk"] },
          { q: "Simptom baru atau yang berubah:" },
          { q: "Tidur:" },
          { q: "Selera makan dan berat badan:" },
          { q: "Ubat diambil seperti yang diarahkan:", opts: ["Ya", "Kebanyakan masa", "Kerap terlupa"] },
          { q: "Kesan sampingan:" },
          { q: "Masalah fizikal baru:", hint: "Contohnya demam, ruam, bengkak, sakit perut, jantung berdegup laju." },
          { q: "Alkohol, merokok atau bahan lain:" },
          { q: "Apa yang membantu saya:" },
          { q: "Apa yang memburukkan keadaan:" },
          { q: "Peristiwa besar (kerja, keluarga, wang, kesihatan):" },
          { q: "Fikiran untuk mencederakan diri:", opts: ["Tiada", "Ada sedikit", "Kuat, atau ada rancangan"],
            hint: "Jika ada sedikit atau kuat: **beritahu kakitangan sebaik anda tiba**. Jika anda rasa tidak selamat sekarang, lihat [Bantuan Segera](#/urgent).", text: false },
          { q: "3 soalan utama saya untuk doktor:" }
        ] },
        { t: "box", tone: "blue", title: "Bawa bersama", body: [
          { t: "ul", items: [
            "Buku temujanji anda",
            "Semua ubat anda, dalam paketnya",
            "MyKad anda",
            "Senarai semak ini",
            "Ahli keluarga, jika itu membantu anda"
          ] }
        ] }
      ]
    },

    /* ================= KELUARGA ================= */
    family: {
      title: "Keluarga & penjaga", icon: "👨‍👩‍👧",
      lead: "Anda ialah antara bahagian paling penting dalam rawatan orang tersayang. Halaman ini memberi cara mudah untuk membantu, dan untuk menjaga diri anda juga.",
      blocks: [
        { t: "h", x: "Bagaimana saya boleh membantu?" },
        { t: "ul", items: [
          "Dengar tanpa tergesa-gesa untuk menyelesaikan masalah.",
          "Pastikan suasana rumah tenang dan teratur. Rumah yang tenang membantu pemulihan.",
          "Galakkan rawatan dengan lembut. Ingatkan, jangan berleter.",
          "Bantu dengan rutin: makan, tidur, aktiviti ringan.",
          "Libatkan orang tersayang dalam keputusan tentang rawatannya.",
          "Ramai keluarga juga berdoa atau mendapatkan bantuan tradisional atau kerohanian. Itu tidak mengapa. Teruskan ubat, dan beritahu pasukan rawatan tentang apa-apa lagi yang anda cuba."
        ] },
        { t: "h", x: "Apa yang patut dan tidak patut dikatakan" },
        { t: "ul", items: [
          "**Membantu:** \"Saya ada di sini untuk awak.\" \"Ini bukan salah awak.\" \"Ambil masa awak.\" \"Apa yang boleh membantu sekarang?\"",
          "**Elakkan:** \"Sudahlah, lupakan saja.\" \"Semua itu dalam kepala awak saja.\" \"Iman awak lemah.\" Membandingkan dengan orang lain, dan ugutan."
        ] },
        { t: "p", x: "Jika dia percaya sesuatu yang nampak tidak benar (contohnya, ada orang sedang memerhatikannya), anda tidak perlu berbalah. Balas perasaannya: *\"Itu kedengaran menakutkan. Saya ada di sini dengan awak.\"*" },
        { t: "p", x: "Rasa risau selalunya keluar sebagai kritikan. Cuba luahkan apa yang anda rasa (\"Saya risau tentang awak\") dan bukan apa kesalahannya." },
        { t: "h", x: "Tanda amaran" },
        { t: "ul", items: [
          "Perubahan besar pada tidur",
          "Menjauhkan diri daripada orang lain",
          "Tidak makan ubat",
          "Menjadi curiga",
          "Mendengar atau melihat sesuatu yang orang lain tidak dengar atau lihat",
          "Mudah marah",
          "Tidak mandi atau tidak makan",
          "Bercakap tentang kematian"
        ] },
        { t: "box", tone: "teal", body: [
          { t: "p", x: "**Setiap orang ada corak tersendiri.** Sebagai keluarga, tulis apa yang berlaku dalam minggu-minggu sebelum kali terakhir dia kambuh, supaya anda dapat mengesannya lebih awal pada masa akan datang. Hubungi pasukan rawatan awal; jangan tunggu keadaan menjadi lebih teruk." }
        ] },
        { t: "h", x: "Membantu dengan ubat" },
        { t: "ul", items: [
          "Jadikan ubat sebahagian daripada rutin harian, dan guna kotak ubat.",
          "Perhatikan kesan sampingan dan beritahu pasukan rawatan. Jangan hentikan ubat begitu saja.",
          "Jangan paksa. Bincang dengan tenang tentang apa-apa kerisauan.",
          "Jika dia enggan makan ubat, beritahu pasukan rawatan. Jangan sorokkan."
        ] },
        { t: "box", tone: "red", title: "Jika keadaan menjadi lebih teruk di rumah", body: [
          { t: "ul", items: [
            "Bertenang. Bercakap perlahan dan lembut. Beri ruang; jangan kepung dia.",
            "Jika selamat, alihkan pisau, racun perosak, tali dan ubat yang berlebihan secara senyap.",
            "Jika anda risau tentang bunuh diri, **tanya secara terus**: *\"Adakah awak terfikir untuk menamatkan nyawa awak?\"* Bertanya tidak akan menanam idea itu dalam fikirannya. Ia membuka pintu kepada bantuan.",
            "Jangan tinggalkan dia seorang diri.",
            "Hubungi **999** semasa kecemasan. Hubungi pasukan rawatan pada waktu pejabat.",
            "Jika orang tersayang sangat memerlukan bantuan tetapi enggan datang, pasukan hospital boleh membimbing anda tentang langkah yang betul. Telefon mereka, atau bawa dia ke Unit Kecemasan."
          ] },
          { t: "call999" }
        ] },
        { t: "h", x: "Menjaga diri anda" },
        { t: "ul", items: [
          "Ramai penjaga rasa letih, risau atau murung. Ini perkara biasa, bukan satu kegagalan.",
          "Jaga tidur, makan dan pemeriksaan kesihatan anda sendiri.",
          "Kongsi tanggungjawab dengan ahli keluarga lain, dan ambil masa rehat.",
          "Bercakap dengan seseorang, atau guna talian bantuan di halaman [Bantuan Segera](#/urgent)."
        ] }
      ]
    },

    /* ================= TENTANG ================= */
    about: {
      title: "Tentang laman ini", icon: "ℹ️",
      blocks: [
        { t: "p", x: "Laman ini memberi anda dan keluarga maklumat yang mudah dan boleh dipercayai, serta latihan menenangkan diri untuk digunakan antara temujanji klinik." },
        { t: "p", x: "Ia menyokong, tetapi tidak menggantikan, rawatan daripada doktor dan pasukan anda. Ia tidak boleh memberi nasihat perubatan peribadi." },
        { t: "h", x: "Privasi anda" },
        { t: "p", x: "Kami tidak mengumpul, menyimpan atau berkongsi sebarang maklumat tentang anda. Kami tidak menggunakan kuki. Tiada log masuk. Apa sahaja yang anda tanda atau tulis kekal dalam telefon anda." },
        { t: "p", x: "Laman ini hanya mengingati pilihan bahasa dan saiz tulisan anda, dalam telefon anda sendiri." },
        { t: "h", x: "Disediakan oleh" },
        { t: "p", x: "Unit Psikiatri & Kesihatan Mental, Hospital Serian, Sarawak." },
        { t: "p", x: "Kandungan berdasarkan Garis Panduan Amalan Klinikal Kementerian Kesihatan Malaysia jika ada, serta panduan antarabangsa (WHO, NICE) dan kajian." },
        { t: "h", x: "Semakan" },
        { t: "p", x: "Status: **draf**, menunggu kelulusan klinikal Ketua Jabatan." },
        { t: "p", x: "Kandungan disemak: 18/09/2026. Nombor talian bantuan disemak: 18/09/2026." },
        { t: "h", x: "Kecemasan" },
        { t: "p", x: "Laman web ini tidak dapat menerima mesej atau memberi bantuan kecemasan. Semasa kecemasan, hubungi **999** atau lihat [Bantuan Segera](#/urgent)." }
      ]
    }
  }
};
