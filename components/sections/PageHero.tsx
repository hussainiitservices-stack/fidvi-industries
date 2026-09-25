import { Container } from "@/components/layout/Container";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <header className="border-b border-border">
      <Container className="py-16 md:py-24">
        <p className="font-sans text-label uppercase text-muted">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-section font-medium">{title}</h1>
        {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p> : null}
        {children}
      </Container>
    </header>
  );
}
