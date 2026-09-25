import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "corrugated-boxes",
    name: "Corrugated Boxes",
    number: "01",
    shortDescription:
      "Reliable protection for transportation, storage and distribution.",
    description:
      "Corrugated packaging designed to provide practical protection, structural strength and dependable handling across a wide range of applications.",
    applications: [
      "Fruits & Vegetables",
      "Bakery",
      "FMCG",
      "Pharmaceuticals",
      "Chemicals",
      "Paints",
      "Confectionery",
      "Namkeen & Snacks",
      "Industrial Products",
      "E-commerce & Logistics",
    ],
    customization: [
      "Dimensions",
      "Board strength",
      "Ply configuration",
      "Flute requirements",
      "Printing",
      "Slotting",
      "Stitching",
      "Pasting",
      "Die-cut structures",
    ],
    mediaId: "product-corrugated-boxes",
  },
  {
    slug: "shipper-cartons",
    name: "Shipper Cartons",
    number: "02",
    shortDescription:
      "Cartons for packaging, handling, transportation and logistics.",
    description:
      "Shipper cartons manufactured for protection, stackability, handling and transportation, with dimensions developed around the requirement.",
    applications: [
      "Transportation",
      "Handling",
      "Storage",
      "E-commerce & Logistics",
      "Industrial Products",
    ],
    customization: ["Dimensions", "Board strength", "Printing", "Structure"],
    mediaId: "product-shipper-cartons",
  },
  {
    slug: "die-cut-cartons",
    name: "Die-Cut Cartons",
    number: "03",
    shortDescription:
      "Customized structures shaped for a specific product requirement.",
    description:
      "Die-cut cartons are customized packaging structures produced through die-cutting, where shape, structure and finished form follow the product.",
    applications: [
      "Product packaging",
      "Retail packaging",
      "Customized industrial packaging",
      "Special-shaped packaging",
    ],
    customization: ["Die-cut structures", "Dimensions", "Printing", "Creasing"],
    mediaId: "product-die-cut-cartons",
  },
  {
    slug: "mono-cartons",
    name: "Mono Cartons",
    number: "04",
    shortDescription:
      "Paperboard cartons for products that need a finished presentation.",
    description:
      "Mono cartons are paperboard packaging structures used where clean printing, precise folding and product presentation matter.",
    applications: [
      "FMCG",
      "Pharmaceuticals",
      "Confectionery",
      "Retail products",
      "Consumer goods",
    ],
    customization: ["Dimensions", "Printing", "Structure", "Finishing"],
    mediaId: "product-mono-cartons",
  },
  {
    slug: "offset-printed-boxes",
    name: "Offset Printed Boxes",
    number: "05",
    shortDescription:
      "Printed packaging where presentation and brand visibility matter.",
    description:
      "Packaging where printing and presentation are part of the requirement, produced for brand visibility and consistent production.",
    applications: ["FMCG", "Retail products", "Consumer goods", "Confectionery"],
    customization: ["Printed artwork", "Dimensions", "Structure", "Finishing"],
    mediaId: "product-offset-printed-boxes",
  },
  {
    slug: "2-ply-paper-rolls",
    name: "2-Ply Paper Rolls",
    number: "06",
    shortDescription:
      "Paper-based materials for downstream packaging and conversion.",
    description:
      "Paper-based packaging materials manufactured for downstream packaging and conversion requirements.",
    applications: ["Downstream packaging", "Conversion"],
    customization: [],
    mediaId: "product-2-ply-paper-rolls",
  },
  {
    slug: "cello-tape",
    name: "Cello Tape",
    number: "07",
    shortDescription: "Printed and transparent cello tape for packaging.",
    description:
      "Packaging tape offered as printed cello tape and transparent cello tape.",
    applications: ["Packaging", "Dispatch"],
    customization: ["Printed", "Transparent"],
    variants: [
      { slug: "printed", name: "Printed" },
      { slug: "transparent", name: "Transparent" },
    ],
    mediaId: "product-cello-tape",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3) {
  return products.filter((product) => product.slug !== slug).slice(0, limit);
}
