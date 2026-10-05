import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import type { Block, Card, Seg } from "@/lib/content";
import { routeExists } from "@/lib/content";
import ScheduleButton from "./ScheduleButton";
import { cardIcons } from "./cardIcon";
import { HexBadge, HexProcess, HexTrio, fitsHexTrio } from "./HexGraphics";
import { HexSeals, HexValues, HubDiagram, IconTiles, StagePath, TwoHex, wordCount } from "./Diagrams";

type Tone = "light" | "dark";

function TextLink({ href, label, tone }: { href: string; label: string; tone: Tone }) {
  const color = tone === "dark" ? "text-white hover:text-white/80" : "text-medium-blue hover:text-navy";
  return (
    <Link href={href} className={`inline-flex items-center gap-2 font-medium ${color} transition-colors`}>
      {label}
      <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
    </Link>
  );
}

/** Text with the doc's inline hyperlinks: site pages via <Link>, external sources in a new tab. */
export function Rich({ text, segs, tone }: { text: string; segs?: Seg[] | null; tone: Tone }) {
  if (!segs) return <>{text}</>;
  const link = tone === "dark" ? "text-white underline underline-offset-2 hover:text-white/80" : "text-medium-blue underline underline-offset-2 decoration-medium-blue/40 hover:text-navy";
  return (
    <>
      {segs.map(([t, href], k) =>
        !href ? (
          <span key={k}>{t}</span>
        ) : href.startsWith("/") ? (
          routeExists(href) ? (
            <Link key={k} href={href} className={link}>
              {t}
            </Link>
          ) : (
            <span key={k}>{t}</span>
          )
        ) : (
          <a key={k} href={href} target="_blank" rel="noopener noreferrer" className={link}>
            {t}
          </a>
        ),
      )}
    </>
  );
}

function ArticleCards({ items }: { items: { label: string; href: string; text?: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((a) => (
        <Link
          key={a.href}
          href={a.href}
          className="group bg-white rounded-[10px] border border-[#E3E8EE] p-7 flex flex-col gap-3 hover:border-navy hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 transition-all"
        >
          <span className="text-medium-blue text-xs font-semibold uppercase tracking-wider">Insight</span>
          <h3 className="text-navy text-xl font-semibold leading-snug">{a.label}</h3>
          {a.text && <p className="text-text-gray text-[15px] leading-[24px] flex-1">{a.text}</p>}
          <span className="inline-flex items-center gap-2 text-navy text-sm font-medium mt-1">
            Read the article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
          </span>
        </Link>
      ))}
    </div>
  );
}

const STEP_COLS: Record<number, string> = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" };

