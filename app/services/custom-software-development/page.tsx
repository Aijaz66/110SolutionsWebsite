// app/services/custom-software-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Custom Software Development Australia | Bespoke Enterprise Solutions — 110 Solutions",
  description:
    "110 Solutions builds custom software tailored to your exact business requirements. Expert custom software development for SMBs and enterprises across Australia. Agile, scalable, and fully supported.",
  keywords:
    "custom software development Australia, bespoke software development, enterprise software development company, custom application development, software development company Australia",
};

const PROCESS = [
  { step: "01", title: "Discovery & Scoping", desc: "We deep-dive into your business, workflows, and pain points to define exactly what needs to be built — and why." },
  { step: "02", title: "Architecture & Design", desc: "Our architects design a scalable technical foundation. UI/UX design ensures the product is intuitive from day one." },
  { step: "03", title: "Agile Development", desc: "We develop in iterative sprints with regular demos. You see progress weekly — no black boxes, no surprises." },
  { step: "04", title: "Testing & QA", desc: "Rigorous automated and manual testing across all environments before any code reaches production." },
  { step: "05", title: "Deployment & Launch", desc: "Smooth, zero-downtime deployment with full monitoring. We handle everything from infrastructure to go-live." },
  { step: "06", title: "Support & Evolution", desc: "Ongoing maintenance, feature development, and technical support to keep your software ahead of your business needs." },
];

const BENEFITS = [
  { icon: "⬡", title: "Built Exactly for You", desc: "No adapting your workflows to fit software. We adapt the software to fit your workflows — every feature is intentional." },
  { icon: "◈", title: "Scalable by Design", desc: "Every system is architected to grow with your business — from 10 users to 10,000 without a rebuild." },
  { icon: "◉", title: "Full IP Ownership", desc: "You own 100% of the code, documentation, and intellectual property. No lock-in, no licensing surprises." },
  { icon: "◎", title: "Integrated Seamlessly", desc: "We build with your existing systems in mind — ERP, CRM, third-party APIs — full integration, zero friction." },
];

const INDUSTRIES = ["Retail & E-Commerce", "Education & EdTech", "Healthcare", "Logistics & Supply Chain", "Government & Public Sector", "Finance & Accounting", "Hospitality", "Manufacturing"];

export default function CustomSoftwarePage() {
  return (
    <main className="bg-[#060a0e] text-white">

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#0070de]/[0.05] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#54c7c2]/[0.04] blur-[100px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#54c7c2]">Custom Software Development</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[2px] bg-[#54c7c2]" />
                <span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Custom Software Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-6">
                Software Built<br />
                <span className="text-[#54c7c2]">Around Your Business.</span>
              </h1>
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                Off-the-shelf software forces your team to work around its limitations. Custom software eliminates those limitations entirely. We engineer solutions that fit your exact workflows, integrate with your existing systems, and scale as your business grows.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://calendly.com/110solutions" target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#54c7c2] text-[#060a0e] font-bold text-sm rounded-xl hover:brightness-110 transition-all hover:-translate-y-0.5">
                  Book a Free Consultation
                </a>
                <Link href="/contact" className="px-6 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-xl hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all">
                  Get a Quote →
                </Link>
              </div>
            </div>

            {/* Stats block */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "100+", label: "Projects Delivered" },
                { val: "99%", label: "On-Time Delivery" },
                { val: "8+", label: "Industries Served" },
                { val: "24/7", label: "Post-Launch Support" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center">
                  <div className="text-3xl font-extrabold text-[#54c7c2] mb-1">{s.val}</div>
                  <div className="text-white/45 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#080c10] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/25 to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#54c7c2]" />
              <span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Why Custom</span>
              <div className="w-6 h-[2px] bg-[#54c7c2]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Custom Software Advantage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#54c7c2]/20 transition-all">
                <div className="text-[#54c7c2] text-xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-[14px] mb-2">{b.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#54c7c2]" />
              <span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">How We Work</span>
              <div className="w-6 h-[2px] bg-[#54c7c2]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Development Process</h2>
            <p className="text-white/45 text-base mt-3 max-w-[500px] mx-auto">A structured, transparent process that keeps you in control from kickoff to launch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
                <div className="absolute top-3 right-5 text-[56px] font-black text-white/[0.03] leading-none select-none">{p.step}</div>
                <div className="w-8 h-8 rounded-lg bg-[#54c7c2]/10 border border-[#54c7c2]/20 flex items-center justify-center text-[#54c7c2] text-xs font-bold mb-5">{p.step}</div>
                <h3 className="font-bold text-[14px] mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-[#080c10] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8 text-center">
          <p className="text-white/35 text-xs font-bold tracking-[0.2em] uppercase mb-6">Industries We Serve</p>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/50 text-sm">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <PageCTA heading="Ready to Build Your Custom Solution?" sub="Share your requirements and we'll scope your project for free. No obligation." />
    </main>
  );
}