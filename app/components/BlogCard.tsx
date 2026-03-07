import Link from "next/link";
import { BlogPost } from "@/app/lib/types/blog";
import ScrollReveal from "./ScrollReveal";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <ScrollReveal delay={index * 100}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="h-full bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1">
          {/* ── Cover Image ── */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* ── Content ── */}
          <div className="p-5 flex flex-col flex-1">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full border border-[#0e8c86]/20 text-[#0e8c86] bg-[#0e8c86]/[0.04]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-[17px] font-bold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#0e8c86] transition-colors duration-200">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[13.5px] text-gray-500 leading-relaxed line-clamp-2 mb-4">
              {post.excerpt}
            </p>

            {/* Meta row */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0e8c86]/10 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#0e8c86]">
                    {post.authorName.charAt(0)}
                  </span>
                </div>
                <span className="text-[12px] text-gray-400">
                  {post.authorName}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11.5px] text-gray-400">
                <span>{date}</span>
                <span className="w-[3px] h-[3px] rounded-full bg-gray-300" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  );
}