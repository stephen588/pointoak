import { NextRequest, NextResponse } from "next/server";
import { sendEmail, buildConsultationNotificationEmail } from "@/lib/mailer";
import { ASSET_OPTIONS, NEED_OPTIONS, ROUTE_LABEL, calendarUrl, labelFor, routeLead, type LeadAnswers } from "@/lib/leadRouting";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const SITE_ID = process.env.SITE_ID || "pointoak";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "info@pointoak.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const answers = body as LeadAnswers & { website?: string; subject?: string; helpWith?: string[]; timeline?: string; assets?: string };
    const { name, email, message } = answers;

    // Honeypot: real visitors never see the "website" field. Pretend success, save nothing.
    if (answers.website) return NextResponse.json({ success: true, route: "inbox", calendar: null });

    if (!name || !email) {
      return NextResponse.json({ success: false, error: "Name and email are required." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    // Qualifying form (lib/leadRouting.ts): the server decides the route.
    const { route, reason } = routeLead(answers);
    const needLabel = labelFor(NEED_OPTIONS, answers.need);
    const assetsLabel = labelFor(ASSET_OPTIONS, answers.assets);
    const details: [string, string | undefined][] = [
      ["Routed to", `${ROUTE_LABEL[route]} (${reason})`],
      ["Looking for", needLabel],
      ["Investable assets", answers.need === "personal" ? assetsLabel : undefined],
      ["What prompted them", answers.prompt],
      ["Timing", answers.timing],
      ["Company", answers.company],
      ["Role", answers.role],
      ["Employees", answers.employees],
      ["Current provider", answers.provider],
      ["Employer", answers.employer],
      ["Phone", answers.phone],
    ];
    const subjectLine = needLabel || answers.subject || "General Inquiry";
    const assets = answers.need === "personal" ? assetsLabel : answers.assets;
    const helpWith = answers.helpWith;
    const timeline = answers.timing || answers.timeline;

    // Save to Supabase
    const supabaseResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/form_submissions`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          site_id: SITE_ID,
          name,
          email,
          subject: subjectLine,
          message: message || null,
          form_type: "consultation",
          status: "new",
          notify_email: NOTIFY_EMAIL,
          metadata: {
            route,
            route_reason: reason,
            need: answers.need ?? null,
            ...(assets && { investable_assets: assets }),
            ...(answers.prompt && { prompted_by: answers.prompt }),
            ...(timeline && { timeline }),
            ...(answers.company && { company: answers.company }),
            ...(answers.role && { role: answers.role }),
            ...(answers.employees && { employees: answers.employees }),
            ...(answers.provider && { current_provider: answers.provider }),
            ...(answers.employer && { employer: answers.employer }),
            ...(answers.phone && { phone: answers.phone }),
            ...(helpWith && helpWith.length > 0 && { help_with: helpWith }),
          },
        }),
      }
    );

    if (!supabaseResponse.ok) {
      const errorText = await supabaseResponse.text();
      console.error("Supabase insert error:", errorText);
      return NextResponse.json(
        { success: false, error: "Failed to save your submission. Please try again." },
        { status: 500 }
      );
    }

    const [submission] = await supabaseResponse.json();
    console.log(`✅ Form submission saved: ${submission.id} from ${name} (${email})`);

    // Send email notification (non-blocking)
    try {
      const htmlBody = buildConsultationNotificationEmail({
        name,
        email,
        subject: subjectLine,
        message,
        id: submission.id,
        created_at: submission.created_at,
        assets,
        helpWith,
        timeline,
        details,
      });

      await sendEmail({
        to: NOTIFY_EMAIL,
        subject: `${route === "inbox" ? "Inbox" : "Calendar"} lead: ${name} — ${subjectLine}`,
        htmlBody,
        replyTo: email,
      });

      console.log(`📧 Notification email sent to ${NOTIFY_EMAIL}`);
    } catch (emailError) {
      console.error("⚠️ Email notification failed (submission still saved):", emailError);
    }

    return NextResponse.json({ success: true, id: submission.id, route, calendar: route === "inbox" ? null : calendarUrl(route) });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
