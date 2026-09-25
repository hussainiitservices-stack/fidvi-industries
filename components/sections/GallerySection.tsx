import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryEntries } from "@/data/gallery";

export function GallerySection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-section font-medium">
            Material, Machinery, Packaging.
          </h2>
          <p className="font-sans text-label uppercase text-muted">Placeholder imagery</p>
        </div>
        <div className="mt-8">
          <GalleryGrid items={galleryEntries} />
        </div>
      </Container>
    </Section>
  );
}
