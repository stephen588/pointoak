import { Compass, LineChart, PiggyBank, ShieldCheck, Sprout, TrendingUp, Route, TreePine, Users, Briefcase, Scale, FileText, type LucideIcon } from "lucide-react";
import PointOakSymbol from "@/components/brand/PointOakSymbol";

// Wealth Management page graphics. Every label is a phrase from services-wealth-management.json.

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

const ORBIT_ICONS: [RegExp, LucideIcon][] = [
  [/fiduciar/i, ShieldCheck],
  [/investment/i, LineChart],
  [/financial planning/i, Compass],
  [/retire|tax/i, PiggyBank],
];

/** Hero: the PointOak symbol with the hero's four focus areas on a slowly turning orbit. */
export function OrbitHero({ items }: { items: string[] }) {
  const pos = [
    { left: "50%", top: "6%" },
    { left: "94%", top: "50%" },
    { left: "50%", top: "94%" },
    { left: "6%", top: "50%" },
  ];
  return (
    <div className="relative w-[74%] sm:w-full max-w-[460px] mx-auto my-12 sm:my-0 aspect-square" role="img" aria-label={items.join(", ")}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
        <circle cx="50" cy="50" r="44" fill="none" stroke="#7db7d8" strokeOpacity="0.45" strokeWidth="0.4" strokeDasharray="1.6 1.6" className="orbit-dash" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="0.35" />
        <circle cx="50" cy="50" r="22" fill="#ffffff" fillOpacity="0.04" />
      </svg>
      <div className="absolute inset-[18%] orbit-spin" aria-hidden>
        <span className="absolute left-1/2 -top-1 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-bright-blue shadow-[0_0_12px_#00a7ef]" />
        <span className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-white/70" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-[0.866] bg-white flex items-center justify-center shadow-2xl shadow-black/30" style={{ clipPath: HEX }}>
        <PointOakSymbol className="w-[56%] h-auto" />
      </div>
      {items.slice(0, 4).map((t, i) => {
        const Icon = ORBIT_ICONS.find(([re]) => re.test(t))?.[1] ?? Compass;
        return (
          <div key={t} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 sm:gap-2 w-[42%] sm:w-[36%] text-center" style={pos[i]}>
            <span className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-bright-blue/90 ring-4 ring-white/10 flex items-center justify-center shadow-lg shadow-black/20">
              <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={1.7} />
            </span>
            <span className="text-white text-[10.5px] sm:text-sm font-medium leading-tight">{t}</span>
          </div>
        );
      })}
    </div>
  );
}

const PROMISE_ICONS: [RegExp, LucideIcon][] = [
  [/fiduciar/i, ShieldCheck],
  [/fee/i, FileText],
  [/independ/i, Scale],
  [/personal/i, Users],
];

