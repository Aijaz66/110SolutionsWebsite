// app/products/attendance-management-system/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "../ProductPageLayout";

export const metadata: Metadata = {
  title: "Attendance Management System Australia | Time Tracking Software — 110 Solutions",
  description: "Automate time and attendance tracking with 110 Solutions' Attendance Management System. Real-time data, biometric integration, and automated reporting for businesses across Australia.",
  keywords: "attendance management system Australia, time attendance software, employee attendance tracking, biometric attendance, workforce management software Australia",
};

export default function AttendancePage() {
  return (
    <ProductPageLayout
      breadcrumb="Attendance Management System"
      eyebrow="Attendance Management System"
      h1Line1="Time & Attendance Tracking,"
      h1Teal="Fully Automated."
      intro="Manual timesheets are error-prone, time-consuming, and a compliance risk. Our Attendance Management System gives you real-time visibility into workforce attendance — with automated reports, biometric integration, and seamless payroll connectivity."
      stats={[
        { val: "99.9%", label: "Data Accuracy" },
        { val: "80%", label: "Admin Time Saved" },
        { val: "Real-Time", label: "Attendance Visibility" },
        { val: "Multi-Site", label: "Location Support" },
      ]}
      features={[
        { icon: "▣", title: "Biometric & RFID Integration", desc: "Connect fingerprint scanners, face recognition, and RFID card readers for accurate, fraud-proof attendance." },
        { icon: "◈", title: "Real-Time Dashboard", desc: "Live view of who's in, who's late, and who's absent — across all your sites in a single dashboard." },
        { icon: "◉", title: "Automated Timesheets", desc: "Clock-in and clock-out data auto-generates timesheets — no manual entry, no errors." },
        { icon: "◎", title: "Leave Management", desc: "Integrated leave requests, approvals, and balances — synced directly with attendance records." },
        { icon: "◬", title: "Payroll Integration", desc: "Direct connectivity with your payroll system for error-free, automated payroll processing." },
        { icon: "⬟", title: "Compliance Reporting", desc: "Automated reports for compliance, audits, and management — exportable in multiple formats." },
      ]}
      whoFor={["Corporate Offices", "Schools & Universities", "Healthcare Facilities", "Manufacturing Plants", "Retail Chains", "Government Departments", "Logistics Companies"]}
      ctaHeading="Ready to Automate Attendance Tracking?"
      ctaSub="See how much time your team can save. Book a free live demo today."
    />
  );
}