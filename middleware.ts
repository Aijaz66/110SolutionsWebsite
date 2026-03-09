import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip auth check for login page and auth API
  if (
    pathname === "/admin/login" ||
    pathname.startsWith("/api/admin/auth")
  ) {
    return NextResponse.next();
  }

  // Check for admin token cookie
  const adminToken = request.cookies.get("admin_token");

  if (!adminToken || adminToken.value !== "authenticated") {
    // Redirect to login
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Only run middleware on admin routes
export const config = {
  matcher: ["/admin/:path*"],
};