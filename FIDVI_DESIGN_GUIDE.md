# FIDVI Industries --- Modern Website Design Guide

## 1. Design North Star

FIDVI Industries is a **premium manufacturing and packaging business**.

The website should feel:

**Modern Industrial × Premium Editorial × Manufacturing Precision**

It should communicate manufacturing capability, reliability, quality,
customization, scale, and B2B credibility.

Avoid making it look like an IT/SaaS website, generic corporate
template, low-cost packaging supplier, or e-commerce catalogue.

------------------------------------------------------------------------

## 2. Brand Positioning

Primary positioning:

> **Manufacturing Solutions. Built for Tomorrow.**

Supporting idea:

> **Packaging is where we begin. Innovation is where we're going.**

The design should leave room for FIDVI to expand into additional
manufacturing/business verticals in the future.

------------------------------------------------------------------------

## 3. Color System

Use a restrained black, warm-white, and gold palette.

``` css
--fidvi-black: #0B0B0B;
--fidvi-black-soft: #111111;
--fidvi-white: #F7F6F2;
--fidvi-white-pure: #FFFFFF;
--fidvi-gold: #C8A45D;
--fidvi-gold-light: #D8BD7A;
--fidvi-charcoal: #262626;
--fidvi-muted: #77736A;
--fidvi-border: #D8D5CC;
```

### Usage

-   **Black:** hero, manufacturing, footer, strong visual breaks
-   **Warm white:** main backgrounds and content sections
-   **Gold:** CTAs, labels, borders, numbers, icons, active states
-   **Charcoal/muted:** secondary text and supporting UI

Gold is an **accent**, not the dominant color.

Never introduce bright blue, bright green, neon colors, or multiple
unrelated accent colors.

------------------------------------------------------------------------

## 4. Typography

Use a premium serif + clean sans-serif pairing.

### Recommended

Display: - Cormorant Garamond - DM Serif Display - Playfair Display

UI/body: - Manrope - Inter - Geist Sans - DM Sans

Preferred pairing:

**Cormorant Garamond + Manrope**

### Scale

Hero: - Desktop: 72--96px - Tablet: 56--72px - Mobile: 42--56px

Section headings: - Desktop: 48--72px - Mobile: 36--48px

Body: - 16--18px - line-height 1.6--1.8

Labels: - 11--13px - uppercase - letter-spacing 0.12--0.18em

Use typography to create hierarchy instead of excessive cards or
decoration.

------------------------------------------------------------------------

## 5. Layout

Use an editorial, spacious layout.

``` css
max-width: 1440px;
margin-inline: auto;
padding-inline: clamp(20px, 4vw, 72px);
```

Section spacing: - Desktop: 120--180px - Tablet: 96--120px - Mobile:
72--96px

Create visual rhythm through whitespace, light/dark transitions,
full-width photography, asymmetric grids, thin borders, and large
typography.

### Radius

Prefer: - 0px - 2px - 4px - 6px

Avoid excessive 20--32px rounded cards.

------------------------------------------------------------------------

## 6. Navigation

Primary navigation:

`HOME | ABOUT | PRODUCTS | INDUSTRIES | MANUFACTURING | QUALITY | CONTACT`

Right-side CTA:

`GET IN TOUCH`

Desktop: - Minimal - Spacious - Sticky - Transparent over hero where
appropriate - Transitions to a solid background on scroll

Mobile: - Hamburger - Large overlay/menu - Large readable links - Clear
CTA

Do not put 15--20 items in the main navigation.

------------------------------------------------------------------------

## 7. Homepage Structure

Use this conceptual order:

1.  Hero
2.  Trust / Intro
3.  Products
4.  Industries
5.  Manufacturing
6.  Why Fidvi
7.  Customization
8.  Facility
9.  Quality
10. Gallery
11. FAQ
12. Final CTA
13. Footer

Every section must have a distinct visual purpose.

------------------------------------------------------------------------

## 8. Hero

Suggested content:

> FIDVI INDUSTRIES\
> Creating Tomorrow, Inspiring Forever.\
> Advanced Packaging Solutions for Businesses That Move the World.

CTAs: - Explore Our Products - Contact Us

Supporting line:

`Manufacturing • Quality • Reliability • Innovation`

### Hero visual

Prefer a real FIDVI factory, machinery, or packaging photograph.

Use: - Near full-screen composition - Strong crop - Minimal dark overlay
when needed - Large editorial typography - Minimal UI

### Hero animation

