# Content Update Task Instructions

## Your Job
You are updating PointOak website pages with new content from Surfer SEO. Each page has a JSON file in `surfer-content/` containing HTML content that needs to be mapped into the existing Next.js page structure.

## Content Format
The Surfer content is HTML with this structure:
1. **Technical SEO Settings** (between `<hr>` tags at top) — extract meta title, meta description
2. **H1** — main page heading
3. **Intro paragraph + bullet points** — hero subtitle / highlights
4. **H2 sections** — each is a major section with H3 subsections, paragraphs, lists, tables
5. **FAQ section** (usually last H2) — H3 = question, following `<p>` = answer
6. **About PointOak section** — standard boilerplate, keep if present
7. **Tables** — convert to styled comparison tables

## How to Update Each Page

### Step 1: Read the content file
Read `surfer-content/{filename}.json` — the `content` field has the HTML.

### Step 2: Read the existing page
Read `app/{path}/page.tsx` to understand the current structure.

### Step 3: Map content to page structure

**For metadata:**
- Update `title` from the "Meta title" in SEO settings
- Update `description` from the "Meta description" in SEO settings
- Keep the existing `alternates.canonical` URL

**For hero/intro:**
- H1 → PageHero title (or hero section heading)
- First paragraph after H1 → hero subtitle/description
- First bullet list after H1 → highlights array

**For body sections:**
- Each H2 → new section
- H3s under H2 → subsections (cards, accordion items, or sub-headings)
- Keep existing section styling patterns (bg colors, card layouts, etc.)
- If the content has more sections than the current page, CREATE new sections following the design patterns
- If content has fewer sections, remove the unused ones

**For tables:**
- Convert HTML tables to styled comparison tables using the existing table patterns
- Use alternating row colors, proper headers

**For FAQs:**
- Map to the existing `ServiceDetailFAQ` component format
- Each H3 → question, following paragraphs → answer

**For links:**
- Convert `<a>` tags with pointoak.com URLs to Next.js `<Link>` components
- External links stay as `<a>` with target="_blank" rel="noopener noreferrer"

### Step 4: Write the updated page
Write the complete updated page.tsx file. Keep:
- All existing imports
- Component structure and styling patterns
- AnimateOnScroll wrappers
- Header, PageHero, CTASection, Footer components
- The existing design language (colors: navy, cloud-blue, medium-blue, warm-gold; fonts: font-outfit)

## Design Patterns Reference

### Section backgrounds (alternate these):
- `bg-white` or `bg-[#F5F3EF]` (cream)
- `bg-cloud-blue` (#EDF5FA)  
- `bg-navy` (#003754) with white text

### Card patterns:
```tsx
<div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
  <h3 className="font-outfit text-navy text-xl font-semibold mb-3">Title</h3>
  <p className="text-gray-600 leading-relaxed">Content</p>
</div>
```

### Highlight/stat boxes:
```tsx
<div className="bg-navy text-white rounded-lg p-6 text-center">
  <div className="text-3xl font-bold text-warm-gold mb-2">Stat</div>
  <p className="text-sm text-gray-300">Label</p>
</div>
```

### Process steps:
```tsx
<div className="flex items-start gap-4">
  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold">1</div>
  <div>
    <h3 className="font-outfit text-navy text-lg font-semibold mb-2">Step Title</h3>
    <p className="text-gray-600">Description</p>
  </div>
</div>
```

### Table pattern:
```tsx
<div className="overflow-x-auto">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-navy text-white">
        <th className="px-4 py-3 text-left font-outfit font-semibold">Header</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-100 even:bg-gray-50">
        <td className="px-4 py-3 text-gray-700">Cell</td>
      </tr>
    </tbody>
  </table>
</div>
```

## IMPORTANT RULES
1. NEVER change the file path or create new files — only update existing page.tsx files
2. Keep the same import structure 
3. Keep Footer component (was recently added as a fix)
4. Keep AnimateOnScroll wrappers on sections
5. The content HTML may include `=== TECHNICAL SEO SETTINGS ===` at the top — extract meta title/description from there but don't render it on the page
6. Strip any `<hr>` separators from the SEO settings section
7. All internal links to pointoak.com should use Next.js `<Link>` component
8. Maintain responsive design (mobile-first with md: and lg: breakpoints)
