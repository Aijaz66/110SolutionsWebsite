// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "IT Services Australia | Custom Software, Mobile Apps & More — 110 Solutions",
  description:
    "110 Solutions offers end-to-end IT services in Australia — custom software development, mobile app development, web & e-commerce, cloud migration, IT consulting, and UI/UX design.",
  keywords:
    "IT services Australia, software development company Australia, custom software development, mobile app development Australia, IT consulting Australia, cloud migration services",
};

const SERVICES = [
  {
    icon: "⬡",
    title: "Custom Software Development",
    href: "/services/custom-software-development",
    keyword: "Bespoke Enterprise Solutions",
    desc: "Purpose-built software engineered around your unique business logic. From complex enterprise systems to niche workflow tools, we design, develop, and deliver software that your team actually uses.",
    features: ["Requirements analysis & scoping", "Agile delivery methodology", "Scalable architecture", "Full handover & documentation"],
  },
  {
    icon: "◈",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    keyword: "iOS & Android",
    desc: "Native and cross-platform mobile applications built for performance, usability, and measurable business impact. We build apps your customers keep coming back to.",
    features: ["iOS & Android development", "React Native & Flutter", "App Store submission", "Ongoing app maintenance"],
  },
  {
    icon: "◉",
    title: "Web & E-Commerce Development",
    href: "/services/web-ecommerce-development",
    keyword: "High-Converting Web Platforms",
    desc: "Fast, SEO-optimised websites and e-commerce platforms that turn visitors into customers. Built for performance, accessibility, and long-term growth.",
    features: ["Next.js & React development", "E-commerce integrations", "SEO-first architecture", "CMS integration"],
  },
  {
    icon: "◎",
    title: "Software Maintenance & Support",
    href: "/services/software-maintenance-support",
    keyword: "Ongoing Technical Support",
    desc: "Proactive maintenance, performance monitoring, and rapid bug resolution. We keep your existing systems running at peak performance so your team stays productive.",
    features: ["Bug fixes & patches", "Performance optimisation", "Security updates", "SLA-backed response times"],
  },
  {
    icon: "◬",
    title: "IT Consulting",
    href: "/services/it-consulting",
    keyword: "Strategic Technology Advisory",
    desc: "Strategic technology guidance that aligns your IT roadmap with your business goals. We help you invest in the right technology — and avoid costly mistakes.",
    features: ["Technology audits", "Digital transformation strategy", "Vendor selection", "IT roadmap planning"],
  },
  {
    icon: "⬟",
    title: "Cloud Migration & Hosting",
    href: "/services/cloud-migration-hosting",
    keyword: "AWS · Azure · Google Cloud",
    desc: "Seamless migration to the cloud with zero downtime. We modernise your infrastructure, reduce costs, and give your business enterprise-grade scalability and reliability.",
    features: ["Cloud readiness assessment", "AWS, Azure & GCP migration", "Zero-downtime migration", "Managed cloud hosting"],
  },
  {
    icon: "◍",
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    keyword: "User-Centred Design",
    desc: "Research-driven design that puts users first. We create intuitive, visually compelling interfaces that reduce friction, increase engagement, and drive measurable conversions.",
    features: ["User research & personas", "Wireframing & prototyping", "Design system creation", "Usability testing"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#060a0e] text-white">

      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#54c7c2]/[0.04] blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[#54c7c2]" />
              <span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.08] tracking-tight mb-6">
              End-to-End IT Services<br />
              <span className="text-[#54c7c2]">Built for Business Growth</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-[580px]">
              From strategy to deployment, 110 Solutions delivers enterprise-grade technology services that solve real business problems. No generalists — every engagement is led by specialists with proven industry experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="pb-8">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8 space-y-6">
          {SERVICES.map((s, i) => (
            <div key={s.href} className="group relative p-8 md:p-10 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#54c7c2]/25 hover:bg-[#54c7c2]/[0.03] transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#54c7c2]/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-16 -translate-y-8 pointer-events-none" />

              {/* Number watermark */}
              <div className="absolute bottom-4 right-8 font-black text-[80px] leading-none text-white/[0.025] select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-start">
                {/* Icon + title */}
                <div className="flex lg:flex-col items-start gap-5 lg:gap-4 lg:w-[220px]">
                  <div className="w-12 h-12 rounded-xl bg-[#54c7c2]/10 border border-[#54c7c2]/20 flex items-center justify-center text-[#54c7c2] text-2xl flex-shrink-0 group-hover:bg-[#54c7c2]/20 transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-[#54c7c2] text-[10px] font-bold tracking-[0.18em] uppercase mb-1">{s.keyword}</p>
                    <h2 className="text-white font-bold text-lg leading-snug group-hover:text-[#54c7c2] transition-colors">{s.title}</h2>
                  </div>
                </div>

                {/* Description + features */}
                <div>
                  <p className="text-white/55 text-[15px] leading-relaxed mb-5">{s.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-white/45">
                        <span className="text-[#54c7c2] text-xs flex-shrink-0">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={s.href}
                  className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-white/60 text-sm font-semibold hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all duration-200 self-start lg:self-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <PageCTA heading="Not Sure Which Service You Need?" sub="Tell us about your challenge and we'll recommend the right solution — no commitment required." />
      </div>
    </main>
  );
}