Sequence: 1. Image reveal 2. Eyebrow fade/slide 3. Heading line reveal
4. Description reveal 5. CTA reveal 6. Supporting line reveal

Keep the full sequence around 700--1200ms.

Do not use dramatic zooms, bouncing, or rotating elements.

------------------------------------------------------------------------

## 9. Product Section

Products:

1.  Corrugated Boxes
2.  Shipper Cartons
3.  Die-Cut Cartons
4.  Mono Cartons
5.  Offset Printed Boxes
6.  2-Ply Paper Rolls
7.  Cello Tape --- Printed & Transparent

Product cards should be editorial rather than SaaS-like.

Example:

``` text
01

CORRUGATED BOXES

Reliable protection for transportation,
storage and distribution.

EXPLORE →
```

Use: - Large product image - Number - Product name - Short description -
Arrow - Thin border

Hover: - Image scale \~1.03 - Arrow moves 3--5px - Border/accent changes
subtly - Duration 300--500ms

------------------------------------------------------------------------

## 10. Product Detail Template

Structure:

``` text
Breadcrumb
Product Hero
Description
Applications
Available Options
Specifications / Capabilities
Product Imagery
Customization CTA
Related Products
Final CTA
```

For Corrugated Boxes, possible applications include:

-   Fruits & Vegetables
-   Bakery
-   FMCG
-   Pharmaceuticals
-   Chemicals
-   Paints
-   Confectionery
-   Namkeen & Snacks
-   Industrial Products
-   E-commerce & Logistics

Possible options: - Different sizes - Ply configurations -
Printed/unprinted - Customized dimensions - Flute requirements - Die-cut
designs - Slotting - Stitching - Pasting

Only show information confirmed by the client.

------------------------------------------------------------------------

## 11. Industries

Industries:

-   Fruits & Vegetables
-   Bakery
-   Pharmaceuticals
-   Paints & Chemicals
-   FMCG & Namkeen
-   Confectionery
-   Industrial Manufacturing
-   E-Commerce & Logistics

Use a large editorial image grid rather than eight identical rounded
cards.

Each item can contain:

`IMAGE → INDUSTRY NAME → SHORT DESCRIPTION →`

Use varied image crops and occasional larger feature tiles.

------------------------------------------------------------------------

## 12. Manufacturing Process

Headline:

> From Paper to Packaging

Process:

``` text
01 Paper Reel Selection
02 Corrugation
03 Pasting
04 Creasing
05 Printing / Conversion
06 Slotting / Die Cutting
07 Stitching / Pasting
08 Quality Inspection
09 Bundling & Packing
10 Dispatch
```

Desktop: - Horizontal timeline or staggered editorial layout

Mobile: - Vertical timeline

Scroll animation: - Number reveals - Connecting line draws -
Content/image reveals - Current step gets a subtle highlight

Respect reduced-motion settings.

------------------------------------------------------------------------

## 13. Why Fidvi

Six strengths:

1.  Quality Focused Manufacturing
2.  Customized Solutions
3.  Industry Expertise
4.  Reliable Supply
5.  Customer-Centric Approach
6.  Built for Long-Term Partnerships

Do not use generic claims like "Best Quality" or "Best Price".

Use numbered editorial blocks instead of six generic icon cards.

------------------------------------------------------------------------

## 14. Customization

Headline:

> Your Product. Your Requirements. Our Packaging.

Show:

`SIZE | STRENGTH | PRINTING | STRUCTURE | FINISHING`

Recommended dark section with gold details.

CTA:

`SEND US YOUR REQUIREMENT →`

This is a major B2B conversion section.

------------------------------------------------------------------------

## 15. Facility

Headline:

> Our Manufacturing Facility

Location:

> Nagzhiri Industrial Area, Dewas Road, Ujjain, Madhya Pradesh

Show: - Factory exterior - Machinery - Paper reels - Production line -
Workers - Finished products - Storage - Dispatch

Use actual FIDVI photographs whenever available.

------------------------------------------------------------------------

## 16. Capabilities

Only display confirmed capabilities:

-   Corrugation
-   Pasting
-   Creasing
-   Slotting
-   Stitching
-   Die Cutting
-   Printing
-   Customized Sizes
-   Bulk Manufacturing

Never invent production numbers or machinery specifications.

------------------------------------------------------------------------

## 17. Quality

Headline:

> Quality That Protects Your Product

