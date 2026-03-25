# PointOak About Page — Design & Build Spec

## Overview
Build an About page (`/about`) for the PointOak Retirement Advisors Next.js site. Must match the existing homepage's design language exactly — same fonts (Outfit), colors (navy/cream/gold palette from tailwind.config.ts), spacing patterns, and component styles.

## Design Language Reference (from homepage)
- **Typography:** Outfit font. Section headings: `text-5xl md:text-[68px] font-normal text-navy`. Body: `text-base text-text-gray leading-relaxed`
- **Section padding:** Uses `section-padding` utility class
- **Container:** Uses `container-custom` utility class  
- **Color palette:** navy (#003754), cream (#f5f3ef), cloud-blue (#edf4ff), text-gray (#6f6f6f), bright-blue (#00a7ef)
- **Section backgrounds alternate:** white → light gray → white → navy gradient → white etc.
- **Cards:** `bg-lighter-gray rounded-lg p-8` or `bg-cloud-blue rounded-lg p-6`
- **CTAs:** Rounded full buttons, gradient backgrounds, consistent hover states
- **Icons:** lucide-react icons in circular containers

---

## Page Structure (Section by Section)

### 1. Header (reuse existing)
Import and use the existing `<Header />` component.

### 2. About Hero
**Background:** Same treatment as homepage hero — full-width dark background with overlay. Use a professional office/conference room stock image or a subtle gradient from navy to deep-navy if no image available.
**Layout:** Content at bottom-left like homepage hero, but slightly shorter (`min-h-[70vh]` instead of full screen).
**Content:**
- Italic tagline: *"Retirement Plan Specialists"*
- Main heading: "Your Retirement Plan Deserves More Than a Generalist"
- Subtle divider line (matching homepage hero)
- Subtext: "PointOak Retirement Advisors has dedicated our entire practice to one thing: helping plan sponsors build better retirement outcomes for their company and employees."
- Single CTA: "Schedule a Consultation" (outlined button style)

### 3. Retirement Plan Specialists (Story Section)
**Background:** White
**Layout:** Two-column on desktop. Left: text content. Right: large stat callouts.
**Left column content:**
- Section label (small caps or subtle): "OUR STORY"
- Heading: "Retirement Plan Specialists from Day One"
- Body paragraphs (the content about starting from day one, not pivoting, deep focus)
**Right column — 3 stat cards stacked vertically:**
- `90%+` / "Revenue from Corporate Retirement Plans"
- `$120B+` / "Retirement Plan Assets Evaluated Quarterly"  
- `10,000+` / "Benchmarks Performed Per Year"
**Card style:** `bg-cloud-blue rounded-lg p-6` with large bold number + small description (matching homepage Experience section stats)

### 4. What Drives Us (Mission + Approach)
**Background:** `bg-cream` (#f5f3ef) — warm neutral
**Layout:** Centered content, max-width
**Content:**
- Heading: "What Drives Us"
- Mission statement in a larger/emphasized callout box: styled as a blockquote with left border in bright-blue
  - "To help plan sponsors achieve successful retirement plan outcomes..."
- Subheading: "Our Approach: Analyze. Optimize. Implement."
- Three-column cards for the approach steps:
  1. **Analyze** — icon: Search/BarChart3 — brief description
  2. **Optimize** — icon: Settings/Sliders — brief description  
  3. **Implement** — icon: CheckCircle/Rocket — brief description
**Card style:** White cards on cream background, with icon in navy circular container

### 5. Why Plan Sponsors Choose PointOak (5 Value Props)
**Background:** White
**Layout:** Heading centered, then alternating left-right rows (like a features section). Each value prop gets a row with icon+heading on one side, description on the other. Alternate which side has the icon.
**OR** — simpler approach: 2-column grid of cards (similar to homepage WhyChooseUs but 2-col instead of 4-col since content is longer)
**Value props:**
1. **Independence You Can Trust** — icon: Shield
2. **Named Fiduciary Protection** — icon: FileCheck/ShieldCheck
3. **Benchmarking That Goes Deeper** — icon: BarChart3/TrendingUp
4. **Investment Analysis Built for Retirement Plans** — icon: PieChart/Target
5. **A Process That Protects You** — icon: Lock/FileText
**Each card:** Icon in circular navy container, heading in navy bold, description in text-gray. Use the full content from the doc.

### 6. Our Leadership
**Background:** Navy gradient (same as homepage CTA section: `bg-gradient-to-br from-navy to-deep-navy text-white`)
**Layout:** Two columns. Left: placeholder for leader photo (use a professional placeholder or gradient card). Right: text.
**Content:**
- Section label: "OUR LEADERSHIP"
- Heading: "Led by Expertise"
- Leader: Darsh Makim, CRPC, AIF
- Bio paragraph
- Second paragraph about working directly with experienced advisors
**Style:** White text on navy, matching CTA section aesthetic

### 7. PointOak Difference at a Glance (Table)
**Background:** White
**Layout:** Centered heading + responsive table/grid
**Content:** The comparison table from the doc
**Style:** NOT a plain HTML table. Use styled rows with alternating backgrounds:
- Each row: left cell "What Matters" (bold navy) | right cell "What We Deliver" (text-gray)
- Header row: `bg-navy text-white rounded-t-lg`
- Alternating: white / `bg-cloud-blue`
- Rounded corners, clean borders

### 8. Who We Serve
**Background:** `bg-lighter-gray`
**Layout:** Centered text + icon grid
**Content:**
- Heading: "Who We Serve"
- Body text about plan sponsors across the US
- Grid of 5-6 audience icons: Business Owners, CFOs, HR Directors, Benefits Administrators, Investment Committee Members
- Each: icon in circle + label below
- Location callout: "From our office in McLean, Virginia, we serve clients nationwide"

### 9. CTA Section
**Reuse the existing `<CTASection />` component** but with About-specific heading:
Actually — just reuse the existing CTA component as-is. It already has the right contact info and style.

### 10. Footer
**Reuse existing `<Footer />` component.**
Add the legal disclaimer text from the doc as a small-text section above or within the footer.

---

## Technical Requirements
- Create `/app/about/page.tsx` 
- Create new components in `/components/about/` directory to keep organized
- Reuse `<Header />`, `<Footer />`, and `<CTASection />` from existing components
- All new components must be properly typed TypeScript
- Use existing Tailwind config colors — do NOT add new colors
- Use lucide-react for all icons (already installed)
- Responsive: mobile-first, works at all breakpoints
- Use Next.js Image component where applicable
- Build must pass: `NODE_OPTIONS='--max-old-space-size=2048' npm run build`
