import type { Metadata } from "next";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FacilityLocation } from "@/components/location/FacilityLocation";
import { PageHero } from "@/components/sections/PageHero";
import { EnquiryGuide } from "@/components/sections/EnquiryGuide";
import { FaqSection } from "@/components/sections/FaqSection";
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
              appear here when FIDVI publishes them — nothing is transmitted from
              this page until then.
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
      <Section spacing={false} className="pb-[var(--spacing-section)] pt-[var(--spacing-section)]">
        <Container>
          <FacilityLocation />
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-8 border border-border px-6 py-8 md:grid-cols-12 md:px-10 md:py-10">
          <div className="md:col-span-4">
            <p className="font-sans text-label uppercase text-muted">Channels</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Still unpublished</h2>
          </div>
          <div className="md:col-span-8">
            <p className="leading-relaxed text-muted">
              Phone, email and WhatsApp are not published on this site yet. Business
              hours are also not listed until FIDVI confirms them. Use the enquiry
              form to prepare your requirement, and send it through the channel FIDVI
              shares with you.
            </p>
          </div>
        </Container>
      </Section>
      <FaqSection items={faqs} title="Before you send." />
      <CrossLinks
        title="Useful before you enquire."
        links={[
          {
            href: "/products",
            label: "Products",
            description: "Confirm which format fits the brief.",
          },
          {
            href: "/manufacturing",
            label: "Manufacturing",
            description: "Understand how the order will be produced.",
          },
          {
            href: "/about",
            label: "About",
            description: "Facility location and manufacturing stance.",
          },
        ]}
      />
    </>
  );
}
