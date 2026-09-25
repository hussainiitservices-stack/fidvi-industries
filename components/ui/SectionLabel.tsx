import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type SectionLabelProps = ComponentProps<"p">;

export function SectionLabel({ className, ...props }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-sans text-label uppercase text-muted",
        className,
      )}
      {...props}
    />
  );
}
