import { getPublishedPosts, getAllTags } from "@/app/lib/db/blog";
import BlogListClient from "./BlogListClient";

export const metadata = {
  title: "Blog — 110 Solutions",
  description:
    "Insights on enterprise software, digital transformation, cloud migration, and IT strategy from the 110 Solutions team.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([
    getPublishedPosts(),
    getAllTags(),
  ]);

  return <BlogListClient initialPosts={posts} allTags={tags} />;
}