// Qualifying form: questions and routing, exactly as sent to Darsh on 2026-10-05 ("Re: Updates").
// Used by the form (client) and /api/contact (server); the server's answer is the one that counts.
// Open items from that email (his answers will change these constants): asset thresholds,
// services not offered, the three Calendly links, where business inquiries go, inbox recipient,
// email-list consent language.

export const NEED_OPTIONS = [
  { value: "personal", label: "Managing my personal wealth or financial plan" },
  { value: "business", label: "A retirement plan for my business" },
  { value: "participant", label: "I'm an employee in a retirement plan PointOak advises" },
  { value: "tax-prep", label: "Tax preparation only" },
  { value: "insurance", label: "Insurance only" },
  { value: "budgeting", label: "Budgeting and debt help" },
  { value: "other", label: "Something else" },
] as const;
export type Need = (typeof NEED_OPTIONS)[number]["value"];

/** Services PointOak doesn't offer: these always go to the inbox. */
export const NOT_OFFERED: Need[] = ["tax-prep", "insurance", "budgeting"];

export const ASSET_OPTIONS = [
  { value: "under-250k", label: "Under $250,000", min: 0 },
  { value: "250k-500k", label: "$250,000 – $500,000", min: 250_000 },
  { value: "500k-1m", label: "$500,000 – $1,000,000", min: 500_000 },
  { value: "1m-3m", label: "$1,000,000 – $3,000,000", min: 1_000_000 },
  { value: "3m-plus", label: "$3,000,000+", min: 3_000_000 },
] as const;

export const PROMPT_OPTIONS = [
  "Retiring",
  "Changing jobs",
  "Executive compensation",
  "Inheritance or sale of a business",
  "Second opinion",
  "Other",
] as const;

export const TIMING_OPTIONS = ["Within 3 months", "3 to 6 months", "Just exploring"] as const;

/** Asset thresholds (never shown on the site). */
export const ADVISOR_MIN = 500_000; // straight to Darsh's calendar
export const TEAM_MIN = 250_000; // team member's calendar

export type Route = "advisor-calendar" | "team-calendar" | "participant-calendar" | "inbox";

export type LeadAnswers = {
  need?: string;
  assets?: string;
  prompt?: string;
  timing?: string;
  company?: string;
  role?: string;
  employees?: string;
  provider?: string;
  employer?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

// Disposable / throwaway mail services and obvious test domains. Free mail (gmail, outlook…) is fine.
const BAD_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "sharklasers.com", "10minutemail.com", "10minutemail.net",
  "tempmail.com", "temp-mail.org", "tempmail.net", "tempmailo.com", "yopmail.com", "yopmail.net", "trashmail.com",
  "throwawaymail.com", "getnada.com", "nada.email", "dispostable.com", "maildrop.cc", "mintemail.com", "mohmal.com",
  "fakeinbox.com", "emailondeck.com", "spamgourmet.com", "mailnesia.com", "mytemp.email", "tempinbox.com",
  "burnermail.io", "moakt.com", "inboxkitten.com", "spam4.me", "grr.la", "example.com", "example.org", "test.com",
  "fake.com", "asdf.com",
]);

/** True for throwaway, test, or bot-looking addresses. */
export function isLowQualityEmail(email: string): boolean {
  const e = email.trim().toLowerCase();
  const m = e.match(/^([^@\s]+)@([^@\s]+\.[a-z]{2,})$/);
  if (!m) return true;
  const [, local, domain] = m;
  if (BAD_DOMAINS.has(domain) || [...BAD_DOMAINS].some((d) => domain.endsWith("." + d))) return true;
  if (/^(test|asdf|qwerty|noreply|no-reply|abc|xxx+|aaa+)\d*$/.test(local)) return true;
  return false;
}

export function assetMin(value?: string): number | null {
  const opt = ASSET_OPTIONS.find((o) => o.value === value);
  return opt ? opt.min : null;
}

/** Where a submission goes. */
export function routeLead(a: LeadAnswers): { route: Route; reason: string } {
  if (!a.email || isLowQualityEmail(a.email)) return { route: "inbox", reason: "Low-quality or bot-like email address" };
  const need = a.need as Need | undefined;
  if (!need) return { route: "inbox", reason: "No need selected" };
  if (NOT_OFFERED.includes(need)) return { route: "inbox", reason: "Service not offered" };
  if (need === "other") return { route: "inbox", reason: "Something else" };
  if (need === "participant") return { route: "participant-calendar", reason: "Plan participant" };
  // Where business-owner inquiries go is still open with Darsh: inbox until he says.
  if (need === "business") return { route: "inbox", reason: "Business / plan sponsor inquiry" };
  const min = assetMin(a.assets);
  if (min === null) return { route: "inbox", reason: "Assets not provided" };
  if (min >= ADVISOR_MIN) return { route: "advisor-calendar", reason: "Investable assets $500,000+" };
  if (min >= TEAM_MIN) return { route: "team-calendar", reason: "Investable assets $250,000 – $500,000" };
  return { route: "inbox", reason: "Investable assets under $250,000" };
}

/** Calendly links per route (set in Vercel env when Darsh sends them; empty = not yet supplied). */
export function calendarUrl(route: Route): string | null {
  const map: Record<Route, string | undefined> = {
    "advisor-calendar": process.env.NEXT_PUBLIC_CALENDLY_ADVISOR,
    "team-calendar": process.env.NEXT_PUBLIC_CALENDLY_TEAM,
    "participant-calendar": process.env.NEXT_PUBLIC_CALENDLY_PARTICIPANT,
    inbox: undefined,
  };
  return map[route] || null;
}

export const ROUTE_LABEL: Record<Route, string> = {
  "advisor-calendar": "Darsh's calendar",
  "team-calendar": "Team member's calendar",
  "participant-calendar": "Participant calendar (30 min)",
  inbox: "Inbox (manual follow-up)",
};

export const labelFor = (opts: readonly { value: string; label: string }[], v?: string) => opts.find((o) => o.value === v)?.label ?? v ?? "";
