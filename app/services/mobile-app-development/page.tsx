// app/services/mobile-app-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Mobile App Development Australia | iOS & Android Apps — 110 Solutions",
  description:
    "Expert mobile app development in Australia. 110 Solutions builds high-performance iOS and Android apps for businesses of all sizes. Native, React Native & Flutter development.",
  keywords:
    "mobile app development Australia, iOS app development, Android app development, React Native development Australia, app development company Australia, Flutter development",
};

const CAPABILITIES = [
  { icon: "◈", title: "iOS Development", desc: "Native Swift applications optimised for the Apple ecosystem — performance, design, and App Store compliance." },
  { icon: "⬡", title: "Android Development", desc: "Native Kotlin apps built for the full Android device range, with Google Play Store submission handled." },
  { icon: "◉", title: "Cross-Platform (React Native)", desc: "One codebase, two platforms. Faster time-to-market without sacrificing native performance or UX." },
  { icon: "◎", title: "Flutter Development", desc: "Google's UI toolkit for building natively compiled apps with stunning interfaces across mobile and web." },
  { icon: "◬", title: "App Integrations", desc: "Payment gateways, maps, push notifications, third-party APIs, biometrics — fully integrated into your app." },
  { icon: "⬟", title: "App Maintenance & Updates", desc: "Ongoing support, OS compatibility updates, performance monitoring, and feature additions post-launch." },
];

export default function MobileAppPage() {
  return (
    <main className="bg-[#060a0e] text-white">
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#54c7c2]/[0.05] blur-[110px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link><span>/</span>
            <span className="text-[#54c7c2]">Mobile App Development</span>
          </nav>
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Mobile App Development</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-6">
              Mobile Apps That<br /><span className="text-[#54c7c2]">Users Keep Coming Back To.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              A great mobile app is more than a digital product — it's a direct channel to your customers. We build iOS and Android applications that combine flawless performance with exceptional design, turning first-time users into loyal advocates for your brand.
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
            <div className="flex items-center justify-center gap-3 mb-4"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Our Capabilities</span><div className="w-6 h-[2px] bg-[#54c7c2]" /></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Full-Spectrum Mobile Development</h2>
            <p className="text-white/45 text-base mt-3 max-w-[480px] mx-auto">From native development to cross-platform, we cover every mobile technology your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#54c7c2]/20 hover:bg-[#54c7c2]/[0.04] transition-all group">
                <div className="text-[#54c7c2] text-xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-[14px] mb-2 group-hover:text-[#54c7c2] transition-colors">{c.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Our Approach</span></div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">Built for Performance.<br /><span className="text-[#54c7c2]">Designed for Retention.</span></h2>
              <p className="text-white/50 text-base leading-relaxed mb-6">We don't just build apps that work — we build apps that perform. Every decision, from architecture to micro-animation, is made with one goal: keeping your users engaged and coming back.</p>
              <div className="space-y-3">
                {["Sub-3 second load times as a baseline", "Offline-first functionality where applicable", "Accessibility compliance (WCAG 2.1)", "Analytics and crash reporting built in", "App Store Optimisation (ASO) guidance"].map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm text-white/60">
                    <span className="text-[#54c7c2]">✓</span>{f}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ val: "50+", label: "Apps Delivered" }, { val: "4.8★", label: "Average App Rating" }, { val: "iOS + Android", label: "Both Platforms" }, { val: "6–16 wks", label: "Typical Timeline" }].map((s) => (
                <div key={s.label} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center">
                  <div className="text-2xl font-extrabold text-[#54c7c2] mb-1">{s.val}</div>
                  <div className="text-white/45 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA heading="Have an App Idea?" sub="Book a free discovery call and we'll scope your mobile app project — no commitment required." />
    </main>
  );
}