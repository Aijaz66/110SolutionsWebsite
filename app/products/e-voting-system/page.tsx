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
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 11l2 2 4-4" />
      </svg>
    ),
    title: "Secure Voter Authentication",
    desc: "Multi-factor identity verification ensures only eligible, authorized voters can participate. Email, SMS, OTP, and unique access links — no impersonation, no unauthorized access.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "One-Person-One-Vote Guarantee",
    desc: "The system enforces strict one-person-one-vote rules through voter authentication, session locking, and device fingerprinting — making duplicate or fraudulent votes impossible.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "Anonymous & Confidential Balloting",
    desc: "Vote identity is cryptographically separated from vote content — even system administrators cannot link a specific vote to a specific voter. Complete ballot secrecy guaranteed.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Real-Time Voting Dashboard",
    desc: "Live dashboard showing voter turnout, participation rates, and voting progress as it happens — giving administrators complete oversight without compromising ballot secrecy.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Automated Result Calculation",
    desc: "The moment voting closes, results are calculated automatically — no manual counting, no delays, no disputes. Full breakdowns available instantly by category or voter group.",
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
    title: "Multi-Election Support",
    desc: "Run multiple elections simultaneously or sequentially from one platform — board elections, student votes, union ballots, and referendums all managed in a single system.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Time-Limited Voting Windows",
    desc: "Set precise start and end times for every election. Voting automatically opens and closes at the configured times — no manual intervention, no early or late votes accepted.",
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
    title: "Detailed Audit Logs",
    desc: "Complete, immutable log of every action — voter authentication, ballot submission, result calculation, and admin changes — timestamped and tamper-proof for full governance compliance.",
  },
];

const VOTING_FLOW = [
  { step: "01", title: "Setup Election", desc: "Configure candidates, voting format, eligibility rules, and time-limited voting window." },
  { step: "02", title: "Authenticate Voters", desc: "Voters receive secure invitations and verify identity via multi-factor authentication." },
  { step: "03", title: "Cast Ballot", desc: "Anonymous, encrypted ballot submitted from any device — one person, one vote enforced." },
  { step: "04", title: "Monitor Live", desc: "Real-time dashboard shows turnout and participation — without revealing vote content." },
  { step: "05", title: "Instant Results", desc: "Automated result calculation the moment the voting window closes. Full audit trail generated." },
];

