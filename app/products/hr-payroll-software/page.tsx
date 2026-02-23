// app/products/hr-payroll-software/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "../ProductPageLayout";

export const metadata: Metadata = {
  title: "HR & Payroll Software Australia | Human Resources Management System — 110 Solutions",
  description: "Streamline HR and payroll operations with 110 Solutions' all-in-one HR & Payroll Software. Manage employees, automate payslips, track leave, and ensure compliance — built for Australian businesses.",
  keywords: "HR payroll software Australia, human resources management system, payroll automation Australia, HR software SMB, employee management system Australia, HRIS Australia",
};

export default function HRPayrollPage() {
  return (
    <ProductPageLayout
      breadcrumb="HR & Payroll Software"
      eyebrow="HR & Payroll Management"
      h1Line1="HR & Payroll, Simplified"
      h1Teal="From Hire to Payslip."
      intro="Managing people is complex. Managing their payroll shouldn't be. Our HR & Payroll Software consolidates your entire employee lifecycle — recruitment, onboarding, attendance, leave, and payroll — into one integrated platform built for Australian compliance."
      stats={[
        { val: "20+ hrs", label: "Saved Per Month" },
        { val: "100%", label: "Payroll Accuracy" },
        { val: "ATO Ready", label: "Tax Compliance" },
        { val: "Self-Service", label: "Employee Portal" },
      ]}
      features={[
        { icon: "◫", title: "Employee Lifecycle Management", desc: "From job offer to offboarding — contracts, onboarding checklists, performance records, all in one place." },
        { icon: "⬡", title: "Automated Payroll Processing", desc: "Automatically calculate salaries, overtime, deductions, and super — then generate payslips with one click." },
        { icon: "◈", title: "Australian Tax Compliance", desc: "Built-in STP (Single Touch Payroll) reporting, PAYG withholding, and superannuation compliance." },
        { icon: "◉", title: "Leave Management", desc: "Leave requests, approval workflows, balance tracking, and accrual calculations — fully automated." },
        { icon: "◎", title: "Employee Self-Service Portal", desc: "Employees can view payslips, apply for leave, and update personal details — reducing HR admin load." },
        { icon: "◬", title: "Reports & Analytics", desc: "Headcount reports, payroll cost analysis, leave liability, and custom HR dashboards for leadership." },
      ]}
      whoFor={["SMBs (10–500 employees)", "Enterprises", "Schools & Education", "Healthcare Providers", "Retail Businesses", "Hospitality Groups", "Non-Profits"]}
      ctaHeading="Ready to Simplify Your HR & Payroll?"
      ctaSub="See the full platform in action. Book a free demo with a product specialist."
    />
  );
}