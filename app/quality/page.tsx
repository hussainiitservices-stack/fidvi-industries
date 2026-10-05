import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { QualitySection } from "@/components/sections/QualitySection";
import { QualityStance } from "@/components/sections/QualityStance";
import { CrossLinks } from "@/components/sections/CrossLinks";
import { FinalCta } from "@/components/sections/FinalCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "Quality at FIDVI Industries is handled through material selection, dimensional accuracy, board strength, printing, assembly and final inspection.",
};

const qualityFaqs = faqs.filter((item) =>
  ["customized-boxes", "dimensions", "quotation"].includes(item.id),
);

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Quality That Protects Your Product."
        intro="Inspection sits inside the manufacturing sequence. No certification marks are shown here unless FIDVI provides them."
      />
      <QualitySection showHeader={false} />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-sans text-label uppercase text-muted">In practice</p>
            <h2 className="mt-4 font-display text-section font-medium">
              Consistency Across the Run.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
            <p>
              Packaging has to arrive the same way it was specified — sized correctly,
              assembled properly, and ready for handling or presentation. FIDVI treats
              quality as checkpoints along the manufacturing journey rather than a
              separate claim.
            </p>
            <p>
              Material is selected against the requirement. Creasing, slotting and
              die cutting keep dimensions consistent. Where packaging is printed,
              print consistency is part of the inspection. Pasting or stitching is
              checked before bundling and dispatch.
            </p>
          </div>
        </Container>
      </Section>
      <QualityStance />
      <FaqSection items={qualityFaqs} title="Quality & orders." />
      <CrossLinks
        title="Related to how packaging is made."
        links={[
          {
            href: "/manufacturing",
            label: "Manufacturing",
            description: "Follow the sequence from paper reel selection to dispatch.",
          },
          {
            href: "/products",
            label: "Products",
            description: "Seven packaging formats manufactured around the requirement.",
          },
          {
            href: "/contact",
            label: "Contact",
            description: "Send company details and the packaging brief.",
          },
        ]}
      />
      <FinalCta />
    </>
  );
}