const ELECTION_TYPES = [
  {
    title: "Board & AGM Elections",
    desc: "Director elections, shareholder voting, and annual general meeting resolutions with full corporate governance compliance and detailed audit logs.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Student Body Elections",
    desc: "University and school student council elections with voter eligibility rules, candidate profiles, time-limited windows, and instant result announcements.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 3.33 4 6 4s6-2 6-4v-5" />
      </svg>
    ),
  },
  {
    title: "Union & Association Votes",
    desc: "Member ballots, policy votes, and executive elections for unions and professional associations — with anonymous balloting and one-person-one-vote enforcement.",
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
    desc: "Yes/no referendums, multi-option polls, and weighted surveys for any organisation requiring formal, auditable member input.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const FAQS = [
  { q: "How does secure voter authentication work?", a: "Voters receive a unique, encrypted access link via email or SMS. To access their ballot, they must verify their identity through multi-factor authentication — including OTP (one-time password) verification. The system confirms eligibility against the voter roll before granting ballot access." },
  { q: "How do you guarantee one-person-one-vote?", a: "The system enforces this through multiple layers: each voter is authenticated against a unique identity, sessions are locked after ballot submission, and device fingerprinting prevents the same person from voting again from a different device or browser. Once a vote is cast, the voter is permanently marked as 'voted'." },
  { q: "How is ballot secrecy maintained?", a: "Vote identity is cryptographically separated from vote content using a split-key architecture. The system records that a voter participated (for audit purposes) but cannot link that voter to their specific ballot choice. Even system administrators and election officials cannot de-anonymize votes." },
  { q: "What does the real-time voting dashboard show?", a: "The dashboard shows live voter turnout, participation percentage, remaining time in the voting window, and voters who haven't yet participated (for reminder purposes). It never shows individual vote content or running tallies that could influence remaining voters." },
  { q: "How are results calculated?", a: "Results are calculated automatically the moment the voting window closes. The system supports single-choice, multi-choice, ranked-choice, and weighted voting tallies. Results can be released instantly to all participants or restricted to administrators first for review before public announcement." },
  { q: "Can we run multiple elections at the same time?", a: "Yes. The multi-election support allows you to configure and run multiple simultaneous or sequential elections. Each election has its own candidates, voter eligibility rules, voting format, time window, and separate audit trail. Perfect for AGMs with multiple resolutions." },
  { q: "How do time-limited voting windows work?", a: "You set a precise start date/time and end date/time for each election. The voting portal automatically opens at the start time and closes at the end time. No votes can be submitted before or after the window. Countdown timers are visible to voters during the active period." },
  { q: "What do the audit logs contain?", a: "The audit logs record every action in the system with immutable timestamps: voter authentication events, ballot submissions (without content), result calculations, admin configuration changes, and access attempts. These logs are tamper-proof and exportable for governance reviews and compliance audits." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EVotingPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Split dark with shield visual
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[100vh] flex items-center bg-[#060a0e]">
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
              <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-[500px]">
                Secure voter authentication, one-person-one-vote guarantee,
                anonymous balloting, real-time dashboards, automated results,
                multi-election support, time-limited windows, and detailed audit
                logs — all in one tamper-proof platform.
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
                <div className="w-[280px] h-[360px] rounded-3xl border-2 border-[#54c7c2]/15 bg-[#54c7c2]/[0.02] backdrop-blur-sm flex flex-col items-center justify-center gap-5 relative">
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#54c7c2] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#060a0e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <svg className="w-14 h-14 text-[#54c7c2]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>

                  {[
                    { val: "Authenticated", label: "Voters Only" },
                    { val: "1 Person", label: "1 Vote" },
                    { val: "Anonymous", label: "Balloting" },
                    { val: "Real-Time", label: "Dashboard" },
                    { val: "Automated", label: "Results" },
                    { val: "Full Audit", label: "Logs" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3 w-full px-7">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#54c7c2]" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-[#54c7c2] font-bold text-[12px]">{s.val}</span>
                        <span className="text-white/30 text-[10px]">{s.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating badges */}
                <div className="absolute -left-14 top-8 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-[#0d1117]/80 backdrop-blur-sm">
                  <span className="text-[#54c7c2] text-[10px] font-bold">Tamper-Proof</span>
                </div>
                <div className="absolute -right-12 top-1/3 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-[#0d1117]/80 backdrop-blur-sm">
                  <span className="text-[#54c7c2] text-[10px] font-bold">Time-Limited</span>
                </div>
                <div className="absolute -left-10 bottom-12 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-[#0d1117]/80 backdrop-blur-sm">
                  <span className="text-[#54c7c2] text-[10px] font-bold">Multi-Election</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES — 2x4 grid (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Core Features</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Everything You Need for{" "}
                <span className="text-[#0e8c86]">Fair, Secure Elections</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-[15px] mb-1.5 group-hover:text-[#0e8c86] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS — 5-step flow (Light gray)
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {VOTING_FLOW.map((p, i) => (
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
              { end: 0, suffix: "1:1", label: "One Person One Vote" },
              { end: 100, suffix: "%", label: "Anonymous Ballots" },
              { end: 0, suffix: "Real-Time", label: "Live Dashboard" },
              { end: 0, suffix: "Instant", label: "Automated Results" },
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
          ELECTION TYPES — Unique section (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Multi-Election Support</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                One Platform,{" "}
                <span className="text-[#0e8c86]">Every Election Format</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Run simultaneous or sequential elections — each with its own
                candidates, voter eligibility, time windows, and audit trail.
              </p>
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
          AUDIT & COMPLIANCE — Deep dive (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
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
                  <p className="text-white font-bold text-[15px]">Every action logged.</p>
                  <p className="text-white/60 text-[12px]">Immutable, timestamped, tamper-proof audit trail.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div>
                <LightEyebrow>Audit & Compliance</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  Detailed Audit Logs for{" "}
                  <span className="text-[#0e8c86]">Complete Transparency</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Every action in the system is recorded in an immutable,
                  timestamped audit log — from voter authentication to result
                  calculation. Full governance compliance guaranteed.
                </p>

                <div className="space-y-3">
                  {[
                    { label: "Voter Authentication Events", desc: "Every login, OTP verification, and access attempt logged" },
                    { label: "Ballot Submission Records", desc: "Encrypted submission timestamps without vote content" },
                    { label: "Result Calculation Logs", desc: "Automated tally process recorded step-by-step" },
                    { label: "Admin Action Tracking", desc: "Every configuration change, election setup, and access logged" },
                    { label: "Time Window Enforcement", desc: "Opening, closing, and any time extension events recorded" },
                    { label: "Exportable Compliance Reports", desc: "Full audit trail exportable in PDF, Excel, CSV for reviews" },
                  ].map((c, i) => (
                    <div
                      key={c.label}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-white hover:border-[#0e8c86]/20 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0e8c86] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[9px] font-extrabold">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <p className="text-gray-900 text-[13px] font-semibold leading-tight group-hover:text-[#0e8c86] transition-colors">
                          {c.label}
                        </p>
                        <p className="text-gray-400 text-[11px]">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
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
          sub="See secure authentication, anonymous balloting, and automated results in a live demo."
        />
      </div>
    </main>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

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