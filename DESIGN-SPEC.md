# PointOak Homepage — Design Specification

## Project Overview
Recreate the PointOak Retirement Advisors homepage pixel-perfect in Next.js (App Router). This is a wealth advisory firm based in McLean, VA.

## Typography

### Font Replacement
The original uses "Grift" (not on Google Fonts). Use **Outfit** from Google Fonts as the replacement — it's the closest geometric sans-serif match.

- **Primary (replaces Grift):** Outfit — headings, body text, navigation, buttons
- **Secondary (replaces Poppins):** Keep Poppins from Google Fonts — used in comparison table and process descriptions
- **Tertiary (replaces DM Sans):** Keep DM Sans from Google Fonts — used in FAQ section
- **Quaternary (replaces Plus Jakarta Sans):** Keep Plus Jakarta Sans from Google Fonts — used in FAQ headings

### Type Scale
| Usage | Font | Size | Weight | Color |
|-------|------|------|--------|-------|
| Nav links | Outfit | 16px | 400 | #ffffff |
| Nav CTA | Outfit | 16px | 500 | #ffffff |
| Nav Services | Outfit | 16px | 700 | #ffffff |
| Hero subtitle | Outfit | 24px | 400 | #f5f3ef |
| Hero heading | Outfit | 48px | 700 | #f5f3ef |
| Hero description | Outfit | 18px | 400 | #c2c2c2 |
| Button text | Outfit | 16px | 500 | varies |
| Stats number | Outfit | 20px | 700 | #003754 |
| Stats label | Outfit | 10px | 500 | #6f6f6f |
| Section heading large | Outfit | 68px | 400 | #003754 |
| Section heading medium | Outfit | 32px | 400 | #003754 |
| Section subheading | Outfit | 24px | 400 | #6f6f6f |
| Body text | Outfit | 16px | 400 | #6f6f6f |
| Card title | Outfit | 18px | 500-700 | #003754 |
| Card body | Outfit | 16px | 400 | #6f6f6f |
| Service title | Outfit | 32px | 400 | #003754 |
| Service body | Outfit | 18px | 400 | #003754 |
| Link/CTA small | Outfit | 14px | 500 | #003754 |
| Feature heading (large) | Outfit | 65px | 400 | #003754 |
| Comparison table header | Outfit | 20px | 600 | #ffffff |
| Comparison table body | Poppins | 13-14px | 400-700 | #ececec |
| Process description | Poppins | 16px | 400 | #6f6f6f |
| FAQ heading | Plus Jakarta Sans | 56px | 700 | #003245 |
| FAQ question | Plus Jakarta Sans | 24px | 600 | #003245 |
| FAQ body | DM Sans | 16px | 400 | #4d4d4d |
| FAQ tab | DM Sans | 18px | 500-600 | #003245 or #b2b2b2 |

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Navy | #003754 | Primary text, headings, icons |
| Dark Navy | #003245 | FAQ headings |
| Deep Navy | #1a2e4a | Dark backgrounds |
| Bright Blue | #00a7ef | Accent, highlights |
| Medium Blue | #016ba4 | Secondary blue |
| Light Blue | #7db7d8 | Soft accents |
| Pale Blue | #a6cfe7 | Very light accents |
| Ice Blue | #bfebff | Light backgrounds |
| Lightest Blue | #e3f6ff | Very light bg |
| Cloud Blue | #edf4ff | Section backgrounds |

### Neutral Colors
| Name | Hex | Usage |
|------|-----|-------|
| White | #ffffff | Primary backgrounds |
| Off-white | #fcfcfc | CTA section bg |
| Cream | #f5f3ef | Hero text, warm bg |
| Light Gray | #f3f4f6 | Card backgrounds |
| Lighter Gray | #f4f4f4 | Section backgrounds |
| Border Gray | #d1d5db | Subtle borders |
| Mid Gray | #b2b2b2 | Inactive tabs |
| Text Gray | #6f6f6f | Body text |
| Dark Gray | #4d4d4d | FAQ body text |

### Warm Accent Colors (used in process/decorative elements)
| Name | Hex |
|------|-----|
| Rust | #c3553c |
| Salmon | #d69478 |
| Peach | #e69f81 |
| Light Peach | #f0b8a0 |
| Cream Peach | #f7ceb0 |
| Light Cream | #fbe0c7 |
| Apricot | #ffc3aa |
| Gold | #ffd19c |
| Yellow | #fff0be |

## Layout

### Container
- Max width: 1920px (full viewport)
- Content max width: ~1170px (centered)
- Page background: #ffffff

### Spacing
- Section padding: 80-120px vertical
- Content gaps: 24-48px between elements
- Card padding: 24-32px

## Sections (in order, top to bottom)

