import type { MediaAsset, VideoAsset } from "./types";
const stock = (asset: Omit<MediaAsset, "origin">): MediaAsset => ({
  origin: "stock",
  ...asset,
});

const clientRef = (asset: Omit<MediaAsset, "origin">): MediaAsset => ({
  origin: "client",
  ...asset,
});

/**
 * Registry of media slots.
 *
 * - `stock` — free stock / Wikimedia photographs. Never describe as FIDVI's own.
 * - `client` — client-supplied reference photos (often enhanced). Not confirmed FIDVI assets.
 * Switch a slot to `origin: "fidvi"` only once FIDVI confirms ownership.
 * See CREDITS.md for source URLs and licenses.
 */
export const mediaRegistry = {
  "hero-facility": clientRef({
    id: "hero-facility",
    src: "/images/hero/packaging-factory-floor.webp",
    alt: "Printer slotter on a packaging factory floor with corrugated board on the feed table",
    category: "hero",
    ratio: "hero",
    width: 2800,
    height: 1574,
    priority: true,
  }),
  "product-corrugated-boxes": stock({
    id: "product-corrugated-boxes",
    src: "/images/products/corrugated-box-open.webp",
    alt: "Open corrugated cardboard box with packing tape and scissors on a workbench",
    category: "products",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "product-shipper-cartons": clientRef({
    id: "product-shipper-cartons",
    src: "/images/products/shipper-cartons-warehouse.webp",
    alt: "Open corrugated shipper carton fitted with cardboard partitions",
    category: "products",
    ratio: "product",
    width: 1960,
    height: 1470,
  }),
  "product-die-cut-cartons": clientRef({
    id: "product-die-cut-cartons",
    src: "/images/products/die-cut-flat-boxes.webp",
    alt: "Die-cut corrugated mailer boxes, one assembled and one as a flat blank",
    category: "products",
    ratio: "product",
    width: 2208,
    height: 1656,
  }),
  "product-mono-cartons": stock({
    id: "product-mono-cartons",
    src: "/images/products/mono-cartons-beauty.webp",
    alt: "Paperboard mono cartons and packaging components for consumer products",
    category: "products",
    ratio: "product",
    width: 2333,
    height: 1750,
  }),
  "product-offset-printed-boxes": clientRef({
    id: "product-offset-printed-boxes",
    src: "/images/products/printed-kraft-packaging.webp",
    alt: "Open kraft mailer box with offset-printed artwork inside the lid",
    category: "products",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "product-2-ply-paper-rolls": stock({
    id: "product-2-ply-paper-rolls",
    src: "/images/products/paper-reels.webp",
    alt: "Large kraft paper reels stored in a packaging production hall",
    category: "products",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "product-cello-tape": stock({
    id: "product-cello-tape",
    src: "/images/products/cello-tape-sealing.webp",
    alt: "Hands sealing a corrugated carton with clear packing tape",
    category: "products",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "industry-fruits-and-vegetables": stock({
    id: "industry-fruits-and-vegetables",
    src: "/images/industries/fruit-produce-boxes.webp",
    alt: "Stacks of corrugated produce boxes used for fruit and vegetables",
    category: "industries",
    ratio: "industry",
    width: 2400,
    height: 1800,
  }),
  "industry-bakery": stock({
    id: "industry-bakery",
    src: "/images/industries/bakery-dough.webp",
    alt: "Hands kneading dough on a wooden bakery work surface",
    category: "industries",
    ratio: "industry",
    width: 2400,
    height: 1800,
  }),
  "industry-pharmaceuticals": stock({
    id: "industry-pharmaceuticals",
    src: "/images/industries/pharma-packaging.webp",
    alt: "White and coloured cartons stacked on warehouse shelving",
    category: "industries",
    ratio: "industry",
    width: 2400,
    height: 1800,
  }),
  "industry-paints-and-chemicals": stock({
    id: "industry-paints-and-chemicals",
    src: "/images/industries/paints-industrial.webp",
    alt: "Worker in a hard hat beside large industrial machinery",
    category: "industries",
    ratio: "industry",
    width: 2400,
    height: 1800,
  }),
  "industry-fmcg-and-namkeen": stock({
    id: "industry-fmcg-and-namkeen",
    src: "/images/industries/fmcg-boxed-goods.webp",
    alt: "Warehouse worker reviewing stacked corrugated shipping boxes",
    category: "industries",
    ratio: "industry",
    width: 2400,
    height: 1800,
  }),
  "industry-confectionery": stock({
    id: "industry-confectionery",
    src: "/images/industries/confectionery-pasta.webp",
    alt: "Close view of dry pasta shapes suggesting food packaging needs",
    category: "industries",
    ratio: "industry",
    width: 2400,
    height: 1800,
  }),
  "industry-industrial-manufacturing": stock({
    id: "industry-industrial-manufacturing",
    src: "/images/industries/industrial-manufacturing.webp",
    alt: "Factory worker inspecting heavy industrial equipment",
    category: "industries",
    ratio: "industry",
    width: 2400,
    height: 1800,
  }),
  "industry-ecommerce-and-logistics": stock({
    id: "industry-ecommerce-and-logistics",
    src: "/images/industries/ecommerce-logistics.webp",
    alt: "Delivery van being loaded with corrugated shipping boxes",
    category: "industries",
    ratio: "industry",
    width: 2400,
    height: 1800,
  }),
  "process-paper-reel-selection": stock({
    id: "process-paper-reel-selection",
    src: "/images/manufacturing/01-paper-reels.webp",
    alt: "Paper reels staged for packaging production",
    category: "manufacturing",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "process-corrugation": clientRef({
    id: "process-corrugation",
    src: "/images/manufacturing/02-corrugation.webp",
    alt: "Single facer corrugating machine with rolls and suction unit",
    category: "manufacturing",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "process-pasting": stock({
    id: "process-pasting",
    src: "/images/manufacturing/03-pasting-board-layers.webp",
    alt: "Close view of corrugated board layers showing fluting and liners",
    category: "manufacturing",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "process-creasing": clientRef({
    id: "process-creasing",
    src: "/images/manufacturing/04-creasing-slotter.webp",
    alt: "Rotary slotter with creasing and slotting wheels for board conversion",
    category: "manufacturing",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "process-printing-conversion": clientRef({
    id: "process-printing-conversion",
    src: "/images/manufacturing/05-printing-conversion.webp",
    alt: "Printer slotter converting corrugated board on a factory floor",
    category: "manufacturing",
    ratio: "product",
    width: 2400,
    height: 1801,
  }),
  "process-slotting-die-cutting": stock({
    id: "process-slotting-die-cutting",
    src: "/images/manufacturing/06-die-cutting.webp",
    alt: "Flatbed die-cutting and converting line for packaging blanks",
    category: "manufacturing",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "process-stitching-pasting": clientRef({
    id: "process-stitching-pasting",
    src: "/images/manufacturing/07-stitching.webp",
    alt: "Semi-automatic carton stitching machine on a factory floor",
    category: "manufacturing",
    ratio: "product",
    width: 2064,
    height: 1548,
  }),
  "process-quality-inspection": stock({
    id: "process-quality-inspection",
    src: "/images/manufacturing/08-quality-flute.webp",
    alt: "Cut section of corrugated board showing flute profiles",
    category: "manufacturing",
    ratio: "product",
    width: 1600,
    height: 1200,
  }),
  "process-bundling-packing": stock({
    id: "process-bundling-packing",
    src: "/images/manufacturing/09-bundling-storage.webp",
    alt: "Stacks of finished cartons stored in a packaging warehouse",
    category: "manufacturing",
    ratio: "product",
    width: 2252,
    height: 1688,
  }),
  "process-dispatch": stock({
    id: "process-dispatch",
    src: "/images/manufacturing/10-dispatch.webp",
    alt: "Workers loading corrugated boxes into a delivery van",
    category: "manufacturing",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "facility-warehouse": stock({
    id: "facility-warehouse",
    src: "/images/factory/warehouse-aisle.webp",
    alt: "Wide aisle between high industrial racks in a packaging warehouse",
    category: "factory",
    ratio: "hero",
    width: 2400,
    height: 1350,
  }),
  "gallery-factory": stock({
    id: "gallery-factory",
    src: "/images/gallery/factory-interior.webp",
    alt: "Interior of a packaging production hall with paper reels and machinery",
    category: "factory",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "gallery-machinery": stock({
    id: "gallery-machinery",
    src: "/images/gallery/machinery-die.webp",
    alt: "Close view of a flat die-cutting tool used in packaging conversion",
    category: "machinery",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "gallery-manufacturing": stock({
    id: "gallery-manufacturing",
    src: "/images/gallery/manufacturing-process.webp",
    alt: "Die-cutting process with rollers converting packaging material",
    category: "manufacturing",
    ratio: "product",
    width: 2400,
    height: 1800,
  }),
  "gallery-products": stock({
    id: "gallery-products",
    src: "/images/gallery/products-board.webp",
    alt: "Sheets of corrugated cardboard showing board structure",
    category: "products",
    ratio: "product",
    width: 2272,
    height: 1704,
  }),
  "gallery-packaging": stock({
    id: "gallery-packaging",
    src: "/images/gallery/packaging-assortment.webp",
    alt: "Assortment of corrugated boxes, sheets and flexible packaging",
    category: "packaging",
    ratio: "product",
    width: 1570,
    height: 1177,
  }),
  "gallery-dispatch": stock({
    id: "gallery-dispatch",
    src: "/images/gallery/dispatch-conveyor.webp",
    alt: "Corrugated cardboard sheets moving on a conveyor",
    category: "dispatch",
    ratio: "product",
    width: 2304,
    height: 1728,
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
  return (asset.origin === "fidvi" || asset.origin === "client" || asset.origin === "stock") && asset.src !== null;
}
