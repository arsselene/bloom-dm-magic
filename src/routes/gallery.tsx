import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IG_URL, GALLERY_IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Handmade Satin Bouquets | Moon Bloom" },
      { name: "description", content: "Browse our handcrafted satin and ribbon bouquets. Screenshot your favorite and DM us to order." },
      { property: "og:title", content: "Gallery — Moon Bloom" },
      { property: "og:description", content: "Handmade satin bouquets — every piece unique." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Page header */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("gallery.eyebrow")}</p>
          <h1 className="font-serif text-4xl md:text-6xl">{t("gallery.title")}</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("gallery.sub")}</p>
        </div>
      </section>

      {/* Masonry gallery from uploaded photos */}
      <section id="masonry" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {GALLERY_IMAGES.map((src, idx) => (
            <a
              key={src}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-md break-inside-avoid"
              aria-label="Message us on Instagram to order this"
            >
              <img
                src={src}
                alt={`Handmade satin bouquet ${idx + 1}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 p-3 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="size-3.5" /> DM to order
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="h-12 rounded-full px-8 shadow-soft">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer">
              <Instagram className="size-4" /> {t("cta.full")}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
