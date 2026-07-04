import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: { home: "Home", flowers: "Flowers", gallery: "Gallery", contact: "Contact", dm: "DM us" },
      hero: {
        eyebrow: "A Boutique Satin Floral Studio",
        title1: "Handcrafted Blooms,",
        title2: "Made to Last.",
        sub: "Bespoke satin & ribbon bouquets, designed by hand. Ordering is as easy as sending a DM.",
        cta: "Order on Instagram",
      },
      process: {
        eyebrow: "The Process", title: "How to order", step: "Step",
        s1t: "Browse & Dream", s1d: "Find an arrangement in our gallery or gather inspiration from the moodboard.",
        s2t: "Slide into our DMs", s2d: "Send us a screenshot, your date, and what you have in mind. We'll chat through the details.",
        s3t: "Confirm & Enjoy", s3d: "We handcraft it and deliver something beautiful — made to last a lifetime.",
      },
      gallery: {
        eyebrow: "Inspiration", title: "Our handmade bouquets",
        sub: "Every piece is crafted with satin, ribbon and love. Screenshot any you adore and DM it to us.",
      },
      flowersPage: {
        eyebrow: "Made to Order",
        title: "Customize Your Bloom",
        sub: "Three simple steps. When you're ready, we'll copy your order and open Instagram.",
      },
      custom: {
        step1: "Step 1 — Choose your flower type",
        step2: "Step 2 — Choose your colors (pick any)",
        step3: "Step 3 — Choose the number of flowers",
        types: {
          openFlower: "Open Flower",
          closedFlower: "Closed Flower",
          plumeria: "Plumeria",
          dahlia: "Dahlia",
          tulip: "Tulip",
        },
        count: "Flowers",
        summary: "Your order",
        cta: "Send Order to Instagram",
        copied: "Order copied — Instagram opened, paste it in a DM!",
        pickType: "Please choose a flower type",
        pickColor: "Please choose at least one color",
        colorsLabel: "Colors",
      },
      filters: {
        color: "Color",
        type: "Type",
        occasion: "Occasion",
        all: "All",
        clear: "Clear filters",
        empty: "No bouquets match these filters yet.",
        count: "{{n}} / {{m}} bouquets",
        colors: {
          Red: "Red", Pink: "Pink", White: "White", Blue: "Blue",
          Lavender: "Lavender", Crimson: "Crimson", Ivory: "Ivory", Blush: "Blush",
          Yellow: "Yellow", Peach: "Peach", Burgundy: "Burgundy", Sage: "Sage",
          Gold: "Gold", Black: "Black",
        },
        occasions: {
          Wedding: "Wedding", Soutenance: "Graduation", Gift: "Gift",
          Birthday: "Birthday", Anniversary: "Anniversary",
        },
      },
      faq: { eyebrow: "Good to know", title: "Frequently asked" },
      footer: { tag: "A boutique satin floral studio", madeWith: "Made with", explore: "Explore", reach: "Reach us" },
      contact: {
        eyebrow: "Get in touch",
        title: "Let's create something beautiful",
        sub: "We only take orders through Instagram DM — it's the fastest way to share ideas, photos and dates. Tap below to message us.",
        cta: "Message us on Instagram",
        onlyIg: "Instagram is our only ordering channel.",
      },
      cta: { full: "Message us on IG", short: "DM us" },
    },
  },
  fr: {
    translation: {
      nav: { home: "Accueil", flowers: "Fleurs", gallery: "Galerie", contact: "Contact", dm: "DM" },
      hero: {
        eyebrow: "Un studio floral en satin",
        title1: "Fleurs faites main,",
        title2: "Faites pour durer.",
        sub: "Bouquets en satin & ruban créés à la main. Commander est aussi simple qu'un DM.",
        cta: "Commander sur Instagram",
      },
      process: {
        eyebrow: "Le processus", title: "Comment commander", step: "Étape",
        s1t: "Explorez & rêvez", s1d: "Trouvez une composition dans notre galerie ou inspirez-vous du moodboard.",
        s2t: "Écrivez-nous en DM", s2d: "Envoyez une capture, votre date et vos idées. On en discute.",
        s3t: "Confirmez & savourez", s3d: "On la crée à la main et on vous livre une pièce qui dure toute une vie.",
      },
      gallery: {
        eyebrow: "Inspiration", title: "Nos bouquets faits main",
        sub: "Chaque pièce est créée avec du satin, du ruban et de l'amour. Capturez celle qui vous plaît et envoyez-la nous.",
      },
      flowersPage: {
        eyebrow: "Sur commande",
        title: "Personnalisez votre bouquet",
        sub: "Trois étapes simples. On copie votre commande et on ouvre Instagram pour vous.",
      },
      custom: {
        step1: "Étape 1 — Choisissez le type de fleur",
        step2: "Étape 2 — Choisissez vos couleurs (autant que vous voulez)",
        step3: "Étape 3 — Choisissez le nombre de fleurs",
        types: {
          openFlower: "Fleur ouverte",
          closedFlower: "Fleur fermée",
          plumeria: "Plumeria",
          dahlia: "Dahlia",
          tulip: "Tulipe",
        },
        count: "Fleurs",
        summary: "Votre commande",
        cta: "Envoyer la commande sur Instagram",
        copied: "Commande copiée — Instagram ouvert, collez-la en DM !",
        pickType: "Choisissez un type de fleur",
        pickColor: "Choisissez au moins une couleur",
        colorsLabel: "Couleurs",
      },
      filters: {
        color: "Couleur",
        type: "Type",
        occasion: "Occasion",
        all: "Toutes",
        clear: "Réinitialiser",
        empty: "Aucun bouquet ne correspond à ces filtres.",
        count: "{{n}} / {{m}} bouquets",
        colors: {
          Red: "Rouge", Pink: "Rose", White: "Blanc", Blue: "Bleu",
          Lavender: "Lavande", Crimson: "Cramoisi", Ivory: "Ivoire", Blush: "Rose poudré",
          Yellow: "Jaune", Peach: "Pêche", Burgundy: "Bordeaux", Sage: "Sauge",
          Gold: "Or", Black: "Noir",
        },
        occasions: {
          Wedding: "Mariage", Soutenance: "Soutenance", Gift: "Cadeau",
          Birthday: "Anniversaire", Anniversary: "Anniversaire de mariage",
        },
      },
      faq: { eyebrow: "Bon à savoir", title: "Questions fréquentes" },
      footer: { tag: "Un studio floral boutique en satin", madeWith: "Fait avec", explore: "Explorer", reach: "Nous joindre" },
      contact: {
        eyebrow: "Contact",
        title: "Créons quelque chose de beau",
        sub: "Nous prenons uniquement les commandes en DM Instagram — c'est le plus rapide pour partager idées, photos et dates.",
        cta: "Écrivez-nous sur Instagram",
        onlyIg: "Instagram est notre seul canal de commande.",
      },
      cta: { full: "Écrivez-nous sur IG", short: "DM" },
    },
  },
  ar: {
    translation: {
      nav: { home: "الرئيسية", flowers: "الزهور", gallery: "المعرض", contact: "تواصل", dm: "راسلنا" },
      hero: {
        eyebrow: "استوديو زهور الساتان البوتيكي",
        title1: "زهور مصنوعة يدوياً،",
        title2: "لتبقى للأبد.",
        sub: "باقات ساتان وشرائط مصنوعة بحب. الطلب بسهولة إرسال رسالة على إنستغرام.",
        cta: "اطلب عبر إنستغرام",
      },
      process: {
        eyebrow: "كيف نعمل", title: "كيفية الطلب", step: "الخطوة",
        s1t: "تصفح واحلم", s1d: "اختر تنسيقاً من معرضنا أو استلهم من لوحة الإلهام.",
        s2t: "راسلنا على إنستغرام", s2d: "أرسل لنا صورة والتاريخ وأفكارك، وسنتفق على التفاصيل.",
        s3t: "أكّد واستمتع", s3d: "نصنعها يدوياً ونوصلها لك — قطعة تدوم مدى الحياة.",
      },
      gallery: {
        eyebrow: "الإلهام", title: "باقاتنا المصنوعة يدوياً",
        sub: "كل قطعة مصنوعة من الساتان والشرائط بحب. التقط لقطة لأي منها وراسلنا.",
      },
      flowersPage: {
        eyebrow: "بالطلب",
        title: "خصّص باقتك",
        sub: "ثلاث خطوات بسيطة. نسخّر لك الطلب ونفتح إنستغرام لإرساله.",
      },
      custom: {
        step1: "الخطوة 1 — اختر نوع الزهرة",
        step2: "الخطوة 2 — اختر ألوانك (اختر ما تشاء)",
        step3: "الخطوة 3 — اختر عدد الزهور",
        types: {
          openFlower: "زهرة مفتوحة",
          closedFlower: "زهرة مغلقة",
          plumeria: "بلوميريا",
          dahlia: "داليا",
          tulip: "توليب",
        },
        count: "زهور",
        summary: "طلبك",
        cta: "أرسل الطلب إلى إنستغرام",
        copied: "تم نسخ الطلب — إنستغرام مفتوح، الصقه في الرسالة!",
        pickType: "اختر نوع الزهرة",
        pickColor: "اختر لوناً واحداً على الأقل",
        colorsLabel: "الألوان",
      },
      filters: {
        color: "اللون",
        type: "النوع",
        occasion: "المناسبة",
        all: "الكل",
        clear: "مسح الفلاتر",
        empty: "لا توجد باقات تطابق هذه الفلاتر.",
        count: "{{n}} / {{m}} باقة",
        colors: {
          Red: "أحمر", Pink: "وردي", White: "أبيض", Blue: "أزرق",
          Lavender: "لافندر", Crimson: "قرمزي", Ivory: "عاجي", Blush: "زهري ناعم",
          Yellow: "أصفر", Peach: "خوخي", Burgundy: "بوردو", Sage: "أخضر ميرمية",
          Gold: "ذهبي", Black: "أسود",
        },
        occasions: {
          Wedding: "زفاف", Soutenance: "تخرج", Gift: "هدية",
          Birthday: "عيد ميلاد", Anniversary: "ذكرى سنوية",
        },
      },
      faq: { eyebrow: "معلومات مفيدة", title: "الأسئلة الشائعة" },
      footer: { tag: "استوديو زهور الساتان البوتيكي", madeWith: "صُنع بـ", explore: "استكشف", reach: "تواصل معنا" },
      contact: {
        eyebrow: "تواصل",
        title: "لنصنع شيئاً جميلاً",
        sub: "نستقبل الطلبات فقط عبر رسائل إنستغرام — أسرع طريقة لمشاركة الأفكار والصور والتواريخ.",
        cta: "راسلنا على إنستغرام",
        onlyIg: "إنستغرام هو قناة الطلب الوحيدة لدينا.",
      },
      cta: { full: "راسلنا على إنستغرام", short: "راسلنا" },
    },
  },
};

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "ar"],
    interpolation: { escapeValue: false },
  });
}

export const RTL_LANGS = new Set(["ar"]);
export default i18n;
