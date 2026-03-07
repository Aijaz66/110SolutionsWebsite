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
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Employee Self-Service Portal (ESS)",
    desc: "Employees view payslips, apply for leave, check attendance records, update personal details, and access company policies — from any device, anytime.",
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
    title: "Attendance & Leave Management",
    desc: "Integrated attendance tracking with leave requests, multi-level approval workflows, balance tracking, accrual calculations, and public holiday calendars.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.5 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z" />
        <path d="M2 21a9 9 0 0118 0" />
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Time Tracking with Biometric Integration",
    desc: "Real-time time tracking synced with fingerprint scanners, face recognition, and RFID devices. Clock-in data flows directly to timesheets and payroll.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Payroll Processing & Compliance",
    desc: "Automated salary calculation with EOBI contributions, income tax deductions, allowances, overtime, and full regulatory compliance — processed in minutes.",
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
    title: "Salary Slip Generation",
    desc: "Auto-generate professional, detailed salary slips with full breakdowns — base pay, allowances, deductions, EOBI, tax — emailed or available via ESS portal.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Role-Based Access Control",
    desc: "Granular role-based permissions — HR admins, managers, supervisors, and employees each see only what they need. Complete audit trail for every action.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 14h4" />
      </svg>
    ),
    title: "Loan & Advance Management",
    desc: "Employee loan requests, advance salary processing, installment deduction scheduling, and balance tracking — all integrated with payroll for automated recovery.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Real-Time HR Dashboards & Reports",
    desc: "Headcount, payroll cost analysis, attendance trends, leave liability, loan summaries, and custom HR dashboards — all in real time with export to PDF, Excel, CSV.",
  },
];

