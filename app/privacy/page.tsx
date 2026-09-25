import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FIDVI Industries handles information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <Container className="max-w-3xl space-y-6 text-muted">
          <p>
            {company.legalName} publishes this website to explain its packaging manufacturing business.
          </p>
          <p>
            The enquiry form checks the details in your browser. It does not send them to a server,
            because a phone number and email address have not been connected yet. Do not submit
            information you need stored or answered until a contact channel is published.
          </p>
          <p>
            This site does not use advertising trackers. If that changes, this page will be updated.
          </p>
        </Container>
      </Section>
    </>
  );
}
