# FIDVI Design System

Implemented in `app/globals.css`. Use these tokens. Do not add colors, typefaces, or radii outside this file.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `black` | `#0B0B0B` | Text, hero, footer, strong breaks |
| `black-soft` | `#111111` | Dark surfaces, empty media frames |
| `white` | `#F7F6F2` | Page background, light sections |
| `white-pure` | `#FFFFFF` | Rare, when warm white is too tinted |
| `gold` | `#C8A45D` | Borders, numbers, icons, rules. Accent only |
| `gold-light` | `#D8BD7A` | Hover accent on dark surfaces |
| `charcoal` | `#262626` | Secondary UI on light backgrounds |
| `muted` | `#77736A` | Supporting text |
| `border` | `#D8D5CC` | Hairline rules |

Gold text on warm white fails contrast. Use gold for rules, icons, and large numbers. Body text stays black or white.

Balance: mostly warm white, dark sections for breaks, gold under 8% of the surface.

## Type

Display: Cormorant Garamond (`font-display`), weights 500–700.
UI and body: Manrope (`font-sans`), weights 400–700.

| Token | Size |
| --- | --- |
| `text-hero` | `clamp(42px, 6vw, 96px)` |
| `text-section` | `clamp(36px, 4.5vw, 72px)` |
| `text-body` | 17px, line-height 1.7 |
| `text-label` | 12px, uppercase, tracking 0.16em |

## Radius

`rounded-xs` 2px, `rounded-sm` 4px, `rounded-md` 6px. No large rounded cards.

## Space

Section padding: `--spacing-section` = `clamp(72px, 10vw, 180px)`.
Page gutter: `--spacing-gutter` = `clamp(20px, 4vw, 72px)`.
Content width: `--container-content` = 1440px, via `Container`.

The 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 / 160 scale maps to Tailwind spacing (`1` through `40`).

## Breakpoints

Mobile below 640. Tablet 640–1024. Desktop above 1024. Wide layouts from 1440 (`wide`).

## Components

Layout: `Container`, `Section`, `SectionHeader`, `Columns`, `Header`, `MobileMenu`, `Footer`.
Type: `Display`, `Body`, `Eyebrow`, `SectionLabel`, `SectionHeading`.
UI: `Button`, `ArrowLink`, `Accordion`, `Divider`.
Content: `ProductCard`, `ProductGrid`, `IndustryCard`, `IndustryGrid`, `ProcessStep`, `ProcessTimeline`, `GalleryItem`, `GalleryGrid`, `Lightbox`.
Media: `MediaFrame`, `MediaImage`, `MediaVideo`.
Motion: `Reveal`, `Stagger`, `TextReveal`, `ImageReveal`.

Pages are not built yet. Compose them from these pieces and `data/`.
