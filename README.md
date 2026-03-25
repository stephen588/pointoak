# PointOak Retirement Advisors - Homepage

A pixel-perfect Next.js implementation of the PointOak Retirement Advisors homepage, built for TKX Media.

## 🚀 Project Overview

This is a fully responsive, production-ready homepage built with Next.js 14+ (App Router), Tailwind CSS, and TypeScript. The site features 15 distinct sections designed to showcase PointOak's wealth management services for high-net-worth individuals and families.

## 📋 Sections Implemented

All 15 sections from the design spec have been built:

1. **Navigation Bar** - Fixed header with logo, navigation links, and CTAs
2. **Hero Section** - Full-width background with dark overlay and centered content
3. **Stats Bar** - 5 key metrics displayed with icons
4. **Who We Serve** - Target audience description with life stage grid
5. **Why Clients Choose PointOak** - 4 value proposition cards
6. **Comprehensive Wealth (Services)** - 6 service cards in grid layout
7. **How Working With Us Works** - 3-step process visualization
8. **How PointOak Compares** - Comparison table on dark background
9. **Experience You Can Trust** - Team photos with stats grid
10. **Industry Associations** - Logo grid of professional organizations
11. **Personal Financial Advocate** - Feature highlights with image
12. **Client Testimonials** - 3 testimonial cards with ratings
13. **CTA Section** - Call-to-action with contact methods
14. **FAQ Section** - Tabbed accordion-style Q&A
15. **Footer** - Multi-column footer with links and contact info

## 🎨 Design System

### Typography
- **Primary Font**: Outfit (Google Fonts) - replaces "Grift" from original design
- **Secondary Font**: Poppins - for comparison table and process descriptions
- **Tertiary Font**: DM Sans - for FAQ content
- **Quaternary Font**: Plus Jakarta Sans - for FAQ headings

### Color Palette
- **Primary**: Navy (#003754), Dark Navy (#003245), Bright Blue (#00a7ef)
- **Neutrals**: White, Cream (#f5f3ef), various grays
- **Warm Accents**: Peach, salmon, gold (used in process section)

### Layout
- Container max-width: 1170px
- Section padding: 80-120px vertical
- Responsive breakpoints: mobile (375px), tablet (768px), desktop (1920px)

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4+
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Fonts**: Google Fonts (next/font)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

The development server runs at `http://localhost:3000`

## 📁 Project Structure

```
pointoak-site/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main homepage (imports all sections)
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Header.tsx          # Fixed navigation bar
│   ├── Hero.tsx            # Hero section with background image
│   ├── StatsBar.tsx        # 5-stat metrics bar
│   ├── WhoWeServe.tsx      # Target audience section
│   ├── WhyChooseUs.tsx     # 4 value proposition cards
│   ├── Services.tsx        # 6 service offerings
│   ├── HowItWorks.tsx      # 3-step process
│   ├── Comparison.tsx      # RIA vs Broker comparison table
│   ├── Experience.tsx      # Team photos and stats
│   ├── Associations.tsx    # Industry association logos
│   ├── Advocate.tsx        # Feature highlights
│   ├── Testimonials.tsx    # Client testimonials
│   ├── CTASection.tsx      # Main call-to-action
│   ├── FAQ.tsx             # Tabbed FAQ accordion
│   └── Footer.tsx          # Site footer
├── public/
│   └── images/             # All optimized images
├── tailwind.config.ts      # Tailwind configuration with design tokens
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Key Features

- **Responsive Design**: Desktop-first approach with mobile optimization
- **Performance**: Next.js Image optimization, static generation
- **Accessibility**: Semantic HTML, proper heading hierarchy
- **SEO Ready**: Meta tags, proper document structure
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Modular, reusable components
- **Interactive Elements**: Accordion FAQ, tabbed interface
- **Smooth Scrolling**: Anchor link navigation

## 🔧 Configuration

### Tailwind Config
The `tailwind.config.ts` includes all design tokens from the spec:
- Custom color palette (navy, bright-blue, cream, etc.)
- Font family variables
- Container max-widths
- Custom utilities

### Next.js Config
Basic Next.js configuration with image optimization enabled.

### Font Loading
All fonts are loaded via `next/font/google` with display swap for optimal performance.

## 📸 Images

All images are stored in `/public/images/` and include:
- Hero background (hero-bg.png)
- Team photos (img-778f.png, img-c0f8.png, etc.)
- Client photos (img-69e5.png)
- Association logos (img-4d43.png, img-f9de.png, etc.)
- Fiduciary badge (img-dfe7.png)
- PointOak logo/icon (img-e8fc.png)

## 🚢 Production Build

The site is production-ready with:
- Static page generation (SSG)
- Optimized bundle size (~104 KB First Load JS)
- Image optimization
- Font subsetting
- CSS purging

## 📝 Design Spec Compliance

This build closely follows the provided design specification (`DESIGN-SPEC.md`) with:
- Accurate typography (sizes, weights, line heights)
- Precise color values
- Proper spacing and layout
- All 15 sections implemented
- Responsive behavior
- Interactive components (FAQ accordion, tabbed interface)

## 🔄 Future Enhancements

Potential additions not in the initial spec:
- Animation/scroll effects
- Form functionality (contact, consultation booking)
- Blog/resources section
- Client portal login integration
- Analytics tracking
- A/B testing capabilities

## 📞 Contact

For questions or modifications, contact TKX Media development team.

---

**Built with ❤️ by TKX Media**
# Vercel-GitHub integration test
