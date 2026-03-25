import { cookies } from "next/headers";
import crypto from "crypto";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "tkx-admin-secret";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "PointOak2026!";

export function generateToken(): string {
  const payload = `admin:${Date.now()}`;
  const hmac = crypto.createHmac("sha256", ADMIN_SECRET);
  hmac.update(payload);
  return `${Buffer.from(payload).toString("base64")}.${hmac.digest("hex")}`;
}

export function verifyToken(token: string): boolean {
  try {
    const [payloadB64, signature] = token.split(".");
    const payload = Buffer.from(payloadB64, "base64").toString();
    const hmac = crypto.createHmac("sha256", ADMIN_SECRET);
    hmac.update(payload);
    const expectedSig = hmac.digest("hex");
    return signature === expectedSig;
  } catch {
    return false;
  }
}

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_session")?.value;
  if (!token) return false;
  return verifyToken(token);
}
