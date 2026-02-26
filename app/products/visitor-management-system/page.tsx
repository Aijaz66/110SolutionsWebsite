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
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Digital Check-In Kiosk",
    desc: "A sleek iPad or tablet kiosk replaces your paper sign-in book — visitors check in with name, photo, and purpose in under 30 seconds.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 17H2a3 3 0 003 3h14a3 3 0 003-3z" />
        <path d="M4 17V7a2 2 0 012-2h2" />
        <path d="M18 17V7a2 2 0 00-2-2h-2" />
        <polygon points="12 2 8 7 16 7 12 2" />
      </svg>
    ),
    title: "Instant Host Notifications",
    desc: "Automatic SMS, email, and Slack/Teams alerts to staff the moment their visitor checks in — no reception chasing required.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="1" />
        <path d="M12 17h.01" />
        <circle cx="12" cy="9" r="3" />
      </svg>
    ),
    title: "Badge Printing",
    desc: "Automatic visitor badge printing with name, photo, host name, and visit purpose for clear, professional identification.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
        <line x1="17" y1="7" x2="17.01" y2="7" />
        <line x1="7" y1="17" x2="7.01" y2="17" />
        <line x1="17" y1="17" x2="17.01" y2="17" />
        <line x1="12" y1="12" x2="12.01" y2="12" />
      </svg>
    ),
    title: "Pre-Registration & QR Check-In",
    desc: "Hosts pre-register expected visitors who receive a QR code via email — enabling express check-in in under 10 seconds.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Compliance & Evacuation",
    desc: "Digital visitor log satisfies WHS compliance, and real-time roll calls support emergency evacuation procedures.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "NDA & Document Signing",
    desc: "Visitors digitally sign NDAs, safety inductions, or custom documents at check-in — automatically archived and retrievable.",
  },
];

const VISITOR_JOURNEY = [
  {
    step: "Pre-Register",
    desc: "Host enters visitor details in advance. Visitor receives a confirmation email with a QR code.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
  {
    step: "Arrive & Scan",
    desc: "Visitor scans QR code at the kiosk or enters details manually. Photo captured for badge.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
        <line x1="17" y1="7" x2="17.01" y2="7" />
        <line x1="7" y1="17" x2="7.01" y2="17" />
        <line x1="17" y1="17" x2="17.01" y2="17" />
        <line x1="12" y1="12" x2="12.01" y2="12" />
      </svg>
    ),
  },
  {
    step: "Sign & Badge",
    desc: "Any required documents (NDA, safety) are signed digitally. Badge prints automatically.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    step: "Host Notified",
    desc: "Host receives instant notification via SMS, email, or Slack/Teams. Visitor is welcomed.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    step: "Check-Out",
    desc: "Visitor checks out at kiosk or is auto-checked-out at end of day. Full audit log recorded.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
  },
];

const COMPLIANCE_POINTS = [
  { label: "Digital Visitor Log", desc: "Replaces paper sign-in with a searchable, timestamped digital record" },
  { label: "WHS Compliance", desc: "Satisfies workplace health and safety visitor recording requirements" },
  { label: "Privacy Act Compliant", desc: "Data retention policies, consent collection, and right-to-delete support" },
  { label: "Emergency Evacuation", desc: "Real-time roll call showing every visitor currently on-site" },
  { label: "Document Archival", desc: "Signed NDAs and inductions archived with tamper-proof timestamps" },
  { label: "Audit Reports", desc: "Export complete visitor history filtered by date, host, or purpose" },
];

