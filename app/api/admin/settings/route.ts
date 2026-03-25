import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAuthenticated } from "@/lib/admin-auth";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  // Check authentication
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Check if form_configs table exists, if not use default
    const { data, error } = await supabase
      .from("form_configs")
      .select("*")
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116 = no rows returned
      throw error;
    }

    return NextResponse.json({
      notifyEmails: data?.notify_emails || [process.env.NOTIFY_EMAIL || "info@pointoak.com"]
    });
  } catch (error) {
    console.error("Error fetching settings:", error);
    // Return default if table doesn't exist
    return NextResponse.json({
      notifyEmails: [process.env.NOTIFY_EMAIL || "info@pointoak.com"]
    });
  }
}

export async function POST(request: NextRequest) {
  // Check authentication
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { notifyEmails } = body;

    if (!Array.isArray(notifyEmails)) {
      return NextResponse.json(
        { error: "notifyEmails must be an array" },
        { status: 400 }
      );
    }

    // Try to update or insert into form_configs
    const { data, error } = await supabase
      .from("form_configs")
      .upsert({
        id: "default",
        notify_emails: notifyEmails,
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
