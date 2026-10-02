import { pages } from "@/content";

export type Link = { label: string; href?: string | null; action?: "schedule"; secondary?: boolean };
export type Card = { title: string; body: Block[]; link?: { label: string; href: string } };
export type Block =
  | { type: "p"; text: string }
  | { type: "list"; lead?: string; items: string[] }
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
  route: string;
  name: string;
  parent?: string | null;
  meta: { title?: string | null; description?: string | null; schema?: string | null };
  hero: { title: string; subtitle?: string; blocks: Block[] };
  sections: Section[];
};

export const SITE_URL = "https://www.pointoak.com";

export function getPage(route: string): PageContent | undefined {
  return pages.find((p) => p.route === route);
}

/** Routes rendered by the generic page template (home and contact have their own). */
export function genericRoutes(): string[] {
  return pages.map((p) => p.route).filter((r) => r !== "/" && r !== "/contact/");
}

export function routeExists(href: string): boolean {
  if (!href.startsWith("/")) return true;
  const path = href.split("#")[0];
  return path === "/" || path === "/contact/" || pages.some((p) => p.route === path);
}

/** Breadcrumb trail from the URL path, naming each level after its page (levels with no page are skipped). */
export function breadcrumbs(route: string): { name: string; href: string }[] {
  const parts = route.split("/").filter(Boolean);
  const trail = [{ name: "Home", href: "/" }];
  for (let i = 1; i <= parts.length; i++) {
    const href = "/" + parts.slice(0, i).join("/") + "/";
    const page = getPage(href);
    if (page) trail.push({ name: page.name, href });
  }
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
