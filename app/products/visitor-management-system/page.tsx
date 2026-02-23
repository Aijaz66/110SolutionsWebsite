// app/products/visitor-management-system/page.tsx
import type { Metadata } from "next";
import ProductPageLayout from "../ProductPageLayout";

export const metadata: Metadata = {
  title: "Visitor Management System Australia | Digital Check-In Software — 110 Solutions",
  description: "Smart visitor management software for Australian businesses. Digitise your front desk — visitor check-in, badge printing, host notifications, and compliance logs in one system.",
  keywords: "visitor management system Australia, digital visitor check-in, visitor tracking software, front desk management, reception management software, workplace visitor log Australia",
};

export default function VisitorManagementPage() {
  return (
    <ProductPageLayout
      breadcrumb="Visitor Management System"
      eyebrow="Visitor Management System"
      h1Line1="First Impressions, Secured."
      h1Teal="Visitors, Managed."
      intro="Your reception is the first touchpoint for every client, partner, and candidate who walks through your door. Our Visitor Management System replaces paper sign-in books with a smart, professional, and compliant digital experience — while keeping your premises secure."
      stats={[
        { val: "< 30 sec", label: "Check-In Time" },
        { val: "Instant", label: "Host Notifications" },
        { val: "GDPR/Privacy", label: "Compliant" },
        { val: "Badge", label: "Printing Ready" },
      ]}
      features={[
        { icon: "⬡", title: "Digital Check-In Kiosk", desc: "A sleek iPad or tablet kiosk replaces your paper sign-in book — visitors check in in under 30 seconds." },
        { icon: "◈", title: "Instant Host Notifications", desc: "Automatic SMS and email alerts to staff the moment their visitor checks in — no more reception chasing." },
        { icon: "◉", title: "Badge Printing", desc: "Automatic visitor badge printing with name, photo, host, and visit purpose for clear identification." },
        { icon: "◎", title: "Pre-Registration", desc: "Hosts pre-register expected visitors — who receive a QR code for express check-in on arrival." },
        { icon: "◬", title: "Compliance & Evacuation", desc: "Digital visitor log satisfies WHS compliance, and live roll calls support emergency evacuations." },
        { icon: "⬟", title: "NDA & Document Signing", desc: "Visitors digitally sign NDAs, safety inductions, or custom documents at check-in — auto-archived." },
      ]}
      whoFor={["Corporate Offices", "Government Buildings", "Schools & Universities", "Hospitals & Clinics", "Data Centres", "Construction Sites", "Hotels & Hospitality"]}
      ctaHeading="Ready to Upgrade Your Front Desk?"
      ctaSub="See the Visitor Management System in a 20-minute live demo. No commitment needed."
    />
  );
}