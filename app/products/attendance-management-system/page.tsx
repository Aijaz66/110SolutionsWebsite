"use client";

import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import AnimatedCounter from "../../components/AnimatedCounter";
import PageCTA from "../../components/PageCTA";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────���───────────

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
    title: "Biometric & RFID Integration",
    desc: "Fingerprint scanners, face recognition, and RFID card readers for fraud-proof, contactless attendance capture.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Real-Time Dashboard",
    desc: "Live view of who's in, who's late, and who's absent — across all your sites in one unified dashboard.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Automated Timesheets",
    desc: "Clock-in/out data auto-generates timesheets with overtime calculations — zero manual entry, zero errors.",
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
    title: "Leave Management",
    desc: "Integrated leave requests, multi-level approvals, balance tracking, and public holiday calendars — all synced with attendance.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Payroll Integration",
    desc: "Seamless connectivity with your payroll system — attendance hours, overtime, and deductions flow directly for error-free processing.",
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
    title: "Compliance Reporting",
    desc: "Pre-built and custom reports for audits, labour law compliance, and management — exportable in PDF, Excel, and CSV.",
  },
];

const HOW_IT_WORKS = [
  {
    title: "Employee Clocks In",
    desc: "Via biometric scanner, RFID card, mobile app, or web portal — whichever method suits your environment.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.5 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z" />
        <path d="M2 21a9 9 0 0118 0" />
      </svg>
    ),
  },
  {
    title: "Data Captured Instantly",
    desc: "Time, location, and identity verified in real time. Late arrivals and absences flagged automatically.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Timesheets Generated",
    desc: "Daily, weekly, and monthly timesheets auto-calculated with overtime, breaks, and shift differentials.",
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
    title: "Reports & Payroll",
    desc: "Data flows to dashboards, management reports, and your payroll system — no manual intervention needed.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const FAQS = [
  { q: "What biometric devices do you support?", a: "We integrate with all major biometric manufacturers — fingerprint scanners, facial recognition terminals, and RFID/proximity card readers. We can also recommend hardware if you're starting fresh." },
  { q: "Can employees clock in from their phones?", a: "Yes. Our mobile app supports GPS-verified clock-in/out, which is ideal for field workers, remote employees, and multi-site operations. Geo-fencing ensures employees can only clock in from approved locations." },
  { q: "Does it handle shift-based scheduling?", a: "Yes. You can create fixed shifts, rotating rosters, and flexible schedules. The system automatically maps attendance against assigned shifts and flags discrepancies." },
  { q: "How does it integrate with payroll?", a: "We provide direct API integration with popular payroll systems. Attendance hours, overtime, and deductions flow automatically — eliminating manual data entry and reducing payroll errors." },
  { q: "Can we use it across multiple locations?", a: "Absolutely. The system supports unlimited locations with centralised management. Each site can have its own devices, shifts, and rules while reporting rolls up to a single dashboard." },
  { q: "How long does setup take?", a: "Standard setup takes 1-2 weeks including device integration, employee enrollment, shift configuration, and training. Larger deployments with multiple sites may take 3-4 weeks." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AttendancePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Dark with angled bottom edge
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white pb-32 pt-32 min-h-[100vh] flex items-center bg-[#060a0e]">
        {/* Subtle grid background */}
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

        {/* Angled bottom clip */}
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
            <p className="text-white/40 text-[15px] leading-relaxed max-w-[520px] mx-auto mb-8">
              Manual timesheets are error-prone, time-consuming, and a compliance
              risk. Get real-time visibility into workforce attendance with
              automated reports, biometric integration, and seamless payroll
              connectivity.
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
              { val: "99.9%", label: "Data Accuracy" },
              { val: "80%", label: "Admin Time Saved" },
              { val: "Real-Time", label: "Visibility" },
              { val: "Multi-Site", label: "Support" },
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
                <span className="text-[#0e8c86]">Payroll — Automated</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {HOW_IT_WORKS.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div className="relative p-6 text-center group">
                  {/* Connector line */}
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
          FEATURES — 2-column horizontal cards (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Core Features</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Built for{" "}
                <span className="text-[#0e8c86]">Modern Workforce Management</span>
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
              { end: 0, suffix: "Zero", label: "Manual Timesheets" },
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

      {/* ═══════════════════════════════════════════
          CLOCK-IN METHODS — Unique section (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <LightEyebrow>Multiple Clock-In Methods</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  One System,{" "}
                  <span className="text-[#0e8c86]">Every Way to Clock In</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Not every workplace is the same. That&apos;s why our system supports
                  every modern attendance capture method — all feeding into one
                  unified dashboard.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { method: "Fingerprint Scanner", desc: "Physical biometric terminals" },
                    { method: "Face Recognition", desc: "Contactless AI-powered detection" },
                    { method: "RFID / NFC Cards", desc: "Tap-and-go proximity cards" },
                    { method: "Mobile App (GPS)", desc: "Geo-fenced phone check-in" },
                    { method: "Web Portal", desc: "Browser-based clock-in for remote" },
                    { method: "QR Code Scan", desc: "Scan to check in at any kiosk" },
                  ].map((m) => (
                    <div
                      key={m.method}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50/50 hover:border-[#0e8c86]/20 transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0e8c86] flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 text-[13px] font-semibold leading-tight">
                          {m.method}
                        </p>
                        <p className="text-gray-400 text-[11px]">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/50 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-[15px]">
                    All methods. One dashboard.
                  </p>
                  <p className="text-white/60 text-[12px]">
                    Every clock-in flows into the same unified system.
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
              "Retail Chains",
              "Government Departments",
              "Logistics Companies",
              "Construction Sites",
              "Hospitality & Hotels",
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
          sub="See how much time your team can save. Book a free live demo today."
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