import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";

type IconMarkProps = {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  /** Hairline bordered square — editorial accent. Default true. */
  boxed?: boolean;
  strokeWidth?: number;
} & Omit<ComponentProps<"span">, "children" | "className">;

/** Decorative lucide mark — always aria-hidden; pair with visible text. */
export function IconMark({
  icon: Icon,
  className,
  iconClassName,
  boxed = true,
  strokeWidth = 1.35,
  ...props
}: IconMarkProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center text-gold",
        boxed && "size-9 border border-current/25 text-gold",
        !boxed && "size-5",
        className,
      )}
      {...props}
    >
      <Icon
        className={cn(boxed ? "size-4" : "size-4", iconClassName)}
        strokeWidth={strokeWidth}
      />
    </span>
  );
}
