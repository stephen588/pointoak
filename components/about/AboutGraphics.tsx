import {
  BarChart3,
  Handshake,
  Layers,
  LineChart,
  PieChart,
  Scale,
  ShieldCheck,
  Sprout,
  Lightbulb,
  Network,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import PointOakSymbol from "@/components/brand/PointOakSymbol";
import { Rich } from "@/components/page/Blocks";
import { cardIcon } from "@/components/page/cardIcon";
import type { Seg } from "@/lib/content";

// About-page graphics. Every label is a phrase from about.json.

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

const COMMITMENT_ICONS: [RegExp, LucideIcon][] = [
  [/independ/i, Scale],
  [/personal|relationship/i, Handshake],
  [/fiduciar|responsib/i, ShieldCheck],
];

/** Hero graphic: the PointOak symbol with the firm's three commitments (the hero subtitle) as callouts. */
export function CommitmentsGraphic({ commitments }: { commitments: string[] }) {
  // callouts sit on the right of the symbol, one per commitment
  const spots = [
    { top: "10%", left: "54%" },
    { top: "46%", left: "60%" },
    { top: "82%", left: "54%" },
  ];
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-[1/0.92]" role="img" aria-label={commitments.join(", ")}>
      <svg viewBox="0 0 100 92" className="absolute inset-0 w-full h-full" aria-hidden>
        <circle cx="30" cy="46" r="29" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="0.4" />
        <circle cx="30" cy="46" r="38" fill="none" stroke="#7db7d8" strokeOpacity="0.25" strokeWidth="0.35" strokeDasharray="1.2 1.4" />
        {[14, 47, 80].map((y, i) => (
          <path key={i} d={`M 44 46 C 52 46, 52 ${y}, 60 ${y}`} fill="none" stroke="#7db7d8" strokeOpacity="0.7" strokeWidth="0.45" strokeDasharray="1.4 1.2" />
        ))}
      </svg>
      <div className="absolute left-[4%] top-1/2 -translate-y-1/2 w-[52%] aspect-[0.866] bg-white flex items-center justify-center shadow-2xl shadow-black/30" style={{ clipPath: HEX }}>
        <PointOakSymbol className="w-[56%] h-auto" />
      </div>
      {commitments.slice(0, 3).map((c, i) => {
        const Icon = COMMITMENT_ICONS.find(([re]) => re.test(c))?.[1] ?? UserCheck;
        return (
          <div
            key={c}
            className="absolute -translate-y-1/2 flex items-center gap-2 sm:gap-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm pl-1.5 pr-3 sm:pr-5 py-1.5"
            style={spots[i]}
          >
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-bright-blue flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.8} />
            </span>
            <span className="text-white text-[11px] sm:text-sm md:text-base font-medium whitespace-nowrap">{c}</span>
          </div>
        );
      })}
    </div>
  );
}

const BELIEF_ICONS: [RegExp, LucideIcon][] = [
  [/personal/i, UserCheck],
  [/independ/i, Scale],
  [/understand/i, Lightbulb],
  [/coordinat/i, Network],
];

