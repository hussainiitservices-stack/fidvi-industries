export const easing = {
  standard: [0.22, 1, 0.36, 1] as const,
};

export const duration = {
  micro: 0.2,
  hover: 0.4,
  section: 0.75,
  hero: 1,
  image: 1,
  accordion: 0.25,
} as const;

export const distance = {
  fade: 24,
  arrow: 4,
  imageScale: 1.03,
} as const;

export const stagger = {
  hero: 0.08,
  content: 0.06,
} as const;
