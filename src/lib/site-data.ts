import { BLOOM_IMAGES } from "./bloom-images";

export const IG_URL =
  "https://www.instagram.com/moon_bloom1/?utm_source=ig_web_button_share_sheet";
export const IG_HANDLE = "@moon_bloom1";
export const BRAND = "Moon Bloom";

// Gallery uses uploaded photos exclusively.
export const GALLERY_IMAGES: string[] = BLOOM_IMAGES;

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
// These are the tags the Gallery page filters against and the palette shown
// in the "Customize your bloom" step 2 multi-select.
export const AVAILABLE_COLORS = [
  "Red",
  "Pink",
  "Blush",
  "Peach",
  "White",
  "Ivory",
  "Yellow",
  "Gold",
  "Blue",
  "Lavender",
  "Sage",
  "Crimson",
  "Burgundy",
  "Black",
] as const;

// Hex swatches used to render the color chips (kept in one place so both the
// gallery filter and the flowers customization page stay in sync).
export const COLOR_SWATCHES: Record<(typeof AVAILABLE_COLORS)[number], string> = {
  Red:      "#C0392B",
  Pink:     "#F0B7C4",
  Blush:    "#F8D7DE",
  Peach:    "#F6C6A0",
  White:    "#FFFFFF",
  Ivory:    "#F6EFE1",
  Yellow:   "#F1D06A",
  Gold:     "#C9A24A",
  Blue:     "#6C8EBF",
  Lavender: "#C9B8E4",
  Sage:     "#B7C9A8",
  Crimson:  "#7A1F2B",
  Burgundy: "#5B1621",
  Black:    "#1A1A1A",
};

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
