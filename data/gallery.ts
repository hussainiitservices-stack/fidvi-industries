import type { GalleryCategory, GalleryEntry } from "./types";

export const galleryCategories: GalleryCategory[] = [
  { id: "all", label: "All" },
  { id: "factory", label: "Factory" },
  { id: "machinery", label: "Machinery" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "products", label: "Products" },
  { id: "packaging", label: "Packaging" },
  { id: "dispatch", label: "Dispatch" },
];

export const galleryEntries: GalleryEntry[] = [
  {
    id: "factory",
    mediaId: "gallery-factory",
    category: "factory",
    caption: "Factory",
  },
  {
    id: "machinery",
    mediaId: "gallery-machinery",
    category: "machinery",
    caption: "Machinery",
  },
  {
    id: "manufacturing",
    mediaId: "gallery-manufacturing",
    category: "manufacturing",
    caption: "Manufacturing",
  },
  {
    id: "products",
    mediaId: "gallery-products",
    category: "products",
    caption: "Products",
  },
  {
    id: "packaging",
    mediaId: "gallery-packaging",
    category: "packaging",
    caption: "Packaging",
  },
  {
    id: "dispatch",
    mediaId: "gallery-dispatch",
    category: "dispatch",
    caption: "Dispatch",
  },
];
