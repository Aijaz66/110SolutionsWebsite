import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "../../components/ScrollReveal";
import PageCTA from "../../components/PageCTA";
import { CASE_STUDIES } from "../data";

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);

  if (!cs) return { title: "Case Study Not Found — 110 Solutions" };

  return {
    title: `${cs.title} — Case Study | 110 Solutions`,
    description: cs.summary,
    keywords: `${cs.industry}, ${cs.service}, case study, 110 Solutions, ${cs.client}`,
    openGraph: {
      title: cs.title,
      description: cs.summary,
      type: "article",
      images: [cs.heroImage],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);

  if (!cs) notFound();

  const otherStudies = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <main className="overflow-x-hidden">
      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — Hero (Dark with background image)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${cs.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a0e] via-[#060a0e]/80 to-[#060a0e]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a0e]/60 to-transparent" />
        </div>

        {/* Decorative */}
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
              <Link href="/" className="hover:text-[#54c7c2] transition-colors">Home</Link>
              <svg className="w-3 h-3 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <Link href="/case-studies" className="hover:text-[#54c7c2] transition-colors">Case Studies</Link>
              <svg className="w-3 h-3 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-white/50 line-clamp-1 max-w-[250px]">{cs.client}</span>
            </nav>
          </ScrollReveal>

          {/* Badges */}
          <ScrollReveal delay={50}>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1.5 rounded-full bg-[#54c7c2] text-[#060a0e] text-[10px] font-bold tracking-[0.05em] uppercase">
                {cs.industry}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-[10px] font-bold tracking-[0.05em] uppercase border border-white/10">
                {cs.service}
              </span>
            </div>
          </ScrollReveal>

          {/* Client */}
          <ScrollReveal delay={75}>
            <p className="text-[#54c7c2] text-[12px] font-bold tracking-[0.15em] uppercase mb-3">
              {cs.client}
            </p>
          </ScrollReveal>

          {/* Title */}
          <ScrollReveal delay={100}>
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.08] tracking-tight text-white mb-6 max-w-[800px]">
              {cs.title}
            </h1>
          </ScrollReveal>

          {/* Summary */}
          <ScrollReveal delay={150}>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-[640px] mb-8">
              {cs.summary}
            </p>
          </ScrollReveal>

          {/* Key stat */}
          <ScrollReveal delay={200}>
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
              <span className="text-[#54c7c2] text-3xl md:text-4xl font-extrabold">
                {cs.keyStat.val}
              </span>
              <div className="w-[1px] h-8 bg-white/10" />
              <span className="text-white/60 text-[14px] font-medium">
                {cs.keyStat.label}
              </span>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — Key Results
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-5 h-[2px] bg-[#0e8c86]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e8c86]">
                Key Results
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {cs.results.map((r, i) => (
              <ScrollReveal key={r.label} delay={i * 80}>
                <div className="text-center p-6 md:p-8 rounded-2xl border border-gray-100 bg-[#f7f8fa]/50 hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-[#0e8c86]/[0.04] transition-all duration-300">
                  <div className="text-[#0e8c86] text-3xl md:text-4xl font-extrabold mb-2">
                    {r.val}
                  </div>
                  <div className="text-gray-500 text-[13px] font-medium">
                    {r.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — The Challenge
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f8fa] py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-[2px] bg-[#0e8c86]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e8c86]">
                    The Challenge
                  </span>
                </div>
                <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
                  What They Were <span className="text-[#0e8c86]">Facing</span>
                </h2>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Before working with 110 Solutions, {cs.client} was dealing with
                  significant operational challenges that were limiting growth and
                  efficiency.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {cs.challenge.map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                      <span className="text-red-400 text-[13px] font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-gray-600 text-[14px] leading-relaxed pt-1">
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — Our Solution
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
            <div className="space-y-4 order-2 lg:order-1">
              {cs.solution.map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex gap-4 p-5 rounded-xl bg-[#f7f8fa] border border-gray-100 hover:border-[#0e8c86]/20 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0e8c86]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0e8c86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-[14px] leading-relaxed pt-1">
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="right">
              <div className="lg:sticky lg:top-28 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-[2px] bg-[#0e8c86]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e8c86]">
                    Our Solution
                  </span>
                </div>
                <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
                  How We <span className="text-[#0e8c86]">Solved It</span>
                </h2>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Our team designed and implemented a comprehensive solution tailored
                  to {cs.client}&apos;s specific needs, workflows, and growth
                  objectives.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5 — Tech Stack
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f8fa] py-14 border-y border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-5 h-[2px] bg-[#0e8c86]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e8c86]">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cs.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-[13px] font-medium hover:border-[#0e8c86]/30 hover:text-[#0e8c86] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6 — Testimonial (if available)
      ════════════════════════════════════════════════════════════════════ */}
      {cs.testimonial && (
        <section className="relative bg-[#060a0e] py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#54c7c2]/[0.05] blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(84,199,194,0.4) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[800px] mx-auto px-6 xl:px-8 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#54c7c2]/10 mb-8">
                <svg className="w-7 h-7 text-[#54c7c2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <blockquote className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-8 italic">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#54c7c2]/10 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-[#54c7c2]">
                    {cs.testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-white/80 text-[14px] font-semibold">
                    {cs.testimonial.name}
                  </p>
                  <p className="text-white/35 text-[12px]">
                    {cs.testimonial.org || cs.testimonial.role || cs.client}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 7 — More Case Studies
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px] bg-[#0e8c86]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e8c86]">
                More Success Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight mb-12">
              Explore More Case Studies
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherStudies.map((other, i) => (
              <ScrollReveal key={other.slug} delay={i * 80}>
                <Link href={`/case-studies/${other.slug}`} className="block h-full">
                  <div className="rounded-xl border border-gray-100 bg-white overflow-hidden hover:border-[#0e8c86]/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300 h-full group flex flex-col">
                    <div className="relative h-[200px] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${other.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-[#0e8c86] text-white text-[10px] font-bold">
                          {other.industry}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm">
                        <span className="text-[#54c7c2] font-extrabold text-[14px]">
                          {other.results[0].val}
                        </span>
                        <span className="text-white/50 text-[10px] ml-1.5">
                          {other.results[0].label}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wide mb-2">
                        {other.client}
                      </p>
                      <h3 className="text-gray-900 font-bold text-[16px] leading-snug mb-3 group-hover:text-[#0e8c86] transition-colors">
                        {other.title}
                      </h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed mb-4 flex-1 line-clamp-3">
                        {other.summary}
                      </p>
                      <div className="flex items-center gap-1.5 text-[#0e8c86] text-[13px] font-semibold group-hover:gap-3 transition-all">
                        Read Case Study
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
          SECTION 8 — Bottom CTA
      ════════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Have a Similar Challenge?"
          sub="Let's talk about how we can deliver the same results for your business."
        />
      </div>
    </main>
  );
}