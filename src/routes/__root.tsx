import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";

import "@fontsource/noto-naskh-arabic/400.css";
import "@fontsource/noto-naskh-arabic/600.css";
import "../lib/i18n";
import i18n, { RTL_LANGS } from "../lib/i18n";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { IG_URL } from "../lib/site-data";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Moon Bloom — Handcrafted Satin Floral Studio" },
      { name: "description", content: "Handmade satin & ribbon bouquets, made to last. Order easily via Instagram DM." },
      { property: "og:title", content: "Moon Bloom — Handcrafted Satin Floral Studio" },
      { property: "og:description", content: "Handmade satin & ribbon bouquets, made to last. Order easily via Instagram DM." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Moon Bloom — Handcrafted Satin Floral Studio" },
      { name: "twitter:description", content: "Handmade satin & ribbon bouquets, made to last. Order easily via Instagram DM." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { i18n: i18nInstance } = useTranslation();

  // Detect the visitor's language on the client only, AFTER hydration, so
  // SSR ("en") and the initial client render match. Then apply RTL/dir.
  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("i18nextLng") : null;
    const nav = typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "en";
    const supported = ["en", "fr", "ar"];
    const wanted = stored && supported.includes(stored) ? stored : supported.includes(nav) ? nav : "en";
    if (wanted !== i18n.language) void i18n.changeLanguage(wanted);
    const handler = (lng: string) => {
      window.localStorage.setItem("i18nextLng", lng);
      document.documentElement.lang = lng;
      document.documentElement.dir = RTL_LANGS.has(lng) ? "rtl" : "ltr";
    };
    handler(i18n.language ?? "en");
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep effect deps typechecking happy without changing logic
  void i18nInstance;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteNav />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 end-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-105"
        aria-label="Message us on Instagram"
      >
        <Instagram className="size-4" />
        <span className="hidden sm:inline">DM us on IG</span>
      </a>
      <Toaster />
    </QueryClientProvider>
  );
}
