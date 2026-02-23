"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

// ─── Slides Data ──────────────────────────────────────────────────────────────

const SLIDES = [
  {
    badge: "Enterprise Solutions",
    heading: (
      <>
        We Build Software{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54c7c2] to-[#6edbd5]">
          That Scales
        </span>{" "}
        Your Business
      </>
    ),
    description:
      "From custom enterprise solutions to ready-to-deploy products — we help SMBs, enterprises, and agencies transform ideas into powerful digital experiences.",
    primaryCTA: { label: "Get Started", href: "/contact" },
    secondaryCTA: { label: "View Case Studies", href: "/case-studies" },
    bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    badge: "Custom Development",
    heading: (
      <>
        Tailored Software{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54c7c2] to-[#6edbd5]">
          Engineered
        </span>{" "}
        For Your Needs
      </>
    ),
    description:
      "We design, develop, and deploy bespoke software solutions that align perfectly with your business logic, workflows, and growth ambitions.",
    primaryCTA: { label: "Explore Services", href: "/services" },
    secondaryCTA: { label: "Book a Demo", href: "/contact" },
    bg: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80",
  },
  {
    badge: "Ready-to-Deploy Products",
    heading: (
      <>
        Powerful Products{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54c7c2] to-[#6edbd5]">
          Ready to Launch
        </span>{" "}
        Today
      </>
    ),
    description:
      "HR Payroll, Campus Management, Attendance Tracking, E-Voting and more — battle-tested products built for modern enterprises.",
    primaryCTA: { label: "View Products", href: "/products" },
    secondaryCTA: { label: "Contact Sales", href: "/contact" },
    bg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
  },
  {
    badge: "Trusted Partner",
    heading: (
      <>
        Driving Digital{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54c7c2] to-[#6edbd5]">
          Transformation
        </span>{" "}
        Since Day One
      </>
    ),
    description:
      "With 100+ satisfied clients and an extensive tech stack, we deliver reliable, scalable, and secure solutions that stand the test of time.",
    primaryCTA: { label: "About Us", href: "/about" },
    secondaryCTA: { label: "Our Work", href: "/case-studies" },
    bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
  },
];

// ─── Stats Data ───────────────────────────────────────────────────────────────

const STATS = [
  { value: "100+", label: "Clients Served" },
  { value: "50+", label: "Products Delivered" },
  { value: "8+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const INTERVAL = 6000;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setAnimating(false), 50);
      }, 400);
    },
    [animating, current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
        setTimeout(() => setAnimating(false), 50);
      }, 400);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section className="relative text-white overflow-hidden">
      {/* ── Background Images (all layered, only active one is visible) ── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url(${s.bg})` }}
          />
        </div>
      ))}

      {/* ── Dark Overlay ── */}
      <div className="absolute inset-0 bg-black/70" />
      {/* ── Left-to-right gradient for text readability ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* ── Subtle grid overlay ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(84,199,194,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8 pt-16 pb-12 lg:pt-20 lg:pb-16 min-h-[520px] lg:min-h-[560px] flex flex-col justify-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54c7c2]/25 bg-[#54c7c2]/[0.08] mb-5 w-fit transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#54c7c2] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#54c7c2]" />
          </span>
          <span
            className={`text-[#54c7c2] text-[10px] font-semibold tracking-widest uppercase transition-all duration-300 ${
              animating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            {slide.badge}
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight max-w-2xl transition-all duration-500 ${
            mounted ? "translate-y-0" : "translate-y-4"
          } ${animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
        >
          {slide.heading}
        </h1>

        {/* Description */}
        <p
          className={`mt-4 text-sm sm:text-base text-white/55 max-w-lg leading-relaxed transition-all duration-500 delay-75 ${
            mounted ? "translate-y-0" : "translate-y-4"
          } ${animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
        >
          {slide.description}
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-7 flex flex-col sm:flex-row items-start gap-3 transition-all duration-500 delay-150 ${
            mounted ? "translate-y-0" : "translate-y-4"
          } ${animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
        >
          <Link
            href={slide.primaryCTA.href}
            className="group relative px-6 py-2.5 text-sm font-bold rounded-lg overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#54c7c2]" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity duration-300" />
            <span className="relative text-[#060a0e] tracking-wide flex items-center gap-2">
              {slide.primaryCTA.label}
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link
            href={slide.secondaryCTA.href}
            className="px-6 py-2.5 text-sm font-semibold rounded-lg border border-white/25 text-white/80 hover:border-[#54c7c2]/60 hover:text-[#54c7c2] transition-all duration-300"
          >
            {slide.secondaryCTA.label}
          </Link>
        </div>

        {/* Slide Dots */}
        <div className="mt-10 flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`relative rounded-full transition-all duration-400 ${
                i === current
                  ? "w-7 h-2 bg-[#54c7c2]"
                  : "w-2 h-2 bg-white/25 hover:bg-white/50"
              }`}
            >
              {i === current && (
                <span
                  className="absolute inset-0 rounded-full bg-[#6edbd5] origin-left animate-progress"
                  style={{ animationDuration: `${INTERVAL}ms` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="relative border-t border-white/[0.08] bg-black/50 backdrop-blur-sm">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center gap-3 ${
                  i < STATS.length - 1 ? "md:border-r md:border-white/[0.08]" : ""
                }`}
              >
                <p className="text-2xl font-bold text-[#54c7c2]">{stat.value}</p>
                <p className="text-[11px] text-white/45 uppercase tracking-wider leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom line ── */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
    </section>
  );
}