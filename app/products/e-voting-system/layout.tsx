import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Voting System | Secure Digital Voting Platform — 110 Solutions",
  description:
    "Secure, transparent, and auditable digital voting software for organisations, educational institutions, and government bodies. Eliminate paper ballots and ensure vote integrity.",
  keywords:
    "e-voting system, digital voting platform, online voting software, electronic voting, secure voting system, organisational voting software",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}