/** The four relationship points as a compact, light row with icons. */
export function PromiseBand({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[14px] border border-[#E3E8EE] bg-white shadow-[0_1px_2px_rgba(0,55,84,0.04)] divide-y sm:divide-y-0 lg:divide-x divide-[#E3E8EE]">
      {items.map((it, i) => {
        const Icon = PROMISE_ICONS.find(([re]) => re.test(it.title))?.[1] ?? ShieldCheck;
        return (
          <div key={it.title} className={`flex items-start gap-4 p-5 md:p-6 ${i % 2 === 1 ? "sm:border-l lg:border-l-0 border-[#E3E8EE]" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0 border-[#E3E8EE]" : ""}`}>
            <span
              className={`w-11 aspect-[0.866] flex-shrink-0 flex items-center justify-center ${["bg-navy", "bg-[#4A5A70]", "bg-[#0a5c8a]", "bg-bright-blue"][i % 4]}`}
              style={{ clipPath: HEX }}
            >
              <Icon className="w-5 h-5 text-white" strokeWidth={1.7} />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-navy text-lg font-semibold leading-tight">{it.title}</span>
              <span className="text-text-gray text-sm leading-snug">{it.text}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

const STAGE_ICONS: LucideIcon[] = [Sprout, TrendingUp, Compass, Route, TreePine];

/** BUILD → GROW → PREPARE → TRANSITION → PRESERVE & TRANSFER on a rising curve. */
export function StageCurve({ text }: { text: string }) {
  const stages = text.split("→").map((s) => s.trim()).filter(Boolean);
  // points along the curve (viewBox 0 0 1000 300): rise, then level off
  const pts = [
    { x: 80, y: 250 },
    { x: 290, y: 190 },
    { x: 500, y: 120 },
    { x: 710, y: 75 },
    { x: 920, y: 60 },
  ];
  const d = "M 0 275 C 150 260, 220 215, 290 190 S 420 140, 500 120 S 640 82, 710 75 S 860 62, 1000 58";
  return (
    <div className="relative w-full" role="img" aria-label={text}>
      <div className="relative w-full aspect-[1000/300] hidden md:block">
        <svg viewBox="0 0 1000 300" className="absolute inset-0 w-full h-full" aria-hidden>
          <defs>
            <linearGradient id="stageFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#00a7ef" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#00a7ef" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${d} L 1000 300 L 0 300 Z`} fill="url(#stageFill)" />
          <path d={d} fill="none" stroke="#003754" strokeWidth="4" strokeLinecap="round"/>
          {pts.map((p) => (
            <line key={p.x} x1={p.x} y1={p.y} x2={p.x} y2="300" stroke="#003754" strokeOpacity="0.15" strokeDasharray="4 5" />
          ))}
        </svg>
        {stages.map((s, i) => {
          const Icon = STAGE_ICONS[i % STAGE_ICONS.length];
          const p = pts[i] ?? pts[pts.length - 1];
          return (
            <div key={s} className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center gap-2 pb-3" style={{ left: `${p.x / 10}%`, top: `${(p.y / 300) * 100}%` }}>
              <span className="text-navy text-sm font-semibold tracking-wide whitespace-nowrap">{s}</span>
              <span
                className={`w-14 aspect-[0.866] flex items-center justify-center ${i === stages.length - 1 ? "bg-bright-blue" : i % 2 ? "bg-[#4A5A70]" : "bg-navy"}`}
                style={{ clipPath: HEX }}
              >
                <Icon className="w-6 h-6 text-white" strokeWidth={1.7} />
              </span>
            </div>
          );
        })}
      </div>
      <span className="sr-only">{text}</span>
      {/* phones: stacked steps on a vertical line */}
      <ol className="md:hidden relative flex flex-col gap-5 pl-2">
        <span aria-hidden className="absolute left-[30px] top-4 bottom-4 border-l-2 border-dashed border-navy/20" />
        {stages.map((s, i) => {
          const Icon = STAGE_ICONS[i % STAGE_ICONS.length];
          return (
            <li key={s} className="relative flex items-center gap-4">
              <span className={`w-12 aspect-[0.866] flex items-center justify-center ${i % 2 ? "bg-[#4A5A70]" : "bg-navy"}`} style={{ clipPath: HEX }}>
                <Icon className="w-5 h-5 text-white" strokeWidth={1.7} />
              </span>
              <span className="text-navy font-semibold tracking-wide">{s}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Traditional investments at the core, alternatives on the ring around them. */
export function BeyondRings({ core, ring }: { core: string; ring: string[] }) {
  const n = ring.length;
  return (
    <div className="relative w-full max-w-[460px] mx-auto aspect-square" role="img" aria-label={`${core}; ${ring.join(", ")}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
        <circle cx="50" cy="50" r="46" fill="#00a7ef" fillOpacity="0.06" stroke="#00a7ef" strokeOpacity="0.35" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
        <circle cx="50" cy="50" r="27" fill="#003754" />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] text-center">
        <span className="text-white text-sm sm:text-lg font-semibold leading-tight">{core}</span>
      </div>
      {ring.map((r, i) => {
        const a = (-90 + (360 / n) * i) * (Math.PI / 180);
        return (
          <span
            key={r}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border border-[#D6E4F5] px-3 py-1.5 text-navy text-[11px] sm:text-[13px] font-medium whitespace-nowrap shadow-md"
            style={{ left: `${50 + 40 * Math.cos(a)}%`, top: `${50 + 40 * Math.sin(a)}%` }}
          >
            {r}
          </span>
        );
      })}
    </div>
  );
}

const PRO_ICONS: [RegExp, LucideIcon][] = [
  [/cpa/i, FileText],
  [/attorney/i, Scale],
  [/professional/i, Users],
];

/** PointOak coordinating with the client's other professionals. */
export function CoordinationGraphic({ parties }: { parties: string[] }) {
  const pos = [
    { left: "16%", top: "18%" },
    { left: "84%", top: "18%" },
    { left: "50%", top: "88%" },
  ];
  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-[1/0.9]" role="img" aria-label={parties.join(", ")}>
      <svg viewBox="0 0 100 90" className="absolute inset-0 w-full h-full" aria-hidden>
        <polygon points="16,16 84,16 50,79" fill="none" stroke="#003754" strokeOpacity="0.12" strokeWidth="0.5" />
        {[[16, 16], [84, 16], [50, 79]].map(([x, y]) => (
          <line key={`${x}${y}`} x1="50" y1="40" x2={x} y2={y} stroke="#016ba4" strokeOpacity="0.55" strokeWidth="0.5" strokeDasharray="1.6 1.4" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-[0.866] bg-navy flex items-center justify-center" style={{ clipPath: HEX }}>
        <PointOakSymbol mono="#ffffff" className="w-[50%] h-auto" />
      </div>
      {parties.slice(0, 3).map((p, i) => {
        const Icon = PRO_ICONS.find(([re]) => re.test(p))?.[1] ?? Briefcase;
        return (
          <div key={p} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 w-[34%]" style={pos[i]}>
            <span className="w-14 h-14 rounded-full bg-white shadow-lg shadow-navy/10 border border-[#E3E8EE] flex items-center justify-center">
              <Icon className="w-6 h-6 text-medium-blue" strokeWidth={1.7} />
            </span>
            <span className="text-navy text-sm font-medium text-center leading-tight">{p}</span>
          </div>
        );
      })}
    </div>
  );
}
