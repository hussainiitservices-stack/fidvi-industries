export const mediaCategories = [
  "hero",
  "factory",
  "machinery",
  "products",
  "industries",
  "manufacturing",
  "gallery",
  "packaging",
  "dispatch",
] as const;

export type MediaCategory = (typeof mediaCategories)[number];

export const mediaRatios = {
  hero: "16 / 9",
  product: "4 / 3",
  industry: "4 / 3",
  editorial: "3 / 4",
  square: "1 / 1",
} as const;

export type MediaRatio = keyof typeof mediaRatios;

/**
 * fidvi — confirmed FIDVI photograph. Safe to describe as the facility or product.
 * reference — client reference. Must not be labeled as a FIDVI product or factory.
 * placeholder — stand-in image. Never describe it as the FIDVI facility or a FIDVI product.
 * unassigned — slot reserved. Render the empty frame, not a stock stand-in.
 */
export type MediaOrigin = "fidvi" | "reference" | "placeholder" | "unassigned";

export type MediaAsset = {
  id: string;
  src: string | null;
  alt: string;
  width: number;
  height: number;
  category: MediaCategory;
  ratio: MediaRatio;
  origin: MediaOrigin;
  priority?: boolean;
};

export type VideoAsset = {
  id: string;
  src: string | null;
  posterId: string | null;
  label: string;
  origin: MediaOrigin;
};
