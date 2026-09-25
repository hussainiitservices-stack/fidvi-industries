import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { QualitySection } from "@/components/sections/QualitySection";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "Quality at FIDVI Industries is handled through material selection, dimensional accuracy, board strength, printing, assembly and final inspection.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Quality That Protects Your Product."
        intro="Inspection sits inside the manufacturing sequence. No certification marks are shown here unless FIDVI provides them."
      />
      <QualitySection showHeader={false} />
    </>
  );
}
