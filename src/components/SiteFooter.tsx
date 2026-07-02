import { useTranslation } from "react-i18next";
import { Instagram, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { IG_URL } from "@/lib/site-data";

export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border/60 bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl italic">Moon Bloom</p>
            <p className="mt-2 text-sm text-muted-foreground">{t("footer.tag")}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="mb-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{t("footer.explore")}</p>
            <Link to="/" className="text-foreground/80 hover:text-primary">{t("nav.home")}</Link>
            <Link to="/flowers" className="text-foreground/80 hover:text-primary">{t("nav.flowers")}</Link>
            <Link to="/gallery" className="text-foreground/80 hover:text-primary">{t("nav.gallery")}</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary">{t("nav.contact")}</Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="mb-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{t("footer.reach")}</p>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary">
              <Instagram className="size-4" /> @YourFloristIG
            </a>
            <a href="mailto:hello@moonbloom.co" className="text-foreground/80 hover:text-primary">hello@moonbloom.co</a>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-muted-foreground">
          {t("footer.madeWith")} <Heart className="inline size-3 text-blush-foreground" fill="currentColor" /> © {new Date().getFullYear()} Moon Bloom
        </p>
      </div>
    </footer>
  );
}

