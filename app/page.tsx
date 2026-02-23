// app/page.tsx
import Link from "next/link";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  title: "110 Solutions | Enterprise Software & IT Solutions",
  description:
    "110 Solutions delivers enterprise-grade custom software, mobile apps, HR payroll, attendance management, and IT consulting services for SMBs and enterprises across the Globe.",
  keywords:
    "enterprise software Australia, custom software development, IT solutions, HR payroll software, attendance management system, campus management, cloud migration",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: "⬡",
    title: "Custom Software Development",
    href: "/services/custom-software-development",
    desc: "Purpose-built software engineered around your unique business logic. We deliver scalable, maintainable solutions — not templates.",
  },
  {
    icon: "◈",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Native and cross-platform iOS & Android applications built for performance, usability, and measurable business impact.",
  },
  {
    icon: "◉",
    title: "Web & E-Commerce Development",
    href: "/services/website-ecommerce-development",
    desc: "High-converting websites and e-commerce platforms optimised for speed, SEO, and seamless user experiences.",
  },
  {
    icon: "◎",
    title: "Software Maintenance & Support",
    href: "/services/software-maintenance-support",
    desc: "Proactive maintenance, bug resolution, and ongoing technical support — so your systems run flawlessly around the clock.",
  },
  {
    icon: "◬",
    title: "IT Consulting",
    href: "/services/it-consulting",
    desc: "Strategic technology advisory that aligns your IT investments with your business objectives. Plan smarter, execute faster.",
  },
  {
    icon: "⬟",
    title: "Cloud Migration & Hosting",
    href: "/services/cloud-migration-hosting",
    desc: "Seamless migration to the cloud with zero downtime. Reduce infrastructure costs while gaining enterprise-grade scalability.",
  },
  {
    icon: "◍",
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    desc: "Research-driven design that puts users first. Intuitive interfaces that reduce friction, increase retention, and drive conversions.",
  },
];

const PRODUCTS = [
  { icon: "▣", title: "Attendance Management", href: "/products/attendance-management", desc: "Real-time tracking, automated reports" },
  { icon: "◫", title: "HR & Payroll Management", href: "/products/hr-payroll", desc: "End-to-end HR operations & payroll" },
  { icon: "◪", title: "Campus Management", href: "/products/campus-management", desc: "Complete academic administration suite" },
  { icon: "◩", title: "Retail & POS Management", href: "/products/mart-management", desc: "Inventory, billing & sales insights" },
  { icon: "◨", title: "Supply Chain Management", href: "/products/supply-chain-management", desc: "End-to-end supply chain visibility" },
  { icon: "◧", title: "Accounting & Finance Management", href: "/products/accounting-management", desc: "Financial control made simple" },
  { icon: "⬢", title: "E-Voting System", href: "/products/e-voting-system", desc: "Secure, transparent digital voting" },
  { icon: "⬡", title: "Visitor Management", href: "/products/visitor-management", desc: "Smart check-in & visitor tracking" },
];

const STATS = [
  { value: "100+", label: "Clients Served" },
  { value: "8", label: "Enterprise Products" },
  { value: "7", label: "Core Services" },
  { value: "99%", label: "Client Retention Rate" },
];

const WHY_US = [
  {
    icon: "◈",
    title: "Proven Cross-Industry Expertise",
    desc: "Our team has delivered enterprise software across education, retail, healthcare, government, and logistics — bringing deep domain knowledge to every project.",
  },
  {
    icon: "⬡",
    title: "Full-Stack, End-to-End Delivery",
    desc: "From discovery and design through to deployment and support, we own the entire delivery lifecycle — one team, full accountability, zero handoff gaps.",
  },
  {
    icon: "◉",
    title: "Scalability Without Compromise",
    desc: "Every solution we build is architected to scale. Whether you're a growing SMB or a multi-site enterprise, our software grows with you — not against you.",
  },
  {
    icon: "◬",
    title: "Extensive Modern Tech Stack",
    desc: "We work with the latest technologies — React, Next.js, Node.js, Python, AWS, Azure and more — ensuring your software is built on a future-proof foundation.",
  },
  {
    icon: "⬟",
    title: "Transparent, Collaborative Process",
    desc: "No black boxes. You're involved at every stage — from sprint reviews to milestone demos. We communicate proactively, not reactively.",
  },
  {
    icon: "◍",
    title: "Results-Driven Commitment",
    desc: "We don't measure success by lines of code — we measure it by your outcomes. Client satisfaction and long-term partnerships are the metrics that matter to us.",
  },
];

