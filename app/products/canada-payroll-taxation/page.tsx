"use client";

import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import AnimatedCounter from "../../components/AnimatedCounter";
import PageCTA from "../../components/PageCTA";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAYROLL_FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Automated Tax Calculations",
    desc: "Federal and provincial tax brackets, CPP, EI, and other deductions calculated automatically every pay cycle — no manual lookups, no errors.",
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
    title: "Instant Digital Payslips",
    desc: "Professional, detailed payslips generated instantly with full breakdowns — gross pay, deductions, CPP, EI, tax, and net pay. Emailed or downloadable.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Auto-Generate T4, T5, T4A Slips",
    desc: "Automatically generate CRA-compliant T4 (employment income), T5 (investment income), and T4A (other income) slips at year-end — ready for filing and distribution.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Payroll Compliance Checklist",
    desc: "Built-in compliance checklist ensures you never miss a CRA deadline — remittance dates, filing deadlines, and year-end reporting all tracked and flagged automatically.",
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
    title: "Employee Leave Records",
    desc: "Track vacation, sick leave, and statutory holidays for every employee — all maintained for reporting purposes and payroll accuracy.",
  },
];

const TAXATION_FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: "Upload Bank & Credit Card Statements",
    desc: "Upload bank and credit card statements in PDF, CSV, or Excel format. The system parses and imports transactions automatically — no manual data entry.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Auto-Mapped Accounting",
    desc: "Transactions are automatically mapped to the correct accounts using smart categorization rules — effortless bookkeeping with minimal manual intervention.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Automated Financial Statements",
    desc: "Income statements, balance sheets, and general ledgers generated automatically from your imported transactions — real-time financial visibility with zero effort.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    title: "Comprehensive Tax Reports",
    desc: "Generate detailed tax reports ready for CRA filing — GST/HST summaries, T2 corporate tax preparation data, and custom reports for your accountant.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Fully Compliant with Canadian Tax Regulations",
    desc: "Built specifically for Canadian businesses — CRA guidelines, federal and provincial tax rules, CPP/EI rates, and filing requirements all baked in and updated regularly.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Upload Statements",
    desc: "Upload bank and credit card statements in PDF, CSV, or Excel. Transactions are parsed and imported automatically.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Auto-Map & Categorize",
    desc: "Smart rules automatically categorize transactions to the correct accounts. Review and approve with one click.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Run Payroll",
    desc: "Calculate taxes, CPP, EI, and deductions automatically. Generate payslips and process payments in minutes.",
    icon: (
      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Generate Reports & Slips",
    desc: "Financial statements, tax reports, T4/T5/T4A slips — all generated automatically, CRA-compliant and ready to file.",
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
  { q: "How does automated tax calculation work?", a: "The system automatically applies the correct federal and provincial tax brackets, CPP contributions, and EI premiums based on each employee's province of employment, annual salary, and TD1 form elections. Tax tables are updated regularly to reflect CRA rate changes." },
  { q: "What are T4, T5, and T4A slips?", a: "T4 slips report employment income and deductions. T5 slips report investment income (dividends, interest). T4A slips report other income like pensions, scholarships, or self-employment commissions. Our system auto-generates all three based on your payroll and financial data, formatted for CRA filing." },
  { q: "What formats can I upload bank statements in?", a: "The system accepts bank and credit card statements in PDF, CSV, and Excel (XLS/XLSX) formats. Once uploaded, transactions are parsed automatically, mapped to accounts, and ready for categorization — eliminating manual data entry entirely." },
  { q: "How does auto-mapped accounting work?", a: "When you upload statements, the system uses smart categorization rules to automatically map each transaction to the correct account in your chart of accounts. It learns from your corrections over time, becoming more accurate. You can also set up custom rules for recurring vendors or transaction types." },
  { q: "What financial statements are generated?", a: "The system automatically generates Income Statements (Profit & Loss), Balance Sheets, and General Ledgers from your imported transactions and payroll data. These update in real time and are available on-demand in PDF, Excel, or CSV format." },
  { q: "Is this compliant with CRA regulations?", a: "Yes. The system is built specifically for Canadian businesses and follows all CRA guidelines — federal and provincial tax rates, CPP/EI contribution limits, T4/T5/T4A slip formats, remittance deadlines, and year-end reporting requirements. Tax tables and compliance rules are updated regularly." },
  { q: "Can I track employee leave?", a: "Yes. The system maintains leave records for all employees — vacation days, sick leave, and statutory holidays. This data is tracked for reporting purposes and ensures payroll accuracy when calculating vacation pay and statutory entitlements." },
  { q: "How does the payroll compliance checklist work?", a: "The built-in compliance checklist tracks all CRA deadlines — payroll remittance due dates, T4/T5/T4A filing deadlines, and year-end reporting timelines. You receive alerts and notifications as deadlines approach, ensuring you never miss a filing or payment." },
  { q: "How long does setup take?", a: "Most businesses are up and running within 1-2 weeks. Setup includes importing your employee records, configuring payroll settings (pay frequency, deductions, benefits), connecting bank statement uploads, and a training session for your team." },
];

// ─── Page ──────────────────────────────────────────��──────────────────────────

export default function CanadaPayrollTaxationPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Dark with Canadian accent
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
                <span className="text-[16px]">🇨🇦</span>
                <span className="text-[#54c7c2] text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Canada Payroll & Taxation
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.06] tracking-tight mb-5">
                Canadian Payroll & Tax,{" "}
                <span className="text-[#54c7c2]">Simplified.</span>
              </h1>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-[520px]">
                Simplify payroll and taxation for your Canadian business. Automate
                tax calculations, generate T4/T5/T4A slips, track employee leave,
                and prepare financial statements effortlessly. Upload bank and
                credit card statements in PDF, CSV, or Excel — while income
                statements, balance sheets, and general ledgers are generated
                automatically.
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

            {/* Right — Stacked highlight cards */}
            <div className="hidden lg:flex flex-col gap-3">
              {[
                { val: "T4 / T5 / T4A", label: "Auto-Generated", sub: "CRA-compliant year-end slips" },
                { val: "PDF / CSV / Excel", label: "Statement Upload", sub: "Bank & credit card imports" },
                { val: "CPP + EI + Tax", label: "Auto-Calculated", sub: "Federal & provincial rates" },
                { val: "Real-Time", label: "Financial Statements", sub: "Income, balance sheet, GL" },
                { val: "CRA Compliant", label: "Fully Canadian", sub: "Built for Canadian businesses" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm hover:border-[#54c7c2]/15 transition-all"
                >
                  <div className="w-[3px] h-9 rounded-full bg-[#54c7c2] flex-shrink-0" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#54c7c2] font-bold text-[14px]">{s.val}</span>
                      <span className="text-white/50 text-[11px] font-medium">{s.label}</span>
                    </div>
                    <span className="text-white/25 text-[10px]">{s.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PAYROLL FEATURES (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Payroll</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Canadian Payroll,{" "}
                <span className="text-[#0e8c86]">Fully Automated</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                From tax calculations to T4 slips — everything your Canadian
                business needs to run payroll compliantly.
              </p>
            </div>
          </ScrollReveal>

          {/* Top 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {PAYROLL_FEATURES.slice(0, 3).map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group">
                  <div className="w-11 h-11 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mb-4 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-1.5 group-hover:text-[#0e8c86] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom 2 centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[880px] mx-auto">
            {PAYROLL_FEATURES.slice(3).map((f, i) => (
              <ScrollReveal key={f.title} delay={(i + 3) * 60}>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group">
                  <div className="w-11 h-11 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mb-4 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-1.5 group-hover:text-[#0e8c86] transition-colors">
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
          TAXATION FEATURES (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Taxation</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Tax & Bookkeeping,{" "}
                <span className="text-[#0e8c86]">On Autopilot</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Upload your statements, let the system handle the rest — auto-mapped
                accounting, financial statements, and CRA-compliant tax reports.
              </p>
            </div>
          </ScrollReveal>

          {/* Top 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {TAXATION_FEATURES.slice(0, 3).map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group">
                  <div className="w-11 h-11 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mb-4 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-1.5 group-hover:text-[#0e8c86] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom 2 centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[880px] mx-auto">
            {TAXATION_FEATURES.slice(3).map((f, i) => (
              <ScrollReveal key={f.title} delay={(i + 3) * 60}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group">
                  <div className="w-11 h-11 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mb-4 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-1.5 group-hover:text-[#0e8c86] transition-colors">
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
          HOW IT WORKS (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[500px] mx-auto">
              <LightEyebrow center>How It Works</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                From Upload to{" "}
                <span className="text-[#0e8c86]">Filing — Automated</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOW_IT_WORKS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 90}>
                <div className="relative p-6 rounded-xl border border-gray-100 bg-gray-50/30 h-full group hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#0e8c86]/10 border border-[#0e8c86]/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {step.icon}
                  </div>
                  <div className="text-[10px] text-[#0e8c86] font-bold tracking-widest uppercase mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-2 group-hover:text-[#0e8c86] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[12.5px] leading-relaxed">{step.desc}</p>
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
              { end: 100, suffix: "%", label: "CRA Compliant" },
              { end: 3, suffix: " Formats", label: "PDF, CSV, Excel" },
              { end: 0, suffix: "Auto", label: "T4/T5/T4A Generation" },
              { end: 0, suffix: "Real-Time", label: "Financial Statements" },
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
          STATEMENT UPLOAD — Deep dive (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <LightEyebrow>Statement Upload</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  Upload Your Statements,{" "}
                  <span className="text-[#0e8c86]">We Handle the Rest</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Simply upload your bank and credit card statements in any format —
                  the system parses transactions, maps them to accounts, and
                  generates your financial statements automatically.
                </p>

                <div className="space-y-3">
                  {[
                    { label: "PDF Statement Upload", desc: "Bank-issued PDF statements parsed with AI-powered extraction" },
                    { label: "CSV Import", desc: "Standard CSV exports from any bank processed instantly" },
                    { label: "Excel Upload", desc: "XLS and XLSX spreadsheets imported with column auto-detection" },
                    { label: "Smart Categorization", desc: "Transactions auto-mapped to accounts with learning rules" },
                    { label: "Income Statement", desc: "Generated automatically from categorized transactions" },
                    { label: "Balance Sheet & GL", desc: "Real-time balance sheet and general ledger always up to date" },
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
                  <p className="text-white font-bold text-[15px]">Upload. Auto-map. Done.</p>
                  <p className="text-white/60 text-[12px]">
                    PDF, CSV, Excel — financial statements generated automatically.
                  </p>
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
                Built for <span className="text-[#0e8c86]">Canadian Businesses</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Small Businesses",
              "Freelancers & Contractors",
              "Startups",
              "Accounting Firms",
              "Non-Profits",
              "Professional Services",
              "Retail & E-Commerce",
              "Multi-Province Operations",
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
          heading="Simplify Your Canadian Payroll & Tax."
          sub="See automated T4/T5/T4A generation, statement uploads, and financial reporting in a live demo."
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