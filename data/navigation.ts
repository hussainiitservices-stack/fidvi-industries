import type { NavItem } from "./types";

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation: NavItem[] = [
  ...primaryNavigation,
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const contactCta = {
  label: "Get in Touch",
  href: "/contact" as const,
};

export const enquiryCta = {
  label: "Send Enquiry",
  href: "/contact" as const,
};

export const requirementCta = {
  label: "Send Us Your Requirement",
  href: "/contact" as const,
};
