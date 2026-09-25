import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const routes = [
  "",
  "/about",
  "/products",
  "/industries",
  "/manufacturing",
  "/quality",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map((path) => ({
    url: path || "/",
    lastModified: new Date(),
  }));

  const productPages = products.map((product) => ({
    url: `/products/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...pages, ...productPages];
}
