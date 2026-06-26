export const IG_URL = "https://instagram.com/yourfloristig";

export type Cat = "all" | "birthdays" | "anniversaries" | "weddings";
export const CATEGORIES: Cat[] = ["all", "birthdays", "anniversaries", "weddings"];

export const MOODBOARD: { img: string; h: string; cat: Exclude<Cat, "all"> }[] = [
  { img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80", h: "h-72", cat: "birthdays" },
  { img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80", h: "h-96", cat: "weddings" },
  { img: "https://images.unsplash.com/photo-1454262041357-5d96f50a2f27?w=600&q=80", h: "h-64", cat: "anniversaries" },
  { img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=600&q=80", h: "h-80", cat: "anniversaries" },
  { img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&q=80", h: "h-72", cat: "birthdays" },
  { img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=600&q=80", h: "h-96", cat: "weddings" },
  { img: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&q=80", h: "h-64", cat: "weddings" },
  { img: "https://images.unsplash.com/photo-1599733589046-8a35ed0c89ea?w=600&q=80", h: "h-80", cat: "birthdays" },
];

export const CATALOG = [
  { ref: "BQT-01", cat: "birthdays", price: "$65", img: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80" },
  { ref: "BQT-02", cat: "weddings", price: "$220", img: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=800&q=80" },
  { ref: "BQT-03", cat: "anniversaries", price: "$120", img: "https://images.unsplash.com/photo-1469259943454-aa100abba749?w=800&q=80" },
  { ref: "BQT-04", cat: "birthdays", price: "$45", img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80" },
  { ref: "BQT-05", cat: "weddings", price: "$280", img: "https://images.unsplash.com/photo-1457089328389-f7f7d5786b32?w=800&q=80" },
  { ref: "BQT-06", cat: "anniversaries", price: "$95", img: "https://images.unsplash.com/photo-1502209524164-acea936639a2?w=800&q=80" },
  { ref: "BQT-07", cat: "birthdays", price: "$80", img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80" },
  { ref: "BQT-08", cat: "weddings", price: "$320", img: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80" },
];

export const PALETTES = [
  { key: "pastel",  swatches: ["#F8D7E3", "#E8D5F2", "#D5E8F2", "#FDE8C9"], img: "https://images.unsplash.com/photo-1457089328389-f7f7d5786b32?w=900&q=80" },
  { key: "moody",   swatches: ["#3A1F2B", "#5C2A3D", "#8B3A4E", "#241825"], img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=900&q=80" },
  { key: "neutral", swatches: ["#F5F0E8", "#D9CFC1", "#B5A992", "#8C7E68"], img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=900&q=80" },
  { key: "bright",  swatches: ["#FF6B6B", "#FFB84D", "#FFE066", "#A0E07A"], img: "https://images.unsplash.com/photo-1503936380431-cdfb147ed5dc?w=900&q=80" },
] as const;

export const SIZES = [
  { key: "small",  stems: "8–10",  img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=900&q=80" },
  { key: "medium", stems: "18–22", img: "https://images.unsplash.com/photo-1469259943454-aa100abba749?w=900&q=80" },
  { key: "large",  stems: "35+",   img: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=900&q=80" },
] as const;
