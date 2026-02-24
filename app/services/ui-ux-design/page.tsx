import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "UI/UX Design Services | User Experience Design — 110 Solutions",
  description:
    "Professional UI/UX design services. 110 Solutions creates intuitive, research-driven user interfaces that reduce friction, increase engagement, and drive measurable business results.",
  keywords:
    "UI UX design, user experience design, UX design agency, web design company, app UI design, product design services",
};

export default function UIUXDesignPage() {
  return (
    <ServicePageLayout
      // ── Hero
      eyebrow="UI/UX Design"
      heading="Design That Puts"
      headingTeal="Users First."
      intro="Great software is built on great design. We create interfaces that are intuitive, beautiful, and aligned with how your users actually think and behave — reducing support overhead, increasing retention, and driving measurable conversions."
      heroImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80"
      ctaLabel="Book a Design Consultation"
      // ── Overview
      overviewHeading="Research-Driven Design,"
      overviewHeadingTeal="Not Guesswork"
      overviewDesc="Most design fails because it's based on assumptions, not evidence. We start with real user research — interviews, analytics, and behavioral data — to understand exactly how your audience thinks, navigates, and makes decisions. Every pixel we place has a reason behind it."
      overviewImage="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80"
      overviewPoints={[
        "User research and persona development before any design begins",
        "Interactive prototypes you can test with real users before development",
        "Scalable design systems for long-term product consistency",
        "Accessibility compliance (WCAG 2.1) built into every design",
        "Data-driven iterations based on usability testing and analytics",
        "Seamless developer handoff with pixel-perfect specifications",
      ]}
      // ── Features
      features={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
          ),
          title: "User Research & Personas",
          desc: "We research your actual users — their behaviours, goals, and frustrations — to ground every design decision in reality, not assumption.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          ),
          title: "Information Architecture",
          desc: "Structuring content and navigation so users always know where they are and can find what they need in the fewest possible steps.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
          ),
          title: "Wireframing & Prototyping",
          desc: "Low and high-fidelity interactive prototypes that let you test, validate, and iterate before a single line of code is written.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          ),
          title: "Visual & UI Design",
          desc: "Pixel-perfect interface design with cohesive typography, colour systems, spacing, and visual hierarchy that delights users.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          ),
          title: "Design System Creation",
          desc: "A scalable component library with documented tokens, patterns, and guidelines that keeps your product visually consistent as it grows.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          ),
          title: "Usability Testing",
          desc: "Testing with real users to identify friction points, validate design hypotheses, and ensure the experience works before launch.",
        },
      ]}
      // ── Stats
      stats={[
        { end: 60, suffix: "+", label: "Products Designed" },
        { end: 40, suffix: "%", label: "Avg Conversion Lift" },
        { end: 50, suffix: "%", label: "Reduced Support Tickets" },
        { end: 100, suffix: "%", label: "Accessible Designs" },
      ]}
      // ── Process
      processSteps={[
        { step: "01", title: "Research & Discovery", desc: "User interviews, analytics review, competitive analysis, and stakeholder workshops to understand the problem space deeply." },
        { step: "02", title: "Information Architecture", desc: "Site maps, user flows, and content hierarchy to structure the experience logically before any visual design begins." },
        { step: "03", title: "Wireframes & Prototypes", desc: "Low-fidelity wireframes evolve into interactive high-fidelity prototypes that stakeholders and users can test hands-on." },
        { step: "04", title: "Visual Design", desc: "Polished UI design with a complete design system — colours, typography, components, icons, and micro-interactions." },
        { step: "05", title: "Usability Testing", desc: "Testing with real users to validate the design, identify friction, and iterate before handoff to development." },
        { step: "06", title: "Developer Handoff", desc: "Pixel-perfect specs, annotated designs, exportable assets, and design tokens delivered in Figma for seamless implementation." },
      ]}
      processImage="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80"
      // ── Why Us
      whyHeading="Why Design with"
      whyHeadingTeal="110 Solutions"
      whyPoints={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          ),
          title: "Research Over Assumptions",
          desc: "Every design decision is backed by user research, analytics, and testing — not personal preferences or trends. Evidence-driven design delivers results.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          ),
          title: "Design + Development Alignment",
          desc: "Our designers work alongside our developers. That means designs are always feasible, performant, and implemented exactly as intended.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          ),
          title: "Measurable Impact",
          desc: "We track conversion rates, task completion rates, and user satisfaction scores — proving that design improvements deliver real business ROI.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          ),
          title: "Scalable Design Systems",
          desc: "We don't just design screens — we build complete design systems that keep your product consistent as it scales across teams and platforms.",
        },
      ]}
      whyImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
      // ── FAQ
      faqs={[
        { q: "Do you only design, or do you build too?", a: "Both. We offer end-to-end design and development. Many clients engage us for design first, then continue with development. But we also offer standalone design services if you have an in-house development team." },
        { q: "What tools do you use?", a: "We primarily use Figma for UI/UX design, prototyping, and design systems. For user research we use tools like Hotjar, Maze, and Google Analytics. All deliverables are provided in Figma with full developer handoff." },
        { q: "How long does a design project take?", a: "A focused UX audit takes 1-2 weeks. A complete product design (research through final UI) typically takes 4-8 weeks depending on complexity. Design systems take an additional 2-3 weeks." },
        { q: "How much does UI/UX design cost?", a: "Design projects range from $8K for focused redesigns to $40K+ for comprehensive product design with research, prototyping, testing, and design system creation. We provide a detailed quote after understanding your scope." },
        { q: "Can you redesign an existing product?", a: "Absolutely. We frequently redesign existing web and mobile applications. We start with a UX audit to identify the biggest improvement opportunities, then redesign iteratively with usability testing at each stage." },
        { q: "Do you do usability testing?", a: "Yes. We conduct moderated and unmoderated usability tests with real users at key stages of the design process. This ensures we catch friction points and validate solutions before any development investment." },
      ]}
      // ── Bottom CTA
      ctaHeading="Ready to Elevate Your User Experience?"
      ctaSub="Share your project and we'll show you what great design can do for your product."
    />
  );
}