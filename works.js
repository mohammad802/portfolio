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
    big: { en: "EDIT", fa: "تدوین" },
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
    big: { en: "MOTION", fa: "موشن" },
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
    big: { en: "COLOR", fa: "رنگ" },
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
    big: { en: "REELS", fa: "ریلز" },
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
    big: { en: "GAME", fa: "گیم" },
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
    big: { en: "STORY", fa: "روایت" },
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
    aboutHtml: `I'm a <b>21-year-old video editor from Iran</b> with <b>4+ years of hands-on experience</b> delivering edits that hold attention and drive results. From fast-cut gaming montages to polished brand promos, I bring broadcast-level pacing, clean motion graphics and cinematic color to every frame.<br><br>I work in <b>Premiere Pro 2025</b> and <b>After Effects 2025</b>, take sound seriously with professional gear (EVO 4 + Audio-Technica), and communicate fluently in <b>English</b> — so working with international clients is smooth, fast and deadline-safe.<br><br>Your footage deserves more than cuts. It deserves a <b>story</b>.`,
    skills: ["🎞 Premiere Pro 2025","✨ After Effects 2025","🎨 Color Grading","🔊 Sound Design","🎮 Gaming Content","📱 Social Media","⚡ Short Form / Reels"],
    worksTitle: "Selected Work",
    contactTitle: "Get In Touch",
    phone: "Phone",
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
    aboutHtml: `من <b>محمد</b> هستم، <b>۲۱ ساله</b> و <b>۴ سال سابقه‌ی تدوین حرفه‌ای</b> دارم — از مانتاژهای گیمینگ پرانرژی تا پروموهای برندی و ریلزهایی که ویو می‌گیرن. اگه دنبال کسی هستی که ویدیوت رو «قشنگ» کنه، من دنبالم اینکه <b>فروش و دیده‌شدن</b> بسازه.<br><br>با <b>Premiere Pro 2025</b> و <b>After Effects 2025</b> کار می‌کنم، صدای تمیز دارم (EVO 4 + Audio-Technica)، تحویل به‌وقته و تا رضایت کامل تو کنارتم.<br><br><b>پروژه‌ت رو بده، نتیجه‌ش حرف حسابه.</b>`,
    skills: ["🎞 Premiere Pro 2025","✨ After Effects 2025","🎨 Color Grading","🔊 Sound Design","🎮 گیم‌پلی و گیمینگ","📱 محتوای شبکه‌های اجتماعی","⚡ شورت‌فرم / Reels"],
    worksTitle: "نمونه‌کارها",
    contactTitle: "تماس با من",
    phone: "تلفن",
    telegram: "تلگرام",
    instagram: "اینستاگرام",
    email: "ایمیل",
    footer: "ساخته‌شده با ❤️ توسط محمد · © ۲۰۲۶"
  }
};
