// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "About 110 Solutions | Enterprise Software & IT Company — Australia",
  description:
    "Learn about 110 Solutions — a trusted enterprise software and IT solutions company based in Bella Vista, Australia. Serving SMBs, enterprises, and agencies with custom software, products, and IT consulting.",
  keywords:
    "about 110 solutions, enterprise software company Australia, IT solutions company Bella Vista, software development team Australia, technology company Sydney",
};

const VALUES = [
  { icon: "⬡", title: "Trust Above All", desc: "Every client relationship is built on transparency, honest communication, and delivering exactly what we promise — on time, every time." },
  { icon: "◈", title: "Engineering Excellence", desc: "We hold ourselves to a high technical standard. Clean code, robust architecture, and proper documentation aren't optional extras — they're our baseline." },
  { icon: "◉", title: "Client-First Thinking", desc: "We measure success by our clients' outcomes, not by our output. If a solution doesn't serve your business goals, we'll tell you — and recommend a better path." },
  { icon: "◎", title: "Continuous Improvement", desc: "Technology evolves constantly. We invest in our team's skills, tools, and processes to ensure what we build today is still relevant tomorrow." },
  { icon: "◬", title: "Accountability", desc: "We own our work completely. When things go well, we celebrate together. When something needs fixing, we fix it — no excuses, no finger-pointing." },
  { icon: "⬟", title: "Long-Term Partnerships", desc: "We don't chase one-off projects. Our goal is to become your long-term technology partner — growing with you as your business scales." },
];

const TEAM_STATS = [
  { val: "100+", label: "Projects Delivered" },
  { val: "8", label: "Enterprise Products" },
  { val: "7", label: "Core Services" },
  { val: "99%", label: "Client Retention" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#060a0e] text-white">

      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#54c7c2]/[0.04] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0070de]/[0.04] blur-[100px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#54c7c2]">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">About 110 Solutions</span></div>
              <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-7">
                We Build Technology<br />
                <span className="text-[#54c7c2]">That Businesses Rely On.</span>
              </h1>
              <p className="text-white/55 text-lg leading-relaxed mb-5">
                110 Solutions is an enterprise software and IT solutions company headquartered in Bella Vista, Australia. We work with SMBs, large enterprises, and agencies to deliver custom software, purpose-built products, and strategic IT services that drive measurable business outcomes.
              </p>
              <p className="text-white/45 text-base leading-relaxed">
                Our team combines deep technical expertise with genuine business understanding — meaning we don't just build what you ask for, we help you figure out exactly what you need.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {TEAM_STATS.map((s) => (
                <div key={s.label} className="p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center">
                  <div className="text-4xl font-extrabold text-[#54c7c2] mb-2">{s.val}</div>
                  <div className="text-white/45 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#080c10] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Our Mission</span></div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                Making Enterprise Technology<br /><span className="text-[#54c7c2]">Accessible to Every Business.</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-5">
                Enterprise-grade software used to be the exclusive domain of companies with seven-figure IT budgets. We believe that's wrong. Every business — regardless of size — deserves technology that's reliable, scalable, and built to last.
              </p>
              <p className="text-white/45 text-base leading-relaxed">
                Our mission is to close that gap — delivering the same calibre of software that global enterprises use, at a price point and with a partnership approach that works for ambitious Australian businesses at every stage of growth.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Our Approach</span></div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                Partners, Not<br /><span className="text-[#54c7c2]">Just Vendors.</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-5">
                The traditional client-vendor dynamic doesn't serve anyone well. We operate as an extension of your team — embedded in your goals, proactive about your challenges, and invested in your outcomes long after a project launches.
              </p>
              <p className="text-white/45 text-base leading-relaxed">
                That's why over 99% of our clients stay with us beyond their first engagement — because when technology is done right, it creates a partnership worth maintaining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Our Values</span><div className="w-6 h-[2px] bg-[#54c7c2]" /></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">What We Stand For</h2>
            <p className="text-white/45 text-base mt-3 max-w-[480px] mx-auto">Our values aren't wall art — they're the principles that guide every decision, every line of code, and every client interaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <div key={v.title} className="relative p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#54c7c2]/20 transition-all overflow-hidden">
                <div className="absolute top-3 right-5 text-[64px] font-black text-white/[0.025] leading-none select-none">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-[#54c7c2] text-xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[14.5px] mb-2">{v.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-[#080c10] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Where We Are</span></div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">Based in Bella Vista,<br /><span className="text-[#54c7c2]">Serving Australia & Beyond.</span></h2>
              <p className="text-white/50 text-base leading-relaxed mb-5">Our team is headquartered in Bella Vista, Sydney — with a client base spanning businesses across Australia, New Zealand, and internationally.</p>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <span className="text-[#54c7c2] mt-0.5">◎</span>
                Unit 4.15, 29-31 Lexington Drive, Bella Vista, Australia
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50 mt-2">
                <span className="text-[#54c7c2]">✉</span>
                <a href="mailto:info@110solutions.com.au" className="hover:text-[#54c7c2] transition-colors">info@110solutions.com.au</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="flex-1 p-6 rounded-2xl border border-[#54c7c2]/25 bg-[#54c7c2]/[0.05] text-center hover:bg-[#54c7c2]/[0.08] transition-all">
                <div className="text-[#54c7c2] text-xl mb-3">◈</div>
                <div className="font-bold text-sm mb-1">Get in Touch</div>
                <div className="text-white/40 text-xs">Send us a message</div>
              </Link>
              <a href="https://calendly.com/110solutions" target="_blank" rel="noopener noreferrer"
                className="flex-1 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center hover:border-[#54c7c2]/25 transition-all">
                <div className="text-[#54c7c2] text-xl mb-3">⬡</div>
                <div className="font-bold text-sm mb-1">Book a Demo</div>
                <div className="text-white/40 text-xs">See our products live</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageCTA heading="Ready to Work With Us?" sub="Whether you need a custom solution or a ready-to-deploy product — let's start the conversation." />
    </main>
  );
}