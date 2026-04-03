# Frontend Design Skill — My-ENT

> This skill is read before generating any frontend code, component, page, or UI element for the My-ENT project. Apply every principle here to every piece of UI you produce. No exceptions.

---

## The aesthetic direction — decided, not negotiable

My-ENT occupies a precise position: a subspecialty surgical practice on Macquarie Street, Sydney's most prestigious medical address. The aesthetic must communicate clinical authority, human warmth, and quiet confidence. It is not a consumer health app. It is not a corporate hospital. It is a small, exceptional group practice where the surgeons are also researchers and teachers.

The single word that should describe every screen: **refined**.

Not minimal for the sake of minimalism. Not maximalist to impress. Refined — meaning every element earns its place, nothing is decorative without purpose, and the whole communicates competence before the patient reads a single word.

---

## Typography — the most important design decision on this site

**Headings: Cormorant Garamond** — an editorial serif with genuine character. It carries authority without coldness. Use it for all H1, H2, H3 elements. The italic weight is particularly powerful for hero subtext and pull quotes. Never use it for body copy or UI labels.

**Body and UI: DM Sans** — humanist, legible, warm at small sizes. Use it for all body copy, navigation, labels, buttons, captions, and form elements.

**The pairing works because of contrast.** Cormorant is high-contrast, classical, expressive. DM Sans is low-contrast, contemporary, functional. Never blur this distinction by using Cormorant for UI elements or DM Sans for display headings.

### Typographic scale — apply exactly

```
display  48px / lh 1.1  / ls -0.02em  — homepage H1 only, Cormorant
4xl      36px / lh 1.15 / ls -0.02em  — interior page H1, Cormorant
3xl      30px / lh 1.2  / ls -0.01em  — H2, Cormorant
2xl      24px / lh 1.3              — H3, Cormorant
xl       20px / lh 1.4              — H4 / large body lead, DM Sans medium
base     16px / lh 1.7              — body copy, DM Sans regular
sm       14px / lh 1.6              — captions, labels, nav links, DM Sans
xs       12px / lh 1.5  / ls 0.06em — eyebrow labels, badges, DM Sans medium
```

**Eyebrow labels** (the small uppercase text that sits above section headings) are a defining My-ENT typographic detail. Use them consistently. They are always: DM Sans, 12px, medium weight, uppercase, letter-spacing 0.06em, teal-400 colour.

**Never use font-bold (700 weight).** The heaviest weight used anywhere on this site is font-medium (500). Bold feels aggressive against the refined aesthetic and the serif headings. Medium weight conveys emphasis without shouting.

---

## Colour — committed and specific

The palette is narrow by design. Restraint in colour is a signal of confidence.

```
teal-400  #0F6E56  PRIMARY — CTAs, heading accents, active nav states,
                             eyebrow labels, card hover borders
teal-300  #1D9E75  Hover states on primary buttons
teal-200  #5DCAA5  Borders, dividers, icon strokes, subtle accents
teal-50   #E1F5EE  Section backgrounds, pill/badge fills, card highlights

neutral-800  #1A1A1A  Headings
neutral-600  #444444  Body copy
neutral-500  #666666  Secondary text
neutral-400  #888888  Tertiary text, captions, placeholder text
neutral-200  #DDDDDD  All borders (default)
neutral-100  #F5F5F5  Light section backgrounds
neutral-50   #FAFAFA  Page background
white        #FFFFFF  Card surfaces, nav background
```

**The teal is the only colour with expressive range.** Everything else is neutral. This means teal always reads as intentional — it marks what matters. Do not add any other accent colours. No red for urgency. No blue for links. Teal and neutral only.

**Backgrounds tell a story.** The page background is `neutral-50`, not white. Section backgrounds alternate between white and `neutral-100` to create rhythm without borders. The `teal-50` background is used sparingly — only for the For GPs strip, the homepage action bar, and selected callout cards. Its presence signals something important.

---

## Spatial composition

**Maximum content width is 1152px (`max-w-site`).** Centred with `px-6` gutters on mobile, `px-8` on tablet, and the max-width container naturally provides breathing room on desktop. Do not nest additional containers inside sections.

**Section vertical rhythm is `py-16 lg:py-20`.** Every section uses this. Consistency in vertical rhythm is what makes a site feel considered rather than assembled.

**The grid is 12 columns conceptually, expressed in Tailwind.** Common patterns:
- Full width: `w-full`
- Two equal halves: `grid grid-cols-1 lg:grid-cols-2 gap-12`
- Three columns: `grid grid-cols-1 md:grid-cols-3 gap-8`
- Four columns: `grid grid-cols-2 lg:grid-cols-4 gap-6`
- Sidebar layout: `grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12`

**Whitespace is structure.** Do not fill space because it feels empty. Generous whitespace around elements is a quality signal, especially on a medical site where clarity is directly connected to patient confidence.

---

## Component patterns — the My-ENT design vocabulary

Every component on this site belongs to one of these families. Introduce no new visual patterns without a clear reason.

### Cards
White background (`bg-white`), `border border-neutral-200`, `rounded-xl`, `p-6`. On hover, border transitions to `border-teal-200`. No shadows. No gradients. The refinement comes from the typography inside the card, not from decorative surface treatment.

