import { google } from "googleapis";
import fs from "fs";

const SCOPES = ["https://www.googleapis.com/auth/gmail.modify"];

function getAuth() {
  let credentials;

  // Support both file path (dev server) and inline JSON content (Vercel)
  const saContent = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_CONTENT;
  const saPath = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

  if (saContent) {
    credentials = JSON.parse(saContent);
  } else if (saPath && fs.existsSync(saPath)) {
    credentials = JSON.parse(fs.readFileSync(saPath, "utf-8"));
  } else {
    throw new Error("Google service account credentials not found");
  }

  const sendAs = process.env.GMAIL_SEND_AS || "michaels@tkxmedia.com";

  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
    subject: sendAs,
  });

  return auth;
}

interface EmailParams {
  to: string;
  subject: string;
  htmlBody: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, htmlBody, replyTo }: EmailParams) {
  const auth = getAuth();
  const gmail = google.gmail({ version: "v1", auth });
  const sendAs = process.env.GMAIL_SEND_AS || "michaels@tkxmedia.com";

  const headers = [
    `From: TKX Media <${sendAs}>`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=utf-8`,
    ...(replyTo ? [`Reply-To: ${replyTo}`] : []),
  ];

  const raw = Buffer.from(headers.join("\r\n") + "\r\n\r\n" + htmlBody)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const result = await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw },
  });

  return result.data;
}

export function buildConsultationNotificationEmail(submission: {
  name: string;
  email: string;
  subject: string;
  message?: string;
  id: string;
  created_at: string;
  assets?: string;
  helpWith?: string[];
  timeline?: string;
}) {
  const date = new Date(submission.created_at).toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "short",
  });

  const helpWithHtml = submission.helpWith && submission.helpWith.length > 0
    ? submission.helpWith.map(h => `<span style="display: inline-block; background: #EEF5FF; color: #003754; padding: 3px 10px; border-radius: 4px; font-size: 13px; margin: 2px 4px 2px 0;">${h}</span>`).join("")
    : "<em style='color: #999'>Not specified</em>";

  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(90deg, #003754 0%, #0078B8 100%); padding: 24px 30px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 500;">
          New Consultation Request
        </h1>
        <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">
          PointOak Retirement Advisors
        </p>
      </div>
      
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px 30px; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px; font-weight: 600;">${submission.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; vertical-align: top;">Email</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px;">
              <a href="mailto:${submission.email}" style="color: #016BA4; text-decoration: none;">${submission.email}</a>
            </td>
          </tr>
          ${submission.assets ? `
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; vertical-align: top;">Investable Assets</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px; font-weight: 600;">${submission.assets}</td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; vertical-align: top;">Looking for Help With</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px;">${helpWithHtml}</td>
          </tr>
          ${submission.timeline ? `
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; vertical-align: top;">Timeline</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px;">${submission.timeline}</td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; vertical-align: top;">Message</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px;">${submission.message || "<em style='color: #999'>No message provided</em>"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; vertical-align: top;">Date</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px;">${date}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
          <a href="mailto:${submission.email}?subject=Re: Your Consultation Request" 
             style="display: inline-block; background: linear-gradient(90deg, #003754 0%, #0078B8 100%); color: white; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 500;">
            Reply to ${submission.name}
          </a>
        </div>
        
        <p style="margin-top: 16px; color: #999; font-size: 12px;">
          Submission ID: ${submission.id}
        </p>
      </div>
    </div>
  `;
}
