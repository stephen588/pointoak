import { Briefcase, Landmark, LineChart, PiggyBank, Receipt, Route, Scale, Sprout, TreePine, Hourglass, BarChart3, GraduationCap, PenTool, ShieldCheck, type LucideIcon } from "lucide-react";

// Resources page graphics. Labels come from resources.json and the article pages.

export const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

const ARTICLE_THEMES: [RegExp, { icon: LucideIcon; from: string; to: string }][] = [
  [/rollover/i, { icon: Route, from: "#003754", to: "#0a6496" }],
  [/withdrawal|income/i, { icon: PiggyBank, from: "#2f4560", to: "#4A5A70" }],
  [/social security/i, { icon: Landmark, from: "#014a70", to: "#00a7ef" }],
  [/roth/i, { icon: Receipt, from: "#0a5c8a", to: "#3a8fc0" }],
  [/alternative/i, { icon: Sprout, from: "#1b2f47", to: "#0a6496" }],
  [/ria|wirehouse/i, { icon: Scale, from: "#003754", to: "#4A5A70" }],
];
export const articleTheme = (t: string) => ARTICLE_THEMES.find(([re]) => re.test(t))?.[1] ?? { icon: LineChart, from: "#003754", to: "#0a6496" };

/** Generated cover art for an article: gradient, hexagon lattice, topic icon. */
export function ArticleCover({ title, className = "" }: { title: string; className?: string }) {
  const { icon: Icon, from, to } = articleTheme(title);
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }} aria-hidden>
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
        {Array.from({ length: 5 }).flatMap((_, r) =>
          Array.from({ length: 9 }).map((__, c) => {
            const x = c * 26 + (r % 2 ? 13 : 0) - 10;
            const y = r * 22.5 - 6;
            const pts = [0, 60, 120, 180, 240, 300].map((a) => {
              const rad = ((a - 90) * Math.PI) / 180;
              return `${x + 12 * Math.cos(rad)},${y + 12 * Math.sin(rad)}`;
            });
            return <polygon key={`${r}-${c}`} points={pts.join(" ")} fill="none" stroke="#ffffff" strokeOpacity={(r + c) % 4 === 0 ? 0.22 : 0.08} strokeWidth="0.6" />;
          }),
        )}
      </svg>
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[30%] max-w-[120px] aspect-[0.866] bg-white/15 backdrop-blur-[1px] flex items-center justify-center" style={{ clipPath: HEX }}>
        <Icon className="w-[42%] h-[42%] text-white" strokeWidth={1.5} />
      </div>
    </div>
  );
}

const TOPIC_ICONS: [RegExp, LucideIcon][] = [
  [/investing|portfolio/i, LineChart],
  [/retirement & income/i, PiggyBank],
  [/rollover|career/i, Route],
  [/tax/i, Receipt],
  [/executive/i, Briefcase],
  [/estate|legacy/i, TreePine],
  [/fiduciary/i, ShieldCheck],
  [/fees|benchmark/i, BarChart3],
  [/oversight/i, LineChart],
  [/target date/i, Hourglass],
  [/plan design/i, PenTool],
  [/participant/i, GraduationCap],
];
export const topicIcon = (t: string) => TOPIC_ICONS.find(([re]) => re.test(t))?.[1] ?? LineChart;

/** Which topics an article belongs to (by words shared between the article title and the topic's own description). */
const TOPIC_MATCH: [RegExp, RegExp][] = [
  [/rollover/i, /rollover/i],
  [/roth/i, /roth/i],
  [/withdrawal|retirement income/i, /withdrawal|retirement income/i],
  [/social security/i, /social security/i],
  [/alternative/i, /alternative/i],
  [/ria|wirehouse/i, /portfolio construction|investment management/i],
];
export function topicsFor(articleTitle: string, topics: { title: string; text: string }[]) {
  const rules = TOPIC_MATCH.filter(([a]) => a.test(articleTitle)).map(([, t]) => t);
  return topics.filter((t) => rules.some((re) => re.test(t.text) || re.test(t.title)));
}
