"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "./AdminSidebar";

interface PostEditorProps {
  mode: "create" | "edit";
  postId?: string;
}

export default function PostEditor({ mode, postId }: PostEditorProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [tagInput, setTagInput] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    authorName: "",
    tags: [] as string[],
    published: false,
  });

  // Load post data for edit mode
  useEffect(() => {
    if (mode === "edit" && postId) {
      fetch(`/api/blog/${postId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.post) {
            setForm({
              title: data.post.title,
              slug: data.post.slug,
              excerpt: data.post.excerpt,
              content: data.post.content,
              coverImage: data.post.coverImage,
              authorName: data.post.authorName,
              tags: data.post.tags,
              published: data.post.published,
            });
          }
        })
        .catch(() => setError("Failed to load post"));
    }
  }, [mode, postId]);

  // Auto-generate slug from title
  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug:
        mode === "create"
          ? title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "")
          : prev.slug,
    }));
  };

  const addTag = () => {
    const tag = tagInput.trim();
    if (tag && !form.tags.includes(tag)) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleSave = async (publish?: boolean) => {
    setError("");
    setSaving(true);

    const payload = {
      ...form,
      published: publish !== undefined ? publish : form.published,
    };

    try {
      const url = mode === "create" ? "/api/blog" : `/api/blog/${postId}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to save post");
        return;
      }

      router.push("/admin/blog");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Calculate reading time
  const wordCount = form.content.replace(/<[^>]*>/g, "").trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="min-h-screen bg-[#060a0e] text-white">
      <AdminSidebar />

      <main className="ml-[240px] p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => router.push("/admin/blog")}
              className="text-white/30 text-[12px] hover:text-[#54c7c2] transition-colors mb-2 inline-flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to posts
            </button>
            <h1 className="text-2xl font-bold">
              {mode === "create" ? "Create New Post" : "Edit Post"}
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleSave(false)}
              disabled={saving}
              className="px-5 py-2.5 rounded-xl border border-white/10 text-white/60 text-[13px] font-semibold hover:border-white/20 transition-all disabled:opacity-50"
            >
              Save as Draft
            </button>
            <button
              onClick={() => handleSave(true)}
              disabled={saving}
              className="px-5 py-2.5 rounded-xl bg-[#54c7c2] text-[#060a0e] text-[13px] font-bold hover:bg-[#6edbd5] transition-colors disabled:opacity-50"
            >
              {saving ? "Saving..." : "Publish"}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[13px]">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8">
          {/* ── Main Editor ── */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-2">
                Title *
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter post title..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-[15px] placeholder:text-white/15 focus:outline-none focus:border-[#54c7c2]/30 transition-all"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-2">
                Slug *
              </label>
              <div className="flex items-center gap-2">
                <span className="text-white/20 text-[13px]">/blog/</span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                  placeholder="post-url-slug"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-[13px] placeholder:text-white/15 focus:outline-none focus:border-[#54c7c2]/30 transition-all"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-2">
                Excerpt *
              </label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Brief description of the post..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-[13px] placeholder:text-white/15 focus:outline-none focus:border-[#54c7c2]/30 transition-all resize-none"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-white/40 text-[11px] font-semibold uppercase tracking-wider">
                  Content (HTML) *
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowPreview(false)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
                      !showPreview
                        ? "bg-[#54c7c2]/15 text-[#54c7c2]"
                        : "text-white/30 hover:text-white/50"
                    }`}
                  >
                    Editor
                  </button>
                  <button
                    onClick={() => setShowPreview(true)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
                      showPreview
                        ? "bg-[#54c7c2]/15 text-[#54c7c2]"
                        : "text-white/30 hover:text-white/50"
                    }`}
                  >
                    Preview
                  </button>
                </div>
              </div>

              {!showPreview ? (
                <textarea
                  value={form.content}
                  onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
                  placeholder="<h2>Your heading</h2>\n<p>Your content here...</p>"
                  rows={20}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-[13px] font-mono placeholder:text-white/15 focus:outline-none focus:border-[#54c7c2]/30 transition-all resize-y"
                />
              ) : (
                <div className="w-full min-h-[400px] px-6 py-4 rounded-xl bg-white border border-gray-200 overflow-auto">
                  <div
                    className="prose prose-sm max-w-none text-gray-800"
                    dangerouslySetInnerHTML={{ __html: form.content || "<p class='text-gray-400'>No content to preview</p>" }}
                  />
                </div>
              )}

              <p className="text-white/20 text-[11px] mt-2">
                {wordCount} words · {readingTime} min read
              </p>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-6">
            {/* Cover Image */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <label className="block text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-2">
                Cover Image URL
              </label>
              <input
                type="text"
                value={form.coverImage}
                onChange={(e) => setForm((prev) => ({ ...prev, coverImage: e.target.value }))}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white text-[12px] placeholder:text-white/15 focus:outline-none focus:border-[#54c7c2]/30 transition-all"
              />
              {form.coverImage && (
                <div className="mt-3 rounded-lg overflow-hidden aspect-[16/9]">
                  <img
                    src={form.coverImage}
                    alt="Cover preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>

            {/* Author */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <label className="block text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-2">
                Author Name *
              </label>
              <input
                type="text"
                value={form.authorName}
                onChange={(e) => setForm((prev) => ({ ...prev, authorName: e.target.value }))}
                placeholder="e.g. Aijaz Ahmed"
                className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white text-[12px] placeholder:text-white/15 focus:outline-none focus:border-[#54c7c2]/30 transition-all"
              />
            </div>

            {/* Tags */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <label className="block text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-2">
                Tags
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTag();
                    }
                  }}
                  placeholder="Add tag + Enter"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white text-[12px] placeholder:text-white/15 focus:outline-none focus:border-[#54c7c2]/30 transition-all"
                />
                <button
                  onClick={addTag}
                  type="button"
                  className="px-3 py-2 rounded-lg bg-white/[0.06] text-white/40 text-[12px] hover:text-[#54c7c2] hover:bg-[#54c7c2]/10 transition-all"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {form.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#54c7c2]/10 border border-[#54c7c2]/20 text-[#54c7c2] text-[10px] font-semibold"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="hover:text-red-400 transition-colors ml-0.5"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Publish Toggle */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-[13px] font-medium">Published</p>
                  <p className="text-white/25 text-[11px]">
                    {form.published ? "Visible on website" : "Hidden (draft)"}
                  </p>
                </div>
                <button
                  onClick={() => setForm((prev) => ({ ...prev, published: !prev.published }))}
                  className={`w-11 h-6 rounded-full transition-all relative ${
                    form.published ? "bg-[#54c7c2]" : "bg-white/10"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${
                      form.published ? "left-6" : "left-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}