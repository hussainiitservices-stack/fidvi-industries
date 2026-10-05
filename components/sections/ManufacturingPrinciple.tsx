import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { manufacturingPrinciple } from "@/data/manufacturing";

export function ManufacturingPrinciple() {
  return (
    <Section>
      <Container className="grid gap-8 border-y border-border py-2 lg:grid-cols-12 lg:items-center">
        <p className="font-sans text-label uppercase text-muted lg:col-span-3">Guiding idea</p>
        <p className="font-display text-3xl leading-snug md:text-4xl lg:col-span-9">
          {manufacturingPrinciple}
        </p>
      </Container>
    </Section>
  );
}
