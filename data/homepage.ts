export const homepageSections = [
  "hero",
  "intro",
  "products",
  "manufacturing",
  "industries",
  "why-fidvi",
  "customization",
  "facility",
  "quality",
  "gallery",
  "faq",
  "final-cta",
] as const;

export type HomepageSection = (typeof homepageSections)[number];

export const heroContent = {
  eyebrow: "Manufacturing Solutions",
  heading: "Packaging Built for What Comes Next.",
  alternateHeading: "Manufacturing Solutions. Built for Tomorrow.",
  description:
    "From corrugated boxes to customized paper-based packaging, FIDVI Industries manufactures solutions designed around the requirements of modern businesses.",
  primaryCta: { label: "Get in Touch", href: "/contact" as const },
  secondaryCta: { label: "Explore Products", href: "/products" as const },
  supporting: ["Manufacturing", "Quality", "Reliability", "Innovation"],
  mediaId: "hero-facility" as const,
};
