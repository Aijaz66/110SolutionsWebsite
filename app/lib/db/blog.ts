import { ObjectId } from "mongodb";
import { getDb } from "../mongodb";
import { BlogPost, BlogPostFormData } from "../types/blog";

const COLLECTION = "blogPosts";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function docToPost(doc: Record<string, unknown>): BlogPost {
  return {
    id: (doc._id as ObjectId).toString(),
    title: doc.title as string,
    slug: doc.slug as string,
    excerpt: doc.excerpt as string,
    content: doc.content as string,
    coverImage: doc.coverImage as string,
    published: doc.published as boolean,
    authorName: doc.authorName as string,
    tags: doc.tags as string[],
    readingTime: doc.readingTime as string,
    createdAt: doc.createdAt as string,
    updatedAt: doc.updatedAt as string,
    publishedAt: doc.publishedAt as string,
  };
}

function calculateReadingTime(content: string): string {
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

// ─── Public Query Functions (same signatures as mock-posts.ts) ───────────────

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const db = await getDb();
  const docs = await db
    .collection(COLLECTION)
    .find({ published: true })
    .sort({ publishedAt: -1 })
    .toArray();
  return docs.map((d) => docToPost(d as unknown as Record<string, unknown>));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const db = await getDb();
  const doc = await db
    .collection(COLLECTION)
    .findOne({ slug, published: true });
  if (!doc) return null;
  return docToPost(doc as unknown as Record<string, unknown>);
}

export async function getAllSlugs(): Promise<string[]> {
  const db = await getDb();
  const docs = await db
    .collection(COLLECTION)
    .find({ published: true }, { projection: { slug: 1 } })
    .toArray();
  return docs.map((d) => d.slug as string);
}

export async function getAllTags(): Promise<string[]> {
  const db = await getDb();
  const docs = await db
    .collection(COLLECTION)
    .find({ published: true }, { projection: { tags: 1 } })
    .toArray();
  const tags = docs.flatMap((d) => (d.tags as string[]) || []);
  return Array.from(new Set(tags)).sort();
}

export async function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): Promise<BlogPost[]> {
  const current = await getPostBySlug(currentSlug);
  const allPosts = await getPublishedPosts();

  if (!current) return allPosts.slice(0, limit);

  const currentTags = new Set(current.tags);
  return allPosts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aOverlap = a.tags.filter((t) => currentTags.has(t)).length;
      const bOverlap = b.tags.filter((t) => currentTags.has(t)).length;
      return bOverlap - aOverlap;
    })
    .slice(0, limit);
}

// ─── Admin Functions ─────────────────────────────────────────────────────────

export async function getAllPosts(): Promise<BlogPost[]> {
  const db = await getDb();
  const docs = await db
    .collection(COLLECTION)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();
  return docs.map((d) => docToPost(d as unknown as Record<string, unknown>));
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const db = await getDb();
  let doc;
  try {
    doc = await db
      .collection(COLLECTION)
      .findOne({ _id: new ObjectId(id) });
  } catch {
    return null;
  }
  if (!doc) return null;
  return docToPost(doc as unknown as Record<string, unknown>);
}

export async function createPost(data: BlogPostFormData): Promise<BlogPost> {
  const db = await getDb();
  const now = new Date().toISOString();

  const doc = {
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    content: data.content,
    coverImage: data.coverImage || "",
    published: data.published,
    authorName: data.authorName,
    tags: data.tags,
    readingTime: calculateReadingTime(data.content),
    createdAt: now,
    updatedAt: now,
    publishedAt: data.published ? now : "",
  };

  const result = await db.collection(COLLECTION).insertOne(doc);
  return {
    id: result.insertedId.toString(),
    ...doc,
  };
}

export async function updatePost(
  id: string,
  data: Partial<BlogPostFormData>
): Promise<BlogPost | null> {
  const db = await getDb();
  const now = new Date().toISOString();

  const existing = await getPostById(id);
  if (!existing) return null;

  const updateFields: Record<string, unknown> = {
    ...data,
    updatedAt: now,
  };

  // If content changed, recalculate reading time
  if (data.content) {
    updateFields.readingTime = calculateReadingTime(data.content);
  }

  // If transitioning from unpublished → published, set publishedAt
  if (data.published === true && !existing.publishedAt) {
    updateFields.publishedAt = now;
  }

  // If unpublishing, clear publishedAt
  if (data.published === false) {
    updateFields.publishedAt = "";
  }

  await db
    .collection(COLLECTION)
    .updateOne({ _id: new ObjectId(id) }, { $set: updateFields });

  return getPostById(id);
}

export async function deletePost(id: string): Promise<boolean> {
  const db = await getDb();
  try {
    const result = await db
      .collection(COLLECTION)
      .deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount === 1;
  } catch {
    return false;
  }
}

export async function seedPosts(posts: Omit<BlogPost, "id">[]): Promise<number> {
  const db = await getDb();
  let insertedCount = 0;

  for (const post of posts) {
    const exists = await db
      .collection(COLLECTION)
      .findOne({ slug: post.slug });

    if (!exists) {
      await db.collection(COLLECTION).insertOne({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.coverImage,
        published: post.published,
        authorName: post.authorName,
        tags: post.tags,
        readingTime: post.readingTime,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        publishedAt: post.publishedAt,
      });
      insertedCount++;
    }
  }

  // Create indexes
  await db.collection(COLLECTION).createIndex({ slug: 1 }, { unique: true });
  await db.collection(COLLECTION).createIndex({ published: 1, publishedAt: -1 });
  await db.collection(COLLECTION).createIndex({ tags: 1 });

  return insertedCount;
}