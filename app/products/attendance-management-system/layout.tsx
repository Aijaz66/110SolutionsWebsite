import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attendance Management System | Time Tracking Software — 110 Solutions",
  description:
    "Automate time and attendance tracking with real-time data, biometric integration, and automated reporting for businesses of any size.",
  keywords:
    "attendance management system, time attendance software, employee attendance tracking, biometric attendance, workforce management software",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}