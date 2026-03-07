"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/app/lib/types/blog";

interface TOCProps {
  headings: { id: string; text: string }[];
  recentPosts: BlogPost[];
}

export default function BlogTableOfContents({ headings, recentPosts }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="sticky top-28 space-y-10">
      {/* ── Top Posts ── */}
      <div>
        <h3 className="text-[18px] font-extrabold text-gray-900 mb-5 pb-3 border-b border-gray-100">
          Top Posts
        </h3>
        <div className="space-y-5">
          {recentPosts.slice(0, 4).map((post, i) => {
            const date = new Date(post.publishedAt).toLocaleDateString("en-AU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });
            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex gap-3"
              >
                <span className="text-[28px] font-extrabold text-gray-200 leading-none pt-0.5 w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[13.5px] font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#0e8c86] transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <svg
                      className="w-3 h-3 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-[11px] text-gray-400">{date}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Table of Contents ── */}
      {headings.length > 0 && (
        <div>
          <h3 className="text-[18px] font-extrabold text-gray-900 mb-5 pb-3 border-b border-gray-100">
            Table of Contents
          </h3>
          <nav className="space-y-1">
            {headings.map(({ id, text }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`block text-[13px] leading-relaxed py-1.5 pl-4 border-l-[3px] transition-all duration-200 ${
                  activeId === id
                    ? "border-[#0e8c86] text-[#0e8c86] font-semibold"
                    : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-200"
                }`}
              >
                {text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}