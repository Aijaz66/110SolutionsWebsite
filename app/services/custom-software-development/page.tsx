import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Custom Software Development | Bespoke Enterprise Solutions — 110 Solutions",
  description:
    "110 Solutions builds custom software tailored to your exact business requirements. Agile, scalable, and fully supported enterprise software development.",
  keywords:
    "custom software development, bespoke software development, enterprise software development company, custom application development, software development company",
};

export default function CustomSoftwarePage() {
  return (
    <ServicePageLayout
      // ── Hero
      eyebrow="Custom Software Development"
      heading="Software Built Around"
      headingTeal="Your Business."
      intro="Off-the-shelf software forces your team to work around its limitations. Custom software eliminates those limitations entirely — engineered to fit your exact workflows, integrate with your systems, and scale as you grow."
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
      ctaLabel="Book a Free Consultation"
      // ── Overview
      overviewHeading="Why Custom Software"
      overviewHeadingTeal="Wins"
      overviewDesc="Generic tools create workarounds, data silos, and frustrated teams. Custom software does the opposite — it maps directly to how your business actually operates, eliminates manual processes, and gives you a competitive edge no off-the-shelf product can match."
      overviewImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
      overviewPoints={[
        "Software designed around your workflows, not the other way around",
        "Full integration with your existing ERP, CRM, and third-party APIs",
        "100% IP ownership — no licensing fees, no vendor lock-in",
        "Scalable architecture built for 10 users or 10,000",
        "Ongoing support and feature development post-launch",
        "Cross-platform delivery — web, mobile, desktop, and cloud",
      ]}
      // ── Features
      features={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
          ),
          title: "Requirements Analysis",
          desc: "Deep-dive into your business logic, workflows, edge cases, and pain points before a single line of code is written.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          ),
          title: "Scalable Architecture",
          desc: "Microservices, cloud-native patterns, and modular design so your software grows effortlessly with your business.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          ),
          title: "Agile Development",
          desc: "Iterative sprints with weekly demos, real-time feedback loops, and full transparency into progress.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          ),
          title: "API & System Integration",
          desc: "Seamless connections to your existing tools — ERP, CRM, payment gateways, accounting systems, and third-party APIs.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          ),
          title: "Quality Assurance",
          desc: "Automated testing, manual testing, load testing, and security audits — every release is production-ready.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
          ),
          title: "Post-Launch Support",
          desc: "Ongoing maintenance, performance monitoring, feature enhancements, and dedicated technical support after go-live.",
        },
      ]}
      // ── Stats
      stats={[
        { end: 100, suffix: "+", label: "Projects Delivered" },
        { end: 99, suffix: "%", label: "On-Time Delivery" },
        { end: 8, suffix: "+", label: "Industries Served" },
        { end: 24, suffix: "/7", label: "Post-Launch Support" },
      ]}
      // ── Process
      processSteps={[
        { step: "01", title: "Discovery & Scoping", desc: "We deep-dive into your business, workflows, and pain points to define exactly what needs to be built — and why." },
        { step: "02", title: "Architecture & Design", desc: "Our architects design a scalable technical foundation. UI/UX design ensures the product is intuitive from day one." },
        { step: "03", title: "Agile Development", desc: "We develop in iterative sprints with regular demos. You see progress weekly — no black boxes, no surprises." },
        { step: "04", title: "Testing & QA", desc: "Rigorous automated and manual testing across all environments before any code reaches production." },
        { step: "05", title: "Deployment & Launch", desc: "Smooth, zero-downtime deployment with full monitoring. We handle everything from infrastructure to go-live." },
        { step: "06", title: "Support & Evolution", desc: "Ongoing maintenance, feature development, and technical support to keep your software ahead of your business needs." },
      ]}
      processImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
      // ── Why Us
      whyHeading="Why Build with"
      whyHeadingTeal="110 Solutions"
      whyPoints={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          ),
          title: "Full IP Ownership",
          desc: "You own 100% of the source code, documentation, and intellectual property. No lock-in, no licensing surprises, no hidden fees.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
          ),
          title: "Dedicated Team",
          desc: "A committed squad of developers, designers, and project managers — not freelancers juggling multiple clients.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          ),
          title: "Transparent Pricing",
          desc: "Fixed-price or time-and-materials — your choice. Detailed estimates upfront with no scope creep surprises.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ),
          title: "Battle-Tested Stack",
          desc: "React, Next.js, Node.js, Python, .NET, and cloud-native infrastructure — modern technologies proven at enterprise scale.",
        },
      ]}
      whyImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
      // ── FAQ
      faqs={[
        { q: "How long does a custom software project typically take?", a: "It depends on complexity. A focused MVP can be delivered in 6-8 weeks. Full enterprise applications typically take 3-6 months. We'll give you a detailed timeline after the discovery phase." },
        { q: "How much does custom software development cost?", a: "Projects range from $25K for focused applications to $200K+ for complex enterprise systems. We provide fixed-price quotes after scoping so there are no surprises." },
        { q: "Do we own the code?", a: "Yes, 100%. All source code, documentation, design assets, and intellectual property belong to you from day one. No licensing fees, no lock-in." },
        { q: "Can you integrate with our existing systems?", a: "Absolutely. We regularly integrate with ERPs (SAP, Oracle), CRMs (Salesforce, HubSpot), payment gateways (Stripe, PayPal), and custom APIs. Integration architecture is planned during the discovery phase." },
        { q: "What technologies do you use?", a: "Our primary stack includes React/Next.js, Node.js, Python, .NET, PostgreSQL, and cloud platforms (AWS, Azure, GCP). We select the best technology for each project based on your requirements." },
        { q: "What happens after launch?", a: "We offer ongoing maintenance and support plans that include bug fixes, performance monitoring, security updates, and feature enhancements. Most clients transition to a monthly support plan after launch." },
      ]}
      // ── Bottom CTA
      ctaHeading="Ready to Build Your Custom Solution?"
      ctaSub="Share your requirements and we'll scope your project for free. No obligation."
    />
  );
}