import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Canada Payroll & Taxation Software | T4/T5/T4A Compliance — 110 Solutions",
  description:
    "All-in-one Canadian payroll and taxation software. Automate tax calculations, generate T4/T5/T4A slips, upload bank statements, and prepare financial statements effortlessly.",
  keywords:
    "canada payroll software, canadian tax software, T4 slip generator, T5 T4A slips, canadian payroll compliance, tax reporting canada, automated bookkeeping canada",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}