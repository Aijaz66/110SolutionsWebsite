"use client";

import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import AnimatedCounter from "../../components/AnimatedCounter";
import PageCTA from "../../components/PageCTA";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "End-to-End Encryption",
    desc: "Every vote is encrypted from submission to tallying using 256-bit encryption — completely tamper-proof and verifiable.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 11l2 2 4-4" />
      </svg>
    ),
    title: "Voter Authentication",
    desc: "Multi-factor identity verification ensures only eligible voters participate — no duplicate votes, no impersonation.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Real-Time Results",
    desc: "Live vote tallying with instant results the moment voting closes — no manual counting, no delays, no disputes.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Full Audit Trail",
    desc: "Complete, immutable log of every action — voter authentication, ballot submission, and tallying — satisfying all governance requirements.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Flexible Voting Formats",
    desc: "Single choice, ranked choice, multi-candidate, weighted voting, and referendum formats — configurable per election.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Any Device, Anywhere",
    desc: "Voters participate from any device — desktop, tablet, or mobile. Branded voting portals with configurable access windows.",
  },
];

const ELECTION_TYPES = [
  {
    title: "Board & AGM Elections",
    desc: "Secure director elections, shareholder voting, and annual general meeting resolutions with full corporate governance compliance.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Student Body Elections",
    desc: "University and school student council elections with voter eligibility rules, candidate profiles, and instant results.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 3.33 4 6 4s6-2 6-4v-5" />
      </svg>
    ),
  },
  {
    title: "Union & Association Votes",
    desc: "Member ballots, policy votes, and executive elections for unions, professional associations, and member organisations.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Referendums & Polls",
    desc: "Yes/no referendums, multi-option polls, and weighted surveys for any organisation requiring formal member input.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const SECURITY_LAYERS = [
  { label: "256-bit AES Encryption", desc: "Bank-grade encryption for all ballot data" },
  { label: "Multi-Factor Authentication", desc: "Email + SMS + OTP voter verification" },
  { label: "Immutable Audit Logs", desc: "Every action timestamped and tamper-proof" },
  { label: "Role-Based Access Control", desc: "Admins, observers, and voters separated" },
  { label: "Anonymous Ballot Casting", desc: "Vote identity separated from vote content" },
  { label: "IP & Device Fingerprinting", desc: "Prevents duplicate voting from same source" },
];

