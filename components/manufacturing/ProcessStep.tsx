import type { ProcessStep as ProcessStepData } from "@/data/types";
import { cn } from "@/lib/cn";

type ProcessStepProps = {
  step: ProcessStepData;
  current?: boolean;
  tone?: "light" | "dark";
  emphasis?: "active" | "quiet" | "stack";
};

export function ProcessStep({
  step,
  current = false,
  tone = "light",
  emphasis = "stack",
}: ProcessStepProps) {
  const dark = tone === "dark";

  if (emphasis === "active") {
    return (
      <article>
        <p className="font-sans text-label uppercase text-gold">{step.number}</p>
        <h3 className="mt-4 font-display text-5xl font-medium leading-[1.05] lg:text-6xl">
          {step.title}
        </h3>
        <p className={cn("mt-5 max-w-md text-lg leading-relaxed", dark ? "text-white/70" : "text-muted")}>
          {step.summary}
        </p>
      </article>
    );
  }

  return (
    <article className={cn(current && "is-current")}>
      <p
        className={cn(
          "font-sans text-label",
          current ? "text-gold" : dark ? "text-white/45" : "text-muted",
        )}
      >
        {step.number}
      </p>
      <h3
        className={cn(
          "mt-3 font-display text-3xl font-medium",
          current ? "text-gold" : dark ? "text-white" : "text-black",
        )}
      >
        {step.title}
      </h3>
      {emphasis === "stack" ? (
        <p className={cn("mt-3 max-w-md text-base leading-relaxed", dark ? "text-white/65" : "text-muted")}>
          {step.summary}
        </p>
      ) : null}
    </article>
  );
}
