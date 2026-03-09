import { NextRequest, NextResponse } from "next/server";
import { getPostById, updatePost, deletePost } from "@/app/lib/db/blog";
import { isAuthenticatedFromRequest } from "@/app/lib/auth";

// ─── GET /api/blog/[id] — Get single post ───────────────────────────────────

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const post = await getPostById(id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (error) {
    console.error("GET /api/blog/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

// ─── PUT /api/blog/[id] — Update post (admin only) ──────────────────────────

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await request.json();
    const post = await updatePost(id, body);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error("PUT /api/blog/[id] error:", error);

    if (
      error instanceof Error &&
      error.message.includes("duplicate key")
    ) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

// ─── DELETE /api/blog/[id] — Delete post (admin only) ────────────────────────

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const success = await deletePost(id);
    if (!success) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/blog/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}