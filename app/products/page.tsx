import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Customization } from "@/components/sections/Customization";
import { EnquiryGuide } from "@/components/sections/EnquiryGuide";
import { CrossLinks } from "@/components/sections/CrossLinks";
import { ImageSplit } from "@/components/sections/ImageSplit";
import { FinalCta } from "@/components/sections/FinalCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { products } from "@/data/products";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Corrugated boxes, shipper cartons, die-cut cartons, mono cartons, offset printed boxes, 2-ply paper rolls and cello tape from FIDVI Industries in Ujjain.",
};

const productFaqs = faqs.filter((item) =>
  ["customized-boxes", "printed-packaging", "bulk", "dimensions", "quotation"].includes(
    item.id,
  ),
);

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
      <Section>
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-sans text-label uppercase text-muted">How to choose</p>
            <h2 className="mt-4 font-display text-section font-medium">
              Start With the Requirement.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
            <p>
              Corrugated boxes and shipper cartons suit protection, stackability and
              logistics. Die-cut cartons follow a specific shape. Mono cartons and
              offset printed boxes support presentation. 2-ply paper rolls feed
              downstream conversion. Cello tape finishes packing — printed or
              transparent.
            </p>
            <p>
              Exact board grades, flute types, GSM and run sizes are confirmed against
              each enquiry rather than published as fixed catalogue claims.
            </p>
          </div>
        </Container>
      </Section>
      <ImageSplit
        mediaId="gallery-packaging"
        eyebrow="Formats in use"
        title="Protection and Presentation."
        body="From open corrugated shippers to folding cartons and sealing tape, each format is manufactured against the brief rather than sold as a fixed catalogue SKU."
        tone="dark"
        objectPosition="center"
      />
      <Customization />
      <EnquiryGuide />
      <FaqSection items={productFaqs} title="Product questions." />
      <CrossLinks
        title="After you pick a format."
        links={[
          {
            href: "/industries",
            label: "Industries",
            description: "See where these formats are typically applied.",
          },
          {
            href: "/manufacturing",
            label: "Manufacturing",
            description: "Follow material through conversion and dispatch.",
          },
          {
            href: "/contact",
            label: "Request a quote",
            description: "Send dimensions, structure and quantity guidance.",
          },
        ]}
      />
      <FinalCta />
    </>
  );
}
