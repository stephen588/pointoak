import { Award, Building2, ShieldCheck, Sprout, TrendingUp, Compass, Route, TreePine, UserCheck, type LucideIcon } from "lucide-react";
import type { Block, Card, Seg } from "@/lib/content";
import { cardIcons } from "./cardIcon";
import { HexBadge } from "./HexGraphics";
import { Rich } from "./Blocks";
import BbbSeal from "@/components/BbbSeal";

// Brand diagrams (hexagons + dashed connectors) that replace plain lists / card sets.
// Every word shown comes from the block being rendered; nothing is added.

export const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

function HexIcon({ Icon, tone = "light", size = "w-14" }: { Icon: LucideIcon; tone?: "light" | "navy" | "slate"; size?: string }) {
  const bg = tone === "navy" ? "bg-navy" : tone === "slate" ? "bg-[#4A5A70]" : "bg-gradient-to-br from-cloud-blue to-[#d6e6f7]";
  const fg = tone === "light" ? "text-navy" : "text-white";
  return (
    <div className={`${size} aspect-[0.866] flex-shrink-0 flex items-center justify-center ${bg}`} style={{ clipPath: HEX }}>
      <Icon className={`w-[45%] h-[45%] ${fg}`} strokeWidth={1.6} />
    </div>
  );
}

const textOf = (blocks: Block[]) => blocks.map((b) => (b.type === "p" ? b.text : "")).join(" ");
export const wordCount = (blocks: Block[]) => textOf(blocks).split(/\s+/).filter(Boolean).length;

/** "BUILD → GROW → PREPARE → …" as a hexagon path. */
const STAGE_ICONS: LucideIcon[] = [Sprout, TrendingUp, Compass, Route, TreePine];
export function StagePath({ text }: { text: string }) {
  const stages = text.split("→").map((s) => s.trim()).filter(Boolean);
  return (
    <div className="relative" role="img" aria-label={text}>
      <div aria-hidden className="hidden md:block absolute top-[42px] left-[8%] right-[8%] border-t-2 border-dashed border-medium-blue/40" />
      <ol className="relative grid grid-cols-1 md:grid-flow-col md:auto-cols-fr gap-6 md:gap-4">
        {stages.map((s, i) => (
          <li key={s} className="flex md:flex-col items-center gap-4 md:gap-3 md:text-center">
            <HexIcon Icon={STAGE_ICONS[i % STAGE_ICONS.length]} tone={i === stages.length - 1 ? "navy" : i % 2 ? "slate" : "light"} size="w-[84px]" />
            <span className="text-navy font-semibold tracking-wide text-sm md:text-[15px]">{s}</span>
          </li>
        ))}
      </ol>
      <span className="sr-only">{text}</span>
    </div>
  );
}

