import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "inverse" | "light" | "ghost";
  href?: string;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
} & Omit<ComponentProps<"button">, "className" | "children">;

const styles = {
  primary: "bg-black text-white hover:bg-charcoal",
  secondary: "border border-current bg-transparent text-current hover:border-gold",
  inverse: "border border-white bg-transparent text-white hover:border-gold-light",
  light: "bg-white text-black hover:bg-gold hover:text-black",
  ghost: "bg-transparent text-current hover:text-gold",
} as const;

export function Button({
  variant = "primary",
  href,
  className,
  children,
  type = "button",
  arrow = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex h-12 min-h-12 items-center justify-center gap-3 rounded-sm px-6 font-sans text-label uppercase transition-colors duration-[var(--duration-hover)] ease-[var(--ease-fidvi)] disabled:pointer-events-none disabled:opacity-40",
    styles[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-[var(--duration-hover)] ease-[var(--ease-fidvi)] group-hover:translate-x-1"
          strokeWidth={1.25}
        />
      ) : null}
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
