import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Mobile App Development | iOS & Android Apps — 110 Solutions",
  description:
    "Expert mobile app development. 110 Solutions builds high-performance iOS and Android apps for businesses of all sizes. Native, React Native & Flutter development.",
  keywords:
    "mobile app development, iOS app development, Android app development, React Native development, app development company, Flutter development",
};

export default function MobileAppPage() {
  return (
    <ServicePageLayout
      // ── Hero
      eyebrow="Mobile App Development"
      heading="Mobile Apps That Users"
      headingTeal="Keep Coming Back To."
      intro="A great mobile app is more than a digital product — it's a direct channel to your customers. We build iOS and Android applications that combine flawless performance with exceptional design, turning first-time users into loyal advocates."
      heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1920&q=80"
      ctaLabel="Book a Free Consultation"
      // ── Overview
      overviewHeading="Built for Performance."
      overviewHeadingTeal="Designed for Retention."
      overviewDesc="We don't just build apps that work — we build apps that perform. Every decision, from architecture to micro-animation, is made with one goal: keeping your users engaged and coming back. Whether it's native iOS, Android, or cross-platform — we deliver apps your customers actually want to use."
      overviewImage="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
      overviewPoints={[
        "Sub-3 second load times as a baseline standard",
        "Offline-first functionality where applicable",
        "Accessibility compliance (WCAG 2.1) built in",
        "Analytics, crash reporting, and performance monitoring from day one",
        "App Store Optimisation (ASO) guidance for maximum discoverability",
        "Push notifications, deep linking, and engagement tooling",
      ]}
      // ── Features
      features={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          ),
          title: "iOS Development",
          desc: "Native Swift applications optimised for the Apple ecosystem — performance, design, and App Store compliance guaranteed.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <path d="M12 18h.01" />
              <path d="M8 6h8" />
            </svg>
          ),
          title: "Android Development",
          desc: "Native Kotlin apps built for the full Android device range, with Google Play Store submission and optimisation handled.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          ),
          title: "React Native (Cross-Platform)",
          desc: "One codebase, two platforms. Faster time-to-market without sacrificing native performance or user experience.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          ),
          title: "Flutter Development",
          desc: "Google's UI toolkit for building natively compiled apps with stunning interfaces across mobile, web, and desktop.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          ),
          title: "API & Third-Party Integrations",
          desc: "Payment gateways, maps, push notifications, biometrics, social logins, and any third-party API — fully integrated.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
          ),
          title: "Post-Launch Maintenance",
          desc: "Ongoing support, OS compatibility updates, performance monitoring, security patches, and feature additions after launch.",
        },
      ]}
      // ── Stats
      stats={[
        { end: 50, suffix: "+", label: "Apps Delivered" },
        { end: 4, suffix: ".8★", label: "Avg App Rating" },
        { end: 6, suffix: "-16 wks", label: "Typical Timeline" },
        { end: 100, suffix: "%", label: "Store Approval Rate" },
      ]}
      // ── Process
      processSteps={[
        { step: "01", title: "Discovery & Strategy", desc: "We define your app's purpose, target audience, core features, and success metrics. Competitive analysis and user personas included." },
        { step: "02", title: "UX/UI Design", desc: "Wireframes, interactive prototypes, and polished visual design — tested with real users before development begins." },
        { step: "03", title: "Agile Development", desc: "Iterative sprints with weekly builds you can test on your device. Transparent progress with no surprises." },
        { step: "04", title: "Quality Assurance", desc: "Testing across devices, OS versions, screen sizes, and network conditions. Automated and manual testing for complete coverage." },
        { step: "05", title: "App Store Launch", desc: "We handle everything — store listings, screenshots, metadata, compliance reviews, and submission to Apple App Store and Google Play." },
        { step: "06", title: "Growth & Iteration", desc: "Post-launch analytics, user feedback integration, A/B testing, and continuous feature releases to drive engagement and retention." },
      ]}
      processImage="https://images.unsplash.com/photo-1596742578443-7682ef5251cd?auto=format&fit=crop&w=800&q=80"
      // ── Why Us
      whyHeading="Why Build Your App with"
      whyHeadingTeal="110 Solutions"
      whyPoints={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          ),
          title: "Platform Experts",
          desc: "Dedicated iOS, Android, React Native, and Flutter specialists — not generalists. Each platform gets the expertise it deserves.",
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
          title: "Design-First Approach",
          desc: "Every app starts with UX research and interactive prototypes. You see and test the experience before a single line of code is written.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ),
          title: "Performance Obsessed",
          desc: "Sub-3 second loads, smooth 60fps animations, and minimal battery drain. We optimise every millisecond of the user experience.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          ),
          title: "Post-Launch Growth",
          desc: "We don't disappear after launch. Analytics integration, A/B testing, feature iterations, and ASO to drive downloads and retention.",
        },
      ]}
      whyImage="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80"
      // ── FAQ
      faqs={[
        { q: "Should I build native or cross-platform?", a: "It depends on your requirements. Native (Swift/Kotlin) gives the best performance and platform-specific features. Cross-platform (React Native/Flutter) is faster to market and more cost-effective for apps that don't need heavy platform-specific functionality. We'll recommend the best approach after understanding your use case." },
        { q: "How long does it take to build a mobile app?", a: "A focused MVP typically takes 6-10 weeks. Feature-rich applications take 12-16 weeks. Complex enterprise apps may take longer. We'll provide a detailed timeline after the discovery phase." },
        { q: "How much does mobile app development cost?", a: "Apps range from $20K for a focused MVP to $150K+ for complex, feature-rich applications. We provide fixed-price quotes after scoping so you know exactly what to expect." },
        { q: "Do you handle App Store submission?", a: "Yes, completely. We manage the entire submission process for both Apple App Store and Google Play — including screenshots, metadata, compliance reviews, and addressing any review feedback." },
        { q: "Can you update an existing app?", a: "Absolutely. We regularly take over and modernise existing mobile apps — whether it's a redesign, performance optimisation, new feature development, or migrating to a new framework." },
        { q: "Do you provide ongoing support after launch?", a: "Yes. Most clients move to a monthly support plan that covers OS compatibility updates, bug fixes, performance monitoring, security patches, and feature enhancements." },
      ]}
      // ── Bottom CTA
      ctaHeading="Have an App Idea?"
      ctaSub="Book a free discovery call and we'll scope your mobile app project — no commitment required."
    />
  );
}