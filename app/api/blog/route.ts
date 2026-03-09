import { NextRequest, NextResponse } from "next/server";
import { getPublishedPosts, getAllPosts, createPost } from "@/app/lib/db/blog";
import { isAuthenticatedFromRequest } from "@/app/lib/auth";

// ─── GET /api/blog — List posts ─────────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all");
    const tag = searchParams.get("tag");
    const search = searchParams.get("search");
    const limit = searchParams.get("limit");

    // If ?all=true and authenticated, return all posts including drafts
    let posts =
      all === "true" && isAuthenticatedFromRequest(request)
        ? await getAllPosts()
        : await getPublishedPosts();

    if (tag) {
      posts = posts.filter((p) =>
        p.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
      );
    }

    if (search) {
      const q = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }

    if (limit) {
      posts = posts.slice(0, parseInt(limit, 10));
    }

    return NextResponse.json({ posts, total: posts.length });
  } catch (error) {
    console.error("GET /api/blog error:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

// ─── POST /api/blog — Create new post (admin only) ──────────────────────────

export async function POST(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    // Validate required fields
    const { title, slug, excerpt, content, authorName } = body;
    if (!title || !slug || !excerpt || !content || !authorName) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: title, slug, excerpt, content, authorName",
        },
        { status: 400 }
      );
    }

    const post = await createPost({
      title,
      slug,
      excerpt,
      content,
      coverImage: body.coverImage || "",
      published: body.published ?? false,
      authorName,
      tags: body.tags || [],
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error("POST /api/blog error:", error);

    // Duplicate slug
    if (error instanceof Error && error.message.includes("duplicate key")) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}