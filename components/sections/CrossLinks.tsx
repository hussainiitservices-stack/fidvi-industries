import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

type LinkItem = { href: string; label: string; description: string };

export function CrossLinks({
  eyebrow = "Continue exploring",
  title,
  links,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  links: LinkItem[];
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-white/65" : "text-muted";
  const rule = tone === "dark" ? "border-white/15" : "border-border";

  return (
    <Section tone={tone}>
      <Container>
        <p className={`font-sans text-label uppercase ${tone === "dark" ? "text-gold" : "text-muted"}`}>
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-section font-medium">{title}</h2>
        <ul className={`mt-10 grid gap-6 border-t ${rule} pt-8 md:grid-cols-3`}>
          {links.map((link) => (
            <li key={link.href} className={`border-t ${rule} pt-5 md:border-t-0 md:pt-0`}>
              <ArrowLink href={link.href}>{link.label}</ArrowLink>
              <p className={`mt-3 max-w-xs text-sm leading-relaxed ${muted}`}>{link.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
