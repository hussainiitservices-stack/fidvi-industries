import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { ManufacturingPrinciple } from "@/components/sections/ManufacturingPrinciple";
import { Customization } from "@/components/sections/Customization";
import { CrossLinks } from "@/components/sections/CrossLinks";
import { FinalCta } from "@/components/sections/FinalCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { confirmedCapabilities, manufacturingHeadline } from "@/data/manufacturing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "From paper reel selection to dispatch, FIDVI Industries manufactures corrugated and paper-based packaging in Ujjain.",
};

const mfgFaqs = faqs.filter((item) =>
  ["customized-boxes", "printed-packaging", "bulk", "dimensions"].includes(item.id),
);

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title={manufacturingHeadline}
        intro="The process below is how paper and board become finished packaging. It is the reason FIDVI is a manufacturer."
      />
      <ManufacturingPrinciple />
      <ManufacturingSection showHeader={false} />
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="font-display text-section font-medium lg:col-span-7">
              Confirmed Capabilities
            </h2>
            <p className="max-w-md text-muted lg:col-span-5">
              These are the conversion and manufacturing capabilities FIDVI has
              confirmed. Specs such as capacity, machine brands and flute grades are
              discussed against each requirement.
            </p>
          </div>
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {confirmedCapabilities.map((item) => (
              <li key={item} className="bg-white px-5 py-6 font-sans text-label uppercase">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Customization />
      <FaqSection items={mfgFaqs} title="Manufacturing questions." />
      <CrossLinks
        tone="light"
        title="See what this process produces."
        links={[
          {
            href: "/products",
            label: "Products",
            description: "Corrugated, shipper, die-cut, mono, printed, rolls and tape.",
          },
          {
            href: "/quality",
            label: "Quality",
            description: "How inspection sits inside the manufacturing sequence.",
          },
          {
            href: "/industries",
            label: "Industries",
            description: "Applications across produce, FMCG, industrial and logistics.",
          },
        ]}
      />
      <FinalCta />
    </>
  );
}
