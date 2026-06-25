import { createServerFn } from "@tanstack/react-start";
import { FLOWERS, type Flower } from "./flowers";

export type FlowerDTO = Flower;

export const getFlowers = createServerFn({ method: "GET" })
  .inputValidator((data: { lang?: string } | undefined) => ({ lang: data?.lang ?? "en" }))
  .handler(async (): Promise<{ flowers: FlowerDTO[]; count: number }> => {
    // Backend-side: in a real deployment this could hit a botanical API.
    // For now we serve the curated dataset from the server boundary so the
    // client never imports it directly.
    return { flowers: FLOWERS, count: FLOWERS.length };
  });
