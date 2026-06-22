import { createServerFn } from "@tanstack/react-start";

export type InspoPhoto = {
  id: string;
  url: string;
  alt: string;
  credit: string;
  link: string;
};

// Curated fallback set — used when no UNSPLASH_ACCESS_KEY is configured.
const FALLBACK: InspoPhoto[] = [
  "photo-1561181286-d3fee7d55364",
  "photo-1487530811176-3780de880c2d",
  "photo-1525772764200-be829a350797",
  "photo-1469259943454-aa100abba749",
  "photo-1455659817273-f96807779a8a",
  "photo-1457089328389-f7f7d5786b32",
  "photo-1502209524164-acea936639a2",
  "photo-1519378058457-4c29a0a2efac",
  "photo-1490750967868-88aa4486c946",
  "photo-1518895949257-7621c3c786d7",
  "photo-1606041008023-472dfb5e530f",
  "photo-1591886960571-74d43a9d4166",
].map((id) => ({
  id,
  url: `https://images.unsplash.com/${id}?w=800&q=80`,
  alt: "Floral arrangement inspiration",
  credit: "Unsplash",
  link: "https://unsplash.com",
}));

export const getInspoPhotos = createServerFn({ method: "GET" })
  .inputValidator((data: { query?: string; page?: number } | undefined) => ({
    query: data?.query ?? "artificial silk flower arrangement bouquet",
    page: data?.page ?? 1,
  }))
  .handler(async ({ data }): Promise<{ photos: InspoPhoto[]; source: "unsplash" | "fallback" }> => {
    const key = process.env.UNSPLASH_ACCESS_KEY;
    if (!key) {
      // Rotate the fallback slightly per "page" so the refresh button feels alive.
      const offset = ((data.page - 1) * 4) % FALLBACK.length;
      const rotated = [...FALLBACK.slice(offset), ...FALLBACK.slice(0, offset)];
      return { photos: rotated, source: "fallback" };
    }
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(data.query)}&per_page=12&page=${data.page}&orientation=portrait`,
        { headers: { Authorization: `Client-ID ${key}` } },
      );
      if (!res.ok) throw new Error(`Unsplash ${res.status}`);
      const json = (await res.json()) as {
        results: Array<{
          id: string;
          urls: { regular: string; small: string };
          alt_description: string | null;
          user: { name: string; links: { html: string } };
          links: { html: string };
        }>;
      };
      const photos: InspoPhoto[] = json.results.map((p) => ({
        id: p.id,
        url: p.urls.small,
        alt: p.alt_description ?? "Floral arrangement",
        credit: p.user.name,
        link: p.links.html,
      }));
      return { photos, source: "unsplash" };
    } catch (err) {
      console.error("Unsplash fetch failed", err);
      return { photos: FALLBACK, source: "fallback" };
    }
  });
