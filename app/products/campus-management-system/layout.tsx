import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Management System | Academic Administration Software — 110 Solutions",
  description:
    "Complete campus management software for schools, colleges, and universities. Manage students, staff, timetables, fees, and communications in one integrated platform.",
  keywords:
    "campus management system, school management software, student information system, university management software, academic administration software",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}