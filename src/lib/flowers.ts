export type Flower = {
  slug: string;
  names: { en: string; fr: string; ar: string };
  desc: { en: string; fr: string; ar: string };
  img: string;
  season: string;
};

export const FLOWERS: Flower[] = [
  {
    slug: "rose",
    names: { en: "Rose", fr: "Rose", ar: "وردة" },
    desc: { en: "Classic, romantic, endlessly versatile.", fr: "Classique, romantique, infiniment polyvalente.", ar: "كلاسيكية، رومانسية، متعددة الاستخدامات." },
    img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=600&q=80",
    season: "Year-round",
  },
  {
    slug: "peony",
    names: { en: "Peony", fr: "Pivoine", ar: "فاوانيا" },
    desc: { en: "Lush, ruffled, and famously fleeting.", fr: "Luxuriante, froissée, célèbre pour sa courte saison.", ar: "كثيفة ومجعدة، موسمها قصير." },
    img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=600&q=80",
    season: "Late spring",
  },
  {
    slug: "tulip",
    names: { en: "Tulip", fr: "Tulipe", ar: "خزامى" },
    desc: { en: "Sculptural cups in nearly every color.", fr: "Coupes sculpturales dans presque toutes les couleurs.", ar: "كؤوس منحوتة بكل الألوان تقريباً." },
    img: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&q=80",
    season: "Spring",
  },
  {
    slug: "ranunculus",
    names: { en: "Ranunculus", fr: "Renoncule", ar: "حوذان" },
    desc: { en: "Tissue-paper petals layered like a rosette.", fr: "Pétales en papier de soie superposés en rosette.", ar: "بتلات رقيقة متراصة كوردة." },
    img: "https://images.unsplash.com/photo-1599733589046-8a35ed0c89ea?w=600&q=80",
    season: "Spring",
  },
  {
    slug: "lily",
    names: { en: "Lily", fr: "Lys", ar: "زنبق" },
    desc: { en: "Tall, fragrant, and graceful.", fr: "Haute, parfumée et gracieuse.", ar: "طويلة، عطرة ورشيقة." },
    img: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&q=80",
    season: "Summer",
  },
  {
    slug: "dahlia",
    names: { en: "Dahlia", fr: "Dahlia", ar: "داليا" },
    desc: { en: "Bold, geometric showstoppers.", fr: "Audacieuses, géométriques, spectaculaires.", ar: "جريئة، هندسية ولافتة." },
    img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&q=80",
    season: "Late summer",
  },
  {
    slug: "hydrangea",
    names: { en: "Hydrangea", fr: "Hortensia", ar: "كوبية" },
    desc: { en: "Cloud-like clusters with painterly hues.", fr: "Grappes nuageuses aux teintes picturales.", ar: "عناقيد سحابية بألوان فنية." },
    img: "https://images.unsplash.com/photo-1454262041357-5d96f50a2f27?w=600&q=80",
    season: "Summer",
  },
  {
    slug: "anemone",
    names: { en: "Anemone", fr: "Anémone", ar: "شقائق النعمان" },
    desc: { en: "Inky centers, paper-thin petals.", fr: "Cœurs sombres, pétales fins comme du papier.", ar: "قلوب داكنة وبتلات رقيقة." },
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80",
    season: "Spring",
  },
  {
    slug: "orchid",
    names: { en: "Orchid", fr: "Orchidée", ar: "أوركيد" },
    desc: { en: "Exotic, architectural, long-lasting.", fr: "Exotique, architecturale, longue durée.", ar: "غريبة ومعمارية وتدوم طويلاً." },
    img: "https://images.unsplash.com/photo-1567748157439-651aca2ff064?w=600&q=80",
    season: "Year-round",
  },
  {
    slug: "sunflower",
    names: { en: "Sunflower", fr: "Tournesol", ar: "دوار الشمس" },
    desc: { en: "Cheerful, sun-chasing faces.", fr: "Visages joyeux tournés vers le soleil.", ar: "وجوه مبهجة تتبع الشمس." },
    img: "https://images.unsplash.com/photo-1503936380431-cdfb147ed5dc?w=600&q=80",
    season: "Summer",
  },
  {
    slug: "lisianthus",
    names: { en: "Lisianthus", fr: "Lisianthus", ar: "ليزيانتوس" },
    desc: { en: "Soft, rose-like, and quietly elegant.", fr: "Doux, rosacé, d'une élégance discrète.", ar: "ناعمة، شبيهة بالورد، أنيقة بهدوء." },
    img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80",
    season: "Summer",
  },
  {
    slug: "eucalyptus",
    names: { en: "Eucalyptus", fr: "Eucalyptus", ar: "كينا" },
    desc: { en: "Silvery foliage with a fresh scent.", fr: "Feuillage argenté au parfum frais.", ar: "أوراق فضية برائحة منعشة." },
    img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80",
    season: "Year-round",
  },
];
