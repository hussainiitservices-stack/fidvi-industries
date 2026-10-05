import type { ProcessStep } from "./types";

export const manufacturingHeadline = "From Paper to Possibility.";

export const manufacturingPrinciple =
  "Material → Requirement → Structure. Paper and board are selected for the packaging requirement, then converted through a clear manufacturing sequence.";

export const manufacturingSteps: ProcessStep[] = [
  {
    number: "01",
    slug: "paper-reel-selection",
    title: "Paper Reel Selection",
    summary:
      "The process begins with selecting paper and board material for the packaging requirement.",
    detail:
      "Material choice follows the packaging requirement — what the pack must protect, how it will be handled, and how it should present. Supplier names and material grades are confirmed against each order rather than listed as fixed catalogue specs.",
    mediaId: "process-paper-reel-selection",
  },
  {
    number: "02",
    slug: "corrugation",
    title: "Corrugation",
    summary:
      "Paper is processed into corrugated board, forming the structural foundation of corrugated packaging.",
    detail:
      "Corrugation creates the fluted board structure that gives corrugated packaging its strength and cushioning. It is the foundation for boxes and shipper formats that need reliable handling.",
    mediaId: "process-corrugation",
  },
  {
    number: "03",
    slug: "pasting",
    title: "Pasting",
    summary:
      "Layers are bonded together to form the required board structure.",
    detail:
      "Paper, fluting and adhesion come together so the board holds as a single structure ready for conversion.",
    mediaId: "process-pasting",
  },
  {
    number: "04",
    slug: "creasing",
    title: "Creasing",
    summary:
      "Creasing prepares packaging structures for controlled folding and dimensional consistency.",
    detail:
      "Fold lines are prepared for controlled folding, structural precision and repeatability across the run.",
    mediaId: "process-creasing",
  },
  {
    number: "05",
    slug: "printing-conversion",
    title: "Printing / Conversion",
    summary:
      "Where the requirement calls for it, packaging moves through printing and conversion.",
    detail:
      "Depending on the requirement, packaging may move through printing and related conversion. Printed or unprinted finishes are discussed against the brief — not assumed.",
    mediaId: "process-printing-conversion",
  },
  {
    number: "06",
    slug: "slotting-die-cutting",
    title: "Slotting / Die Cutting",
    summary:
      "Structures are converted into their final shapes and configurations.",
    detail:
      "Slotting and die cutting turn board into finished shapes and configurations. This stage is especially relevant for customized and special-shaped packaging.",
    mediaId: "process-slotting-die-cutting",
  },
  {
    number: "07",
    slug: "stitching-pasting",
    title: "Stitching / Pasting",
    summary:
      "Boxes are assembled through stitching or pasting, according to the product.",
    detail:
      "Assembly uses stitching or pasting according to the product. The method follows what the structure needs, not a one-size approach.",
    mediaId: "process-stitching-pasting",
  },
  {
    number: "08",
    slug: "quality-inspection",
    title: "Quality Inspection",
    summary: "Finished packaging is inspected before it is prepared for dispatch.",
    detail:
      "Inspection looks at material selection, dimensional accuracy, board strength, printing where applicable, pasting or stitching, and overall structural consistency before bundling.",
    mediaId: "process-quality-inspection",
  },
  {
    number: "09",
    slug: "bundling-packing",
    title: "Bundling & Packing",
    summary:
      "Finished products are organized and packed for handling and dispatch.",
    detail:
      "Finished packaging is organized and packed so it can be handled, stored and prepared for dispatch without damaging the work already done.",
    mediaId: "process-bundling-packing",
  },
  {
    number: "10",
    slug: "dispatch",
    title: "Dispatch",
    summary: "Completed packaging is prepared for customer delivery.",
    detail:
      "Completed packaging is prepared for customer delivery — connecting manufacturing, packing and the next hand-off to the business that ordered it.",
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
