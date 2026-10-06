import Image from "next/image";
import type { Block, Card } from "@/lib/content";
import Blocks from "./Blocks";
import { cardIcons } from "./cardIcon";

// PointOak's hexagon brand graphics from the original pointoak.com, rebuilt so they take any copy.

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

const stepTitle = (t: string) => t.replace(/^Step\s*\d+:\s*/i, "");

/** Hexagon number badge, used for steps wherever the full "P" graphic doesn't fit. */
export function HexBadge({ n, tone = "navy" }: { n: number | string; tone?: "navy" | "light" | "slate" }) {
  const bg = tone === "navy" ? "bg-navy text-white" : tone === "slate" ? "bg-[#4A5A70] text-white" : "bg-[#E4E8EE] text-navy";
  return (
    <div className={`w-12 h-[54px] flex-shrink-0 flex items-center justify-center font-semibold text-lg ${bg}`} style={{ clipPath: HEX }}>
      {n}
    </div>
  );
}

/**
 * Three-step process on the PointOak "P" hexagon (pointoak.com process graphic, labels removed and
 * set as live text so it works for Understand/Design/Implement, Analyze/Recommend/Monitor, etc.).
 */
export function HexProcess({ items }: { items: Card[] }) {
  const titles = items.map((c) => stepTitle(c.title));
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-5 flex justify-center">
        {/* padding leaves room for the labels that sit outside the artwork */}
        <div className="relative w-full max-w-[250px] sm:max-w-[340px] mt-12 mb-12 mr-[30%] sm:mr-[26%]">
          <Image src="/images/brand/hex-process.png" alt="" width={748} height={814} className="w-full h-auto" />
          <span className="absolute left-0 bottom-[calc(100%+8px)] text-navy text-base sm:text-2xl font-normal whitespace-nowrap">{titles[0]}</span>
          <span className="absolute left-[calc(100%+10px)] top-[49%] -translate-y-1/2 text-navy text-base sm:text-2xl font-normal whitespace-nowrap">
            {titles[1]}
          </span>
          <span className="absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 text-navy text-base sm:text-2xl font-normal whitespace-nowrap">
            {titles[2]}
          </span>
        </div>
      </div>
      <ol className="lg:col-span-7 flex flex-col gap-6">
        {items.map((card, i) => (
          <li key={i} className="flex gap-5 bg-white border border-[#E5EAF0] rounded-[10px] p-6 md:p-7 shadow-[0_1px_2px_rgba(0,55,84,0.04)]">
            <HexBadge n={i + 1} tone={i === 0 ? "navy" : i === 1 ? "slate" : "light"} />
            <div className="flex flex-col gap-2">
              <h3 className="text-navy font-semibold text-xl leading-snug">{titles[i]}</h3>
              <Blocks blocks={card.body} compact />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Three short value cards as the overlapping hexagon trio (pointoak.com "advocate" graphic), icons inside the hexagons. */
export function HexTrio({ items }: { items: Card[] }) {
  const icons = cardIcons(items.map((c) => c.title));
  const hexes = [
    { left: "34.3%", top: "4%", cls: "bg-navy text-white", bar: "bg-white/80", badge: "left-[42%] top-[9.5%] bg-[#D9DEE5] text-navy", icon: "left-[19.4%] top-[28%]" },
    { left: "16.8%", top: "43.5%", cls: "bg-[#F1F3F6] text-navy", bar: "bg-navy", badge: "left-[24.4%] top-[50%] bg-navy text-white", icon: "left-[6.7%] top-[68%]" },
    { left: "51.8%", top: "43.5%", cls: "bg-[#4A5A70] text-white", bar: "bg-white/80", badge: "left-[77.4%] top-[49.7%] bg-[#D9DEE5] text-navy", icon: "left-[93%] top-[53%]" },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className="lg:col-span-6">
        <div className="relative w-full max-w-[560px] mx-auto aspect-[900/680]" aria-hidden>
          {hexes.map((h, i) => (
            <div
              key={i}
              className={`absolute flex flex-col items-center justify-center gap-[6%] px-[4%] text-center ${h.cls}`}
              style={{ left: h.left, top: h.top, width: "33.3%", height: "50.7%", clipPath: HEX }}
            >
              {(() => {
                const Icon = icons[i];
                return <Icon className={`w-[20%] h-auto ${i === 1 ? "text-medium-blue" : "text-light-blue"}`} strokeWidth={1.6} />;
              })()}
              <span className="font-semibold leading-tight text-[11px] sm:text-sm md:text-base lg:text-[17px]">{items[i].title}</span>
            </div>
          ))}
          {hexes.map((h, i) => (
            <div
              key={`b${i}`}
              className={`absolute w-[9.5%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-bold text-sm sm:text-xl md:text-2xl ${h.badge}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <ol className="lg:col-span-6 flex flex-col gap-6">
        {items.map((card, i) => (
          <li key={i} className="flex items-center gap-5">
            <HexBadge n={i + 1} tone={i === 0 ? "navy" : i === 1 ? "light" : "slate"} />
            <div className="flex flex-col gap-2">
              <h3 className="text-navy font-semibold text-xl leading-snug">{card.title}</h3>
              <Blocks blocks={card.body as Block[]} compact />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Use the trio for three short, unlinked cards (values / "why" groups); longer card sets stay as cards. */
export function fitsHexTrio(items: Card[]): boolean {
  const words = (c: Card) =>
    c.body.reduce((n, b) => n + (b.type === "p" ? b.text.split(/\s+/).length : b.type === "list" ? b.items.join(" ").split(/\s+/).length : 0), 0);
  return items.length === 3 && items.every((c) => !c.link && c.title.length <= 32 && words(c) <= 45);
}
