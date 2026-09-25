import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

const sizes = {
  hero: "font-display text-hero font-medium text-balance",
  section: "font-display text-section font-medium text-balance",
  title: "font-display text-4xl font-medium leading-tight md:text-5xl",
} as const;

type DisplayProps = ComponentProps<"h1"> & {
  as?: "h1" | "h2" | "h3" | "p";
  size?: keyof typeof sizes;
};

export function Display({
  as: Tag = "h1",
  size = "section",
  className,
  ...props
}: DisplayProps) {
  return <Tag className={cn(sizes[size], className)} {...props} />;
}

export function Body({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("max-w-2xl text-body text-muted", className)}
      {...props}
    />
  );
}

export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("font-sans text-label uppercase text-muted", className)}
      {...props}
    />
  );
}
