"use client";

import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import PageCTA from "../components/PageCTA";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "The Beginning",
    title: "A Problem Worth Solving",
    desc: "We saw a gap in the market: enterprise-grade software was only accessible to companies with massive IT budgets. Small and mid-sized businesses were stuck with generic tools that couldn't scale. We set out to change that.",
    side: "left" as const,
  },
  {
    year: "First Clients",
    title: "Earning Trust, One Project at a Time",
    desc: "Our first clients took a chance on a young company with big ambitions. We delivered custom software solutions that exceeded expectations — and those clients are still with us today. Word spread.",
    side: "right" as const,
  },
  {
    year: "Product Vision",
    title: "From Custom Builds to Products",
    desc: "After building similar solutions for multiple clients, we spotted patterns. We began developing our own suite of enterprise products — purpose-built, configurable, and deployable in days instead of months.",
    side: "left" as const,
  },
  {
    year: "Growth Phase",
    title: "8 Products, 7 Services",
    desc: "Our portfolio expanded rapidly. Attendance management, HR & payroll, campus systems, retail POS, supply chain, accounting, e-voting, and visitor management — each product born from real client needs.",
    side: "right" as const,
  },
  {
    year: "Today",
    title: "100+ Projects & Growing",
    desc: "Today, we're a team of engineers, designers, and strategists trusted by businesses across Australia and internationally. With a 99% client retention rate, we've proven that doing things right creates partnerships that last.",
    side: "left" as const,
  },
  {
    year: "Tomorrow",
    title: "Building What's Next",
    desc: "We're investing in AI-assisted tooling, expanding our product suite, and deepening our partnerships. Our mission hasn't changed: making enterprise technology accessible to every ambitious business.",
    side: "right" as const,
  },
];

