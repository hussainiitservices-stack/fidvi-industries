import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the FIDVI Industries website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" />
      <Section>
        <Container className="max-w-3xl space-y-6 text-muted">
          <p>
            This website describes {company.legalName} and its packaging products. It is not an
            online shop, and nothing on these pages is an offer to sell a specific quantity or
            specification.
          </p>
          <p>
            Product options, dimensions and finishes are confirmed only after an enquiry. Photographs
            marked as placeholders are not pictures of the FIDVI facility or of FIDVI products.
          </p>
          <p>
            Content is provided for general information. Packaging requirements should be discussed
            directly with FIDVI before an order is planned.
          </p>
        </Container>
      </Section>
    </>
  );
}
