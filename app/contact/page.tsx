import type { Metadata } from "next";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FacilityLocation } from "@/components/location/FacilityLocation";
import { PageHero } from "@/components/sections/PageHero";
import { EnquiryGuide } from "@/components/sections/EnquiryGuide";
import { FaqSection } from "@/components/sections/FaqSection";
import { ImageSplit } from "@/components/sections/ImageSplit";
import { CrossLinks } from "@/components/sections/CrossLinks";
import { faqs } from "@/data/faqs";

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
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-sans text-label uppercase text-muted">Enquiry</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Send the Requirement.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              The form validates in the browser. Phone, email and WhatsApp channels
              appear here when FIDVI publishes them — nothing is transmitted from this
              page until then.
            </p>
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-sans text-label uppercase text-muted">Fields we ask for</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Name, company name, phone number, email, and a short description of the
                packaging requirement.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </Container>
      </Section>
      <EnquiryGuide tone="dark" />
      <ImageSplit
        mediaId="process-dispatch"
        eyebrow="After you write"
        title="From Brief to Dispatch."
        body="Once the requirement is clear, packaging moves through manufacturing, inspection, bundling and dispatch from the Ujjain facility."
        reverse
        objectPosition="center 45%"
      />
      <Section spacing={false} className="pb-[var(--spacing-section)] pt-[var(--spacing-section)]">
        <Container>
          <FacilityLocation />
        </Container>
      </Section>
      <Section tone="dark">
        <Container className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-sans text-label uppercase text-gold">Channels</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Not published yet</h2>
          </div>
          <p className="leading-relaxed text-white/65 md:col-span-7">
            Phone, email, WhatsApp and business hours are not listed until FIDVI
            confirms them. Prepare the enquiry here, then send it through the channel
            FIDVI shares with you.
          </p>
        </Container>
      </Section>
      <FaqSection items={faqs} title="Before you send." />
      <CrossLinks
        title="Useful while you draft the brief."
        links={[
          {
            href: "/products",
            label: "Products",
            description: "Name the format in your requirement.",
          },
          {
            href: "/manufacturing",
            label: "Manufacturing",
            description: "See how an order moves through the plant.",
          },
          {
            href: "/about",
            label: "About",
            description: "Facility address and manufacturing stance.",
          },
        ]}
      />
    </>
  );
}
