import { pages } from "@/content";
import { SITE_URL, type PageContent } from "@/lib/content";

// llms.txt (llmstxt.org) for AI search tools: built from the same page data as the site, so every
// description is the approved meta description from Darsh's SEO map. No new copy here.
export const dynamic = "force-static";

const line = (p: PageContent) => `- [${p.name}](${SITE_URL}${p.route})${p.meta.description ? `: ${p.meta.description}` : ""}`;
const under = (prefix: string) => pages.filter((p) => p.route.startsWith(prefix)).sort((a, b) => a.route.localeCompare(b.route)).map(line);
const at = (...routes: string[]) => routes.map((r) => pages.find((p) => p.route === r)).filter((p): p is PageContent => !!p).map(line);

export function GET() {
  const body = [
    "# PointOak Retirement Advisors",
    "",
    // Darsh's locked short description (developer handoff 2026-10-04), as in the site footer
    "> PointOak Retirement Advisors is an independent, fee-only fiduciary advisory firm providing private wealth management and retirement plan consulting to clients throughout the DC Metro area and nationwide. We offer personalized financial planning and investment management for individuals and families as well as comprehensive retirement plan consulting for businesses.",
    "",
    "Investment advisory services offered through PointOak Retirement Advisors, LLC, an SEC-registered investment adviser (CRD# 314866, https://adviserinfo.sec.gov/firm/summary/314866). 1751 Pinnacle Drive, Suite 600, McLean, VA 22102. (703) 595-4444.",
    "",
    "## The firm",
    ...at("/", "/about/", "/why-point-oak/", "/faq/", "/contact/"),
    "",
    "## Wealth management (individuals and families)",
    ...under("/services/"),
    "",
    "## Retirement plan consulting (businesses and plan sponsors)",
    ...under("/corporate-retirement-plans/"),
    "",
    "## Insights",
    ...at("/resources/"),
    ...under("/insights/"),
    "",
    "## Disclosures",
    `- [Form ADV Part 2A](${SITE_URL}/disclosures/form-adv-2a.pdf)`,
    `- [Form CRS](${SITE_URL}/disclosures/form-crs.pdf)`,
    `- [Privacy Statement](${SITE_URL}/disclosures/privacy-statement.pdf)`,
    `- [Terms of Use](${SITE_URL}/terms-of-use/)`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
