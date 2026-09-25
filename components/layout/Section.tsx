import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type SectionProps = ComponentProps<"section"> & {
  tone?: "light" | "dark";
  spacing?: boolean | "signature";
};

export function Section({
  tone = "light",
  spacing = true,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        spacing === "signature" && "py-[var(--spacing-signature)]",
        spacing === true && "py-[var(--spacing-section)]",
        tone === "dark" ? "bg-black text-white" : "bg-white text-black",
        className,
      )}
      {...props}
    />
  );
}
