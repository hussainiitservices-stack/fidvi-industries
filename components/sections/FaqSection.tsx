import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <Section>
      <Container className="grid gap-8 lg:grid-cols-12">
        <h2 className="font-display text-section font-medium lg:col-span-4">
          Before You Enquire.
        </h2>
        <Accordion items={faqs} className="lg:col-span-8" />
      </Container>
    </Section>
  );
}
