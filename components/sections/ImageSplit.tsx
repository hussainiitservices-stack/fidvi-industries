import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MediaImage } from "@/components/media/MediaImage";
import type { MediaId } from "@/lib/media";
import { cn } from "@/lib/cn";

export function ImageSplit({
  mediaId,
  eyebrow,
  title,
  body,
  tone = "light",
  reverse = false,
  objectPosition,
}: {
  mediaId: MediaId;
  eyebrow: string;
  title: string;
  body: string;
  tone?: "light" | "dark";
  reverse?: boolean;
  objectPosition?: string;
}) {
  const muted = tone === "dark" ? "text-white/65" : "text-muted";
  const label = tone === "dark" ? "text-gold" : "text-muted";

  return (
    <Section tone={tone}>
      <Container
        className={cn(
          "grid items-center gap-10 lg:grid-cols-12 lg:gap-14",
          reverse && "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1",
        )}
      >
        <div className="relative min-h-[18rem] overflow-hidden bg-black-soft lg:col-span-6 lg:min-h-[24rem]">
          <MediaImage
            mediaId={mediaId}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            objectPosition={objectPosition ?? "center"}
            className="h-full w-full"
          />
        </div>
        <div className="lg:col-span-6">
          <p className={`font-sans text-label uppercase ${label}`}>{eyebrow}</p>
          <h2 className="mt-4 font-display text-section font-medium">{title}</h2>
          <p className={`mt-5 max-w-md text-lg leading-relaxed ${muted}`}>{body}</p>
        </div>
      </Container>
    </Section>
  );
}
