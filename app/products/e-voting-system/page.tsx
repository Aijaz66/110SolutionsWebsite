// app/products/e-voting-system/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "../ProductPageLayout";

export const metadata: Metadata = {
  title: "E-Voting System Australia | Secure Digital Voting Platform — 110 Solutions",
  description: "Secure, transparent, and auditable digital voting software for organisations, educational institutions, and government bodies in Australia. Eliminate paper ballots and ensure vote integrity.",
  keywords: "e-voting system Australia, digital voting platform, online voting software, electronic voting Australia, secure voting system, organisational voting software",
};

export default function EVotingPage() {
  return (
    <ProductPageLayout
      breadcrumb="E-Voting System"
      eyebrow="E-Voting System"
      h1Line1="Secure, Transparent,"
      h1Teal="Digital Democracy."
      intro="Paper-based voting is slow, costly, and vulnerable to disputes. Our E-Voting System delivers a tamper-proof, fully auditable digital voting experience — giving participants confidence in the process and administrators complete control."
      stats={[
        { val: "256-bit", label: "Encryption" },
        { val: "100%", label: "Audit Trail" },
        { val: "Real-Time", label: "Results" },
        { val: "Any Device", label: "Accessibility" },
      ]}
      features={[
        { icon: "⬢", title: "End-to-End Encryption", desc: "Every vote is encrypted from submission to tallying — completely tamper-proof and verifiable." },
        { icon: "⬡", title: "Voter Authentication", desc: "Multi-factor identity verification ensures only eligible voters participate — no duplicate votes." },
        { icon: "◈", title: "Real-Time Results", desc: "Live vote tallying with instant results the moment voting closes — no manual counting, no delays." },
        { icon: "◉", title: "Full Audit Trail", desc: "Complete, immutable audit log of every action — satisfying regulatory and governance requirements." },
        { icon: "◎", title: "Flexible Voting Formats", desc: "Single choice, ranked choice, multi-candidate, and referendum formats — configurable per election." },
        { icon: "◬", title: "Custom Branding & Access", desc: "Branded voting portals with configurable voter eligibility, voting periods, and notifications." },
      ]}
      whoFor={["Corporations (AGMs, Board Elections)", "Unions & Associations", "Universities & Student Bodies", "Local Government", "Non-Profits", "Sporting Clubs & Committees"]}
      ctaHeading="Modernise Your Voting Process."
      ctaSub="Book a demo and see how our E-Voting System handles your specific election needs."
    />
  );
}