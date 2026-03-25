import { NextRequest, NextResponse } from "next/server";
import { sendEmail, buildConsultationNotificationEmail } from "@/lib/mailer";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const SITE_ID = process.env.SITE_ID || "pointoak";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "info@pointoak.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, assets, helpWith, timeline } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Build subject line from helpWith if available
    const subjectLine = helpWith && helpWith.length > 0
      ? helpWith.join(", ")
      : subject || "General Inquiry";

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
            ...(assets && { investable_assets: assets }),
            ...(helpWith && helpWith.length > 0 && { help_with: helpWith }),
            ...(timeline && { timeline }),
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
      });

      await sendEmail({
        to: NOTIFY_EMAIL,
        subject: `New Consultation Request: ${name} — ${subjectLine}`,
        htmlBody,
        replyTo: email,
      });

      console.log(`📧 Notification email sent to ${NOTIFY_EMAIL}`);
    } catch (emailError) {
      console.error("⚠️ Email notification failed (submission still saved):", emailError);
    }

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
