import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { IconMark } from "@/components/ui/IconMark";
import { customizationAreas, customizationHeadline } from "@/data/customization";
import { requirementCta } from "@/data/navigation";
import {
  Package,
  Printer,
  Ruler,
  Scissors,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const areaIcons: Record<string, LucideIcon> = {
  size: Ruler,
  strength: ShieldCheck,
  printing: Printer,
  structure: Scissors,
  finishing: Package,
};

export function Customization() {
  return (
    <Section tone="dark">
      <Container>
        <h2 className="max-w-3xl font-display text-section font-medium">
          {customizationHeadline}
        </h2>
        <dl className="mt-8 grid gap-6 border-t border-white/15 pt-6 md:grid-cols-5">
          {customizationAreas.map((area) => {
            const Icon = areaIcons[area.id] ?? Package;
            return (
              <div key={area.id}>
                <IconMark
                  icon={Icon}
                  className="border-gold/40 text-gold"
                />
                <dt className="mt-4 font-sans text-label uppercase">{area.label}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-white/65">{area.description}</dd>
              </div>
            );
          })}
        </dl>
        <div className="mt-8">
          <Button href={requirementCta.href} variant="light" arrow>
            {requirementCta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
