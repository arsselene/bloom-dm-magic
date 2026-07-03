import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages, Menu, X, Instagram } from "lucide-react";
import { IG_URL } from "@/lib/site-data";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "ع" },
] as const;

function LangSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? "en").slice(0, 2);
  const isDark = tone === "dark";
  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full px-1 py-1 text-xs ${
        isDark ? "bg-white/15 backdrop-blur-sm" : "bg-secondary/60"
      }`}
    >
      <Languages className={`ms-1 size-3.5 ${isDark ? "text-white/90" : "text-muted-foreground"}`} />
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => i18n.changeLanguage(l.code)}
          className={`rounded-full px-2 py-1 transition-colors ${
            current === l.code
              ? isDark
                ? "bg-white text-foreground"
                : "bg-primary text-primary-foreground"
              : isDark
                ? "text-white/90 hover:text-white"
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

export function SiteNav() {
  const { t } = useTranslation();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  const links: { to: string; label: string }[] = [
    { to: "/", label: t("nav.home") },
    { to: "/flowers", label: t("nav.flowers") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.contact") },
  ];

  // Transparent over hero on home; solid translucent elsewhere.
  const wrap = isHome
    ? "absolute top-0 z-40 w-full text-white"
    : "sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 text-foreground backdrop-blur";

  const linkBase = isHome
    ? "text-white/90 hover:text-white"
    : "text-foreground/70 hover:text-foreground";

  return (
    <header className={wrap}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <Link to="/" className={`font-serif text-xl italic ${isHome ? "drop-shadow" : ""}`}>
          Petal &amp; Stem
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className={`relative tracking-wide transition-colors ${linkBase}`}
              activeProps={{
                className: `relative tracking-wide ${isHome ? "text-white" : "text-foreground"} after:absolute after:-bottom-1.5 after:start-0 after:h-px after:w-full after:bg-current`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangSwitcher tone={isHome ? "dark" : "light"} />
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs transition-colors ${
              isHome
                ? "bg-white text-foreground hover:bg-white/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            <Instagram className="size-3.5" /> {t("nav.dm")}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background text-foreground md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
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
            <div className="mt-2 flex items-center justify-between border-t border-border/60 pt-3">
              <LangSwitcher tone="light" />
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
      )}
    </header>
  );
}
