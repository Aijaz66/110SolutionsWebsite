// app/products/supply-chain-management-software/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "../ProductPageLayout";

export const metadata: Metadata = {
  title: "Supply Chain Management Software Australia | End-to-End SCM — 110 Solutions",
  description: "Enterprise supply chain management software for Australian businesses. 110 Solutions provides full visibility across procurement, inventory, logistics, and supplier management.",
  keywords: "supply chain management software Australia, SCM software, procurement software Australia, inventory management enterprise, logistics management software, supplier management system",
};

export default function SupplyChainPage() {
  return (
    <ProductPageLayout
      breadcrumb="Supply Chain Management Software"
      eyebrow="Supply Chain Management"
      h1Line1="Full Visibility."
      h1Teal="Across Your Entire Supply Chain."
      intro="Supply chain disruptions cost businesses millions. Our Supply Chain Management Software gives you real-time visibility and control across every link in your chain — from supplier to customer — so you can anticipate problems before they become crises."
      stats={[
        { val: "End-to-End", label: "Visibility" },
        { val: "Real-Time", label: "Tracking" },
        { val: "Multi-Supplier", label: "Management" },
        { val: "API Ready", label: "3PL Integration" },
      ]}
      features={[
        { icon: "◨", title: "Procurement Management", desc: "Automate purchase orders, approval workflows, and supplier negotiations with full audit trails." },
        { icon: "⬡", title: "Inventory & Warehouse", desc: "Real-time stock levels, warehouse locations, pick-pack-ship workflows, and reorder automation." },
        { icon: "◈", title: "Supplier Management", desc: "Centralised supplier database with performance tracking, contract management, and risk assessment." },
        { icon: "◉", title: "Logistics & Delivery Tracking", desc: "End-to-end shipment tracking integrated with major carriers and 3PL providers." },
        { icon: "◎", title: "Demand Forecasting", desc: "AI-assisted demand forecasting to prevent stockouts and reduce excess inventory costs." },
        { icon: "◬", title: "Analytics & Reporting", desc: "Supply chain KPIs, cost analysis, lead time tracking, and bottleneck identification." },
      ]}
      whoFor={["Manufacturers", "Distributors & Wholesalers", "Retailers with Complex Logistics", "Import/Export Businesses", "FMCG Companies", "Healthcare Supply Chains"]}
      ctaHeading="Want End-to-End Supply Chain Visibility?"
      ctaSub="Book a demo and we'll show you the platform with your industry in mind."
    />
  );
}