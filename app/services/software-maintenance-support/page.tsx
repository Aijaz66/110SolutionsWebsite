import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Software Maintenance & Support Services — 110 Solutions",
  description:
    "Reliable software maintenance and IT support services. Proactive maintenance, bug fixes, security updates, and SLA-backed technical support for your business systems.",
  keywords:
    "software maintenance services, IT support, software support services, application maintenance, bug fixing services, software helpdesk",
};

export default function MaintenanceSupportPage() {
  return (
    <ServicePageLayout
      // ── Hero
      eyebrow="Maintenance & Support"
      heading="Your Software, Running"
      headingTeal="Flawlessly. Always."
      intro="Software doesn't maintain itself. Our maintenance and support service keeps your technology performing at its best — so you can focus on your business, not your bugs."
      heroImage="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1920&q=80"
      ctaLabel="Get a Support Plan"
      // ── Overview
      overviewHeading="Proactive Support That"
      overviewHeadingTeal="Prevents Problems"
      overviewDesc="Most support teams wait for things to break. We monitor, optimise, and update your systems continuously — catching issues before they impact your users or your revenue."
      overviewImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
      overviewPoints={[
        "24/7 system monitoring with real-time alerting",
        "Proactive performance tuning and optimization",
        "Regular security patches and vulnerability assessments",
        "Dedicated account manager for enterprise clients",
        "Monthly health reports with actionable recommendations",
        "Flexible SLA tiers to match your business requirements",
      ]}
      // ── Features
      features={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
          ),
          title: "Bug Fixes & Patches",
          desc: "Rapid identification and resolution of issues before they impact your operations or your customers.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ),
          title: "Performance Optimisation",
          desc: "Regular audits and tuning to ensure your software runs at peak speed and efficiency under any load.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          ),
          title: "Security Updates",
          desc: "Proactive security patching, vulnerability assessments, and compliance monitoring to protect your data.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          ),
          title: "Feature Enhancements",
          desc: "Incremental improvements and new features added iteratively without disrupting your existing users.",
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
          title: "Server & Infrastructure",
          desc: "Monitoring, uptime management, and infrastructure scaling as your usage grows and demands change.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          ),
          title: "SLA-Backed Support",
          desc: "Defined response times, escalation paths, and dedicated account management for enterprise clients.",
        },
      ]}
      // ── Stats
      stats={[
        { end: 99, suffix: ".9%", label: "Uptime Guaranteed" },
        { end: 4, suffix: "hr", label: "Avg Response Time" },
        { end: 500, suffix: "+", label: "Issues Resolved" },
        { end: 100, suffix: "%", label: "Client Retention" },
      ]}
      // ── Process
      processSteps={[
        { step: "01", title: "System Audit", desc: "We analyse your existing codebase, infrastructure, and dependencies to establish a baseline." },
        { step: "02", title: "Support Plan", desc: "We design a tailored maintenance plan based on your system complexity, SLA requirements, and budget." },
        { step: "03", title: "Onboarding", desc: "We set up monitoring, alerting, documentation, and establish communication channels with your team." },
        { step: "04", title: "Proactive Monitoring", desc: "Continuous monitoring, regular health checks, and proactive issue resolution before they become incidents." },
        { step: "05", title: "Monthly Reporting", desc: "Detailed reports on uptime, performance metrics, issues resolved, and recommendations for improvement." },
      ]}
      processImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
      // ── Why Us
      whyHeading="Why Choose Us for"
      whyHeadingTeal="Ongoing Support"
      whyPoints={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          ),
          title: "Rapid Response Times",
          desc: "Critical issues are acknowledged within 1 hour and resolved within defined SLA windows — not days, not weeks.",
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
          title: "Dedicated Support Team",
          desc: "Not a generic helpdesk. You get a team that knows your codebase, your infrastructure, and your business.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          ),
          title: "Flexible Plans",
          desc: "From hourly support blocks to fully managed 24/7 plans — pick the model that matches your scale and budget.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          ),
          title: "Proactive, Not Reactive",
          desc: "We don't wait for things to break. Continuous monitoring and regular audits catch issues before your users do.",
        },
      ]}
      whyImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
      // ── FAQ
      faqs={[
        { q: "Do you only support software you've built?", a: "No. We support software built by any team — whether it's a legacy system, a third-party application, or something your in-house team developed. We'll audit the codebase, onboard, and provide full support." },
        { q: "What are your response times?", a: "Our standard SLA guarantees critical issue acknowledgement within 1 hour and resolution within 4 hours. We offer flexible SLA tiers for different business needs." },
        { q: "Can you work alongside our internal team?", a: "Absolutely. Many of our clients have internal developers. We complement their work by handling infrastructure, monitoring, security patches, and after-hours support." },
        { q: "What technologies do you support?", a: "We support a wide range of technologies including React, Next.js, Node.js, Python, .NET, PHP, WordPress, and cloud platforms like AWS, Azure, and Google Cloud." },
        { q: "How does pricing work?", a: "We offer flexible pricing — monthly retainer plans, hourly support blocks, or fully managed support packages. We'll recommend the best model after understanding your system complexity." },
        { q: "Is there a minimum contract period?", a: "Our standard plans start with a 3-month commitment to allow proper onboarding and baseline establishment. After that, plans are month-to-month with 30 days notice." },
      ]}
      // ── Bottom CTA
      ctaHeading="Need Reliable Software Support?"
      ctaSub="We offer flexible monthly support plans for businesses of all sizes. Let's talk."
    />
  );
}