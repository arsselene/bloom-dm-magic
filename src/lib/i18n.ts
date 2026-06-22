import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: { process: "How to Order", catalog: "Our Work", varieties: "Flowers", inspo: "Inspiration", pricing: "Pricing", faq: "FAQ" },
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
      catalog: { eyebrow: "The Catalog", title: "Our work", all: "All", birthdays: "Birthdays", anniversaries: "Anniversaries", weddings: "Weddings", ref: "Ref", from: "From", dm: "DM to order this" },
      moodboard: { eyebrow: "Moodboard", title: "Current season inspiration", sub: "Not sure what you want? Screenshot any of these vibes and send them to us!" },
      varieties: { eyebrow: "The Garden", title: "Flower varieties we love", sub: "A living glossary of the blooms we work with most often." },
      inspo: { eyebrow: "More Inspiration", title: "Artificial & silk arrangements", sub: "Fresh inspiration pulled from our curated Unsplash gallery — refresh for new ideas.", refresh: "Refresh" },
      custom: {
        eyebrow: "Build Your Own", title: "Customization guide",
        c1t: "1. Pick a palette", c1d: "Choose the mood that speaks to you.",
        c2t: "2. Choose a focal bloom", c2d: "The star of your arrangement.",
        c3t: "3. Select the size", c3d: "From dainty to dramatic.",
      },
      pricing: { eyebrow: "Size & Pricing", title: "Find your perfect size", from: "from", most: "Most loved", order: "Order on Instagram" },
      faq: { eyebrow: "Delivery & Care", title: "Frequently asked" },
      footer: { tag: "A boutique floral studio", madeWith: "Made with" },
      cta: { full: "Message us on IG", short: "DM us" },
    },
  },
  fr: {
    translation: {
      nav: { process: "Comment commander", catalog: "Nos créations", varieties: "Fleurs", inspo: "Inspiration", pricing: "Tarifs", faq: "FAQ" },
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
      catalog: { eyebrow: "Le catalogue", title: "Nos créations", all: "Tout", birthdays: "Anniversaires", anniversaries: "Anniversaires de mariage", weddings: "Mariages", ref: "Réf", from: "Dès", dm: "Commander en DM" },
      moodboard: { eyebrow: "Moodboard", title: "Inspiration de saison", sub: "Hésitante ? Faites une capture de l'ambiance qui vous plaît et envoyez-la nous !" },
      varieties: { eyebrow: "Le jardin", title: "Nos fleurs préférées", sub: "Un petit glossaire vivant des fleurs que nous utilisons le plus." },
      inspo: { eyebrow: "Plus d'inspiration", title: "Compositions artificielles & soie", sub: "Inspiration fraîche depuis notre galerie Unsplash — rafraîchissez pour de nouvelles idées.", refresh: "Rafraîchir" },
      custom: {
        eyebrow: "Composez le vôtre", title: "Guide de personnalisation",
        c1t: "1. Choisissez une palette", c1d: "Choisissez l'ambiance qui vous parle.",
        c2t: "2. Choisissez une fleur vedette", c2d: "La star de votre composition.",
        c3t: "3. Sélectionnez la taille", c3d: "Du délicat au spectaculaire.",
      },
      pricing: { eyebrow: "Tailles & tarifs", title: "Trouvez la taille idéale", from: "dès", most: "Le plus aimé", order: "Commander sur Instagram" },
      faq: { eyebrow: "Livraison & entretien", title: "Questions fréquentes" },
      footer: { tag: "Un studio floral boutique", madeWith: "Fait avec" },
      cta: { full: "Écrivez-nous sur IG", short: "DM" },
    },
  },
  ar: {
    translation: {
      nav: { process: "كيفية الطلب", catalog: "أعمالنا", varieties: "الزهور", inspo: "إلهام", pricing: "الأسعار", faq: "الأسئلة" },
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
      catalog: { eyebrow: "المعرض", title: "أعمالنا", all: "الكل", birthdays: "أعياد ميلاد", anniversaries: "ذكريات", weddings: "أعراس", ref: "مرجع", from: "ابتداءً من", dm: "راسلنا للطلب" },
      moodboard: { eyebrow: "لوحة الإلهام", title: "إلهام الموسم الحالي", sub: "غير متأكد؟ خذ لقطة لأي من هذه الأجواء وأرسلها لنا!" },
      varieties: { eyebrow: "الحديقة", title: "أنواع الزهور التي نحبها", sub: "قاموس حي لأكثر الزهور التي نعمل بها." },
      inspo: { eyebrow: "إلهام إضافي", title: "تنسيقات اصطناعية وحرير", sub: "إلهام جديد من معرض Unsplash المختار — حدّث لرؤية أفكار جديدة.", refresh: "تحديث" },
      custom: {
        eyebrow: "صمم باقتك", title: "دليل التخصيص",
        c1t: "١. اختر لوحة الألوان", c1d: "اختر المزاج الذي يخاطبك.",
        c2t: "٢. اختر الزهرة الرئيسية", c2d: "نجمة تنسيقك.",
        c3t: "٣. اختر الحجم", c3d: "من الرقيق إلى المهيب.",
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
