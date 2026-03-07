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
        <path d="M5.5 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z" />
        <path d="M2 21a9 9 0 0118 0" />
        <path d="M19.5 7.5a3.5 3.5 0 010 7" />
        <path d="M22 21a6 6 0 00-4-5.65" />
      </svg>
    ),
    title: "Biometric Attendance",
    desc: "Fingerprint scanning and AI-powered face recognition for fraud-proof, contactless identity verification at every clock-in.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    title: "RFID-Based Attendance",
    desc: "Tap-and-go RFID and NFC card readers for instant, high-throughput attendance capture — ideal for large workforces and shift changes.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Real-Time Device Synchronization",
    desc: "Attendance data syncs instantly from biometric devices to the cloud — no delays, no manual uploads, no data loss.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
    title: "Cloud-Based Centralized System",
    desc: "One centralized cloud platform for all locations — access attendance data from anywhere, manage unlimited sites from a single dashboard.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Smart Time & Shift Scheduling",
    desc: "Create fixed shifts, rotating rosters, and flexible schedules. The system auto-maps attendance against assigned shifts and flags discrepancies.",
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
    title: "Auto-Generated & Customizable Reports",
    desc: "Daily, weekly, and monthly reports auto-generated with overtime, late arrivals, and absences — fully customizable and exportable in PDF, Excel, and CSV.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Role-Based Access & Permissions",
    desc: "Granular role-based access control — admins, HR managers, supervisors, and employees each see only what they need. Full audit trail included.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Integrated Leave & Absence Management",
    desc: "Leave requests, multi-level approvals, balance tracking, and public holiday calendars — all synced with attendance data for a complete workforce picture.",
  },
];

const HOW_IT_WORKS = [
  {
    title: "Employee Clocks In",
    desc: "Via fingerprint, face recognition, RFID card, or mobile app — whichever method suits your workplace.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.5 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z" />
        <path d="M2 21a9 9 0 0118 0" />
      </svg>
    ),
  },
  {
    title: "Real-Time Sync to Cloud",
    desc: "Data instantly syncs from biometric devices to the centralized cloud system. Late arrivals and absences flagged automatically.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Reports Auto-Generated",
    desc: "Daily, weekly, and monthly reports with overtime, shift compliance, and attendance summaries — generated automatically.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Insights & Integration",
    desc: "Data flows to dashboards, management reports, and your payroll/HR system — no manual intervention needed.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const DEVICE_INTEGRATIONS = [
  { label: "Fingerprint Scanners", desc: "ZKTeco, Suprema, HID, and all major brands" },
  { label: "Face Recognition Terminals", desc: "AI-powered contactless detection devices" },
  { label: "RFID / NFC Readers", desc: "Proximity cards, key fobs, and wristbands" },
  { label: "Biometric Tablets", desc: "Standalone kiosk-style biometric terminals" },
  { label: "Mobile Devices", desc: "GPS-verified clock-in via iOS & Android app" },
  { label: "Web Portal", desc: "Browser-based attendance for remote teams" },
];

