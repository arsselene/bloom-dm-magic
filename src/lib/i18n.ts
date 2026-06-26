import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: { home: "Home", flowers: "Flowers", gallery: "Gallery", contact: "Contact", dm: "DM us", process: "How to Order", catalog: "Our Work", foryou: "For You", inspo: "Inspiration", pricing: "Pricing", faq: "FAQ" },
      hero: {
        eyebrow: "A Boutique Floral Studio",
        title1: "Bespoke Blooms,",
        title2: "Crafted for You.",
        sub: "Locally sourced, custom-designed floral arrangements. Ordering is as easy as sending a DM.",
        cta: "Order on Instagram",
      },
      process: {
        eyebrow: "The Process", title: "How to order", step: "Step",
        s1t: "Browse & Dream", s1d: "Find an arrangement in our catalog or gather inspiration from the moodboard.",
        s2t: "Slide into our DMs", s2d: "Send us a screenshot, your delivery date, and budget. We'll chat through the details.",
        s3t: "Confirm & Enjoy", s3d: "We send a secure payment link, then hand-deliver something magical to your door.",
      },
      moodboard: {
        eyebrow: "Inspiration", title: "Current season inspiration",
        sub: "Filter by occasion. Screenshot any vibe you love and send it to us.",
        all: "All", birthdays: "Birthdays", anniversaries: "Anniversaries", weddings: "Weddings",
      },
      inspo: { eyebrow: "More Inspiration", title: "Artificial & silk arrangements", sub: "Fresh inspiration pulled from our curated gallery — refresh for new ideas.", refresh: "Refresh" },
      custom: {
        eyebrow: "Build Your Own", title: "Customization studio",
        sub: "Pick a palette, a focal bloom and a size — your preview updates live.",
        palette: "Palette", focal: "Focal bloom", size: "Size",
        preview: "Live preview",
        order: "Order this on Instagram",
        small: "Petite", medium: "Classic", large: "Grand",
        smallD: "Bedside-sweet", mediumD: "Our most-loved", largeD: "Voluminous",
        pPastel: "Pastel", pMoody: "Moody", pNeutral: "Neutral", pBright: "Bright",
      },
      catalog: { eyebrow: "Our Work", title: "Recent arrangements", all: "All", birthdays: "Birthdays", anniversaries: "Anniversaries", weddings: "Weddings", ref: "Ref", from: "From", dm: "DM to order this" },
      foryou: {
        cta: "Open the flower garden", ctaSub: "Every variety we love, with names and photos.",
        back: "Back to home", eyebrow: "For You",
        title: "The flower garden",
        sub: "{{count}} varieties we work with most often.",
      },
      pricing: { eyebrow: "Size & Pricing", title: "Find your perfect size", from: "from", most: "Most loved", order: "Order on Instagram" },
      faq: { eyebrow: "Delivery & Care", title: "Frequently asked" },
      footer: { tag: "A boutique floral studio", madeWith: "Made with", explore: "Explore", reach: "Reach us" },
      contact: { eyebrow: "Get in touch", title: "Let's create something beautiful", sub: "We answer DMs within a few hours, every day. Tell us your vision, occasion and budget — we'll take care of the rest.", cta: "Message us on Instagram", email: "Or email us", hours: "Studio hours", hoursVal: "Tue – Sat · 10am – 6pm" },
      flowersPage: { eyebrow: "Satin & Silk", title: "Our flower models", sub: "Browse every bloom we work with — fresh or as lasting satin and silk versions. Tap any to DM us about it." },
      cta: { full: "Message us on IG", short: "DM us" },
    },
  },
  fr: {
    translation: {
      nav: { home: "Accueil", flowers: "Fleurs", gallery: "Galerie", contact: "Contact", dm: "DM", process: "Comment commander", catalog: "Nos créations", foryou: "Pour vous", inspo: "Inspiration", pricing: "Tarifs", faq: "FAQ" },
      hero: {
        eyebrow: "Un studio floral boutique",
        title1: "Bouquets sur mesure,",
        title2: "Créés pour vous.",
        sub: "Compositions florales locales et personnalisées. Commander est aussi simple qu'envoyer un DM.",
        cta: "Commander sur Instagram",
      },
      process: {
        eyebrow: "Le processus", title: "Comment commander", step: "Étape",
        s1t: "Explorez & rêvez", s1d: "Trouvez une composition dans notre catalogue ou inspirez-vous du moodboard.",
        s2t: "Écrivez-nous en DM", s2d: "Envoyez une capture, la date de livraison et votre budget. On en discute.",
        s3t: "Confirmez & savourez", s3d: "Un lien de paiement sécurisé, puis une livraison à la main, pleine de magie.",
      },
      moodboard: {
        eyebrow: "Inspiration", title: "Inspiration de saison",
        sub: "Filtrez par occasion. Capturez l'ambiance qui vous plaît et envoyez-la nous.",
        all: "Tout", birthdays: "Anniversaires", anniversaries: "Mariages (anniv.)", weddings: "Mariages",
      },
      inspo: { eyebrow: "Plus d'inspiration", title: "Compositions artificielles & soie", sub: "Inspiration fraîche depuis notre galerie — rafraîchissez pour de nouvelles idées.", refresh: "Rafraîchir" },
      custom: {
        eyebrow: "Composez le vôtre", title: "Studio de personnalisation",
        sub: "Choisissez une palette, une fleur vedette et une taille — l'aperçu se met à jour.",
        palette: "Palette", focal: "Fleur vedette", size: "Taille",
        preview: "Aperçu en direct",
        order: "Commander sur Instagram",
        small: "Petit", medium: "Classique", large: "Grand",
        smallD: "Tendre, pour la table de chevet", mediumD: "Notre préféré", largeD: "Volumineux",
        pPastel: "Pastel", pMoody: "Sombre", pNeutral: "Neutre", pBright: "Vif",
      },
      catalog: { eyebrow: "Nos créations", title: "Compositions récentes", all: "Tout", birthdays: "Anniversaires", anniversaries: "Anniv. de mariage", weddings: "Mariages", ref: "Réf", from: "Dès", dm: "Commander en DM" },
      foryou: {
        cta: "Ouvrir le jardin des fleurs", ctaSub: "Toutes les variétés que nous aimons, avec noms et photos.",
        back: "Retour à l'accueil", eyebrow: "Pour vous",
        title: "Le jardin des fleurs",
        sub: "{{count}} variétés que nous utilisons le plus.",
      },
      pricing: { eyebrow: "Tailles & tarifs", title: "Trouvez la taille idéale", from: "dès", most: "Le plus aimé", order: "Commander sur Instagram" },
      faq: { eyebrow: "Livraison & entretien", title: "Questions fréquentes" },
      footer: { tag: "Un studio floral boutique", madeWith: "Fait avec" },
      cta: { full: "Écrivez-nous sur IG", short: "DM" },
    },
  },
  ar: {
    translation: {
      nav: { process: "كيفية الطلب", catalog: "أعمالنا", foryou: "لك", inspo: "إلهام", pricing: "الأسعار", faq: "الأسئلة" },
      hero: {
        eyebrow: "استوديو زهور بوتيكي",
        title1: "باقات مُصممة خصيصاً",
        title2: "من أجلك.",
        sub: "تنسيقات زهور محلية مصممة حسب الطلب. الطلب بسهولة إرسال رسالة خاصة.",
        cta: "اطلب عبر إنستغرام",
      },
      process: {
        eyebrow: "كيف نعمل", title: "كيفية الطلب", step: "الخطوة",
        s1t: "تصفح واحلم", s1d: "اختر تنسيقاً من معرضنا أو استلهم من لوحة الإلهام.",
        s2t: "راسلنا على إنستغرام", s2d: "أرسل لنا صورة وتاريخ التسليم وميزانيتك، وسنتولى الباقي.",
        s3t: "أكّد واستمتع", s3d: "نرسل لك رابط دفع آمن، ثم نسلّم لك شيئاً ساحراً يدوياً.",
      },
      moodboard: {
        eyebrow: "الإلهام", title: "إلهام الموسم",
        sub: "صفِّ حسب المناسبة. التقط لقطة لأي جو يعجبك وأرسلها لنا.",
        all: "الكل", birthdays: "أعياد ميلاد", anniversaries: "ذكريات", weddings: "أعراس",
      },
      inspo: { eyebrow: "إلهام إضافي", title: "تنسيقات اصطناعية وحرير", sub: "إلهام جديد من معرضنا — حدّث لرؤية أفكار جديدة.", refresh: "تحديث" },
      custom: {
        eyebrow: "صمم باقتك", title: "استوديو التخصيص",
        sub: "اختر اللوحة والزهرة الرئيسية والحجم — تتحدث المعاينة فوراً.",
        palette: "اللوحة", focal: "الزهرة الرئيسية", size: "الحجم",
        preview: "معاينة مباشرة",
        order: "اطلب عبر إنستغرام",
        small: "صغير", medium: "كلاسيكي", large: "كبير",
        smallD: "لطيف بجوار السرير", mediumD: "الأكثر محبة", largeD: "مهيب وواسع",
        pPastel: "باستيل", pMoody: "داكن", pNeutral: "محايد", pBright: "زاهي",
      },
      catalog: { eyebrow: "أعمالنا", title: "تنسيقات حديثة", all: "الكل", birthdays: "أعياد ميلاد", anniversaries: "ذكريات", weddings: "أعراس", ref: "مرجع", from: "ابتداءً من", dm: "راسلنا للطلب" },
      foryou: {
        cta: "افتح حديقة الزهور", ctaSub: "كل الأنواع التي نحبها بأسمائها وصورها.",
        back: "العودة للرئيسية", eyebrow: "لك",
        title: "حديقة الزهور",
        sub: "{{count}} نوعاً نعمل بها كثيراً.",
      },
      pricing: { eyebrow: "الأحجام والأسعار", title: "اعثر على الحجم المثالي", from: "ابتداءً من", most: "الأكثر محبة", order: "اطلب عبر إنستغرام" },
      faq: { eyebrow: "التوصيل والعناية", title: "الأسئلة الشائعة" },
      footer: { tag: "استوديو زهور بوتيكي", madeWith: "صُنع بـ" },
      cta: { full: "راسلنا على إنستغرام", short: "راسلنا" },
    },
  },
};

if (!i18n.isInitialized) {
  void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      supportedLngs: ["en", "fr", "ar"],
      interpolation: { escapeValue: false },
      detection: { order: ["localStorage", "navigator"], caches: ["localStorage"] },
    });
}

export const RTL_LANGS = new Set(["ar"]);
export default i18n;
