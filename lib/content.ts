import { pages } from "@/content";

export type Seg = [string, string | null];
export type Link = { label: string; href?: string | null; action?: "schedule"; secondary?: boolean };
export type Card = { title: string; body: Block[]; link?: { label: string; href: string } };
export type Block =
  | { type: "p"; text: string; segs?: Seg[] }
  | { type: "h3"; text: string }
  | { type: "list"; lead?: string; items: string[]; segs?: (Seg[] | null)[] }
  | { type: "articles"; items: { label: string; href: string; text?: string }[] }
  | { type: "chips"; items: string[] }
  | { type: "pillars"; items: Card[] }
  | { type: "cards"; items: Card[] }
  | { type: "faq"; items: { q: string; a: Block[] }[] }
  | { type: "links"; items: Link[] }
  | ({ type: "button" } & Link)
  | { type: "table"; rows: string[][] }
  | { type: "band"; text: string };

export type Section = { id: string; title: string; layout?: "steps" | "faq" | "cta"; blocks: Block[] };

export type PageContent = {
  id?: string;
  route: string;
  name: string;
  kind?: "page" | "article";
  parentRoute?: string | null;
  sources?: { label: string; href: string }[];
  meta: { title?: string | null; description?: string | null; schema?: string | null };
  hero: { title: string; subtitle?: string; blocks: Block[] };
  sections: Section[];
};

export const SITE_URL = "https://www.pointoak.com";

export function getPage(route: string): PageContent | undefined {
  return pages.find((p) => p.route === route);
}

/** Pages with their own app/<route>/page.tsx instead of the generic template. */
export const CUSTOM_ROUTES = ["/", "/contact/", "/about/", "/services/wealth-management/", "/corporate-retirement-plans/", "/resources/"];

/** Routes rendered by the generic page template (home and contact have their own). */
export function genericRoutes(): string[] {
  return pages.map((p) => p.route).filter((r) => !CUSTOM_ROUTES.includes(r));
}

export function routeExists(href: string): boolean {
  if (!href.startsWith("/")) return true;
  const path = href.split("#")[0];
  return path === "/" || path === "/contact/" || pages.some((p) => p.route === path);
}

/** Breadcrumb trail following each page's parent in the SEO sitemap. */
export function breadcrumbs(route: string): { name: string; href: string }[] {
  const trail: { name: string; href: string }[] = [];
  let page = getPage(route);
  const seen = new Set<string>();
  while (page && !seen.has(page.route)) {
    seen.add(page.route);
    trail.unshift({ name: page.route === "/" ? "Home" : page.name, href: page.route });
    page = page.parentRoute ? getPage(page.parentRoute) : undefined;
  }
  if (trail[0]?.href !== "/") trail.unshift({ name: "Home", href: "/" });
  return trail;
}

export function allFaqs(page: PageContent) {
  const out: { q: string; a: string }[] = [];
  const walk = (blocks: Block[]) => {
    for (const b of blocks) {
      if (b.type === "faq") {
        for (const item of b.items) out.push({ q: item.q, a: blockText(item.a) });
      }
    }
  };
  walk(page.hero.blocks);
  page.sections.forEach((s) => walk(s.blocks));
  return out;
}

export function blockText(blocks: Block[]): string {
  return blocks
    .map((b) => {
      if (b.type === "p") return b.text;
      if (b.type === "list") return [b.lead, ...b.items].filter(Boolean).join(" ");
      return "";
    })
    .filter(Boolean)
    .join(" ");
}
