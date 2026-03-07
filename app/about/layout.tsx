import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About 110 Solutions | Enterprise Software & IT Company",
  description:
    "Learn about 110 Solutions — a trusted enterprise software and IT solutions company. Serving SMBs, enterprises, and agencies with custom software, products, and IT consulting.",
  keywords:
    "about 110 solutions, enterprise software company, IT solutions company, software development team, technology company",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}