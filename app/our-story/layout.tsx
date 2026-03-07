import type { Metadata, } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Our Story | The Journey of 110 Solutions",
  description:
    "Discover the story behind 110 Solutions — how we started, where we've been, and where we're headed. A journey from a simple idea to a trusted enterprise technology partner.",
  keywords:
    "110 solutions story, company history, our journey, technology company origin, software company story",
};

export default function OurStoryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}