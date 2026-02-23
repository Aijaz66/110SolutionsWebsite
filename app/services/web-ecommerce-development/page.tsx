// app/services/web-ecommerce-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Web & E-Commerce Development Australia | High-Converting Websites — 110 Solutions",
  description:
    "Professional web development and e-commerce solutions in Australia. 110 Solutions builds fast, SEO-optimised websites and online stores that drive traffic and convert visitors into customers.",
  keywords:
    "web development Australia, ecommerce development Australia, website development company, Next.js development, Shopify development Australia, online store development",
};

export default function WebEcommercePage() {
  const features = [
    { icon: "⬡", title: "Next.js & React Development", desc: "Lightning-fast, SEO-friendly web applications built on the most modern stack available." },
    { icon: "◈", title: "E-Commerce Platforms", desc: "Custom-built stores or Shopify/WooCommerce implementations — optimised for conversion from day one." },
    { icon: "◉", title: "SEO-First Architecture", desc: "Every site we build is structured for search — proper schema, Core Web Vitals, metadata, and sitemap." },
    { icon: "◎", title: "CMS Integration", desc: "Sanity, Contentful, or WordPress — your team can update content without touching code." },
    { icon: "◬", title: "Payment & Logistics", desc: "Stripe, PayPal, Afterpay integrations plus shipping, tax, and inventory management." },
    { icon: "⬟", title: "Performance Optimisation", desc: "Sub-2 second load times, Core Web Vitals compliance, and CDN delivery as standard." },
  ];
  return (
    <main className="bg-[#060a0e] text-white">
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0070de]/[0.05] blur-[110px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link><span>/</span>
            <span className="text-[#54c7c2]">Web & E-Commerce Development</span>
          </nav>
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Web & E-Commerce Development</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-6">
              Websites That Rank.<br /><span className="text-[#54c7c2]">Stores That Sell.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              A website is your most powerful sales asset — when it's built right. We design and develop high-performance websites and e-commerce platforms that load fast, rank on Google, and convert visitors into paying customers.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://calendly.com/110solutions" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#54c7c2] text-[#060a0e] font-bold text-sm rounded-xl hover:brightness-110 transition-all">Book a Free Consultation</a>
              <Link href="/contact" className="px-6 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-xl hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all">Get a Quote →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080c10] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/25 to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">What We Build</span><div className="w-6 h-[2px] bg-[#54c7c2]" /></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Everything Your Web Presence Needs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#54c7c2]/20 transition-all">
                <div className="text-[#54c7c2] text-xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[14px] mb-2">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA heading="Ready to Launch a Website That Performs?" sub="Get a free quote and timeline for your web or e-commerce project." />
    </main>
  );
}