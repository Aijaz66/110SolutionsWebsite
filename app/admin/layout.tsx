import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — 110 Solutions",
  robots: "noindex, nofollow",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}