"use client";

import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import PageCTA from "../components/PageCTA";
import { useState } from "react";

// ─── Event Data ───────────────────────────────────────────────────────────────

const UPCOMING_EVENTS = [
  {
    slug: "campus-management-live-demo-march-2026",
    title: "Campus Management System — Live Product Demo",
    type: "Webinar",
    date: "2026-03-18",
    time: "2:00 PM — 3:00 PM AEDT",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    summary:
      "See our Campus Management System in action — student records, timetabling, fee management, and parent portals. Live Q&A included.",
    spots: "Limited spots available",
    cta: "Register Now",
    ctaLink: "https://calendly.com/110solutions",
  },
  {
    slug: "hr-payroll-masterclass-april-2026",
    title: "HR & Payroll Automation Masterclass",
    type: "Workshop",
    date: "2026-04-08",
    time: "10:00 AM — 12:00 PM AEDT",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    summary:
      "A hands-on workshop covering payroll automation, tax compliance, leave management, and employee self-service portal setup.",
    spots: "Free — 50 spots",
    cta: "Reserve Your Spot",
    ctaLink: "https://calendly.com/110solutions",
  },
  {
    slug: "retail-pos-demo-april-2026",
    title: "Retail & POS System — Live Demo for Store Owners",
    type: "Webinar",
    date: "2026-04-22",
    time: "1:00 PM — 2:00 PM AEDT",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    summary:
      "Designed for retail business owners — see how our POS system handles inventory, barcode scanning, multi-store management, and sales analytics.",
    spots: "Limited spots available",
    cta: "Register Now",
    ctaLink: "https://calendly.com/110solutions",
  },
  {
    slug: "supply-chain-visibility-workshop-may-2026",
    title: "End-to-End Supply Chain Visibility Workshop",
    type: "Workshop",
    date: "2026-05-06",
    time: "10:00 AM — 12:30 PM AEDT",
    location: "110 Solutions HQ, Bella Vista + Online",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    summary:
      "Learn how to gain real-time visibility across procurement, inventory, logistics, and supplier management using our SCM platform.",
    spots: "In-person: 20 spots | Online: Unlimited",
    cta: "Register Now",
    ctaLink: "https://calendly.com/110solutions",
  },
];

const PAST_EVENTS = [
  {
    slug: "accounting-finance-demo-feb-2026",
    title: "Accounting & Finance Software — Product Walkthrough",
    type: "Webinar",
    date: "2026-02-20",
    time: "2:00 PM — 3:00 PM AEDT",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    summary:
      "A complete walkthrough of our Accounting & Finance platform — multi-entity support, automated bank feeds, tax compliance, and reporting.",
    attendees: "87 attendees",
    recording: true,
  },
  {
    slug: "visitor-management-launch-jan-2026",
    title: "Visitor Management System — Product Launch Event",
    type: "Product Launch",
    date: "2026-01-30",
    time: "11:00 AM — 12:30 PM AEDT",
    location: "110 Solutions HQ, Bella Vista",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    summary:
      "The official launch of our Visitor Management System — featuring live demos of kiosk check-in, badge printing, and host notifications.",
    attendees: "45 attendees",
    recording: true,
  },
  {
    slug: "digital-transformation-summit-dec-2025",
    title: "Digital Transformation Summit 2025",
    type: "Conference",
    date: "2025-12-05",
    time: "9:00 AM — 5:00 PM AEDT",
    location: "ICC Sydney",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    summary:
      "110 Solutions was a featured exhibitor and speaker at the Digital Transformation Summit, presenting our enterprise product suite to 500+ attendees.",
    attendees: "500+ attendees",
    recording: false,
  },
  {
    slug: "e-voting-security-webinar-nov-2025",
    title: "E-Voting Security: Building Trust in Digital Democracy",
    type: "Webinar",
    date: "2025-11-14",
    time: "2:00 PM — 3:30 PM AEDT",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80",
    summary:
      "A deep dive into the security architecture behind our E-Voting System — encryption, audit trails, voter authentication, and compliance.",
    attendees: "120 attendees",
    recording: true,
  },
  {
    slug: "attendance-tracking-workshop-oct-2025",
    title: "Smart Attendance Tracking for Modern Workplaces",
    type: "Workshop",
    date: "2025-10-22",
    time: "10:00 AM — 11:30 AM AEDT",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
    summary:
      "A practical workshop on implementing biometric, GPS, and QR-based attendance tracking for businesses with distributed teams.",
    attendees: "65 attendees",
    recording: true,
  },
];

