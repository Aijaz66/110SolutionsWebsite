import { NextRequest, NextResponse } from "next/server";
import { validatePassword, AUTH_COOKIE_CONFIG } from "@/app/lib/auth";

// ─── POST /api/admin/auth — Login ───────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password || !validatePassword(password)) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(AUTH_COOKIE_CONFIG);

    return response;
  } catch (error) {
    console.error("POST /api/admin/auth error:", error);
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}

// ─── DELETE /api/admin/auth — Logout ─────────────────────────────────────────

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: AUTH_COOKIE_CONFIG.name,
    value: "",
    maxAge: 0,
    path: "/",
  });
  return response;
}