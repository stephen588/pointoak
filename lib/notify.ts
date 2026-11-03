// Server-only: keeps these addresses out of the client bundle (leadRouting.ts also ships to the browser).
import type { LeadAnswers, Route } from "@/lib/leadRouting";

/**
 * Who gets the notification email for each route (Darsh 10-29): info@ gets no form submissions.
 * $500K+ and business leads -> Darsh; everything else -> marketing@ (forwards to Darsh, Mark and Taylor).
 */
export const ADVISOR_NOTIFY_EMAIL = process.env.ADVISOR_NOTIFY_EMAIL || "dmakim@pointoak.com";
export const INBOX_NOTIFY_EMAIL = process.env.INBOX_NOTIFY_EMAIL || "marketing@pointoak.com";
export function notifyEmailFor(route: Route): string {
  return route === "advisor-calendar" ? ADVISOR_NOTIFY_EMAIL : INBOX_NOTIFY_EMAIL;
}

/**
 * Phrases a prospective client wouldn't write but vendor pitches do (Newsweek "Top Financial Advisory
 * Firms" award pitch, 11-03). Only tags the notification subject; the lead is still saved and emailed.
 */
const PITCH_PATTERNS = [
  /\b(seo|search engine optimi[sz]ation|backlinks?|guest posts?|lead generation|web ?design services?|website redesign)\b/i,
  /\b(promotional|sponsorship|advertising|media|partnership) opportunit/i,
  /\b(pointoak|your firm|your company|you)\b[^.]{0,40}\b(recognized|selected|nominated|named)\b/i,
  /\btop (financial|wealth|advisory|advisor)[a-z ]{0,40}(firms?|advisors?)\b/i,
  /\b(our (agency|services|platform|software)|we (help|offer) (firms|advisors|businesses))\b/i,
  /\b(book|schedule) a (quick )?demo\b/i,
  /\b(outsourc|virtual assistant|app development)/i,
];
const PITCH_DOMAINS = ["newsweek.com", "forbes.com", "usatoday.com", "financialadvisoriq.com"];

export function looksLikeSolicitation(a: LeadAnswers): boolean {
  const domain = (a.email ?? "").toLowerCase().split("@")[1] ?? "";
  if (PITCH_DOMAINS.some((d) => domain === d || domain.endsWith("." + d))) return true;
  const text = [a.message, a.company, a.role].filter(Boolean).join(" ");
  return PITCH_PATTERNS.some((re) => re.test(text));
}
