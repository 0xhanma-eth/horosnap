import { Hono } from "hono";
import { registerSnapHandler } from "@farcaster/snap-hono";
import { getMonthlyHoroscope, ZODIAC_SIGNS, type ZodiacSign } from "./horoscope.js";

const app = new Hono();

const CREATOR_HANDLE = "@hanma";
const CREATOR_PROFILE = "https://farcaster.xyz/hanma.base.eth";

function snapBase(req: Request): string {
  const fromEnv = process.env.SNAP_PUBLIC_BASE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const host = req.headers.get("host") ?? "localhost:3003";
  const isLocal = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host);
  return `${isLocal ? "http" : "https"}://${host}`;
}

registerSnapHandler(
  app,
  async (ctx) => {
    const base = snapBase(ctx.request);
    const url = new URL(ctx.request.url);
    const selectedSign = url.searchParams.get("sign") as ZodiacSign | null;

    // ── Detail view ──────────────────────────────────────────
    if (selectedSign && ZODIAC_SIGNS.includes(selectedSign)) {
      const data = getMonthlyHoroscope(selectedSign);
      const shareText =
        `${data.emoji} ${data.name} horoscope — May 1, 2026\n\n` +
        `💰 ${data.finance.slice(0, 100)}...\n\n` +
        `📖 "${data.stoic.slice(0, 80)}..."\n\n` +
        `by ${CREATOR_HANDLE} 👇`;

      return {
        version: "2.0",
        theme: { accent: "purple" },
        ui: {
          root: "page",
          elements: {
            page: {
              type: "stack",
              props: {},
              children: ["header", "sep", "finance", "sep2", "quote", "btn-row", "creator-row"],
            },
            header: {
              type: "text",
              props: { content: `${data.emoji} ${data.name} — May 1, 2026`, weight: "bold" },
            },
            sep: {
              type: "text",
              props: { content: "💰 Finance & Life", weight: "bold", size: "sm" },
            },
            finance: {
              type: "text",
              props: { content: data.finance, size: "sm" },
            },
            sep2: {
              type: "text",
              props: { content: "📖 Stoic Quote", weight: "bold", size: "sm" },
            },
            quote: {
              type: "text",
              props: { content: `"${data.stoic}"`, size: "sm" },
            },
            "btn-row": {
              type: "stack",
              props: { direction: "horizontal" },
              children: ["back-btn", "share-btn"],
            },
            "back-btn": {
              type: "button",
              props: { label: "← All Signs" },
              on: { press: { action: "submit", params: { target: `${base}/` } } },
            },
            "share-btn": {
              type: "button",
              props: { label: "🔁 Share", variant: "primary" },
              on: {
                press: {
                  action: "compose_cast",
                  params: {
                    text: shareText,
                    embeds: [`${base}/?sign=${selectedSign}`],
                  },
                },
              },
            },
            // Attribution row with follow button
            "creator-row": {
              type: "stack",
              props: { direction: "horizontal" },
              children: ["creator-label", "follow-btn"],
            },
            "creator-label": {
              type: "text",
              props: { content: `✨ by ${CREATOR_HANDLE}`, size: "sm" },
            },
            "follow-btn": {
              type: "button",
              props: { label: "👤 Follow", variant: "primary" },
              on: {
                press: {
                  action: "compose_cast",
                  params: {
                    text: `Following ${CREATOR_HANDLE} for monthly horoscopes 🔮\n\nCheck yours 👇`,
                    embeds: [`${base}/`],
                  },
                },
              },
            },
          },
        },
      };
    }

    // ── Grid view ─────────────────────────────────────────────
    const signButtons: Record<string, object> = {};
    const row1: string[] = [];
    const row2: string[] = [];
    const row3: string[] = [];

    ZODIAC_SIGNS.forEach((sign, i) => {
      const data = getMonthlyHoroscope(sign);
      const id = `btn-${sign}`;
      signButtons[id] = {
        type: "button",
        props: { label: `${data.emoji} ${data.shortName}` },
        on: { press: { action: "submit", params: { target: `${base}/?sign=${sign}` } } },
      };
      if (i < 4) row1.push(id);
      else if (i < 8) row2.push(id);
      else row3.push(id);
    });

    return {
      version: "2.0",
      theme: { accent: "purple" },
      ui: {
        root: "page",
        elements: {
          page: {
            type: "stack",
            props: {},
            children: ["title", "subtitle", "grid-r1", "grid-r2", "grid-r3", "footer-row"],
          },
          title: {
            type: "text",
            props: { content: "✨ Monthly Horoscope — May 1, 2026", weight: "bold" },
          },
          subtitle: {
            type: "text",
            props: { content: "Tap your sign for finance insights & stoic wisdom", size: "sm" },
          },
          "grid-r1": { type: "stack", props: { direction: "horizontal" }, children: row1 },
          "grid-r2": { type: "stack", props: { direction: "horizontal" }, children: row2 },
          "grid-r3": { type: "stack", props: { direction: "horizontal" }, children: row3 },
          "footer-row": {
            type: "stack",
            props: { direction: "horizontal" },
            children: ["footer-text", "footer-follow-btn"],
          },
          footer: {
            type: "text",
            props: { content: "" },
          },
          "footer-text": {
            type: "text",
            props: { content: `Updated monthly · by ${CREATOR_HANDLE}`, size: "sm" },
          },
          "footer-follow-btn": {
            type: "button",
            props: { label: "👤 Follow", variant: "primary" },
            on: {
              press: {
                action: "compose_cast",
                params: {
                  text: `Following ${CREATOR_HANDLE} for monthly horoscopes 🔮\n\nCheck yours 👇`,
                  embeds: [`${base}/`],
                },
              },
            },
          },
          ...signButtons,
        },
      },
    };
  },
  {
    title: "Monthly Horoscope",
    description: `12 zodiac signs · Finance insights · Stoic quotes · by ${CREATOR_HANDLE}`,
  },
);

export default app;
