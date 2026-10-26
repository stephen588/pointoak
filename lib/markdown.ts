import type { Block, PageContent, Seg } from "@/lib/content";
import { SITE_URL } from "@/lib/content";

// Markdown for AI agents (Accept: text/markdown, isitagentready.com "Markdown negotiation").
// Same approved words as the HTML page, from the same content JSON; nothing is rewritten.

const abs = (href: string) => (href.startsWith("/") ? SITE_URL + href : href);
const rich = (text: string, segs?: Seg[] | null) =>
  segs ? segs.map(([t, href]) => (href ? `[${t}](${abs(href)})` : t)).join("") : text;

function blocks(list: Block[], depth = 3): string[] {
  const out: string[] = [];
  for (const b of list) {
    switch (b.type) {
      case "p": out.push(rich(b.text, b.segs)); break;
      case "band": out.push(b.text); break;
      case "h3": out.push(`${"#".repeat(depth)} ${b.text}`); break;
      case "list":
        out.push([b.lead, ...b.items.map((it, i) => `- ${rich(it, b.segs?.[i])}`)].filter(Boolean).join("\n"));
        break;
      case "chips": out.push(b.items.map((it) => `- ${it}`).join("\n")); break;
      case "articles": out.push(b.items.map((a) => `- [${a.label}](${abs(a.href)})${a.text ? `: ${a.text}` : ""}`).join("\n")); break;
      case "cards":
      case "pillars":
        for (const c of b.items) {
          out.push(`${"#".repeat(depth)} ${c.title}`, ...blocks(c.body, depth + 1));
          if (c.link) out.push(`[${c.link.label}](${abs(c.link.href)})`);
        }
        break;
      case "faq":
        for (const item of b.items) out.push(`${"#".repeat(depth)} ${item.q}`, ...blocks(item.a, depth + 1));
        break;
      case "links": {
        const items = b.items.filter((l) => l.href).map((l) => `- [${l.label}](${abs(l.href!)})`);
        if (items.length) out.push(items.join("\n"));
        break;
      }
      case "button": if (b.href) out.push(`[${b.label}](${abs(b.href)})`); break;
      case "table":
        if (b.rows.length) {
          const [head, ...rows] = b.rows;
          out.push([`| ${head.join(" | ")} |`, `| ${head.map(() => "---").join(" | ")} |`, ...rows.map((r) => `| ${r.join(" | ")} |`)].join("\n"));
        }
        break;
    }
  }
  return out;
}

// Footer "Important Disclosures", word for word (components/Footer.tsx). Keep the two in step.
const DISCLOSURES = [
  "Investment advisory services offered through PointOak Retirement Advisors, LLC, an SEC-registered investment adviser. This site is published for residents of the United States only. Not all of the products and services referenced on this site are available in every state and through every representative or advisor listed.",
  "PointOak Retirement Advisors, LLC does not provide tax or legal advice. PointOak coordinates with your tax and legal professionals but does not provide tax preparation, tax advice, or legal services. We recommend you consult with qualified tax and legal advisors for specific guidance related to your situation.",
  "For questions about our regulatory status or to report concerns, contact us at (703) 595-4444 or info@pointoak.com.",
  "Check the background of this investment professional on FINRA's BrokerCheck: [brokercheck.finra.org](https://brokercheck.finra.org)",
  "PointOak Retirement Advisors LLC is a Registered Investment Adviser located in Northern Virginia. Advisory services are only offered to clients where properly licensed or exempt. Investing involves risk, including the loss of principal; past performance does not guarantee future results. Registration does not imply a certain level of skill or training. Additional information is available at [www.adviserinfo.sec.gov](https://www.adviserinfo.sec.gov) (CRD# 314866).",
];

export function pageMarkdown(page: PageContent): string {
  const parts = [
    `# ${page.hero.title}`,
    ...(page.hero.subtitle ? [page.hero.subtitle] : []),
    ...blocks(page.hero.blocks),
    ...page.sections.flatMap((s) => [`## ${s.title}`, ...blocks(s.blocks)]),
    ...(page.sources?.length ? ["## Sources", page.sources.map((s) => `- [${s.label}](${s.href})`).join("\n")] : []),
    "---",
    "PointOak Retirement Advisors, LLC · 1751 Pinnacle Drive, Suite 600, McLean, VA 22102 · (703) 595-4444 · info@pointoak.com",
    `Source page: ${SITE_URL}${page.route}`,
    "## Important Disclosures",
    ...DISCLOSURES,
  ];
  return parts.filter((p) => p.trim()).join("\n\n") + "\n";
}
