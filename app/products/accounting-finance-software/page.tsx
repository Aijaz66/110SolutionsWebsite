"use client";

import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import AnimatedCounter from "../../components/AnimatedCounter";
import PageCTA from "../../components/PageCTA";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Accounting & Finance Software | Financial Management System — 110 Solutions",
//   description:
//     "Comprehensive accounting and finance management software. Manage invoicing, expenses, reporting, tax compliance, and multi-entity finances in one integrated platform.",
//   keywords:
//     "accounting software, finance management system, invoicing software, tax software, business accounting system, financial reporting software",
// };

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Invoicing & Billing",
    desc: "Create, send, and track professional invoices with automated payment reminders, recurring billing, and online payment integration.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Expense Management",
    desc: "Capture receipts, categorise expenses, manage approval workflows, and track budgets in real time across departments.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Tax Compliance",
    desc: "Automated tax calculations, tax return preparation, and compliance-ready reporting — built for local regulations and standards.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Financial Reporting",
    desc: "P&L statements, balance sheets, cash flow reports, and custom dashboards — all updated in real time with drill-down detail.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Accounts Payable & Receivable",
    desc: "Manage supplier payments and customer collections with aging reports, automated reminders, and cash flow forecasting.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Multi-Entity Management",
    desc: "Manage multiple business entities from one platform — consolidate financials, compare performance, and generate group reports.",
  },
];

