# PointOak Homepage — Revision 2

## Reference
- Figma design: `/home/openclaw/.openclaw/workspace-site-orchestrator/projects/pointoak/homepage-full.png`
- Current build (after R1): `/home/openclaw/.openclaw/workspace-site-orchestrator/projects/pointoak/revised-screenshot-full.png`
- Section screenshots in: `projects/pointoak/screenshots-r1/`

## REMAINING ISSUES — Must Fix

### 1. EXPERIENCE SECTION — BROKEN IMAGES (CRITICAL)
The team photos in the Experience section are rendering as large colored blocks with letters (A, G) — NOT as actual photos. This is a Next.js Image component fallback behavior when images fail to load.

**Root cause:** The image paths are likely wrong or the images aren't in the right location.

**Fix:**
- Check what images the Experience component is referencing
- The team/advisor photos should be: img-778f.png, img-940f.png, img-caca.png, img-c0f8.png
- Verify these files exist in `/public/images/` and the src paths match
- Test that the images actually render in the browser

### 2. ASSOCIATIONS — DUPLICATE LOGOS
Currently showing: ASPPA, RPAG, TiE, TiE, ASPPA (duplicates!)
Should show 5 DISTINCT association logos.

**Available logo images:**
- img-4d43.png (ASPPA)
- img-f9de.png (RPAG)
- img-88d3.png 
- img-8a73.png
- img-f666.png

**Fix:**
- Use each of the 5 images exactly once
- Display in a single horizontal row
- No duplicates

### 3. HOW IT WORKS — WATERMARK TEXT
The large watermark text in the background of the How It Works section appears to say "NAPA" in places. It should reference PointOak branding only.

**Fix:**
- Ensure all watermark/background text references PointOak, not NAPA
- The watermark should be the PointOak "P" logo or "PointOak Retirement Advisors" text, very light/semi-transparent

### 4. IMAGE AUDIT
Go through EVERY component and verify:
- Each image src points to an existing file in /public/images/
- No image is used in the wrong place
- The correct images are used for each section:
  - Hero: hero-bg.png (city at night)
  - Who We Serve: img-69e5.png (advisors at table) and img-072f.png (smaller advisor photo)
  - Experience: img-778f.png, img-940f.png, img-caca.png, img-c0f8.png (team photos)
  - Associations: img-4d43.png, img-f9de.png, img-88d3.png, img-8a73.png, img-f666.png
  - Comparison: img-dfe7.png (fiduciary badge)
  - How It Works: img-e8fc.png (PointOak logo/icon for watermark)
  - Advocate: appropriate photo

**List all images in /public/images/ and map each one to where it's used in the components.**

### 5. LOGO IN NAV
The nav shows a gray rectangle next to "POINTOAK" text. If img-e8fc.png is the logo, use it properly. If it's not rendering, fix the path. If the image doesn't work as a small nav logo, just use clean text "POINTOAK" without the broken image placeholder.

## Priority
1. Fix Experience section photos (most visually broken)
2. Fix Association duplicates  
3. Fix nav logo placeholder
4. Image audit across all sections
5. How It Works watermark text
