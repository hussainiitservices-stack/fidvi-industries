import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";

type ArrowLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
};

export function ArrowLink({ className, children, ...props }: ArrowLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex h-12 min-h-12 items-center gap-3 font-sans text-label uppercase",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform duration-[var(--duration-hover)] ease-[var(--ease-fidvi)] group-hover:translate-x-1"
        strokeWidth={1.25}
      />
    </Link>
  );
}
