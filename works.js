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


// سه سطح خدمات — بدون قیمت (مشتری پیام میده)
const TIERS = [
  {
    key: "A", theme: "tier-a", popular: false,
    name: { en: "Tier A — Essential Cut", fa: "سطح A — کات اصولی" },
    tagline: { en: "Clean, tight editing for daily content.", fa: "تدوین تمیز و جمع‌وجور برای محتوای روزمره." },
    features: {
      en: ["Up to 60s video", "Cuts & pacing", "Basic color correction", "Music sync", "1 revision round"],
      fa: ["ویدیو تا ۶۰ ثانیه", "کات و ریتم", "تصحیح رنگ پایه", "سینک موسیقی", "یک دور اصلاح"]
    }
  },
  {
    key: "B", theme: "tier-b", popular: true,
    name: { en: "Tier B — Creator Pro", fa: "سطح B — خالق حرفه‌ای" },
    tagline: { en: "The full package creators grow with.", fa: "پکیج کامل برای رشد کریتورها." },
    features: {
      en: ["Up to 10 min video", "Advanced pacing & effects", "Full color grading", "Sound design & mixing", "Captions & subtitles", "3 revision rounds"],
      fa: ["ویدیو تا ۱۰ دقیقه", "ریتم و افکت پیشرفته", "رنگ‌آمیزی کامل", "طراحی صدا و میکس", "زیرنویس و کپشن", "سه دور اصلاح"]
    }
  },
  {
    key: "C", theme: "tier-c", popular: false,
    name: { en: "Tier C — Signature Production", fa: "سطح C — تولید امضادار" },
    tagline: { en: "Cinema-grade work with motion graphics.", fa: "کیفیت سینمایی با موشن گرافیک." },
    features: {
      en: ["Unlimited length", "Custom motion graphics", "VFX & transitions", "Premium sound design", "Dedicated revisions until perfect"],
      fa: ["طول نامحدود", "موشن گرافیک اختصاصی", "جلوه‌های ویژه و ترنزیشن", "صدابرداری و میکس پریمیوم", "اصلاحات تا بی‌نقص شدن"]
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
    pricingTitle: "Service Tiers",
    pricingDesc: "Three levels of service — tell me your project and I'll quote it fairly.",
    orderBtn: "💬 Get a Quote on Telegram",
    popular: "Most Popular",
    processTitle: "How It Works",
    steps: [
      {ico:"📦", t:"Send Footage", d:"Share your raw files via Telegram or Drive with a short brief."},
      {ico:"✂️", t:"I Edit", d:"Cutting, pacing, color, sound design — crafted with care."},
      {ico:"🔁", t:"Your Review", d:"You watch the draft and request any tweaks you want."},
      {ico:"🚀", t:"Delivery", d:"Final files in every format you need — on time."}
    ],
    statsTitle: "By The Numbers",
    stats: [
      {n:4, suf:"+", l:"Years of Experience"},
      {n:120, suf:"+", l:"Projects Delivered"},
      {n:48, suf:"h", l:"Average Turnaround"},
      {n:100, suf:"%", l:"Client Satisfaction"}
    ],
    faqTitle: "FAQ",
    faqs: [
      {q:"How do I send you my footage?", a:"Telegram, Google Drive or any link you prefer — after we agree on the project, I'll guide you step by step."},
      {q:"How many revisions do I get?", a:"Every tier includes revisions until it feels right. Fair and simple."},
      {q:"What's the turnaround time?", a:"Shorts usually within 24–72h depending on length. Bigger projects get a clear timeline upfront."},
      {q:"Which formats do you deliver?", a:"Whatever you need — vertical for Reels/TikTok, 16:9 for YouTube, or custom ratios."}
    ],
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
    pricingTitle: "سطوح خدمات",
    pricingDesc: "سه سطح خدمات — پروژه‌ت رو بگو، قیمت منصفانه می‌دیم.",
    orderBtn: "💬 دریافت قیمت در تلگرام",
    popular: "محبوب‌ترین",
    processTitle: "روند کار",
    steps: [
      {ico:"📦", t:"ارسال فایل", d:"فایل خامت رو از طریق تلگرام یا درایو با یه توضیح کوتاه بفرست."},
      {ico:"✂️", t:"تدوین", d:"کات، ریتم، رنگ و صدا — با دقت و وسواس ساخته میشه."},
      {ico:"🔁", t:"بازبینی تو", d:"نسخه رو می‌بینی و هر تغییری که بخوای می‌گی."},
      {ico:"🚀", t:"تحویل", d:"فایل نهایی با هر فرمتی که لازم داری — سر وقت."}
    ],
    statsTitle: "اعداد من",
    stats: [
      {n:4, suf:"+", l:"سال تجربه"},
      {n:120, suf:"+", l:"پروژه تحویل‌شده"},
      {n:48, suf:"h", l:"میانگین تحویل"},
      {n:100, suf:"٪", l:"رضایت مشتری"}
    ],
    faqTitle: "سوالات پرتکرار",
    faqs: [
      {q:"فایل‌هام رو چطور بفرستم؟", a:"تلگرام، گوگل درایو یا هر لینکی که راحتی — بعد توافق روی پروژه، قدم‌به‌قدم راهنماییت می‌کنم."},
      {q:"چند بار می‌تونم اصلاح بخوام؟", a:"هر سطح شامل اصلاحات تا رضایت کاملته. ساده و منصفانه."},
      {q:"چقدر طول می‌کشه؟", a:"شورت‌فرم معمولاً ۲۴ تا ۷۲ ساعت. پروژه‌های بزرگ‌تر از اول زمان دقیق مشخص میشه."},
      {q:"با چه فرمتی تحویل میدی؟", a:"هر فرمتی که بخوای — عمودی برای ریلز و تیک‌تاک، ۱۶:۹ برای یوتیوب یا نسبت دلخواه."}
    ],
    contactTitle: "تماس با من",
    phone: "تلفن",
    telegram: "تلگرام",
    instagram: "اینستاگرام",
    email: "ایمیل",
    footer: "ساخته‌شده با ❤️ توسط محمد · © ۲۰۲۶"
  }
};
