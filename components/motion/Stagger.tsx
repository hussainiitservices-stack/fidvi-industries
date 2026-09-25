"use client";

import { reducedState, staggerContainer } from "@/lib/motion/variants";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  step?: number;
};

export function Stagger({ children, className, step }: StaggerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={reduced ? reducedState : staggerContainer(step)}
    >
      {children}
    </motion.div>
  );
}
