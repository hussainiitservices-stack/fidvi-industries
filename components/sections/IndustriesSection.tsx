import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { IndustryGrid } from "@/components/industries/IndustryGrid";
import { industries } from "@/data/industries";

export function IndustriesSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-3xl font-display text-section font-medium">
            Packaging That Moves With Your Industry.
          </h2>
          <p className="shrink-0 font-sans text-label uppercase text-muted">
            {String(industries.length).padStart(2, "0")} applications
          </p>
        </div>
        <div className="mt-6">
          <IndustryGrid industries={industries} />
        </div>
      </Container>
    </Section>
  );
}
