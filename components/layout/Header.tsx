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
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!isHome) return;

    const hero = document.getElementById("site-hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setPastHero(!entry.isIntersecting || entry.intersectionRatio < 0.45);
      },
      { threshold: [0, 0.25, 0.45, 0.7, 1] },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (open || y < 24) {
        setHidden(false);
      } else if (delta > 8) {
        setHidden(true);
      } else if (delta < -8) {
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

  const overHero = isHome && !pastHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-[translate,color,background-color,border-color,backdrop-filter] duration-500 ease-[var(--ease-fidvi)]",
        hidden ? "-translate-y-full" : "translate-y-0",
        overHero
          ? "border-white/10 bg-black/70 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl supports-[backdrop-filter]:bg-black/60"
          : "border-border bg-white/95 text-black shadow-[0_1px_0_rgba(11,11,11,0.04)] backdrop-blur-md",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className={cn(
            "font-display text-2xl tracking-wide",
            overHero && "drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]",
          )}
        >
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
                      : "text-white/90"
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
              overHero
                ? "border-white/85 bg-white/10 text-white hover:bg-white/15"
                : "border-black",
            )}
          >
            {contactCta.label}
          </Link>
          <button
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center lg:hidden",
              overHero && "text-white",
            )}
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
