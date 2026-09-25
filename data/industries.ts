import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "fruits-and-vegetables",
    name: "Fruits & Vegetables",
    description: "Packaging for produce transportation and handling.",
    mediaId: "industry-fruits-and-vegetables",
  },
  {
    slug: "bakery",
    name: "Bakery",
    description: "Packaging solutions for bakery products.",
    mediaId: "industry-bakery",
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    description:
      "Packaging requirements where consistency, protection and presentation matter.",
    mediaId: "industry-pharmaceuticals",
  },
  {
    slug: "paints-and-chemicals",
    name: "Paints & Chemicals",
    description: "Packaging for industrial and chemical-related products.",
    mediaId: "industry-paints-and-chemicals",
  },
  {
    slug: "fmcg-and-namkeen",
    name: "FMCG & Namkeen",
    description: "Packaging for fast-moving consumer goods and snack products.",
    mediaId: "industry-fmcg-and-namkeen",
  },
  {
    slug: "confectionery",
    name: "Confectionery",
    description: "Packaging focused on protection and presentation.",
    mediaId: "industry-confectionery",
  },
  {
    slug: "industrial-manufacturing",
    name: "Industrial Manufacturing",
    description: "Packaging for components, parts and manufactured goods.",
    mediaId: "industry-industrial-manufacturing",
  },
  {
    slug: "ecommerce-and-logistics",
    name: "E-Commerce & Logistics",
    description:
      "Packaging designed around transportation, handling, storage, shipping and product protection.",
    mediaId: "industry-ecommerce-and-logistics",
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
