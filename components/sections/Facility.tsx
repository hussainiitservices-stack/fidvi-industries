import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FacilityLocation } from "@/components/location/FacilityLocation";
import { MediaImage } from "@/components/media/MediaImage";

export function Facility() {
  return (
    <Section>
      <Container>
        <div className="relative min-h-[20rem] overflow-hidden md:min-h-[26rem]">
          <MediaImage
            mediaId="hero-facility"
            fill
            sizes="100vw"
            objectPosition="center 35%"
            className="h-full w-full"
          />
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <FacilityLocation />
        </div>
      </Container>
    </Section>
  );
}
