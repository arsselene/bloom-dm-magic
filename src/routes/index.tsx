import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Instagram, Sparkles, MessageCircle, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IG_URL } from "@/lib/site-data";
import { HERO_BLOOM } from "@/lib/bloom-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moon Bloom — Handcrafted Satin Floral Studio" },
      { name: "description", content: "Handmade satin & ribbon bouquets, designed to last. Order easily via Instagram DM." },
      { property: "og:title", content: "Moon Bloom — Handcrafted Satin Floral Studio" },
      { property: "og:description", content: "Handcrafted satin bouquets, made to last. Order on Instagram." },
      { property: "og:image", content: `https://bloom-dm-magic.lovable.app${HERO_BLOOM}` },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useTranslation();

  return (
    <div>
      {/* HERO */}
      <section className="relative -mt-[72px] flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BLOOM} alt="Handmade satin bouquet" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-20 text-center text-white">
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

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 pb-24 md:pb-32">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("faq.eyebrow")}</p>
          <h2 className="font-serif text-4xl md:text-5xl">{t("faq.title")}</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {[
            { q: "How do I place an order?", a: "Send us a DM on Instagram — it's our only ordering channel. Share your favorite pieces from the gallery or your customization, plus the date you need it." },
            { q: "How long does a custom bouquet take?", a: "Each piece is handmade, so please allow around 5–10 days depending on size and detail." },
            { q: "Do satin bouquets really last?", a: "Yes — kept away from direct sunlight and dust, our satin and ribbon bouquets stay beautiful for years." },
            { q: "Can I request a fully custom design?", a: "Absolutely. Choose 'Custom' in the color step, or DM us with your ideas, colors and inspiration photos." },
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
