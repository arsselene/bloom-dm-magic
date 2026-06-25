import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Instagram, Sparkles, MessageCircle, Heart, Flower2, Palette, Ruler, Truck, Languages, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FLOWERS } from "@/lib/flowers";
import { getInspoPhotos } from "@/lib/unsplash.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Petal & Stem — Bespoke Floral Studio" },
      { name: "description", content: "Bespoke blooms, crafted for you. Locally sourced floral arrangements, ordered easily via Instagram DM." },
      { property: "og:title", content: "Petal & Stem — Bespoke Floral Studio" },
      { property: "og:description", content: "Bespoke blooms, crafted for you. Order on Instagram." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=1200&q=80" },
    ],
  }),
  component: Index,
});

const IG_URL = "https://instagram.com/yourfloristig";
const HERO_IMG = "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=2000&q=80";

type Cat = "all" | "birthdays" | "anniversaries" | "weddings";
const CATEGORIES: Cat[] = ["all", "birthdays", "anniversaries", "weddings"];

const MOODBOARD: { img: string; h: string; cat: Exclude<Cat, "all"> }[] = [
  { img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80", h: "h-72", cat: "birthdays" },
  { img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80", h: "h-96", cat: "weddings" },
  { img: "https://images.unsplash.com/photo-1454262041357-5d96f50a2f27?w=600&q=80", h: "h-64", cat: "anniversaries" },
  { img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=600&q=80", h: "h-80", cat: "anniversaries" },
  { img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&q=80", h: "h-72", cat: "birthdays" },
  { img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=600&q=80", h: "h-96", cat: "weddings" },
  { img: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&q=80", h: "h-64", cat: "weddings" },
  { img: "https://images.unsplash.com/photo-1599733589046-8a35ed0c89ea?w=600&q=80", h: "h-80", cat: "birthdays" },
];

const CATALOG = [
  { ref: "BQT-01", cat: "birthdays", price: "$65", img: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80" },
  { ref: "BQT-02", cat: "weddings", price: "$220", img: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=800&q=80" },
  { ref: "BQT-03", cat: "anniversaries", price: "$120", img: "https://images.unsplash.com/photo-1469259943454-aa100abba749?w=800&q=80" },
  { ref: "BQT-04", cat: "birthdays", price: "$45", img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80" },
  { ref: "BQT-05", cat: "weddings", price: "$280", img: "https://images.unsplash.com/photo-1457089328389-f7f7d5786b32?w=800&q=80" },
  { ref: "BQT-06", cat: "anniversaries", price: "$95", img: "https://images.unsplash.com/photo-1502209524164-acea936639a2?w=800&q=80" },
  { ref: "BQT-07", cat: "birthdays", price: "$80", img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80" },
  { ref: "BQT-08", cat: "weddings", price: "$320", img: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80" },
];

// Customization presets: each palette + size combo points to an example arrangement image.
const PALETTES = [
  { key: "pastel",  swatches: ["#F8D7E3", "#E8D5F2", "#D5E8F2", "#FDE8C9"], img: "https://images.unsplash.com/photo-1457089328389-f7f7d5786b32?w=900&q=80" },
  { key: "moody",   swatches: ["#3A1F2B", "#5C2A3D", "#8B3A4E", "#241825"], img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=900&q=80" },
  { key: "neutral", swatches: ["#F5F0E8", "#D9CFC1", "#B5A992", "#8C7E68"], img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=900&q=80" },
  { key: "bright",  swatches: ["#FF6B6B", "#FFB84D", "#FFE066", "#A0E07A"], img: "https://images.unsplash.com/photo-1503936380431-cdfb147ed5dc?w=900&q=80" },
] as const;

const SIZES = [
  { key: "small",  stems: "8–10",  img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=900&q=80" },
  { key: "medium", stems: "18–22", img: "https://images.unsplash.com/photo-1469259943454-aa100abba749?w=900&q=80" },
  { key: "large",  stems: "35+",   img: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=900&q=80" },
] as const;

const LANGS = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "ع" },
] as const;

function LangSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? "en").slice(0, 2);
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-white/15 px-1 py-1 text-xs backdrop-blur-sm">
      <Languages className="ms-1 size-3.5 text-white/90" />
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => i18n.changeLanguage(l.code)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            current === l.code ? "bg-white text-foreground" : "text-white/90 hover:text-white"
          }`}
          aria-label={l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

function Index() {
  const { t, i18n } = useTranslation();
  const lang = ((i18n.resolvedLanguage ?? "en").slice(0, 2) as "en" | "fr" | "ar");

  // Moodboard filter
  const [moodCat, setMoodCat] = useState<Cat>("all");
  const moodItems = moodCat === "all" ? MOODBOARD : MOODBOARD.filter((m) => m.cat === moodCat);

  // Unsplash inspo
  const fetchInspo = useServerFn(getInspoPhotos);
  const [inspoPage, setInspoPage] = useState(1);
  const inspoQuery = useQuery({
    queryKey: ["inspo", inspoPage],
    queryFn: () => fetchInspo({ data: { page: inspoPage } }),
    staleTime: 60_000,
  });

  // Customization studio state
  const [palette, setPalette] = useState<(typeof PALETTES)[number]["key"]>("pastel");
  const [focal, setFocal] = useState<string>(FLOWERS[0].slug);
  const [size, setSize] = useState<(typeof SIZES)[number]["key"]>("medium");
  const paletteObj = useMemo(() => PALETTES.find((p) => p.key === palette)!, [palette]);
  const focalObj = useMemo(() => FLOWERS.find((f) => f.slug === focal) ?? FLOWERS[0], [focal]);
  const sizeObj = useMemo(() => SIZES.find((s) => s.key === size)!, [size]);

  // Catalog filter
  const [filter, setFilter] = useState<Cat>("all");
  const items = filter === "all" ? CATALOG : CATALOG.filter((i) => i.cat === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 z-30 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="font-serif text-xl italic text-white drop-shadow-md">
            Petal &amp; Stem
          </a>
          <nav className="hidden gap-8 text-sm text-white/90 md:flex">
            <a href="#process" className="hover:text-white">{t("nav.process")}</a>
            <a href="#moodboard" className="hover:text-white">{t("nav.inspo")}</a>
            <a href="#customize" className="hover:text-white">Customize</a>
            <a href="#catalog" className="hover:text-white">{t("nav.catalog")}</a>
            <Link to="/for-you" className="hover:text-white">{t("nav.foryou")}</Link>
            <a href="#pricing" className="hover:text-white">{t("nav.pricing")}</a>
          </nav>
          <LangSwitcher />
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Floral arrangement" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/80">{t("hero.eyebrow")}</p>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            {t("hero.title1")}<br />
            <span className="italic">{t("hero.title2")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/90 sm:text-lg">{t("hero.sub")}</p>
          <div className="mt-10">
            <Button asChild size="lg" className="h-12 rounded-full px-8 text-sm shadow-soft">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="size-4" />
                {t("hero.cta")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("process.eyebrow")}</p>
          <h2 className="font-serif text-4xl md:text-5xl">{t("process.title")}</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { icon: Sparkles, n: "01", t: t("process.s1t"), d: t("process.s1d") },
            { icon: MessageCircle, n: "02", t: t("process.s2t"), d: t("process.s2d") },
            { icon: Heart, n: "03", t: t("process.s3t"), d: t("process.s3d") },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto mb-6 grid size-16 place-items-center rounded-full bg-secondary text-primary">
                <s.icon className="size-6" />
              </div>
              <p className="mb-2 font-serif text-sm italic text-muted-foreground">— {t("process.step")} {s.n} —</p>
              <h3 className="mb-3 text-2xl">{s.t}</h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 1. MOODBOARD / INSPIRATION (with category filter) */}
      <section id="moodboard" className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("moodboard.eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t("moodboard.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("moodboard.sub")}</p>
          </div>
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
        </div>
      </section>

      {/* 2. MORE INSPO (Unsplash API) */}
      <section id="inspo" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
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
      </section>

      {/* 3. CUSTOMIZE — interactive preview */}
      <section id="customize" className="bg-blush/30 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("custom.eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t("custom.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("custom.sub")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {/* Preview */}
            <div className="md:col-span-2">
              <Card className="sticky top-6 overflow-hidden border-border/60 bg-background p-0 shadow-soft">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  {/* Layered preview: palette base image + focal flower thumbnail overlay */}
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

            {/* Controls */}
            <div className="space-y-6 md:col-span-3">
              {/* Palette */}
              <Card className="border-border/60 bg-background/90 p-6 shadow-none">
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

              {/* Focal flower */}
              <Card className="border-border/60 bg-background/90 p-6 shadow-none">
                <div className="mb-4 flex items-center gap-2">
                  <Flower2 className="size-5 text-primary" />
                  <h3 className="font-serif text-xl">{t("custom.focal")}</h3>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
                  {FLOWERS.slice(0, 6).map((f) => (
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

              {/* Size */}
              <Card className="border-border/60 bg-background/90 p-6 shadow-none">
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

      {/* 4. OUR WORK (catalog) — last */}
      <section id="catalog" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
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
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {items.map((i) => (
              <a
                key={i.ref}
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[3/4] overflow-hidden rounded-md bg-muted"
              >
                <img src={i.img} alt={`Bouquet ${i.ref}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider">
                    <span>{t("catalog.ref")}: #{i.ref}</span>
                    <span>{t("catalog.from")} {i.price}</span>
                  </div>
                  <p className="mt-2 flex items-center gap-1 text-sm">
                    <Instagram className="size-3.5" /> {t("catalog.dm")}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOR YOU teaser → /for-you page */}
      <section className="bg-blush/20 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("foryou.eyebrow")}</p>
          <h2 className="font-serif text-4xl md:text-5xl">{t("foryou.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("foryou.ctaSub")}</p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/for-you">
                {t("foryou.cta")} <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("pricing.eyebrow")}</p>
          <h2 className="font-serif text-4xl md:text-5xl">{t("pricing.title")}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "The Petite", p: "45", d: "Perfect for bedside tables and small gestures.", feat: ["8–10 stems", "Hand-tied wrap", "Mini card included"], featured: false },
            { n: "The Classic", p: "120", d: "Our most popular size for birthdays and anniversaries.", feat: ["18–22 stems", "Premium wrap or vase", "Personalized note"], featured: true },
            { n: "The Grand", p: "260", d: "Voluminous and dramatic for major milestones.", feat: ["35+ stems", "Statement vessel", "White-glove delivery"], featured: false },
          ].map((tier) => (
            <Card
              key={tier.n}
              className={`relative flex flex-col p-8 ${tier.featured ? "border-primary bg-secondary/60 shadow-soft md:scale-105" : "border-border/60 shadow-none"}`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs uppercase tracking-wider text-primary-foreground">
                  {t("pricing.most")}
                </span>
              )}
              <h3 className="text-3xl">{tier.n}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">{t("pricing.from")}</span>
                <span className="font-serif text-5xl">${tier.p}</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{tier.d}</p>
              <ul className="my-8 space-y-3 text-sm">
                {tier.feat.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={tier.featured ? "default" : "outline"} className="mt-auto rounded-full">
                <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram className="size-4" /> {t("pricing.order")}
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <Truck className="mx-auto mb-4 size-6 text-primary" />
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("faq.eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t("faq.title")}</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              { q: "Where do you deliver?", a: "We deliver throughout the metro area and surrounding suburbs (within a 20-mile radius)." },
              { q: "How much is delivery?", a: "Local delivery starts at $15 and varies by distance. Free delivery on orders over $150." },
              { q: "How do I care for my flowers?", a: "Trim stems at 45°, change water every two days, keep out of direct sunlight." },
              { q: "How far in advance should I order?", a: "48 hours for everyday arrangements; 4–6 weeks for weddings and events." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-md border border-border/60 bg-background px-5">
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-serif text-2xl italic">Petal &amp; Stem</p>
          <p className="mt-2 text-sm text-muted-foreground">{t("footer.tag")}</p>
          <div className="mt-8 flex flex-col items-center gap-3 text-sm">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-primary">
              <Instagram className="size-4" /> @YourFloristIG
            </a>
            <a href="mailto:hello@petalandstem.co" className="text-muted-foreground hover:text-foreground">hello@petalandstem.co</a>
          </div>
          <p className="mt-10 text-xs text-muted-foreground">
            {t("footer.madeWith")} <Heart className="inline size-3 text-blush-foreground" fill="currentColor" /> © {new Date().getFullYear()} Petal &amp; Stem
          </p>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 end-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-105"
      >
        <Instagram className="size-4" />
        <span className="hidden sm:inline">{t("cta.full")}</span>
        <span className="sm:hidden">{t("cta.short")}</span>
      </a>
    </div>
  );
}
