// Qualifying form: questions and routing per Darsh's 2026-10-07 reply ("Re: Updates"), which revised
// the 10-05 draft. Used by the form (client) and /api/contact (server); the server's answer counts.
// Still open: plan-asset ranges (ours, proposed to him), the three Calendly links + each event's
// questions (for prefill), inbox recipient, email-list consent language.

export const NEED_OPTIONS = [
  { value: "personal", label: "Managing my personal wealth or financial plan" },
  { value: "business", label: "A retirement plan for my business or organization" },
  { value: "participant", label: "I'm an employee in a retirement plan PointOak advises" },
  { value: "other", label: "Something else" },
] as const;
export type Need = (typeof NEED_OPTIONS)[number]["value"];

export const ASSETS_QUESTION = "Approximately how much do you have in investable assets that you may want PointOak to manage?";
export const ASSET_OPTIONS = [
  { value: "under-250k", label: "Under $250,000", min: 0 },
  { value: "250k-499k", label: "$250,000–$499,999", min: 250_000 },
  { value: "500k-999k", label: "$500,000–$999,999", min: 500_000 },
  { value: "1m-2.49m", label: "$1 million–$2.49 million", min: 1_000_000 },
  { value: "2.5m-4.99m", label: "$2.5 million–$4.99 million", min: 2_500_000 },
  { value: "5m-plus", label: "$5 million+", min: 5_000_000 },
] as const;

/** Business / plan sponsor: approximate plan assets. Ranges + order approved by Darsh 10-13. */
export const PLAN_ASSET_OPTIONS = [
  { value: "no-plan", label: "We don't have a plan yet" },
  { value: "under-1m", label: "Under $1 million" },
  { value: "1m-4.99m", label: "$1 million–$4.99 million" },
  { value: "5m-9.99m", label: "$5 million–$9.99 million" },
  { value: "10m-24.99m", label: "$10 million–$24.99 million" },
  { value: "25m-49.99m", label: "$25 million–$49.99 million" },
  { value: "50m-plus", label: "$50 million+" },
] as const;

export const PROMPT_OPTIONS = [
  "Retiring",
  "Changing jobs",
  "Executive compensation",
  "Inheritance or sale of a business",
  "Second opinion",
  "Other",
] as const;

export const TIMING_OPTIONS = ["Within 3 months", "3–6 months", "6–12 months", "Just exploring"] as const;

/** Asset thresholds (never shown on the site). */
export const ADVISOR_MIN = 500_000; // straight to Darsh's calendar; below this goes to the inbox (Darsh 10-23)

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
  planAssets?: string;
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
  const need = a.need as Need | undefined;
  // Participants go straight to the existing participant Calendly, which collects their details.
  if (need === "participant") return { route: "participant-calendar", reason: "Plan participant" };
  if (!a.email || isLowQualityEmail(a.email)) return { route: "inbox", reason: "Low-quality or bot-like email address" };
  if (!need) return { route: "inbox", reason: "No need selected" };
  if (need === "other") return { route: "inbox", reason: "Something else" };
  if (need === "business") return { route: "advisor-calendar", reason: "Retirement plan for a business or organization" };
  const min = assetMin(a.assets);
  if (min === null) return { route: "inbox", reason: "Assets not provided" };
  if (min >= ADVISOR_MIN) return { route: "advisor-calendar", reason: "Investable assets $500,000+" };
  return { route: "inbox", reason: "Investable assets under $500,000" };
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
  "team-calendar": "Taylor's calendar",
  "participant-calendar": "Participant calendar (30 min)",
  inbox: "Inbox (manual follow-up)",
};

export function labelFor(opts: readonly { value: string; label: string }[], v?: string): string {
  return opts.find((o) => o.value === v)?.label ?? v ?? "";
}

/**
 * Calendly prefill: name and email always carry over. Answers to an event's own custom questions can be
 * prefilled as a1, a2, … (in the order the questions appear on that event). Fill these in once Darsh sends
 * each event's question list, e.g. { a1: "phone", a2: "company" }.
 */
export const CALENDLY_ANSWER_MAP: Record<Route, Partial<Record<`a${number}`, keyof LeadAnswers>>> = {
  "advisor-calendar": {},
  "team-calendar": {},
  "participant-calendar": {},
  inbox: {},
};

/** Full Calendly URL for a lead: embed flags + name/email + any mapped custom-question answers. */
export function calendlyUrl(base: string, route: Route, a: LeadAnswers & Record<string, string | undefined>): string {
  const u = new URL(base);
  if (a.name) u.searchParams.set("name", a.name);
  if (a.email) u.searchParams.set("email", a.email);
  for (const [param, field] of Object.entries(CALENDLY_ANSWER_MAP[route] ?? {})) {
    const v = field ? a[field] : undefined;
    if (v) u.searchParams.set(param, field === "planAssets" ? labelFor(PLAN_ASSET_OPTIONS, v) : field === "assets" ? labelFor(ASSET_OPTIONS, v) : v);
  }
  u.searchParams.set("hide_gdpr_banner", "1");
  return u.toString();
}
