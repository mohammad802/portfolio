// ============================================================
// Portfolio works — به زبان‌های EN و FA
// برای اضافه کردن ویدیو: یه بلوک کپی کن و فایل‌ها رو بذار
// توی پوشه videos/ و thumbs/
// ============================================================
"use strict";

const WORKS = [
  {
    video: "videos/34845729.mp4",
    thumb: "thumbs/34845729.jpg",
    tags: ["Premiere Pro", "Editing"],
    title: { en: "Cinematic Edit Reel", fa: "ریل تدوین سینمایی" },
    desc: {
      en: "Fast-paced cinematic cut with rhythm-synced transitions.",
      fa: "کات سینمایی پرانرژی با ترنزیشن‌های هماهنگ با ریتم."
    }
  },
  {
    video: "videos/5092427.mp4",
    thumb: "thumbs/5092427.jpg",
    tags: ["After Effects", "Motion"],
    title: { en: "Motion Graphics Promo", fa: "موشن گرافیک تبلیغاتی" },
    desc: {
      en: "Clean animated promo built entirely in After Effects.",
      fa: "پرومو انیمیشنی تمیز، کاملاً ساخته‌شده در افترافکت."
    }
  },
  {
    video: "videos/8100345.mp4",
    thumb: "thumbs/8100345.jpg",
    tags: ["Color Grading", "Post"],
    title: { en: "Color Grading Showreel", fa: "نمونه رنگ‌آمیزی حرفه‌ای" },
    desc: {
      en: "Before/after grading — mood, tone and atmosphere.",
      fa: "رنگ‌آمیزی قبل/بعد — حس، لحن و اتمسفر."
    }
  },
  {
    video: "videos/1536323.mp4",
    thumb: "thumbs/1536323.jpg",
    tags: ["Short Form", "Reels"],
    title: { en: "Social Media Short", fa: "شورت‌فرم شبکه اجتماعی" },
    desc: {
      en: "Vertical short-form edit optimized for reels & TikTok.",
      fa: "ادیت عمودی بهینه برای ریلز و تیک‌تاک."
    }
  },
  {
    video: "videos/3736793.mp4",
    thumb: "thumbs/3736793.jpg",
    tags: ["Gaming", "Montage"],
    title: { en: "Gaming Montage", fa: "مانتاژ گیمینگ" },
    desc: {
      en: "Gameplay highlights with beat-synced cuts and effects.",
      fa: "هایلایت گیم‌پلی با کات‌های سینک‌شده با بیت و افکت."
    }
  },
  {
    video: "videos/7699548.mp4",
    thumb: "thumbs/7699548.jpg",
    tags: ["Sound Design", "Story"],
    title: { en: "Story-driven Piece", fa: "اثر روایی" },
    desc: {
      en: "Narrative edit where sound design carries the story.",
      fa: "تدوین روایی که صدا داستان را جلو می‌برد."
    }
  }
];

// UI translations
const I18N = {
  en: {
    dir: "ltr",
    badge: "✂️ Available for new projects",
    hello: "Hi, I'm",
    name: "Mohammad",
    role: "<b>Video Editor</b> — Premiere Pro · After Effects · Motion Design",
    ctaWorks: "🎬 View My Work",
    ctaContact: "💬 Hire Me",
    aboutTitle: "About Me",
    aboutHtml: `I've been living in the world of editing for years — from fast, rhythmic gameplay cuts to clean motion graphics and professional color grading. My main tools are <b>Premiere Pro 2025</b> and <b>After Effects 2025</b>, and I treat audio seriously with dedicated gear (EVO 4 + Audio-Technica).<br><br>Every project is a new challenge for me: finding that one <b>moment</b> that glues the audience to their seat.`,
    skills: ["🎞 Premiere Pro 2025","✨ After Effects 2025","🎨 Color Grading","🔊 Sound Design","🎮 Gaming Content","📱 Social Media","⚡ Short Form / Reels"],
    worksTitle: "Selected Work",
    contactTitle: "Get In Touch",
    telegram: "Telegram",
    instagram: "Instagram",
    email: "Email",
    footer: "Crafted with ❤️ by Mohammad · © 2026"
  },
  fa: {
    dir: "rtl",
    badge: "✂️ آماده‌ی پروژه‌ی جدید",
    hello: "سلام، من",
    name: "محمد",
    role: "<b>تدوینگر ویدیو</b> — پریمیر · افترافکت · موشن گرافیک",
    ctaWorks: "🎬 دیدن نمونه‌کارها",
    ctaContact: "💬 سفارش پروژه",
    aboutTitle: "درباره‌ی من",
    aboutHtml: `سال‌هاست توی دنیای تدوین زندگی می‌کنم — از کات‌های سریع و ریتمیک گیم‌پلی تا موشن گرافیک تمیز و رنگ‌آمیزی حرفه‌ای. ابزار اصلی من <b>Premiere Pro 2025</b> و <b>After Effects 2025</b> هست و روی صدا هم با تجهیزات اختصاصی (EVO 4 + Audio-Technica) کار می‌کنم.<br><br>هر پروژه برام یه چالش تازه‌ست: پیدا کردن اون <b>لحظه</b>‌ای که مخاطب رو می‌خوابونه به صندلی.`,
    skills: ["🎞 Premiere Pro 2025","✨ After Effects 2025","🎨 Color Grading","🔊 Sound Design","🎮 گیم‌پلی و گیمینگ","📱 محتوای شبکه‌های اجتماعی","⚡ شورت‌فرم / Reels"],
    worksTitle: "نمونه‌کارها",
    contactTitle: "تماس با من",
    telegram: "تلگرام",
    instagram: "اینستاگرام",
    email: "ایمیل",
    footer: "ساخته‌شده با ❤️ توسط محمد · © ۲۰۲۶"
  }
};