/** "Advice Should Be …": the shared phrase in the middle, the four beliefs around it. */
export function BeliefsDiagram({ items }: { items: { title: string; text: string; segs?: Seg[] }[] }) {
  // common leading words of all titles ("Advice Should Be")
  const words = items.map((i) => i.title.split(" "));
  let n = 0;
  while (words.every((w) => w[n] && w[n] === words[0][n])) n++;
  const stem = words[0].slice(0, n).join(" ");
  const rest = items.map((i) => i.title.split(" ").slice(n).join(" "));
  const area = ["lg:col-start-2 lg:row-start-1", "lg:col-start-3 lg:row-start-2", "lg:col-start-2 lg:row-start-3", "lg:col-start-1 lg:row-start-2"];
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-5 lg:gap-x-8 lg:gap-y-4 items-center">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <path d="M 50 22 L 50 40 M 50 60 L 50 78 M 34 50 L 42 50 M 58 50 L 66 50" stroke="#016ba4" strokeOpacity="0.45" strokeWidth="0.25" strokeDasharray="1 1" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-2 flex justify-center">
        <div className="w-[190px] aspect-[0.866] bg-navy flex flex-col items-center justify-center text-center px-6" style={{ clipPath: HEX }}>
          <span className="text-white text-xl font-semibold leading-tight">{stem}</span>
          <span className="text-white/70 text-2xl leading-none mt-1">…</span>
        </div>
      </div>
      {items.map((it, i) => {
        const Icon = BELIEF_ICONS.find(([re]) => re.test(it.title))?.[1] ?? UserCheck;
        return (
          <div key={it.title} className={`relative bg-white border border-[#E3E8EE] rounded-[12px] p-6 shadow-[0_1px_2px_rgba(0,55,84,0.04)] ${area[i]}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 aspect-[0.866] bg-gradient-to-br from-cloud-blue to-[#d6e6f7] flex items-center justify-center" style={{ clipPath: HEX }}>
                <Icon className="w-5 h-5 text-navy" strokeWidth={1.7} />
              </span>
              <h3 className="text-navy text-xl font-semibold">
                <span className="sr-only">{stem} </span>
                {rest[i]}
              </h3>
            </div>
            <p className="text-text-gray text-[15px] leading-[24px]">
              <Rich text={it.text} segs={it.segs} tone="light" />
            </p>
          </div>
        );
      })}
    </div>
  );
}

const UNIVERSE_ICONS: LucideIcon[] = [BarChart3, PieChart, LineChart, Layers, Sprout];

/** "Independent by Design": the investment universe the paragraph names, with the "where appropriate" group set apart. */
export function UniverseGraphic({ core, conditional, conditionalNote }: { core: string[]; conditional?: string; conditionalNote?: string }) {
  return (
    <div className="relative rounded-[14px] bg-navy p-6 sm:p-8 overflow-hidden" role="img" aria-label={[...core, conditional].filter(Boolean).join(", ")}>
      <div className="absolute -right-10 -bottom-12 w-56 opacity-[0.07]" aria-hidden>
        <PointOakSymbol mono="#ffffff" className="w-full h-auto" />
      </div>
      <div className="relative grid grid-cols-2 gap-3">
        {core.map((c, i) => {
          const Icon = UNIVERSE_ICONS[i % UNIVERSE_ICONS.length];
          return (
            <div key={c} className="flex items-center gap-3 rounded-[10px] bg-white/10 border border-white/15 px-3 py-3">
              <Icon className="w-5 h-5 text-light-blue flex-shrink-0" strokeWidth={1.7} />
              <span className="text-white text-sm leading-snug">{c}</span>
            </div>
          );
        })}
      </div>
      {conditional && (
        <div className="relative mt-3 flex items-center gap-3 rounded-[10px] border border-dashed border-bright-blue/70 px-3 py-3">
          <Sprout className="w-5 h-5 text-bright-blue flex-shrink-0" strokeWidth={1.7} />
          <span className="text-white text-sm leading-snug">
            {conditionalNote && <span className="text-bright-blue font-medium">{conditionalNote}: </span>}
            {conditional}
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * "What We Believe" on the PointOak "P" track from the current site's "How Working With Us Works"
 * graphic: four stops on the track (the original three plus its top waypoint), numbered clockwise
 * from the upper-left stop, each with its own icon, number badge and label, matching the numbered
 * cards beside it.
 */
export function BeliefsTrack({
  title,
  items,
  ring = "ring-cloud-blue",
}: {
  title: string;
  items: { title: string; text: string; segs?: Seg[] }[];
  ring?: string;
}) {
  const words = items.map((i) => i.title.split(" "));
  let n = 0;
  while (words.every((w) => w[n] && w[n] === words[0][n])) n++;
  const stem = words[0].slice(0, n).join(" ");
  const rest = items.map((i) => i.title.split(" ").slice(n).join(" ") || i.title);
  // stops on hex-process.png (748x814): top waypoint, right, bottom, upper-left
  const stops = [
    { x: 8.7, y: 27.3 },
    { x: 50.1, y: 5.5 },
    { x: 91.2, y: 48.8 },
    { x: 49.9, y: 91.9 },
  ];
  const stopStyle = ["bg-navy text-white", "bg-[#4A5A70] text-white", "bg-[#D9DEE5] text-navy", "bg-bright-blue text-white"];
  const labelPos = [
    "right-[calc(100%-1%)] top-[27.3%] -translate-y-1/2 pr-[14%] text-right",
    "left-1/2 -translate-x-1/2 bottom-[calc(100%+14px)]",
    "left-[calc(100%+14px)] top-[48.8%] -translate-y-1/2",
    "left-1/2 -translate-x-1/2 top-[calc(100%+14px)]",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
      <div className="lg:col-span-6 flex flex-col gap-10">
        <h2 className="text-navy text-3xl md:text-4xl lg:text-[44px] font-light leading-tight">{title}</h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w-[190px] sm:max-w-[330px] mt-10 mb-12 mx-[26%] sm:mx-[24%]">
            <Image src="/images/brand/hex-process.png" alt="" width={748} height={814} className="w-full h-auto" />
            {items.slice(0, 4).map((it, i) => {
              const Icon = BELIEF_ICONS.find(([re]) => re.test(it.title))?.[1] ?? cardIcon(it.title);
              return (
                <div
                  key={it.title}
                  className={`absolute w-[19%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center ring-4 ring-white shadow-lg ${stopStyle[i]}`}
                  style={{ left: `${stops[i].x}%`, top: `${stops[i].y}%` }}
                >
                  <Icon className="w-1/2 h-1/2" strokeWidth={1.7} />
                  <span className="absolute -top-1 -right-1 w-[42%] aspect-square rounded-full bg-white text-navy text-[10px] sm:text-xs font-bold flex items-center justify-center shadow ring-1 ring-navy/10">
                    {i + 1}
                  </span>
                </div>
              );
            })}
            {rest.slice(0, 4).map((r, i) => (
              <span key={r} className={`absolute whitespace-nowrap text-navy text-[12px] sm:text-xl font-normal ${labelPos[i]}`}>
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ol className="lg:col-span-6 relative flex flex-col gap-5">
        <div aria-hidden className="absolute left-[23px] top-8 bottom-8 border-l-2 border-dashed border-navy/20" />
        {items.slice(0, 4).map((it, i) => (
          <li key={it.title} className="relative flex items-center gap-5">
            <span className={`relative z-10 w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center font-semibold text-lg ring-8 ${ring} ${stopStyle[i]}`}>
              {i + 1}
            </span>
            <div className="flex-1 bg-white border border-[#E3E8EE] rounded-[12px] p-6 shadow-[0_1px_2px_rgba(0,55,84,0.04)]">
              <h3 className="text-navy text-xl font-semibold leading-snug">
                {stem && <span className="text-text-gray font-normal">{stem} </span>}
                {rest[i]}
              </h3>
              <p className="text-text-gray text-[15px] leading-[24px] mt-2">
                <Rich text={it.text} segs={it.segs} tone="light" />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
