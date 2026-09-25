import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { confirmedCapabilities, manufacturingHeadline } from "@/data/manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "From paper reel selection to dispatch, FIDVI Industries manufactures corrugated and paper-based packaging in Ujjain.",
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title={manufacturingHeadline}
        intro="The process below is how paper and board become finished packaging. It is the reason FIDVI is a manufacturer."
      />
      <ManufacturingSection showHeader={false} />
      <Section>
        <Container>
          <h2 className="font-display text-4xl">Confirmed Capabilities</h2>
          <ul className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {confirmedCapabilities.map((item) => (
              <li key={item} className="bg-white px-4 py-5 font-sans text-label uppercase">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
