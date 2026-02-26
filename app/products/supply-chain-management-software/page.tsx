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
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Procurement Management",
    desc: "Automate purchase orders, multi-level approval workflows, and supplier negotiations with full audit trails and cost tracking.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Inventory & Warehouse",
    desc: "Real-time stock levels, warehouse zone mapping, pick-pack-ship workflows, and automated reorder points across locations.",
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
    title: "Supplier Management",
    desc: "Centralised supplier database with performance scorecards, contract management, compliance tracking, and risk assessment.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Logistics & Delivery",
    desc: "End-to-end shipment tracking integrated with major carriers and 3PL providers — from dispatch to doorstep.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Demand Forecasting",
    desc: "AI-assisted demand forecasting to prevent stockouts, reduce excess inventory costs, and optimise purchasing timing.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Analytics & Reporting",
    desc: "Supply chain KPIs, cost analysis, lead time tracking, bottleneck identification, and executive dashboards.",
  },
];

const CHAIN_LINKS = [
  {
    phase: "Source",
    title: "Supplier & Procurement",
    desc: "Manage supplier relationships, negotiate contracts, and automate purchase orders.",
  },
  {
    phase: "Store",
    title: "Inventory & Warehousing",
    desc: "Track stock levels, manage warehouse operations, and optimise storage allocation.",
  },
  {
    phase: "Ship",
    title: "Logistics & Transport",
    desc: "Coordinate shipments, track deliveries, and integrate with carriers and 3PL providers.",
  },
  {
    phase: "Sell",
    title: "Distribution & Fulfilment",
    desc: "Fulfil orders accurately, manage returns, and ensure on-time delivery to customers.",
  },
  {
    phase: "Analyse",
    title: "Insights & Optimisation",
    desc: "Identify bottlenecks, forecast demand, reduce costs, and continuously improve your chain.",
  },
];

const INTEGRATIONS = [
  { label: "ERP Systems", desc: "SAP, Oracle, Microsoft Dynamics" },
  { label: "3PL Providers", desc: "Direct API integration with logistics partners" },
  { label: "Carrier Networks", desc: "Australia Post, DHL, FedEx, Toll, and more" },
  { label: "Accounting Software", desc: "Xero, MYOB, QuickBooks" },
  { label: "E-Commerce Platforms", desc: "Shopify, WooCommerce, Magento" },
  { label: "IoT & Sensors", desc: "Temperature, GPS, and condition monitoring" },
];

