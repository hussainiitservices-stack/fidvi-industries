import type { Metadata } from "next";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FacilityLocation } from "@/components/location/FacilityLocation";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a packaging enquiry to FIDVI Industries, 130, Nagzhiri Industrial Area, Dewas Road, Ujjain, Madhya Pradesh.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build the Right Packaging for Your Business."
        intro="Share the company and the packaging requirement. FIDVI will use that to take the enquiry forward."
      />
      <Section>
        <Container className="max-w-3xl">
          <EnquiryForm />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
            Phone, email and WhatsApp will appear here when FIDVI publishes them.
          </p>
        </Container>
      </Section>
      <Section spacing={false} className="pb-[var(--spacing-section)]">
        <Container>
          <FacilityLocation />
        </Container>
      </Section>
    </>
  );
}
