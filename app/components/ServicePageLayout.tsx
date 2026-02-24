"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import PageCTA from "./PageCTA";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface ServiceStat {
  end: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServicePageProps {
  eyebrow: string;
  heading: string;
  headingTeal: string;
  intro: string;
  heroImage: string;
  ctaLabel?: string;
  ctaHref?: string;
  // Overview
  overviewHeading: string;
  overviewHeadingTeal: string;
  overviewDesc: string;
  overviewImage: string;
  overviewPoints: string[];
  // Features
  features: ServiceFeature[];
  // Stats
  stats: ServiceStat[];
  // Process
  processSteps: ProcessStep[];
  processImage: string;
  // Why us
  whyHeading: string;
  whyHeadingTeal: string;
  whyPoints: {
    icon: React.ReactNode;
    title: string;
    desc: string;
  }[];
  whyImage: string;
  // FAQ
  faqs: FAQ[];
  // Bottom CTA
  ctaHeading: string;
  ctaSub: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicePageLayout(props: ServicePageProps) {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[100vh] flex items-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${props.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/65 via-[#000000]/80 to-[#000000]/95" />
          <div className="absolute inset-0 bg-[#091e2a]/30" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/25 text-[10px] tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#54c7c2] animate-pulse" />
              <span className="text-[#54c7c2] text-[10px] font-semibold tracking-[0.15em] uppercase">
                {props.eyebrow}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.08] tracking-tight mb-5">
              {props.heading}{" "}
              <span className="text-[#54c7c2]">{props.headingTeal}</span>
            </h1>
            <p className="text-white/45 text-[15px] leading-relaxed max-w-[520px] mb-8">
              {props.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={props.ctaHref || "/contact"}
                className="group relative px-6 py-2.5 rounded-lg font-bold text-[13px] overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-[#54c7c2]" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity" />
                <span className="relative text-[#060a0e] tracking-wide flex items-center gap-2">
                  {props.ctaLabel || "Get Started"}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="#overview"
                className="px-6 py-2.5 rounded-lg font-semibold text-[13px] border border-white/25 text-white/75 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all"
              >
                Learn More ↓
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OVERVIEW (Light — image + content zigzag)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white" id="overview">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${props.overviewImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right" delay={100}>
              <div>
                <LightEyebrow>Overview</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  {props.overviewHeading}{" "}
                  <span className="text-[#0e8c86]">{props.overviewHeadingTeal}</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  {props.overviewDesc}
                </p>

                <div className="space-y-3">
                  {props.overviewPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-[13.5px] text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-[#0e8c86]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#0e8c86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>What&apos;s Included</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Comprehensive <span className="text-[#0e8c86]">Capabilities</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Every feature is purpose-built to deliver measurable business value.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {props.features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group">
                  <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mb-4 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-2 group-hover:text-[#0e8c86] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════��══
          STATS (Dark Navy)
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
            {props.stats.map((stat, i) => (
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
          PROCESS (Light — timeline + side image)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            <div>
              <ScrollReveal>
                <LightEyebrow>Our Process</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                  How It <span className="text-[#0e8c86]">Works</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-10 max-w-[480px]">
                  A transparent, structured approach that delivers results at every stage.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                {props.processSteps.map((p, i) => (
                  <ScrollReveal key={p.step} delay={i * 80}>
                    <div className="flex gap-5 group">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#0e8c86] flex items-center justify-center">
                          <span className="text-white text-[12px] font-extrabold">{p.step}</span>
                        </div>
                        {i < props.processSteps.length - 1 && (
                          <div className="w-[2px] h-full min-h-[40px] bg-[#0e8c86]/15 mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h3 className="text-gray-900 font-bold text-[15px] mb-1.5">{p.title}</h3>
                        <p className="text-gray-500 text-[13px] leading-relaxed">{p.desc}</p>
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
                      style={{ backgroundImage: `url(${props.processImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/70 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY US (Light gray — image + stacked benefits)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="hidden lg:block relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/5]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${props.whyImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e8c86]/60 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <LightEyebrow>Why 110 Solutions</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-10">
                  {props.whyHeading}{" "}
                  <span className="text-[#0e8c86]">{props.whyHeadingTeal}</span>
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                {props.whyPoints.map((w, i) => (
                  <ScrollReveal key={w.title} delay={i * 100}>
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0 group-hover:bg-[#0e8c86]/15 transition-colors">
                        {w.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-[15px] mb-1">{w.title}</h3>
                        <p className="text-gray-500 text-[13px] leading-relaxed">{w.desc}</p>
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
          FAQ (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <LightEyebrow center>FAQ</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                Frequently Asked <span className="text-[#0e8c86]">Questions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {props.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <FAQItem question={faq.q} answer={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA heading={props.ctaHeading} sub={props.ctaSub} />
      </div>
    </main>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-xl border transition-all duration-300 ${open ? "border-[#0e8c86]/20 bg-[#0e8c86]/[0.02]" : "border-gray-100 bg-gray-50/40 hover:border-gray-200"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className={`font-semibold text-[14px] pr-4 transition-colors ${open ? "text-[#0e8c86]" : "text-gray-900"}`}>
          {question}
        </span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-[#0e8c86] rotate-180" : "bg-gray-100"}`}>
          <svg className={`w-3.5 h-3.5 ${open ? "text-white" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-4 text-gray-500 text-[13px] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

// ─── Eyebrow ──────────────────────────────────────────────────────────────────

function LightEyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
      <div className="w-5 h-[2px] bg-[#0e8c86]" />
      <span className="text-[#0e8c86] text-[10px] font-bold tracking-[0.2em] uppercase">{children}</span>
    </div>
  );
}