import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const COOKIE_NAME = "admin_token";
const TOKEN_VALUE = "authenticated";

// ─── For API routes — check auth from request ────���───────────────────────────

export function isAuthenticatedFromRequest(request: NextRequest): boolean {
  const cookie = request.cookies.get(COOKIE_NAME);
  return cookie?.value === TOKEN_VALUE;
}

// ─── For server components — check auth from cookies() ───────────────────────

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);
  return cookie?.value === TOKEN_VALUE;
}

// ─── Validate password ───────────────────────────────────────────────────────

export function validatePassword(password: string): boolean {
  if (!ADMIN_PASSWORD) return false;
  return password === ADMIN_PASSWORD;
}

// ─── Cookie config ───────────────────────────────────────────────────────────

export const AUTH_COOKIE_CONFIG = {
  name: COOKIE_NAME,
  value: TOKEN_VALUE,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 days
};