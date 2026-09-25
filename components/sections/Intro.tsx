import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MediaImage } from "@/components/media/MediaImage";
import { company } from "@/data/company";

export function Intro() {
  return (
    <Section>
      <Container className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="relative min-h-80 overflow-hidden lg:col-span-5 lg:min-h-[32rem]">
          <MediaImage
            mediaId="process-paper-reel-selection"
            fill
            ratio="editorial"
            objectPosition="center"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-between border-t border-border pt-6 lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <p className="font-sans text-label uppercase text-muted">{company.brandName}</p>
          <div className="mt-10 lg:mt-0">
            <h2 className="font-display text-section font-medium">
              A manufacturing company for corrugated and paper-based packaging.
            </h2>
            <p className="mt-5 max-w-lg text-muted">{company.intro}</p>
          </div>
          <p className="mt-10 font-display text-2xl md:text-3xl">{company.supportingLine}</p>
        </div>
      </Container>
    </Section>
  );
}
