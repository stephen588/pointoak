import Link from "next/link";
import {
  BarChart3,
  ClipboardList,
  FileText,
  GraduationCap,
  Hourglass,
  Landmark,
  LineChart,
  PenTool,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import PointOakSymbol from "@/components/brand/PointOakSymbol";

// Retirement Plan Consulting graphics. Every label is a phrase from corporate-retirement-plans.json.

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

const DECISION_ICONS: [RegExp, LucideIcon][] = [
  [/fiduciar/i, ShieldCheck],
  [/invest/i, LineChart],
  [/provider/i, ClipboardList],
  [/design/i, PenTool],
  [/participant/i, Users],
];

/** Hero: the retirement plan as a blueprint, wired to the five kinds of decisions it involves. */
export function PlanBlueprint({ center, decisions, audiences }: { center: string; decisions: string[]; audiences: string[] }) {
  const n = decisions.length;
  const pts = decisions.map((_, i) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180);
    return { x: 50 + 38 * Math.cos(a), y: 50 + 38 * Math.sin(a) };
  });
  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-[78%] sm:w-full max-w-[440px] mx-auto my-8 sm:my-0 aspect-square" role="img" aria-label={`${center}: ${decisions.join(", ")}`}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
          <polygon
            points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="#ffffff"
            fillOpacity="0.04"
            stroke="#ffffff"
            strokeOpacity="0.25"
            strokeWidth="0.4"
          />
          {pts.map((p, i) => (
            <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke="#7db7d8" strokeOpacity="0.8" strokeWidth="0.4" strokeDasharray="1.4 1.2" className="orbit-dash" />
          ))}
          {/* blueprint corner ticks */}
          {[
            [6, 6, 12, 6, 6, 12],
            [94, 6, 88, 6, 94, 12],
            [6, 94, 12, 94, 6, 88],
            [94, 94, 88, 94, 94, 88],
          ].map(([x1, y1, x2, y2, x3, y3], i) => (
            <polyline key={i} points={`${x2},${y2} ${x1},${y1} ${x3},${y3}`} fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="0.4" />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-[0.866] bg-white flex flex-col items-center justify-center gap-1 px-3 text-center shadow-2xl shadow-black/30" style={{ clipPath: HEX }}>
          <PointOakSymbol className="w-[34%] h-auto" />
          <span className="text-navy text-[11px] sm:text-sm font-semibold leading-tight">{center}</span>
        </div>
        {decisions.map((d, i) => {
          const Icon = DECISION_ICONS.find(([re]) => re.test(d))?.[1] ?? Landmark;
          return (
            <div key={d} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 w-[30%] text-center" style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%` }}>
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] bg-[#0a5c8a] border border-white/25 flex items-center justify-center shadow-lg shadow-black/20">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.7} />
              </span>
              <span className="text-white text-[11px] sm:text-[13px] font-medium leading-tight">{d}</span>
            </div>
          );
        })}
      </div>
      {audiences.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-2">
          {audiences.map((a) => (
            <li key={a} className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-white text-xs sm:text-sm">
              {a}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const SERVICE_ICONS: [RegExp, LucideIcon][] = [
  [/participant|education/i, GraduationCap],
  [/fiduciary|governance/i, ShieldCheck],
  [/benchmark|evaluation/i, BarChart3],
  [/investment analysis|monitoring/i, LineChart],
  [/target date|tdf/i, Hourglass],
  [/plan design/i, PenTool],
];
export const serviceIcon = (t: string) => SERVICE_ICONS.find(([re]) => re.test(t))?.[1] ?? FileText;
export const SERVICE_COLORS = ["bg-navy", "bg-[#0a5c8a]", "bg-[#4A5A70]", "bg-bright-blue", "bg-[#2f4560]", "bg-medium-blue"];

/** Six services as a honeycomb around the PointOak symbol; each hexagon links to its page. */
export function ServiceHoneycomb({ items }: { items: { title: string; href?: string }[] }) {
  // flower: center + 6 around (pointy-top hexes), coordinates in % of a square box
  const W = 30; // hex width %
  // pointy-top neighbors sit at (±W, 0) and (±W/2, ±0.75·H) from the center, with a small gap; clockwise from top-left
  const H = W / 0.866;
  const g = 1.05;
  const pos = [
    { x: 50 - (W / 2) * g, y: 50 - 0.75 * H * g },
    { x: 50 + (W / 2) * g, y: 50 - 0.75 * H * g },
    { x: 50 + W * g, y: 50 },
    { x: 50 + (W / 2) * g, y: 50 + 0.75 * H * g },
    { x: 50 - (W / 2) * g, y: 50 + 0.75 * H * g },
    { x: 50 - W * g, y: 50 },
  ];
  return (
    <div className="relative w-full max-w-[460px] mx-auto aspect-square" role="navigation" aria-label="Retirement plan consulting services">
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 bg-white flex items-center justify-center shadow-xl shadow-navy/15"
        style={{ left: "50%", top: "50%", width: `${W}%`, aspectRatio: "0.866", clipPath: HEX }}
      >
        <PointOakSymbol className="w-[52%] h-auto" />
      </div>
      {items.slice(0, 6).map((it, i) => {
        const Icon = serviceIcon(it.title);
        const inner = (
          <>
            <span className="absolute top-[14%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/90 text-navy text-xs font-bold flex items-center justify-center">{i + 1}</span>
            <Icon className="w-[24%] h-auto text-white mt-3" strokeWidth={1.6} />
            <span className="text-white text-[9px] sm:text-[11px] md:text-xs font-semibold leading-tight px-[12%] text-center">{it.title}</span>
          </>
        );
        const cls = `absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-1.5 transition-transform hover:scale-[1.06] ${SERVICE_COLORS[i]}`;
        const style = { left: `${pos[i].x}%`, top: `${pos[i].y}%`, width: `${W}%`, aspectRatio: "0.866", clipPath: HEX } as React.CSSProperties;
        return it.href ? (
          <Link key={it.title} href={it.href} className={cls} style={style}>
            {inner}
          </Link>
        ) : (
          <div key={it.title} className={cls} style={style}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

/** Big-number highlights pulled from the "Why Choose PointOak" copy. */
export function HighlightStat({ big, small }: { big: string; small: string }) {
  return (
    <div className="flex flex-col gap-2 p-6 md:p-8 border-white/15">
      <span className="text-white text-4xl md:text-5xl font-semibold tracking-tight leading-none">{big}</span>
      <span className="text-white/75 text-sm md:text-[15px] leading-snug">{small}</span>
    </div>
  );
}
