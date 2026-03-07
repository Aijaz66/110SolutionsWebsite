"use client";

import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import PageCTA from "../components/PageCTA";
import { useState } from "react";
import { CASE_STUDIES } from "./data";

// ─── Derived Data ─────────────────────────────────────────────────────────────

const ALL_INDUSTRIES = [
  "All",
  ...Array.from(new Set(CASE_STUDIES.map((c) => c.industry))),
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.industry === activeFilter);

  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white pt-32 pb-20 bg-[#060a0e]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(84,199,194,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#54c7c2]/[0.05] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0070de]/[0.04] blur-[100px] rounded-full" />
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="max-w-[680px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
              <svg
                className="w-4 h-4 text-[#54c7c2]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-[#54c7c2] text-[11px] font-semibold tracking-[0.12em] uppercase">
                Case Studies
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight mb-5">
              Real Clients.{" "}
              <span className="text-[#54c7c2]">Real Results.</span>
            </h1>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-[520px] mx-auto">
              See how businesses across industries have transformed their
              operations with our enterprise software and custom solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[700px] mx-auto">
            {[
              { end: 100, suffix: "+", label: "Projects Delivered" },
              { end: 99, suffix: "%", label: "Client Retention" },
              { end: 6, suffix: "+", label: "Industries Served" },
              { end: 60, suffix: "%", label: "Avg Efficiency Gain" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#54c7c2] flex-shrink-0" />
                <div>
                  <div className="text-[#54c7c2] font-bold text-[13px] leading-none">
                    <AnimatedCounter
                      end={s.end}
                      suffix={s.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="text-white/35 text-[10px] mt-0.5">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FILTER + CASE STUDY CARDS (White)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          {/* Filter pills */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {ALL_INDUSTRIES.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveFilter(ind)}
                  className={`px-5 py-2 rounded-full text-[13px] font-medium border transition-all duration-300 ${
                    activeFilter === ind
                      ? "bg-[#0e8c86] text-white border-[#0e8c86]"
                      : "bg-white text-gray-500 border-gray-200 hover:border-[#0e8c86]/30 hover:text-[#0e8c86]"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((cs, i) => (
              <ScrollReveal key={cs.slug} delay={i * 70}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="block h-full"
                >
                  <div className="rounded-xl border border-gray-100 bg-white overflow-hidden hover:border-[#0e8c86]/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300 h-full group flex flex-col">
                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${cs.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Tags */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-[#0e8c86] text-white text-[10px] font-bold">
                          {cs.industry}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-white/90 text-gray-600 text-[10px] font-bold">
                          {cs.service}
                        </span>
                      </div>

                      {/* Key stat */}
                      <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm">
                        <span className="text-[#54c7c2] font-extrabold text-[14px]">
                          {cs.results[0].val}
                        </span>
                        <span className="text-white/50 text-[10px] ml-1.5">
                          {cs.results[0].label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wide mb-2">
                        {cs.client}
                      </p>
                      <h3 className="text-gray-900 font-bold text-[16px] leading-snug mb-3 group-hover:text-[#0e8c86] transition-colors">
                        {cs.title}
                      </h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed mb-4 flex-1">
                        {cs.summary.substring(0, 160)}...
                      </p>

                      {/* Results preview */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {cs.results.slice(0, 2).map((r) => (
                          <div
                            key={r.label}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-100"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0e8c86]" />
                            <div>
                              <span className="text-[#0e8c86] font-bold text-[12px]">
                                {r.val}
                              </span>
                              <span className="text-gray-400 text-[10px] ml-1">
                                {r.label.length > 18
                                  ? r.label.substring(0, 18) + "…"
                                  : r.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-[#0e8c86] text-[13px] font-semibold group-hover:gap-3 transition-all">
                        Read Case Study
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-[14px]">
                No case studies found for this filter. Try selecting a different
                industry.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Have a Similar Challenge?"
          sub="Let's talk about how we can deliver the same results for your business."
        />
      </div>
    </main>
  );
}