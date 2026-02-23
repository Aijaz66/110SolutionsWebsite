// app/products/campus-management-system/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "../ProductPageLayout";

export const metadata: Metadata = {
  title: "Campus Management System Australia | Academic Administration Software — 110 Solutions",
  description: "Complete campus management software for schools, colleges, and universities in Australia. Manage students, staff, timetables, fees, and communications in one integrated platform.",
  keywords: "campus management system Australia, school management software, student information system, university management software, academic administration software Australia",
};

export default function CampusManagementPage() {
  return (
    <ProductPageLayout
      breadcrumb="Campus Management System"
      eyebrow="Campus Management System"
      h1Line1="Run Your Campus."
      h1Teal="Not Your Paperwork."
      intro="Educational institutions run on data — student records, timetables, fee collections, communications, and compliance. Our Campus Management System brings all of it into one unified platform, reducing administrative burden so your staff can focus on what matters: education."
      stats={[
        { val: "K–12", label: "to University" },
        { val: "60%", label: "Admin Reduction" },
        { val: "Multi-Campus", label: "Support" },
        { val: "Parent Portal", label: "Included" },
      ]}
      features={[
        { icon: "◪", title: "Student Information System", desc: "Complete student profiles — enrolment, academic history, attendance, behaviour, and communications." },
        { icon: "⬡", title: "Timetable & Class Scheduling", desc: "Intelligent timetabling that avoids clashes, manages room allocation, and adapts to changes in real time." },
        { icon: "◈", title: "Fee Management & Billing", desc: "Automated fee schedules, online payment collection, receipts, and outstanding balance tracking." },
        { icon: "◉", title: "Parent & Student Portal", desc: "Self-service portal for parents to view attendance, grades, fee status, and receive communications." },
        { icon: "◎", title: "Staff & Payroll Integration", desc: "Staff records, timetable assignments, leave management, and payroll connectivity." },
        { icon: "◬", title: "Compliance & Reporting", desc: "ACARA-ready reporting, accreditation documents, and custom reports for leadership and boards." },
      ]}
      whoFor={["Primary & Secondary Schools", "TAFE Institutes", "Colleges & Universities", "Private Tutoring Centres", "International Schools", "Training Organisations"]}
      ctaHeading="Want to See the Campus System Live?"
      ctaSub="Book a free demo tailored to your institution type and size."
    />
  );
}