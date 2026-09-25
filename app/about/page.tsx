import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArrowLink } from "@/components/ui/ArrowLink";
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
            <p className="font-display text-4xl leading-tight md:text-5xl">{company.supportingLine}</p>
            <p className="mt-8 max-w-xl text-muted">{company.tagline}</p>
            <div className="mt-10 flex flex-col gap-4">
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
    </>
  );
}
