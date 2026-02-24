import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "Enterprise Software Products | HR, Payroll, Attendance & More — 110 Solutions",
  description:
    "110 Solutions offers a suite of enterprise software products — HR & payroll, attendance management, campus management, supply chain, e-voting, and more. Ready to deploy.",
  keywords:
    "enterprise software products, HR payroll software, attendance management system, campus management software, supply chain management software, accounting software",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Attendance Management System",
    href: "/products/attendance-management",
    keyword: "Time & Attendance Tracking",
    desc: "Real-time attendance tracking, automated timesheets, and detailed reporting for organisations of any size. Eliminate manual processes and gain full visibility into workforce attendance.",
    features: ["Biometric integration", "Automated timesheets", "Leave management", "Detailed reporting"],
        image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Popular",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "HR & Payroll Software",
    href: "/products/hr-payroll",
    keyword: "Human Resources & Payroll",
    desc: "End-to-end HR management and payroll automation — from onboarding to payslips, all in one platform. Reduce errors, save time, and keep your team compliant.",
    features: ["Employee onboarding", "Payroll automation", "Tax compliance", "Self-service portal"],
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
    tag: "Popular",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: "Campus Management System",
    href: "/products/campus-management",
    keyword: "Academic Administration",
    desc: "A complete suite for educational institutions — student records, timetabling, fees, and communications. Modernise your campus operations from enrollment to graduation.",
    features: ["Student records", "Timetable scheduling", "Fee management", "Parent portal"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",    tag: "",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    title: "Retail & POS Management",
    href: "/products/mart-management",
    keyword: "Inventory & Point of Sale",
    desc: "Unified inventory management, billing, and sales analytics for modern retail businesses. From small shops to multi-location chains.",
    features: ["POS system", "Inventory tracking", "Sales analytics", "Multi-store support"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    tag: "",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Supply Chain Management",
    href: "/products/supply-chain-management",
    keyword: "End-to-End Supply Chain",
    desc: "Full visibility across your supply chain — procurement, inventory, logistics, and supplier management. Reduce costs and improve delivery performance.",
    features: ["Procurement management", "Warehouse operations", "Logistics tracking", "Supplier portal"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    tag: "",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Accounting & Finance Software",
    href: "/products/accounting-management",
    keyword: "Financial Management",
    desc: "Streamlined financial management — invoicing, expense tracking, reporting, and compliance. Get complete control over your organisation's finances.",
    features: ["Invoicing & billing", "Expense tracking", "Financial reporting", "Tax compliance"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    tag: "",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "E-Voting System",
    href: "/products/e-voting-system",
    keyword: "Secure Digital Voting",
    desc: "A tamper-proof, transparent digital voting platform for organisations, institutions, and government bodies. Secure, auditable, and built for trust.",
    features: ["End-to-end encryption", "Audit trail", "Real-time results", "Multi-device support"],
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80",
    tag: "New",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
    title: "Visitor Management System",
    href: "/products/visitor-management",
    keyword: "Smart Visitor Tracking",
    desc: "Digitise your front desk — visitor check-in, badge printing, host notifications, and compliance logs. Professional, secure, and paperless.",
    features: ["Digital check-in", "Badge printing", "Host notifications", "Compliance logs"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    tag: "",
  },
];

const BENEFITS = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Deploy in Days, Not Months",
    desc: "Pre-built, battle-tested products that can be configured and deployed within days — not months of custom development.",
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
    title: "Fully Configurable",
    desc: "Every product adapts to your workflows — custom fields, role-based access, approval chains, and integrations with your existing tools.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Enterprise-Grade Security",
    desc: "Role-based access, data encryption, audit trails, and regular security updates — built for organisations that take data seriously.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Ongoing Support & Updates",
    desc: "Dedicated support, regular feature updates, and proactive maintenance — your products keep getting better after launch.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Full viewport
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[100vh] flex items-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/75 via-[#000000]/85 to-[#000000]/95" />
          <div className="absolute inset-0 bg-[#0a1628]/30" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/25 text-[10px] tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="text-center max-w-[720px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#54c7c2] animate-pulse" />
              <span className="text-[#54c7c2] text-[10px] font-semibold tracking-[0.15em] uppercase">
                8 Enterprise Products
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight mb-5">
              Enterprise Products,{" "}
              <span className="text-[#54c7c2]">Ready to Deploy</span>
            </h1>
            <p className="text-white/45 text-[15px] leading-relaxed max-w-[540px] mx-auto mb-8">
              Eight purpose-built software products covering the core operational
              needs of modern businesses. Configurable, deployable within days, and
              backed by ongoing support.
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
                  Book a Free Demo
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <Link
                href="#products"
                className="px-6 py-2.5 rounded-lg font-semibold text-[13px] border border-white/25 text-white/75 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all"
              >
                Explore Products ↓
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCTS GRID (Light) — Card layout
      ═══════════════��═══════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white" id="products">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-[560px] mx-auto">
              <LightEyebrow center>Product Suite</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Software Built for{" "}
                <span className="text-[#0e8c86]">Real Operations</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Each product is purpose-built to solve specific operational
                challenges — not a one-size-fits-all platform with features you'll
                never use.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRODUCTS.map((p, i) => (
              <ScrollReveal key={p.href} delay={i * 60}>
                <Link
                  href={p.href}
                  className="group relative rounded-2xl border border-gray-100 bg-gray-50/40 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-400 overflow-hidden block h-full"
                >
                  {/* Image strip at top */}
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

                    {/* Number badge */}
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#0e8c86] flex items-center justify-center">
                      <span className="text-white text-[12px] font-extrabold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Tag */}
                    {p.tag && (
                      <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-white/90 text-[#0e8c86] text-[10px] font-bold uppercase tracking-wider border border-[#0e8c86]/15">
                        {p.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0e8c86]/10 border border-[#0e8c86]/15 flex items-center justify-center text-[#0e8c86] flex-shrink-0">
                        {p.icon}
                      </div>
                      <p className="text-[#0e8c86] text-[10px] font-bold tracking-[0.18em] uppercase">
                        {p.keyword}
                      </p>
                    </div>

                    <h2 className="text-gray-900 font-bold text-lg leading-snug mb-2 group-hover:text-[#0e8c86] transition-colors">
                      {p.title}
                    </h2>

                    <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                      {p.desc}
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.features.map((f) => (
                        <span
                          key={f}
                          className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-500 text-[11px] font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="text-[#0e8c86]/50 text-[12px] font-semibold group-hover:text-[#0e8c86] transition-colors flex items-center gap-1">
                      Explore Product
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FULL-WIDTH IMAGE BAND
      ═══════════════════════════════════════════ */}
      <section className="relative h-[280px] md:h-[340px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#000000]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-[#54c7c2] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">
              Trusted by Businesses
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
              Powering Operations,{" "}
              <span className="text-[#54c7c2]">Across Industries</span>
            </h2>
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
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(84,199,194,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.3) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { end: 8, suffix: "", label: "Enterprise Products" },
              { end: 50, suffix: "+", label: "Active Deployments" },
              { end: 99, suffix: "%", label: "Uptime Guarantee" },
              { end: 24, suffix: "/7", label: "Support Available" },
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
          WHY OUR PRODUCTS (Light with side image)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <LightEyebrow>Why Our Products</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                  Built Different,{" "}
                  <span className="text-[#0e8c86]">Built Better</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-10 max-w-[480px]">
                  Our products aren't generic tools — they're crafted from years of
                  real-world enterprise delivery.
                </p>
              </ScrollReveal>

              <div className="space-y-5">
                {BENEFITS.map((b, i) => (
                  <ScrollReveal key={b.title} delay={i * 80}>
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0 group-hover:bg-[#0e8c86]/15 transition-colors">
                        {b.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-[15px] mb-1">
                          {b.title}
                        </h3>
                        <p className="text-gray-500 text-[13px] leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal direction="right" delay={200}>
              <div className="hidden lg:block relative rounded-2xl overflow-hidden">
                <div className="aspect-[3/4]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg leading-snug">
                    Production-ready.
                    <br />
                    <span className="text-white/70">
                      Configurable to your needs.
                    </span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPARISON — Who It's For (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Who It&apos;s For</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Built for{" "}
                <span className="text-[#0e8c86]">Every Industry</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Our products serve organisations across every sector — from
                startups to government bodies.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "SMBs & Startups",
              "Educational Institutions",
              "Retail Chains",
              "Government Bodies",
              "Manufacturing",
              "Healthcare",
            ].map((w, i) => (
              <ScrollReveal key={w} delay={i * 60}>
                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 text-center hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300">
                  <p className="text-gray-600 text-[12.5px] font-medium">
                    {w}
                  </p>
                </div>
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
          heading="Want to See a Product in Action?"
          sub="Book a free demo and we'll walk you through any of our products live."
        />
      </div>
    </main>
  );
}

// ─── Shared Components ────────────────────────────────────────────────────────

function LightEyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}
    >
      <div className="w-5 h-[2px] bg-[#0e8c86]" />
      <span className="text-[#0e8c86] text-[10px] font-bold tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}