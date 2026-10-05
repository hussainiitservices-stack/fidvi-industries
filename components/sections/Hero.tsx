import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/media/MediaImage";
import { TextReveal } from "@/components/motion/TextReveal";
import { heroContent } from "@/data/homepage";
import { company } from "@/data/company";

export function Hero() {
  const lines = heroContent.heading.replace(". ", ".\n");

  return (
    <section id="site-hero" className="relative -mt-16 h-svh min-h-[36rem] w-full overflow-hidden md:-mt-20">
      <div className="absolute inset-0">
        <MediaImage
          mediaId={heroContent.mediaId}
          fill
          priority
          sizes="100vw"
          objectPosition="center 40%"
          className="h-full w-full object-cover brightness-[0.62] contrast-[1.08] saturate-[0.75]"
        />
        {/* Top scrim: navbar readability */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-44 bg-[linear-gradient(180deg,rgba(11,11,11,0.92)_0%,rgba(11,11,11,0.55)_50%,transparent_100%)] md:h-52"
        />
        {/* Bottom-left scrim: editorial text readability */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(11,11,11,0.88)_0%,rgba(11,11,11,0.62)_34%,rgba(11,11,11,0.38)_58%,rgba(11,11,11,0.55)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(0deg,rgba(11,11,11,0.82)_0%,rgba(11,11,11,0.25)_55%,transparent_100%)]"
        />
      </div>
      <Container className="relative z-10 grid h-full grid-cols-1 items-end pb-16 pt-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-sans text-label uppercase tracking-[0.16em] text-gold drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
            {heroContent.eyebrow}
          </p>
          <TextReveal
            text={lines}
            className="mt-4 text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]"
          />
          <p className="mt-5 max-w-lg text-white/92 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
            {heroContent.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={heroContent.primaryCta.href} variant="light" arrow>
              {heroContent.primaryCta.label}
            </Button>
            <Button href={heroContent.secondaryCta.href} variant="inverse">
              {heroContent.secondaryCta.label}
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/25 pt-4 font-sans text-label uppercase tracking-[0.14em] text-white/80">
            {heroContent.supporting.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-5 font-display text-xl text-white/90 md:text-2xl [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
            {company.tagline}
          </p>
        </div>
      </Container>
    </section>
  );
}
