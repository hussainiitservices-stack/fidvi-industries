import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { IconMark } from "@/components/ui/IconMark";
import { qualityHeadline, qualityPoints } from "@/data/quality";
import {
  ClipboardList,
  Layers,
  PackageCheck,
  Printer,
  Ruler,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const qualityIcons: Record<string, LucideIcon> = {
  "01": Layers,
  "02": Ruler,
  "03": ShieldCheck,
  "04": Printer,
  "05": ClipboardList,
  "06": PackageCheck,
};

export function QualitySection({
  showHeader = true,
  className,
}: {
  showHeader?: boolean;
  className?: string;
}) {
  return (
    <Section spacing={false} className={className ?? "py-[var(--spacing-section)]"}>
      <Container>
        {showHeader ? (
          <h2 className="max-w-3xl font-display text-section font-medium">{qualityHeadline}</h2>
        ) : null}
        <ol className={showHeader ? "mt-5 border-t border-border" : "border-t border-border"}>
          {qualityPoints.map((point) => {
            const Icon = qualityIcons[point.number] ?? Layers;
            return (
              <li
                key={point.number}
                className="grid gap-3 border-b border-border py-4 md:grid-cols-12 md:items-center"
              >
                <div className="flex items-center gap-3 md:col-span-2">
                  <IconMark icon={Icon} />
                  <p className="font-sans text-label text-muted">{point.number}</p>
                </div>
                <h3 className="font-display text-2xl md:col-span-4">{point.title}</h3>
                <p className="text-sm leading-relaxed text-muted md:col-span-6">{point.description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
