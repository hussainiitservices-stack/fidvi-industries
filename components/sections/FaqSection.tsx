import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { faqs as defaultFaqs } from "@/data/faqs";
import type { Faq } from "@/data/types";

export function FaqSection({
  items = defaultFaqs,
  title = "Before You Enquire.",
  tone = "light",
}: {
  items?: Faq[];
  title?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Section tone={tone}>
      <Container className="grid gap-8 lg:grid-cols-12">
        <h2 className="font-display text-section font-medium lg:col-span-4">{title}</h2>
        <Accordion items={items} className="lg:col-span-8" />
      </Container>
    </Section>
  );
}
