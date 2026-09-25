import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div"> & {
  as?: "div" | "section" | "header" | "footer" | "nav";
};

export function Container({
  as: Tag = "div",
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[var(--container-content)] px-[var(--spacing-gutter)]", className)}
      {...props}
    />
  );
}