const TESTIMONIALS = [
  {
    quote: "110 Solutions transformed our HR operations completely. The payroll system alone saves our team 20+ hours every month. Exceptional delivery, exceptional support.",
    name: "Sarah Mitchell",
    role: "Head of Operations",
    company: "Apex Group",
    initials: "SM",
  },
  {
    quote: "We came with a complex supply chain problem and they delivered a solution that exceeded every requirement. Their consulting approach set them apart from day one.",
    name: "James Okafor",
    role: "CTO",
    company: "NovaTrade Logistics",
    initials: "JO",
  },
  {
    quote: "The campus management system has genuinely changed how we run our institution. The team was professional, communicative, and delivered exactly on time.",
    name: "Dr. Farrukh Ansari",
    role: "Director",
    company: "Horizon Institute",
    initials: "FA",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-[#060a0e] text-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          {/* Radial glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#54c7c2]/[0.045] blur-[120px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0070de]/[0.05] blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#54c7c2]/[0.03] blur-[80px]" />
          {/* Diagonal accent line */}
          <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#54c7c2]/20 to-transparent" />
          <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 py-24 text-center">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#54c7c2]/30 bg-[#54c7c2]/[0.08] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#54c7c2] animate-pulse" />
            <span className="text-[#54c7c2] text-xs font-semibold tracking-[0.15em] uppercase">
              Enterprise Software & IT Solutions
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.08] tracking-tight mb-7 max-w-[900px] mx-auto">
            Software That Powers <br />
            <span className="relative inline-block">
              <span className="text-[#54c7c2]">Enterprise Growth.</span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2] to-transparent"
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-[680px] mx-auto mb-12">
            From custom software development to ready-to-deploy enterprise products —
            110 Solutions helps SMBs, enterprises, and agencies across the Globe operate
            smarter, scale faster, and outperform the competition.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-xl font-bold text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(84,199,194,0.35)]"
            >
              <span className="absolute inset-0 bg-[#54c7c2]" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity duration-300" />
              <span className="relative text-[#060a0e] tracking-wide">Book a Free Demo</span>
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-xl font-semibold text-[15px] border border-white/20 text-white/80 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Our Solutions →
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06] max-w-[760px] mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[#060a0e] px-6 py-5 text-center">
                <div className="text-3xl font-extrabold text-[#54c7c2] tracking-tight">{s.value}</div>
                <div className="text-white/40 text-xs mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060a0e] to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════════════
          2. SERVICES
      ══════════════════════════════════════════════════ */}
      <section className="py-28 relative" id="services">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#0070de]/[0.04] blur-[100px]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">

          {/* Section header */}
          <div className="max-w-[600px] mb-16">
            <SectionEyebrow>What We Do</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mt-4 mb-5">
              End-to-End IT Services,<br />
              <span className="text-[#54c7c2]">Tailored to Your Business</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              We don't just write code — we engineer solutions. Every engagement is built around your goals, your industry, and your growth trajectory.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-[#54c7c2]/[0.05] hover:border-[#54c7c2]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Corner glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#54c7c2]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 translate-y-4" />

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-[#54c7c2]/10 border border-[#54c7c2]/20 flex items-center justify-center text-[#54c7c2] text-xl mb-5 group-hover:bg-[#54c7c2]/20 transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="text-white font-semibold text-[15px] mb-2.5 group-hover:text-[#54c7c2] transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-5 text-[#54c7c2]/60 text-xs font-medium group-hover:text-[#54c7c2] transition-colors flex items-center gap-1">
                    Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. PRODUCTS
      ══════════════════════════════════════════════════ */}
      <section className="py-28 relative bg-[#080c10]" id="products">

        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 w-[400px] h-[400px] rounded-full bg-[#54c7c2]/[0.04] blur-[90px]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-[560px]">
              <SectionEyebrow>Our Products</SectionEyebrow>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mt-4 mb-5">
                Purpose-Built<br />
                <span className="text-[#54c7c2]">Enterprise Products</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Off-the-shelf software that doesn't fit? Our products are designed from the ground up for real business operations — configurable, scalable, and ready to deploy from day one.
              </p>
            </div>
            <Link
              href="/products"
              className="flex-shrink-0 px-6 py-3 rounded-xl border border-white/20 text-white/70 text-sm font-semibold hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all duration-200 self-start lg:self-auto"
            >
              View All Products →
            </Link>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-[#54c7c2]/[0.06] hover:border-[#54c7c2]/25 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#54c7c2]/10 border border-[#54c7c2]/15 flex items-center justify-center text-[#54c7c2] text-lg group-hover:bg-[#54c7c2]/20 transition-colors">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-white/90 font-semibold text-[13.5px] leading-snug mb-1.5 group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-white/38 text-xs leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-auto text-[#54c7c2]/50 text-xs group-hover:text-[#54c7c2] transition-colors flex items-center gap-1">
                  Explore <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. WHY 110 SOLUTIONS
      ══════════════════════════════════════════════════ */}
      <section className="py-28 relative" id="why-us">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#54c7c2]/[0.03] blur-[120px]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">

          <div className="text-center mb-16 max-w-[600px] mx-auto">
            <SectionEyebrow>Why Choose Us</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mt-4 mb-5">
              Why Leading Businesses<br />
              <span className="text-[#54c7c2]">Choose 110 Solutions</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Choosing a technology partner is a long-term decision. Here's why our clients stay with us — and send their peers our way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((w, i) => (
              <div
                key={w.title}
                className="relative p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden group hover:border-[#54c7c2]/20 transition-all duration-300"
              >
                {/* Number watermark */}
                <div className="absolute top-4 right-5 text-[64px] font-black text-white/[0.03] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative z-10">
                  <div className="text-[#54c7c2] text-2xl mb-5">{w.icon}</div>
                  <h3 className="text-white font-semibold text-[15px] mb-3 leading-snug">{w.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. TESTIMONIALS
      ══════════════════════════════════════════════════ */}
      <section className="py-28 relative bg-[#080c10]">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />

        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">

          <div className="text-center mb-16">
            <SectionEyebrow>Client Stories</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mt-4">
              Trusted by Teams Who<br />
              <span className="text-[#54c7c2]">Demand Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] flex flex-col gap-6 hover:border-[#54c7c2]/20 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#54c7c2] text-sm">★</span>
                  ))}
                </div>

                {/* Quote mark */}
                <div className="text-[#54c7c2]/30 text-5xl font-serif leading-none -mb-2">"</div>

                <p className="text-white/65 text-[14px] leading-relaxed flex-1">{t.quote}</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-[#54c7c2]/20 border border-[#54c7c2]/30 flex items-center justify-center text-[#54c7c2] text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. FINAL CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#54c7c2]/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#54c7c2]/[0.07] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(84,199,194,1) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto px-6 xl:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#54c7c2]/30 bg-[#54c7c2]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#54c7c2] animate-pulse" />
            <span className="text-[#54c7c2] text-xs font-semibold tracking-[0.12em] uppercase">Get Started Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6">
            Ready to Modernise<br />
            <span className="text-[#54c7c2]">Your Business Operations?</span>
          </h2>

          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-[560px] mx-auto">
            Join 100+ businesses that trust 110 Solutions to deliver enterprise software that performs. Let's start with a no-obligation demo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-xl font-bold text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(84,199,194,0.4)]"
            >
              <span className="absolute inset-0 bg-[#54c7c2]" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity" />
              <span className="relative text-[#060a0e] tracking-wide">Book a Free Demo</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-[15px] border border-white/25 text-white/80 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-[2px] bg-[#54c7c2]" />
      <span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">{children}</span>
    </div>
  );
}