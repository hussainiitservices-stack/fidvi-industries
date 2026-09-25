import { cn } from "@/lib/cn";

type DividerProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Divider({ tone = "light", className }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 border-t",
        tone === "dark" ? "border-white/15" : "border-border",
        className,
      )}
    />
  );
}
