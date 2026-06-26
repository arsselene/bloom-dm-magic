import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Instagram, Flower2, Palette, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getFlowers } from "@/lib/flowers.functions";
import { IG_URL, PALETTES, SIZES } from "@/lib/site-data";

const flowersQuery = queryOptions({
  queryKey: ["flowers"],
  queryFn: () => getFlowers({ data: { lang: "en" } }),
  staleTime: 5 * 60_000,
});

export const Route = createFileRoute("/flowers")({
  head: () => ({
    meta: [
      { title: "Flowers — Satin & Silk Models | Petal & Stem" },
      { name: "description", content: "Every flower variety we work with — fresh, satin and silk models." },
      { property: "og:title", content: "Flowers — Petal & Stem" },
      { property: "og:description", content: "Browse our full flower library and build your custom bouquet." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(flowersQuery),
  component: FlowersPage,
});

function FlowersPage() {
  const { t, i18n } = useTranslation();
  const lang = ((i18n.resolvedLanguage ?? "en").slice(0, 2) as "en" | "fr" | "ar");
  const { data } = useSuspenseQuery(flowersQuery);

  const [palette, setPalette] = useState<(typeof PALETTES)[number]["key"]>("pastel");
  const [focal, setFocal] = useState<string>(data.flowers[0].slug);
  const [size, setSize] = useState<(typeof SIZES)[number]["key"]>("medium");
  const paletteObj = useMemo(() => PALETTES.find((p) => p.key === palette)!, [palette]);
  const focalObj = useMemo(() => data.flowers.find((f) => f.slug === focal) ?? data.flowers[0], [focal, data.flowers]);
  const sizeObj = useMemo(() => SIZES.find((s) => s.key === size)!, [size]);

  return (
    <div>
      {/* Hero band */}
      <section className="bg-blush/30 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("flowersPage.eyebrow")}</p>
          <h1 className="font-serif text-4xl md:text-6xl">{t("flowersPage.title")}</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("flowersPage.sub")}</p>
        </div>
      </section>

      {/* Flower grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {data.flowers.map((f) => (
            <Card key={f.slug} className="overflow-hidden border-border/60 bg-background p-0 shadow-none">
              <div className="aspect-square overflow-hidden">
                <img src={f.img} alt={f.names[lang]} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl">{f.names[lang]}</h3>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                  {f.names.en} · {f.season}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc[lang]}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Customize studio */}
      <section id="customize" className="bg-secondary/30 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("custom.eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t("custom.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("custom.sub")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <Card className="sticky top-24 overflow-hidden border-border/60 bg-background p-0 shadow-soft">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img src={paletteObj.img} alt="Palette preview" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white">
                    <img src={focalObj.img} alt={focalObj.names[lang]} className="size-16 rounded-full border-2 border-white object-cover shadow-soft" />
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">{t("custom.preview")}</p>
                      <p className="font-serif text-lg leading-tight">
                        {t(`custom.p${palette.charAt(0).toUpperCase()}${palette.slice(1)}`)} · {focalObj.names[lang]}
                      </p>
                      <p className="text-xs text-white/85">{t(`custom.${size}`)} · {sizeObj.stems} stems</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <Button asChild className="w-full rounded-full">
                    <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                      <Instagram className="size-4" /> {t("custom.order")}
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <div className="space-y-6 md:col-span-3">
              <Card className="border-border/60 bg-background p-6 shadow-none">
                <div className="mb-4 flex items-center gap-2">
                  <Palette className="size-5 text-primary" />
                  <h3 className="font-serif text-xl">{t("custom.palette")}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {PALETTES.map((p) => (
                    <button
                      key={p.key}
                      onClick={() => setPalette(p.key)}
                      className={`rounded-lg border p-3 text-start transition-all ${
                        palette === p.key ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="mb-2 flex gap-1">
                        {p.swatches.map((c) => (
                          <span key={c} className="size-5 rounded-full border border-border/50" style={{ background: c }} />
                        ))}
                      </div>
                      <p className="text-sm">{t(`custom.p${p.key.charAt(0).toUpperCase()}${p.key.slice(1)}`)}</p>
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="border-border/60 bg-background p-6 shadow-none">
                <div className="mb-4 flex items-center gap-2">
                  <Flower2 className="size-5 text-primary" />
                  <h3 className="font-serif text-xl">{t("custom.focal")}</h3>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
                  {data.flowers.slice(0, 6).map((f) => (
                    <button
                      key={f.slug}
                      onClick={() => setFocal(f.slug)}
                      className={`group overflow-hidden rounded-lg border text-start transition-all ${
                        focal === f.slug ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img src={f.img} alt={f.names[lang]} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                      <p className="px-2 py-1.5 text-xs">{f.names[lang]}</p>
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="border-border/60 bg-background p-6 shadow-none">
                <div className="mb-4 flex items-center gap-2">
                  <Ruler className="size-5 text-primary" />
                  <h3 className="font-serif text-xl">{t("custom.size")}</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {SIZES.map((s) => (
                    <button
                      key={s.key}
                      onClick={() => setSize(s.key)}
                      className={`overflow-hidden rounded-lg border text-start transition-all ${
                        size === s.key ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={s.img} alt={s.key} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <div className="p-2">
                        <p className="text-sm font-medium">{t(`custom.${s.key}`)}</p>
                        <p className="text-xs text-muted-foreground">{s.stems} · {t(`custom.${s.key}D`)}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
