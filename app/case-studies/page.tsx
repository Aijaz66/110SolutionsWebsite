"use client";

import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import PageCTA from "../components/PageCTA";
import { useState } from "react";

// ─── Case Study Data ──────────────────────────────────────────────────────────

const CASE_STUDIES = [
  {
    slug: "national-school-network-campus-system",
    industry: "Education",
    service: "Product Deployment",
    title: "Unifying 12 Campuses Under One Digital Platform",
    client: "National School Network",
    summary:
      "A large school network operating 12 campuses struggled with fragmented student data, manual timetabling, and inconsistent fee collection. We deployed our Campus Management System across all locations — centralising operations and cutting admin workload by 60%.",
    challenge:
      "12 campuses using 5 different systems. No centralised student records. Manual timetabling took 3 weeks per term. Fee collection was inconsistent with 25% of invoices going unpaid past 30 days.",
    solution:
      "Deployed the 110 Solutions Campus Management System across all 12 campuses with centralised student records, automated timetabling, online fee collection with parent portal, and role-based portals for teachers, parents, and admin.",
    results: [
      { val: "60%", label: "Admin time reduced" },
      { val: "95%", label: "Fee collection rate (was 75%)" },
      { val: "3 hrs", label: "Timetable generation (was 3 weeks)" },
      { val: "12", label: "Campuses unified" },
    ],
    testimonial: {
      quote: "We went from managing chaos across 12 schools to having everything in one place. The parent portal alone saved us hundreds of hours per term.",
      name: "Director of Operations",
      org: "National School Network",
    },
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "construction-firm-hr-payroll",
    industry: "Construction",
    service: "Custom Software",
    title: "Automating HR & Payroll for 300+ Field Workers",
    client: "Regional Construction Firm",
    summary:
      "A construction company with 300+ employees across multiple sites was processing payroll manually in spreadsheets — leading to errors, compliance risks, and 20+ hours of admin per pay cycle. We implemented our HR & Payroll system with biometric attendance integration.",
    challenge:
      "Payroll processed manually in Excel for 300+ workers. Attendance tracked on paper timesheets from 8 sites. Frequent payroll errors causing employee disputes. No leave tracking system — managers tracked leave in personal notebooks.",
    solution:
      "Implemented the 110 Solutions HR & Payroll system with biometric attendance integration at all 8 sites. Automated timesheet generation, leave management, tax calculations, and payslip distribution via employee self-service portal.",
    results: [
      { val: "20+ hrs", label: "Saved per pay cycle" },
      { val: "100%", label: "Payroll accuracy (was ~92%)" },
      { val: "Zero", label: "Payroll disputes since launch" },
      { val: "8", label: "Sites integrated" },
    ],
    testimonial: {
      quote: "Payroll used to take our admin team an entire week. Now it's done in half a day with zero errors. The ROI was immediate.",
      name: "Operations Manager",
      org: "Regional Construction Firm",
    },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "retail-chain-pos-rollout",
    industry: "Retail",
    service: "Product Deployment",
    title: "Rolling Out POS Across 22 Retail Stores",
    client: "Fashion Retail Chain",
    summary:
      "A growing fashion retailer with 22 stores was using outdated cash registers with no inventory visibility. We deployed our Retail & POS system across all locations — giving them real-time stock tracking, unified sales analytics, and a 35% increase in sales efficiency.",
    challenge:
      "22 stores using basic cash registers with no digital inventory. No visibility into stock levels across locations — resulting in frequent stockouts and overstocking. Sales reporting was manual and delayed by 2 weeks.",
    solution:
      "Deployed the 110 Solutions Retail & POS system at all 22 locations with real-time inventory sync, barcode scanning, customer loyalty programme, multi-store analytics dashboard, and inter-store transfer management.",
    results: [
      { val: "35%", label: "Sales efficiency increase" },
      { val: "99.9%", label: "Stock accuracy" },
      { val: "Real-Time", label: "Inventory visibility" },
      { val: "22", label: "Stores deployed" },
    ],
    testimonial: {
      quote: "We finally know what's in stock, what's selling, and where. The inter-store transfer feature alone saved us from thousands in dead stock.",
      name: "Head of Retail Operations",
      org: "Fashion Retail Chain",
    },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "logistics-company-supply-chain",
    industry: "Logistics",
    service: "Custom Software",
    title: "End-to-End Supply Chain Visibility for National Distributor",
    client: "National Distribution Company",
    summary:
      "A national distributor managing 200+ suppliers and 3 warehouses had zero real-time visibility into their supply chain. We built a custom SCM solution that reduced fulfilment time by 3x and cut procurement costs by 40%.",
    challenge:
      "200+ suppliers managed in spreadsheets. No real-time inventory across 3 warehouses. Order fulfilment took 5-7 days on average. Procurement decisions were reactive — no demand forecasting.",
    solution:
      "Built a custom supply chain management platform integrated with their existing ERP. Included supplier management, multi-warehouse inventory, automated purchase orders, carrier integration, and AI-assisted demand forecasting.",
    results: [
      { val: "3x", label: "Faster order fulfilment" },
      { val: "40%", label: "Procurement cost reduction" },
      { val: "200+", label: "Suppliers managed digitally" },
      { val: "Real-Time", label: "Warehouse visibility" },
    ],
    testimonial: {
      quote: "We went from flying blind to having complete visibility across our entire supply chain. The demand forecasting alone has saved us hundreds of thousands.",
      name: "Supply Chain Director",
      org: "National Distribution Company",
    },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "corporate-hq-visitor-management",
    industry: "Corporate",
    service: "Product Deployment",
    title: "Digitising Reception for a 2,000-Person Corporate HQ",
    client: "National Financial Services Firm",
    summary:
      "A financial services company with 2,000+ employees and 200+ daily visitors was using paper sign-in books — creating security gaps and compliance risks. We deployed our Visitor Management System with badge printing and instant host notifications.",
    challenge:
      "Paper sign-in books at 3 reception points. No way to know who was on-site during emergencies. NDA signing was manual and inconsistent. Reception staff spent 30% of their time chasing hosts to collect visitors.",
    solution:
      "Deployed the 110 Solutions Visitor Management System with iPad kiosks at all 3 reception points. Pre-registration with QR check-in, automatic badge printing, instant host notifications via Teams, digital NDA signing, and real-time evacuation roll call.",
    results: [
      { val: "< 30s", label: "Average check-in time" },
      { val: "100%", label: "Digital compliance" },
      { val: "Zero", label: "Paper sign-in sheets" },
      { val: "3", label: "Reception points digitised" },
    ],
    testimonial: {
      quote: "The professionalism of our reception area transformed overnight. Visitors are impressed, hosts are notified instantly, and we're fully compliant for audits.",
      name: "Facilities Manager",
      org: "National Financial Services Firm",
    },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "accounting-firm-finance-software",
    industry: "Professional Services",
    service: "Product Deployment",
    title: "Replacing Legacy Accounting for a Multi-Entity Practice",
    client: "Mid-Tier Accounting Practice",
    summary:
      "An accounting practice managing 5 business entities was running on outdated desktop software with no multi-entity consolidation. We deployed our Accounting & Finance system — giving them real-time reporting, automated tax compliance, and 60% faster month-end close.",
    challenge:
      "5 entities managed on separate desktop accounting software. No consolidated financial view. Month-end close took 2 weeks. Tax compliance was manual and error-prone. Bank reconciliation done by hand.",
    solution:
      "Deployed the 110 Solutions Accounting & Finance system with multi-entity support, automated bank feeds, real-time financial reporting, tax compliance engine, and role-based access for partners and staff.",
    results: [
      { val: "60%", label: "Faster month-end close" },
      { val: "5", label: "Entities consolidated" },
      { val: "Real-Time", label: "Financial reporting" },
      { val: "100%", label: "Tax compliance" },
    ],
    testimonial: {
      quote: "Having all five entities in one system with real-time consolidated reporting has been transformational. We can't believe we waited this long to switch.",
      name: "Managing Partner",
      org: "Mid-Tier Accounting Practice",
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
];

const ALL_INDUSTRIES = ["All", ...Array.from(new Set(CASE_STUDIES.map((c) => c.industry)))];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.industry === activeFilter);

  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white pt-32 pb-20 bg-[#060a0e]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(84,199,194,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#54c7c2]/[0.05] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0070de]/[0.04] blur-[100px] rounded-full" />
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="max-w-[680px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
              <svg className="w-4 h-4 text-[#54c7c2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-[#54c7c2] text-[11px] font-semibold tracking-[0.12em] uppercase">
                Case Studies
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight mb-5">
              Real Clients.{" "}
              <span className="text-[#54c7c2]">Real Results.</span>
            </h1>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-[520px] mx-auto">
              See how businesses across industries have transformed their
              operations with our enterprise software and custom solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[700px] mx-auto">
            {[
              { end: 100, suffix: "+", label: "Projects Delivered" },
              { end: 99, suffix: "%", label: "Client Retention" },
              { end: 6, suffix: "+", label: "Industries Served" },
              { end: 60, suffix: "%", label: "Avg Efficiency Gain" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#54c7c2] flex-shrink-0" />
                <div>
                  <div className="text-[#54c7c2] font-bold text-[13px] leading-none">
                    <AnimatedCounter end={s.end} suffix={s.suffix} duration={2000} />
                  </div>
                  <div className="text-white/35 text-[10px] mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FILTER + CASE STUDY CARDS (White)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          {/* Filter pills */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {ALL_INDUSTRIES.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveFilter(ind)}
                  className={`px-5 py-2 rounded-full text-[13px] font-medium border transition-all duration-300 ${
                    activeFilter === ind
                      ? "bg-[#0e8c86] text-white border-[#0e8c86]"
                      : "bg-white text-gray-500 border-gray-200 hover:border-[#0e8c86]/30 hover:text-[#0e8c86]"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((cs, i) => (
              <ScrollReveal key={cs.slug} delay={i * 70}>
                <Link href={`/case-studies/${cs.slug}`} className="block h-full">
                  <div className="rounded-xl border border-gray-100 bg-white overflow-hidden hover:border-[#0e8c86]/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300 h-full group flex flex-col">
                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${cs.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Tags */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-[#0e8c86] text-white text-[10px] font-bold">
                          {cs.industry}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-white/90 text-gray-600 text-[10px] font-bold">
                          {cs.service}
                        </span>
                      </div>

                      {/* Key stat */}
                      <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm">
                        <span className="text-[#54c7c2] font-extrabold text-[14px]">
                          {cs.results[0].val}
                        </span>
                        <span className="text-white/50 text-[10px] ml-1.5">
                          {cs.results[0].label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wide mb-2">
                        {cs.client}
                      </p>
                      <h3 className="text-gray-900 font-bold text-[16px] leading-snug mb-3 group-hover:text-[#0e8c86] transition-colors">
                        {cs.title}
                      </h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed mb-4 flex-1">
                        {cs.summary.substring(0, 160)}...
                      </p>

                      {/* Results preview */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {cs.results.slice(0, 2).map((r) => (
                          <div
                            key={r.label}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-100"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0e8c86]" />
                            <div>
                              <span className="text-[#0e8c86] font-bold text-[12px]">
                                {r.val}
                              </span>
                              <span className="text-gray-400 text-[10px] ml-1">
                                {r.label.length > 18 ? r.label.substring(0, 18) + "…" : r.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-[#0e8c86] text-[13px] font-semibold group-hover:gap-3 transition-all">
                        Read Case Study
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-[14px]">
                No case studies found for this filter. Try selecting a different
                industry.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Have a Similar Challenge?"
          sub="Let's talk about how we can deliver the same results for your business."
        />
      </div>
    </main>
  );
}