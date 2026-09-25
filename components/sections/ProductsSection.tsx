import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export function ProductsSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl font-display text-section font-medium">
            Packaging for Every Requirement.
          </h2>
          <p className="shrink-0 font-sans text-label uppercase text-muted">
            {String(products.length).padStart(2, "0")} formats
          </p>
        </div>
        <div className="mt-6">
          <ProductGrid products={products} />
        </div>
      </Container>
    </Section>
  );
}
