import "../blog-prose.css";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "../../components/ScrollReveal";
import BlogCard from "../../components/BlogCard";
import PageCTA from "../../components/PageCTA";
import ShareSidebar from "../../components/ShareSidebar";
import BlogTableOfContents from "../../components/BlogTableOfContents";
import {
  getPostBySlug,
  getAllSlugs,
  getPublishedPosts,
  getRelatedPosts,
} from "../_data/mock-posts";

// ─── Static Params ─────────────────────────────────────────────���──────────────

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found — 110 Solutions" };
  }

  return {
    title: `${post.title} — 110 Solutions Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.authorName],
      images: [post.coverImage],
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function extractHeadings(html: string): { id: string; text: string }[] {
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    headings.push({ id, text });
  }
  return headings;
}

function injectHeadingIds(html: string): string {
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_match, attrs, content) => {
    const text = content.replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return `<h2${attrs} id="${id}">${content}</h2>`;
  });
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);
  const recentPosts = getPublishedPosts().slice(0, 4);
  const headings = extractHeadings(post.content);
  const contentWithIds = injectHeadingIds(post.content);

  const publishedDate = new Date(post.publishedAt).toLocaleDateString(
    "en-AU",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <main className="bg-[#060a0e]">
      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — Breadcrumb Bar (Dark)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#000000] pt-28 pb-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#54c7c2]/[0.03] blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(84,199,194,0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center gap-2 text-[12px] text-white/35">
            <Link href="/" className="hover:text-[#54c7c2] transition-colors">
              Home
            </Link>
            <svg className="w-3 h-3 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <Link href="/blog" className="hover:text-[#54c7c2] transition-colors">
              Blog
            </Link>
            <svg className="w-3 h-3 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-white/50 line-clamp-1 max-w-[300px]">{post.title}</span>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/15 to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — 3-Column Blog Layout (SoftPak Style)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_70px] gap-8 lg:gap-10">

            {/* ── LEFT SIDEBAR — Top Posts + Table of Contents ── */}
            <aside className="hidden lg:block">
              <BlogTableOfContents
                headings={headings}
                recentPosts={recentPosts}
              />
            </aside>

            {/* ── CENTER — Main Article ── */}
            <article className="min-w-0">
              {/* Title */}
              <ScrollReveal>
                <h1 className="text-2xl md:text-3xl lg:text-[36px] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-6">
                  {post.title}
                </h1>
              </ScrollReveal>

              {/* Cover Image */}
              <ScrollReveal delay={50}>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>

              {/* Meta row */}
              <ScrollReveal delay={75}>
                <div className="flex flex-wrap items-center gap-4 text-[13px] text-gray-400 mb-10 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0e8c86]/10 flex items-center justify-center">
                      <span className="text-[12px] font-bold text-[#0e8c86]">
                        {post.authorName.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-600 font-medium">{post.authorName}</span>
                  </div>
                  <span className="w-[3px] h-[3px] rounded-full bg-gray-300" />
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>{publishedDate}</span>
                  </div>
                  <span className="w-[3px] h-[3px] rounded-full bg-gray-300" />
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-auto">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold tracking-[0.05em] uppercase px-2.5 py-1 rounded-full border border-[#0e8c86]/20 text-[#0e8c86] bg-[#0e8c86]/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Article Body */}
              <ScrollReveal delay={100}>
                <div
                  className="blog-prose"
                  dangerouslySetInnerHTML={{ __html: contentWithIds }}
                />
              </ScrollReveal>

              {/* ── Author Card ── */}
              <div className="mt-14 p-6 md:p-8 rounded-2xl bg-[#f7f8fa] border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#0e8c86]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-[#0e8c86]">
                      {post.authorName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0e8c86] mb-1">
                      Written by
                    </p>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {post.authorName}
                    </h4>
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">
                      Sharing insights on enterprise software, digital
                      transformation, and IT strategy. At 110 Solutions, we help
                      businesses build technology that drives real results.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Back to Blog ── */}
              <div className="mt-10">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 text-[14px] font-semibold text-gray-500 hover:text-[#0e8c86] transition-colors"
                >
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Back to All Articles
                </Link>
              </div>
            </article>

            {/* ── RIGHT SIDEBAR — Share Icons ── */}
            <aside className="hidden lg:block">
              <ShareSidebar />
            </aside>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — Related Posts
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f8fa] py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px] bg-[#0e8c86]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e8c86]">
                Keep Reading
              </span>
            </div>
            <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight mb-12">
              You Might Also Like
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {relatedPosts.map((rp, i) => (
              <BlogCard key={rp.id} post={rp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — Bottom CTA
      ════════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Need Expert IT Solutions?"
          sub="From custom software to cloud migration — let's build something great together."
        />
      </div>
    </main>
  );
}