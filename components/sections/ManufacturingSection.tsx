import { Section } from "@/components/layout/Section";
import { ProcessTimeline } from "@/components/manufacturing/ProcessTimeline";
import { manufacturingHeadline, manufacturingSteps } from "@/data/manufacturing";

export function ManufacturingSection({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <Section tone="dark" spacing={false} className="lg:bg-black">
      <ProcessTimeline
        steps={manufacturingSteps}
        tone="dark"
        heading={showHeader ? manufacturingHeadline : undefined}
        intro={
          showHeader
            ? "Paper and board move through a sequence of conversion, inspection and dispatch."
            : undefined
        }
      />
    </Section>
  );
}
