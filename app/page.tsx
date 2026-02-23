import type { Metadata } from "next";
import Link from "next/link";
import Hero from "./components/Hero";
import ScrollReveal from "./components/ScrollReveal";
import AnimatedCounter from "./components/AnimatedCounter";
import {
  HealthcareIcon,
  EducationIcon,
  RetailIcon,
  GovernmentIcon,
  LogisticsIcon,
  FinanceIcon,
  RealEstateIcon,
  EnergyIcon,
} from "./components/IndustryIcons";

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "110 Solutions | Enterprise Software & IT Solutions",
  description:
    "110 Solutions delivers enterprise-grade custom software, mobile apps, HR payroll, attendance management, and IT consulting for SMBs and enterprises globally.",
  keywords:
    "enterprise software, custom software development, IT solutions, HR payroll software, attendance management, campus management, cloud migration",
  openGraph: {
    title: "110 Solutions | Enterprise Software & IT Solutions",
    description:
      "Delivering trusted enterprise software and IT solutions for SMBs, enterprises, and agencies across every industry.",
    type: "website",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const PARTNERS = [
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Vercel",
  "Stripe",
  "PostgreSQL",
  "Docker",
  "GitHub",
];

const SERVICES = [
  {
    icon: "⬡",
    title: "Custom Software Development",
    href: "/services/custom-software-development",
    desc: "Purpose-built software engineered around your unique business logic. Scalable, maintainable solutions — not templates.",
  },
  {
    icon: "◈",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Native and cross-platform iOS & Android applications built for performance, usability, and measurable business impact.",
  },
  {
    icon: "◉",
    title: "Web & E-Commerce",
    href: "/services/website-ecommerce-development",
    desc: "High-converting websites and e-commerce platforms optimised for speed, SEO, and seamless user experiences.",
  },
  {
    icon: "◎",
    title: "Maintenance & Support",
    href: "/services/software-maintenance-support",
    desc: "Proactive maintenance, bug resolution, and ongoing technical support — systems running flawlessly 24/7.",
  },
  {
    icon: "◬",
    title: "IT Consulting",
    href: "/services/it-consulting",
    desc: "Strategic technology advisory that aligns your IT investments with business objectives. Plan smarter, execute faster.",
  },
  {
    icon: "⬟",
    title: "Cloud & DevOps",
    href: "/services/cloud-migration-hosting",
    desc: "Seamless cloud migration with zero downtime. Reduce costs while gaining enterprise-grade scalability and security.",
  },
];

const PRODUCTS = [
  { icon: "▣", title: "Attendance Management", href: "/products/attendance-management", desc: "Real-time tracking & automated reports", tag: "Popular" },
  { icon: "◫", title: "HR & Payroll", href: "/products/hr-payroll", desc: "End-to-end HR operations & payroll", tag: "Popular" },
  { icon: "◪", title: "Campus Management", href: "/products/campus-management", desc: "Complete academic administration", tag: "" },
  { icon: "◩", title: "Retail & POS", href: "/products/mart-management", desc: "Inventory, billing & sales insights", tag: "" },
  { icon: "◨", title: "Supply Chain", href: "/products/supply-chain-management", desc: "End-to-end supply chain visibility", tag: "" },
  { icon: "◧", title: "Accounting & Finance", href: "/products/accounting-management", desc: "Financial control made simple", tag: "" },
  { icon: "⬢", title: "E-Voting System", href: "/products/e-voting-system", desc: "Secure, transparent digital voting", tag: "New" },
  { icon: "⬡", title: "Visitor Management", href: "/products/visitor-management", desc: "Smart check-in & visitor tracking", tag: "" },
];

const INDUSTRIES = [
  { icon: <HealthcareIcon />, label: "Healthcare" },
  { icon: <EducationIcon />, label: "Education" },
  { icon: <RetailIcon />, label: "Retail & E-Commerce" },
  { icon: <GovernmentIcon />, label: "Government" },
  { icon: <LogisticsIcon />, label: "Logistics" },
  { icon: <FinanceIcon />, label: "Finance & Banking" },
  { icon: <RealEstateIcon />, label: "Real Estate" },
  { icon: <EnergyIcon />, label: "Energy & Utilities" },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "We deeply understand your business, goals, challenges, and users before writing a single line of code." },
  { step: "02", title: "Strategy & Design", desc: "We architect the solution, design intuitive interfaces, and map out every feature and integration." },
  { step: "03", title: "Development", desc: "Agile sprints, weekly demos, and transparent progress. You see your product take shape in real time." },
  { step: "04", title: "Testing & QA", desc: "Rigorous automated and manual testing across devices, browsers, and edge cases. Zero compromises." },
  { step: "05", title: "Deployment", desc: "Smooth launch to production with CI/CD pipelines, monitoring, and zero-downtime deployment strategies." },
  { step: "06", title: "Support & Growth", desc: "Ongoing maintenance, performance optimisation, feature enhancements, and dedicated support." },
];

