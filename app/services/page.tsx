import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "IT Services | Custom Software, Mobile Apps & More — 110 Solutions",
  description:
    "110 Solutions offers end-to-end IT services — custom software development, mobile app development, web & e-commerce, cloud migration, IT consulting, and UI/UX design.",
  keywords:
    "IT services, software development company, custom software development, mobile app development, IT consulting, cloud migration services",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Custom Software Development",
    href: "/services/custom-software-development",
    keyword: "Bespoke Enterprise Solutions",
    desc: "Purpose-built software engineered around your unique business logic. From complex enterprise systems to niche workflow tools, we design, develop, and deliver software that your team actually uses.",
    features: ["Requirements analysis & scoping", "Agile delivery methodology", "Scalable architecture design", "Full handover & documentation"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    keyword: "iOS & Android",
    desc: "Native and cross-platform mobile applications built for performance, usability, and measurable business impact. We build apps your customers keep coming back to.",
    features: ["iOS & Android development", "React Native & Flutter", "App Store submission & launch", "Ongoing app maintenance"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Web & E-Commerce Development",
    href: "/services/web-ecommerce-development",
    keyword: "High-Converting Web Platforms",
    desc: "Fast, SEO-optimised websites and e-commerce platforms that turn visitors into customers. Built for performance, accessibility, and long-term growth.",
    features: ["Next.js & React development", "E-commerce integrations", "SEO-first architecture", "CMS & headless setup"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Software Maintenance & Support",
    href: "/services/software-maintenance-support",
    keyword: "Ongoing Technical Support",
    desc: "Proactive maintenance, performance monitoring, and rapid bug resolution. We keep your existing systems running at peak performance so your team stays productive.",
    features: ["Bug fixes & patches", "Performance optimisation", "Security updates & audits", "SLA-backed response times"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: "IT Consulting",
    href: "/services/it-consulting",
    keyword: "Strategic Technology Advisory",
    desc: "Strategic technology guidance that aligns your IT roadmap with your business goals. We help you invest in the right technology — and avoid costly mistakes.",
    features: ["Technology audits", "Digital transformation strategy", "Vendor selection & evaluation", "IT roadmap planning"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
    title: "Cloud Migration & Hosting",
    href: "/services/cloud-migration-hosting",
    keyword: "AWS · Azure · Google Cloud",
    desc: "Seamless migration to the cloud with zero downtime. We modernise your infrastructure, reduce costs, and give your business enterprise-grade scalability and reliability.",
    features: ["Cloud readiness assessment", "AWS, Azure & GCP migration", "Zero-downtime migration", "Managed cloud hosting"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    keyword: "User-Centred Design",
    desc: "Research-driven design that puts users first. We create intuitive, visually compelling interfaces that reduce friction, increase engagement, and drive measurable conversions.",
    features: ["User research & personas", "Wireframing & prototyping", "Design system creation", "Usability testing"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "We learn your business, goals, and challenges through stakeholder interviews and research." },
  { step: "02", title: "Plan", desc: "We define scope, architecture, timeline, and milestones with full transparency." },
  { step: "03", title: "Build", desc: "Agile sprints with weekly demos. You see progress in real time, every week." },
  { step: "04", title: "Test", desc: "Rigorous QA across devices, browsers, and edge cases before anything goes live." },
  { step: "05", title: "Launch", desc: "Zero-downtime deployment with CI/CD pipelines, monitoring, and rollback plans." },
  { step: "06", title: "Support", desc: "Ongoing maintenance, optimisation, and feature enhancements post-launch." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Full height, no white gap
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[100vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-[#000000]/80 to-[#000000]/95" />
          <div className="absolute inset-0 bg-[#091e2a]/40" />
        </div>

        {/* Bottom teal accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/25 text-[10px] tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="text-center max-w-[700px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#54c7c2] animate-pulse" />
              <span className="text-[#54c7c2] text-[10px] font-semibold tracking-[0.15em] uppercase">
                7 Specialist Service Verticals
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight mb-5">
              Technology Services That{" "}
              <span className="text-[#54c7c2]">Drive Real Results</span>
            </h1>
            <p className="text-white/45 text-[15px] leading-relaxed max-w-[520px] mx-auto mb-8">
              From strategy to deployment, we deliver enterprise-grade solutions
              led by specialists with proven industry experience — not generalists.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="group relative px-6 py-2.5 rounded-lg font-bold text-[13px] overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-[#54c7c2]" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity" />
                <span className="relative text-[#060a0e] tracking-wide flex items-center gap-2 justify-center">
                  Discuss Your Project
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="#services"
                className="px-6 py-2.5 rounded-lg font-semibold text-[13px] border border-white/25 text-white/75 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all"
              >
                Explore Services ↓
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES LIST (Light) — Alternating zigzag
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white" id="services">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-[560px] mx-auto">
              <LightEyebrow center>What We Deliver</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Comprehensive IT Services
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Each service is backed by a dedicated team of specialists, a proven
                methodology, and full project transparency from kickoff to delivery.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {SERVICES.map((s, i) => {
              const isReversed = i % 2 !== 0;
              return (
                <ScrollReveal key={s.href} delay={100}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image */}
                    <div
                      className={`relative rounded-2xl overflow-hidden group ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="aspect-[4/3] relative">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                          style={{ backgroundImage: `url(${s.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#0e8c86] flex items-center justify-center">
                          <span className="text-white text-[13px] font-extrabold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/15 flex items-center justify-center text-[#0e8c86]">
                          {s.icon}
                        </div>
                        <p className="text-[#0e8c86] text-[10px] font-bold tracking-[0.18em] uppercase">
                          {s.keyword}
                        </p>
                      </div>

                      <h2 className="text-gray-900 font-extrabold text-2xl md:text-[28px] leading-snug mb-4">
                        {s.title}
                      </h2>

                      <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                        {s.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                        {s.features.map((f) => (
                          <div key={f} className="flex items-center gap-2.5 text-[13px] text-gray-600">
                            <div className="w-4 h-4 rounded-full bg-[#0e8c86]/10 flex items-center justify-center flex-shrink-0">
                              <svg className="w-2.5 h-2.5 text-[#0e8c86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            {f}
                          </div>
                        ))}
                      </div>

                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0e8c86] text-white text-[13px] font-bold hover:bg-[#0a736e] transition-colors duration-200"
                      >
                        Learn More
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {i < SERVICES.length - 1 && (
                    <div className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FULL-WIDTH IMAGE BAND (Visual break)
      ═══════════════════════════════════════════ */}
      <section className="relative h-[280px] md:h-[340px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#000000]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-[#54c7c2] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">
              Our Track Record
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
              Delivering Excellence,{" "}
              <span className="text-[#54c7c2]">Project After Project</span>
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
              { end: 100, suffix: "+", label: "Projects Delivered" },
              { end: 50, suffix: "+", label: "Enterprise Clients" },
              { end: 7, suffix: "", label: "Service Verticals" },
              { end: 99, suffix: "%", label: "On-Time Delivery" },
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
          HOW WE WORK (Light with side image)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            <div>
              <ScrollReveal>
                <LightEyebrow>Our Methodology</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                  How Every Engagement{" "}
                  <span className="text-[#0e8c86]">Works</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-10 max-w-[480px]">
                  A proven, transparent process refined across 100+ successful
                  project deliveries.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                {PROCESS.map((p, i) => (
                  <ScrollReveal key={p.step} delay={i * 80}>
                    <div className="flex gap-5 group">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#0e8c86] flex items-center justify-center">
                          <span className="text-white text-[12px] font-extrabold">
                            {p.step}
                          </span>
                        </div>
                        {i < PROCESS.length - 1 && (
                          <div className="w-[2px] h-full min-h-[40px] bg-[#0e8c86]/15 mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h3 className="text-gray-900 font-bold text-[15px] mb-1.5">
                          {p.title}
                        </h3>
                        <p className="text-gray-500 text-[13px] leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal direction="right" delay={200}>
              <div className="hidden lg:block sticky top-28">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[3/4]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/80 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-lg leading-snug">
                      Transparent delivery.
                      <br />
                      <span className="text-white/70">Every sprint, every milestone.</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY WORK WITH US (White with side image)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="hidden lg:block relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/5]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/60 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <LightEyebrow>The 110 Difference</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-10">
                  Why Clients Choose{" "}
                  <span className="text-[#0e8c86]">Our Services</span>
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    ),
                    title: "Dedicated Teams",
                    desc: "A committed team of specialists — not freelancers juggling multiple clients. Full focus on your project, every sprint.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    ),
                    title: "Proven Delivery",
                    desc: "100+ successful projects delivered on time and within budget. A track record that speaks for itself.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                    ),
                    title: "Transparent Pricing",
                    desc: "No hidden fees, no scope creep surprises. Fixed-price or time-and-materials — your choice.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ),
                    title: "Enterprise-Grade Security",
                    desc: "Encrypted data, secure APIs, role-based access, and regular vulnerability assessments on every project.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 100}>
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0 group-hover:bg-[#0e8c86]/15 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-[15px] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-[13px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA (Dark background wrapper)
      ═══════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Not Sure Which Service You Need?"
          sub="Tell us about your challenge and we'll recommend the right solution — no commitment required."
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
    <div className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
      <div className="w-5 h-[2px] bg-[#0e8c86]" />
      <span className="text-[#0e8c86] text-[10px] font-bold tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}