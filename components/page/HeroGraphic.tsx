import type { LucideIcon } from "lucide-react";
import PointOakSymbol from "@/components/brand/PointOakSymbol";

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

/**
 * Header graphic for inner pages (replaces stock photos): the PointOak symbol in a central hexagon,
 * ringed by hexagon icons for the page's own topics, joined by dashed lines. Works on the dark hero.
 */
export default function HeroGraphic({ icons, tone = "dark" }: { icons: LucideIcon[]; tone?: "dark" | "light" }) {
  const ring = icons.slice(0, 6);
  const n = Math.max(ring.length, 1);
  const pts = ring.map((_, i) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180);
    return { x: 50 + 37 * Math.cos(a), y: 50 + 37 * Math.sin(a) };
  });
  const dark = tone === "dark";
  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square" aria-hidden>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <polygon
          points="50,6 88,28 88,72 50,94 12,72 12,28"
          fill="none"
          stroke={dark ? "#ffffff" : "#003754"}
          strokeOpacity="0.18"
          strokeWidth="0.4"
        />
        {pts.map((p, i) => (
          <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke={dark ? "#7db7d8" : "#016ba4"} strokeOpacity="0.6" strokeWidth="0.4" strokeDasharray="1.4 1.2" />
        ))}
        {pts.map((p, i) => {
          const q = pts[(i + 1) % pts.length];
          return <line key={`r${i}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={dark ? "#ffffff" : "#003754"} strokeOpacity="0.12" strokeWidth="0.3" />;
        })}
      </svg>
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-[0.866] flex items-center justify-center ${dark ? "bg-white" : "bg-navy"}`}
        style={{ clipPath: HEX }}
      >
        <PointOakSymbol className="w-[52%] h-auto" mono={dark ? undefined : "#ffffff"} />
      </div>
      {ring.map((Icon, i) => (
        <div
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 w-[19%] aspect-[0.866] flex items-center justify-center ${
            dark ? (i % 2 ? "bg-white/15" : "bg-[#0a5c8a]") : i % 2 ? "bg-[#4A5A70]" : "bg-[#DCEAF8]"
          }`}
          style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%`, clipPath: HEX }}
        >
          <Icon className={`w-[44%] h-[44%] ${dark || i % 2 ? "text-white" : "text-navy"}`} strokeWidth={1.6} />
        </div>
      ))}
    </div>
  );
}
