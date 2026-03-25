# PointOak Homepage — Revision 1

## CRITICAL: Reference the Figma screenshot
The original Figma design screenshot is at: `/home/openclaw/.openclaw/workspace-site-orchestrator/projects/pointoak/homepage-full.png`
LOOK AT IT before making any changes. Every fix below should make the build match that image more closely.

## Standard: PIXEL-PERFECT
The goal is to match the Figma design as closely as possible. Every section should look like the design.

---

## Section-by-Section Fixes

### 1. HEADER / NAVIGATION
**Issues:**
- WRONG LOGO: Currently showing "NAPA National Association of Plan Advisors" logo. This is one of the association logos used in the wrong place.
- The PointOak logo should be the brand logo. Look at the Figma design top-left — it shows a geometric "P" shape with "POINTOAK" text. The actual logo image is `img-e8fc.png` (the PointOak branded element). If none of the downloaded images is the correct nav logo, use text "POINTOAK" styled to match.
- Logo should be white on transparent/dark background in nav

**Fix:**
- Replace NAPA logo with PointOak branding. Use text "POINTOAK" with proper styling if no vector logo available, or identify correct image from the assets.

### 2. HERO SECTION
**Issues:**
- Text is CENTER ALIGNED — should be LEFT ALIGNED per the Figma design
- Content should be positioned on the LEFT side of the hero, not centered
- The hero in Figma has content left-aligned with the left content margin
- Small decorative geometric/crosshatch element on the right side of the hero (visible in Figma) — subtle but adds polish

**Fix:**
- Change text alignment from `text-center` to `text-left`
- Position content on the left side with standard content margin
- Keep buttons left-aligned too
- Add subtle decorative element on right if possible

### 3. STATS BAR
**Issues:**
- Generally looks OK but spacing/sizing could be tighter
- In the Figma design, the stats bar appears to slightly overlap or sit right at the bottom of the hero with a slight offset

**Fix:**
- Fine-tune to overlap hero slightly with negative margin-top
- Ensure it's a white card with shadow

### 4. WHO WE SERVE
**Issues:**
- Layout is close but the Figma shows a more specific arrangement:
  - Left column: heading + descriptive text
  - Right column: the photo (img-69e5.png or img-072f.png) — the image of advisors at a table
  - Below the main content: an overlapping element at the bottom-left showing a smaller photo with text overlay "Serving clients ages 25-75..."
- The "Serving clients ages 25-75" banner should NOT be a full-width blue bar. In the Figma, it's an overlapping card/photo element in the bottom-left area
- The 4 life stages (Accumulation, Pre-Retirement, Active Retirement, Wealth Transition) should be in a 4-column row below

**Fix:**
- Restructure to match Figma layout: side-by-side with overlapping photo element
- Change the "Serving clients" from a full-width bar to an overlapping card in the photo area

