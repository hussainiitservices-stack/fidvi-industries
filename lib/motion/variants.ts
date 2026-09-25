import { distance, duration, easing, stagger } from "./tokens";

const ease = easing.standard;

export const fadeUp = {
  hidden: { opacity: 0, y: distance.fade },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.section, ease },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.section, ease },
  },
};

export const imageReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)", scale: 1.04 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    scale: 1,
    transition: { duration: duration.image, ease },
  },
};

export const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: duration.section, ease },
  },
};

export function staggerContainer(step: number = stagger.content) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: step },
    },
  };
}

export const reducedState = {
  hidden: { opacity: 1, y: 0, scale: 1, clipPath: "inset(0 0 0% 0)" },
  visible: { opacity: 1, y: 0, scale: 1, clipPath: "inset(0 0 0% 0)" },
};
