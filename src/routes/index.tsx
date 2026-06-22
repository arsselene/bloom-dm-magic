import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Sparkles, MessageCircle, Heart, Flower2, Palette, Ruler, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const CATALOG = [
  { ref: "BQT-01", cat: "Birthdays", price: "$65", img: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80" },
  { ref: "BQT-02", cat: "Weddings", price: "$220", img: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=800&q=80" },
  { ref: "BQT-03", cat: "Anniversaries", price: "$120", img: "https://images.unsplash.com/photo-1469259943454-aa100abba749?w=800&q=80" },
  { ref: "BQT-04", cat: "Birthdays", price: "$45", img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80" },
  { ref: "BQT-05", cat: "Weddings", price: "$280", img: "https://images.unsplash.com/photo-1457089328389-f7f7d5786b32?w=800&q=80" },
  { ref: "BQT-06", cat: "Anniversaries", price: "$95", img: "https://images.unsplash.com/photo-1502209524164-acea936639a2?w=800&q=80" },
  { ref: "BQT-07", cat: "Birthdays", price: "$80", img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80" },
  { ref: "BQT-08", cat: "Weddings", price: "$320", img: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80" },
];

const CATEGORIES = ["All", "Birthdays", "Anniversaries", "Weddings"] as const;

const MOODBOARD = [
  { img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80", h: "h-72" },
  { img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80", h: "h-96" },
  { img: "https://images.unsplash.com/photo-1454262041357-5d96f50a2f27?w=600&q=80", h: "h-64" },
  { img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=600&q=80", h: "h-80" },
  { img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&q=80", h: "h-72" },
  { img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=600&q=80", h: "h-96" },
  { img: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&q=80", h: "h-64" },
  { img: "https://images.unsplash.com/photo-1599733589046-8a35ed0c89ea?w=600&q=80", h: "h-80" },
];

function Index() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const items = filter === "All" ? CATALOG : CATALOG.filter((i) => i.cat === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 z-30 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="font-serif text-xl italic text-white drop-shadow-md">
            Petal &amp; Stem
          </a>
          <nav className="hidden gap-8 text-sm text-white/90 md:flex">
            <a href="#process" className="hover:text-white">How to Order</a>
            <a href="#catalog" className="hover:text-white">Our Work</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Floral arrangement of peonies and roses" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/80">A Boutique Floral Studio</p>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Bespoke Blooms,<br />
            <span className="italic">Crafted for You.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/90 sm:text-lg">
            Locally sourced, custom-designed floral arrangements. Ordering is as easy as sending a DM.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="h-12 rounded-full px-8 text-sm shadow-soft">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="size-4" />
                Order on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">The Process</p>
          <h2 className="font-serif text-4xl md:text-5xl">How to order</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { icon: Sparkles, n: "01", t: "Browse & Dream", d: "Find an arrangement in our catalog or gather inspiration from the moodboard below." },
            { icon: MessageCircle, n: "02", t: "Slide into our DMs", d: "Send us a screenshot, your delivery date, and budget. We'll chat through the details." },
            { icon: Heart, n: "03", t: "Confirm & Enjoy", d: "We send a secure payment link, then hand-deliver something magical to your door." },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto mb-6 grid size-16 place-items-center rounded-full bg-secondary text-primary">
                <s.icon className="size-6" />
              </div>
              <p className="mb-2 font-serif text-sm italic text-muted-foreground">— Step {s.n} —</p>
              <h3 className="mb-3 text-2xl">{s.t}</h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">The Catalog</p>
            <h2 className="font-serif text-4xl md:text-5xl">Our work</h2>
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
                {c}
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
                <img
                  src={i.img}
                  alt={`Bouquet ${i.ref}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider">
                    <span>Ref: #{i.ref}</span>
                    <span>From {i.price}</span>
                  </div>
                  <p className="mt-2 flex items-center gap-1 text-sm">
                    <Instagram className="size-3.5" /> DM to order this
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MOODBOARD */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Moodboard</p>
          <h2 className="font-serif text-4xl md:text-5xl">Current season inspiration</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Not sure what you want? Screenshot any of these vibes and send them to us!
          </p>
        </div>
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {MOODBOARD.map((m, idx) => (
            <div key={idx} className={`${m.h} overflow-hidden rounded-md break-inside-avoid`}>
              <img src={m.img} alt="Floral inspiration" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="bg-blush/30 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Build Your Own</p>
            <h2 className="font-serif text-4xl md:text-5xl">Customization guide</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border/60 bg-background/80 p-8 shadow-none">
              <Palette className="mb-5 size-6 text-primary" />
              <h3 className="mb-2 text-2xl">1. Pick a palette</h3>
              <p className="mb-6 text-sm text-muted-foreground">Choose the mood that speaks to you.</p>
              <div className="space-y-3">
                {[
                  { n: "Pastels", c: ["#F8D7E3", "#E8D5F2", "#D5E8F2", "#FDE8C9"] },
                  { n: "Moody", c: ["#3A1F2B", "#5C2A3D", "#8B3A4E", "#241825"] },
                  { n: "Neutrals", c: ["#F5F0E8", "#D9CFC1", "#B5A992", "#8C7E68"] },
                  { n: "Brights", c: ["#FF6B6B", "#FFB84D", "#FFE066", "#A0E07A"] },
                ].map((p) => (
                  <div key={p.n} className="flex items-center justify-between">
                    <span className="text-sm">{p.n}</span>
                    <div className="flex gap-1">
                      {p.c.map((color) => (
                        <span key={color} className="size-5 rounded-full border border-border" style={{ background: color }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="border-border/60 bg-background/80 p-8 shadow-none">
              <Flower2 className="mb-5 size-6 text-primary" />
              <h3 className="mb-2 text-2xl">2. Choose a focal bloom</h3>
              <p className="mb-6 text-sm text-muted-foreground">The star of your arrangement.</p>
              <ul className="space-y-3 text-sm">
                {["Roses — classic & timeless", "Lilies — fragrant & elegant", "Peonies — lush & romantic", "Ranunculus — soft & layered", "Dahlias — bold & sculptural"].map((b) => (
                  <li key={b} className="flex items-start gap-2 border-b border-border/50 pb-3 last:border-0">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="border-border/60 bg-background/80 p-8 shadow-none">
              <Ruler className="mb-5 size-6 text-primary" />
              <h3 className="mb-2 text-2xl">3. Select the size</h3>
              <p className="mb-6 text-sm text-muted-foreground">From dainty to dramatic.</p>
              <div className="space-y-4">
                {[
                  { n: "Small", d: "A sweet, bedside gesture." },
                  { n: "Medium", d: "Our most-loved option." },
                  { n: "Showstopper", d: "Voluminous and grand." },
                ].map((s) => (
                  <div key={s.n}>
                    <p className="text-sm font-medium">{s.n}</p>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Size & Pricing</p>
          <h2 className="font-serif text-4xl md:text-5xl">Find your perfect size</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "The Petite", p: "45", d: "Perfect for bedside tables and small, sweet gestures.", feat: ["8–10 stems", "Hand-tied wrap", "Mini card included"], featured: false },
            { n: "The Classic", p: "120", d: "Our most popular size for birthdays and anniversaries.", feat: ["18–22 stems", "Premium wrap or vase", "Personalized note"], featured: true },
            { n: "The Grand", p: "260", d: "Voluminous and dramatic for major milestones.", feat: ["35+ stems", "Statement vessel", "White-glove delivery"], featured: false },
          ].map((t) => (
            <Card
              key={t.n}
              className={`relative flex flex-col p-8 ${
                t.featured ? "border-primary bg-secondary/60 shadow-soft md:scale-105" : "border-border/60 shadow-none"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs uppercase tracking-wider text-primary-foreground">
                  Most loved
                </span>
              )}
              <h3 className="text-3xl">{t.n}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">from</span>
                <span className="font-serif text-5xl">${t.p}</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{t.d}</p>
              <ul className="my-8 space-y-3 text-sm">
                {t.feat.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={t.featured ? "default" : "outline"} className="mt-auto rounded-full">
                <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram className="size-4" /> Order on Instagram
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
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Delivery & Care</p>
            <h2 className="font-serif text-4xl md:text-5xl">Frequently asked</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              { q: "Where do you deliver?", a: "We deliver throughout the metro area and surrounding suburbs (within a 20-mile radius of our studio). For deliveries beyond that, send us a DM and we'll do our best to make it happen." },
              { q: "How much is delivery?", a: "Local delivery starts at $15 and varies by distance. Free delivery on orders over $150 within our core zones. We'll confirm the exact fee when you order." },
              { q: "How do I care for my flowers?", a: "Trim the stems at a 45° angle, change the water every two days, and keep your arrangement out of direct sunlight and away from heat sources. We include a care card with every order." },
              { q: "How far in advance should I order?", a: "For everyday arrangements, 48 hours is ideal. For weddings and large events, please reach out at least 4–6 weeks in advance so we can source the perfect blooms." },
            ].map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-md border border-border/60 bg-background px-5"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline">
                  {f.q}
                </AccordionTrigger>
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
          <p className="mt-2 text-sm text-muted-foreground">A boutique floral studio</p>
          <div className="mt-8 flex flex-col items-center gap-3 text-sm">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary"
            >
              <Instagram className="size-4" /> @YourFloristIG
            </a>
            <a href="mailto:hello@petalandstem.co" className="text-muted-foreground hover:text-foreground">
              hello@petalandstem.co
            </a>
          </div>
          <p className="mt-10 text-xs text-muted-foreground">
            Made with <Heart className="inline size-3 text-blush-foreground" fill="currentColor" /> © {new Date().getFullYear()} Petal &amp; Stem
          </p>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-105"
      >
        <Instagram className="size-4" />
        <span className="hidden sm:inline">Message us on IG</span>
        <span className="sm:hidden">DM us</span>
      </a>
    </div>
  );
}
