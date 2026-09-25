"use client";

import { duration, easing } from "@/lib/motion/tokens";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "motion/react";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
};

export function TextReveal({ text, className, as = "h1" }: TextRevealProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  const lines = text.split("\n");

  return (
    <Tag className={cn("font-display text-hero font-medium", className)}>
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reduced ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: duration.hero, ease: easing.standard }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