const WHY_US = [
  { icon: "◈", title: "Cross-Industry Expertise", desc: "Enterprise software delivered across education, retail, healthcare, government, and logistics." },
  { icon: "⬡", title: "End-to-End Delivery", desc: "From discovery through deployment and support — one team, full accountability, zero gaps." },
  { icon: "◉", title: "Built to Scale", desc: "Architectured for growth. Whether SMB or enterprise, our software scales with you." },
  { icon: "◬", title: "Modern Tech Stack", desc: "React, Next.js, Node.js, Python, AWS, Azure — built on a future-proof foundation." },
  { icon: "⬟", title: "Transparent Process", desc: "Sprint reviews, milestone demos, proactive communication. No black boxes, ever." },
  { icon: "◍", title: "Results-Driven", desc: "We measure success by your outcomes — not lines of code. Partnerships that last." },
];

const CASE_STUDY = {
  client: "Apex Group",
  title: "How We Helped Apex Group Automate HR & Save 20+ Hours Monthly",
  desc: "Apex Group needed to replace their fragmented HR processes with a unified system. We delivered a complete HR & Payroll platform that automated attendance, leave management, payroll processing, and compliance reporting.",
  metrics: [
    { value: "20+", label: "Hours Saved Monthly" },
    { value: "98%", label: "Payroll Accuracy" },
    { value: "3", label: "Month Deployment" },
    { value: "45%", label: "Cost Reduction" },
  ],
  tags: ["HR & Payroll", "Custom Development", "Cloud Hosting"],
};

const TESTIMONIALS = [
  {
    quote: "110 Solutions transformed our HR operations completely. The payroll system alone saves our team 20+ hours every month.",
    name: "Sarah Mitchell",
    role: "Head of Operations",
    company: "Apex Group",
    initials: "SM",
  },
  {
    quote: "They delivered a supply chain solution that exceeded every requirement. Their consulting approach set them apart from day one.",
    name: "James Okafor",
    role: "CTO",
    company: "NovaTrade Logistics",
    initials: "JO",
  },
  {
    quote: "The campus management system has genuinely changed how we run our institution. Professional, communicative, and exactly on time.",
    name: "Dr. Farrukh Ansari",
    role: "Director",
    company: "Horizon Institute",
    initials: "FA",
  },
];

