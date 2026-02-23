// app/services/software-maintenance-support/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Software Maintenance & Support Services Australia — 110 Solutions",
  description:
    "Reliable software maintenance and IT support services in Australia. 110 Solutions provides proactive maintenance, bug fixes, security updates, and SLA-backed technical support for your business systems.",
  keywords:
    "software maintenance services Australia, IT support Australia, software support services, application maintenance, bug fixing services, software helpdesk Australia",
};

export default function MaintenanceSupportPage() {
  const services = [
    { icon: "⬡", title: "Bug Fixes & Patches", desc: "Rapid identification and resolution of issues before they impact your operations or your customers." },
    { icon: "◈", title: "Performance Optimisation", desc: "Regular audits and tuning to ensure your software runs at peak speed and efficiency." },
    { icon: "◉", title: "Security Updates", desc: "Proactive security patching, vulnerability assessments, and compliance monitoring." },
    { icon: "◎", title: "Feature Enhancements", desc: "Incremental improvements and new features added iteratively without disrupting your users." },
    { icon: "◬", title: "Server & Infrastructure", desc: "Monitoring, uptime management, and infrastructure scaling as your usage grows." },
    { icon: "⬟", title: "SLA-Backed Support", desc: "Defined response times, escalation paths, and dedicated account management for enterprise clients." },
  ];
  return (
    <main className="bg-[#060a0e] text-white">
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#54c7c2]/[0.04] blur-[110px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link><span>/</span>
            <span className="text-[#54c7c2]">Software Maintenance & Support</span>
          </nav>
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Maintenance & Support</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-6">
              Your Software, Running<br /><span className="text-[#54c7c2]">Flawlessly. Always.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Software doesn't maintain itself. Whether it's your own product or a system we built for you, our maintenance and support service keeps your technology performing at its best — so you can focus on your business, not your bugs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-[#54c7c2] text-[#060a0e] font-bold text-sm rounded-xl hover:brightness-110 transition-all">Get a Support Plan</Link>
              <a href="mailto:info@110solutions.com.au" className="px-6 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-xl hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all">Email Us Directly →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080c10] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/25 to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Support Services</span><div className="w-6 h-[2px] bg-[#54c7c2]" /></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Comprehensive Software Support</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#54c7c2]/20 transition-all">
                <div className="text-[#54c7c2] text-xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-[14px] mb-2">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA heading="Need Reliable Software Support?" sub="We offer flexible monthly support plans for businesses of all sizes. Let's talk." demo={false} />
    </main>
  );
}