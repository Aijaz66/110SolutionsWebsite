import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail & POS Management Software | Inventory & Billing System — 110 Solutions",
  description:
    "Modern retail management and point-of-sale software. Manage inventory, process sales, track performance, and run multi-store operations from one platform.",
  keywords:
    "retail management software, POS system, point of sale software, inventory management software, retail POS, shop management system",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}