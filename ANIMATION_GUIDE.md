# FIDVI Animation Guide

Motion should feel calm, precise, and expensive. Animate hierarchy. Leave most of the page still.

## Levels

| Level | Tool | Use |
| --- | --- | --- |
| 1 | CSS | Hover, focus, accordion, header background |
| 2 | Motion (`motion/react`) | Fade, stagger, text line, image clip |
| 3 | GSAP + ScrollTrigger | Scroll-linked process storytelling only |

Do not add Lenis, magnetic buttons, or marquees. Those fight the scroll story or keep the page in constant motion.

## Tokens

Defined in `app/globals.css` and `lib/motion/tokens.ts`.

| Name | Value |
| --- | --- |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Micro | 200ms |
| Accordion | 250ms |
| Hover | 400ms |
| Section | 750ms |
| Hero / image | 1000ms |
| Fade distance | 24px |
| Arrow shift | 4px |
| Image scale | 1.03 |

## Primitives

- `Reveal` — fade up, once, in view
- `Stagger` — parent for staggered children
- `TextReveal` — line mask, not character-by-character
- `ImageReveal` — clip from the bottom, slight scale settle
- `useGsapContext` — scoped GSAP that reverts on cleanup and does nothing when reduced motion is on

## Reduced motion

`prefers-reduced-motion: reduce` collapses CSS transitions in `globals.css`. Motion primitives render their end state. GSAP setups do not run.

## Do not use

Bounce, elastic easing, spinning, cursor-follow, constant float, heavy parallax, blur stacks, or 3D.
