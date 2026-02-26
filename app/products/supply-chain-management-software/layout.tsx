import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supply Chain Management Software | End-to-End SCM — 110 Solutions",
  description:
    "Enterprise supply chain management software. Full visibility across procurement, inventory, logistics, and supplier management.",
  keywords:
    "supply chain management software, SCM software, procurement software, inventory management enterprise, logistics management software, supplier management system",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}