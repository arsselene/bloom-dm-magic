import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Instagram, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getInspoPhotos } from "@/lib/unsplash.functions";
import { CATALOG, CATEGORIES, IG_URL, MOODBOARD, type Cat } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Our Work & Inspiration | Moon Bloom" },
      { name: "description", content: "Browse our recent arrangements, seasonal moodboard, and fresh floral inspiration." },
      { property: "og:title", content: "Gallery — Moon Bloom" },
      { property: "og:description", content: "Recent arrangements, moodboard and live inspiration." },
    ],
  }),
  component: GalleryPage,
});


function GalleryPage() {
  const { t } = useTranslation();

  const [moodCat, setMoodCat] = useState<Cat>("all");
  const moodItems = moodCat === "all" ? MOODBOARD : MOODBOARD.filter((m) => m.cat === moodCat);

  const fetchInspo = useServerFn(getInspoPhotos);
  const [inspoPage, setInspoPage] = useState(1);
  const inspoQuery = useQuery({
    queryKey: ["inspo", inspoPage],
    queryFn: () => fetchInspo({ data: { page: inspoPage } }),
    staleTime: 60_000,
  });

  const [filter, setFilter] = useState<Cat>("all");
  const items = filter === "all" ? CATALOG : CATALOG.filter((i) => i.cat === filter);

  return (
    <div>
      {/* Page header */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("moodboard.eyebrow")}</p>
          <h1 className="font-serif text-4xl md:text-6xl">{t("moodboard.title")}</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("moodboard.sub")}</p>
        </div>
      </section>

      {/* Moodboard */}
      <section id="moodboard" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setMoodCat(c)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                moodCat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary/50"
              }`}
            >
              {t(`moodboard.${c}`)}
            </button>
          ))}
        </div>
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {moodItems.map((m, idx) => (
            <div key={`${m.img}-${idx}`} className={`${m.h} overflow-hidden rounded-md break-inside-avoid`}>
              <img src={m.img} alt="Floral inspiration" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* More inspo — Unsplash API */}
      <section id="inspo" className="bg-blush/20 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("inspo.eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t("inspo.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("inspo.sub")}</p>
            <div className="mt-6">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  setInspoPage((p) => (p % 5) + 1);
                  void inspoQuery.refetch();
                }}
                disabled={inspoQuery.isFetching}
              >
                <RefreshCw className={`size-4 ${inspoQuery.isFetching ? "animate-spin" : ""}`} />
                {t("inspo.refresh")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {(inspoQuery.data?.photos ?? Array.from({ length: 8 })).map((p, idx) =>
              p && typeof p === "object" && "url" in p ? (
                <a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[3/4] overflow-hidden rounded-md bg-muted"
                  title={`Photo by ${p.credit}`}
                >
                  <img src={p.url} alt={p.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute bottom-0 start-0 m-2 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {p.credit}
                  </span>
                </a>
              ) : (
                <div key={idx} className="aspect-[3/4] animate-pulse rounded-md bg-muted" />
              )
            )}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("catalog.eyebrow")}</p>
          <h2 className="font-serif text-4xl md:text-5xl">{t("catalog.title")}</h2>
        </div>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary/50"
              }`}
            >
              {t(`catalog.${c}`)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {items.map((i) => (
            <a
              key={i.ref}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-md border border-border/70 bg-background shadow-none transition-shadow hover:shadow-soft"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={i.img}
                  alt={`Bouquet ${i.ref}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-border/60 p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  <span>{t("catalog.ref")} #{i.ref}</span>
                  <span>{t("catalog.from")} {i.price}</span>
                </div>
                <p className="mt-1.5 flex items-center gap-1 text-xs text-foreground/80">
                  <Instagram className="size-3" /> {t("catalog.dm")}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
