"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin/blog");
      } else {
        setError("Invalid password. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060a0e] flex items-center justify-center px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#54c7c2]/[0.04] blur-[140px] rounded-full" />
      </div>

      <div className="relative w-full max-w-[400px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-white font-bold text-[20px]">
            110<span className="text-[#54c7c2]">Solutions</span>
          </h1>
          <p className="text-white/30 text-[13px] mt-2">Admin Panel</p>
        </div>

        {/* Login Card */}
        <form
          onSubmit={handleLogin}
          className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 backdrop-blur-sm"
        >
          <h2 className="text-white font-bold text-[18px] mb-1">Welcome back</h2>
          <p className="text-white/35 text-[13px] mb-6">
            Enter your admin password to continue.
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[13px]">
              {error}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-white/50 text-[12px] font-semibold mb-2 uppercase tracking-wider">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-[#54c7c2]/40 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#54c7c2] text-[#060a0e] text-[14px] font-bold hover:bg-[#6edbd5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-6">
          <a
            href="/"
            className="text-white/25 text-[12px] hover:text-[#54c7c2] transition-colors"
          >
            ← Back to website
          </a>
        </div>
      </div>
    </div>
  );
}