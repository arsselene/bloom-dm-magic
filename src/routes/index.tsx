import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Instagram, Sparkles, MessageCircle, Heart, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IG_URL } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moon Bloom — Bespoke Floral Studio" },
      { name: "description", content: "Bespoke blooms, crafted for you. Locally sourced floral arrangements, ordered easily via Instagram DM." },
      { property: "og:title", content: "Moon Bloom — Bespoke Floral Studio" },
      { property: "og:description", content: "Bespoke blooms, crafted for you. Order on Instagram." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=1200&q=80" },
    ],
  }),
  component: Index,
});


const HERO_IMG = "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=2000&q=80";

function Index() {
  const { t } = useTranslation();

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Floral arrangement" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center text-white">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/80">{t("hero.eyebrow")}</p>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            {t("hero.title1")}<br />
            <span className="italic">{t("hero.title2")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/90 sm:text-lg">{t("hero.sub")}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-8 text-sm shadow-soft">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="size-4" />
                {t("hero.cta")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/70 bg-transparent px-8 text-sm text-white hover:bg-white hover:text-foreground">
              <Link to="/gallery">
                {t("nav.gallery")} <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
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

      {/* PRICING */}
      <section id="pricing" className="bg-secondary/30 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
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
                className={`relative flex flex-col p-8 ${tier.featured ? "border-primary bg-background shadow-soft md:scale-105" : "border-border/60 bg-background shadow-none"}`}
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
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24 md:py-32">
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
      </section>
    </div>
  );
}
