import { BLOOM_IMAGES } from "./bloom-images";

export const IG_URL =
  "https://www.instagram.com/moon_bloom1/?utm_source=ig_web_button_share_sheet";
export const IG_HANDLE = "@moon_bloom1";
export const BRAND = "Moon Bloom";

// Gallery uses uploaded photos exclusively.
export const GALLERY_IMAGES: string[] = BLOOM_IMAGES;

// Palettes for the "Customize Your Bloom" form.
export type PaletteKey =
  | "classic"
  | "blushRoseGold"
  | "crimsonMaroon"
  | "lavenderSage"
  | "custom";

export const CUSTOM_PALETTES: {
  key: PaletteKey;
  swatches: string[];
}[] = [
  { key: "classic",        swatches: ["#FFFFFF", "#F6EFE1", "#EADFC8", "#D9C9A6"] },
  { key: "blushRoseGold",  swatches: ["#F8D7DE", "#F0B7C4", "#E8A6B4", "#C89B7B"] },
  { key: "crimsonMaroon",  swatches: ["#7A1F2B", "#5B1621", "#3E1017", "#22090D"] },
  { key: "lavenderSage",   swatches: ["#C9B8E4", "#A891C9", "#B7C9A8", "#7F9B6B"] },
  { key: "custom",         swatches: ["#F5F0E8", "#E7DFD0", "#CDBFA2", "#9E8E70"] },
];

// Flower types offered in the custom order form.
export type FlowerTypeKey = "openFlower" | "closedFlower" | "plumeria" | "dahlia" | "tulip";
export const FLOWER_TYPES: { key: FlowerTypeKey; img: string }[] = [
  { key: "openFlower",   img: BLOOM_IMAGES[7]  },
  { key: "closedFlower", img: BLOOM_IMAGES[12] },
  { key: "plumeria",     img: BLOOM_IMAGES[18] },
  { key: "dahlia",       img: BLOOM_IMAGES[5]  },
  { key: "tulip",        img: BLOOM_IMAGES[2]  },
];

// ---------------------------------------------------------------------------
// Gallery filter taxonomy
// ---------------------------------------------------------------------------
// These are the tags the Gallery page filters against. Keep them short and
// human-readable — they are shown as-is in the filter buttons.
export const AVAILABLE_COLORS = [
  "Red",
  "Pink",
  "White",
  "Blue",
  "Lavender",
  "Crimson",
  "Ivory",
  "Blush",
] as const;

export const AVAILABLE_TYPES = [
  "openFlower",
  "closedFlower",
  "plumeria",
  "dahlia",
  "tulip",
] as const;

export const AVAILABLE_OCCASIONS = [
  "Wedding",
  "Soutenance",
  "Gift",
  "Birthday",
  "Anniversary",
] as const;

export type ImageMeta = {
  color?: (typeof AVAILABLE_COLORS)[number];
  type?: (typeof AVAILABLE_TYPES)[number];
  occasion?: (typeof AVAILABLE_OCCASIONS)[number];
};

// Map local filenames (as they appear in src/assets/bloom/) to their tags.
// Any image NOT listed here still shows when all filters are "All" — just add
// a new line as you categorize each photo.
export const IMAGE_METADATA: Record<string, ImageMeta> = {
  "bloom-01.jpg": { color: "Ivory",    type: "openFlower",   occasion: "Wedding" },
  // "bloom-02.jpg": { color: "Blue", type: "dahlia", occasion: "Soutenance" },
  // Fill the rest in manually — the gallery reads this file directly.
};