### 1. Navigation Bar
- Fixed/sticky top, transparent over hero
- Left: PointOak logo (white, SVG vector — see images)
- Center: About us | Our Services (bold) | Resources | FAQ | Contact
- Right: "Book a Consultation" button, "Log In" link
- Font: Outfit 16px, white text
- Logo is at Y:0-72, appears to be a stylized geometric "P" shape

### 2. Hero Section (height: ~944px)
- Full-width background image (hero-bg.png — 1920x1080, city buildings at night)
- Dark overlay: black at 80% opacity with progressive blur effect
- Gradient overlay: linear gradient from transparent to dark
- Content centered:
  - Subtitle: "Analyze - Optimize - Maximize" (24px, #f5f3ef)
  - Heading: "Simplifying Wealth. Amplifying Outcomes." (48px bold, #f5f3ef)
  - Description paragraph (18px, #c2c2c2)
  - Two CTAs:
    - "Schedule a Consultation" — outlined/transparent with arrow icon, text #003754 on light bg
    - "Learn About Our Process" — filled dark, text #efefef
- CTAs have rounded corners (~22px border-radius based on 43px height)

### 3. Stats Bar
- Positioned below hero, possibly overlapping
- 5 stats in a row: "$1.08B" / "3 Partners" / "Fee-Only" / "SEC-RIA" / "Since 2017"
- Each has: icon above, large number (20px bold, #003754), small label below (10px, #6f6f6f)
- Background: white with subtle shadow/border
- Horizontal dividers between items

### 4. Who We Serve Section
- Background: white
- Heading: "We Serve High-Net-Worth Individuals and Families" (32px, #003754)
- Left side: descriptive text about target clients
- Right side: photo of advisors at table (img-69e5.png — couple working on tablets)
- Below: 4 life stage columns in 2x2 grid:
  - Accumulation | Pre-Retirement | Active Retirement | Wealth Transition
  - Each has: icon, title (18px bold, #003754), description (10px, #6f6f6f)
- Overlapping photo element with text: "Serving clients ages 25-75 across DC/MD/VA metro and nationwide"

### 5. Why Clients Choose PointOak
- Background: white
- Heading: "Why Clients Choose PointOak" (68px, #003754)
- Subheading paragraph (24px, #6f6f6f)
- 4 cards in a row (each ~416x254px):
  - Independent & Unbiased
  - White-Glove, Personal Service
  - Deep Retirement Expertise
  - Sophisticated Planning, Simply Explained
- Each card has: icon (70x70 circle with icon inside), title, description, "Learn More →" link
- Cards have subtle background (#f4f4f4 or similar)

### 6. Comprehensive Wealth (Services)
- Two-part section
- Top row: heading "Comprehensive Wealth" (shown twice — once at 32px, once at 65px as large decorative text)
- Subheading paragraph
- 6 service cards in 2 rows of 3:
  Row 1: Retirement Income Planning | Investment Management | Tax-Efficient Wealth Strategies
  Row 2: 401(k) Rollover & Workplace Benefit Optimization | Social Security & Pension Optimization | Comprehensive Financial Planning
- Each card: title (32px), description (18px), "Learn More →" link
- Cards have clean layout, no heavy borders

### 7. How Working With Us Works (3-Step Process)
- Left side: heading "How Working" (32px) + "With Us Works" (65px large)
- Description paragraph
- Right side / below: 3 steps in a connected flow:
  1. Understand — description of initial meeting
  2. Design — customized strategy development
  3. Implement & Monitor — ongoing management
- Visual: Steps connected by lines, possibly with PointOak logo/icon in center
- Uses warm peach/salmon color gradient decorative elements
- Step descriptions use Poppins 16px

### 8. How PointOak Compares
- Dark navy background (#003754 or similar dark blue)
- Heading: "Why Independent Matters:" (32px, white) + "How PointOak Compares" (65px, white)
- Description paragraph (18px, #ececec)
- Comparison table with 3 columns:
  - Independent RIA (PointOak) | Independent Broker/Dealer | Wirehouse Firms
- Rows: Duty of Care, Product Selection, Conflicts of Interest, Service Model, Accountability
- Table uses Poppins for content
- Green checkmarks or highlights for PointOak column
- Right side: "Fiduciary" stamp image (img-dfe7.png)

### 9. Experience You Can Trust
- Split layout
- Left: team photo(s) — advisor images
- Right: stats block:
  - $1.08 Billion AUM | 50+ Years Experience
  - 3 Partners | Since 2017 | Fee-Only Fiduciary
  - Description paragraph about PointOak's history
- Photos have overlapping/stacked arrangement

### 10. Industry Associations
- Clean white section
- "Industry Associations" heading (48px, #003754)
- Logo grid:
  - ASPPA (img-4d43.png)
  - RPAG (img-f9de.png)
  - Other association logos (img-88d3, img-8a73, img-f666, etc.)
- Logos displayed in a horizontal row, possibly with subtle background cards

### 11. Personal Financial Advocate
- Left: descriptive content with feature highlights
  - "White-Glove Service" — "Personalized attention you deserve"
  - "Proactive Guidance" — "We anticipate your needs"
  - "Direct Partner Access" — "Work directly with decision-makers"
- Right: photo/visual element
- Feature tags have colored backgrounds (#f3f4f6)

### 12. Client Testimonials
- "What Our Clients Say" (68px, #003754)
- 3 testimonial cards:
  1. Jennifer M. — Business Owner, McLean VA (401k rollover experience)
  2. Michael & Sarah T. — Pre-Retirees, Bethesda MD (fee transparency)
  3. Robert K. — Federal Employee, Arlington VA (accessibility)
- Cards with quotes, client name, title/location
- Rating stars
- "Schedule Your Consultation" CTA button

### 13. CTA Section
- Full-width dark blue background (gradient)
- "Ready to Simplify Your Financial Life?" (68px, #fcfcfc)
- Description paragraph (24px, #fcfcfc)
- "Schedule Your Consultation" button
- Below: 3 contact methods:
  - Call Us: (703) 595-4444
  - Email Us: info@pointoak.com
  - Visit: 1751 Pinnacle Drive, Suite 600 McLean, VA 22102
- "What to Expect" section with process description

### 14. FAQ Section
- "Frequently Asked Questions" (56px, Plus Jakarta Sans, bold, #003245)
- Tab navigation: Before First Meeting | Fees & Structure | Process & Service | Credentials & Compliance | 401(k) Rollover Specific
- Accordion-style Q&A:
  - What is your minimum investment requirement?
  - Is there any cost for the initial consultation?
  - What should I prepare before our first conversation?
  - Can I bring my spouse or partner?
  - How long does the initial consultation take?
- Uses DM Sans for answers, Plus Jakarta Sans for questions

### 15. Footer
- Dark navy background
- 5 columns:
  - Main Links: About Us, etc.
  - Corporate Retirement Plans: services list
  - Resources: guides and articles
  - Utility: Privacy Policy, Sitemap, etc.
  - Get In Touch: Address, Phone, Email
- Bottom: "Important Disclosures" link
- Copyright: "© 2026 PointOak Retirement Advisors, LLC. All Rights Reserved."
- Social media icons (Font Awesome)

## Images
All images are in: `/home/openclaw/.openclaw/workspace-site-orchestrator/projects/pointoak/images/`

| File | Description | Used In |
|------|-------------|---------|
| hero-bg.png | City buildings at night, 1920x1080 | Hero background |
| img-072f.png | Advisors at table (square crop) | Who We Serve or team |
| img-69e5.png | Advisors at table (large) | Who We Serve section |
| img-4d43.png | ASPPA logo | Industry Associations |
| img-f9de.png | RPAG logo | Industry Associations |
| img-dfe7.png | Fiduciary stamp (green) | Comparison section |
| img-88d3.png | Association logo (wide) | Industry Associations |
| img-8a73.png | Association logo | Industry Associations |
| img-f666.png | Association logo | Industry Associations |
| img-778f.png | Team/advisor photo | Experience section |
| img-940f.png | Team/advisor photo | Experience section |
| img-caca.png | Team/advisor photo | Experience section |
| img-a355.png | Photo/visual | Testimonials or advocate section |
| img-c0f8.png | Large photo | Experience/team section |
| img-e8fc.png | PointOak logo/icon | Process section, branding |
| img-18a1.png | Background pattern/texture | Decorative |
| img-e02b.png | Visual element | TBD |
| img-e0de.png | Visual element | TBD |

## Technical Requirements
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Outfit, Poppins, DM Sans, Plus Jakarta Sans)
- **Icons:** Lucide React or heroicons (for arrows, icons in cards)
- **Images:** Next.js Image component with proper optimization
- **Responsive:** Desktop-first (1920px), then tablet (768px), mobile (375px)
- **Animations:** Subtle scroll-triggered fade-ins (optional for first pass)

## File Structure
```
pointoak-site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── fonts.ts
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── StatsBar.tsx
│   ├── WhoWeServe.tsx
│   ├── WhyChooseUs.tsx
│   ├── Services.tsx
│   ├── HowItWorks.tsx
│   ├── Comparison.tsx
│   ├── Experience.tsx
│   ├── Associations.tsx
│   ├── Advocate.tsx
│   ├── Testimonials.tsx
│   ├── CTASection.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── public/
│   └── images/
│       └── (all downloaded images)
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

## Priority
Build sections in this order (most visually impactful first):
1. Layout + Header + Hero (sets the visual foundation)
2. StatsBar + WhyChooseUs (key messaging)
3. Services + WhoWeServe (content-heavy)
4. Comparison + HowItWorks (complex layouts)
5. Experience + Associations + Advocate (supporting)
6. Testimonials + CTA + FAQ + Footer (closing sections)
