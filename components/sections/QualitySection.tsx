import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { qualityHeadline, qualityPoints } from "@/data/quality";

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
          {qualityPoints.map((point) => (
            <li
              key={point.number}
              className="grid gap-2 border-b border-border py-4 md:grid-cols-12 md:items-baseline"
            >
              <p className="font-sans text-label text-muted md:col-span-2">{point.number}</p>
              <h3 className="font-display text-2xl md:col-span-4">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted md:col-span-6">{point.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