const FAQS = [
  { q: "What size businesses is this for?", a: "Our SCM platform scales from mid-sized businesses with 2-3 suppliers and a single warehouse up to enterprise operations with hundreds of suppliers, multiple warehouses, and complex logistics networks. The system is modular — start with what you need and expand." },
  { q: "Does it integrate with our existing ERP?", a: "Yes. We provide API integration with major ERP systems including SAP, Oracle, and Microsoft Dynamics. We also integrate with standalone accounting, e-commerce, and logistics platforms." },
  { q: "Can it track shipments in real time?", a: "Yes. The logistics module provides real-time tracking by integrating with carrier APIs. You can see shipment status, estimated delivery times, and receive alerts for delays or exceptions — all from one dashboard." },
  { q: "Does it support multiple warehouses?", a: "Absolutely. Multi-warehouse support includes zone mapping, bin location management, inter-warehouse transfers, and consolidated inventory views across all locations." },
  { q: "How does demand forecasting work?", a: "Our AI-assisted forecasting analyses historical sales data, seasonal patterns, market trends, and lead times to predict future demand. This helps you optimise purchase quantities, timing, and safety stock levels." },
  { q: "How long does implementation take?", a: "Standard implementations take 4-6 weeks including system configuration, supplier/product data migration, integration setup, and team training. Complex enterprise deployments may take 8-12 weeks." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SupplyChainPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Dark with flowing node/link visual
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[100vh] flex items-center bg-[#060a0e]">
        <div className="absolute inset-0 pointer-events-none">
          {/* Flowing lines pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(160deg, rgba(84,199,194,0.6) 1px, transparent 1px), linear-gradient(70deg, rgba(84,199,194,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px, 40px 40px",
            }}
          />
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#54c7c2]/[0.05] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0070de]/[0.04] blur-[120px] rounded-full" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
            {/* Left — Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
                <svg className="w-4 h-4 text-[#54c7c2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <span className="text-[#54c7c2] text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Supply Chain Management
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.06] tracking-tight mb-5">
                Full Visibility.{" "}
                <span className="text-[#54c7c2]">Across Your Entire Supply Chain.</span>
              </h1>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-[500px]">
                Supply chain disruptions cost millions. Our platform gives you
                real-time visibility and control across every link — from supplier
                to customer — so you can anticipate problems before they become
                crises.
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

            {/* Right — Chain link visual */}
            <div className="hidden lg:flex flex-col gap-2">
              {CHAIN_LINKS.map((link, i) => (
                <div
                  key={link.phase}
                  className="flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-[#54c7c2]/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#54c7c2]/10 border border-[#54c7c2]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#54c7c2]/15 transition-colors">
                    <span className="text-[#54c7c2] text-[10px] font-extrabold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#54c7c2] text-[10px] font-bold tracking-widest uppercase">
                        {link.phase}
                      </span>
                      <span className="text-white/60 text-[13px] font-semibold">{link.title}</span>
                    </div>
                    <p className="text-white/25 text-[11px] mt-0.5">{link.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SUPPLY CHAIN FLOW — Unique visual (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[540px] mx-auto">
              <LightEyebrow center>End-to-End Flow</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                From Supplier to Customer,{" "}
                <span className="text-[#0e8c86]">Every Step Tracked</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#0e8c86]/10 via-[#0e8c86]/25 to-[#0e8c86]/10 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {CHAIN_LINKS.map((link, i) => (
                <ScrollReveal key={link.phase} delay={i * 90}>
                  <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#0e8c86]/15 shadow-sm flex items-center justify-center mb-3 group-hover:border-[#0e8c86]/40 group-hover:shadow-md transition-all">
                      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>}
                        {i === 1 && <><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>}
                        {i === 2 && <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>}
                        {i === 3 && <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                        {i === 4 && <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>}
                      </svg>
                    </div>
                    <p className="text-[10px] text-[#0e8c86] font-bold tracking-widest uppercase mb-1">
                      {link.phase}
                    </p>
                    <p className="text-gray-900 text-[13px] font-bold">{link.title}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
              <LightEyebrow center>Core Capabilities</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Complete Control Over{" "}
                <span className="text-[#0e8c86]">Your Supply Chain</span>
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
          STATS (Dark Navy)
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden bg-[#091e2a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2535] via-[#091e2a] to-[#071a24]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#54c7c2]/[0.04] blur-[80px]" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { end: 40, suffix: "%", label: "Cost Reduction" },
              { end: 99, suffix: "%", label: "Order Accuracy" },
              { end: 3, suffix: "x", label: "Faster Fulfilment" },
              { end: 100, suffix: "%", label: "Chain Visibility" },
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
          INTEGRATIONS — Unique section (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <LightEyebrow>Integrations</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  Connects With{" "}
                  <span className="text-[#0e8c86]">Your Existing Systems</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  A supply chain platform is only as good as its connections.
                  We integrate with your ERP, accounting, e-commerce, carrier
                  networks, and IoT sensors — creating a single source of truth
                  across your entire operation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {INTEGRATIONS.map((int) => (
                    <div
                      key={int.label}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50/50 hover:border-[#0e8c86]/20 transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0e8c86] flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 text-[13px] font-semibold leading-tight">
                          {int.label}
                        </p>
                        <p className="text-gray-400 text-[11px]">{int.desc}</p>
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
                        "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/50 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-[15px]">Seamlessly connected.</p>
                  <p className="text-white/60 text-[12px]">ERP, carriers, and IoT — all in one view.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO IT'S FOR (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <LightEyebrow center>Who It&apos;s For</LightEyebrow>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mt-3">
                Built for <span className="text-[#0e8c86]">Complex Supply Chains</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Manufacturers",
              "Distributors & Wholesalers",
              "Complex Retail Logistics",
              "Import / Export",
              "FMCG Companies",
              "Healthcare Supply Chains",
              "Construction & Materials",
              "Food & Beverage",
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
          heading="Want End-to-End Supply Chain Visibility?"
          sub="Book a demo and we'll show you the platform with your industry in mind."
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