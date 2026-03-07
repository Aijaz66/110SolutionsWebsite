import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import BlogCard from "../components/BlogCard";
import PageCTA from "../components/PageCTA";
import NewsletterForm from "../components/NewsletterForm";
import {
  getPublishedPosts,
  getAllTags,
} from "./_data/mock-posts";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Blog | Insights & Technology Articles — 110 Solutions",
  description:
    "Read the latest insights on custom software development, cloud migration, IT consulting, and enterprise technology from the 110 Solutions team.",
  keywords:
    "IT blog, software development articles, technology insights, enterprise software blog, 110 Solutions blog",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const posts = getPublishedPosts();
  const tags = getAllTags();
  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  const featuredDate = new Date(featuredPost.publishedAt).toLocaleDateString(
    "en-AU",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <main className="bg-[#060a0e]">
      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — Hero
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#000000]">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#54c7c2]/[0.04] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-[#54c7c2]/[0.03] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(84,199,194,0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 text-center py-32 md:py-40">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#54c7c2] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#54c7c2]" />
              </span>
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#54c7c2]">
                Insights & Articles
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight text-white mb-6">
              Insights That Drive{" "}
              <span className="text-[#54c7c2]">Smarter Decisions</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-[560px] mx-auto">
              Practical guides, case studies, and thought leadership from the
              110 Solutions team — helping CTOs, founders, and IT leaders
              navigate enterprise technology.
            </p>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#54c7c2]/60 to-transparent" />
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/30 to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — Featured Post
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-5 h-[2px] bg-[#0e8c86]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e8c86]">
                Featured Article
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block relative rounded-2xl overflow-hidden aspect-[16/10]"
              >
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </Link>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right" delay={150}>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full border border-[#0e8c86]/20 text-[#0e8c86] bg-[#0e8c86]/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4 hover:text-[#0e8c86] transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-4 mb-8 text-[13px] text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#0e8c86]/10 flex items-center justify-center">
                      <span className="text-[11px] font-bold text-[#0e8c86]">
                        {featuredPost.authorName.charAt(0)}
                      </span>
                    </div>
                    <span>{featuredPost.authorName}</span>
                  </div>
                  <span className="w-[3px] h-[3px] rounded-full bg-gray-300" />
                  <span>{featuredDate}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-gray-300" />
                  <span>{featuredPost.readingTime}</span>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group/btn inline-flex items-center gap-2 text-[14px] font-bold text-[#0e8c86] hover:gap-3 transition-all duration-200"
                >
                  Read Article
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — Tag Strip
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f8fa] border-y border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8 py-5">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
            <span className="flex-shrink-0 px-4 py-2 rounded-full text-[12px] font-bold bg-[#0e8c86] text-white">
              All
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="flex-shrink-0 px-4 py-2 rounded-full text-[12px] font-semibold border border-gray-200 text-gray-500 hover:border-[#0e8c86]/40 hover:text-[#0e8c86] transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — Blog Grid
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px] bg-[#0e8c86]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e8c86]">
                Latest Articles
              </span>
            </div>
            <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight mb-12">
              From Our Blog
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {gridPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5 — Newsletter CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#091e2a] py-20 md:py-28 overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#54c7c2]/[0.06] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(84,199,194,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[600px] mx-auto px-6 xl:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.06] mb-6">
              <svg
                className="w-3.5 h-3.5 text-[#54c7c2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#54c7c2]">
                Newsletter
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Stay Ahead of the Curve
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="text-white/45 text-[15px] leading-relaxed mb-8">
              Get monthly insights on enterprise software, cloud strategy, and
              digital transformation — delivered straight to your inbox. No
              spam, unsubscribe anytime.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <NewsletterForm />
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="text-white/25 text-[12px] mt-4">
              Join 2,500+ technology leaders. Unsubscribe anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6 — Bottom CTA
      ════════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Have a Project in Mind?"
          sub="Let's discuss how 110 Solutions can help you build, scale, and modernise your technology."
        />
      </div>
    </main>
  );
}