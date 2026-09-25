"use client";

import { cn } from "@/lib/cn";
import { useId, useState } from "react";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <div className={cn("border-t border-border", className)}>
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div key={item.id} className="border-b border-border">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-6 py-4 text-left font-sans text-base"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.question}</span>
                <span aria-hidden className="text-gold">
                  {open ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              data-open={open}
              className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[var(--duration-accordion)] ease-[var(--ease-fidvi)] data-[open=true]:grid-rows-[1fr]"
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-5 text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
