import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { WhyFidvi } from "@/components/sections/WhyFidvi";
import { FacilityLocation } from "@/components/location/FacilityLocation";
import { CrossLinks } from "@/components/sections/CrossLinks";
import { FinalCta } from "@/components/sections/FinalCta";
import { company, formatAddress } from "@/data/company";
import { confirmedCapabilities } from "@/data/manufacturing";

export const metadata: Metadata = {
  title: "About",
  description:
    "FIDVI Industries is a manufacturing company focused on corrugated and paper-based packaging, operating from Nagzhiri Industrial Area, Ujjain.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={company.positioning}
        intro={company.intro}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-display text-4xl leading-tight md:text-5xl">
              {company.supportingLine}
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              {company.legalName} manufactures corrugated and paper-based packaging
              from an industrial facility in Ujjain. Packaging is the starting line;
              the brand leaves room for broader manufacturing work over time.
            </p>
            <p className="mt-5 max-w-xl font-display text-2xl text-charcoal md:text-3xl">
              {company.tagline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <ArrowLink href="/manufacturing">Manufacturing process</ArrowLink>
              <ArrowLink href="/products">View products</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-label uppercase text-muted">Facility</p>
            <address className="mt-4 text-lg not-italic leading-relaxed">
              {formatAddress("stacked").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Located in Nagzhiri Industrial Area, Ujjain, FIDVI operates from an
              industrial manufacturing environment focused on packaging production
              and customized manufacturing solutions.
            </p>
            <ul className="mt-10 space-y-2 border-t border-border pt-6">
              {confirmedCapabilities.map((item) => (
                <li key={item} className="font-sans text-label uppercase">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
      <WhyFidvi />
      <Section spacing={false} className="pb-[var(--spacing-section)]">
        <Container>
          <FacilityLocation />
        </Container>
      </Section>
      <CrossLinks
        title="Explore the work."
        links={[
          {
            href: "/quality",
            label: "Quality",
            description: "How inspection is built into the process.",
          },
          {
            href: "/industries",
            label: "Industries",
            description: "Applications FIDVI manufactures packaging for.",
          },
          {
            href: "/contact",
            label: "Contact",
            description: "Send a packaging requirement for your business.",
          },
        ]}
      />
      <FinalCta />
    </>
  );
}
