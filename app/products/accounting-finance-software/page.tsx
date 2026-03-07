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
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: "General Ledger (GL) Management",
    desc: "The backbone of your financial system — journal entries, trial balance, closing entries, and multi-period reporting. All transactions flow into a single, unified ledger.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Accounts Payable (AP)",
    desc: "Vendor management, purchase order matching, payment scheduling, supplier aging reports, and automated payment runs — ensuring you never miss a due date.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Accounts Receivable (AR)",
    desc: "Customer invoicing, payment tracking, automated payment reminders, credit management, collection workflows, and customer aging reports for healthy cash flow.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Bank Reconciliation",
    desc: "Automated bank feed import, smart transaction matching, exception handling, and real-time reconciliation across all your bank accounts — eliminating manual matching.",
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
    title: "Chart of Accounts",
    desc: "Fully configurable chart of accounts with unlimited levels, account groupings, and custom hierarchies. Pre-built templates available or create your own from scratch.",
  },
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
    desc: "Create, send, and track professional invoices with automated payment reminders, recurring billing, online payment integration, and customizable invoice templates.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Tax Management",
    desc: "Automated tax calculations based on current rates and slabs, tax return preparation support, withholding management, and compliance-ready reporting for all tax obligations.",
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
    desc: "Profit & loss, balance sheet, cash flow statements, trial balance, and custom dashboards — all updated in real time with drill-down detail and exportable in PDF, Excel, CSV.",
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
    title: "Audit Trail",
    desc: "Complete, immutable log of every financial transaction, modification, and user action — timestamped and tamper-proof for full audit compliance and governance requirements.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Role-Based Access Control",
    desc: "Granular permissions for accountants, managers, auditors, and staff — each user sees only what they need. Segregation of duties enforced with complete access logging.",
  },
];

const ACCOUNTING_FLOW = [
  { step: "01", title: "Record Transactions", desc: "All financial transactions — invoices, payments, expenses — recorded in the General Ledger automatically." },
  { step: "02", title: "Reconcile Accounts", desc: "Bank feeds auto-imported and matched. AR and AP balances reconciled in real time." },
  { step: "03", title: "Generate Reports", desc: "P&L, balance sheet, cash flow, and custom reports generated instantly with drill-down detail." },
  { step: "04", title: "Tax & Compliance", desc: "Tax calculations applied automatically. Compliance-ready reports generated for tax obligations." },
  { step: "05", title: "Audit & Review", desc: "Complete audit trail available for every transaction. Role-based access ensures segregation of duties." },
];

