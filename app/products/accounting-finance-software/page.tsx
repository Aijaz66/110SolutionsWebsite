// app/products/accounting-finance-software/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "../ProductPageLayout";

export const metadata: Metadata = {
  title: "Accounting & Finance Software Australia | Financial Management System — 110 Solutions",
  description: "Comprehensive accounting and finance management software for Australian businesses. Manage invoicing, expenses, reporting, GST, and compliance in one integrated platform.",
  keywords: "accounting software Australia, finance management system, invoicing software Australia, GST software, business accounting system, financial reporting software Australia",
};

export default function AccountingFinancePage() {
  return (
    <ProductPageLayout
      breadcrumb="Accounting & Finance Software"
      eyebrow="Accounting & Finance Management"
      h1Line1="Your Finances, Under"
      h1Teal="Complete Control."
      intro="Spreadsheets break. Manual bookkeeping is a risk. Our Accounting & Finance Management software gives you real-time financial visibility, automated compliance, and the reporting clarity to make confident business decisions — all built for Australian standards."
      stats={[
        { val: "GST Ready", label: "Australian Compliance" },
        { val: "Real-Time", label: "Financial Reporting" },
        { val: "ATO", label: "Integration Ready" },
        { val: "Multi-Entity", label: "Support" },
      ]}
      features={[
        { icon: "◧", title: "Invoicing & Billing", desc: "Create, send, and track professional invoices — with automated payment reminders and online payment integration." },
        { icon: "⬡", title: "Expense Management", desc: "Capture receipts, categorise expenses, and manage approvals — with real-time budget tracking." },
        { icon: "◈", title: "GST & Tax Compliance", desc: "Automated GST calculations, BAS preparation, and ATO-ready reporting for Australian compliance." },
        { icon: "◉", title: "Financial Reporting", desc: "P&L statements, balance sheets, cash flow reports, and custom dashboards — updated in real time." },
        { icon: "◎", title: "Accounts Payable & Receivable", desc: "Manage supplier payments and customer collections with aging reports and cash flow forecasting." },
        { icon: "◬", title: "Multi-Entity Management", desc: "Manage multiple business entities, consolidate financials, and compare performance across companies." },
      ]}
      whoFor={["SMBs", "Accountants & Bookkeepers", "Non-Profits", "Retail & Hospitality", "Professional Services", "Construction & Trades", "Healthcare Practices"]}
      ctaHeading="Take Control of Your Business Finances."
      ctaSub="Book a free demo and see how much clearer your financial picture can be."
    />
  );
}