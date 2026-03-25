# PointOak Retirement Advisors — Design & Style Guide

## Overview
This guide documents the exact visual language used on the PointOak homepage. All interior pages must follow these patterns precisely to maintain brand consistency.

---

## 1. Typography

### Font Stack
- **Primary font (everything):** `font-outfit` (Google Fonts: Outfit)
- **Body alt (rarely used):** `font-poppins` (Google Fonts: Poppins)
- **Default body class on `<body>`:** `font-outfit antialiased`

### Heading Hierarchy
| Level | Usage | Classes |
|-------|-------|---------|
| H1 (Hero) | One per page, main hero headline | `text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.4]` |
| H2 (Section) | Section headings | `text-4xl sm:text-5xl lg:text-[68px] font-normal leading-tight` or `font-light` |
| H3 (Card/Sub) | Card titles, subsection headings | `text-lg font-medium leading-[30px]` or `text-2xl lg:text-[2rem] font-light leading-snug` |
| H4 (Minor) | Footer sections, small headings | `text-xl font-medium` or `text-lg md:text-xl font-bold` |

### Body Text
| Context | Classes |
|---------|---------|
| Section intro | `text-base md:text-lg lg:text-2xl leading-[33px]` or `text-base md:text-lg lg:text-xl leading-relaxed` |
| Card/paragraph body | `text-base leading-[25px]` or `text-base leading-relaxed` |
| Small/supporting | `text-sm` or `text-xs` |
| Disclaimers | `text-xs italic text-text-gray` |

