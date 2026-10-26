import { google } from "googleapis";
import fs from "fs";

// Notifications go out through the Gmail API as a Workspace mailbox (service account with domain-wide delegation).
// Mailgun SMTP stopped working from Vercel on 10-09: the Mailgun account is locked to an IP allowlist after the
// SMTP-login theft, and Vercel functions have no fixed IP (PointOak launch, 10-26).
// GMAIL_SCOPE must be a scope the service account is authorized for in Google Workspace admin.
const GMAIL_SCOPE = process.env.GMAIL_SCOPE || "https://www.googleapis.com/auth/gmail.modify";

function getAuth(sendAs: string) {
  const saContent = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_CONTENT;
  const saPath = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const credentials = saContent
    ? JSON.parse(saContent)
    : saPath && fs.existsSync(saPath)
      ? JSON.parse(fs.readFileSync(saPath, "utf-8"))
      : null;
  if (!credentials) throw new Error("Google service account credentials not found");
  return new google.auth.JWT({ email: credentials.client_email, key: credentials.private_key, scopes: [GMAIL_SCOPE], subject: sendAs });
}

// RFC 2047 so names and subjects with non-ASCII characters (em dashes, accents) survive.
const encodeHeader = (v: string) => (/^[\x20-\x7e]*$/.test(v) ? v : `=?UTF-8?B?${Buffer.from(v, "utf-8").toString("base64")}?=`);

interface EmailParams {
  to: string;
  subject: string;
  htmlBody: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, htmlBody, replyTo }: EmailParams) {
  const sendAs = process.env.GMAIL_SEND_AS;
  if (!sendAs) throw new Error("GMAIL_SEND_AS is not set");
  const gmail = google.gmail({ version: "v1", auth: getAuth(sendAs) });

  const headers = [
    `From: ${encodeHeader("PointOak Retirement Advisors")} <${sendAs}>`,
    `To: ${to}`,
    `Subject: ${encodeHeader(subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    ...(replyTo ? [`Reply-To: ${replyTo}`] : []),
  ];
  const body = Buffer.from(htmlBody, "utf-8").toString("base64").replace(/.{76}/g, "$&\r\n");
  const raw = Buffer.from(headers.join("\r\n") + "\r\n\r\n" + body).toString("base64url");

  const result = await gmail.users.messages.send({ userId: "me", requestBody: { raw } });
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
  details?: [string, string | undefined][];
}) {
  const esc = (t: string) => t.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
  const detailRows = (submission.details ?? [])
    .filter(([, v]) => v)
    .map(
      ([k, v]) => `
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; width: 140px; vertical-align: top;">${esc(k)}</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px; font-weight: 600;">${esc(v!)}</td>
          </tr>`,
    )
    .join("");
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
          ${detailRows}
          ${submission.assets && !submission.details ? `
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; vertical-align: top;">Investable Assets</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px; font-weight: 600;">${submission.assets}</td>
          </tr>
          ` : ""}
          ${submission.details ? "" : `<tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; vertical-align: top;">Looking for Help With</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px;">${helpWithHtml}</td>
          </tr>`}
          ${submission.timeline && !submission.details ? `
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; vertical-align: top;">Timeline</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px;">${submission.timeline}</td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 8px 0; color: #707070; font-size: 14px; vertical-align: top;">Message</td>
            <td style="padding: 8px 0; color: #003754; font-size: 14px;">${submission.message ? esc(submission.message) : "<em style='color: #999'>No message provided</em>"}</td>
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