const FAQS = [
  { q: "How do you ensure votes can't be tampered with?", a: "Every vote is encrypted with 256-bit AES encryption from the moment it's cast. The system maintains an immutable audit trail that records every action with timestamps. Vote content is separated from voter identity, so even system administrators cannot link a specific vote to a specific voter." },
  { q: "Can voters vote from their phones?", a: "Yes. The voting portal is fully responsive and works on any device — desktop, tablet, or smartphone. Voters receive a secure link via email or SMS, authenticate, and cast their vote from anywhere." },
  { q: "What voting formats do you support?", a: "We support single-choice, multi-choice, ranked-choice (preferential), weighted voting, and yes/no referendums. Each election can be configured with its own format, eligibility rules, and voting window." },
  { q: "Can we brand the voting portal?", a: "Yes. The voting portal can be fully branded with your organisation's logo, colours, and messaging. Custom welcome pages, candidate profiles with photos, and results pages are all configurable." },
  { q: "How are results calculated and displayed?", a: "Results are calculated automatically the moment the voting window closes. Results can be displayed instantly to all voters, or restricted to administrators first for review. Full breakdowns by category, region, or voter group are available." },
  { q: "Is it compliant with governance requirements?", a: "Yes. The system generates complete audit reports that satisfy corporate governance, union election rules, and organisational bylaws. We can configure the system to meet your specific regulatory requirements." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EVotingPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Split dark with shield visual
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[100vh] flex items-center bg-[#060a0e]">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(84,199,194,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#54c7c2]/[0.04] blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0070de]/[0.03] blur-[100px] rounded-full" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
                <svg className="w-4 h-4 text-[#54c7c2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-[#54c7c2] text-[10px] font-semibold tracking-[0.15em] uppercase">
                  E-Voting System
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.06] tracking-tight mb-5">
                Secure, Transparent,{" "}
                <span className="text-[#54c7c2]">Digital Democracy.</span>
              </h1>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-[480px]">
                Paper-based voting is slow, costly, and vulnerable to disputes. Our
                E-Voting System delivers a tamper-proof, fully auditable digital
                voting experience — giving participants confidence and
                administrators complete control.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/110solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-2.5 rounded-lg font-bold text-[13px] overflow-hidden transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-[#54c7c2]" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity" />
                  <span className="relative text-[#060a0e] tracking-wide flex items-center gap-2">
                    Book a Demo
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-lg font-semibold text-[13px] border border-white/25 text-white/75 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all"
                >
                  Request a Quote →
                </Link>
              </div>
            </div>

            {/* Right — Security visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                {/* Shield outline */}
                <div className="w-[280px] h-[320px] rounded-3xl border-2 border-[#54c7c2]/15 bg-[#54c7c2]/[0.02] backdrop-blur-sm flex flex-col items-center justify-center gap-6 relative">
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#54c7c2] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#060a0e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <svg className="w-16 h-16 text-[#54c7c2]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>

                  {[
                    { val: "256-bit", label: "Encryption" },
                    { val: "100%", label: "Audit Trail" },
                    { val: "Real-Time", label: "Results" },
                    { val: "Any Device", label: "Access" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3 w-full px-8">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#54c7c2]" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-[#54c7c2] font-bold text-[13px]">{s.val}</span>
                        <span className="text-white/30 text-[10px]">{s.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating badges */}
                <div className="absolute -left-12 top-8 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-[#0d1117]/80 backdrop-blur-sm">
                  <span className="text-[#54c7c2] text-[10px] font-bold">Tamper-Proof</span>
                </div>
                <div className="absolute -right-10 bottom-12 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-[#0d1117]/80 backdrop-blur-sm">
                  <span className="text-[#54c7c2] text-[10px] font-bold">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECURITY LAYERS — Unique section (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <LightEyebrow>Security Architecture</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  Six Layers of{" "}
                  <span className="text-[#0e8c86]">Vote Protection</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Security isn&apos;t a feature — it&apos;s the foundation. Every vote passes
                  through multiple layers of protection to ensure integrity,
                  anonymity, and auditability.
                </p>

                <div className="space-y-3">
                  {SECURITY_LAYERS.map((layer, i) => (
                    <div key={layer.label} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50/40 hover:border-[#0e8c86]/20 transition-all group">
                      <div className="w-8 h-8 rounded-lg bg-[#0e8c86] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[10px] font-extrabold">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <p className="text-gray-900 text-[13px] font-bold leading-tight group-hover:text-[#0e8c86] transition-colors">
                          {layer.label}
                        </p>
                        <p className="text-gray-400 text-[11px] mt-0.5">{layer.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[3/4] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-[15px]">Every vote secured.</p>
                  <p className="text-white/60 text-[12px]">End-to-end encryption with full audit trail.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES (Light gray — 3-column)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Platform Features</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Everything You Need for{" "}
                <span className="text-[#0e8c86]">Fair Elections</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group">
                  <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mb-4 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-2 group-hover:text-[#0e8c86] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ELECTION TYPES — Unique section (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Election Types</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                One Platform,{" "}
                <span className="text-[#0e8c86]">Every Election Format</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ELECTION_TYPES.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 80}>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/40 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 group flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {e.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-[15px] mb-1 group-hover:text-[#0e8c86] transition-colors">
                      {e.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS (Dark Navy)
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden bg-[#091e2a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2535] via-[#091e2a] to-[#071a24]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#54c7c2]/[0.04] blur-[80px]" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { end: 256, suffix: "-bit", label: "Encryption Standard" },
              { end: 100, suffix: "%", label: "Audit Coverage" },
              { end: 0, suffix: "Zero", label: "Vote Disputes" },
              { end: 99, suffix: ".9%", label: "Uptime Guaranteed" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 120}>
                <div className="text-center relative text-white">
                  {i < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#54c7c2]/15" />
                  )}
                  <p className="text-4xl md:text-5xl font-extrabold text-[#54c7c2] tracking-tight">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2200} />
                  </p>
                  <p className="mt-2 text-[11px] text-[#7fb8c9] uppercase tracking-[0.18em] font-semibold">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS — Voting flow (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[500px] mx-auto">
              <LightEyebrow center>How It Works</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                The Voting Process,{" "}
                <span className="text-[#0e8c86]">Simplified</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Setup Election", desc: "Configure candidates, voting format, eligibility rules, and voting window." },
              { step: "02", title: "Invite Voters", desc: "Voters receive secure invitations via email or SMS with unique access links." },
              { step: "03", title: "Authenticate", desc: "Multi-factor verification confirms voter identity before ballot access." },
              { step: "04", title: "Cast Vote", desc: "Encrypted ballot submitted from any device — anonymous and tamper-proof." },
              { step: "05", title: "Instant Results", desc: "Votes tallied automatically. Results available the moment polls close." },
            ].map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 80}>
                <div className="relative p-5 rounded-xl border border-gray-100 bg-white h-full group hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all text-center">
                  <div className="w-9 h-9 rounded-lg bg-[#0e8c86] flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-[11px] font-extrabold">{p.step}</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[14px] mb-1.5 group-hover:text-[#0e8c86] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO IT'S FOR (White)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <LightEyebrow center>Who It&apos;s For</LightEyebrow>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mt-3">
                Trusted by <span className="text-[#0e8c86]">Organisations That Value Integrity</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Corporations (AGMs)",
              "Board Elections",
              "Unions & Associations",
              "Universities & Student Bodies",
              "Local Government",
              "Non-Profits",
              "Sporting Clubs",
              "Professional Committees",
            ].map((w, i) => (
              <ScrollReveal key={w} delay={i * 40}>
                <div className="px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50/50 text-gray-600 text-[13px] font-medium hover:border-[#0e8c86]/30 hover:text-[#0e8c86] hover:shadow-sm transition-all cursor-default">
                  {w}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[800px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <LightEyebrow center>FAQ</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                Frequently Asked{" "}
                <span className="text-[#0e8c86]">Questions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <FAQItem question={faq.q} answer={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Modernise Your Voting Process."
          sub="Book a demo and see how our E-Voting System handles your specific election needs."
        />
      </div>
    </main>
  );
}

// ���── Sub-components ───────────────────────────────────────────────────────────

function LightEyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
      <div className="w-5 h-[2px] bg-[#0e8c86]" />
      <span className="text-[#0e8c86] text-[10px] font-bold tracking-[0.2em] uppercase">{children}</span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border transition-all duration-300 ${open ? "border-[#0e8c86]/20 bg-[#0e8c86]/[0.02]" : "border-gray-200 bg-white hover:border-gray-300"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className={`font-semibold text-[14px] pr-4 transition-colors ${open ? "text-[#0e8c86]" : "text-gray-900"}`}>{question}</span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-[#0e8c86] rotate-180" : "bg-gray-100"}`}>
          <svg className={`w-3.5 h-3.5 ${open ? "text-white" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-4 text-gray-500 text-[13px] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}