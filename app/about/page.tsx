"use client";

import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import PageCTA from "../components/PageCTA";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Trust Above All",
    desc: "Every client relationship is built on transparency, honest communication, and delivering exactly what we promise — on time, every time.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Engineering Excellence",
    desc: "We hold ourselves to the highest technical standard. Clean code, robust architecture, and proper documentation aren't extras — they're our baseline.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Client-First Thinking",
    desc: "We measure success by our clients' outcomes, not by our output. If a solution doesn't serve your goals, we'll tell you — and recommend a better path.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Continuous Improvement",
    desc: "Technology evolves constantly. We invest in our team's skills, tools, and processes to ensure what we build today is still relevant tomorrow.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Accountability",
    desc: "We own our work completely. When things go well, we celebrate together. When something needs fixing, we fix it — no excuses, no finger-pointing.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Long-Term Partnerships",
    desc: "We don't chase one-off projects. Our goal is to become your long-term technology partner — growing with you as your business scales.",
  },
];

const TIMELINE = [
  { year: "Founded", title: "110 Solutions is Born", desc: "Started with a vision to make enterprise-grade technology accessible to businesses of every size." },
  { year: "Year 1", title: "First Enterprise Clients", desc: "Secured foundational partnerships with Australian SMBs, delivering custom software and IT consulting." },
  { year: "Growth", title: "Product Suite Launched", desc: "Expanded from custom development into purpose-built products — HR, Attendance, Accounting, and more." },
  { year: "Scale", title: "8 Products, 7 Services", desc: "Built a comprehensive portfolio of enterprise products and professional services serving multiple industries." },
  { year: "Today", title: "100+ Projects Delivered", desc: "Trusted by businesses across Australia and internationally, with a 99% client retention rate." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Dark with centered content
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[90vh] flex items-center bg-[#060a0e]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(84,199,194,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#54c7c2]/[0.04] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0070de]/[0.04] blur-[100px] rounded-full" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="max-w-[720px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
              <svg className="w-4 h-4 text-[#54c7c2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              <span className="text-[#54c7c2] text-[11px] font-semibold tracking-[0.12em] uppercase">
                About 110 Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight mb-5">
              We Build Technology{" "}
              <span className="text-[#54c7c2]">That Businesses Rely On.</span>
            </h1>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-[560px] mx-auto mb-10">
              110 Solutions is an enterprise software and IT solutions company
              headquartered in Bella Vista, Australia. We combine deep technical
              expertise with genuine business understanding to deliver software
              that drives measurable outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://calendly.com/110solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 rounded-lg font-bold text-[13px] overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-[#54c7c2]" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity" />
                <span className="relative text-[#060a0e] tracking-wide flex items-center gap-2 justify-center">
                  Book a Consultation
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-lg font-semibold text-[13px] border border-white/20 text-white/60 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[800px] mx-auto">
            {[
              { end: 100, suffix: "+", label: "Projects Delivered" },
              { end: 8, suffix: "", label: "Enterprise Products" },
              { end: 7, suffix: "", label: "Core Services" },
              { end: 99, suffix: "%", label: "Client Retention" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm text-center"
              >
                <div className="text-3xl font-extrabold text-[#54c7c2] mb-1">
                  <AnimatedCounter end={s.end} suffix={s.suffix} duration={2000} />
                </div>
                <div className="text-white/35 text-[11px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OUR STORY — Zigzag (White)
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
                        "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div>
                <LightEyebrow>Our Story</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  Built by Engineers,{" "}
                  <span className="text-[#0e8c86]">Driven by Business</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
                  110 Solutions was born from a simple observation: enterprise-grade
                  software was only accessible to companies with massive IT budgets.
                  Ambitious businesses — SMBs, growing startups, and regional
                  enterprises — were left with generic tools that couldn&apos;t scale.
                </p>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
                  We set out to change that. Today, we deliver the same calibre of
                  software that global enterprises use — custom-built solutions and
                  purpose-built products — at a partnership approach and price point
                  that works for businesses at every stage of growth.
                </p>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Our team combines deep technical expertise with genuine business
                  understanding. We don&apos;t just build what you ask for — we help
                  you figure out exactly what you need.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MISSION & VISION — Side-by-side cards (Light gray)
      ═════════════════════��═════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[500px] mx-auto">
              <LightEyebrow center>Purpose & Direction</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                What Drives <span className="text-[#0e8c86]">Everything We Do</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ScrollReveal delay={0}>
              <div className="relative p-8 rounded-xl border border-gray-100 bg-white h-full group hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all overflow-hidden">
                <div className="absolute top-4 right-5 text-[52px] font-black text-gray-100 leading-none select-none group-hover:text-[#0e8c86]/[0.06] transition-colors">
                  01
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mb-5">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[18px] mb-3 group-hover:text-[#0e8c86] transition-colors">
                    Our Mission
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-3">
                    Making enterprise technology accessible to every business.
                  </p>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    We close the gap between big-enterprise capability and real-world
                    business needs — delivering reliable, scalable software at a
                    partnership approach that works for ambitious businesses at every
                    stage.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="relative p-8 rounded-xl border border-gray-100 bg-white h-full group hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all overflow-hidden">
                <div className="absolute top-4 right-5 text-[52px] font-black text-gray-100 leading-none select-none group-hover:text-[#0e8c86]/[0.06] transition-colors">
                  02
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mb-5">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[18px] mb-3 group-hover:text-[#0e8c86] transition-colors">
                    Our Approach
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-3">
                    Partners, not just vendors.
                  </p>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    We operate as an extension of your team — embedded in your goals,
                    proactive about your challenges, and invested in your outcomes
                    long after a project launches. That&apos;s why 99% of clients stay
                    beyond their first engagement.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TIMELINE — Vertical (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <LightEyebrow center>Our Journey</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                Key <span className="text-[#0e8c86]">Milestones</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0e8c86]/20 via-[#0e8c86]/15 to-[#0e8c86]/5 md:-translate-x-[1px]" />

            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <ScrollReveal key={t.year} delay={i * 80}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[#0e8c86] border-[3px] border-white shadow-sm md:-translate-x-1.5 -translate-x-1.5 mt-1.5 z-10" />

                    {/* Content */}
                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-28px)] ${i % 2 === 0 ? "md:pr-4 md:text-right" : "md:pl-4"}`}>
                      <div className={`p-5 rounded-xl border border-gray-100 bg-gray-50/40 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all group`}>
                        <span className="text-[10px] text-[#0e8c86] font-bold tracking-widest uppercase">
                          {t.year}
                        </span>
                        <h3 className="text-gray-900 font-bold text-[15px] mt-1 mb-1 group-hover:text-[#0e8c86] transition-colors">
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
          VALUES (Light gray — 3-column)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Our Values</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                What We <span className="text-[#0e8c86]">Stand For</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Our values aren&apos;t wall art — they&apos;re the principles that guide
                every decision, every line of code, and every client interaction.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 60}>
                <div className="relative p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group overflow-hidden">
                  <div className="absolute top-3 right-4 text-[48px] font-black text-gray-100 leading-none select-none group-hover:text-[#0e8c86]/[0.06] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mb-4 group-hover:bg-[#0e8c86]/15 transition-colors">
                      {v.icon}
                    </div>
                    <h3 className="text-gray-900 font-bold text-[15px] mb-2 group-hover:text-[#0e8c86] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS BAND (Dark Navy)
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden bg-[#091e2a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2535] via-[#091e2a] to-[#071a24]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#54c7c2]/[0.04] blur-[80px]" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8">
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
          WHY CHOOSE US (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <LightEyebrow>Why 110 Solutions</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  What Makes Us{" "}
                  <span className="text-[#0e8c86]">Different</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  There are plenty of software companies. Here&apos;s why businesses
                  choose — and stay — with us.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      title: "Products + Services Under One Roof",
                      desc: "We build custom software AND offer ready-to-deploy enterprise products — giving you the best of both worlds.",
                    },
                    {
                      title: "Australian-Based, Globally Capable",
                      desc: "Headquartered in Bella Vista, Sydney — with the expertise to serve businesses across Australia and internationally.",
                    },
                    {
                      title: "We Stay After Launch",
                      desc: "99% of our clients continue working with us beyond their first project. We're partners, not contractors.",
                    },
                    {
                      title: "Enterprise Quality, Accessible Pricing",
                      desc: "The same architecture and reliability that global enterprises demand — without the enterprise price tag.",
                    },
                  ].map((point) => (
                    <div
                      key={point.title}
                      className="p-4 rounded-xl border border-gray-100 bg-gray-50/40 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all group"
                    >
                      <h4 className="text-gray-900 text-[14px] font-bold mb-1 group-hover:text-[#0e8c86] transition-colors">
                        {point.title}
                      </h4>
                      <p className="text-gray-500 text-[12.5px] leading-relaxed">
                        {point.desc}
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
                        "url(https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/50 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-[15px]">Partners, not vendors.</p>
                  <p className="text-white/60 text-[12px]">
                    We&apos;re invested in your success — not just your project.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LOCATION (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div>
                <LightEyebrow>Where We Are</LightEyebrow>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mt-3 mb-4">
                  Based in Bella Vista,{" "}
                  <span className="text-[#0e8c86]">Serving Globally.</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-5">
                  Our team is headquartered in Bella Vista, Sydney — with a client
                  base spanning businesses across Australia, New Zealand, and
                  internationally.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-[13px] text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#0e8c86]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    Unit 4.15, 29-31 Lexington Drive, Bella Vista, Australia
                  </div>
                  <div className="flex items-center gap-3 text-[13px] text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#0e8c86]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <a
                      href="mailto:info@110solutions.com.au"
                      className="hover:text-[#0e8c86] transition-colors"
                    >
                      info@110solutions.com.au
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="/contact"
                  className="p-6 rounded-xl border border-gray-200 bg-white text-center hover:border-[#0e8c86]/30 hover:shadow-lg hover:shadow-black/[0.03] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mx-auto mb-3 group-hover:bg-[#0e8c86]/15 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <div className="text-gray-900 font-bold text-[14px] mb-1 group-hover:text-[#0e8c86] transition-colors">
                    Get in Touch
                  </div>
                  <div className="text-gray-400 text-[12px]">Send us a message</div>
                </Link>
                <a
                  href="https://calendly.com/110solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-xl border border-gray-200 bg-white text-center hover:border-[#0e8c86]/30 hover:shadow-lg hover:shadow-black/[0.03] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mx-auto mb-3 group-hover:bg-[#0e8c86]/15 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className="text-gray-900 font-bold text-[14px] mb-1 group-hover:text-[#0e8c86] transition-colors">
                    Book a Demo
                  </div>
                  <div className="text-gray-400 text-[12px]">See our products live</div>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Ready to Work With Us?"
          sub="Whether you need a custom solution or a ready-to-deploy product — let's start the conversation."
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