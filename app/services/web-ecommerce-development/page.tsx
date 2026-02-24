import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Web & E-Commerce Development | High-Converting Websites — 110 Solutions",
  description:
    "Professional web development and e-commerce solutions. 110 Solutions builds fast, SEO-optimised websites and online stores that drive traffic and convert visitors into customers.",
  keywords:
    "web development, ecommerce development, website development company, Next.js development, Shopify development, online store development",
};

export default function WebEcommercePage() {
  return (
    <ServicePageLayout
      // ── Hero
      eyebrow="Web & E-Commerce Development"
      heading="Websites That Rank."
      headingTeal="Stores That Sell."
      intro="A website is your most powerful sales asset — when it's built right. We design and develop high-performance websites and e-commerce platforms that load fast, rank on Google, and convert visitors into paying customers."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
      ctaLabel="Book a Free Consultation"
      // ── Overview
      overviewHeading="Performance, SEO, and"
      overviewHeadingTeal="Conversions — Built In"
      overviewDesc="Most websites look nice but perform terribly — slow load times, poor SEO, zero conversion optimisation. We take the opposite approach. Every site we build is engineered for speed, structured for search engines, and designed to turn visitors into customers from the first interaction."
      overviewImage="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80"
      overviewPoints={[
        "Sub-2 second load times and Core Web Vitals compliance as standard",
        "SEO-first architecture — schema markup, metadata, sitemaps, and crawlability",
        "Mobile-first responsive design across every device and screen size",
        "CMS integration so your team can update content without developers",
        "E-commerce with payment gateways, shipping, tax, and inventory management",
        "Analytics, heatmaps, and conversion tracking from day one",
      ]}
      // ── Features
      features={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          ),
          title: "Next.js & React Development",
          desc: "Lightning-fast, SEO-friendly web applications built on the most modern stack available — server-side rendering, static generation, and edge functions.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
            </svg>
          ),
          title: "E-Commerce Platforms",
          desc: "Custom-built stores or Shopify/WooCommerce implementations — optimised for conversion, upselling, and seamless checkout from day one.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          ),
          title: "SEO-First Architecture",
          desc: "Every site is structured for search — proper schema markup, Core Web Vitals, metadata, sitemaps, and crawl-friendly URL structures.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          ),
          title: "CMS Integration",
          desc: "Sanity, Contentful, Strapi, or WordPress — your marketing team can update content, blog posts, and pages without touching code.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          ),
          title: "Payments & Logistics",
          desc: "Stripe, PayPal, Afterpay integrations plus shipping calculators, tax automation, and real-time inventory management.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ),
          title: "Performance Optimisation",
          desc: "Sub-2 second load times, image optimisation, lazy loading, CDN delivery, and Core Web Vitals compliance as a baseline standard.",
        },
      ]}
      // ── Stats
      stats={[
        { end: 80, suffix: "+", label: "Websites Delivered" },
        { end: 95, suffix: "+", label: "Google PageSpeed Score" },
        { end: 3, suffix: "x", label: "Avg Conversion Lift" },
        { end: 100, suffix: "%", label: "Mobile Responsive" },
      ]}
      // ── Process
      processSteps={[
        { step: "01", title: "Discovery & Strategy", desc: "We define your goals, target audience, sitemap, and content strategy. Competitive analysis and SEO keyword research included." },
        { step: "02", title: "UX/UI Design", desc: "Wireframes and visual mockups for every page — designed for conversion, brand alignment, and seamless user journeys." },
        { step: "03", title: "Development", desc: "Clean, semantic code built with Next.js/React. Server-side rendering, SEO structure, CMS integration, and responsive design across all breakpoints." },
        { step: "04", title: "E-Commerce Setup", desc: "Product catalogue, payment gateways, shipping rules, tax configuration, and checkout flow optimisation — all tested end-to-end." },
        { step: "05", title: "QA & Performance", desc: "Cross-browser testing, mobile testing, Core Web Vitals optimisation, accessibility audit, and security review before launch." },
        { step: "06", title: "Launch & Growth", desc: "Zero-downtime deployment, analytics setup, SEO submission, and ongoing support for content updates, A/B testing, and feature additions." },
      ]}
      processImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
      // ── Why Us
      whyHeading="Why Build Your Website with"
      whyHeadingTeal="110 Solutions"
      whyPoints={[
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ),
          title: "Speed as a Feature",
          desc: "Every site scores 95+ on Google PageSpeed. Fast sites rank higher, convert better, and keep users engaged — we treat performance as a core feature, not an afterthought.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          ),
          title: "SEO Built In, Not Bolted On",
          desc: "SEO isn't a plugin we add at the end. It's baked into the architecture — semantic HTML, structured data, metadata, internal linking, and crawl optimization from the ground up.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          ),
          title: "Conversion-Focused Design",
          desc: "Every page is designed with a clear goal — whether it's a purchase, a lead form, or a phone call. We use data and UX best practices to maximise every visitor interaction.",
        },
        {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
          ),
          title: "Ongoing Support & Growth",
          desc: "Post-launch, we provide content updates, A/B testing, SEO monitoring, performance tuning, and feature enhancements to keep your site growing.",
        },
      ]}
      whyImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      // ── FAQ
      faqs={[
        { q: "Do you build on WordPress or custom code?", a: "Both. For content-heavy marketing sites, WordPress or headless CMS (Sanity, Contentful) works great. For web applications and high-performance sites, we build custom with Next.js and React. We'll recommend the best approach for your needs." },
        { q: "How long does it take to build a website?", a: "A marketing website typically takes 4-6 weeks. E-commerce sites with product catalogues, payments, and shipping take 6-10 weeks. Complex web applications may take longer. We provide a detailed timeline after scoping." },
        { q: "How much does a website cost?", a: "Marketing websites start from $10K. E-commerce sites range from $20K-$60K depending on complexity. Custom web applications start from $30K. We provide fixed-price quotes after understanding your requirements." },
        { q: "Will my site be SEO-friendly?", a: "Absolutely. SEO is built into our development process from day one — semantic HTML, schema markup, optimised metadata, fast load times, mobile-first design, and proper URL structures. We also provide SEO launch guidance." },
        { q: "Can I update the site myself?", a: "Yes. Every site we build includes a CMS (content management system) that lets your team update text, images, blog posts, and pages without any technical knowledge or developer involvement." },
        { q: "Do you offer e-commerce with Shopify?", a: "Yes. We build both custom e-commerce solutions and Shopify implementations. For businesses wanting a quick launch with a proven platform, Shopify is excellent. For businesses needing full customisation, we build bespoke solutions." },
      ]}
      // ── Bottom CTA
      ctaHeading="Ready to Launch a Website That Performs?"
      ctaSub="Get a free quote and timeline for your web or e-commerce project."
    />
  );
}