Focus on: - Material selection - Dimensional accuracy - Board strength -
Printing quality - Pasting/stitching - Product consistency - Final
inspection - Packaging and dispatch

Do not display ISO/FSC/food-contact or other certifications unless valid
certifications are provided.

------------------------------------------------------------------------

## 18. Gallery

Categories:

`ALL | FACTORY | MACHINERY | MANUFACTURING | PRODUCTS | PACKAGING | DISPATCH`

Recommended: - Editorial/masonry grid - Featured image - Supporting
images - Lightbox - Keyboard navigation - Mobile swipe support

Prefer real factory/product imagery.

------------------------------------------------------------------------

## 19. FAQ

Recommended questions:

-   Do you manufacture customized boxes?
-   Do you manufacture in bulk?
-   Do you provide printed packaging?
-   Can you manufacture boxes according to our dimensions?
-   Which industries do you serve?
-   Do you supply outside Ujjain?
-   How can I request a quotation?

Use a clean accordion with 200--300ms height/opacity transitions.

------------------------------------------------------------------------

## 20. Contact

Headline:

> Let's Build the Right Packaging for Your Business.

Fields:

``` text
Name
Company Name
Phone Number
Email
Requirement
SEND ENQUIRY
```

Also show: - WhatsApp - Phone - Email - Location

Keep the form simple and lead-focused.

------------------------------------------------------------------------

## 21. Footer

Dark footer containing:

-   FIDVI INDUSTRIES PRIVATE LIMITED
-   Creating Tomorrow, Inspiring Forever.
-   Quick links
-   Product links
-   Location
-   Contact
-   Privacy Policy
-   Terms
-   Copyright

------------------------------------------------------------------------

# 22. Animation System

Animation should feel **expensive, calm, and intentional**.

Principle:

> Animate hierarchy, not everything.

Timing: - Micro: 150--250ms - Hover: 300--450ms - Section reveal:
600--900ms - Hero sequence: 700--1200ms - Image reveal: 800--1200ms

Preferred easing:

``` css
cubic-bezier(0.22, 1, 0.36, 1)
```

Preferred animations: - Fade + translateY - Image clip-path reveal -
Subtle image scale - Line reveal - Number reveal - Arrow translation -
Staggered hero text

Avoid: - Constant parallax - Cursor-following gimmicks - Excessive page
transitions - Bouncing - Rotating UI - Animating every
paragraph/button/icon

------------------------------------------------------------------------

## 23. Reduced Motion

Always support:

``` css
@media (prefers-reduced-motion: reduce)
```

Simplify/disable: - Parallax - Large transforms - Staggered animations -
Auto-playing motion

The website must remain fully usable without animation.

------------------------------------------------------------------------

## 24. Images

Prefer real FIDVI imagery.

Priority:

`REAL FACTORY > STOCK FACTORY`

`REAL MACHINE > STOCK MACHINE`

`REAL PRODUCT > STOCK PRODUCT`

`REAL PROCESS > GENERIC STOCK IMAGE`

Use: - WebP/AVIF where appropriate - Responsive `srcset` - Lazy loading
below the fold - Explicit dimensions - Proper `object-fit`

Suggested ratios: - Hero: 16:9 / viewport - Product: 4:3 - Industry:
4:3 - Gallery: editorial/mixed

Client-supplied reference images must not automatically be labeled as
FIDVI products without confirmation.

------------------------------------------------------------------------

## 25. Responsive Design

Breakpoints approximately:

``` text
Mobile: < 640px
Tablet: 640–1024px
Desktop: > 1024px
Large desktop: > 1440px
```

Mobile is a first-class experience.

Check: - No horizontal overflow - Typography scales correctly - Images
crop correctly - Navigation works - Tap targets are comfortable - Forms
are usable - Animations are reduced where appropriate

Do not merely shrink desktop layouts.

------------------------------------------------------------------------

## 26. Accessibility

Required: - Semantic HTML - Correct heading hierarchy - Keyboard
navigation - Visible focus states - Form labels - Alt text - Good
contrast - Reduced-motion support - Accessible accordions - Accessible
mobile navigation

Do not use gold text on white when contrast is insufficient.

------------------------------------------------------------------------

## 27. SEO

Target themes may include:

-   Corrugated Box Manufacturer in Ujjain
-   Corrugated Box Manufacturer in Madhya Pradesh
-   Packaging Box Manufacturer in Ujjain
-   Shipper Carton Manufacturer
-   Die Cut Box Manufacturer
-   Mono Carton Manufacturer
-   Industrial Packaging Manufacturer
-   Packaging Company in Madhya Pradesh

