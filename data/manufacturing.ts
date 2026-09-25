import type { ProcessStep } from "./types";

export const manufacturingHeadline = "From Paper to Possibility.";

export const manufacturingSteps: ProcessStep[] = [
  {
    number: "01",
    slug: "paper-reel-selection",
    title: "Paper Reel Selection",
    summary:
      "The process begins with selecting paper and board material for the packaging requirement.",
    mediaId: "process-paper-reel-selection",
  },
  {
    number: "02",
    slug: "corrugation",
    title: "Corrugation",
    summary:
      "Paper is processed into corrugated board, forming the structural foundation of corrugated packaging.",
    mediaId: "process-corrugation",
  },
  {
    number: "03",
    slug: "pasting",
    title: "Pasting",
    summary:
      "Layers are bonded together to form the required board structure.",
    mediaId: "process-pasting",
  },
  {
    number: "04",
    slug: "creasing",
    title: "Creasing",
    summary:
      "Creasing prepares packaging structures for controlled folding and dimensional consistency.",
    mediaId: "process-creasing",
  },
  {
    number: "05",
    slug: "printing-conversion",
    title: "Printing / Conversion",
    summary:
      "Where the requirement calls for it, packaging moves through printing and conversion.",
    mediaId: "process-printing-conversion",
  },
  {
    number: "06",
    slug: "slotting-die-cutting",
    title: "Slotting / Die Cutting",
    summary:
      "Structures are converted into their final shapes and configurations.",
    mediaId: "process-slotting-die-cutting",
  },
  {
    number: "07",
    slug: "stitching-pasting",
    title: "Stitching / Pasting",
    summary:
      "Boxes are assembled through stitching or pasting, according to the product.",
    mediaId: "process-stitching-pasting",
  },
  {
    number: "08",
    slug: "quality-inspection",
    title: "Quality Inspection",
    summary: "Finished packaging is inspected before it is prepared for dispatch.",
    mediaId: "process-quality-inspection",
  },
  {
    number: "09",
    slug: "bundling-packing",
    title: "Bundling & Packing",
    summary:
      "Finished products are organized and packed for handling and dispatch.",
    mediaId: "process-bundling-packing",
  },
  {
    number: "10",
    slug: "dispatch",
    title: "Dispatch",
    summary: "Completed packaging is prepared for customer delivery.",
    mediaId: "process-dispatch",
  },
];

export const confirmedCapabilities = [
  "Corrugation",
  "Pasting",
  "Creasing",
  "Slotting",
  "Stitching",
  "Die Cutting",
  "Printing",
  "Customized Sizes",
  "Bulk Manufacturing",
] as const;
