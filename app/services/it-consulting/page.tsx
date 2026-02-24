import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "IT Consulting Services | Technology Strategy & Advisory — 110 Solutions",
  description:
    "Strategic IT consulting services. 110 Solutions helps businesses align technology investments with business goals through expert advisory, technology audits, and digital transformation planning.",
  keywords:
    "IT consulting, technology consulting firm, digital transformation consulting, IT strategy consulting, technology advisory, IT roadmap planning",
};

export default function ITConsultingPage() {
  return (
    <ServicePageLayout
      // ── Hero
      eyebrow="IT Consulting"
      heading="Smarter Technology Decisions"
      headingTeal="Start Here."
      intro="Technology investments are significant. Making the wrong ones is costly. Our senior technology strategists help you plan, prioritise, and execute with confidence — so every IT dollar delivers measurable ROI."
      heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
      ctaLabel="Book a Strategy Session"
      // ── Overview
      overviewHeading="Technology Advisory That"
      overviewHeadingTeal="Drives ROI"
      overviewDesc="Most businesses don't have a technology problem — they have a strategy problem. They invest in the wrong tools, at the wrong time, for the wrong reasons. We fix that. Our consultants bring real-world enterprise experience to help you make decisions that align technology with business outcomes."
      overviewImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
      overviewPoints={[
        "Independent, vendor-neutral technology recommendations",
        "12–36 month IT roadmaps aligned with growth objectives",
        "Cost-benefit analysis for every technology decision",
        "Technical debt assessment and remediation planning",
        "Digital transformation strategy tailored to your maturity level",
        "Hands-on support through execution — not just a slide deck",
      ]}
      // ── Features
      features={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          ),
          title: "Technology Audits",
          desc: "A thorough assessment of your current tech stack — identifying gaps, risks, inefficiencies, and opportunities for improvement.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ),
          title: "Digital Transformation Strategy",
          desc: "A clear, prioritised roadmap for modernising your operations with the right technology at the right time and budget.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          ),
          title: "IT Roadmap Planning",
          desc: "12–36 month technology roadmaps with clear milestones, resource requirements, and budget allocations aligned to your growth.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          ),
          title: "Vendor & Platform Selection",
          desc: "Unbiased evaluation and recommendation of software vendors, cloud platforms, and technology partners — no kickbacks, no bias.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          ),
          title: "Architecture Review",
          desc: "Assessment of existing systems for scalability, security, and technical debt — with an actionable remediation plan and cost estimates.",
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
          title: "Change Management",
          desc: "Helping your team adopt new technology through structured training, documentation, and phased rollout planning.",
        },
      ]}
      // ── Stats
      stats={[
        { end: 40, suffix: "+", label: "Consulting Engagements" },
        { end: 30, suffix: "%", label: "Avg Cost Savings" },
        { end: 12, suffix: "+", label: "Industries Advised" },
        { end: 100, suffix: "%", label: "Client Satisfaction" },
      ]}
      // ── Process
      processSteps={[
        { step: "01", title: "Initial Assessment", desc: "A free 30-minute session where we understand your business challenges, current technology landscape, and strategic goals." },
        { step: "02", title: "Deep-Dive Audit", desc: "We conduct a comprehensive audit of your systems, infrastructure, team capabilities, and technology spend." },
        { step: "03", title: "Strategy & Recommendations", desc: "We deliver a detailed report with findings, prioritised recommendations, cost-benefit analysis, and a proposed roadmap." },
        { step: "04", title: "Roadmap Alignment", desc: "We work with your leadership to refine the roadmap, align budgets, and establish clear milestones and success metrics." },
        { step: "05", title: "Execution Support", desc: "Unlike most consultants, we stay involved through execution — helping with vendor selection, project oversight, and implementation." },
      ]}
      processImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
      // ── Why Us
      whyHeading="Why Choose Our"
      whyHeadingTeal="Advisory Services"
      whyPoints={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          ),
          title: "Vendor-Neutral Advice",
          desc: "We don't sell software. We don't take vendor kickbacks. Our recommendations are 100% independent and based purely on what's right for your business.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
          ),
          title: "Real-World Experience",
          desc: "Our consultants have built and scaled enterprise systems — they understand both the strategic and technical sides of every recommendation.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          ),
          title: "ROI-Focused",
          desc: "Every recommendation includes a clear business case with projected ROI, payback period, and risk assessment — not vague platitudes.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
          ),
          title: "Execution, Not Just Advice",
          desc: "We don't just hand you a report and disappear. We stay involved through execution — managing vendors, overseeing implementation, and measuring outcomes.",
        },
      ]}
      whyImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
      // ── FAQ
      faqs={[
        { q: "What does an IT consulting engagement look like?", a: "It typically starts with a free 30-minute strategy session. If there's a fit, we move into a deep-dive audit (1-2 weeks), followed by a strategy report with recommendations. From there, we can support execution on an ongoing basis." },
        { q: "Do you only consult, or do you implement too?", a: "Both. Unlike traditional consulting firms that hand you a report and leave, we stay involved through implementation — whether that's building custom software, migrating to the cloud, or managing vendor relationships." },
        { q: "How much does IT consulting cost?", a: "Consulting engagements typically range from $5K for focused assessments to $30K+ for comprehensive digital transformation strategies. We provide a clear quote after the initial strategy session." },
        { q: "Is the initial strategy session really free?", a: "Yes. The 30-minute strategy session is completely free with no obligation. It helps us understand your challenges and helps you evaluate whether we're the right fit." },
        { q: "What industries do you specialise in?", a: "We've consulted for businesses across retail, education, healthcare, finance, logistics, manufacturing, and government. Our approach adapts to any industry because we focus on business outcomes, not industry-specific tools." },
        { q: "Can you help us reduce our current IT spend?", a: "Absolutely. Most clients see 20-40% cost reduction through our audits — we identify redundant tools, underutilised licenses, overprovisioned infrastructure, and inefficient processes." },
      ]}
      // ── Bottom CTA
      ctaHeading="Not Sure Where to Start with Your IT Strategy?"
      ctaSub="Book a complimentary 30-minute strategy session with one of our senior consultants."
    />
  );
}