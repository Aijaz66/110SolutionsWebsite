import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visitor Management System | Digital Check-In Software — 110 Solutions",
  description:
    "Smart visitor management software. Digitise your front desk — visitor check-in, badge printing, host notifications, and compliance logs in one system.",
  keywords:
    "visitor management system, digital visitor check-in, visitor tracking software, front desk management, reception management software, workplace visitor log",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}