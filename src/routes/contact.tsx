import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IG_URL, IG_HANDLE } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Moon Bloom" },
      { name: "description", content: "DM Moon Bloom on Instagram to start your custom satin bouquet." },
      { property: "og:title", content: "Contact — Moon Bloom" },
      { property: "og:description", content: "Instagram DMs only — the fastest way to reach us." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative overflow-hidden bg-blush/30 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("contact.eyebrow")}</p>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">{t("contact.title")}</h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">{t("contact.sub")}</p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button asChild size="lg" className="h-14 rounded-full px-10 text-base shadow-soft">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="size-5" /> {t("contact.cta")}
              </a>
            </Button>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-xl italic text-primary hover:underline"
            >
              {IG_HANDLE}
            </a>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("contact.onlyIg")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