const FAQS = [
  { q: "What devices does the kiosk run on?", a: "The kiosk app runs on iPads, Android tablets, and Windows touchscreen devices. We recommend iPad for the best experience, but any modern tablet with a camera works. We can also advise on hardware and stand options." },
  { q: "Can visitors check in without pre-registration?", a: "Yes. Walk-in visitors can check in manually at the kiosk by entering their name, contact details, and selecting their host. Pre-registration simply speeds up the process with QR code scanning." },
  { q: "How does badge printing work?", a: "When a visitor completes check-in, a badge is automatically printed on a connected label printer. The badge includes the visitor's name, photo, host name, visit purpose, and date — making identification clear and professional." },
  { q: "Does it send notifications to the host?", a: "Yes. The moment a visitor checks in, the host receives an instant notification via SMS, email, or workplace messaging (Slack, Microsoft Teams). You can configure the notification channels per site." },
  { q: "Is visitor data stored securely?", a: "Yes. All visitor data is encrypted at rest and in transit. Data retention policies are fully configurable — you can set automatic deletion after a defined period to comply with privacy regulations." },
  { q: "Can it handle multiple reception areas?", a: "Absolutely. Multi-location support means you can deploy kiosks at multiple reception points, buildings, or sites — all managed from a centralised admin dashboard with consolidated reporting." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VisitorManagementPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Clean white hero with side kiosk mockup
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[100vh] flex items-center bg-white">
        {/* Subtle bg pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(14,140,134,0.4) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0e8c86]/[0.04] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0e8c86]/[0.03] blur-[120px] rounded-full" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0e8c86]/25 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0e8c86]/20 bg-[#0e8c86]/[0.06] mb-6">
                <svg className="w-4 h-4 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-[#0e8c86] text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Visitor Management System
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.06] tracking-tight text-gray-900 mb-5">
                First Impressions, Secured.{" "}
                <span className="text-[#0e8c86]">Visitors, Managed.</span>
              </h1>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-[480px]">
                Your reception is the first touchpoint for every client, partner,
                and candidate. Replace paper sign-in books with a smart,
                professional, and compliant digital experience — while keeping your
                premises secure.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/110solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-2.5 rounded-lg font-bold text-[13px] overflow-hidden transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-[#0e8c86]" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#12a89f] to-[#0e8c86] transition-opacity" />
                  <span className="relative text-white tracking-wide flex items-center gap-2">
                    Book a Live Demo
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-lg font-semibold text-[13px] border border-gray-300 text-gray-600 hover:border-[#0e8c86]/50 hover:text-[#0e8c86] transition-all"
                >
                  Request a Quote →
                </Link>
              </div>

              {/* Stat row */}
              <div className="mt-10 flex flex-wrap gap-6">
                {[
                  { val: "< 30 sec", label: "Check-In Time" },
                  { val: "Instant", label: "Host Alerts" },
                  { val: "100%", label: "Compliant" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="w-[3px] h-8 rounded-full bg-[#0e8c86]" />
                    <div>
                      <div className="text-gray-900 font-bold text-[14px] leading-tight">{s.val}</div>
                      <div className="text-gray-400 text-[10px]">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Kiosk mockup */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-[300px] h-[420px] rounded-[32px] border-[6px] border-gray-200 bg-gray-50 shadow-xl flex flex-col items-center justify-center gap-4 overflow-hidden">
                  {/* Screen content mockup */}
                  <div className="w-full px-6 pt-8">
                    <div className="w-16 h-16 rounded-full bg-[#0e8c86]/10 border-2 border-[#0e8c86]/20 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <p className="text-gray-900 text-[16px] font-bold text-center mb-1">Welcome</p>
                    <p className="text-gray-400 text-[11px] text-center mb-6">Please check in below</p>
                  </div>

                  <div className="w-full px-6 space-y-2.5">
                    <div className="h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center px-3">
                      <span className="text-gray-300 text-[11px]">Full Name</span>
                    </div>
                    <div className="h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center px-3">
                      <span className="text-gray-300 text-[11px]">Who are you visiting?</span>
                    </div>
                    <div className="h-9 rounded-lg bg-[#0e8c86] flex items-center justify-center">
                      <span className="text-white text-[11px] font-bold">Check In</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                        <line x1="17" y1="7" x2="17.01" y2="7" />
                        <line x1="7" y1="17" x2="7.01" y2="17" />
                        <line x1="17" y1="17" x2="17.01" y2="17" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-[10px]">or scan QR code</span>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -left-16 top-12 px-3 py-1.5 rounded-lg border border-gray-100 bg-white shadow-lg shadow-black/[0.04]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-gray-600 text-[10px] font-semibold">Badge Printed</span>
                  </div>
                </div>
                <div className="absolute -right-14 top-1/3 px-3 py-1.5 rounded-lg border border-gray-100 bg-white shadow-lg shadow-black/[0.04]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0e8c86] animate-pulse" />
                    <span className="text-gray-600 text-[10px] font-semibold">Host Notified</span>
                  </div>
                </div>
                <div className="absolute -left-12 bottom-16 px-3 py-1.5 rounded-lg border border-gray-100 bg-white shadow-lg shadow-black/[0.04]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-gray-600 text-[10px] font-semibold">NDA Signed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VISITOR JOURNEY — 5-step horizontal flow (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[500px] mx-auto">
              <LightEyebrow center>Visitor Journey</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                From Arrival to Departure,{" "}
                <span className="text-[#0e8c86]">Fully Managed</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {VISITOR_JOURNEY.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 90}>
                <div className="relative p-5 rounded-xl border border-gray-100 bg-white h-full group hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#0e8c86]/10 border border-[#0e8c86]/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {step.icon}
                  </div>
                  <div className="text-[10px] text-[#0e8c86] font-bold tracking-widest uppercase mb-1.5">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[14px] mb-1.5 group-hover:text-[#0e8c86] transition-colors">
                    {step.step}
                  </h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES (White — 2-column horizontal)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Core Features</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                A Smarter, Safer{" "}
                <span className="text-[#0e8c86]">Front Desk</span>
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
          STATS (Dark Navy)
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden bg-[#091e2a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2535] via-[#091e2a] to-[#071a24]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#54c7c2]/[0.04] blur-[80px]" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { end: 30, suffix: "s", label: "Avg Check-In Time" },
              { end: 100, suffix: "%", label: "Digital Compliance" },
              { end: 0, suffix: "Zero", label: "Paper Sign-Ins" },
              { end: 40, suffix: "+", label: "Sites Deployed" },
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
          COMPLIANCE — Unique section (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/50 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-[15px]">Compliance built in.</p>
                  <p className="text-white/60 text-[12px]">Every visit logged, archived, and audit-ready.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div>
                <LightEyebrow>Compliance & Security</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  Built for Security,{" "}
                  <span className="text-[#0e8c86]">Built for Compliance</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  From workplace health and safety to privacy regulations, our
                  system ensures every visitor interaction is logged, compliant, and
                  retrievable — giving you confidence during audits and emergencies.
                </p>

                <div className="space-y-3">
                  {COMPLIANCE_POINTS.map((c, i) => (
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
                Trusted Across <span className="text-[#0e8c86]">Every Industry</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Corporate Offices",
              "Government Buildings",
              "Schools & Universities",
              "Hospitals & Clinics",
              "Data Centres",
              "Construction Sites",
              "Hotels & Hospitality",
              "Coworking Spaces",
            ].map((w, i) => (
              <ScrollReveal key={w} delay={i * 50}>
                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 text-center hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300">
                  <p className="text-gray-600 text-[12.5px] font-medium">{w}</p>
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
          heading="Ready to Upgrade Your Front Desk?"
          sub="See the Visitor Management System in a 20-minute live demo. No commitment needed."
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