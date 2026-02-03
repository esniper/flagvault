import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isMorafynSubdomain = host.startsWith("morafyn.");
  const pathname = request.nextUrl.pathname;

  // Handle morafyn.flagvault.com subdomain
  if (isMorafynSubdomain) {
    const url = request.nextUrl.clone();

    // Rewrite favicon to morafyn icon
    if (pathname === "/favicon.ico" || pathname === "/icon.svg") {
      url.pathname = "/morafyn/icon.png";
      return NextResponse.rewrite(url);
    }

    // Rewrite other paths
    url.pathname = `/morafyn${pathname === "/" ? "" : pathname}`;
    const response = NextResponse.rewrite(url);
    response.headers.set("x-subdomain", "morafyn");
    return response;
  }

  const response = NextResponse.next();
  response.headers.set("x-subdomain", "");
  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files (but include favicon.ico for subdomain handling)
    "/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)$).*)",
  ],
};
