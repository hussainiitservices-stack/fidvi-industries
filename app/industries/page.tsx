import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { IndustryGrid } from "@/components/industries/IndustryGrid";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Packaging for fruits and vegetables, bakery, pharmaceuticals, paints and chemicals, FMCG, confectionery, industrial manufacturing, and e-commerce.",
};

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
    </>
  );
}