const FAQS = [
  { q: "What biometric devices do you support?", a: "We integrate with all major biometric manufacturers including ZKTeco, Suprema, and HID — supporting fingerprint scanners, facial recognition terminals, and RFID/NFC card readers. If you're starting fresh, we can recommend the best hardware for your environment." },
  { q: "How does real-time synchronization work?", a: "Our system maintains a persistent connection with your biometric devices via API or SDK integration. The moment an employee clocks in, the data is transmitted to the cloud in real time — typically within 1-2 seconds. If connectivity drops, data queues locally and syncs when the connection restores." },
  { q: "Can we set up different shifts for different teams?", a: "Yes. The Smart Time & Shift Scheduling module lets you create fixed shifts, rotating rosters, split shifts, and flexible schedules. You can assign shifts by team, department, or individual — and the system automatically flags attendance against the correct schedule." },
  { q: "What kind of reports can we generate?", a: "The system auto-generates daily, weekly, and monthly reports including attendance summaries, late arrivals, early departures, overtime calculations, absence tracking, and shift compliance. All reports are fully customizable and exportable in PDF, Excel, and CSV formats." },
  { q: "How does role-based access work?", a: "You define roles (Admin, HR Manager, Supervisor, Employee) and assign granular permissions to each. Admins see everything. Supervisors see their team's attendance. Employees see only their own records. Every action is logged in a complete audit trail." },
  { q: "Does it integrate with leave management?", a: "Yes. Leave management is fully integrated. Employees can apply for leave, managers approve via multi-level workflows, and leave balances update automatically. Leave data syncs with attendance so you always have a complete picture of workforce availability." },
  { q: "Can we use it across multiple locations?", a: "Absolutely. The cloud-based centralized system supports unlimited locations. Each site can have its own devices, shifts, and rules while all data rolls up to a single dashboard for organization-wide visibility." },
  { q: "How long does setup take?", a: "Standard setup takes 1-2 weeks including device integration, employee enrollment, shift configuration, role setup, and training. Larger deployments with multiple sites and complex shift patterns may take 3-4 weeks." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AttendancePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Dark with angled bottom edge
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white pb-32 pt-32 min-h-[100vh] flex items-center bg-[#060a0e]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(84,199,194,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.4) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#54c7c2]/[0.06] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0070de]/[0.04] blur-[100px] rounded-full" />
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0 80L1440 0V80H0Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full">
          <div className="max-w-[680px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
              <svg className="w-4 h-4 text-[#54c7c2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-[#54c7c2] text-[11px] font-semibold tracking-[0.12em] uppercase">
                Attendance Management System
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight mb-5">
              Time & Attendance,{" "}
              <span className="text-[#54c7c2]">Fully Automated.</span>
            </h1>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-[540px] mx-auto mb-8">
              Biometric fingerprint, face recognition, and RFID-based attendance —
              all synced in real time to a centralized cloud platform. Automated
              reports, smart scheduling, and integrated leave management in one
              system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://calendly.com/110solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 rounded-lg font-bold text-[13px] overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-[#54c7c2]" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity" />
                <span className="relative text-[#060a0e] tracking-wide flex items-center gap-2 justify-center">
                  Book a Live Demo
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-lg font-semibold text-[13px] border border-white/20 text-white/60 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all"
              >
                Request a Quote →
              </Link>
            </div>
          </div>

          {/* Floating stat pills */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[700px] mx-auto">
            {[
              { val: "Biometric", label: "Fingerprint & Face" },
              { val: "RFID", label: "Card-Based" },
              { val: "Cloud", label: "Centralized System" },
              { val: "Real-Time", label: "Device Sync" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#54c7c2] flex-shrink-0" />
                <div>
                  <div className="text-[#54c7c2] font-bold text-[13px] leading-none">
                    {s.val}
                  </div>
                  <div className="text-white/35 text-[10px] mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS — Horizontal flow (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[500px] mx-auto">
              <LightEyebrow center>How It Works</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                From Clock-In to{" "}
                <span className="text-[#0e8c86]">Reports — Automated</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {HOW_IT_WORKS.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div className="relative p-6 text-center group">
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:block absolute top-12 right-0 w-full h-[2px] bg-gradient-to-r from-[#0e8c86]/20 to-[#0e8c86]/5 translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#0e8c86]/10 border border-[#0e8c86]/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0e8c86]/15 transition-colors">
                      {step.icon}
                    </div>
                    <div className="text-[10px] text-[#0e8c86] font-bold tracking-widest uppercase mb-2">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-gray-900 font-bold text-[15px] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-[12.5px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES — 2x4 grid (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Core Features</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Everything You Need for{" "}
                <span className="text-[#0e8c86]">Complete Attendance Control</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-[15px] mb-1.5 group-hover:text-[#0e8c86] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      {f.desc}
                    </p>
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
              { end: 80, suffix: "%", label: "Admin Time Saved" },
              { end: 99, suffix: ".9%", label: "Data Accuracy" },
              { end: 0, suffix: "Real-Time", label: "Device Sync" },
              { end: 50, suffix: "+", label: "Deployments" },
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

      {/* ══════════════════════════════════════════��
          DEVICE INTEGRATIONS — Unique section (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <LightEyebrow>Device Integration</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  Works With{" "}
                  <span className="text-[#0e8c86]">Every Attendance Device</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Our cloud-based system connects to all major biometric and RFID
                  hardware — syncing data in real time. Already have devices? We
                  integrate with them. Starting fresh? We&apos;ll recommend the best fit.
                </p>

                <div className="space-y-3">
                  {DEVICE_INTEGRATIONS.map((d, i) => (
                    <div
                      key={d.label}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50/50 hover:border-[#0e8c86]/20 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0e8c86] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[9px] font-extrabold">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <p className="text-gray-900 text-[13px] font-semibold leading-tight group-hover:text-[#0e8c86] transition-colors">
                          {d.label}
                        </p>
                        <p className="text-gray-400 text-[11px]">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/50 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-[15px]">
                    All devices. One cloud platform.
                  </p>
                  <p className="text-white/60 text-[12px]">
                    Fingerprint, face, RFID — all synced in real time.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO IT'S FOR — Rounded pills (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <LightEyebrow center>Who It&apos;s For</LightEyebrow>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mt-3">
                Trusted Across <span className="text-[#0e8c86]">Industries</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Corporate Offices",
              "Schools & Universities",
              "Healthcare Facilities",
              "Manufacturing Plants",
              "Government Departments",
              "Logistics Companies",
              "Construction Sites",
              "Hospitality & Hotels",
              "Multi-Site Organizations",
            ].map((w, i) => (
              <ScrollReveal key={w} delay={i * 40}>
                <div className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-600 text-[13px] font-medium hover:border-[#0e8c86]/30 hover:text-[#0e8c86] hover:shadow-sm transition-all cursor-default">
                  {w}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <LightEyebrow center>FAQ</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                Common <span className="text-[#0e8c86]">Questions</span>
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
          heading="Ready to Automate Attendance Tracking?"
          sub="See how biometric and RFID-based attendance works in a free live demo."
        />
      </div>
    </main>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function LightEyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
      <div className="w-5 h-[2px] bg-[#0e8c86]" />
      <span className="text-[#0e8c86] text-[10px] font-bold tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-all duration-300 ${
        open
          ? "border-[#0e8c86]/20 bg-[#0e8c86]/[0.02]"
          : "border-gray-200 bg-gray-50/40 hover:border-gray-300"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span
          className={`font-semibold text-[14px] pr-4 transition-colors ${
            open ? "text-[#0e8c86]" : "text-gray-900"
          }`}
        >
          {question}
        </span>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? "bg-[#0e8c86] rotate-180" : "bg-gray-100"
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 ${open ? "text-white" : "text-gray-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 text-gray-500 text-[13px] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}