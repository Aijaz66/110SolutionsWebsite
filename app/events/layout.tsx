import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Events | Webinars, Workshops & Conferences — 110 Solutions",
  description:
    "Join 110 Solutions at upcoming webinars, workshops, product demos, and industry events. Stay connected with the latest in enterprise technology.",
  keywords:
    "110 solutions events, tech webinars, software workshops, enterprise technology events, product demos, IT conferences",
};

export default function EventsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}