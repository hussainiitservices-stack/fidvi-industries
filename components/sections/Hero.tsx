import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/media/MediaImage";
import { TextReveal } from "@/components/motion/TextReveal";
import { heroContent } from "@/data/homepage";
import { company } from "@/data/company";

export function Hero() {
  const lines = heroContent.heading.replace(". ", ".\n");

  return (
    <section className="relative -mt-16 h-svh min-h-[36rem] w-full overflow-hidden md:-mt-20">
      <div className="absolute inset-0">
        <MediaImage
          mediaId={heroContent.mediaId}
          fill
          priority
          sizes="100vw"
          objectPosition="center 40%"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.38)_0%,rgba(11,11,11,0.42)_48%,rgba(11,11,11,0.52)_100%)]"
        />
      </div>
      <Container className="relative z-10 grid h-full grid-cols-1 items-end pb-16 pt-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-sans text-label uppercase text-gold">{heroContent.eyebrow}</p>
          <TextReveal text={lines} className="mt-4 text-white" />
          <p className="mt-5 max-w-lg text-white/85">{heroContent.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={heroContent.primaryCta.href} variant="light" arrow>
              {heroContent.primaryCta.label}
            </Button>
            <Button href={heroContent.secondaryCta.href} variant="inverse">
              {heroContent.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-8 border-t border-white/20 pt-4 font-display text-xl text-white/85 md:text-2xl">
            {company.tagline}
          </p>
        </div>
      </Container>
    </section>
  );
}
