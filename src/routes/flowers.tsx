import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Instagram, Minus, Plus, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  IG_URL,
  AVAILABLE_COLORS,
  COLOR_SWATCHES,
  FLOWER_TYPES,
  type FlowerTypeKey,
} from "@/lib/site-data";

export const Route = createFileRoute("/flowers")({
  head: () => ({
    meta: [
      { title: "Customize Your Bloom | Moon Bloom" },
      { name: "description", content: "Design your handmade satin bouquet in three steps and send the order straight to Instagram." },
      { property: "og:title", content: "Customize Your Bloom — Moon Bloom" },
      { property: "og:description", content: "Pick a flower type, colors and quantity. Send your order via Instagram." },
    ],
  }),
  component: CustomizePage,
});

type ColorKey = (typeof AVAILABLE_COLORS)[number];

function CustomizePage() {
  const { t } = useTranslation();

  const [type, setType] = useState<FlowerTypeKey | null>(null);
  const [colors, setColors] = useState<ColorKey[]>([]);
  const [count, setCount] = useState(12);

  const toggleColor = (c: ColorKey) => {
    setColors((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );
  };

  const send = () => {
    if (!type) {
      toast.error(t("custom.pickType"));
      return;
    }
    if (colors.length === 0) {
      toast.error(t("custom.pickColor"));
      return;
    }
    const colorNames = colors.map((c) => t(`filters.colors.${c}`)).join(", ");
    const orderText =
      `Hi Moon Bloom! 🌸\n` +
      `I'd like to order a custom bouquet:\n` +
      `• ${t("custom.types." + type)}\n` +
      `• ${t("custom.colorsLabel")}: ${colorNames}\n` +
      `• ${t("custom.count")}: ${count}`;
    try {
      void navigator.clipboard?.writeText(orderText);
    } catch {
      // ignore — user can retype from the on-screen summary
    }
    window.open(IG_URL, "_blank", "noopener,noreferrer");
    toast.success(t("custom.copied"));
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-blush/30 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("flowersPage.eyebrow")}</p>
          <h1 className="font-serif text-4xl md:text-6xl">{t("flowersPage.title")}</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("flowersPage.sub")}</p>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        {/* Step 1 — Flower type */}
        <div className="mb-14">
          <h2 className="mb-6 font-serif text-2xl md:text-3xl">{t("custom.step1")}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {FLOWER_TYPES.map((ft) => {
              const active = type === ft.key;
              return (
                <button
                  key={ft.key}
                  onClick={() => setType(ft.key)}
                  className={`group overflow-hidden rounded-xl border bg-background text-start transition-all ${
                    active ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img src={ft.img} alt={t(`custom.types.${ft.key}`)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    {active && (
                      <span className="absolute end-2 top-2 grid size-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft">
                        <Check className="size-4" />
                      </span>
                    )}
                  </div>
                  <p className="p-3 text-sm font-medium">{t(`custom.types.${ft.key}`)}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 — Colors (multi-select) */}
        <div className="mb-14">
          <h2 className="mb-2 font-serif text-2xl md:text-3xl">{t("custom.step2")}</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            {colors.length > 0
              ? colors.map((c) => t(`filters.colors.${c}`)).join(" • ")
              : "—"}
          </p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-7">
            {AVAILABLE_COLORS.map((c) => {
              const active = colors.includes(c);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggleColor(c)}
                  className={`group flex flex-col items-center gap-2 rounded-xl border bg-background p-3 transition-all ${
                    active ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                  }`}
                  aria-pressed={active}
                >
                  <span
                    className="relative grid size-12 place-items-center rounded-full border border-border/60 shadow-sm"
                    style={{ background: COLOR_SWATCHES[c] }}
                  >
                    {active && (
                      <Check className="size-5 text-white drop-shadow" strokeWidth={3} />
                    )}
                  </span>
                  <span className="text-xs font-medium text-center">
                    {t(`filters.colors.${c}`)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3 — Count */}
        <div className="mb-14">
          <h2 className="mb-6 font-serif text-2xl md:text-3xl">{t("custom.step3")}</h2>
          <Card className="flex flex-wrap items-center justify-between gap-4 border-border/60 bg-background p-6 shadow-none">
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">{t("custom.count")}</p>
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-11 rounded-full"
                onClick={() => setCount((c) => Math.max(1, c - 1))}
                aria-label="Decrease"
              >
                <Minus className="size-4" />
              </Button>
              <span className="w-14 text-center font-serif text-4xl">{count}</span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-11 rounded-full"
                onClick={() => setCount((c) => Math.min(99, c + 1))}
                aria-label="Increase"
              >
                <Plus className="size-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Summary */}
        <Card className="mb-8 border-border/60 bg-secondary/30 p-6 shadow-none">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("custom.summary")}</p>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="text-muted-foreground">{t("filters.type")}: </span>
              <span className="font-medium">{type ? t(`custom.types.${type}`) : "—"}</span>
            </li>
            <li>
              <span className="text-muted-foreground">{t("custom.colorsLabel")}: </span>
              <span className="font-medium">
                {colors.length > 0
                  ? colors.map((c) => t(`filters.colors.${c}`)).join(", ")
                  : "—"}
              </span>
            </li>
            <li>
              <span className="text-muted-foreground">{t("custom.count")}: </span>
              <span className="font-medium">{count}</span>
            </li>
          </ul>
        </Card>

        {/* CTA */}
        <Button
          onClick={send}
          size="lg"
          className="h-14 w-full rounded-full text-base shadow-soft"
        >
          <Instagram className="size-5" /> {t("custom.cta")}
        </Button>
      </section>
    </div>
  );
}
