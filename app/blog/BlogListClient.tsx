"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import PageCTA from "../components/PageCTA";
import BlogCard from "../components/BlogCard";
import { BlogPost } from "@/app/lib/types/blog";

interface Props {
  initialPosts: BlogPost[];
  allTags: string[];
}

export default function BlogListClient({ initialPosts, allTags }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = useMemo(() => {
    let posts = initialPosts;

    // Filter by tag
    if (activeTag !== "All") {
      posts = posts.filter((p) => p.tags.includes(activeTag));
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return posts;
  }, [initialPosts, activeTag, searchQuery]);

  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

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
              <svg
                className="w-4 h-4 text-[#54c7c2]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-[#54c7c2] text-[11px] font-semibold tracking-[0.12em] uppercase">
                Blog
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight mb-5">
              Insights &{" "}
              <span className="text-[#54c7c2]">Ideas</span>
            </h1>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-[520px] mx-auto">
              Practical thinking on enterprise software, digital transformation,
              and IT strategy from the 110 Solutions team.
            </p>
          </div>

          {/* Search */}
          <div className="mt-10 max-w-[480px] mx-auto">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-[#54c7c2]/40 focus:bg-white/[0.08] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TAG FILTER + POSTS (White)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          {/* Tags */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {["All", ...allTags].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-medium border transition-all duration-300 ${
                    activeTag === tag
                      ? "bg-[#0e8c86] text-white border-[#0e8c86]"
                      : "bg-white text-gray-500 border-gray-200 hover:border-[#0e8c86]/30 hover:text-[#0e8c86]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured Post */}
          {featured && (
            <ScrollReveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="block mb-12 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 rounded-2xl border border-gray-100 hover:border-[#0e8c86]/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#0e8c86] text-white text-[10px] font-bold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold tracking-[0.05em] uppercase px-2.5 py-1 rounded-full border border-[#0e8c86]/15 text-[#0e8c86] bg-[#0e8c86]/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight mb-3 group-hover:text-[#0e8c86] transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-[12px] text-gray-400">
                      <span>{featured.authorName}</span>
                      <span className="w-[3px] h-[3px] rounded-full bg-gray-300" />
                      <span>
                        {new Date(featured.publishedAt).toLocaleDateString(
                          "en-AU",
                          { day: "numeric", month: "long", year: "numeric" }
                        )}
                      </span>
                      <span className="w-[3px] h-[3px] rounded-full bg-gray-300" />
                      <span>{featured.readingTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Post Grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {rest.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-[15px] mb-4">
                No articles found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveTag("All");
                }}
                className="text-[#0e8c86] text-[14px] font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Need Expert IT Solutions?"
          sub="From custom software to cloud migration — let's build something great together."
        />
      </div>
    </main>
  );
}