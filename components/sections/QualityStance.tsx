import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function QualityStance() {
  return (
    <Section tone="dark">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="font-sans text-label uppercase text-gold">How we talk about quality</p>
          <h2 className="mt-4 font-display text-section font-medium">
            Inspection Inside the Sequence.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
            Quality at FIDVI is described through the work itself — material selection,
            dimensional accuracy, board strength, printing, assembly and final inspection.
            Certification marks and numerical standards appear only when FIDVI provides them.
            None are shown here yet.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end">
          <ArrowLink href="/manufacturing" className="text-white hover:text-gold">
            See the manufacturing process
          </ArrowLink>
          <ArrowLink href="/contact" className="text-white hover:text-gold">
            Send a packaging requirement
          </ArrowLink>
        </div>
      </Container>
    </Section>
  );
}