const FAQS = [
  { q: "How does General Ledger management work?", a: "The General Ledger is the central repository for all financial transactions. Every invoice, payment, expense, and journal entry automatically posts to the GL. You can view trial balances, run closing entries, and generate financial statements — all from the GL module. Multi-period and multi-entity support included." },
  { q: "What does Accounts Payable cover?", a: "The AP module handles the complete vendor payment lifecycle: vendor master records, purchase order matching, invoice entry, payment scheduling, automated payment runs, and supplier aging reports. You can set up approval workflows so payments require authorization before processing." },
  { q: "How does Accounts Receivable help with collections?", a: "The AR module tracks every customer invoice from creation to payment. It sends automated payment reminders, manages credit limits, generates customer aging reports, and provides collection workflows. You always know who owes you money, how much, and how overdue it is." },
  { q: "How does bank reconciliation work?", a: "The system imports bank feeds automatically (or via file upload). Our smart matching engine reconciles transactions against your ledger entries. Unmatched items are flagged for manual review. Real-time reconciliation across all bank accounts ensures your books are always up to date." },
  { q: "Can we customize the Chart of Accounts?", a: "Yes. The Chart of Accounts is fully configurable — unlimited account levels, custom groupings, account hierarchies, and account types. We provide pre-built templates for common industries, or you can create your own structure from scratch. Accounts can be added or modified at any time." },
  { q: "What financial reports are available?", a: "The system generates Profit & Loss statements, Balance Sheets, Cash Flow statements, Trial Balances, Aging Reports (AP and AR), Tax Reports, and custom management dashboards. All reports update in real time, support drill-down to transaction level, and export to PDF, Excel, and CSV." },
  { q: "How does the audit trail work?", a: "Every transaction, modification, and user action is logged with an immutable timestamp. The audit trail records who did what, when, and what changed — including before and after values. Audit logs are tamper-proof and can be exported for external auditors or governance reviews." },
  { q: "How does role-based access control work?", a: "You define roles — Accountant, Finance Manager, Auditor, Staff — and assign granular permissions. For example, accountants can post journals but only managers can approve payments. Auditors get read-only access to everything. Segregation of duties is enforced system-wide with complete access logging." },
  { q: "How long does implementation take?", a: "Standard implementations take 2-4 weeks including chart of accounts setup, data migration, bank reconciliation configuration, user role setup, and training. Complex multi-entity deployments with historical data migration may take 4-6 weeks." },
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
                  Accounting Management System
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.08] tracking-tight mb-5">
                Your Finances, Under{" "}
                <span className="text-[#54c7c2]">Complete Control.</span>
              </h1>
              <p className="text-white/45 text-[15px] leading-relaxed mb-8 max-w-[500px]">
                General Ledger, Accounts Payable & Receivable, bank reconciliation,
                invoicing, tax management, financial reporting, audit trail, and
                role-based access — all in one integrated accounting platform.
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
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {[
                { val: "GL", label: "General Ledger", sub: "Central financial backbone" },
                { val: "AP / AR", label: "Payable & Receivable", sub: "Vendor & customer management" },
                { val: "Bank", label: "Reconciliation", sub: "Auto-imported & matched" },
                { val: "Reports", label: "Financial Statements", sub: "Real-time P&L, BS, Cash Flow" },
                { val: "Tax", label: "Management", sub: "Automated compliance" },
                { val: "Audit", label: "Trail & RBAC", sub: "Tamper-proof access control" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-[#54c7c2]/20 transition-all"
                >
                  <div className="text-[#54c7c2] font-extrabold text-[14px] mb-0.5">
                    {s.val}
                  </div>
                  <div className="text-white/60 text-[11px] font-medium">{s.label}</div>
                  <div className="text-white/25 text-[10px] mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES — 2x5 grid (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Core Features</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Everything You Need to{" "}
                <span className="text-[#0e8c86]">Run Your Finances</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                10 integrated modules covering the complete accounting lifecycle —
                from transaction entry to audit-ready reports.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 50}>
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
                The Accounting Workflow,{" "}
                <span className="text-[#0e8c86]">Simplified</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {ACCOUNTING_FLOW.map((p, i) => (
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
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#54c7c2]/[0.04] blur-[80px]" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { end: 10, suffix: "", label: "Integrated Modules" },
              { end: 100, suffix: "%", label: "Tax Compliance" },
              { end: 0, suffix: "Real-Time", label: "Financial Reports" },
              { end: 0, suffix: "Full", label: "Audit Trail" },
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
          AUDIT & ACCESS — Deep dive (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <LightEyebrow>Audit & Access Control</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  Complete Transparency,{" "}
                  <span className="text-[#0e8c86]">Total Control</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Every financial action is logged in a tamper-proof audit trail,
                  and role-based access ensures the right people see the right data.
                  Built for governance, compliance, and peace of mind.
                </p>

                <div className="space-y-3">
                  {[
                    { label: "Transaction Logging", desc: "Every entry, edit, and deletion recorded with before/after values" },
                    { label: "User Action Tracking", desc: "Who did what, when, and from which device — fully timestamped" },
                    { label: "Segregation of Duties", desc: "Enforced separation between entry, approval, and payment roles" },
                    { label: "Granular Permissions", desc: "Module-level, action-level, and data-level access controls" },
                    { label: "Auditor Read-Only Access", desc: "External auditors get read-only access to all data and logs" },
                    { label: "Exportable Audit Reports", desc: "Complete audit trail exportable in PDF, Excel, CSV for reviews" },
                  ].map((c, i) => (
                    <div
                      key={c.label}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50/40 hover:border-[#0e8c86]/20 transition-all group"
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
                        "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-[15px]">Every action logged.</p>
                  <p className="text-white/60 text-[12px]">
                    Tamper-proof audit trail with role-based access.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ONBOARDING (Light gray)
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
              { step: "02", title: "Configuration", desc: "Chart of accounts, tax rules, AP/AR workflows, bank connections, and user roles configured to your operations." },
              { step: "03", title: "Data Migration", desc: "Historical financial data — balances, transactions, customers, vendors — migrated with full validation." },
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
                  <p className="text-gray-500 text-[13px] leading-relaxed">{p.desc}</p>
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
                Built for <span className="text-[#0e8c86]">Every Business Type</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "SMBs & Startups",
              "Accountants & Bookkeepers",
              "Non-Profits & NGOs",
              "Professional Services",
              "Manufacturing",
              "Construction & Trades",
              "Healthcare Practices",
              "Educational Institutions",
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
          sub="See GL, AP/AR, bank reconciliation, and financial reporting in a free live demo."
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