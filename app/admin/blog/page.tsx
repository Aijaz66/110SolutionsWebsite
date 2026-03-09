"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminSidebar from "../components/AdminSidebar";
import { BlogPost } from "@/app/lib/types/blog";

export default function AdminBlogDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/blog?all=true");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setPosts(data.posts || []);
    } catch {
      console.error("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    try {
      const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      }
    } catch {
      alert("Failed to delete post");
    }
  };

  const handleTogglePublish = async (id: string, currentlyPublished: boolean) => {
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !currentlyPublished }),
      });
      if (res.ok) {
        fetchPosts();
      }
    } catch {
      alert("Failed to update post");
    }
  };

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const publishedCount = posts.filter((p) => p.published).length;
  const draftCount = posts.length - publishedCount;

  return (
    <div className="min-h-screen bg-[#060a0e] text-white">
      <AdminSidebar />

      <main className="ml-[240px] p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Blog Posts</h1>
            <p className="text-white/30 text-[13px] mt-1">
              Manage your blog content
            </p>
          </div>
          <Link
            href="/admin/blog/new"
            className="px-5 py-2.5 rounded-xl bg-[#54c7c2] text-[#060a0e] text-[13px] font-bold hover:bg-[#6edbd5] transition-colors"
          >
            + New Post
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Posts", value: posts.length, color: "text-white" },
            { label: "Published", value: publishedCount, color: "text-emerald-400" },
            { label: "Drafts", value: draftCount, color: "text-amber-400" },
          ].map((s) => (
            <div
              key={s.label}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
            >
              <p className="text-white/30 text-[11px] font-semibold uppercase tracking-wider mb-1">
                {s.label}
              </p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search posts by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-[400px] px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-[13px] placeholder:text-white/20 focus:outline-none focus:border-[#54c7c2]/30 transition-all"
          />
        </div>

        {/* Posts Table */}
        {loading ? (
          <div className="text-center py-20 text-white/30">Loading posts...</div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/30 text-[14px] mb-4">
              {posts.length === 0
                ? "No posts yet. Create your first blog post!"
                : "No posts match your search."}
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-white/30">
                    Title
                  </th>
                  <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-white/30">
                    Status
                  </th>
                  <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-white/30">
                    Author
                  </th>
                  <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-white/30">
                    Date
                  </th>
                  <th className="text-right px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-white/30">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-5 py-4">
                      <p className="text-white text-[13px] font-medium line-clamp-1 max-w-[300px]">
                        {post.title}
                      </p>
                      <div className="flex gap-1.5 mt-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] px-2 py-0.5 rounded-full bg-white/[0.05] text-white/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => handleTogglePublish(post.id, post.published)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-all ${
                          post.published
                            ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
                            : "bg-amber-500/15 text-amber-400 hover:bg-amber-500/25"
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </button>
                    </td>
                    <td className="px-5 py-4 text-white/40 text-[12px]">
                      {post.authorName}
                    </td>
                    <td className="px-5 py-4 text-white/30 text-[12px]">
                      {new Date(post.createdAt).toLocaleDateString("en-AU", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-2 rounded-lg text-white/20 hover:text-[#54c7c2] hover:bg-[#54c7c2]/10 transition-all"
                          title="View"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </Link>
                        <Link
                          href={`/admin/blog/edit/${post.id}`}
                          className="p-2 rounded-lg text-white/20 hover:text-[#54c7c2] hover:bg-[#54c7c2]/10 transition-all"
                          title="Edit"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          className="p-2 rounded-lg text-white/20 hover:text-red-400 hover:bg-red-500/10 transition-all"
                          title="Delete"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}