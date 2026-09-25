import type { MediaAsset, VideoAsset } from "./types";

const pending = (
  asset: Omit<MediaAsset, "src" | "origin" | "width" | "height"> & {
    width?: number;
    height?: number;
  },
): MediaAsset => ({
  src: null,
  origin: "unassigned",
  width: asset.width ?? 1600,
  height: asset.height ?? 1200,
  ...asset,
});

/**
 * Registry of media slots. Real FIDVI files replace `src` here.
 * Leave `src` null until a photograph is confirmed. Do not point these
 * slots at stock images and describe them as the FIDVI facility.
 */
export const mediaRegistry = {
  "hero-facility": pending({
    id: "hero-facility",
    alt: "Industrial paper packaging hall",
    category: "hero",
    ratio: "hero",
    width: 1920,
    height: 1080,
    priority: true,
  }),
  "product-corrugated-boxes": pending({
    id: "product-corrugated-boxes",
    alt: "Corrugated boxes",
    category: "products",
    ratio: "product",
  }),
  "product-shipper-cartons": pending({
    id: "product-shipper-cartons",
    alt: "Shipper cartons",
    category: "products",
    ratio: "product",
  }),
  "product-die-cut-cartons": pending({
    id: "product-die-cut-cartons",
    alt: "Die-cut cartons",
    category: "products",
    ratio: "product",
  }),
  "product-mono-cartons": pending({
    id: "product-mono-cartons",
    alt: "Mono cartons",
    category: "products",
    ratio: "product",
  }),
  "product-offset-printed-boxes": pending({
    id: "product-offset-printed-boxes",
    alt: "Offset printed boxes",
    category: "products",
    ratio: "product",
  }),
  "product-2-ply-paper-rolls": pending({
    id: "product-2-ply-paper-rolls",
    alt: "2-ply paper rolls",
    category: "products",
    ratio: "product",
  }),
  "product-cello-tape": pending({
    id: "product-cello-tape",
    alt: "Cello tape",
    category: "products",
    ratio: "product",
  }),
  "industry-fruits-and-vegetables": pending({
    id: "industry-fruits-and-vegetables",
    alt: "Packaging for fruits and vegetables",
    category: "industries",
    ratio: "industry",
  }),
  "industry-bakery": pending({
    id: "industry-bakery",
    alt: "Packaging for bakery products",
    category: "industries",
    ratio: "industry",
  }),
  "industry-pharmaceuticals": pending({
    id: "industry-pharmaceuticals",
    alt: "Packaging for pharmaceutical products",
    category: "industries",
    ratio: "industry",
  }),
  "industry-paints-and-chemicals": pending({
    id: "industry-paints-and-chemicals",
    alt: "Packaging for paints and chemicals",
    category: "industries",
    ratio: "industry",
  }),
  "industry-fmcg-and-namkeen": pending({
    id: "industry-fmcg-and-namkeen",
    alt: "Packaging for FMCG and namkeen",
    category: "industries",
    ratio: "industry",
  }),
  "industry-confectionery": pending({
    id: "industry-confectionery",
    alt: "Packaging for confectionery",
    category: "industries",
    ratio: "industry",
  }),
  "industry-industrial-manufacturing": pending({
    id: "industry-industrial-manufacturing",
    alt: "Packaging for industrial manufacturing",
    category: "industries",
    ratio: "industry",
  }),
  "industry-ecommerce-and-logistics": pending({
    id: "industry-ecommerce-and-logistics",
    alt: "Packaging for e-commerce and logistics",
    category: "industries",
    ratio: "industry",
  }),
  "process-paper-reel-selection": pending({
    id: "process-paper-reel-selection",
    alt: "Paper reel selection",
    category: "manufacturing",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "process-corrugation": pending({
    id: "process-corrugation",
    alt: "Corrugation",
    category: "manufacturing",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "process-pasting": pending({
    id: "process-pasting",
    alt: "Pasting",
    category: "manufacturing",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "process-creasing": pending({
    id: "process-creasing",
    alt: "Creasing",
    category: "manufacturing",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "process-printing-conversion": pending({
    id: "process-printing-conversion",
    alt: "Printing and conversion",
    category: "manufacturing",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "process-slotting-die-cutting": pending({
    id: "process-slotting-die-cutting",
    alt: "Slotting and die cutting",
    category: "manufacturing",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "process-stitching-pasting": pending({
    id: "process-stitching-pasting",
    alt: "Stitching and pasting",
    category: "manufacturing",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "process-quality-inspection": pending({
    id: "process-quality-inspection",
    alt: "Quality inspection",
    category: "manufacturing",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "process-bundling-packing": pending({
    id: "process-bundling-packing",
    alt: "Bundling and packing",
    category: "manufacturing",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "process-dispatch": pending({
    id: "process-dispatch",
    alt: "Dispatch",
    category: "dispatch",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "gallery-factory": pending({
    id: "gallery-factory",
    alt: "Factory",
    category: "factory",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "gallery-machinery": pending({
    id: "gallery-machinery",
    alt: "Machinery",
    category: "machinery",
    ratio: "product",
  }),
  "gallery-manufacturing": pending({
    id: "gallery-manufacturing",
    alt: "Manufacturing",
    category: "manufacturing",
    ratio: "product",
  }),
  "gallery-products": pending({
    id: "gallery-products",
    alt: "Products",
    category: "products",
    ratio: "product",
  }),
  "gallery-packaging": pending({
    id: "gallery-packaging",
    alt: "Packaging",
    category: "packaging",
    ratio: "editorial",
    width: 1200,
    height: 1600,
  }),
  "gallery-dispatch": pending({
    id: "gallery-dispatch",
    alt: "Dispatch",
    category: "dispatch",
    ratio: "product",
  }),
} satisfies Record<string, MediaAsset>;

export type MediaId = keyof typeof mediaRegistry;

export const videoRegistry = {
  "hero-loop": {
    id: "hero-loop",
    src: null,
    posterId: "hero-facility",
    label: "Facility film",
    origin: "unassigned",
  },
  "factory-walkthrough": {
    id: "factory-walkthrough",
    src: null,
    posterId: null,
    label: "Factory walkthrough",
    origin: "unassigned",
  },
  "corrugated-boxes": {
    id: "corrugated-boxes",
    src: "/videos/Cardboard_boxes.mp4",
    posterId: "product-corrugated-boxes",
    label: "Corrugated boxes",
    origin: "fidvi",
  },
} satisfies Record<string, VideoAsset>;

export type VideoId = keyof typeof videoRegistry;

export function getMedia(id: MediaId): MediaAsset {
  return mediaRegistry[id];
}

export function getVideo(id: VideoId): VideoAsset {
  return videoRegistry[id];
}

export function isAssignableMedia(asset: MediaAsset) {
  return asset.origin === "fidvi" && asset.src !== null;
}

const placeholderSrc: Partial<Record<MediaId, string>> = {
  "hero-facility": "/images/hero/facility.jpg",
  "product-corrugated-boxes": "/images/products/corrugated-boxes.jpg",
  "product-shipper-cartons": "/images/products/corrugated-boxes.jpg",
  "product-die-cut-cartons": "/images/products/mono-cartons.jpg",
  "product-mono-cartons": "/images/products/mono-cartons.jpg",
  "product-offset-printed-boxes": "/images/products/mono-cartons.jpg",
  "product-2-ply-paper-rolls": "/images/products/paper-reels.jpg",
  "product-cello-tape": "/images/gallery/dispatch.jpg",
  "industry-fruits-and-vegetables": "/images/products/corrugated-boxes.jpg",
  "industry-bakery": "/images/products/mono-cartons.jpg",
  "industry-pharmaceuticals": "/images/products/mono-cartons.jpg",
  "industry-paints-and-chemicals": "/images/products/corrugated-boxes.jpg",
  "industry-fmcg-and-namkeen": "/images/products/mono-cartons.jpg",
  "industry-confectionery": "/images/products/mono-cartons.jpg",
  "industry-industrial-manufacturing": "/images/machinery/rollers.jpg",
  "industry-ecommerce-and-logistics": "/images/gallery/dispatch.jpg",
  "process-paper-reel-selection": "/images/products/paper-reels.jpg",
  "process-corrugation": "/images/machinery/rollers.jpg",
  "process-pasting": "/images/machinery/rollers.jpg",
  "process-creasing": "/images/products/corrugated-boxes.jpg",
  "process-printing-conversion": "/images/products/mono-cartons.jpg",
  "process-slotting-die-cutting": "/images/machinery/rollers.jpg",
  "process-stitching-pasting": "/images/products/corrugated-boxes.jpg",
  "process-quality-inspection": "/images/products/corrugated-boxes.jpg",
  "process-bundling-packing": "/images/gallery/dispatch.jpg",
  "process-dispatch": "/images/gallery/dispatch.jpg",
  "gallery-factory": "/images/hero/facility.jpg",
  "gallery-machinery": "/images/machinery/rollers.jpg",
  "gallery-manufacturing": "/images/products/paper-reels.jpg",
  "gallery-products": "/images/products/corrugated-boxes.jpg",
  "gallery-packaging": "/images/products/mono-cartons.jpg",
  "gallery-dispatch": "/images/gallery/dispatch.jpg",
};

for (const [id, src] of Object.entries(placeholderSrc)) {
  const asset = mediaRegistry[id as MediaId];
  asset.src = src;
  asset.origin = "placeholder";
  asset.alt = `${asset.alt}. Placeholder image, not a photograph of FIDVI Industries.`;
}
