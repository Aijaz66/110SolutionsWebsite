// app/services/it-consulting/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "IT Consulting Services Australia | Technology Strategy & Advisory — 110 Solutions",
  description:
    "Strategic IT consulting services in Australia. 110 Solutions helps businesses align technology investments with business goals through expert advisory, technology audits, and digital transformation planning.",
  keywords:
    "IT consulting Australia, technology consulting firm Australia, digital transformation consulting, IT strategy consulting, technology advisory Australia, IT roadmap planning",
};

export default function ITConsultingPage() {
  const offerings = [
    { icon: "⬡", title: "Technology Audits", desc: "A thorough assessment of your current tech stack — identifying gaps, risks, inefficiencies, and opportunities." },
    { icon: "◈", title: "Digital Transformation Strategy", desc: "A clear, prioritised roadmap for modernising your operations with the right technology at the right time." },
    { icon: "◉", title: "IT Roadmap Planning", desc: "12–36 month technology roadmaps aligned with your business growth objectives and budget." },
    { icon: "◎", title: "Vendor & Platform Selection", desc: "Unbiased evaluation and recommendation of software vendors, cloud platforms, and technology partners." },
    { icon: "◬", title: "Software Architecture Review", desc: "Assessment of existing systems for scalability, security, and technical debt — with an actionable remediation plan." },
    { icon: "⬟", title: "Change Management Support", desc: "Helping your team adopt new technology through training, documentation, and structured rollout planning." },
  ];
  return (
    <main className="bg-[#060a0e] text-white">
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0070de]/[0.06] blur-[110px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link><span>/</span>
            <span className="text-[#54c7c2]">IT Consulting</span>
          </nav>
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">IT Consulting</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-6">
              Smarter Technology<br /><span className="text-[#54c7c2]">Decisions Start Here.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Technology investments are significant. Making the wrong ones is costly. Our IT consulting service gives you access to senior technology strategists who help you plan, prioritise, and execute with confidence — so every IT dollar delivers measurable ROI.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://calendly.com/110solutions" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#54c7c2] text-[#060a0e] font-bold text-sm rounded-xl hover:brightness-110 transition-all">Book a Strategy Session</a>
              <Link href="/contact" className="px-6 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-xl hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all">Contact Us →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080c10] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/25 to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Our Advisory Services</span><div className="w-6 h-[2px] bg-[#54c7c2]" /></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What We Advise On</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <div key={o.title} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#54c7c2]/20 transition-all">
                <div className="text-[#54c7c2] text-xl mb-4">{o.icon}</div>
                <h3 className="font-bold text-[14px] mb-2">{o.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA heading="Not Sure Where to Start with Your IT Strategy?" sub="Book a complimentary 30-minute strategy session with one of our senior consultants." />
    </main>
  );
}