### 5. WHY CLIENTS CHOOSE POINTOAK
**Issues:**
- Section looks generally OK
- Check that the 4 cards match the Figma styling — they should have the circular icon container, title, description, and "Learn More →" link
- In the Figma, the cards appear to have a light gray background (#f4f4f4)

**Fix:**
- Fine-tune card styling to match exactly

### 6. COMPREHENSIVE WEALTH (SERVICES)
**Issues:**
- Layout needs to match Figma more closely
- In the Figma, there's a large decorative "Comprehensive Wealth" text (65px) and a smaller heading above it
- The 6 service cards are arranged in a 3-column grid
- Right side of the header area has descriptive paragraph text

**Fix:**
- Match the dual heading treatment (small + large decorative text)
- Ensure grid layout matches 3x2

### 7. HOW IT WORKS (3-STEP PROCESS)
**Issues:**
- Missing the large PointOak "P" logo watermark that sits in the center/background of this section in the Figma design
- Missing the decorative hexagonal/geometric shapes
- The step numbers should be in warm peach/salmon colored circles
- Steps should have connecting lines between them
- In the Figma, there's a large semi-transparent PointOak logo (the hexagonal P shape from img-e8fc.png) sitting behind/between the steps

**Fix:**
- Add the PointOak "P" logo as a large, semi-transparent watermark behind the steps
- Ensure step number circles use the warm peach/salmon gradient colors (#d69478, #e69f81, #ffc3aa)
- Add connecting lines between steps
- Add decorative hexagonal elements

### 8. HOW POINTOAK COMPARES (COMPARISON TABLE)
**Issues:**
- Missing the large "FIDUCIARY" stamp/badge on the right side (img-dfe7.png)
- Table layout needs to match Figma more closely
- In the Figma, the table has specific column widths and row styling
- The dark navy background section looks generally right

**Fix:**
- Add the Fiduciary badge image (img-dfe7.png) positioned on the right side of the section, partially overlapping/extending
- Fine-tune table styling

### 9. EXPERIENCE YOU CAN TRUST
**Issues:**
- Major layout difference from Figma
- In the Figma: LEFT side has 3 overlapping team photos arranged dynamically (stacked/offset), RIGHT side has the stats grid and description
- Currently: photos appear to be small/missing and the layout is off
- The stats should show: $1.08B AUM, 50+ Years Combined, 3 Partners, Since 2017, Fee-Only Fiduciary
- Photos from: img-778f.png, img-940f.png, img-caca.png, img-c0f8.png

**Fix:**
- Completely redo this section layout
- LEFT: 3 team photos with overlapping/dynamic arrangement (like a collage)
- RIGHT: Stats grid (2x3 or similar) + description paragraph
- Use proper team photos

### 10. INDUSTRY ASSOCIATIONS
**Issues:**
- Association logos are showing as empty/blank white boxes — images not loading
- Should show: ASPPA (img-4d43.png), RPAG (img-f9de.png), and other association logos
- Should be 5 logos in a horizontal row

**Fix:**
- Fix image paths — ensure all association logo images are properly referenced
- Display as a clean horizontal row of logos
- Logo images: img-4d43.png, img-f9de.png, img-88d3.png, img-8a73.png, img-f666.png

### 11. PERSONAL FINANCIAL ADVOCATE
**Issues:**
- Layout needs adjustment to match Figma
- In Figma: LEFT side has heading + feature highlights with colored tags, RIGHT side has a photo with decorative hexagonal elements
- Feature tags should have the light blue/gray backgrounds

**Fix:**
- Match the two-column layout from Figma
- Add decorative hexagonal geometric elements around the photo
- Style feature tags properly

### 12. TESTIMONIALS
**Issues:**
- Generally looks OK but verify card styling matches Figma
- 3 testimonial cards with quotes, names, stars
- Should have a green "Schedule Your Consultation" button below

**Fix:**
- Fine-tune card styling
- Ensure CTA button is present and styled correctly

### 13. CTA SECTION
**Issues:**
- Missing decorative geometric elements that appear in the Figma design on the edges
- The Figma shows subtle angular/geometric line decorations on the sides of the dark blue CTA section

**Fix:**
- Add decorative elements
- Verify spacing and typography matches

### 14. FAQ SECTION  
**Issues:**
- MAJOR LAYOUT DIFFERENCE: In the Figma, the FAQ has a TWO-COLUMN layout:
  - LEFT column: category tabs listed vertically
  - RIGHT column: accordion questions
- Current build has: tabs horizontally on top, questions below in single column
- Figma also shows the tab labels are styled differently (active tab in navy, inactive in gray)

**Fix:**
- Change to two-column layout: vertical tab navigation on left, questions on right
- Style active/inactive tabs properly
- Match the Plus Jakarta Sans / DM Sans font usage

### 15. FOOTER
**Issues:**
- Footer looks generally OK
- Verify column layout and content matches
- The Figma shows 5 columns but the categories might be slightly different:
  Main Links | Corporate Retirement Plans | Resources | Utility/Legal | Get In Touch

**Fix:**
- Verify and adjust column content to match Figma exactly
- Ensure proper link text matches

---

## GLOBAL FIXES

### Images
- **FIX ALL BROKEN IMAGES** — several sections show blank/missing images (especially Associations)
- Verify every image path is correct and pointing to the right file in `/public/images/`
- The NAPA logo (img-4d43.png) should ONLY appear in the Industry Associations section, NOT as the site logo

### Logo
- The site logo should be PointOak branding, NOT the NAPA association logo
- Use img-e8fc.png or create text-based "POINTOAK" logo

### Typography
- Verify all font weights match the spec
- The large decorative headings (65-68px) should have a lighter weight (400) for elegance

### Decorative Elements
- The Figma design uses hexagonal/geometric shapes as decorative elements throughout
- These appear in: How It Works, Personal Financial Advocate, CTA section, and other areas
- Add these for visual polish

---

## Priority Order
Fix in this order (highest visual impact first):
1. Logo (wrong logo everywhere)
2. Hero text alignment (center → left)
3. FAQ layout (horizontal tabs → vertical two-column)
4. Experience section (complete redo)
5. Association logos (broken images)
6. Who We Serve (overlapping photo element)
7. How It Works (add watermark + decorative elements)
8. Comparison (add fiduciary badge)
9. All other section fine-tuning
