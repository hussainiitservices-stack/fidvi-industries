"use client";

import { company } from "@/data/company";
import { contactCta, primaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex flex-col bg-black text-white lg:hidden"
    >
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/15 px-[var(--spacing-gutter)]">
        <p className="font-display text-2xl tracking-wide">{company.wordmark}</p>
        <button
          ref={closeRef}
          type="button"
          className="inline-flex min-h-11 items-center font-sans text-label uppercase transition-colors duration-300 hover:text-gold"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center overflow-y-auto px-[var(--spacing-gutter)] py-6">
        {primaryNavigation.map((item) => {
          const current = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current ? "page" : undefined}
              className={cn(
                "flex min-h-12 items-center border-b border-white/10 font-display text-4xl transition-colors duration-300 hover:text-gold",
                current ? "text-gold" : "text-white",
              )}
              onClick={onClose}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="shrink-0 px-[var(--spacing-gutter)] pb-8">
        <Link
          href={contactCta.href}
          className="inline-flex min-h-12 w-full items-center justify-center border border-white font-sans text-label uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
          onClick={onClose}
        >
          {contactCta.label}
        </Link>
      </div>
    </div>,
    document.body,
  );
}
