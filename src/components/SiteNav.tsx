import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages, Menu, X, Instagram, User, ChevronDown } from "lucide-react";
import { IG_URL } from "@/lib/site-data";


const LANGS = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "ع" },
] as const;

function LangSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? "en").slice(0, 2);
  return (
    <div className="inline-flex items-center gap-0.5 rounded-full bg-secondary/60 px-1 py-1 text-xs">
      <Languages className="ms-1 size-3.5 text-muted-foreground" />
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => i18n.changeLanguage(l.code)}
          className={`rounded-full px-2 py-1 transition-colors ${
            current === l.code
              ? "bg-primary text-primary-foreground"
              : "text-foreground/70 hover:text-foreground"
          }`}
          aria-label={l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

type MegaCol = { heading: string; links: { label: string; to: string; hash?: string }[] };
type Category = { label: string; to: string; columns?: MegaCol[] };

const CATEGORIES: Category[] = [
  {
    label: "All Flowers",
    to: "/flowers",
    columns: [
      {
        heading: "Shop by type",
        links: [
          { label: "Fresh Blooms", to: "/flowers" },
          { label: "Satin Flowers", to: "/flowers" },
          { label: "Silk Flowers", to: "/flowers" },
          { label: "Dried & Preserved", to: "/flowers" },
        ],
      },
      {
        heading: "Popular",
        links: [
          { label: "Roses", to: "/flowers" },
          { label: "Peonies", to: "/flowers" },
          { label: "Tulips", to: "/flowers" },
          { label: "Orchids", to: "/flowers" },
        ],
      },
      {
        heading: "Bundles",
        links: [
          { label: "Petite Bouquets", to: "/" },
          { label: "Classic Bouquets", to: "/" },
          { label: "Grand Bouquets", to: "/" },
        ],
      },
    ],
  },
  {
    label: "Satin & Craft Flowers",
    to: "/flowers",
    columns: [
      {
        heading: "Models",
        links: [
          { label: "Open Flower", to: "/flowers" },
          { label: "Closed Flower", to: "/flowers" },
          { label: "Plumeria", to: "/flowers" },
          { label: "Dahlia", to: "/flowers" },
        ],
      },
      {
        heading: "Build your own",
        links: [
          { label: "Custom Order Builder", to: "/flowers" },
          { label: "Wholesale Inquiry", to: "/contact" },
        ],
      },
    ],
  },
  {
    label: "Specialty Blooms",
    to: "/flowers",
    columns: [
      {
        heading: "Seasonal",
        links: [
          { label: "Ranunculus", to: "/flowers" },
          { label: "Anemone", to: "/flowers" },
          { label: "Lisianthus", to: "/flowers" },
          { label: "Hydrangea", to: "/flowers" },
        ],
      },
      {
        heading: "Statement",
        links: [
          { label: "Orchid Stems", to: "/flowers" },
          { label: "Lilies", to: "/flowers" },
          { label: "Sunflowers", to: "/flowers" },
        ],
      },
    ],
  },
  {
    label: "Ribbons & Trim",
    to: "/gallery",
    columns: [
      {
        heading: "Ribbons",
        links: [
          { label: "Silk Ribbon", to: "/gallery" },
          { label: "Velvet Ribbon", to: "/gallery" },
          { label: "Satin Ribbon", to: "/gallery" },
        ],
      },
      {
        heading: "Wire & Tape",
        links: [
          { label: "Floral Wire", to: "/gallery" },
          { label: "Floral Tape", to: "/gallery" },
          { label: "Wrapping Paper", to: "/gallery" },
        ],
      },
    ],
  },
  {
    label: "Occasions",
    to: "/gallery",
    columns: [
      {
        heading: "Celebrate",
        links: [
          { label: "Weddings", to: "/gallery" },
          { label: "Birthdays", to: "/gallery" },
          { label: "Anniversaries", to: "/gallery" },
        ],
      },
      {
        heading: "Everyday",
        links: [
          { label: "Just Because", to: "/gallery" },
          { label: "Sympathy", to: "/gallery" },
          { label: "Thank You", to: "/gallery" },
        ],
      },
    ],
  },
];

export function SiteNav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const links: { to: string; label: string }[] = [
    { to: "/", label: t("nav.home") },
    { to: "/flowers", label: t("nav.flowers") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background text-foreground">
      {/* Promo bar */}
      <div className="w-full bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 py-2 text-center text-[11px] tracking-wide sm:text-xs">
          <Instagram className="size-3.5" />
          <span>DM us on Instagram to place your order — free delivery over $150!</span>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4 md:gap-8">
          <Link to="/" className="shrink-0 font-serif text-2xl italic">
            Moon Bloom
          </Link>

          <div className="ms-auto flex items-center gap-3">

            <div className="hidden md:block"><LangSwitcher /></div>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs hover:border-primary/50"
            >
              <Instagram className="size-3.5" /> {t("nav.dm")}
            </a>
            <button
              className="hidden md:inline-flex size-10 items-center justify-center rounded-full border border-border hover:border-primary/50"
              aria-label="Account"
            >
              <User className="size-4" />
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Categories bar with mega-menu */}
        <nav className="hidden border-t border-border/60 md:block">
          <ul className="mx-auto flex max-w-7xl items-stretch justify-center px-6">
            {CATEGORIES.map((cat) => (
              <li key={cat.label} className="group relative">
                <Link
                  to={cat.to}
                  className="flex items-center gap-1 px-5 py-3 text-xs uppercase tracking-[0.15em] text-foreground/80 transition-colors hover:text-primary"
                >
                  {cat.label}
                  {cat.columns && <ChevronDown className="size-3 opacity-60" />}
                </Link>
                {cat.columns && (
                  <div className="invisible absolute start-1/2 top-full z-50 w-[640px] -translate-x-1/2 rounded-md border border-border bg-background p-6 opacity-0 shadow-soft transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-3 gap-6">
                      {cat.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            {col.heading}
                          </p>
                          <ul className="space-y-2">
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  to={l.to}
                                  className="text-sm text-foreground/80 hover:text-primary"
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <nav className="flex flex-col gap-1">

              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  className="rounded-md px-3 py-2.5 text-sm text-foreground/80 hover:bg-secondary/60"
                  activeProps={{ className: "rounded-md px-3 py-2.5 text-sm bg-secondary text-foreground" }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-border/60 pt-3">
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Shop</p>
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.label}
                    to={c.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary/60"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3">
                <LangSwitcher />
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground"
                >
                  <Instagram className="size-3.5" /> {t("nav.dm")}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
