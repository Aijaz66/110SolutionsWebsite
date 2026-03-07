import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "../../components/ScrollReveal";
import PageCTA from "../../components/PageCTA";
import {
  UPCOMING_EVENTS,
  PAST_EVENTS,
  ALL_EVENTS,
  formatDate,
  getTypeColor,
} from "../data";

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return ALL_EVENTS.map((e) => ({ slug: e.slug }));
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = ALL_EVENTS.find((e) => e.slug === slug);

  if (!event) return { title: "Event Not Found — 110 Solutions" };

  return {
    title: `${event.title} — Events | 110 Solutions`,
    description: event.summary,
    keywords: `${event.type}, events, 110 Solutions, ${event.title}`,
    openGraph: {
      title: event.title,
      description: event.summary,
      type: "article",
      images: [event.image],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const upcomingEvent = UPCOMING_EVENTS.find((e) => e.slug === slug);
  const pastEvent = PAST_EVENTS.find((e) => e.slug === slug);
  const event = upcomingEvent || pastEvent;

  if (!event) notFound();

  const isUpcoming = !!upcomingEvent;
  const otherEvents = ALL_EVENTS.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <main className="overflow-x-hidden">
      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — Hero (Dark with background image)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${event.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a0e] via-[#060a0e]/80 to-[#060a0e]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a0e]/60 to-transparent" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(84,199,194,0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 pb-16 pt-40 w-full">
          {/* Breadcrumb */}
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-[12px] text-white/35 mb-8">
              <Link
                href="/"
                className="hover:text-[#54c7c2] transition-colors"
              >
                Home
              </Link>
              <ChevronIcon />
              <Link
                href="/events"
                className="hover:text-[#54c7c2] transition-colors"
              >
                Events
              </Link>
              <ChevronIcon />
              <span className="text-white/50 line-clamp-1 max-w-[250px]">
                {event.title}
              </span>
            </nav>
          </ScrollReveal>

          {/* Badges */}
          <ScrollReveal delay={50}>
            <div className="flex flex-wrap gap-2 mb-5">
              <span
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.05em] uppercase ${getTypeColor(event.type)}`}
              >
                {event.type}
              </span>
              {isUpcoming ? (
                <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold tracking-[0.05em] uppercase border border-emerald-500/20">
                  Upcoming
                </span>
              ) : (
                <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/60 text-[10px] font-bold tracking-[0.05em] uppercase border border-white/10">
                  Past Event
                </span>
              )}
            </div>
          </ScrollReveal>

          {/* Title */}
          <ScrollReveal delay={100}>
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.08] tracking-tight text-white mb-6 max-w-[800px]">
              {event.title}
            </h1>
          </ScrollReveal>

          {/* Summary */}
          <ScrollReveal delay={150}>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-[640px] mb-8">
              {event.summary}
            </p>
          </ScrollReveal>

          {/* Event meta bar */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-4">
              <MetaPill
                icon={
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                }
                text={formatDate(event.date)}
              />
              <MetaPill
                icon={
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                text={event.time}
              />
              <MetaPill
                icon={
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                text={event.location}
              />
              {!isUpcoming && pastEvent && (
                <MetaPill
                  icon={
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  }
                  text={pastEvent.attendees}
                />
              )}
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — Content + Sidebar
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {/* ── Main Content ── */}
            <div>
              {/* About This Event */}
              <ScrollReveal>
                <div className="mb-12">
                  <SectionHeading>About This Event</SectionHeading>
                  <div className="space-y-4">
                    {event.description.map((p, i) => (
                      <p
                        key={i}
                        className="text-gray-600 text-[15px] leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* What You'll Learn / Highlights */}
              <ScrollReveal delay={50}>
                <div className="mb-12">
                  <SectionHeading>
                    {isUpcoming ? "What You'll Learn" : "Key Highlights"}
                  </SectionHeading>
                  <div className="space-y-3">
                    {event.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-3 p-4 rounded-xl bg-[#f7f8fa] border border-gray-100"
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#0e8c86]/10 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 text-[#0e8c86]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-[14px] leading-relaxed pt-1">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Agenda (upcoming only) */}
              {isUpcoming && upcomingEvent?.agenda && (
                <ScrollReveal delay={100}>
                  <div className="mb-12">
                    <SectionHeading>Agenda</SectionHeading>
                    <div className="space-y-0">
                      {upcomingEvent.agenda.map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-4 py-4 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-[#0e8c86] text-[13px] font-bold w-[90px] flex-shrink-0 pt-0.5">
                            {item.time}
                          </span>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#0e8c86]/30 flex-shrink-0" />
                            <span className="text-gray-700 text-[14px] font-medium">
                              {item.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Recording badge (past only) */}
              {!isUpcoming && pastEvent?.recording && (
                <ScrollReveal delay={100}>
                  <div className="p-6 rounded-2xl bg-[#0e8c86]/[0.04] border border-[#0e8c86]/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0e8c86]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[#0e8c86]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 text-[15px] font-bold">
                        Recording Available
                      </p>
                      <p className="text-gray-500 text-[13px]">
                        This event has been recorded. Contact us to request
                        access to the recording.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div>
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Registration / Info Card */}
                <ScrollReveal direction="right">
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-black/[0.04]">
                    <h3 className="text-gray-900 font-bold text-[18px] mb-5">
                      {isUpcoming ? "Register for This Event" : "Event Summary"}
                    </h3>

                    <div className="space-y-4 mb-6">
                      <SidebarRow
                        label="Date"
                        value={formatDate(event.date)}
                      />
                      <SidebarRow label="Time" value={event.time} />
                      <SidebarRow label="Location" value={event.location} />
                      <SidebarRow label="Type" value={event.type} />
                      {isUpcoming && upcomingEvent && (
                        <SidebarRow label="Availability" value={upcomingEvent.spots} />
                      )}
                      {!isUpcoming && pastEvent && (
                        <SidebarRow
                          label="Attendees"
                          value={pastEvent.attendees}
                        />
                      )}
                    </div>

                    {isUpcoming && upcomingEvent && (
                      <a
                        href="https://calendly.com/110solutions-info/30min?back=1&month=2026-03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center px-6 py-3.5 rounded-xl bg-[#0e8c86] text-white text-[14px] font-bold hover:bg-[#0b7a75] transition-colors"
                      >
                        {upcomingEvent.cta}
                      </a>
                    )}

                    {!isUpcoming && pastEvent?.recording && (
                      <Link
                        href="/contact"
                        className="block w-full text-center px-6 py-3.5 rounded-xl bg-[#0e8c86] text-white text-[14px] font-bold hover:bg-[#0b7a75] transition-colors"
                      >
                        Request Recording
                      </Link>
                    )}
                  </div>
                </ScrollReveal>

                {/* Share */}
                <ScrollReveal direction="right" delay={100}>
                  <div className="rounded-2xl border border-gray-100 bg-white p-6">
                    <h4 className="text-gray-900 font-bold text-[14px] mb-4">
                      Share This Event
                    </h4>
                    <div className="flex gap-2">
                      {[
                        {
                          label: "LinkedIn",
                          icon: (
                            <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          ),
                        },
                        {
                          label: "Twitter",
                          icon: (
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          ),
                        },
                        {
                          label: "Facebook",
                          icon: (
                            <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                          ),
                        },
                      ].map((s) => (
                        <button
                          key={s.label}
                          aria-label={`Share on ${s.label}`}
                          className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0e8c86] hover:bg-[#0e8c86]/[0.06] hover:border-[#0e8c86]/20 transition-all"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                            fill="currentColor"
                          >
                            {s.icon}
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Back to events */}
                <Link
                  href="/events"
                  className="group inline-flex items-center gap-2 text-[13px] font-semibold text-gray-500 hover:text-[#0e8c86] transition-colors"
                >
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  Back to All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══���════════════════════════════════════════════════════════════════
          SECTION 3 — More Events
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f8fa] py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px] bg-[#0e8c86]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e8c86]">
                More Events
              </span>
            </div>
            <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight mb-12">
              You Might Also Be Interested In
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherEvents.map((other, i) => (
              <ScrollReveal key={other.slug} delay={i * 80}>
                <Link
                  href={`/events/${other.slug}`}
                  className="block h-full"
                >
                  <div className="rounded-xl border border-gray-100 bg-white overflow-hidden hover:border-[#0e8c86]/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300 h-full group flex flex-col">
                    <div className="relative h-[180px] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${other.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${getTypeColor(other.type)}`}
                        >
                          {other.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2 text-gray-400">
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span className="text-[11px]">
                          {formatDate(other.date)}
                        </span>
                      </div>
                      <h3 className="text-gray-900 font-bold text-[15px] leading-snug mb-2 group-hover:text-[#0e8c86] transition-colors">
                        {other.title}
                      </h3>
                      <p className="text-gray-500 text-[12.5px] leading-relaxed mb-4 flex-1 line-clamp-2">
                        {other.summary}
                      </p>
                      <div className="flex items-center gap-1.5 text-[#0e8c86] text-[12px] font-semibold group-hover:gap-2.5 transition-all">
                        View Details
                        <svg
                          className="w-3 h-3"
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
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — Bottom CTA
      ════════════════════════════════════════════════════════════════════ */}
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

function ChevronIcon() {
  return (
    <svg
      className="w-3 h-3 text-white/20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function MetaPill({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
      <span className="text-[#54c7c2]">{icon}</span>
      <span className="text-white/70 text-[13px] font-medium">{text}</span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-5 h-[2px] bg-[#0e8c86]" />
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
          {children}
        </h2>
      </div>
    </div>
  );
}

function SidebarRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-start gap-4 py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-gray-400 text-[13px] flex-shrink-0">{label}</span>
      <span className="text-gray-900 text-[13px] font-medium text-right">
        {value}
      </span>
    </div>
  );
}