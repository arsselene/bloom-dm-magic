import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Instagram, Minus, Plus, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getFlowers } from "@/lib/flowers.functions";
import { IG_URL } from "@/lib/site-data";

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

const MODELS = [
  {
    key: "open",
    label: "Open Flower",
    desc: "Fully bloomed, generous petals.",
    img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=600&q=80&auto=format",
  },
  {
    key: "closed",
    label: "Closed Flower",
    desc: "Tight buds, sculpted silhouette.",
    img: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&q=80&auto=format",
  },
  {
    key: "plumeria",
    label: "Plumeria",
    desc: "Five-petal tropical bloom.",
    img: "https://images.unsplash.com/photo-1567748157439-651aca2ff064?w=600&q=80&auto=format",
  },
  {
    key: "dahlia",
    label: "Dahlia",
    desc: "Geometric, layered showstopper.",
    img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&q=80&auto=format",
  },
] as const;

const COLORS = [
  { key: "red", label: "Red", hex: "#C0392B" },
  { key: "white", label: "White", hex: "#F8F5F0" },
  { key: "blush", label: "Blush", hex: "#E2A79D" },
  { key: "royal-blue", label: "Royal Blue", hex: "#1F3A93" },
  { key: "gold", label: "Gold", hex: "#D4AF37" },
  { key: "sage", label: "Sage", hex: "#8A9A5B" },
  { key: "black", label: "Black", hex: "#1a1a1a" },
  { key: "lavender", label: "Lavender", hex: "#B57EDC" },
] as const;

function FlowersPage() {
  const { i18n } = useTranslation();
  const lang = ((i18n.resolvedLanguage ?? "en").slice(0, 2) as "en" | "fr" | "ar");
  const { data } = useSuspenseQuery(flowersQuery);

  const [model, setModel] = useState<(typeof MODELS)[number]["key"]>("open");
  const [qty, setQty] = useState(12);
  const [color, setColor] = useState<(typeof COLORS)[number]["key"]>("blush");
  const [copied, setCopied] = useState(false);

  const modelObj = useMemo(() => MODELS.find((m) => m.key === model)!, [model]);
  const colorObj = useMemo(() => COLORS.find((c) => c.key === color)!, [color]);

  const orderText = `Hi Petal & Stem! 🌸\n\nI'd like to place a custom order:\n• Flower model: ${modelObj.label}\n• Quantity: ${qty} stems\n• Color: ${colorObj.label}\n\nCould you share pricing and lead time? Thank you!`;

  async function handleGenerate() {
    try {
      await navigator.clipboard.writeText(orderText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
    window.open(IG_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      {/* Hero band */}
      <section className="bg-blush/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Satin & Silk</p>
          <h1 className="font-serif text-4xl md:text-6xl">Our flower models</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every bloom we stock — photographed on clean white so you see true color and shape.
          </p>
        </div>
      </section>

      {/* Flower grid — catalog style */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {data.flowers.map((f) => (
            <Card
              key={f.slug}
              className="overflow-hidden rounded-md border border-border/70 bg-background p-0 shadow-none transition-shadow hover:shadow-soft"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={f.img}
                  alt={f.names[lang]}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-border/60 p-3 text-center">
                <h3 className="font-serif text-base leading-tight">{f.names[lang]}</h3>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {f.names.en}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Build Your Custom Order — 3 step flow */}
      <section id="build" className="border-t border-border/60 bg-secondary/20 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Build Your Custom Order</p>
            <h2 className="font-serif text-4xl md:text-5xl">Three quick steps</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Pick a model, quantity and color — we'll format your DM for you.
            </p>
          </div>

          {/* Step 1 */}
          <StepCard n="01" title="Pick the flower model">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {MODELS.map((m) => {
                const active = model === m.key;
                return (
                  <button
                    key={m.key}
                    onClick={() => setModel(m.key)}
                    className={`overflow-hidden rounded-md border text-start transition-all ${
                      active
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="aspect-square overflow-hidden bg-white">
                      <img src={m.img} alt={m.label} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="border-t border-border/60 p-3">
                      <p className="text-sm font-medium">{m.label}</p>
                      <p className="text-[11px] text-muted-foreground">{m.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </StepCard>

          {/* Step 2 */}
          <StepCard n="02" title="Choose the quantity">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
              <div className="inline-flex items-center rounded-full border border-border bg-background">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid size-12 place-items-center rounded-s-full hover:bg-secondary/60"
                  aria-label="Decrease quantity"
                >
                  <Minus className="size-4" />
                </button>
                <input
                  type="number"
                  min={1}
                  max={999}
                  value={qty}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10);
                    if (!Number.isNaN(v)) setQty(Math.max(1, Math.min(999, v)));
                  }}
                  className="h-12 w-20 border-x border-border bg-transparent text-center font-serif text-2xl outline-none"
                />
                <button
                  onClick={() => setQty((q) => Math.min(999, q + 1))}
                  className="grid size-12 place-items-center rounded-e-full hover:bg-secondary/60"
                  aria-label="Increase quantity"
                >
                  <Plus className="size-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {[6, 12, 24, 36, 50].map((n) => (
                  <button
                    key={n}
                    onClick={() => setQty(n)}
                    className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                      qty === n
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {n} stems
                  </button>
                ))}
              </div>
            </div>
          </StepCard>

          {/* Step 3 */}
          <StepCard n="03" title="Choose the color">
            <div className="flex flex-wrap items-center gap-4">
              {COLORS.map((c) => {
                const active = color === c.key;
                return (
                  <button
                    key={c.key}
                    onClick={() => setColor(c.key)}
                    className="group flex flex-col items-center gap-2"
                    aria-label={c.label}
                  >
                    <span
                      className={`size-11 rounded-full border-2 shadow-sm transition-transform ${
                        active ? "border-primary ring-2 ring-primary/30 scale-110" : "border-white group-hover:scale-105"
                      }`}
                      style={{ background: c.hex }}
                    />
                    <span className={`text-[11px] ${active ? "text-foreground" : "text-muted-foreground"}`}>
                      {c.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </StepCard>

          {/* Summary + CTA */}
          <div className="mt-10 rounded-md border border-border bg-background p-6 shadow-soft">
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Your order</p>
            <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-serif text-xl">
              <span>{modelObj.label}</span>
              <span className="text-muted-foreground">·</span>
              <span>{qty} stems</span>
              <span className="text-muted-foreground">·</span>
              <span className="inline-flex items-center gap-2">
                <span className="size-4 rounded-full border border-border" style={{ background: colorObj.hex }} />
                {colorObj.label}
              </span>
            </div>
            <Button
              onClick={handleGenerate}
              size="lg"
              className="h-12 w-full rounded-full text-sm sm:w-auto sm:px-8"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Copied — opening Instagram…" : "Generate Order Details for Instagram"}
            </Button>
            <p className="mt-3 text-xs italic text-muted-foreground">
              Clicking this will format your choices so you can easily copy and paste them into our Instagram DMs!
            </p>
            <pre className="mt-4 whitespace-pre-wrap rounded-md border border-border/60 bg-secondary/40 p-4 text-xs text-foreground/80">
{orderText}
            </pre>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
            >
              <Instagram className="size-3.5" /> Open Instagram directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function StepCard({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Card className="mb-6 border-border/70 bg-background p-6 shadow-none md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
          {n}
        </span>
        <h3 className="font-serif text-2xl">{title}</h3>
      </div>
      {children}
    </Card>
  );
}