function CardGrid({ items, tone, numbered }: { items: Card[]; tone: Tone; numbered?: boolean }) {
  // An h3 with nothing under it in the copy is a sub-heading, not a card
  if (items.every((c) => !c.body.length && !c.link)) {
    return (
      <>
        {items.map((c, i) => (
          <p key={i} className={`text-xl md:text-2xl font-medium max-w-3xl ${tone === "dark" ? "text-white" : "text-navy"}`}>
            {c.title}
          </p>
        ))}
      </>
    );
  }
  if (numbered && items.length === 3 && tone === "light") return <HexProcess items={items} />;
  if (!numbered && tone === "light" && fitsHexTrio(items)) return <HexTrio items={items} />;
  if (!numbered && tone === "light" && items.length === 1 && items[0].body.length > 0) {
    // a single card gets a hexagon icon beside it
    const Icon = cardIcons([items[0].title])[0];
    return (
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 bg-white border border-[#E5EAF0] rounded-[12px] p-7 md:p-10 shadow-[0_1px_2px_rgba(0,55,84,0.04)]">
        <div
          className="w-[84px] aspect-[0.866] flex-shrink-0 flex items-center justify-center bg-navy"
          style={{ clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)" }}
        >
          <Icon className="w-9 h-9 text-white" strokeWidth={1.6} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-navy font-semibold text-xl md:text-2xl leading-snug">{items[0].title}</h3>
          <Blocks blocks={items[0].body} compact />
          {items[0].link && routeExists(items[0].link.href) && <TextLink href={items[0].link.href} label={items[0].link.label} tone={tone} />}
        </div>
      </div>
    );
  }
  const unlinked = items.every((c) => !c.link) && items.every((c) => c.body.every((b) => b.type === "p"));
  if (!numbered && tone === "light" && unlinked && items.length === 2) return <TwoHex items={items} />;
  if (!numbered && tone === "light" && unlinked && items.length === 4 && items.every((c) => wordCount(c.body) <= 30))
    return <HexValues items={items} tone={tone} />;
  if (numbered) {
    // process steps: numbered circles joined by a line (horizontal on desktop, vertical on mobile)
    return (
      <div className="relative">
        {items.length >= 3 && (
          <div aria-hidden className="hidden lg:block absolute top-[26px] left-[6%] right-[6%] border-t-2 border-dashed border-navy/25" />
        )}
      <ol className={`relative grid gap-8 ${STEP_COLS[Math.min(items.length, 5)] ?? "md:grid-cols-2"}`}>
        {items.map((card, i) => {
          const stepMatch = card.title.match(/^Step\s*(\d+):\s*(.+)$/i);
          const title = stepMatch ? stepMatch[2] : card.title;
          return (
            <li key={i} className="relative flex lg:flex-col gap-5 lg:gap-4">
              <div className="relative z-10 ring-8 ring-transparent">
                <HexBadge n={stepMatch ? stepMatch[1] : i + 1} tone={["navy", "slate", "light"][i % 3] as "navy" | "slate" | "light"} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={`font-semibold text-xl leading-snug ${tone === "dark" ? "text-white" : "text-navy"}`}>{title}</h3>
                <Blocks blocks={card.body} tone={tone} compact />
              </div>
            </li>
          );
        })}
      </ol>
      </div>
    );
  }
  const icons = cardIcons(items.map((c) => c.title));
  const cols =
    items.length === 1
      ? "grid-cols-1"
      : items.length === 2 || items.length === 4
        ? numbered && items.length === 4
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          : "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid ${cols} gap-5`}>
      {items.map((card, i) => {
        const stepMatch = card.title.match(/^Step\s*(\d+):\s*(.+)$/i);
        const title = stepMatch ? stepMatch[2] : card.title;
        return (
          <div
            key={i}
            className={`rounded-[10px] p-7 md:p-8 flex flex-col gap-3 transition-shadow ${
              tone === "dark" ? "bg-white/[0.07] border border-white/10" : "bg-white border border-[#E5EAF0] shadow-[0_1px_2px_rgba(0,55,84,0.04)] hover:shadow-lg hover:shadow-navy/5"
            }`}
          >
            {numbered && (
              <div className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center font-semibold text-lg mb-1">
                {stepMatch ? stepMatch[1] : i + 1}
              </div>
            )}
            {!numbered && items.length > 1 && (() => {
              const Icon = icons[i];
              return (
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-1 ${tone === "dark" ? "bg-white/10" : "bg-gradient-to-br from-cloud-blue to-[#dcebfa]"}`}>
                  <Icon className={`w-6 h-6 ${tone === "dark" ? "text-white" : "text-navy"}`} strokeWidth={1.6} />
                </div>
              );
            })()}
            <h3 className={`font-semibold text-xl leading-snug ${tone === "dark" ? "text-white" : "text-navy"}`}>{title}</h3>
            <div className="flex flex-col gap-3">
              <Blocks blocks={card.body} tone={tone} compact />
            </div>
            {card.link && routeExists(card.link.href) && (
              <div className="mt-auto pt-2">
                <TextLink href={card.link.href} label={card.link.label} tone={tone} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Badges({ items, tone }: { items: string[]; tone: Tone }) {
  return (
    <ul className="flex flex-wrap gap-4">
      {items.map((item, k) => (
        <li
          key={k}
          className={`flex items-center gap-3 rounded-[7px] px-5 py-4 text-sm font-semibold tracking-wide ${
            tone === "dark" ? "bg-white/10 text-white" : "bg-white border border-[#D6E4F5] text-navy"
          }`}
        >
          <Check className="w-5 h-5 text-medium-blue flex-shrink-0" strokeWidth={2.25} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Faq({ items }: { items: { q: string; a: Block[] }[] }) {
  return (
    <div className="divide-y divide-[#DCE3EA] border-y border-[#DCE3EA] max-w-4xl">
      {items.map((item, i) => (
        <details key={i} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-navy text-lg font-medium [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown className="w-5 h-5 mt-1 flex-shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <div className="pt-3 flex flex-col gap-3">
            <Blocks blocks={item.a} tone="light" compact />
          </div>
        </details>
      ))}
    </div>
  );
}

export default function Blocks({
  blocks,
  tone = "light",
  compact = false,
  steps = false,
}: {
  blocks: Block[];
  tone?: Tone;
  compact?: boolean;
  steps?: boolean;
}) {
  const text = tone === "dark" ? "text-white/85" : "text-text-gray";
  const strong = tone === "dark" ? "text-white" : "text-navy";
  const pSize = compact ? "text-base leading-[26px]" : "text-base md:text-lg leading-[28px] md:leading-[30px]";

  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className={`${text} ${pSize} max-w-3xl`}>
                <Rich text={b.text} segs={b.segs} tone={tone} />
              </p>
            );
          case "list": {
            if (!b.lead && b.items.every((it) => it === it.toUpperCase())) {
              return tone === "light" && !compact ? <HexSeals key={i} items={b.items} /> : <Badges key={i} items={b.items} tone={tone} />;
            }
            const maxWords = Math.max(...b.items.map((it) => it.split(/\s+/).length));
            if (!compact && tone === "light" && !b.lead && b.items.length >= 6 && b.items.length <= 10 && maxWords <= 5)
              return <HubDiagram key={i} center="PointOak" spokes={b.items} />;
            if (!compact && tone === "light" && b.items.length >= 4 && maxWords <= 12)
              return <IconTiles key={i} lead={b.lead} items={b.items} segs={b.segs} />;
            return (
              <div
                key={i}
                className={compact || tone === "dark" ? "max-w-4xl" : "max-w-4xl rounded-[10px] border border-[#E3E8EE] bg-white p-6 md:p-8 shadow-[0_1px_2px_rgba(0,55,84,0.04)]"}
              >
                {b.lead && <p className={`${strong} font-medium ${compact ? "text-base" : "text-lg"} mb-3`}>{b.lead}</p>}
                <ul className={`grid gap-x-10 gap-y-3 ${!compact && b.items.length > 4 ? "md:grid-cols-2" : ""}`}>
                  {b.items.map((item, k) => (
                    <li key={k} className={`flex gap-3 ${text} text-base leading-[26px]`}>
                      <Check className={`w-5 h-5 mt-[3px] flex-shrink-0 ${tone === "dark" ? "text-light-blue" : "text-medium-blue"}`} strokeWidth={2} />
                      <span>
                        <Rich text={item} segs={b.segs?.[k]} tone={tone} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          case "chips": {
            const label = /at a glance$/i.test(b.items[0]) ? b.items[0] : null;
            const chips = label ? b.items.slice(1) : b.items;
            return (
              <div key={i} className="flex flex-col gap-3">
                {label && <p className={`${strong} text-sm font-semibold uppercase tracking-wider`}>{label}</p>}
              <ul className="flex flex-wrap gap-3">
                {chips.map((item, k) => (
                  <li
                    key={k}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      tone === "dark" ? "bg-white/10 text-white border border-white/20" : "bg-cloud-blue text-navy border border-[#D6E4F5]"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              </div>
            );
          }
          case "pillars":
            if (!steps && tone === "light") return <HexValues key={i} items={b.items} tone={tone} />;
            return <CardGrid key={i} items={b.items} tone={tone} numbered={steps} />;
          case "cards":
            return <CardGrid key={i} items={b.items} tone={tone} numbered={steps} />;
          case "faq":
            return <Faq key={i} items={b.items} />;
          case "articles":
            return <ArticleCards key={i} items={b.items} />;
          case "h3":
            return (
              <h3 key={i} className={`${strong} text-xl md:text-2xl font-semibold leading-snug mt-4`}>
                {b.text}
              </h3>
            );
          case "links":
            return (
              <ul key={i} className="flex flex-wrap gap-3">
                {b.items.map((l, k) =>
                  l.href && routeExists(l.href) ? (
                    <li key={k}>
                      <Link
                        href={l.href}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-[7px] border border-navy/20 text-navy font-medium hover:border-navy hover:bg-navy hover:text-white transition-colors"
                      >
                        {l.label}
                        <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            );
          case "button":
            if (b.action === "schedule") {
              return (
                <div key={i}>
                  <ScheduleButton label={b.label} tone={tone === "dark" ? "light" : "dark"} />
                </div>
              );
            }
            if (!b.href || !routeExists(b.href)) return null;
            return (
              <div key={i}>
                <TextLink href={b.href} label={b.label} tone={tone} />
              </div>
            );
          case "table": {
            // highlight PointOak's column in comparison tables; neutral tables get no highlight
            const hi = b.rows[0].findIndex((h) => /pointoak/i.test(h));
            return (
              <div key={i} className="overflow-x-auto -mx-6 px-6 xl:mx-0 xl:px-0">
                <table className={`w-full ${b.rows[0].length > 2 ? "min-w-[720px]" : ""} border-collapse text-left text-[15px] leading-[24px] bg-white rounded-[7px] overflow-hidden`}>
                  <thead>
                    <tr>
                      {b.rows[0].map((h, k) => (
                        <th key={k} className={`p-4 font-semibold align-bottom ${k === hi ? "bg-navy text-white" : "bg-[#E9F0F8] text-navy"}`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.slice(1).map((row, r) => (
                      <tr key={r} className="border-t border-[#E5EAF0]">
                        {row.map((cell, k) => (
                          <td key={k} className={`p-4 align-top ${k === 0 ? "font-medium text-navy" : k === hi ? "text-navy bg-cloud-blue/60" : "text-text-gray"}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          case "band":
            if (b.text.includes("→")) return <StagePath key={i} text={b.text} />;
            return (
              <div
                key={i}
                className="rounded-[7px] px-6 py-6 md:px-10 text-white text-center text-base md:text-xl font-medium tracking-wide"
                style={{ background: "linear-gradient(90deg, #003754 0%, #0078B8 100%)" }}
              >
                {b.text}
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