Implement naturally; never keyword-stuff.

Technical basics: - Unique title per page - Unique meta description -
One primary H1 - Logical H2/H3 hierarchy - Clean URLs - Alt text - Open
Graph - Sitemap - Robots - Canonicals where appropriate - Relevant
structured data

------------------------------------------------------------------------

## 28. Performance

Prioritize: - Optimized images - Responsive images - Lazy loading -
Minimal JavaScript - Code splitting - Optimized fonts - Avoid
unnecessary animation libraries - Avoid huge background videos - Avoid
loading the entire gallery immediately - Prevent layout shift

Performance is part of the design quality.

------------------------------------------------------------------------

## 29. Suggested Component Architecture

``` text
components/
  layout/
    Header
    Footer
    MobileMenu

  ui/
    Button
    SectionLabel
    SectionHeading
    ArrowLink
    ImageReveal
    Accordion

  products/
    ProductCard
    ProductGrid
    ProductHero
    ProductOptions

  industries/
    IndustryCard
    IndustryGrid

  manufacturing/
    ProcessTimeline
    ProcessStep

  gallery/
    GalleryGrid
    Lightbox

  sections/
    Hero
    Intro
    Products
    Industries
    Manufacturing
    WhyFidvi
    Customization
    Facility
    Quality
    Gallery
    FAQ
    FinalCTA
```

Prefer reusable data-driven components over duplicated markup.

------------------------------------------------------------------------

## 30. Cursor / AI Coding Rules

When using Cursor:

1.  Read this guide before significant UI changes.
2.  Do not introduce new colors without approval.
3.  Do not introduce new typography without checking the existing type
    system.
4.  Reuse existing components before creating new ones.
5.  Keep animations subtle and consistent.
6.  Never invent business facts, certifications, statistics, clients, or
    capabilities.
7.  Treat supplied reference imagery as references unless confirmed as
    FIDVI assets.
8.  Keep mobile behavior intentional.
9.  Use semantic HTML and accessible components.
10. Avoid unnecessary dependencies.
11. Do not redesign approved sections while implementing unrelated
    changes.
12. Keep spacing, typography, buttons, borders, and animations
    consistent.
13. Before adding animation, ask whether it improves hierarchy or
    usability.
14. Before adding a section, verify that it belongs to the approved
    information architecture.
15. Do not turn the website into an e-commerce or SaaS interface.
16. Test desktop and mobile after significant UI changes.
17. Preserve the premium industrial/business visual language.
18. When content is uncertain, use the supplied project brief rather
    than inventing information.

------------------------------------------------------------------------

## 31. Design QA Checklist

### Visual

-   [ ] Black/white/gold system is consistent
-   [ ] Typography hierarchy is strong
-   [ ] No unnecessary colors
-   [ ] Spacing feels premium
-   [ ] Images are high quality
-   [ ] No generic template feel
-   [ ] CTA hierarchy is clear

### Responsive

-   [ ] Mobile navigation works
-   [ ] No horizontal overflow
-   [ ] Typography scales correctly
-   [ ] Images crop correctly
-   [ ] Cards stack correctly
-   [ ] Forms work on mobile

### Animation

-   [ ] Animations are subtle
-   [ ] No excessive motion
-   [ ] Reduced motion works
-   [ ] No layout jumps
-   [ ] Animation never blocks interaction

### Content

-   [ ] No unsupported claims
-   [ ] No fake certifications
-   [ ] No fake clients
-   [ ] Product information is approved
-   [ ] Manufacturing capabilities are accurate
-   [ ] Contact information is correct

### SEO

-   [ ] One H1 per page
-   [ ] Unique titles
-   [ ] Meta descriptions
-   [ ] Image alt text
-   [ ] Clean URLs
-   [ ] Sitemap
-   [ ] Open Graph

### Performance

-   [ ] Images optimized
-   [ ] Lazy loading
-   [ ] Fonts optimized
-   [ ] No unnecessary dependencies
-   [ ] Layout shift minimized

------------------------------------------------------------------------

## 32. Final Principle

The final website should feel like:

> **A serious manufacturing business with a premium modern identity.**

Not an IT website.\
Not a SaaS landing page.\
Not a generic packaging template.\
Not an e-commerce catalogue.

The desired combination is:

**Precision + Manufacturing + Quality + Photography + Editorial
Typography + Restrained Motion + Strong B2B Conversion.**
