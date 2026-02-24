import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cloud Migration & Hosting Services | AWS, Azure & GCP — 110 Solutions",
  description:
    "Expert cloud migration and managed hosting services. 110 Solutions migrates businesses to AWS, Azure, and Google Cloud with zero downtime, reducing infrastructure costs and boosting scalability.",
  keywords:
    "cloud migration, AWS migration, Azure migration, cloud hosting services, managed cloud services, Google Cloud migration, cloud consulting",
};

export default function CloudMigrationPage() {
  return (
    <ServicePageLayout
      // ── Hero
      eyebrow="Cloud Migration & Hosting"
      heading="Move to the Cloud."
      headingTeal="Without the Headaches."
      intro="Cloud migration done wrong causes downtime, data loss, and ballooning costs. Done right, it reduces overhead, unlocks scalability, and lets your team work from anywhere. We do it right."
      heroImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80"
      ctaLabel="Book a Free Assessment"
      // ── Overview
      overviewHeading="Migrate Smarter, Not"
      overviewHeadingTeal="Harder"
      overviewDesc="We don't just lift-and-shift your servers into the cloud. We re-architect, optimise, and modernise your infrastructure so you get the full benefits of cloud computing — not just a more expensive version of what you already had."
      overviewImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
      overviewPoints={[
        "Full infrastructure audit before a single resource is moved",
        "Cost modelling so you know exactly what you'll spend — before and after",
        "Zero-downtime migration with phased rollout and rollback plans",
        "Multi-cloud strategy across AWS, Azure, and Google Cloud",
        "Post-migration optimisation to eliminate waste and reduce costs",
        "Ongoing managed hosting with 24/7 monitoring and alerting",
      ]}
      // ── Features
      features={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5z" />
              <path d="M6 9.01V9" />
              <path d="M15 5l6.3 6.3a2.4 2.4 0 010 3.4L17 19" />
            </svg>
          ),
          title: "Cloud Readiness Assessment",
          desc: "We audit your existing infrastructure and workloads to create a tailored migration strategy with clear cost projections.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
            </svg>
          ),
          title: "AWS Migration",
          desc: "Full migration to Amazon Web Services — EC2, S3, RDS, Lambda — with architecture optimised for your workloads.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
          ),
          title: "Azure Migration",
          desc: "Microsoft Azure migration for businesses in the Microsoft ecosystem — seamless, secure, and fully managed.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          ),
          title: "Google Cloud Platform",
          desc: "GCP migrations leveraging BigQuery, Cloud Run, and Kubernetes for data-intensive and containerised workloads.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ),
          title: "Zero-Downtime Migration",
          desc: "Our phased migration approach ensures your systems stay online throughout — no business disruption, no data loss.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          ),
          title: "Managed Cloud Hosting",
          desc: "Ongoing cloud management, monitoring, cost optimisation, and security compliance so you never have to worry.",
        },
      ]}
      // ── Stats
      stats={[
        { end: 40, suffix: "%", label: "Avg Cost Reduction" },
        { end: 99, suffix: ".9%", label: "Uptime Delivered" },
        { end: 0, suffix: "Zero", label: "Downtime Migrations" },
        { end: 50, suffix: "+", label: "Cloud Projects" },
      ]}
      // ── Process
      processSteps={[
        { step: "01", title: "Discovery & Audit", desc: "We map your existing infrastructure — servers, databases, dependencies, traffic patterns — and identify migration candidates." },
        { step: "02", title: "Strategy & Architecture", desc: "We design the target cloud architecture, select services, model costs, and create a phased migration roadmap." },
        { step: "03", title: "Environment Setup", desc: "We provision cloud resources, configure networking, set up security groups, IAM roles, and CI/CD pipelines." },
        { step: "04", title: "Phased Migration", desc: "Workloads are migrated in phases — starting with low-risk systems, validating at each stage before moving critical services." },
        { step: "05", title: "Testing & Validation", desc: "Full load testing, failover testing, and performance benchmarking against pre-migration baselines." },
        { step: "06", title: "Go Live & Optimise", desc: "DNS cutover, final validation, then ongoing monitoring and cost optimisation to ensure you're getting maximum value." },
      ]}
      processImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
      // ── Why Us
      whyHeading="Why Migrate with"
      whyHeadingTeal="110 Solutions"
      whyPoints={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
            </svg>
          ),
          title: "Multi-Cloud Expertise",
          desc: "AWS, Azure, and GCP — we're certified across all three platforms and recommend the best fit for your workloads, not our preferences.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          ),
          title: "Cost-First Approach",
          desc: "We model costs before migration so there are no surprises. Post-migration, we continuously optimise to eliminate cloud waste.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          ),
          title: "Security at Every Layer",
          desc: "Encryption in transit and at rest, IAM best practices, network segmentation, and regular compliance audits — security isn't an afterthought.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          ),
          title: "Post-Migration Support",
          desc: "We don't disappear after go-live. Ongoing managed hosting, monitoring, patching, and performance tuning are part of the deal.",
        },
      ]}
      whyImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
      // ── FAQ
      faqs={[
        { q: "How long does a typical cloud migration take?", a: "It depends on the complexity. A straightforward migration of a few services can be done in 2-4 weeks. Large enterprise migrations with multiple databases, legacy integrations, and compliance requirements typically take 2-4 months with our phased approach." },
        { q: "Will there be downtime during migration?", a: "No. Our phased migration approach ensures zero downtime. We run parallel environments, validate at each stage, and only cut over DNS when everything is tested and confirmed working." },
        { q: "Which cloud provider do you recommend?", a: "It depends on your workloads. AWS is great for general-purpose workloads, Azure excels for Microsoft-heavy environments, and GCP is ideal for data analytics and ML workloads. We'll recommend the best fit after auditing your systems." },
        { q: "Can you migrate legacy systems to the cloud?", a: "Yes. We've migrated legacy .NET, Java, and PHP applications to the cloud. In some cases we re-platform or re-architect components for better cloud-native performance, but we always start with a thorough assessment." },
        { q: "What about ongoing cloud costs?", a: "We provide detailed cost modelling before migration so you know exactly what to expect. After migration, we continuously monitor and optimise your cloud spend — most clients see a 30-40% reduction in infrastructure costs within the first year." },
        { q: "Do you offer managed hosting after migration?", a: "Absolutely. Most clients choose our managed cloud hosting service which includes 24/7 monitoring, automated backups, security patching, scaling management, and monthly performance reports." },
      ]}
      // ── Bottom CTA
      ctaHeading="Ready to Move to the Cloud?"
      ctaSub="Get a free cloud readiness assessment and migration cost estimate for your business."
    />
  );
}