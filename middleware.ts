import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pages with no content JSON have no markdown version; they always get HTML.
const NO_MARKDOWN = ["/client-center/", "/terms-of-use/", "/website-privacy-policy/"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  // AI agents asking for Markdown (Accept: text/markdown) get the page's markdown version (lib/markdown.ts).
  if (!path.startsWith("/admin")) {
    if ((request.headers.get("accept") ?? "").includes("text/markdown") && !NO_MARKDOWN.includes(path)) {
      return NextResponse.rewrite(new URL("/md" + path, request.url));
    }
    return NextResponse.next();
  }
  // Only protect /admin routes (except /admin/login)
  if (request.nextUrl.pathname.startsWith("/admin") && 
      !request.nextUrl.pathname.startsWith("/admin/login")) {
    const token = request.cookies.get("admin_session")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    // Basic token format check (full verify happens in API routes)
    if (!token.includes(".")) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/((?!_next|api|md|images|disclosures|.*\\..*).*)"],
};
