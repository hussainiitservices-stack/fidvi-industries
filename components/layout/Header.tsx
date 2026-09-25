"use client";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { company } from "@/data/company";
import { contactCta, primaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "./Container";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      setSolid(y > 8);
      if (open || y < 8) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overHero = pathname === "/" && !solid;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-[translate,color,background-color,border-color] duration-500 ease-[var(--ease-fidvi)]",
        hidden ? "-translate-y-full" : "translate-y-0",
        overHero
          ? "border-transparent bg-transparent text-white"
          : "border-border bg-white text-black",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" className="font-display text-2xl tracking-wide">
          {company.wordmark}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {primaryNavigation.map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "group relative py-2 font-sans text-label uppercase transition-colors duration-300 hover:text-gold",
                  overHero
                    ? current
                      ? "text-white"
                      : "text-white/80"
                    : current
                      ? "text-black"
                      : "text-charcoal",
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-500 ease-[var(--ease-fidvi)]",
                    current ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={contactCta.href}
            className={cn(
              "hidden h-12 min-h-12 items-center border px-5 font-sans text-label uppercase transition-colors duration-300 hover:border-gold hover:text-gold lg:inline-flex",
              overHero ? "border-white" : "border-black",
            )}
          >
            {contactCta.label}
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Menu strokeWidth={1.25} />
          </button>
        </div>
      </Container>
      <MobileMenu open={open} onClose={close} />
    </header>
  );
}
