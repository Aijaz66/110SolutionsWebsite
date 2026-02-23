// app/services/ui-ux-design/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "UI/UX Design Services Australia | User Experience Design — 110 Solutions",
  description:
    "Professional UI/UX design services in Australia. 110 Solutions creates intuitive, research-driven user interfaces that reduce friction, increase engagement, and drive measurable business results.",
  keywords:
    "UI UX design Australia, user experience design, UX design agency Australia, web design company Australia, app UI design, product design services Australia",
};

export default function UIUXDesignPage() {
  const services = [
    { icon: "⬡", title: "User Research & Personas", desc: "We research your actual users — their behaviours, goals, and frustrations — to ground every design decision in reality." },
    { icon: "◈", title: "Information Architecture", desc: "Structuring content and navigation so users always know where they are and can find what they need effortlessly." },
    { icon: "◉", title: "Wireframing & Prototyping", desc: "Low and high-fidelity prototypes that let you test and validate before a single line of code is written." },
    { icon: "◎", title: "Visual & UI Design", desc: "Pixel-perfect interface design with a cohesive design system — components, typography, colours, and spacing." },
    { icon: "◬", title: "Design System Creation", desc: "A scalable component library that keeps your product visually consistent as it grows across platforms." },
    { icon: "⬟", title: "Usability Testing", desc: "Testing with real users to identify friction points and validate that the design works before launch." },
  ];
  return (
    <main className="bg-[#060a0e] text-white">
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#54c7c2]/[0.04] blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link><span>/</span>
            <span className="text-[#54c7c2]">UI/UX Design</span>
          </nav>
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">UI/UX Design</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-6">
              Design That Puts<br /><span className="text-[#54c7c2]">Users First.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Great software is built on great design. We create interfaces that are intuitive, beautiful, and aligned with how your users actually think and behave — reducing support overhead, increasing retention, and driving measurable conversion improvements.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://calendly.com/110solutions" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#54c7c2] text-[#060a0e] font-bold text-sm rounded-xl hover:brightness-110 transition-all">Book a Design Consultation</a>
              <Link href="/contact" className="px-6 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-xl hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all">View Our Work →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080c10] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/25 to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Design Services</span><div className="w-6 h-[2px] bg-[#54c7c2]" /></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Design Process & Deliverables</h2>
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

      <PageCTA heading="Ready to Elevate Your User Experience?" sub="Share your project and we'll show you what great design can do for your product." />
    </main>
  );
}