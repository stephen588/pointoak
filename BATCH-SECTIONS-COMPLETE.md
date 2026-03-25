# Batch Sections Update - Complete ✅

**Date:** 2026-02-26  
**Task:** Replace 6 homepage sections with Builder.io Fusion exports + FAQ content  
**Status:** Complete — Build passed with no errors

---

## Components Updated

### 1. ✅ Experience.tsx (← StatsSection)
**Location:** `/components/Experience.tsx`

**Changes:**
- Replaced Builder.io image URLs with local paths from `/public/images/`:
  - `icon-stats-aum.png`
  - `icon-stats-experience.png`
  - `icon-stats-since2017.png`
  - `experience-team.jpg`
- Converted `<img>` tags to Next.js `<Image>` components
- Applied Tailwind class mappings:
  - `font-brand` → `font-outfit`
  - `font-body` → `font-poppins`
  - `text-brand-dark` → `text-navy`
  - `text-brand-gray` → `text-text-gray`
- Kept fiduciary SVG icon inline
- Fixed ESLint issues (added `alt` attributes, proper image sizing)

---

### 2. ✅ Advocate.tsx (← AdvocateSection)
**Location:** `/components/Advocate.tsx`

**Changes:**
- Converted `react-router-dom` Link → Next.js `next/link`
- Changed `/about` link to use `href` instead of `to`
- Applied Tailwind class mappings:
  - `bg-brand-blue-light` → `bg-cloud-blue`
  - `text-brand-dark` → `text-navy`
  - `text-brand-gray` → `text-text-gray`
  - `font-brand` → `font-outfit`
  - `font-body` → `font-poppins`
- Replaced all `'` with `&apos;` in JSX text
- Kept hexagon SVG graphic inline with all styling

---

### 3. ✅ Associations.tsx (← IndustrySection)
**Location:** `/components/Associations.tsx`

**Changes:**
- Replaced Builder.io image URLs with local paths:
  - `assoc-logo-1.png` through `assoc-logo-6.png`
- Converted `<img>` tags to Next.js `<Image>` components
- Kept SHRM SVG inline (logo 4)
- Applied Tailwind class mappings:
  - `text-brand-dark` → `text-navy`
  - `bg-brand-blue-muted` → inline `bg-[#BDD8FF]`
  - `font-brand` → `font-outfit`
- Static grid implementation (animation to be added later per PM note)

---

### 4. ✅ CTASection.tsx (← CTASection)
**Location:** `/components/CTASection.tsx`

**Changes:**
- Applied Tailwind class mappings:
  - `bg-brand-dark` → `bg-navy`
  - `font-brand` → `font-outfit`
- Replaced all `'` with `&apos;` in JSX text
- Kept all SVG icons inline (hexagon decoration, contact icons)
- No changes to contact info structure

---

### 5. ✅ FAQ.tsx (← FAQSection with Margaret's content)
**Location:** `/components/FAQ.tsx`

**Changes:**
- Added `"use client"` directive (uses useState)
- **Replaced placeholder FAQ content with Margaret's real Q&A** from `margaret-faq-content.md`
- 5 categories with proper question/answer mapping:
  1. Before First Meeting (5 Q&A)
  2. Fees & Structure (3 Q&A)
  3. Process & Service (4 Q&A)
  4. Credentials & Compliance (2 Q&A)
  5. 401(k) Rollover Specific (3 Q&A)
- Applied Tailwind class mappings:
  - `text-brand-dark` → `text-navy`
  - `border-[#08B0EF]` → `border-bright-blue`
  - `text-brand-light` → `text-mid-gray`
  - `font-body` → `font-poppins`
- Replaced all `'` with `&apos;` in JSX text
- Kept tabbed sidebar + accordion layout from Fusion export

---

### 6. ✅ Footer.tsx (← Footer)
**Location:** `/components/Footer.tsx`

**Changes:**
- Converted ALL `react-router-dom` Link → Next.js `next/link`
- Changed all `to` props → `href` props
- Applied Tailwind class mappings:
  - `bg-brand-dark` → `bg-navy`
  - `bg-brand-blue` → `bg-medium-blue`
  - `text-brand-light` → `text-mid-gray`
  - `font-brand` → `font-outfit`
- Replaced all `'` with `&apos;` in JSX text
- Kept all SVG icons inline (location, phone, email, LinkedIn)
- No changes to disclosure text or structure

---

## Tailwind Class Mappings Applied

All components received consistent class name updates:

| Fusion Export Class | PointOak Config Class |
|---------------------|----------------------|
| `text-brand-dark` / `bg-brand-dark` | `text-navy` / `bg-navy` |
| `text-brand-blue` / `bg-brand-blue` | `text-medium-blue` / `bg-medium-blue` |
| `text-brand-accent` | `text-bright-blue` |
| `bg-brand-blue-light` | `bg-cloud-blue` |
| `bg-brand-blue-muted` | `bg-[#BDD8FF]` (inline) |
| `text-brand-gray` | `text-text-gray` |
| `text-brand-light` | `text-mid-gray` |
| `bg-brand-mid` | `bg-[#48586E]` (inline) |
| `font-brand` | `font-outfit` |
| `font-body` | `font-poppins` |
| `border-brand-dark` | `border-navy` |
| `border-[#08B0EF]` | `border-bright-blue` |

---

## ESLint Fixes Applied

- ✅ All `'` replaced with `&apos;` in JSX text
- ✅ All `"` replaced with `&quot;` where needed
- ✅ `<img>` tags converted to Next.js `<Image>` components
- ✅ Added `"use client"` to FAQ.tsx (uses useState)
- ✅ All Next.js Image components have proper width/height attributes

---

## Images Used

All images located in `/public/images/`:

**Stats section:**
- `icon-stats-aum.png`
- `icon-stats-experience.png`
- `icon-stats-since2017.png`
- `experience-team.jpg`

**Associations:**
- `assoc-logo-1.png`
- `assoc-logo-2.png`
- `assoc-logo-3.png`
- (SHRM is inline SVG)
- `assoc-logo-5.png`
- `assoc-logo-6.png`

---

## Build Results

```
✓ Compiled successfully
✓ Generating static pages (5/5)

Route (app)                              Size     First Load JS
┌ ○ /                                    7.27 kB         108 kB
├ ○ /_not-found                          873 B          88.1 kB
└ ○ /about                               1.09 kB         102 kB
```

**Status:** Build passed with no errors or warnings.

---

## Notes

- The existing page layout in `app/page.tsx` was NOT changed — component names remain the same
- `Comparison` and `Testimonials` sections left unchanged as requested
- Industry Associations implemented as static grid — animation to be added later per PM
- FAQ content is production-ready with Margaret's approved Q&A
- All SVG icons kept inline for optimal performance
- No external dependencies added

---

## Next Steps (if needed)

1. ✅ Build verification — **DONE**
2. 🔄 Visual QA on dev server (port 3002)
3. 🔄 Add logo carousel animation to Associations.tsx (future task)
4. 🔄 Collect additional association logos from PM

---

**Completed by:** site-developer subagent  
**Verified:** npm run build passed ✅
