import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Corrugated boxes, shipper cartons, die-cut cartons, mono cartons, offset printed boxes, 2-ply paper rolls and cello tape from FIDVI Industries in Ujjain.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Packaging for Every Requirement."
        intro="Seven packaging formats, manufactured for businesses that need protection, presentation and a fit for their product."
      />
      <Section>
        <Container>
          <ProductGrid products={products} />
        </Container>
      </Section>
    </>
  );
}
