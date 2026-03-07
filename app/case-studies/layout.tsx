import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Case Studies | Client Success Stories — 110 Solutions",
  description:
    "Explore how 110 Solutions has helped businesses transform their operations with custom software, enterprise products, and IT consulting. Real clients, real results.",
  keywords:
    "case studies, client success stories, software case studies, enterprise software results, IT consulting success, 110 solutions portfolio",
};

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}