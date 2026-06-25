import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { getFlowers } from "@/lib/flowers.functions";
import { Card } from "@/components/ui/card";

const flowersQuery = queryOptions({
  queryKey: ["flowers"],
  queryFn: () => getFlowers({ data: { lang: "en" } }),
  staleTime: 5 * 60_000,
});

export const Route = createFileRoute("/for-you")({
  head: () => ({
    meta: [
      { title: "For You — Flower Garden | Petal & Stem" },
      { name: "description", content: "A curated garden of every flower we love, with names and photos." },
      { property: "og:title", content: "For You — The Flower Garden" },
      { property: "og:description", content: "Browse every flower variety we work with." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(flowersQuery),
  component: ForYouPage,
});

function ForYouPage() {
  const { t, i18n } = useTranslation();
  const lang = ((i18n.resolvedLanguage ?? "en").slice(0, 2) as "en" | "fr" | "ar");
  const { data } = useSuspenseQuery(flowersQuery);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-serif text-xl italic">Petal &amp; Stem</Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> {t("foryou.back")}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("foryou.eyebrow")}</p>
          <h1 className="font-serif text-4xl md:text-6xl">{t("foryou.title")}</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t("foryou.sub", { count: data.count })}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {data.flowers.map((f) => (
            <Card key={f.slug} className="overflow-hidden border-border/60 bg-background p-0 shadow-none">
              <div className="aspect-square overflow-hidden">
                <img src={f.img} alt={f.names[lang]} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl">{f.names[lang]}</h3>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                  {f.names.en} · {f.season}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc[lang]}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