const EVENT_TYPES_ALL = [
  "All",
  ...Array.from(
    new Set([
      ...UPCOMING_EVENTS.map((e) => e.type),
      ...PAST_EVENTS.map((e) => e.type),
    ])
  ),
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getTypeColor(type: string) {
  switch (type) {
    case "Webinar":
      return "bg-[#0e8c86] text-white";
    case "Workshop":
      return "bg-amber-500 text-white";
    case "Conference":
      return "bg-blue-600 text-white";
    case "Product Launch":
      return "bg-purple-600 text-white";
    default:
      return "bg-gray-500 text-white";
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [filterType, setFilterType] = useState("All");

  const displayedUpcoming =
    filterType === "All"
      ? UPCOMING_EVENTS
      : UPCOMING_EVENTS.filter((e) => e.type === filterType);

  const displayedPast =
    filterType === "All"
      ? PAST_EVENTS
      : PAST_EVENTS.filter((e) => e.type === filterType);

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
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#54c7c2]/[0.05] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0070de]/[0.04] blur-[100px] rounded-full" />
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
            <path d="M0 60L1440 0V60H0Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="max-w-[680px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
              <svg className="w-4 h-4 text-[#54c7c2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="text-[#54c7c2] text-[11px] font-semibold tracking-[0.12em] uppercase">
                Events
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight mb-5">
              Learn, Connect,{" "}
              <span className="text-[#54c7c2]">Stay Ahead.</span>
            </h1>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-[520px] mx-auto">
              Join our webinars, workshops, and product demos to see enterprise
              technology in action — and connect with the team behind it.
            </p>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { val: String(UPCOMING_EVENTS.length), label: "Upcoming Events" },
              { val: String(PAST_EVENTS.length) + "+", label: "Past Events" },
              { val: "Free", label: "Most Events" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-[3px] h-7 rounded-full bg-[#54c7c2]" />
                <div>
                  <div className="text-[#54c7c2] font-bold text-[14px] leading-tight">
                    {s.val}
                  </div>
                  <div className="text-white/30 text-[10px]">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TAB SWITCH + FILTER + EVENTS (White)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          {/* Tab toggle */}
          <ScrollReveal>
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-xl border border-gray-200 p-1 bg-gray-50">
                <button
                  onClick={() => { setActiveTab("upcoming"); setFilterType("All"); }}
                  className={`px-6 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-300 ${
                    activeTab === "upcoming"
                      ? "bg-[#0e8c86] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Upcoming Events ({UPCOMING_EVENTS.length})
                </button>
                <button
                  onClick={() => { setActiveTab("past"); setFilterType("All"); }}
                  className={`px-6 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-300 ${
                    activeTab === "past"
                      ? "bg-[#0e8c86] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Past Events ({PAST_EVENTS.length})
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Filter pills */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {EVENT_TYPES_ALL.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-medium border transition-all duration-300 ${
                    filterType === t
                      ? "bg-[#0e8c86] text-white border-[#0e8c86]"
                      : "bg-white text-gray-500 border-gray-200 hover:border-[#0e8c86]/30 hover:text-[#0e8c86]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Upcoming Events ── */}
          {activeTab === "upcoming" && (
            <div className="space-y-5">
              {displayedUpcoming.map((event, i) => (
                <ScrollReveal key={event.slug} delay={i * 70}>
                  <div className="rounded-xl border border-gray-100 bg-white overflow-hidden hover:border-[#0e8c86]/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300 group">
                    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0">
                      {/* Image */}
                      <div className="relative h-[200px] lg:h-full overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                          style={{ backgroundImage: `url(${event.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />

                        {/* Type badge */}
                        <div className="absolute top-3 left-3">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${getTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 lg:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-4 mb-3">
                            {/* Date */}
                            <div className="flex items-center gap-2 text-[#0e8c86]">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                              </svg>
                              <span className="text-[13px] font-semibold">
                                {formatDate(event.date)}
                              </span>
                            </div>
                            {/* Time */}
                            <div className="flex items-center gap-2 text-gray-400">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                              </svg>
                              <span className="text-[12px]">{event.time}</span>
                            </div>
                          </div>

                          <h3 className="text-gray-900 font-bold text-[18px] leading-snug mb-2 group-hover:text-[#0e8c86] transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                            {event.summary}
                          </p>

                          {/* Location + spots */}
                          <div className="flex flex-wrap gap-3 mb-5">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
                              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                              <span className="text-gray-500 text-[11px]">
                                {event.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e8c86]/[0.05] border border-[#0e8c86]/10">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0e8c86] animate-pulse" />
                              <span className="text-[#0e8c86] text-[11px] font-medium">
                                {event.spots}
                              </span>
                            </div>
                          </div>
                        </div>

                        <a
                          href={event.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0e8c86] text-white text-[13px] font-bold hover:bg-[#0b7a75] transition-colors w-fit"
                        >
                          {event.cta}
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {displayedUpcoming.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-[14px]">
                    No upcoming events match this filter. Try a different category.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ── Past Events ── */}
          {activeTab === "past" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayedPast.map((event, i) => (
                <ScrollReveal key={event.slug} delay={i * 70}>
                  <div className="rounded-xl border border-gray-100 bg-white overflow-hidden hover:border-[#0e8c86]/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300 h-full group flex flex-col">
                    {/* Image */}
                    <div className="relative h-[180px] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Overlay: PAST */}
                      <div className="absolute inset-0 bg-black/20" />

                      {/* Tags */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${getTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-black/50 text-white/80 text-[10px] font-bold backdrop-blur-sm">
                          Past Event
                        </span>
                      </div>

                      {/* Recording badge */}
                      {event.recording && (
                        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm">
                          <svg className="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="8" />
                          </svg>
                          <span className="text-white/80 text-[10px] font-medium">
                            Recording Available
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2 text-gray-400">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span className="text-[11px]">{formatDate(event.date)}</span>
                      </div>

                      <h3 className="text-gray-900 font-bold text-[15px] leading-snug mb-2 group-hover:text-[#0e8c86] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-500 text-[12.5px] leading-relaxed mb-4 flex-1">
                        {event.summary}
                      </p>

                      {/* Meta row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5 text-gray-400">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M23 21v-2a4 4 0 00-3-3.87" />
                              <path d="M16 3.13a4 4 0 010 7.75" />
                            </svg>
                            <span className="text-[11px]">{event.attendees}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span className="text-[11px]">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {displayedPast.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <p className="text-gray-400 text-[14px]">
                    No past events match this filter. Try a different category.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          NEWSLETTER / STAY UPDATED (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-[600px] mx-auto px-6 xl:px-8 text-center">
          <ScrollReveal>
            <LightEyebrow center>Stay Updated</LightEyebrow>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mt-3 mb-3">
              Never Miss an <span className="text-[#0e8c86]">Event</span>
            </h2>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
              Get notified about upcoming webinars, workshops, and product demos.
              No spam — just events worth attending.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-[13px] placeholder:text-gray-400 focus:outline-none focus:border-[#0e8c86] focus:ring-1 focus:ring-[#0e8c86]/20 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[#0e8c86] text-white text-[13px] font-bold hover:bg-[#0b7a75] transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-[11px] mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EVENT FORMAT GUIDE (White)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <LightEyebrow center>Event Formats</LightEyebrow>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mt-3">
                Something for <span className="text-[#0e8c86]">Everyone</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                type: "Webinars",
                desc: "30-60 minute online sessions with live demos and Q&A. Perfect for a quick deep-dive into a product or topic.",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                ),
                color: "bg-[#0e8c86]",
              },
              {
                type: "Workshops",
                desc: "Hands-on 2-3 hour sessions where you learn by doing. Practical skills you can apply to your business immediately.",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                ),
                color: "bg-amber-500",
              },
              {
                type: "Product Launches",
                desc: "Be the first to see new products and features. In-person and online, with exclusive early access.",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
                color: "bg-purple-600",
              },
              {
                type: "Conferences",
                desc: "Major industry events where we exhibit, speak, and connect. Meet the team and see our full product suite.",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                color: "bg-blue-600",
              },
            ].map((f, i) => (
              <ScrollReveal key={f.type} delay={i * 80}>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all h-full group text-center">
                  <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center text-white mx-auto mb-4`}>
                    {f.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-2">
                    {f.type}
                  </h3>
                  <p className="text-gray-500 text-[12.5px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Want Us to Present at Your Event?"
          sub="Our team speaks at conferences, workshops, and corporate events. Get in touch to discuss."
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