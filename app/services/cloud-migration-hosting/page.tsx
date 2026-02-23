// app/services/cloud-migration-hosting/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Cloud Migration & Hosting Services Australia | AWS, Azure & GCP — 110 Solutions",
  description:
    "Expert cloud migration and managed hosting services in Australia. 110 Solutions migrates businesses to AWS, Azure, and Google Cloud with zero downtime, reducing infrastructure costs and boosting scalability.",
  keywords:
    "cloud migration Australia, AWS migration Australia, Azure migration, cloud hosting services Australia, managed cloud services, Google Cloud migration, cloud consulting Australia",
};

export default function CloudMigrationPage() {
  const services = [
    { icon: "⬡", title: "Cloud Readiness Assessment", desc: "We audit your existing infrastructure and workloads to create a tailored migration strategy with clear cost projections." },
    { icon: "◈", title: "AWS Migration", desc: "Full migration to Amazon Web Services — EC2, S3, RDS, Lambda — with architecture optimised for your workloads." },
    { icon: "◉", title: "Azure Migration", desc: "Microsoft Azure migration for businesses already in the Microsoft ecosystem — seamless, secure, and fully managed." },
    { icon: "◎", title: "Google Cloud Platform", desc: "GCP migrations leveraging BigQuery, Cloud Run, and Kubernetes for data-intensive and containerised workloads." },
    { icon: "◬", title: "Zero-Downtime Migration", desc: "Our phased migration approach ensures your systems stay online throughout — no business disruption, no data loss." },
    { icon: "⬟", title: "Managed Cloud Hosting", desc: "Ongoing cloud management, monitoring, cost optimisation, and security compliance so you never have to worry." },
  ];
  return (
    <main className="bg-[#060a0e] text-white">
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#54c7c2]/[0.04] blur-[110px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link><span>/</span>
            <span className="text-[#54c7c2]">Cloud Migration & Hosting</span>
          </nav>
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Cloud Migration & Hosting</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-6">
              Move to the Cloud.<br /><span className="text-[#54c7c2]">Without the Headaches.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Cloud migration done wrong causes downtime, data loss, and ballooning costs. Done right, it reduces infrastructure overhead, unlocks enterprise scalability, and gives your team the tools to work from anywhere. We do it right.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://calendly.com/110solutions" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#54c7c2] text-[#060a0e] font-bold text-sm rounded-xl hover:brightness-110 transition-all">Book a Free Assessment</a>
              <Link href="/contact" className="px-6 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-xl hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all">Get a Quote →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080c10] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/25 to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Cloud Services</span><div className="w-6 h-[2px] bg-[#54c7c2]" /></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">End-to-End Cloud Solutions</h2>
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

      <PageCTA heading="Ready to Move to the Cloud?" sub="Get a free cloud readiness assessment and migration cost estimate for your business." />
    </main>
  );
}