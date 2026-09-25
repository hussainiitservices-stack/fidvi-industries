"use client";

import { ProcessStep } from "@/components/manufacturing/ProcessStep";
import { MediaImage } from "@/components/media/MediaImage";
import { useGsapContext } from "@/lib/motion/gsap";
import type { ProcessStep as ProcessStepData } from "@/data/types";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

type ProcessTimelineProps = {
  steps: ProcessStepData[];
  tone?: "light" | "dark";
  heading?: string;
  intro?: string;
};

export function ProcessTimeline({
  steps,
  tone = "light",
  heading,
  intro,
}: ProcessTimelineProps) {
  const scope = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const active = steps[current] ?? steps[0];

  useGsapContext(
    scope,
    ({ gsap, ScrollTrigger }) => {
      const media = gsap.matchMedia();
      media.add("(min-width: 1024px)", () => {
        const pin = scope.current?.querySelector<HTMLElement>("[data-pin]");
        if (!pin || !scope.current) return;

        ScrollTrigger.create({
          trigger: scope.current,
          start: "top top",
          end: () => `+=${Math.round(steps.length * window.innerHeight * 0.72)}`,
          pin,
          pinSpacing: true,
          scrub: 1.15,
          anticipatePin: 1,
          onUpdate: (self) => {
            const index = Math.min(
              steps.length - 1,
              Math.floor(self.progress * steps.length),
            );
            setCurrent((prev) => (prev === index ? prev : index));
          },
        });
      });
    },
    [steps.length],
  );

  if (!active) return null;

  const progress = ((current + 1) / steps.length) * 100;

  return (
    <div ref={scope}>
      <div data-pin className="hidden h-svh flex-col bg-black pt-20 lg:flex">
        <div className="mx-auto flex h-full w-full max-w-[var(--container-content)] flex-col px-[var(--spacing-gutter)] pb-8">
          {heading ? (
            <div className="grid grid-cols-12 items-end gap-8 border-b border-white/15 pb-5">
              <h2 className="col-span-8 font-display text-section font-medium">{heading}</h2>
              {intro ? (
                <p className="col-span-4 text-sm leading-relaxed text-white/60">{intro}</p>
              ) : null}
            </div>
          ) : null}

          <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-12 pt-8">
            <div className="relative col-span-6 h-[min(58vh,32rem)] overflow-hidden bg-black-soft">
              {steps.map((step, index) => (
                <div
                  key={step.slug}
                  className="absolute inset-0 transition-[opacity,transform] duration-1000 ease-[var(--ease-fidvi)]"
                  style={{
                    opacity: index === current ? 1 : 0,
                    transform: index === current ? "scale(1)" : "scale(1.03)",
                  }}
                >
                  <MediaImage
                    mediaId={step.mediaId}
                    fill
                    priority={index === 0}
                    ratio="product"
                    sizes="50vw"
                  />
                </div>
              ))}
            </div>

            <div className="col-span-6 flex flex-col justify-center">
              <div>
                <div aria-hidden className="mb-8 h-px w-full bg-white/15">
                  <div
                    className="h-px bg-gold transition-[width] duration-1000 ease-[var(--ease-fidvi)]"
                    style={{ width: reduced ? "100%" : `${progress}%` }}
                  />
                </div>
                <ProcessStep step={active} emphasis="active" tone={tone} current />
              </div>

              <ol className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6">
                {steps.map((step, index) => (
                  <li key={step.slug}>
                    <span
                      className={cn(
                        "font-sans text-label tabular-nums transition-colors duration-700 ease-[var(--ease-fidvi)]",
                        !reduced && index === current ? "text-gold" : "text-white/28",
                      )}
                    >
                      {step.number}
                    </span>
                    <span className="sr-only">{step.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[var(--spacing-gutter)] py-[var(--spacing-section)] lg:hidden">
        {heading ? (
          <div className="mb-8 border-b border-white/15 pb-6">
            <h2 className="font-display text-section font-medium">{heading}</h2>
            {intro ? <p className="mt-4 max-w-md text-white/65">{intro}</p> : null}
          </div>
        ) : null}
        <ol className="space-y-12">
          {steps.map((step) => (
            <li key={step.slug}>
              <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-black-soft">
                <MediaImage mediaId={step.mediaId} fill ratio="product" sizes="100vw" />
              </div>
              <ProcessStep step={step} emphasis="stack" tone={tone} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
