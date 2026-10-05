import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { IndustryGrid } from "@/components/industries/IndustryGrid";
import { BuyerNeeds } from "@/components/sections/BuyerNeeds";
import { CrossLinks } from "@/components/sections/CrossLinks";
import { ImageSplit } from "@/components/sections/ImageSplit";
import { FinalCta } from "@/components/sections/FinalCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { industries } from "@/data/industries";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Packaging for fruits and vegetables, bakery, pharmaceuticals, paints and chemicals, FMCG, confectionery, industrial manufacturing, and e-commerce.",
};

const industryFaqs = faqs.filter((item) =>
  ["industries", "customized-boxes", "printed-packaging", "quotation"].includes(item.id),
);

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Packaging That Moves With Your Industry."
        intro="FIDVI manufactures packaging for businesses across these applications. Requirements differ, and the structure can be discussed for each one."
      />
      <Section>
        <Container>
          <IndustryGrid industries={industries} />
        </Container>
      </Section>
      <ImageSplit
        mediaId="industry-ecommerce-and-logistics"
        eyebrow="Handling & transit"
        title="Built for the Path It Travels."
        body="Stackability, protection and presentation change by industry. The packaging structure is discussed against how goods are stored, shipped and received."
        reverse
        objectPosition="center 45%"
      />
      <BuyerNeeds />
      <Section tone="dark">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-sans text-label uppercase text-gold">How we approach it</p>
            <h2 className="mt-4 font-display text-section font-medium">
              One Manufacturer. Many Applications.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-white/70 lg:col-span-7">
            <p>
              Produce, bakery, pharmaceuticals, paints, FMCG, confectionery, industrial
              parts and e-commerce logistics each ask something different of a pack —
              protection, presentation, stackability, or a custom structure.
            </p>
            <p>
              FIDVI starts from the requirement rather than a single catalogue SKU.
              Formats such as corrugated boxes, shipper cartons, die-cut cartons and
              mono cartons can be discussed against the industry and the handling path.
              Regulatory certifications for pharmaceuticals are not claimed here
              unless FIDVI confirms them.
            </p>
          </div>
        </Container>
      </Section>
      <FaqSection items={industryFaqs} title="Industry questions." />
      <CrossLinks
        title="Match the use case to a format."
        links={[
          {
            href: "/products",
            label: "Products",
            description: "Choose a packaging format and explore options.",
          },
          {
            href: "/manufacturing",
            label: "Manufacturing",
            description: "See how paper and board become finished packaging.",
          },
          {
            href: "/contact",
            label: "Enquire",
            description: "Share the industry, product and packaging brief.",
          },
        ]}
      />
      <FinalCta />
    </>
  );
}
