"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { useEffect, type DependencyList, type RefObject } from "react";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

type GsapSetup = (context: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void;

export function useGsapContext(
  scope: RefObject<HTMLElement | null>,
  setup: GsapSetup,
  deps: DependencyList = [],
) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !scope.current) return;

    registerGsap();
    const context = gsap.context(() => {
      setup({ gsap, ScrollTrigger });
    }, scope);

    return () => context.revert();
    // The caller owns the dependency list for the setup closure.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, scope, ...deps]);
}

export { gsap, ScrollTrigger };
