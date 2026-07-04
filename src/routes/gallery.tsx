import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  IG_URL,
  GALLERY_IMAGES,
  IMAGE_METADATA,
  AVAILABLE_COLORS,
  AVAILABLE_TYPES,
  AVAILABLE_OCCASIONS,
} from "@/lib/site-data";

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

const ALL = "All" as const;

function filenameFromUrl(url: string): string {
  return url.split("/").pop() ?? url;
}

function FilterRow<T extends string>({
  label,
  allLabel,
  options,
  value,
  onChange,
  renderLabel,
}: {
  label: string;
  allLabel: string;
  options: readonly T[];
  value: T | typeof ALL;
  onChange: (v: T | typeof ALL) => void;
  renderLabel?: (v: T) => string;
}) {
  const opts: (T | typeof ALL)[] = [ALL, ...options];
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {opts.map((opt) => {
          const active = opt === value;
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                active
                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {opt === ALL ? allLabel : renderLabel ? renderLabel(opt) : opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function GalleryPage() {
  const { t } = useTranslation();

  const [color, setColor] = useState<(typeof AVAILABLE_COLORS)[number] | typeof ALL>(ALL);
  const [type, setType] = useState<(typeof AVAILABLE_TYPES)[number] | typeof ALL>(ALL);
  const [occasion, setOccasion] = useState<(typeof AVAILABLE_OCCASIONS)[number] | typeof ALL>(ALL);

  const anyFilterActive = color !== ALL || type !== ALL || occasion !== ALL;

  const filtered = useMemo(() => {
    return GALLERY_IMAGES.filter((url) => {
      if (!anyFilterActive) return true;
      const meta = IMAGE_METADATA[filenameFromUrl(url)];
      if (!meta) return false;
      if (color !== ALL && meta.color !== color) return false;
      if (type !== ALL && meta.type !== type) return false;
      if (occasion !== ALL && meta.occasion !== occasion) return false;
      return true;
    });
  }, [color, type, occasion, anyFilterActive]);

  const clearAll = () => {
    setColor(ALL);
    setType(ALL);
    setOccasion(ALL);
  };

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

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="rounded-2xl border border-border/60 bg-background/60 p-6 shadow-none backdrop-blur">
          <div className="grid gap-6 md:grid-cols-3">
            <FilterRow
              label="Color"
              options={AVAILABLE_COLORS}
              value={color}
              onChange={setColor}
            />
            <FilterRow
              label="Type"
              options={AVAILABLE_TYPES}
              value={type}
              onChange={setType}
              renderLabel={(v) => t(`custom.types.${v}`)}
            />
            <FilterRow
              label="Occasion"
              options={AVAILABLE_OCCASIONS}
              value={occasion}
              onChange={setOccasion}
            />
          </div>
          <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {filtered.length} / {GALLERY_IMAGES.length} bouquets
            </span>
            {anyFilterActive && (
              <button
                onClick={clearAll}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium hover:border-primary hover:text-foreground"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Masonry gallery from uploaded photos */}
      <section id="masonry" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border/60 py-20 text-center text-sm text-muted-foreground">
            No bouquets match these filters yet.
          </div>
        ) : (
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {filtered.map((src, idx) => (
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
        )}

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
