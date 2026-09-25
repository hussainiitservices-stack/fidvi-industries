import type { ContactChannel } from "./types";

export const company = {
  legalName: "FIDVI Industries Private Limited",
  brandName: "FIDVI INDUSTRIES",
  wordmark: "FIDVI",
  tagline: "Creating Tomorrow, Inspiring Forever.",
  positioning: "Manufacturing Solutions. Built for Tomorrow.",
  supportingLine:
    "Packaging is where we begin. Innovation is where we're going.",
  eyebrow: "Manufacturing Solutions",
  intro:
    "FIDVI Industries is a manufacturing company focused on corrugated and paper-based packaging solutions, combining practical manufacturing capabilities with a future-focused approach to packaging.",
  address: {
    line1: "130, Nagzhiri Industrial Area",
    line2: "Dewas Road",
    city: "Ujjain",
    state: "Madhya Pradesh",
    postalCode: "456010",
    country: "India",
  },
  contact: {
    phone: null,
    email: null,
    whatsapp: null,
  } satisfies ContactChannel,
} as const;

export function formatAddress(style: "stacked"): string[];
export function formatAddress(style?: "inline"): string;
export function formatAddress(style: "inline" | "stacked" = "inline") {
  const { line1, line2, city, state, country, postalCode } = company.address;
  const locality = `${city}, ${state}, ${country} — ${postalCode}`;

  if (style === "stacked") {
    return [line1, line2, locality];
  }

  return `${line1}, ${line2}, ${locality}`;
}