const LIFECYCLE_STEPS = [
  {
    phase: "Recruit",
    title: "Hiring & Onboarding",
    desc: "Job postings, applicant tracking, offer letters, digital contracts, document collection, and induction checklists.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
  {
    phase: "Track",
    title: "Attendance & Time",
    desc: "Biometric integration, real-time tracking, shift scheduling, and automated timesheet generation.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    phase: "Manage",
    title: "Leave & Absence",
    desc: "Leave requests, multi-level approvals, balance tracking, accruals, and holiday calendar management.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    phase: "Pay",
    title: "Payroll & Compliance",
    desc: "Salary calculation, EOBI, tax deductions, allowances, overtime, and automated salary slip generation.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    phase: "Support",
    title: "Loans & Advances",
    desc: "Loan requests, advance salary processing, installment scheduling, and automated payroll deductions.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 14h4" />
      </svg>
    ),
  },
  {
    phase: "Analyse",
    title: "Reports & Dashboards",
    desc: "Real-time HR analytics, payroll cost analysis, attendance trends, and custom management reports.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const PAYROLL_MODULES = [
  { label: "Base Salary & Allowances", desc: "Basic pay, housing, transport, and custom allowances" },
  { label: "EOBI Contributions", desc: "Automated Employees' Old-Age Benefits deductions" },
  { label: "Income Tax Deduction", desc: "Tax bracket calculations based on current slabs" },
  { label: "Overtime & Bonuses", desc: "Overtime rates, performance bonuses, and incentives" },
  { label: "Loan Installment Recovery", desc: "Automated deduction of loan/advance repayments" },
  { label: "Salary Slip Generation", desc: "Professional payslips with full breakdown — emailed or via ESS" },
  { label: "Bank File Export", desc: "Bulk salary payment file generation for bank processing" },
];

const FAQS = [
  { q: "How does the Employee Self-Service Portal work?", a: "The ESS portal gives every employee a personal login where they can view and download salary slips, check attendance records, apply for leave, request loans/advances, update personal details, and access company policies. It works on desktop and mobile — reducing HR admin queries by up to 60%." },
  { q: "Does it handle EOBI and tax compliance?", a: "Yes. The payroll engine automatically calculates EOBI contributions based on current rates and applies income tax deductions according to the latest tax slabs. It generates all required compliance reports and stays updated with regulatory changes." },
  { q: "How does biometric time tracking integrate?", a: "We integrate directly with fingerprint scanners, face recognition terminals, and RFID readers from all major manufacturers. Attendance data syncs in real time to the cloud — feeding directly into timesheets, leave records, and payroll calculations with zero manual entry." },
  { q: "Can employees request loans and salary advances?", a: "Yes. Employees can submit loan and advance requests through the ESS portal. Managers approve via configurable workflows. Once approved, the loan amount is disbursed and installment deductions are automatically scheduled in future payroll cycles until fully recovered." },
  { q: "What kind of reports and dashboards are available?", a: "The system provides real-time dashboards covering headcount, payroll costs, attendance trends, leave liability, loan balances, and department-level analytics. All reports are customizable and exportable in PDF, Excel, and CSV formats. You can also schedule automated report delivery." },
  { q: "How does role-based access control work?", a: "You define roles — HR Admin, Payroll Manager, Department Supervisor, Employee — and assign granular permissions to each. Supervisors see their team's data, employees see only their own records, and HR admins have full access. Every action is logged in a complete audit trail." },
  { q: "Can we manage different pay structures?", a: "Yes. The system supports multiple pay structures — monthly salaried, hourly, daily wage, and custom structures. Each employee can have unique allowance configurations, deduction rules, and overtime calculations. Contractor management with separate invoicing is also supported." },
  { q: "How long does implementation take?", a: "Standard implementation takes 2-4 weeks including employee data migration, payroll configuration, EOBI/tax setup, biometric device integration, role configuration, and team training. Larger organizations with complex pay structures may take 4-6 weeks." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HRPayrollPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Gradient background with side cards
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[100vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060a0e] via-[#0a1628] to-[#0d2137]" />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(84,199,194,0.3) 1px, transparent 1px), linear-gradient(45deg, rgba(84,199,194,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#54c7c2]/[0.06] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0070de]/[0.04] blur-[120px] rounded-full" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center">
            {/* Left — Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
                <svg className="w-4 h-4 text-[#54c7c2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
                <span className="text-[#54c7c2] text-[10px] font-semibold tracking-[0.15em] uppercase">
                  HR & Payroll Software
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.06] tracking-tight mb-5">
                HR & Payroll, Simplified.{" "}
                <span className="text-[#54c7c2]">From Hire to Payslip.</span>
              </h1>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-[520px]">
                Employee self-service, biometric time tracking, automated payroll
                with EOBI and tax compliance, salary slip generation, loan
                management, and real-time HR dashboards — all in one integrated
                platform.
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
                    Book a Free Demo
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

            {/* Right — Stacked feature highlight cards */}
            <div className="hidden lg:flex flex-col gap-3">
              {[
                { val: "ESS Portal", label: "Self-Service", sub: "Payslips, leave, loans — employee access" },
                { val: "Biometric", label: "Time Tracking", sub: "Fingerprint, face, RFID integration" },
                { val: "EOBI + Tax", label: "Full Compliance", sub: "Automated regulatory deductions" },
                { val: "Real-Time", label: "HR Dashboards", sub: "Analytics and custom reports" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm hover:border-[#54c7c2]/15 transition-all"
                >
                  <div className="w-[3px] h-10 rounded-full bg-[#54c7c2] flex-shrink-0" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#54c7c2] font-bold text-[15px]">{s.val}</span>
                      <span className="text-white/50 text-[12px] font-medium">{s.label}</span>
                    </div>
                    <span className="text-white/25 text-[11px]">{s.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HR WORKFLOW — 6-phase lifecycle (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[540px] mx-auto">
              <LightEyebrow center>Complete HR Workflow</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Every HR Function,{" "}
                <span className="text-[#0e8c86]">One Platform</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                From hiring to payroll to analytics — no disconnected tools, no
                data silos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LIFECYCLE_STEPS.map((step, i) => (
              <ScrollReveal key={step.phase} delay={i * 70}>
                <div className="relative p-6 rounded-xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group overflow-hidden">
                  <div className="absolute top-3 right-4 text-[10px] font-bold tracking-widest uppercase text-[#0e8c86]/20 group-hover:text-[#0e8c86]/40 transition-colors">
                    {step.phase}
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0 group-hover:bg-[#0e8c86]/15 transition-colors">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-[15px] mb-1 group-hover:text-[#0e8c86] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed">{step.desc}</p>
                    </div>
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
                Everything Your HR Team{" "}
                <span className="text-[#0e8c86]">Needs in One Place</span>
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
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#54c7c2]/[0.04] blur-[80px]" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { end: 60, suffix: "%", label: "Less HR Admin" },
              { end: 100, suffix: "%", label: "Payroll Accuracy" },
              { end: 0, suffix: "Zero", label: "Manual Calculations" },
              { end: 40, suffix: "+", label: "Companies Using It" },
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
          PAYROLL ENGINE — Unique section (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <LightEyebrow>Payroll Engine</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  Payroll That Runs Itself,{" "}
                  <span className="text-[#0e8c86]">Accurately</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Our payroll engine handles every calculation — from gross pay to
                  net pay — automatically. EOBI contributions, income tax slabs,
                  loan recovery, allowances, and overtime are all configured once
                  and applied every pay cycle without manual intervention.
                </p>

                <div className="space-y-3">
                  {PAYROLL_MODULES.map((m, i) => (
                    <div
                      key={m.label}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50/50 hover:border-[#0e8c86]/20 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0e8c86] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[9px] font-extrabold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 text-[13px] font-semibold leading-tight group-hover:text-[#0e8c86] transition-colors">
                          {m.label}
                        </p>
                        <p className="text-gray-400 text-[11px]">{m.desc}</p>
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
                        "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/50 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-[15px]">One-click payroll.</p>
                  <p className="text-white/60 text-[12px]">
                    EOBI, tax, loans, allowances — all automated.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════��══════════════════════════
          WHO IT'S FOR (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <LightEyebrow center>Who It&apos;s For</LightEyebrow>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mt-3">
                Built for <span className="text-[#0e8c86]">Businesses of Every Size</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "SMBs (10–500 employees)",
              "Enterprises",
              "Schools & Education",
              "Healthcare Providers",
              "Hospitality Groups",
              "Manufacturing",
              "Construction & Trades",
              "Non-Profits & NGOs",
            ].map((w, i) => (
              <ScrollReveal key={w} delay={i * 50}>
                <div className="p-4 rounded-xl border border-gray-200 bg-white text-center hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300">
                  <p className="text-gray-600 text-[12.5px] font-medium">{w}</p>
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
          heading="Ready to Simplify Your HR & Payroll?"
          sub="See ESS portal, biometric integration, and automated payroll in a free live demo."
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
    <div className={`rounded-xl border transition-all duration-300 ${open ? "border-[#0e8c86]/20 bg-[#0e8c86]/[0.02]" : "border-gray-200 bg-gray-50/40 hover:border-gray-300"}`}>
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