const FOUNDING_PRINCIPLES = [
  {
    title: "Enterprise Quality for Everyone",
    desc: "The same architecture, security, and reliability that Fortune 500 companies demand — accessible to businesses of every size.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Partners, Not Vendors",
    desc: "We don't do transactional relationships. Every client is a long-term partnership — we're invested in your success, not just your project.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Build It Right the First Time",
    desc: "We never cut corners. Clean code, robust architecture, and thorough testing aren't optional extras — they're how we work.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Solve Real Problems",
    desc: "We don't build technology for technology's sake. Every product and service we offer exists because businesses genuinely needed it.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const CULTURE_POINTS = [
  {
    title: "Technical Depth",
    desc: "Our engineers don't just write code — they understand the business problems behind it. Every team member brings both technical and strategic thinking.",
  },
  {
    title: "Honest Communication",
    desc: "We tell clients what they need to hear, not what they want to hear. If there's a better path, a risk, or a smarter approach, we'll say so.",
  },
  {
    title: "Ownership Mentality",
    desc: "Every team member owns their work completely. We don't pass the buck, make excuses, or wait to be told. We take initiative and deliver.",
  },
  {
    title: "Continuous Learning",
    desc: "Technology moves fast. Our team invests in staying ahead — new frameworks, methodologies, and best practices are part of our daily culture.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OurStoryPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Cinematic dark with centered content
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[85vh] flex items-center bg-[#060a0e]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(84,199,194,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.4) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#54c7c2]/[0.04] blur-[160px] rounded-full" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="max-w-[720px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
              <svg className="w-4 h-4 text-[#54c7c2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
              <span className="text-[#54c7c2] text-[11px] font-semibold tracking-[0.12em] uppercase">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight mb-5">
              From a Simple Idea to a{" "}
              <span className="text-[#54c7c2]">Trusted Technology Partner.</span>
            </h1>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-[560px] mx-auto mb-10">
              Every company has an origin story. Ours started with a belief that
              enterprise-grade technology shouldn&apos;t be reserved for companies
              with seven-figure IT budgets.
            </p>

            {/* Origin quote */}
            <div className="relative max-w-[500px] mx-auto px-8 py-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <svg className="w-8 h-8 text-[#54c7c2]/20 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white/50 text-[14px] italic leading-relaxed">
                &ldquo;We didn&apos;t start 110 Solutions to build software. We started it
                to solve a problem — that too many businesses were being left behind
                by technology that should be working for them.&rdquo;
              </p>
              <p className="text-[#54c7c2] text-[12px] font-semibold mt-3">
                — Founding Team, 110 Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROBLEM WE SAW (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div>
                <LightEyebrow>Where It Started</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  The Problem{" "}
                  <span className="text-[#0e8c86]">We Set Out to Solve</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
                  Enterprise software used to be the exclusive domain of companies
                  with massive IT departments and seven-figure budgets. Small and
                  mid-sized businesses — the backbone of the economy — were left
                  with two options: expensive custom builds they couldn&apos;t afford, or
                  generic off-the-shelf tools that didn&apos;t fit.
                </p>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
                  We saw talented business owners manually tracking attendance in
                  spreadsheets, processing payroll by hand, running schools on paper
                  forms, and managing supply chains through email. Not because better
                  solutions didn&apos;t exist — but because they were priced out of reach.
                </p>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  That&apos;s the gap 110 Solutions was built to close.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOUNDING PRINCIPLES (Light gray — 4 cards)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Founding Principles</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                The Beliefs We{" "}
                <span className="text-[#0e8c86]">Built On</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                These aren&apos;t corporate slogans. They&apos;re the principles we established
                on day one — and they still guide every decision we make.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FOUNDING_PRINCIPLES.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70}>
                <div className="relative p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group overflow-hidden">
                  <div className="absolute top-3 right-4 text-[48px] font-black text-gray-100 leading-none select-none group-hover:text-[#0e8c86]/[0.06] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex gap-4 items-start relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0 group-hover:bg-[#0e8c86]/15 transition-colors">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-[15px] mb-1.5 group-hover:text-[#0e8c86] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TIMELINE (White — vertical alternating)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <LightEyebrow center>Our Journey</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                The Chapters{" "}
                <span className="text-[#0e8c86]">So Far</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0e8c86]/25 via-[#0e8c86]/15 to-[#0e8c86]/5 md:-translate-x-[1px]" />

            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <ScrollReveal key={t.year} delay={i * 80}>
                  <div
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      t.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#0e8c86] border-[3px] border-white shadow-md md:-translate-x-2 -translate-x-2 mt-1 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[calc(50%-32px)] ${
                        t.side === "left" ? "md:pr-6 md:text-right" : "md:pl-6"
                      }`}
                    >
                      <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/40 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all group">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#0e8c86]/10 text-[#0e8c86] text-[10px] font-bold tracking-widest uppercase mb-2">
                          {t.year}
                        </span>
                        <h3 className="text-gray-900 font-bold text-[16px] mb-2 group-hover:text-[#0e8c86] transition-colors">
                          {t.title}
                        </h3>
                        <p className="text-gray-500 text-[13px] leading-relaxed">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#54c7c2]/[0.04] blur-[80px]" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-[#54c7c2] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                Where We Are Today
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                The Numbers Speak
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { end: 100, suffix: "+", label: "Projects Delivered" },
              { end: 99, suffix: "%", label: "Client Retention" },
              { end: 8, suffix: "", label: "Enterprise Products" },
              { end: 7, suffix: "", label: "Core Services" },
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
          OUR CULTURE (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <LightEyebrow>How We Work</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  The Culture Behind{" "}
                  <span className="text-[#0e8c86]">the Code</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Our work is only as good as the culture that produces it. Here&apos;s
                  what defines how we operate as a team.
                </p>

                <div className="space-y-3">
                  {CULTURE_POINTS.map((c) => (
                    <div
                      key={c.title}
                      className="p-4 rounded-xl border border-gray-100 bg-gray-50/40 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all group"
                    >
                      <h4 className="text-gray-900 text-[14px] font-bold mb-1 group-hover:text-[#0e8c86] transition-colors">
                        {c.title}
                      </h4>
                      <p className="text-gray-500 text-[12.5px] leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/50 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-[15px]">Built by people who care.</p>
                  <p className="text-white/60 text-[12px]">
                    A team that takes ownership — of the code and the outcome.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LOOKING AHEAD (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-[800px] mx-auto px-6 xl:px-8 text-center">
          <ScrollReveal>
            <LightEyebrow center>What&apos;s Next</LightEyebrow>
            <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-5">
              The Story <span className="text-[#0e8c86]">Isn&apos;t Over</span>
            </h2>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
              We&apos;re still early in our journey. Every new client, every product
              improvement, and every challenge we solve adds a new chapter.
            </p>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-8">
              If you&apos;re building something ambitious and need technology that can
              keep up — we&apos;d love to make your success part of our story.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://calendly.com/110solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 rounded-lg font-bold text-[13px] overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-[#0e8c86]" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#12a89f] to-[#0e8c86] transition-opacity" />
                <span className="relative text-white tracking-wide flex items-center gap-2 justify-center">
                  Start a Conversation
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <Link
                href="/case-studies"
                className="px-6 py-2.5 rounded-lg font-semibold text-[13px] border border-gray-300 text-gray-600 hover:border-[#0e8c86]/50 hover:text-[#0e8c86] transition-all"
              >
                See Our Case Studies →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Ready to Write the Next Chapter Together?"
          sub="Let's talk about how we can help your business grow with the right technology."
        />
      </div>
    </main>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function LightEyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
      <div className="w-5 h-[2px] bg-[#0e8c86]" />
      <span className="text-[#0e8c86] text-[10px] font-bold tracking-[0.2em] uppercase">{children}</span>
    </div>
  );
}