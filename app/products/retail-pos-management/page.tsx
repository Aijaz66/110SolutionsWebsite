// app/products/retail-pos-management/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "../ProductPageLayout";

export const metadata: Metadata = {
  title: "Retail & POS Management Software Australia | Inventory & Billing System — 110 Solutions",
  description: "Modern retail management and point-of-sale software for Australian businesses. Manage inventory, process sales, track performance, and run multi-store operations from one platform.",
  keywords: "retail management software Australia, POS system Australia, point of sale software, inventory management software, retail POS Australia, shop management system",
};

export default function RetailPOSPage() {
  return (
    <ProductPageLayout
      breadcrumb="Retail & POS Management"
      eyebrow="Retail & POS Management"
      h1Line1="Sell More. Manage Less."
      h1Teal="Retail Made Simple."
      intro="Running a retail business means managing inventory, processing sales, tracking performance, and keeping customers happy — all at once. Our Retail & POS Management system gives you a single platform to handle all of it, whether you have one store or fifty."
      stats={[
        { val: "Real-Time", label: "Inventory Sync" },
        { val: "Multi-Store", label: "Management" },
        { val: "Barcode", label: "& QR Ready" },
        { val: "GST Ready", label: "Australian Compliance" },
      ]}
      features={[
        { icon: "◩", title: "Point of Sale (POS)", desc: "A fast, intuitive POS interface that works on any device — process sales, apply discounts, and split payments." },
        { icon: "⬡", title: "Inventory Management", desc: "Real-time stock levels, low-stock alerts, supplier orders, and multi-location inventory in one view." },
        { icon: "◈", title: "Barcode & QR Scanning", desc: "Instant product lookup and checkout via barcode scanner or mobile camera." },
        { icon: "◉", title: "Sales Analytics & Reporting", desc: "Daily sales reports, top-selling products, staff performance, and trend analysis to drive smarter decisions." },
        { icon: "◎", title: "Customer Loyalty", desc: "Built-in loyalty programme — points, rewards, and customer purchase history." },
        { icon: "◬", title: "Multi-Store Management", desc: "Manage all your locations from one dashboard — centralised pricing, inventory transfers, and reporting." },
      ]}
      whoFor={["Independent Retailers", "Supermarkets & Grocery Stores", "Pharmacies", "Fashion & Apparel", "Electronics Stores", "Restaurants & Cafés", "Franchise Networks"]}
      ctaHeading="Ready to Modernise Your Retail Operations?"
      ctaSub="See our POS system in action. Book a free demo today."
    />
  );
}