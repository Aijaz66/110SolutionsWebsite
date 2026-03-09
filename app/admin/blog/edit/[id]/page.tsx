"use client";

import { use } from "react";
import PostEditor from "../../../../admin/components/PostEditor";

export default function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <PostEditor mode="edit" postId={id} />;
}