/** Short value statements (pillars / 4-card "beliefs") as a row of hexagon icons. */
export function HexValues({ items, tone }: { items: Card[]; tone: "light" | "dark" }) {
  const icons = cardIcons(items.map((c) => c.title));
  const cols = items.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${cols} gap-8`}>
      {items.map((c, i) => (
        <div key={i} className="flex flex-col items-center text-center gap-3">
          <HexIcon Icon={icons[i]} tone={i % 3 === 0 ? "navy" : i % 3 === 1 ? "slate" : "light"} size="w-[88px]" />
          <h3 className={`font-semibold text-xl leading-snug ${tone === "dark" ? "text-white" : "text-navy"}`}>{c.title}</h3>
          {c.body.map((b, k) =>
            b.type === "p" ? (
              <p key={k} className={`text-[15px] leading-[24px] max-w-[260px] ${tone === "dark" ? "text-white/80" : "text-text-gray"}`}>
                <Rich text={b.text} segs={b.segs} tone={tone} />
              </p>
            ) : null,
          )}
        </div>
      ))}
    </div>
  );
}

/** Two areas side by side as two large hexagons joined by a dashed line. */
export function TwoHex({ items }: { items: Card[] }) {
  const icons = [UserCheck, Building2];
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
      <div aria-hidden className="hidden md:block absolute left-1/4 right-1/4 top-[70px] border-t-2 border-dashed border-medium-blue/40" />
      {items.map((c, i) => (
        <div key={i} className="relative flex flex-col items-center text-center gap-4">
          <HexIcon Icon={icons[i % 2]} tone={i === 0 ? "navy" : "slate"} size="w-[140px]" />
          <h3 className="text-navy text-2xl font-light leading-snug">{c.title}</h3>
          {c.body.map((b, k) =>
            b.type === "p" ? (
              <p key={k} className="text-text-gray text-base leading-[27px] max-w-[460px]">
                <Rich text={b.text} segs={b.segs} tone="light" />
              </p>
            ) : null,
          )}
        </div>
      ))}
    </div>
  );
}

/** A list of short items as icon tiles. */
export function IconTiles({ lead, items, segs }: { lead?: string; items: string[]; segs?: (Seg[] | null)[] }) {
  const icons = cardIcons(items);
  return (
    <div className="flex flex-col gap-5 w-full">
      {lead && <p className="text-navy font-medium text-lg">{lead}</p>}
      <ul className={`grid grid-cols-1 sm:grid-cols-2 ${items.length % 3 === 0 || items.length > 6 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-4`}>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-4 bg-white border border-[#E3E8EE] rounded-[10px] p-4 pr-5 shadow-[0_1px_2px_rgba(0,55,84,0.04)]">
            <HexIcon Icon={icons[i]} tone={i % 3 === 0 ? "light" : i % 3 === 1 ? "navy" : "slate"} size="w-12" />
            <span className="text-navy text-[15px] leading-snug">
              <Rich text={it} segs={segs?.[i]} tone="light" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Capabilities around a central hexagon. */
export function HubDiagram({ center, spokes }: { center: string; spokes: string[] }) {
  const icons = cardIcons(spokes);
  const n = spokes.length;
  const pts = spokes.map((_, i) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180);
    return { x: 50 + 38 * Math.cos(a), y: 50 + 38 * Math.sin(a) };
  });
  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square" role="img" aria-label={`${center}: ${spokes.join(", ")}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#003754" strokeOpacity="0.12" strokeWidth="0.4" />
        {pts.map((p, i) => (
          <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke="#016ba4" strokeOpacity="0.45" strokeWidth="0.35" strokeDasharray="1.2 1" />
        ))}
      </svg>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[27%] aspect-[0.866] bg-navy text-white flex items-center justify-center text-center px-[2%]"
        style={{ clipPath: HEX }}
      >
        <span className="font-semibold text-xs sm:text-base md:text-lg">{center}</span>
      </div>
      {spokes.map((s, i) => {
        const Icon = icons[i];
        return (
          <div key={s} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 w-[25%]" style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%` }}>
            <div className={`w-[44%] aspect-[0.866] flex items-center justify-center shadow ${i % 2 ? "bg-[#4A5A70]" : "bg-[#DCEAF8]"}`} style={{ clipPath: HEX }}>
              <Icon className={`w-1/2 h-1/2 ${i % 2 ? "text-white" : "text-medium-blue"}`} strokeWidth={1.7} />
            </div>
            <span className="text-navy font-medium leading-tight text-center text-[9px] sm:text-xs md:text-[13px]">{s}</span>
          </div>
        );
      })}
    </div>
  );
}

