import {
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Coins,
  Compass,
  FileText,
  GraduationCap,
  HandCoins,
  Handshake,
  HeartPulse,
  Hourglass,
  Landmark,
  Layers,
  Lightbulb,
  LineChart,
  ListChecks,
  Lock,
  Megaphone,
  MessageSquare,
  Network,
  PenTool,
  PiggyBank,
  Receipt,
  RefreshCw,
  Route,
  Scale,
  Search,
  ShieldCheck,
  Sprout,
  Target,
  TreePine,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Picks a card icon from words in the card's title. First match wins, so the more specific
// phrases sit above the general ones. Purely decorative: the copy itself is unchanged.
const RULES: [RegExp, LucideIcon][] = [
  [/cyber|security|data protection|secure/, Lock],
  [/target date|tdf/, Hourglass],
  [/glide path/, Route],
  [/automatic|auto-|escalat/, Zap],
  [/match|contribution/, HandCoins],
  [/rfp|provider|vendor|recordkeeper/, ClipboardList],
  [/benchmark|fee|cost|pricing/, BarChart3],
  [/3\(21\)|3\(38\)|fiduciar/, ShieldCheck],
  [/governance|committee|oversight/, Landmark],
  [/document|record|minutes|file|ips|policy statement/, FileText],
  [/menu|lineup|structure/, Layers],
  [/methodolog|analysis|research|due diligence|evaluat/, Search],
  [/monitor|review|ongoing/, RefreshCw],
  [/wellness|health/, HeartPulse],
  [/communicat|message|notice/, Megaphone],
  [/educat|workshop|learn|guidance|seminar/, GraduationCap],
  [/participant|employee|workforce|people/, Users],
  [/business|employer|sponsor|company|organization/, Building2],
  [/social security|pension|benefit/, Landmark],
  [/executive|equity|rsu|stock|compensation/, Briefcase],
  [/estate|legacy|beneficiar|heir|transfer|family/, TreePine],
  [/tax/, Receipt],
  [/rollover|roth|convers|ira|401\(k\)/, Route],
  [/income|withdraw|paycheck|spending|cash flow/, Wallet],
  [/retire/, PiggyBank],
  [/alternative|private|real asset|real estate/, Sprout],
  [/invest|portfolio|market|allocation|asset/, LineChart],
  [/plan design|design|customiz|tailor|personaliz/, PenTool],
  [/planning|plan\b|goal|strategy|roadmap/, Compass],
  [/independen|objective|unbiased|open architecture/, Scale],
  [/access|relationship|partner|advisor|adviser|team|personal/, Handshake],
  [/experience|expert|specialist|since/, Award],
  [/coordinat|integrat|together|connected|holistic/, Network],
  [/understand|clear|plain|simple|confiden/, Lightbulb],
  [/growth|grow|build|save|saving|readiness/, TrendingUp],
  [/time|timing|when|schedule|deadline/, Calendar],
  [/checklist|step|process|implement/, ListChecks],
  [/consult|conversation|meeting|question/, MessageSquare],
  [/protect|risk|safe/, ShieldCheck],
  [/client|you|individual/, UserCheck],
  [/money|wealth|coin|dollar/, Coins],
  [/insight|article|guide|resource/, BookOpen],
  [/value|result|outcome|better/, Target],
  [/foundation|financial|budget/, PiggyBank],
];

export function cardIcon(title: string): LucideIcon {
  const t = title.toLowerCase();
  for (const [re, icon] of RULES) if (re.test(t)) return icon;
  return CheckCircle2;
}

const SPARES: LucideIcon[] = [Target, Compass, Lightbulb, Layers, Award, Network, ListChecks, TrendingUp, Handshake, Scale];

/** Icons for a whole grid, avoiding repeats: each card takes its best match not already used. */
export function cardIcons(titles: string[]): LucideIcon[] {
  const used = new Set<LucideIcon>();
  return titles.map((title) => {
    const t = title.toLowerCase();
    const pick =
      RULES.find(([re, icon]) => re.test(t) && !used.has(icon))?.[1] ?? SPARES.find((i) => !used.has(i)) ?? CheckCircle2;
    used.add(pick);
    return pick;
  });
}

