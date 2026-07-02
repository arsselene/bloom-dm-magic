import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Instagram, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IG_URL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Moon Bloom" },
      { name: "description", content: "DM us on Instagram or email hello@moonbloom.co to start your custom bouquet." },
      { property: "og:title", content: "Contact — Moon Bloom" },
      { property: "og:description", content: "Let's create something beautiful together." },
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
          <div className="mt-10">
            <Button asChild size="lg" className="h-14 rounded-full px-10 text-base shadow-soft">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="size-5" /> {t("contact.cta")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border/60 bg-background p-8 text-center shadow-none">
            <Instagram className="mx-auto size-6 text-primary" />
            <h3 className="mt-4 font-serif text-xl">Instagram</h3>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-muted-foreground hover:text-primary">
              @YourFloristIG
            </a>
          </Card>
          <Card className="border-border/60 bg-background p-8 text-center shadow-none">
            <Mail className="mx-auto size-6 text-primary" />
            <h3 className="mt-4 font-serif text-xl">{t("contact.email")}</h3>
            <a href="mailto:hello@moonbloom.co" className="mt-2 inline-block text-sm text-muted-foreground hover:text-primary">
              hello@moonbloom.co
            </a>
          </Card>
          <Card className="border-border/60 bg-background p-8 text-center shadow-none">
            <Clock className="mx-auto size-6 text-primary" />
            <h3 className="mt-4 font-serif text-xl">{t("contact.hours")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t("contact.hoursVal")}</p>
          </Card>
        </div>
      </section>
    </div>
  );
}

