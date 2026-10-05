import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { buyerNeeds } from "@/data/enquiry";

export function BuyerNeeds() {
  return (
    <Section>
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-sans text-label uppercase text-muted">What businesses need</p>
          <h2 className="mt-4 font-display text-section font-medium">
            More Than a Box.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Businesses need packaging that fits the product, the handling path and the
            presentation. FIDVI converts those requirements into manufactured packaging
            solutions.
          </p>
        </div>
        <ul className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-7">
          {buyerNeeds.map((need) => (
            <li key={need} className="bg-white px-5 py-6 font-display text-2xl md:text-3xl">
              {need}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