/** Credentials: text badges plus the association logos the site already used (NAPFA has no logo file). */
const LOGOS: Record<string, { src: string; w: number; h: number }> = {
  NAPA: { src: "/images/assoc-logo-napa.png", w: 300, h: 120 },
  ASPPA: { src: "/images/assoc-logo-asppa.png", w: 300, h: 120 },
  RPAG: { src: "/images/assoc-logo-rpag.png", w: 120, h: 120 },
  SHRM: { src: "/images/assoc-logo-shrm.png", w: 300, h: 120 },
};
export function HexSeals({ items }: { items: string[] }) {
  const bbb = items.some((it) => it.startsWith("BBB "));
  const badges = items.filter((it) => !it.includes(" | ") && !it.startsWith("BBB "));
  const orgs = items.filter((it) => it.includes(" | ")).flatMap((it) => it.split(" | "));
  return (
    <div className="flex flex-col gap-8">
      <ul className="flex flex-wrap gap-3">
        {badges.map((b) => (
          <li key={b} className="inline-flex items-center gap-2 rounded-full border border-[#D6E4F5] bg-white px-4 py-2 text-navy text-[13px] font-semibold tracking-wide">
            <ShieldCheck className="w-4 h-4 text-medium-blue" strokeWidth={2} />
            {b}
          </li>
        ))}
      </ul>
      {orgs.length > 0 && (
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-[#E3E8EE] pt-8">
          {orgs.map((o) => {
            const logo = LOGOS[o.trim()];
            return (
              <li key={o} className="flex items-center h-12">
                {logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logo.src} alt={o} className="h-full w-auto max-w-[150px] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition" />
                ) : (
                  <span className="text-navy/80 text-xl font-semibold tracking-[0.15em]">{o}</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {bbb && (
        <div className="border-t border-[#E3E8EE] pt-8">
          <BbbSeal />
        </div>
      )}
      <span className="sr-only">{items.join(" ")}</span>
    </div>
  );
}

/** Dated milestones (e.g. "since 2005", "since 2021") on a horizontal timeline. */
export function Milestones({ items }: { items: { year: string; title?: string; body: Block[] }[] }) {
  return (
    <div className="relative">
      <div aria-hidden className="hidden md:block absolute top-[38px] left-[60px] right-[10%] border-t-2 border-dashed border-medium-blue/40" />
      <ol className={`relative grid grid-cols-1 ${items.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-10`}>
        {items.map((m, i) => (
          <li key={i} className="flex flex-col gap-4">
            <div
              className={`w-[88px] aspect-[0.866] flex items-center justify-center text-white font-bold text-xl ${i % 2 ? "bg-[#4A5A70]" : "bg-navy"}`}
              style={{ clipPath: HEX }}
            >
              {m.year}
            </div>
            {m.title && <h3 className="text-navy font-semibold text-xl">{m.title}</h3>}
            {m.body.map((b, k) =>
              b.type === "p" ? (
                <p key={k} className="text-text-gray text-base leading-[27px] max-w-[520px]">
                  <Rich text={b.text} segs={b.segs} tone="light" />
                </p>
              ) : null,
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** If a section's blocks each carry a distinct year, return them as milestones. */
export function milestonesFrom(blocks: Block[]): { year: string; title?: string; body: Block[] }[] | null {
  const out: { year: string; title?: string; body: Block[] }[] = [];
  for (const b of blocks) {
    if (b.type === "cards" && b.items.length === 1) {
      // one card whose paragraphs each carry their own year -> one milestone per paragraph
      const c = b.items[0];
      const paras = c.body.filter((x) => x.type === "p") as Extract<Block, { type: "p" }>[];
      if (paras.length !== c.body.length) return null;
      for (const [k, para] of paras.entries()) {
        const y = para.text.match(/\b(19|20)\d{2}\b/);
        if (!y) return null;
        out.push({ year: y[0], title: k === 0 ? c.title : undefined, body: [para] });
      }
    } else if (b.type === "p") {
      const y = b.text.match(/\b(19|20)\d{2}\b/);
      if (!y) return null;
      out.push({ year: y[0], body: [b] });
    } else return null;
  }
  const years = new Set(out.map((o) => o.year));
  return out.length >= 2 && years.size === out.length ? out.sort((a, b) => +a.year - +b.year) : null;
}

export { HexBadge };
