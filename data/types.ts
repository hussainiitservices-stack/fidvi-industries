import type { MediaId } from "@/lib/media";

export type RouteHref =
  | "/"
  | "/about"
  | "/products"
  | "/industries"
  | "/manufacturing"
  | "/quality"
  | "/contact"
  | "/privacy"
  | "/terms"
  | `/products/${string}`;

export type NavItem = {
  label: string;
  href: RouteHref;
};

export type ProductVariant = {
  slug: string;
  name: string;
};

export type Product = {
  slug: string;
  name: string;
  number: string;
  shortDescription: string;
  description: string;
  applications: string[];
  customization: string[];
  variants?: ProductVariant[];
  mediaId: MediaId;
};

export type Industry = {
  slug: string;
  name: string;
  description: string;
  mediaId: MediaId;
};

export type ProcessStep = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  mediaId: MediaId;
};

export type EditorialPoint = {
  number: string;
  title: string;
  description: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export type GalleryFilter =
  | "all"
  | "factory"
  | "machinery"
  | "manufacturing"
  | "products"
  | "packaging"
  | "dispatch";

export type GalleryCategory = {
  id: GalleryFilter;
  label: string;
};

export type GalleryEntry = {
  id: string;
  mediaId: MediaId;
  category: Exclude<GalleryFilter, "all">;
  caption: string;
};

export type ContactChannel = {
  phone: string | null;
  email: string | null;
  whatsapp: string | null;
};
