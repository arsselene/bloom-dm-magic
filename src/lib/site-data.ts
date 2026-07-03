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
export type FlowerTypeKey = "openFlower" | "closedFlower" | "plumeria" | "dahlia";
export const FLOWER_TYPES: { key: FlowerTypeKey; img: string }[] = [
  { key: "openFlower",   img: BLOOM_IMAGES[7]  },
  { key: "closedFlower", img: BLOOM_IMAGES[12] },
  { key: "plumeria",     img: BLOOM_IMAGES[18] },
  { key: "dahlia",       img: BLOOM_IMAGES[5]  },
];
