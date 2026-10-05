import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { IconMark } from "@/components/ui/IconMark";
import { enquiryChecklist, enquiryHeadline, enquiryIntro } from "@/data/enquiry";
import {
  ClipboardList,
  Factory,
  Mail,
  Package,
  Printer,
  Ruler,
  type LucideIcon,
} from "lucide-react";

const enquiryIcons: LucideIcon[] = [
  Mail,
  Package,
  Ruler,
  Factory,
  Printer,
  ClipboardList,
];

export function EnquiryGuide({ tone = "light" }: { tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-white/65" : "text-muted";
  const rule = tone === "dark" ? "border-white/15" : "border-border";
  const markClass = tone === "dark" ? "border-gold/40 text-gold" : undefined;

  return (
    <Section tone={tone}>
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-display text-section font-medium">{enquiryHeadline}</h2>
          <p className={`mt-5 max-w-sm leading-relaxed ${muted}`}>{enquiryIntro}</p>
        </div>
        <ol className={`divide-y ${rule} border-y ${rule} lg:col-span-8`}>
          {enquiryChecklist.map((item, index) => {
            const Icon = enquiryIcons[index] ?? ClipboardList;
            return (
              <li
                key={item.title}
                className="grid gap-3 py-5 sm:grid-cols-[auto_3rem_1fr] sm:items-start sm:gap-5"
              >
                <IconMark icon={Icon} className={markClass} />
                <p className={`font-sans text-label ${tone === "dark" ? "text-gold" : "text-muted"}`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{item.title}</h3>
                  <p className={`mt-2 max-w-xl leading-relaxed ${muted}`}>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
