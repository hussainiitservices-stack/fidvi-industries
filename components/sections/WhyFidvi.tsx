import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { whyFidvi } from "@/data/why-fidvi";

export function WhyFidvi() {
  return (
    <Section>
      <Container className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-section font-medium">
            Built Around Manufacturing.
          </h2>
        </div>
        <ol className="divide-y divide-border border-y border-border lg:col-span-7">
          {whyFidvi.map((point) => (
            <li key={point.number} className="grid grid-cols-[2.75rem_1fr] gap-5 py-3.5">
              <p className="font-sans text-label text-muted">{point.number}</p>
              <div>
                <h3 className="font-display text-2xl md:text-3xl">{point.title}</h3>
                <p className="mt-2 max-w-xl text-muted">{point.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
