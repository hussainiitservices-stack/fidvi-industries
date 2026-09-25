import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type SectionHeadingProps = ComponentProps<"h2"> & {
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  as: Tag = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display text-section font-medium text-balance",
        className,
      )}
      {...props}
    />
  );
}
