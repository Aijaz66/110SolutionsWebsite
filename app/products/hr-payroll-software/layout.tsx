import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR & Payroll Software | Human Resources Management System — 110 Solutions",
  description:
    "Streamline HR and payroll operations with an all-in-one platform. Manage employees, automate payslips, track leave, and ensure compliance.",
  keywords:
    "HR payroll software, human resources management system, payroll automation, HR software, employee management system, HRIS",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}