const MODULES = [
  {
    title: "General Ledger",
    desc: "The backbone of your financial system — chart of accounts, journal entries, trial balance, and automated reconciliation.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    title: "Accounts Payable",
    desc: "Vendor management, purchase orders, invoice matching, payment scheduling, and supplier aging reports.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: "Accounts Receivable",
    desc: "Customer invoicing, payment tracking, automated reminders, credit management, and collection workflows.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Budgeting & Forecasting",
    desc: "Create annual budgets, track actuals vs budget, and generate variance reports with forecasting models.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Fixed Asset Management",
    desc: "Track assets, calculate depreciation, manage disposals, and maintain a complete asset register with audit trail.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Bank Reconciliation",
    desc: "Automated bank feed import, smart matching, exception handling, and real-time reconciliation across all accounts.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const FAQS = [
  { q: "Can this replace our current accounting software?", a: "Yes. Our system covers general ledger, AP/AR, invoicing, expense management, tax compliance, financial reporting, and multi-entity management. Most businesses can fully replace tools like MYOB, Xero, or QuickBooks." },
  { q: "Does it handle tax compliance?", a: "Yes. The system handles automated tax calculations, tax return preparation, and generates compliance-ready reports aligned with local regulations and standards." },
  { q: "Can we manage multiple companies?", a: "Absolutely. Multi-entity support lets you manage separate companies, consolidate financials across entities, and generate group-level reports from a single platform." },
  { q: "Does it integrate with our bank?", a: "Yes. We support automated bank feeds for major banks, with smart transaction matching, exception handling, and real-time reconciliation." },
  { q: "How is pricing structured?", a: "Pricing is based on the number of users and modules required. We offer flexible monthly or annual plans. Contact us for a customised quote based on your business size." },
  { q: "How long does implementation take?", a: "Standard implementations take 2-4 weeks including data migration, configuration, and training. Complex multi-entity setups may take 4-6 weeks." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AccountingFinancePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[100vh] flex items-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-[#000000]/85 to-[#000000]/95" />
          <div className="absolute inset-0 bg-[#091e2a]/30" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/25 text-[10px] tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#54c7c2] animate-pulse" />
                <span className="text-[#54c7c2] text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Accounting & Finance
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.08] tracking-tight mb-5">
                Your Finances, Under{" "}
                <span className="text-[#54c7c2]">Complete Control.</span>
              </h1>
              <p className="text-white/45 text-[15px] leading-relaxed mb-8 max-w-[480px]">
                Spreadsheets break. Manual bookkeeping is a risk. Our Accounting &
                Finance software gives you real-time financial visibility, automated
                compliance, and reporting clarity to make confident business
                decisions.
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

            {/* Right — Key highlights */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "Real-Time", label: "Financial Reporting", icon: "📊" },
                { val: "Tax Ready", label: "Full Compliance", icon: "🛡️" },
                { val: "Multi-Entity", label: "Support Built In", icon: "🏢" },
                { val: "Bank Feeds", label: "Auto Reconciliation", icon: "🏦" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-center hover:border-[#54c7c2]/20 transition-all"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-[#54c7c2] font-extrabold text-[15px] mb-0.5">
                    {s.val}
                  </div>
                  <div className="text-white/40 text-[11px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OVERVIEW (Light — zigzag)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white" id="overview">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div>
                <LightEyebrow>Overview</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  Complete Financial Visibility,{" "}
                  <span className="text-[#0e8c86]">Zero Guesswork</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Stop chasing spreadsheets and reconciling manually. Our platform
                  centralises every financial operation — invoicing, expenses, tax,
                  and reporting — into one real-time system that gives you the
                  clarity to make faster, smarter decisions.
                </p>

                <div className="space-y-3">
                  {[
                    "Real-time P&L, balance sheet, and cash flow at a glance",
                    "Automated invoicing with online payment collection",
                    "Expense capture with receipt scanning and approval workflows",
                    "Tax-compliant calculations and reporting out of the box",
                    "Bank feed integration with smart auto-reconciliation",
                    "Role-based access so every user sees only what they should",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-[13.5px] text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-[#0e8c86]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#0e8c86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          KEY FEATURES (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Key Features</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Everything You Need to{" "}
                <span className="text-[#0e8c86]">Run Your Finances</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Purpose-built features that address real financial management
                challenges — not a bloated feature list.
              </p>
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
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MODULES — Unique to this product (zigzag right)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <LightEyebrow>Included Modules</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                  Modular by Design,{" "}
                  <span className="text-[#0e8c86]">Unified in Practice</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Each module works independently or together as a complete
                  financial management suite. Start with what you need, add modules
                  as you grow.
                </p>
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[4/3]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-3">
              {MODULES.map((m, i) => (
                <ScrollReveal key={m.title} delay={i * 60}>
                  <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/40 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 group flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0 group-hover:bg-[#0e8c86]/15 transition-colors">
                      {m.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-[15px] mb-1 group-hover:text-[#0e8c86] transition-colors">
                        {m.title}
                      </h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
              { end: 60, suffix: "%", label: "Faster Month-End Close" },
              { end: 99, suffix: ".9%", label: "Reconciliation Accuracy" },
              { end: 10, suffix: "x", label: "Faster Invoice Processing" },
              { end: 100, suffix: "%", label: "Tax Compliance" },
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
          ONBOARDING PROCESS (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Getting Started</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Up and Running in{" "}
                <span className="text-[#0e8c86]">Weeks, Not Months</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Discovery", desc: "We understand your current accounting processes, chart of accounts, and reporting requirements." },
              { step: "02", title: "Configuration", desc: "We set up your chart of accounts, tax rules, approval workflows, and user roles to match your operations." },
              { step: "03", title: "Data Migration", desc: "We migrate your historical financial data — balances, transactions, customers, and suppliers — with full validation." },
              { step: "04", title: "Training & Go-Live", desc: "Hands-on training for your team, parallel running period, then full go-live with dedicated support." },
            ].map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 80}>
                <div className="relative p-6 rounded-xl border border-gray-100 bg-white h-full group hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all">
                  <div className="absolute top-3 right-4 text-[48px] font-black text-gray-100 leading-none select-none group-hover:text-[#0e8c86]/[0.08] transition-colors">
                    {p.step}
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#0e8c86] flex items-center justify-center mb-4">
                    <span className="text-white text-[12px] font-extrabold">{p.step}</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-2 group-hover:text-[#0e8c86] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO IT'S FOR (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-[520px] mx-auto">
              <LightEyebrow center>Who It&apos;s For</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Built for{" "}
                <span className="text-[#0e8c86]">Every Business Type</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "SMBs & Startups",
              "Accountants & Bookkeepers",
              "Non-Profits",
              "Retail & Hospitality",
              "Professional Services",
              "Construction & Trades",
              "Healthcare Practices",
              "Multi-Entity Organisations",
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
          heading="Take Control of Your Business Finances."
          sub="Book a free demo and see how much clearer your financial picture can be."
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
          : "border-gray-200 bg-white hover:border-gray-300"
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