Surgeon cards are a special case: they have a coloured initials block at the top (teal-50 background, teal-400 text) as a placeholder for photography. When photos are available, the initials block becomes an image container with `aspect-ratio: 3/4` and `object-cover`.

### Buttons
Primary: `bg-teal-400 text-white rounded-lg px-6 py-3 font-sans text-sm font-medium hover:bg-teal-300 transition-colors`

Outline: `border border-teal-200 text-teal-400 rounded-lg px-6 py-3 font-sans text-sm font-medium hover:bg-teal-50 transition-colors`

Both include `focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400` for accessibility. Both use `inline-flex items-center gap-2` to accommodate icons.

No other button styles exist on this site. No ghost buttons. No destructive red buttons. No large pill-shaped CTAs.

### Navigation
The Nav is sticky (`sticky top-0 z-50`), white background, `border-b border-neutral-200`. Logo on the left (wordmark "My-ENT" in Cormorant Garamond + tagline "135 Macquarie Street, Sydney" in DM Sans xs). Primary nav links in the centre. Phone number and primary CTA button on the right.

Active nav states use `text-teal-400 font-medium`. Inactive states use `text-neutral-500 hover:text-neutral-800`. The transition between states is 150ms.

On mobile, the nav collapses to a hamburger menu. The mobile drawer slides in from the right, full height, white background, and lists all nav items vertically with generous touch targets (minimum 44px height).

### Section headers
Every section begins with the same structure: optional eyebrow label, then an H2, then optional supporting text (max 2 sentences, `text-neutral-500`). The header sits in a `.section-header` wrapper with `mb-10`. This consistency creates navigable rhythm across the page.

### Eyebrow labels
Always: `<p className="myent-eyebrow">` — the class handles all styling. The text is always a short phrase, never more than four words. Examples: "Our team", "What we treat", "Why My-ENT", "Patient feedback".

### Dividers between major sections
A `border-t border-neutral-200` paragraph or a background colour change. Never a visible horizontal rule element. Never a gradient fade.

---

## Motion and interaction

Motion on this site is restrained and purposeful. Medical contexts require calm, not delight. Every animation must reduce cognitive load, not add to it.

**Permitted transitions:**
- Colour transitions on hover: `transition-colors duration-150`
- Border colour transitions on card hover: `transition-colors duration-150`
- Navigation dropdown reveals: `transition-all duration-200`
- Mobile menu slide-in: `transition-transform duration-300`

**Not permitted:**
- Page entrance animations or staggered reveals
- Scroll-triggered animations
- Parallax effects
- Auto-playing carousels or sliders
- Bouncing or elastic animations
- Any animation that plays on every page load

The site should feel immediate and stable. A patient reading about their upcoming surgery does not need the page to perform for them.

---

## Accessibility — non-negotiable

Every interactive element has a visible focus state using `focus-visible:outline`. The outline uses `outline-teal-400` at 2px offset. Never remove focus outlines with `outline-none` unless the element has a custom focus-visible style.

Colour contrast: all text meets WCAG AA minimum (4.5:1 for normal text, 3:1 for large text). The teal-400 on white passes at 4.7:1 for normal text. Never use teal-200 or lighter for text on white — it fails contrast.

All images have descriptive alt text written for a patient audience, not for SEO. A decorative background image has `aria-hidden="true"` on its wrapper, not `alt=""` on the image.

All form fields have visible labels. Placeholder text is never a substitute for a label. Error states use red only for the error message text and border — never for the field background.

Touch targets are minimum 44×44px on mobile. Navigation links, buttons, and form controls all meet this minimum without requiring padding hacks.

---

## What this site must never look like

These are the failure modes to actively resist when generating UI for My-ENT.

**Generic medical site.** Stock photo of a smiling doctor with crossed arms. Blue and white colour scheme. Rounded pill buttons. Sans-serif headings. Feels like every GP clinic website from 2018. My-ENT is a subspecialty surgical practice with research credentials — the design must communicate that distinction.

**SaaS startup.** Gradient hero backgrounds. Feature grids with emoji icons. "Get started for free" CTAs. Testimonial carousels with star ratings in orange. Dark mode toggle. This is a medical practice, not a product.

**Overly clinical.** All-white everything. Tiny grey text. No visual hierarchy. Institutional. Cold. Patients who are anxious about a health concern need warmth alongside competence — the design must deliver both.

**AI-generated generic.** Inter or Roboto as the heading font. Purple or teal gradients. Glassmorphism cards. Oversized rounded corners (border-radius > 16px on cards). These patterns signal that no design decision was made — they are the result of asking an AI to "make it look good" without constraints. My-ENT has constraints, and they produce a better result.

---

## Before generating any UI component — run this checklist

1. Is this using Cormorant Garamond for headings and DM Sans for everything else?
2. Is the colour confined to the teal and neutral palettes above?
3. Does every interactive element have a visible focus state?
4. Is the font weight capped at medium (500)?
5. Are borders `border-neutral-200` by default and `border-teal-200` on hover?
6. Is whitespace generous enough that the design reads as confident, not cramped?
7. Would a patient who is anxious about their health feel calm and informed looking at this screen?

If any answer is no, revise before committing.
