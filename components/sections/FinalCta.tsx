import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { requirementCta } from "@/data/navigation";

export function FinalCta() {
  return (
    <Section tone="dark">
      <Container className="grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="font-sans text-label uppercase text-gold">Next requirement</p>
          <h2 className="mt-4 max-w-3xl font-display text-section font-medium">
            Have a Packaging Requirement?
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Tell us what you need. We&apos;ll help turn the requirement into a practical packaging
            solution.
          </p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <Button href={requirementCta.href} variant="light" arrow>
            {requirementCta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
