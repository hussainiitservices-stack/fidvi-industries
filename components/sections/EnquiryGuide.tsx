import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { enquiryChecklist, enquiryHeadline, enquiryIntro } from "@/data/enquiry";

export function EnquiryGuide({ tone = "light" }: { tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-white/65" : "text-muted";
  const rule = tone === "dark" ? "border-white/15" : "border-border";

  return (
    <Section tone={tone}>
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-display text-section font-medium">{enquiryHeadline}</h2>
          <p className={`mt-5 max-w-sm leading-relaxed ${muted}`}>{enquiryIntro}</p>
        </div>
        <ol className={`divide-y ${rule} border-y ${rule} lg:col-span-8`}>
          {enquiryChecklist.map((item, index) => (
            <li key={item.title} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <p className={`font-sans text-label ${tone === "dark" ? "text-gold" : "text-muted"}`}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-display text-2xl md:text-3xl">{item.title}</h3>
                <p className={`mt-2 max-w-xl leading-relaxed ${muted}`}>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
