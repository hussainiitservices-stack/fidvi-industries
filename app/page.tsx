import { Customization } from "@/components/sections/Customization";
import { Facility } from "@/components/sections/Facility";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { GallerySection } from "@/components/sections/GallerySection";
import { Hero } from "@/components/sections/Hero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { Intro } from "@/components/sections/Intro";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { WhyFidvi } from "@/components/sections/WhyFidvi";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ProductsSection />
      <ManufacturingSection />
      <IndustriesSection />
      <WhyFidvi />
      <Customization />
      <Facility />
      <QualitySection />
      <GallerySection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
