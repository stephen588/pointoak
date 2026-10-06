import {
  Award,
  BarChart3,
  Briefcase,
  GraduationCap,
  Landmark,
  LineChart,
  PenTool,
  PiggyBank,
  Receipt,
  Scale,
  ShieldCheck,
  TreePine,
  type LucideIcon,
} from "lucide-react";

// Homepage graphics. Every label is a phrase from the homepage copy (home.json).

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

const PILLAR_ICONS: LucideIcon[] = [ShieldCheck, Receipt, Scale, Award];

/**
 * The four "advisory relationship" pillars in the overlapping-hexagon style of the original
 * pointoak.com "Your Personal Financial Advocate" graphic: title + tagline inside each hexagon,
 * number badge and icon bubble alongside.
 */
export function HexQuad({ items }: { items: { title: string; text: string }[] }) {
  // honeycomb: two hexagons on top, two below shifted half a width
  const pos = [
    { left: "14%", top: "4%" },
    { left: "47%", top: "4%" },
    { left: "30.5%", top: "41%" },
    { left: "63.5%", top: "41%" },
  ];
  const fills = ["bg-navy text-white", "bg-[#F1F3F6] text-navy", "bg-[#4A5A70] text-white", "bg-[#0a5c8a] text-white"];
  const badge = ["bg-[#D9DEE5] text-navy", "bg-navy text-white", "bg-[#D9DEE5] text-navy", "bg-white text-navy"];
  const icon = [
    { left: "8%", top: "16%" },
    { left: "86%", top: "16%" },
    { left: "24%", top: "80%" },
    { left: "63.5%", top: "90%" },
  ];
  return (
    <div className="relative w-full max-w-[600px] mx-auto aspect-[1/0.86]" role="img" aria-label={items.map((i) => `${i.title}: ${i.text}`).join(" ")}>
      {items.slice(0, 4).map((it, i) => (
        <div
          key={it.title}
          className={`absolute flex flex-col items-center justify-center text-center gap-[4%] px-[5%] ${fills[i]}`}
          style={{ ...pos[i], width: "32.5%", height: "43.6%", clipPath: HEX }}
        >
          <span className={`block w-[26%] h-[3px] ${i === 1 ? "bg-navy" : "bg-white/80"}`} />
          <span className="font-semibold leading-tight text-[12px] sm:text-base md:text-lg">{it.title}</span>
          <span className="italic leading-snug opacity-85 text-[8.5px] sm:text-[11px] md:text-[12px] max-w-[88%]">{it.text}</span>
        </div>
      ))}
      {items.slice(0, 4).map((_, i) => (
        <div
          key={`b${i}`}
          className={`absolute w-[8.5%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-bold text-xs sm:text-lg md:text-xl shadow ${badge[i]}`}
          style={{ left: `calc(${pos[i].left} + 7%)`, top: `calc(${pos[i].top} + 6%)` }}
        >
          {i + 1}
        </div>
      ))}
      {items.slice(0, 4).map((_, i) => {
        const Icon = PILLAR_ICONS[i];
        return (
          <div
            key={`i${i}`}
            className="absolute w-[9.5%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg shadow-medium-blue/20 ring-[3px] ring-white flex items-center justify-center"
            style={icon[i]}
          >
            <Icon className="w-1/2 h-1/2 text-medium-blue" strokeWidth={1.75} />
          </div>
        );
      })}
    </div>
  );
}

const IND_ICONS: [RegExp, LucideIcon][] = [
  [/invest/i, LineChart],
  [/retire/i, PiggyBank],
  [/tax/i, Receipt],
  [/workplace|benefit/i, Briefcase],
  [/estate/i, TreePine],
  [/decision/i, Scale],
];

/** Individuals & Families: the pieces of a financial life converging into one coordinated strategy. */
export function ConvergeIntoOne({ pieces, result }: { pieces: string[]; result: string }) {
  const n = pieces.length;
  return (
    <div className="relative w-full h-full flex flex-col justify-between px-5 sm:px-8 py-7" role="img" aria-label={`${pieces.join(", ")}: ${result}`}>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {pieces.map((p) => {
          const Icon = IND_ICONS.find(([re]) => re.test(p))?.[1] ?? Landmark;
          return (
            <div key={p} className="flex flex-col items-center gap-1.5 rounded-[10px] bg-white/10 border border-white/15 px-2 py-3 text-center">
              <Icon className="w-5 h-5 text-light-blue" strokeWidth={1.7} />
              <span className="text-white text-[11px] sm:text-[13px] leading-tight">{p}</span>
            </div>
          );
        })}
      </div>
      <svg viewBox="0 0 300 60" preserveAspectRatio="none" className="w-full h-12 sm:h-14" aria-hidden>
        {Array.from({ length: n }).map((_, i) => {
          const x = 25 + (250 / Math.max(n - 1, 1)) * i;
          return <path key={i} d={`M ${x} 0 C ${x} 30, 150 25, 150 58`} fill="none" stroke="#7db7d8" strokeWidth="1.2" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />;
        })}
      </svg>
      <div className="mx-auto flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-xl shadow-black/20">
        <span className="w-7 aspect-[0.866] bg-navy" style={{ clipPath: HEX }} />
        <span className="text-navy font-semibold text-sm sm:text-base">{result}</span>
      </div>
    </div>
  );
}

const BIZ_ICONS: [RegExp, LucideIcon][] = [
  [/governance/i, Landmark],
  [/invest/i, LineChart],
  [/benchmark/i, BarChart3],
  [/design/i, PenTool],
  [/educat/i, GraduationCap],
];

/** Businesses: independent fiduciary guidance as the beam, held up by the plan's five pillars. */
export function GuidancePillars({ beam, pillars }: { beam: string; pillars: string[] }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-5 sm:px-8 py-7" role="img" aria-label={`${beam}: ${pillars.join(", ")}`}>
      {/* pediment */}
      <div className="mx-auto w-[86%]">
        <svg viewBox="0 0 300 40" className="w-full h-auto block" aria-hidden>
          <polygon points="150,2 296,38 4,38" fill="#ffffff" fillOpacity="0.12" stroke="#ffffff" strokeOpacity="0.35" />
        </svg>
        <div className="bg-white text-navy rounded-[4px] text-center font-semibold text-sm sm:text-base py-2.5 shadow-lg">{beam}</div>
      </div>
      <div className="mx-auto w-[80%] grid gap-2 sm:gap-3 mt-3" style={{ gridTemplateColumns: `repeat(${pillars.length}, minmax(0, 1fr))` }}>
        {pillars.map((p) => {
          const Icon = BIZ_ICONS.find(([re]) => re.test(p))?.[1] ?? Landmark;
          return (
            <div key={p} className="h-24 sm:h-32 rounded-t-[3px] bg-gradient-to-b from-white/25 to-white/5 border-x border-white/20 flex items-start justify-center pt-3">
              <Icon className="w-5 h-5 text-light-blue" strokeWidth={1.7} />
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-[90%] h-2 rounded-full bg-white/30" aria-hidden />
      <div className="mx-auto w-[80%] grid gap-2 sm:gap-3 mt-2" style={{ gridTemplateColumns: `repeat(${pillars.length}, minmax(0, 1fr))` }}>
        {pillars.map((p) => (
          <span key={p} className="text-white text-[10px] sm:text-xs leading-tight text-center">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
