// Server-only: keeps these addresses out of the client bundle (leadRouting.ts also ships to the browser).
import type { Route } from "@/lib/leadRouting";

/**
 * Who gets the notification email for each route (Darsh 10-29): info@ gets no form submissions.
 * $500K+ and business leads -> Darsh; everything else -> marketing@ (forwards to Darsh, Mark and Taylor).
 */
export const ADVISOR_NOTIFY_EMAIL = process.env.ADVISOR_NOTIFY_EMAIL || "dmakim@pointoak.com";
export const INBOX_NOTIFY_EMAIL = process.env.INBOX_NOTIFY_EMAIL || "marketing@pointoak.com";
export function notifyEmailFor(route: Route): string {
  return route === "advisor-calendar" ? ADVISOR_NOTIFY_EMAIL : INBOX_NOTIFY_EMAIL;
}
