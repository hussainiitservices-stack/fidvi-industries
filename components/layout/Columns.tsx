import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const columns = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

type ColumnsProps = {
  count?: keyof typeof columns;
  className?: string;
  children: ReactNode;
};

export function Columns({ count = 3, className, children }: ColumnsProps) {
  return (
    <div className={cn("grid gap-6 md:gap-8", columns[count], className)}>
      {children}
    </div>
  );
}
