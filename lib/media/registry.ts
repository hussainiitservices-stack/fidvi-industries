import type { MediaAsset, VideoAsset } from "./types";

const supplied = (asset: Omit<MediaAsset, "origin">): MediaAsset => ({
  origin: "client",
  ...asset,
});

/**
 * Registry of media slots. Real FIDVI files replace `src` here.
 *
 * Every slot below uses a photograph supplied by the client (`origin: "client"`).
 * Alt text describes what each photograph shows. It does not call the scene the
 * FIDVI facility, machinery or product. Switch a slot to `origin: "fidvi"` only
 * once FIDVI confirms the photograph is its own. Width and height match the file.
 * A slot without a photograph takes `src: null` and `origin: "unassigned"`, which
 * renders the empty frame instead of a stand-in.
 */
export const mediaRegistry = {
  "hero-facility": supplied({
    id: "hero-facility",
    src: "/images/hero/printer-slotter-factory-floor.webp",
    alt: "Printer slotter die-cutter with a stack of corrugated board on its feed table, on a packaging factory floor",
    category: "hero",
    ratio: "hero",
    width: 1080,
    height: 607,
    priority: true,
  }),
  "product-corrugated-boxes": supplied({
    id: "product-corrugated-boxes",
    src: "/images/products/corrugated-box-open.webp",
    alt: "Open brown corrugated box with its top flaps raised",
    category: "products",
    ratio: "product",
    width: 1600,
    height: 1200,
  }),
  "product-shipper-cartons": supplied({
    id: "product-shipper-cartons",
    src: "/images/products/shipper-carton-with-partitions.webp",
    alt: "Open corrugated shipper carton fitted with cardboard partitions",
    category: "products",
    ratio: "product",
    width: 837,
    height: 628,
  }),
  "product-die-cut-cartons": supplied({
    id: "product-die-cut-cartons",
    src: "/images/products/die-cut-mailer-boxes.webp",
    alt: "Die-cut corrugated mailer boxes, one as a flat blank and one folded",
    category: "products",
    ratio: "product",
    width: 736,
    height: 552,
  }),
  "product-mono-cartons": supplied({
    id: "product-mono-cartons",
    src: "/images/products/mono-cartons.webp",
    alt: "Two printed paperboard mono cartons for a capsule medicine",
    category: "products",
    ratio: "product",
    width: 600,
    height: 450,
  }),
  "product-offset-printed-boxes": supplied({
    id: "product-offset-printed-boxes",
    src: "/images/products/printed-mailer-box.webp",
    alt: "Open kraft mailer box with a printed bakery design inside the lid",
    category: "products",
    ratio: "product",
    width: 1024,
    height: 768,
  }),
  "product-2-ply-paper-rolls": supplied({
    id: "product-2-ply-paper-rolls",
    src: "/images/products/single-face-corrugated-roll.webp",
    alt: "Roll of 2-ply corrugated paper, partly unrolled to show the fluted side",
    category: "products",
    ratio: "product",
    width: 895,
    height: 671,
  }),
  "product-cello-tape": supplied({
    id: "product-cello-tape",
    src: "/images/products/cello-tape-sealed-carton.webp",
    alt: "Clear cello tape sealing the top flaps of a corrugated carton",
    category: "products",
    ratio: "product",
    width: 1160,
    height: 870,
  }),
  "industry-fruits-and-vegetables": supplied({
    id: "industry-fruits-and-vegetables",
    src: "/images/industries/fruits-vegetables-trays.webp",
    alt: "Corrugated trays holding apples, carrots, cucumbers, tomatoes, oranges and peppers",
    category: "industries",
    ratio: "industry",
    width: 699,
    height: 524,
  }),
  "industry-bakery": supplied({
    id: "industry-bakery",
    src: "/images/products/printed-mailer-box.webp",
    alt: "Kraft mailer box with a printed bakery design",
    category: "industries",
    ratio: "industry",
    width: 1024,
    height: 768,
  }),
  "industry-pharmaceuticals": supplied({
    id: "industry-pharmaceuticals",
    src: "/images/industries/pharmaceutical-cartons.webp",
    alt: "Assorted printed cartons for medicines and healthcare products",
    category: "industries",
    ratio: "industry",
    width: 830,
    height: 622,
  }),
  "industry-paints-and-chemicals": supplied({
    id: "industry-paints-and-chemicals",
    src: "/images/industries/paint-printed-carton.webp",
    alt: "Printed carton for a wood-finish paint product",
    category: "industries",
    ratio: "industry",
    width: 1024,
    height: 768,
  }),
  "industry-fmcg-and-namkeen": supplied({
    id: "industry-fmcg-and-namkeen",
    src: "/images/industries/closed-shipping-carton.webp",
    alt: "Closed plain corrugated shipping carton",
    category: "industries",
    ratio: "industry",
    width: 938,
    height: 704,
  }),
  "industry-confectionery": supplied({
    id: "industry-confectionery",
    src: "/images/industries/confectionery-cupcake-mailer.webp",
    alt: "Red printed mailer box holding six chocolate cupcakes",
    category: "industries",
    ratio: "industry",
    width: 612,
    height: 459,
  }),
  "industry-industrial-manufacturing": supplied({
    id: "industry-industrial-manufacturing",
    src: "/images/industries/heavy-duty-carton-handles.webp",
    alt: "Heavy-duty corrugated box with hand holes and a hinged lid",
    category: "industries",
    ratio: "industry",
    width: 1600,
    height: 1200,
  }),
  "industry-ecommerce-and-logistics": supplied({
    id: "industry-ecommerce-and-logistics",
    src: "/images/industries/labelled-shipping-carton.webp",
    alt: "Shipping carton marked with handling symbols and a barcode label",
    category: "industries",
    ratio: "industry",
    width: 800,
    height: 600,
  }),
  "process-paper-reel-selection": supplied({
    id: "process-paper-reel-selection",
    src: "/images/products/single-face-corrugated-roll.webp",
    alt: "Roll of corrugated paper with the fluted side partly unrolled",
    category: "manufacturing",
    ratio: "product",
    width: 895,
    height: 671,
  }),
  "process-corrugation": supplied({
    id: "process-corrugation",
    src: "/images/machinery/single-facer-corrugator.webp",
    alt: "Single facer corrugating machine with corrugating rolls and a suction blower",
    category: "manufacturing",
    ratio: "product",
    width: 1080,
    height: 810,
  }),
  "process-pasting": supplied({
    id: "process-pasting",
    src: "/images/machinery/single-facer-rolls-detail.webp",
    alt: "Roll section of a single facer, where the fluted medium is glued to the liner",
    category: "manufacturing",
    ratio: "product",
    width: 750,
    height: 562,
  }),
  "process-creasing": supplied({
    id: "process-creasing",
    src: "/images/machinery/rotary-slotter.webp",
    alt: "Rotary slotter with creasing and slotting wheels for corrugated board",
    category: "manufacturing",
    ratio: "product",
    width: 1512,
    height: 1134,
  }),
  "process-printing-conversion": supplied({
    id: "process-printing-conversion",
    src: "/images/machinery/printer-slotter-die-cutter.webp",
    alt: "Printer slotter die-cutter with a stack of corrugated board on its feed table",
    category: "manufacturing",
    ratio: "product",
    width: 1080,
    height: 810,
  }),
  "process-slotting-die-cutting": supplied({
    id: "process-slotting-die-cutting",
    src: "/images/machinery/platen-die-cutting-machine.webp",
    alt: "Platen die-cutting machine for corrugated board and cartons",
    category: "manufacturing",
    ratio: "product",
    width: 500,
    height: 375,
  }),
  "process-stitching-pasting": supplied({
    id: "process-stitching-pasting",
    src: "/images/machinery/carton-stitching-machine.webp",
    alt: "Semi-automatic carton stitching machine on a factory floor",
    category: "manufacturing",
    ratio: "product",
    width: 516,
    height: 387,
  }),
  "process-quality-inspection": supplied({
    id: "process-quality-inspection",
    src: "/images/manufacturing/carton-flap-board-edge.webp",
    alt: "Close view of the flaps and board edge of an open corrugated box",
    category: "manufacturing",
    ratio: "product",
    width: 860,
    height: 645,
  }),
  "process-bundling-packing": supplied({
    id: "process-bundling-packing",
    src: "/images/products/shipper-carton-with-partitions.webp",
    alt: "Open carton with cardboard partitions, ready for packing",
    category: "manufacturing",
    ratio: "product",
    width: 837,
    height: 628,
  }),
  "process-dispatch": supplied({
    id: "process-dispatch",
    src: "/images/gallery/sealed-shipping-carton.webp",
    alt: "Corrugated carton sealed with tape and stitched at the joint",
    category: "dispatch",
    ratio: "product",
    width: 1600,
    height: 1200,
  }),
  "gallery-factory": supplied({
    id: "gallery-factory",
    src: "/images/machinery/carton-stitching-machine.webp",
    alt: "Carton stitching machine in a packaging factory hall",
    category: "factory",
    ratio: "product",
    width: 516,
    height: 387,
  }),
  "gallery-machinery": supplied({
    id: "gallery-machinery",
    src: "/images/machinery/rotary-slotter.webp",
    alt: "Rotary slotter machine for corrugated board",
    category: "machinery",
    ratio: "product",
    width: 1512,
    height: 1134,
  }),
  "gallery-manufacturing": supplied({
    id: "gallery-manufacturing",
    src: "/images/machinery/platen-die-cutting-machine.webp",
    alt: "Platen die-cutting machine for corrugated board and cartons",
    category: "manufacturing",
    ratio: "product",
    width: 500,
    height: 375,
  }),
  "gallery-products": supplied({
    id: "gallery-products",
    src: "/images/gallery/lidded-carton-with-handle.webp",
    alt: "Corrugated box with a fitted lid and a hand hole",
    category: "products",
    ratio: "product",
    width: 1000,
    height: 750,
  }),
  "gallery-packaging": supplied({
    id: "gallery-packaging",
    src: "/images/products/die-cut-mailer-boxes.webp",
    alt: "Die-cut corrugated mailer boxes, flat and folded",
    category: "packaging",
    ratio: "product",
    width: 736,
    height: 552,
  }),
  "gallery-dispatch": supplied({
    id: "gallery-dispatch",
    src: "/images/gallery/sealed-shipping-carton.webp",
    alt: "Corrugated carton sealed with tape, ready for dispatch",
    category: "dispatch",
    ratio: "product",
    width: 1600,
    height: 1200,
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
  return (asset.origin === "fidvi" || asset.origin === "client") && asset.src !== null;
}
