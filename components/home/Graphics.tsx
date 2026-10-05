import {
  Briefcase,
  Building2,
  Landmark,
  PiggyBank,
  Receipt,
  Route,
  TreePine,
  Users,
  Wallet,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

// Homepage diagrams in PointOak's hexagon / dashed-line style. Every label is a phrase from the
// homepage copy (home.json); nothing here adds claims.

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

function Hex({ className, children, style }: { className?: string; children?: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className={`flex items-center justify-center text-center ${className ?? ""}`} style={{ clipPath: HEX, ...style }}>
      {children}
    </div>
  );
}

const HUB_ICONS: [RegExp, LucideIcon][] = [
  [/retirement account/i, PiggyBank],
  [/tax/i, Receipt],
  [/social security/i, Landmark],
  [/pension/i, Wallet],
  [/workplace|benefit/i, Briefcase],
  [/estate/i, TreePine],
  [/family/i, Users],
  [/transition/i, Route],
];

/** Hub-and-spoke: "your investments" in the middle, the rest of the financial picture around it. */
export function FinancialLifeHub({ center, spokes }: { center: string; spokes: string[] }) {
  const n = spokes.length;
  const pts = spokes.map((_, i) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180);
    return { x: 50 + 39 * Math.cos(a), y: 50 + 39 * Math.sin(a) };
  });
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square" role="img" aria-label={`${center}: ${spokes.join(", ")}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
        <circle cx="50" cy="50" r="39" fill="none" stroke="#003754" strokeOpacity="0.12" strokeWidth="0.4" />
        {pts.map((p, i) => (
          <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke="#016ba4" strokeOpacity="0.45" strokeWidth="0.35" strokeDasharray="1.2 1" />
        ))}
      </svg>
      <Hex className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-[0.866] bg-navy text-white px-[3%]">
        <span className="font-semibold leading-tight text-[11px] sm:text-sm md:text-base">{center}</span>
      </Hex>
      {spokes.map((label, i) => {
        const Icon = HUB_ICONS.find(([re]) => re.test(label))?.[1] ?? UserCheck;
        return (
          <div
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 w-[24%]"
            style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%` }}
          >
            <Hex className={`w-[46%] aspect-[0.866] ${i % 2 ? "bg-[#4A5A70]" : "bg-white"} shadow`}>
              <Icon className={`w-1/2 h-1/2 ${i % 2 ? "text-white" : "text-medium-blue"}`} strokeWidth={1.7} />
            </Hex>
            <span className="text-navy font-medium leading-tight text-center text-[9px] sm:text-xs md:text-[13px]">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

/** Three hexagons flowing into one: "Public markets + Private markets + Alternative strategies → One coordinated portfolio." */
export function ConvergeHexes({ inputs, result }: { inputs: string[]; result: string }) {
  return (
    <div className="w-full max-w-[520px] mx-auto" role="img" aria-label={`${inputs.join(" + ")}: ${result}`}>
      <div className="grid grid-cols-3 gap-[4%]">
        {inputs.map((t, i) => (
          <Hex key={t} className={`aspect-[0.866] px-[8%] ${["bg-white/10 border-white", "bg-white/20", "bg-medium-blue/70"][i]}`}>
            <span className="text-white font-semibold leading-tight text-[11px] sm:text-sm md:text-base">{t}</span>
          </Hex>
        ))}
      </div>
      <svg viewBox="0 0 300 70" className="w-full h-auto -my-1" aria-hidden>
        {[50, 150, 250].map((x) => (
          <path key={x} d={`M ${x} 4 C ${x} 40, 150 30, 150 66`} fill="none" stroke="#7db7d8" strokeWidth="1.5" strokeDasharray="4 4" />
        ))}
        <circle cx="150" cy="66" r="3.5" fill="#00a7ef" />
      </svg>
      <Hex className="mx-auto w-[42%] aspect-[0.866] bg-white px-[6%]">
        <span className="text-navy font-semibold leading-tight text-sm sm:text-base md:text-lg">{result}</span>
      </Hex>
    </div>
  );
}

/** Employer plans on one side, private wealth on the other, joined by the decisions that cross between them. */
export function BothSidesBridge({ left, right, bridge }: { left: string; right: string; bridge: string[] }) {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-2" role="img" aria-label={`${left} and ${right}: ${bridge.join(", ")}`}>
      <Hex className="w-[46%] sm:w-[30%] aspect-[0.866] bg-navy text-white px-[4%] flex-shrink-0">
        <span className="flex flex-col items-center gap-2">
          <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-light-blue" strokeWidth={1.6} />
          <span className="font-semibold leading-tight text-xs sm:text-sm md:text-base">{left}</span>
        </span>
      </Hex>
      <div className="relative flex-1 w-full sm:w-auto flex flex-col gap-2 py-2">
        <div aria-hidden className="absolute left-1/2 sm:left-0 sm:right-0 top-0 bottom-0 sm:top-1/2 sm:bottom-auto w-0 sm:w-auto border-l-2 sm:border-l-0 sm:border-t-2 border-dashed border-navy/25" />
        {bridge.map((b) => (
          <span key={b} className="relative mx-auto px-3 py-1.5 rounded-full bg-white border border-[#D6E4F5] text-navy text-xs md:text-sm font-medium whitespace-nowrap shadow-sm">
            {b}
          </span>
        ))}
      </div>
      <Hex className="w-[46%] sm:w-[30%] aspect-[0.866] bg-[#4A5A70] text-white px-[4%] flex-shrink-0">
        <span className="flex flex-col items-center gap-2">
          <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-light-blue" strokeWidth={1.6} />
          <span className="font-semibold leading-tight text-xs sm:text-sm md:text-base">{right}</span>
        </span>
      </Hex>
    </div>
  );
}