const BLOG_POSTS = [
  {
    category: "Engineering",
    title: "Why Microservices Architecture is the Future of Enterprise Software",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    href: "/blog/microservices-enterprise",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Business",
    title: "How SMBs Can Leverage Custom Software to Compete with Enterprises",
    date: "Feb 8, 2026",
    readTime: "4 min read",
    href: "/blog/smb-custom-software",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Product",
    title: "Introducing E-Voting System: Secure, Transparent Digital Democracy",
    date: "Jan 28, 2026",
    readTime: "3 min read",
    href: "/blog/e-voting-launch",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-[#000000] text-white overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════ */}
      <Hero />

      {/* ═══════════════════════════════════════════
          2. TRUSTED BY — Logo Bar
      ═══════════════════════════════════════════ */}
      <section className="py-8 border-b border-white/[0.06] bg-[#000000]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <p className="text-center text-[10px] tracking-[0.25em] text-white/20 uppercase font-semibold mb-5">
            Technologies & Partners We Work With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="text-white/[0.12] text-base font-bold tracking-wide hover:text-white/25 transition-colors duration-300 cursor-default select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. SERVICES
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 relative" id="services">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-[#54c7c2]/[0.03] blur-[100px]" />
        </div>
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-[520px]">
                <SectionEyebrow>What We Do</SectionEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight mt-3 mb-3">
                  End-to-End IT Services,{" "}
                  <span className="text-[#54c7c2]">Tailored to You</span>
                </h2>
                <p className="text-white/45 text-[14px] leading-relaxed">
                  We don't just write code — we engineer solutions built around
                  your goals, industry, and growth trajectory.
                </p>
              </div>
              <Link
                href="/services"
                className="flex-shrink-0 px-5 py-2 rounded-lg border border-white/15 text-white/60 text-[13px] font-semibold hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all self-start lg:self-auto"
              >
                All Services →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.href} delay={i * 80}>
                <Link
                  href={s.href}
                  className="group relative p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-[#54c7c2]/[0.04] hover:border-[#54c7c2]/25 transition-all duration-300 overflow-hidden block h-full"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#54c7c2]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-lg bg-[#54c7c2]/10 border border-[#54c7c2]/15 flex items-center justify-center text-[#54c7c2] text-base mb-3 group-hover:bg-[#54c7c2]/20 transition-colors">
                      {s.icon}
                    </div>
                    <h3 className="text-white font-semibold text-[13.5px] mb-1.5 group-hover:text-[#54c7c2] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-white/40 text-[12.5px] leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="mt-3 text-[#54c7c2]/40 text-[11px] font-medium group-hover:text-[#54c7c2] transition-colors flex items-center gap-1">
                      Learn more
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. FEATURED CASE STUDY — Split Layout
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Content */}
            <ScrollReveal direction="left">
              <div>
                <SectionEyebrow>Case Study</SectionEyebrow>
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight mt-3 mb-4">
                  {CASE_STUDY.title}
                </h2>
                <p className="text-white/45 text-[13.5px] leading-relaxed mb-6">
                  {CASE_STUDY.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {CASE_STUDY.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#54c7c2]/10 border border-[#54c7c2]/15 text-[#54c7c2] text-[10px] font-semibold tracking-wide uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {CASE_STUDY.metrics.map((m) => (
                    <div key={m.label} className="text-center sm:text-left">
                      <p className="text-2xl font-bold text-[#54c7c2]">{m.value}</p>
                      <p className="text-[10px] text-white/35 uppercase tracking-wider mt-0.5">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/case-studies/apex-group"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#54c7c2] text-[#060a0e] text-[13px] font-bold hover:bg-[#6edbd5] transition-colors"
                >
                  Read Full Case Study
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* Right — Dashboard Mockup */}
            <ScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#54c7c2]/[0.06] rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl border border-white/[0.08] bg-[#0d1117] overflow-hidden shadow-2xl">
                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.06] bg-[#0a0e14]">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <div className="ml-3 flex-1 h-5 rounded-md bg-white/[0.05] flex items-center px-3">
                      <span className="text-[9px] text-white/25">app.110solutions.com/dashboard</span>
                    </div>
                  </div>
                  {/* Dashboard content */}
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 w-32 bg-white/10 rounded" />
                        <div className="h-2 w-20 bg-white/[0.05] rounded mt-1.5" />
                      </div>
                      <div className="h-7 w-20 bg-[#54c7c2]/20 rounded-md" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Employees", val: "1,247", color: "bg-[#54c7c2]/15" },
                        { label: "Attendance", val: "96.8%", color: "bg-green-500/15" },
                        { label: "Payroll", val: "$284K", color: "bg-blue-500/15" },
                      ].map((c) => (
                        <div key={c.label} className={`${c.color} rounded-lg p-3`}>
                          <p className="text-[9px] text-white/35 uppercase tracking-wider">{c.label}</p>
                          <p className="text-white font-bold text-sm mt-1">{c.val}</p>
                        </div>
                      ))}
                    </div>
                    <div className="h-28 bg-white/[0.03] rounded-lg border border-white/[0.05] flex items-end justify-around px-4 pb-3 pt-6">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div
                          key={i}
                          className="w-[6%] rounded-sm bg-[#54c7c2]/40"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((r) => (
                        <div key={r} className="flex items-center gap-3 py-2 border-b border-white/[0.04]">
                          <div className="w-6 h-6 rounded-full bg-white/[0.06]" />
                          <div className="flex-1 h-2 bg-white/[0.05] rounded" />
                          <div className="w-16 h-2 bg-white/[0.05] rounded" />
                          <div className="w-12 h-5 bg-green-500/15 rounded-md" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. PRODUCTS
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 relative bg-[#030508]" id="products">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 w-[400px] h-[400px] rounded-full bg-[#54c7c2]/[0.03] blur-[90px]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-[520px]">
                <SectionEyebrow>Our Products</SectionEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight mt-3 mb-3">
                  Enterprise Products,{" "}
                  <span className="text-[#54c7c2]">Ready to Deploy</span>
                </h2>
                <p className="text-white/45 text-[14px] leading-relaxed">
                  Configurable, scalable software designed from the ground up for
                  real business operations.
                </p>
              </div>
              <Link
                href="/products"
                className="flex-shrink-0 px-5 py-2 rounded-lg border border-white/15 text-white/60 text-[13px] font-semibold hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all self-start lg:self-auto"
              >
                All Products →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PRODUCTS.map((p, i) => (
              <ScrollReveal key={p.href} delay={i * 60}>
                <Link
                  href={p.href}
                  className="group relative p-4 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-[#54c7c2]/[0.04] hover:border-[#54c7c2]/25 transition-all duration-300 flex flex-col gap-3 h-full"
                >
                  {p.tag && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#54c7c2]/15 text-[#54c7c2] border border-[#54c7c2]/20">
                      {p.tag}
                    </span>
                  )}
                  <div className="w-8 h-8 rounded-lg bg-[#54c7c2]/10 border border-[#54c7c2]/15 flex items-center justify-center text-[#54c7c2] text-sm group-hover:bg-[#54c7c2]/20 transition-colors">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-white/85 font-semibold text-[12.5px] leading-snug mb-1 group-hover:text-white transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-white/35 text-[11.5px] leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-auto text-[#54c7c2]/40 text-[11px] group-hover:text-[#54c7c2] transition-colors flex items-center gap-1">
                    Explore <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. INDUSTRIES WE SERVE
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 relative">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-[520px] mx-auto">
              <SectionEyebrow center>Industries</SectionEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight mt-3 mb-3">
                Solutions Across{" "}
                <span className="text-[#54c7c2]">Every Industry</span>
              </h2>
              <p className="text-white/45 text-[14px] leading-relaxed">
                Deep domain knowledge across verticals — we understand your
                industry's challenges, compliance needs, and growth drivers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {INDUSTRIES.map((ind, i) => (
              <ScrollReveal key={ind.label} delay={i * 60}>
                <div className="group p-6 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-[#54c7c2]/[0.04] hover:border-[#54c7c2]/20 transition-all duration-300 text-center cursor-default flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#54c7c2]/10 border border-[#54c7c2]/15 flex items-center justify-center text-[#54c7c2] group-hover:bg-[#54c7c2]/20 group-hover:scale-105 transition-all duration-300">
                    {ind.icon}
                  </div>
                  <p className="text-white/55 text-[12.5px] font-medium group-hover:text-white transition-colors">
                    {ind.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════���═══
          7. HOW WE WORK — Process
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 relative bg-[#030508]">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#54c7c2]/[0.03] blur-[120px]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <SectionEyebrow center>Our Process</SectionEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight mt-3 mb-3">
                How We{" "}
                <span className="text-[#54c7c2]">Deliver Results</span>
              </h2>
              <p className="text-white/45 text-[14px] leading-relaxed">
                A battle-tested, transparent process that turns complex
                requirements into reliable, production-ready software.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 100}>
                <div className="relative p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] overflow-hidden group hover:border-[#54c7c2]/20 transition-all duration-300 h-full">
                  <div className="absolute -top-1 -right-1 text-[72px] font-black text-white/[0.025] leading-none select-none">
                    {p.step}
                  </div>
                  {i < PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[1px] bg-[#54c7c2]/20" />
                  )}
                  <div className="relative z-10">
                    <div className="text-[#54c7c2] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
                      Step {p.step}
                    </div>
                    <h3 className="text-white font-semibold text-[14px] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-white/40 text-[12.5px] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. STATS — Full-Width Band
      ═══════════════════════════════════════════ */}
      <section className="relative py-14 bg-[#54c7c2]/[0.04] border-y border-[#54c7c2]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(84,199,194,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 100, suffix: "+", label: "Clients Worldwide" },
              { end: 50, suffix: "+", label: "Products Delivered" },
              { end: 8, suffix: "+", label: "Years of Excellence" },
              { end: 99, suffix: "%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-[#54c7c2]">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1.5 text-[11px] text-white/40 uppercase tracking-[0.15em] font-medium">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. WHY CHOOSE US
      ═════════════���═════════════════════════════ */}
      <section className="py-20 lg:py-24 relative" id="why-us">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-[520px] mx-auto">
              <SectionEyebrow center>Why 110 Solutions</SectionEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight mt-3 mb-3">
                Why Businesses{" "}
                <span className="text-[#54c7c2]">Choose Us</span>
              </h2>
              <p className="text-white/45 text-[14px] leading-relaxed">
                A technology partner is a long-term decision. Here's why our
                clients stay — and refer their peers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 80}>
                <div className="relative p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] overflow-hidden group hover:border-[#54c7c2]/20 transition-all duration-300 h-full">
                  <div className="absolute top-3 right-4 text-[48px] font-black text-white/[0.025] leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative z-10">
                    <div className="text-[#54c7c2] text-lg mb-3">{w.icon}</div>
                    <h3 className="text-white font-semibold text-[13.5px] mb-2">
                      {w.title}
                    </h3>
                    <p className="text-white/40 text-[12.5px] leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 relative bg-[#030508]">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/15 to-transparent" />

        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionEyebrow center>Testimonials</SectionEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight mt-3">
                What Our Clients{" "}
                <span className="text-[#54c7c2]">Say About Us</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] flex flex-col gap-4 hover:border-[#54c7c2]/20 transition-all duration-300 h-full">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-[#54c7c2] text-[11px]">★</span>
                    ))}
                  </div>
                  <p className="text-white/55 text-[13px] leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.05]">
                    <div className="w-8 h-8 rounded-full bg-[#54c7c2]/15 border border-[#54c7c2]/20 flex items-center justify-center text-[#54c7c2] text-[10px] font-bold flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-[12px]">{t.name}</p>
                      <p className="text-white/30 text-[10.5px]">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          11. BLOG / INSIGHTS
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 relative">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-[420px]">
                <SectionEyebrow>Insights</SectionEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight mt-3 mb-3">
                  Latest from{" "}
                  <span className="text-[#54c7c2]">Our Blog</span>
                </h2>
                <p className="text-white/45 text-[14px] leading-relaxed">
                  Insights, strategies, and technical deep-dives from our team.
                </p>
              </div>
              <Link
                href="/blog"
                className="flex-shrink-0 px-5 py-2 rounded-lg border border-white/15 text-white/60 text-[13px] font-semibold hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all self-start lg:self-auto"
              >
                All Articles →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BLOG_POSTS.map((post, i) => (
              <ScrollReveal key={post.href} delay={i * 100}>
                <Link
                  href={post.href}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.015] overflow-hidden hover:border-[#54c7c2]/20 transition-all duration-300 block h-full"
                >
                  <div className="relative h-40 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#54c7c2]/90 text-[#060a0e]">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white/85 font-semibold text-[13.5px] leading-snug mb-2.5 group-hover:text-[#54c7c2] transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-white/30">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          12. FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#54c7c2]/[0.02]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#54c7c2]/[0.06] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(84,199,194,1) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/30 to-transparent" />
        </div>

        <ScrollReveal>
          <div className="relative z-10 max-w-[640px] mx-auto px-6 xl:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54c7c2]/25 bg-[#54c7c2]/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#54c7c2] animate-pulse" />
              <span className="text-[#54c7c2] text-[10px] font-semibold tracking-[0.15em] uppercase">
                Start Your Project
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.15] tracking-tight mb-4">
              Ready to Build{" "}
              <span className="text-[#54c7c2]">Something Extraordinary?</span>
            </h2>

            <p className="text-white/45 text-[14.5px] leading-relaxed mb-8 max-w-[480px] mx-auto">
              Join 100+ businesses that trust 110 Solutions. Let's start with a
              free, no-obligation consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group relative px-6 py-2.5 rounded-lg font-bold text-[13px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(84,199,194,0.3)]"
              >
                <span className="absolute inset-0 bg-[#54c7c2]" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity" />
                <span className="relative text-[#060a0e] tracking-wide">
                  Book a Free Demo
                </span>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-lg font-semibold text-[13px] border border-white/20 text-white/70 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

// ─── Shared Components ────────────────────────────────────────────────────────

function SectionEyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
      <div className="w-5 h-[2px] bg-[#54c7c2]" />
      <span className="text-[#54c7c2] text-[10px] font-bold tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}