### Key Typography Rules
- **All headings use `font-outfit`** explicitly (even though it's the body default)
- Section headings are typically `font-light` or `font-normal` — NOT bold (except H1 hero)
- Body text color: `text-navy` (#003754) for primary, `text-text-gray` (#6f6f6f) for secondary
- Hero text uses custom colors: `text-[#F5F3EF]`, `text-[#EDEDED]`, `text-[#C3C3C3]`
- **Never use font-bold on section H2 headings** — the large size carries the weight

---

## 2. Color Palette

### Brand Colors (Tailwind config names)
| Name | Hex | Usage |
|------|-----|-------|
| `navy` | #003754 | Primary text, headers, buttons, dark backgrounds |
| `dark-navy` | #003245 | Subtle navy variants |
| `medium-blue` | #016BA4 | Links, accents, disclosure boxes |
| `bright-blue` | #00A7EF | Accent highlights, badges |
| `cloud-blue` | #EEF5FF | Light section backgrounds (alternating) |
| `light-gray` | #F3F4F6 | Alternate section backgrounds |
| `text-gray` | #6F6F6F | Secondary/supporting body text |
| `mid-gray` | #B2B2B2 | Borders, muted elements |
| `off-white` | #FCFCFC | Clean backgrounds |

### Section Background Pattern
Sections alternate backgrounds to create visual rhythm:
- `bg-white` → `bg-cloud-blue` → `bg-light-gray` → `bg-white` → `bg-navy` (for CTA/dark sections)

### Gradients
| Name | Value | Usage |
|------|-------|-------|
| Primary button gradient | `linear-gradient(90deg, #003754 0%, #0078B8 100%)` | CTA buttons, header button |
| Hero overlay | `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)` | Video/image overlays |

---

## 3. Spacing & Layout

### Container Widths
| Context | Max Width | Padding |
|---------|-----------|---------|
| Standard content | `max-w-[1170px]` or `max-w-7xl` (1280px) | `px-6 xl:px-0` or `px-6 lg:px-12` |
| Wide content (cards) | `max-w-[1296px]` | `px-6 xl:px-0` |
| Full-width sections | None | `px-6 lg:px-24` |

### Section Vertical Padding
- Standard: `py-12 md:py-20 lg:py-28`
- Compact: `py-12 md:py-16`
- CTA sections: `py-12 md:py-20 lg:py-28`

### Spacing Between Elements
- Section header to content: `mb-8 md:mb-10 lg:mb-12` or `mb-10 md:mb-16 lg:mb-20`
- Heading to subtitle: `mb-4 md:mb-5`
- Card internal padding: `p-8`
- Card gap: `gap-5` (20px)
- Grid gaps: `gap-x-16 gap-y-14` (large grids), `gap-4` (compact grids)

---

## 4. Components & Patterns

### Buttons

**Primary CTA (gradient filled):**
```
className="inline-flex items-center gap-3 px-5 py-3 rounded-[7px] text-white text-[16px] font-medium capitalize transition-opacity hover:opacity-90"
style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
```

**Secondary (outlined, light bg):**
```
className="inline-flex items-center justify-center px-6 py-3 rounded-[7px] border border-[#EFEFEF] text-[#EFEFEF] text-[16px] font-medium capitalize hover:bg-white/10 transition-colors"
```

**Outlined on dark bg (CTA section):**
```
className="inline-flex items-center gap-3 border border-white/40 hover:border-white text-white font-outfit font-medium text-base px-8 py-3.5 rounded-md transition-all duration-200 hover:bg-white/10"
```

**"Learn More" inline link:**
```
className="flex items-center gap-2 text-navy font-outfit text-sm font-medium leading-[14px] hover:opacity-70 transition-opacity w-fit"
```
With arrow SVG: `<svg width="9" height="9">` — 45-degree top-right arrow in navy.

### Cards
- Background: `bg-white`
- Border: `border border-[#F3F4F6]`
- Radius: `rounded-[7px]`
- Padding: `p-8`
- Internal structure: icon → title → description → "Learn More" link
- Icon wrapper: 70x70px circle with `bg-navy/10`, icon centered at 42x42px

### Section Header Pattern
Every section follows this structure:
```tsx
<div className="mb-8 md:mb-10 lg:mb-12">
  <h2 className="text-navy font-outfit text-4xl sm:text-5xl lg:text-[68px] font-normal leading-tight mb-4 md:mb-5">
    Section Title
  </h2>
  <p className="text-text-gray font-outfit text-base md:text-lg lg:text-2xl leading-[33px] max-w-4xl">
    Supporting description text.
  </p>
</div>
```

### Dark Section (Navy Background)
Used for CTA and important sections:
- Background: `bg-navy`
- Text: `text-white` for headings, `text-white/75` or `text-white/80` for body
- Cards: `bg-white/[0.07] border border-white/10 rounded-lg p-8`
- Icon circles: `bg-white/10 rounded-full`
- Decorative SVG at 5% opacity

### Grid Patterns
| Content Type | Grid |
|-------------|------|
| 4-up cards | `grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5` |
| 3-up cards | `grid grid-cols-1 md:grid-cols-3 gap-4` |
| 6-up services | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14` |
| 2-column content | `grid grid-cols-1 lg:grid-cols-2 gap-12` |

---

## 5. Icons & Images

### Icon Style
- **Line/outline style**, not filled — thin strokes
- Placed in 70x70px circles with `bg-navy/10` background
- Icon size: 42x42px within circle
- Custom SVG for arrows and decorative elements
- Use `lucide-react` for utility icons (ArrowRight, ChevronDown, Menu, X)

### Image Treatment
- Use Next.js `<Image>` component where possible
- For hero: video with poster fallback
- Responsive: include width/height props, use `className` for sizing
- Stock images: self-hosted in `/public/images/`
- Association logos: grayscale or muted, displayed in horizontal row

### Arrow Icon (Used Everywhere)
```tsx
<svg width="9" height="9" viewBox="0 0 9 9" fill="none">
  <path d="M8.33333 0L0 8.33333M8.33333 0H0.833333M8.33333 0V7.5" 
        stroke="#003754" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
```
White version for dark backgrounds: change `stroke` to `white`.

---

## 6. Page Structure

### Interior Page Template
```
<Header />              ← Transparent, overlays hero
<PageHero />            ← Shorter than homepage, with navy/gradient bg or image
<main>
  <Section1 />          ← Alternating bg-white / bg-cloud-blue / bg-light-gray
  <Section2 />
  ...
</main>
<CTASection />          ← Navy bg, "Schedule a Consultation"
<Footer />              ← Navy bg, 5-column layout
```

### Interior Page Hero (NOT full-screen like homepage)
For About/Services pages, use a shorter hero:
- Height: `min-h-[400px] md:min-h-[500px]` (NOT full viewport)
- Background: navy gradient or dark overlay on image
- Centered text, similar typography to homepage hero but smaller
- Breadcrumb optional: `text-white/60 text-sm`

---

## 7. Footer (Shared)
The footer is a shared component across all pages. Do NOT recreate — import from `@/components/Footer`.

---

## 8. Responsive Breakpoints
| Breakpoint | Tailwind | Usage |
|-----------|----------|-------|
| Mobile | Default (< 640px) | Single column, compact spacing |
| Tablet | `sm:` (640px) | 2-column grids |
| Desktop | `md:` (768px) | Mid-size adjustments |
| Large | `lg:` (1024px) | Full layout, desktop nav |
| XL | `xl:` (1280px) | Max widths kick in |

### Mobile Rules
- All content stacks to single column
- Section padding reduces: `py-12` (from `py-28`)
- Font sizes scale down naturally
- Horizontal scrolling for card rows using `overflow-x-auto` + `snap-x`
- Touch targets minimum 44px

---

## 9. Animation & Transitions
- **Buttons:** `transition-colors`, `transition-opacity`, or `transition-all duration-200`
- **Hover states:** Subtle — opacity reduction (`hover:opacity-70`), background shift (`hover:bg-white/10`), or color change
- **No flashy animations** — the brand is professional, trustworthy, conservative
- **Modals:** Fade-in with slide-up (200ms ease-out)

---

## 10. Code Conventions

### Next.js Specific
- All interactive components: `"use client"` directive at top
- Use `<Image>` from `next/image` (not `<img>`) where appropriate
- Use `<Link>` from `next/link` for internal navigation
- API routes in `app/api/` directory

### ESLint Rules to Follow
- Apostrophes: Use `&apos;` not `'` in JSX text
- No `react-router-dom` — use `next/link`
- Prefer `<Image>` over `<img>` (add `eslint-disable` comment if `<img>` is necessary)

### File Structure
```
app/
  page.tsx              ← Homepage
  about/page.tsx        ← About page
  services/page.tsx     ← Services page (use "our-services" route if needed)
  layout.tsx            ← Root layout with fonts + providers
  globals.css           ← Tailwind imports
components/
  Header.tsx            ← Shared across all pages
  Footer.tsx            ← Shared across all pages
  CTASection.tsx        ← Shared CTA block
  ConsultationModal.tsx ← Global modal
  ConsultationModalProvider.tsx ← Context provider
  [SectionName].tsx     ← Page-specific sections
```

---

## 11. Consultation Modal Integration
All CTA buttons site-wide trigger the consultation modal:
```tsx
import { useConsultationModal } from "@/components/ConsultationModalProvider";
// ...
const { openModal } = useConsultationModal();
// ...
<button onClick={openModal}>Book a Consultation</button>
```

The modal is globally available via the provider in `layout.tsx`. No additional setup needed per page.

---

## 12. Image Placement Rules

### Cropping & Object Position
**CRITICAL:** Use `object-[center_25%]` with `object-cover` to keep heads/faces in frame.

```tsx
// ✅ CORRECT — crops at 25% from top, keeps faces visible
<Image src="..." fill className="object-cover object-[center_25%]" />

// ⚠️ object-top can show too much empty space above heads
// ⚠️ default center crop cuts off heads in wide containers
// object-[center_25%] is the sweet spot for people photos
```

### Container Sizing
Use the established fixed heights for consistent layout:

```tsx
// ✅ Full-width image break
<div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">

// ✅ Side-by-side image (in 2-col grid)
<div className="relative w-full h-[300px] lg:h-[380px] rounded-lg overflow-hidden">

// ✅ Hero/banner background
<div className="relative w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden">
```

### Image section spacing
Always add padding to image break sections so they don't butt against adjacent content:
```tsx
// ✅ py-4 minimum for image break sections
<section className="bg-cloud-blue py-4">
```

### Image Placement Pattern (Service Detail Pages)
Each service detail page gets **2 images**:
1. **Full-width image break** between major content sections — use `aspect-[16/9]` with `object-top`
2. **Side-by-side** (text left, image right in a grid) — use `aspect-[4/3]` with `object-top`

### Image Selection Metadata
When choosing which approved image to place on a page, consider:
- **Keywords** in image metadata — match to page topic
- **Alt text** — should describe the scene accurately for accessibility
- **Orientation** — landscape for full-width, portrait/square for side-by-side
- **Subject matter** — advisor meetings for service pages, lifestyle for aspirational sections, corporate for business pages
