import Link from "next/link";
import PageCTA from "../components/PageCTA";

export interface ProductFeature { icon: string; title: string; desc: string; }
export interface ProductStat { val: string; label: string; }

interface Props {
  breadcrumb: string;
  eyebrow: string;
  h1Line1: string;
  h1Teal: string;
  intro: string;
  features: ProductFeature[];
  stats: ProductStat[];
  whoFor: string[];
  ctaHeading: string;
  ctaSub: string;
}

export default function ProductPageLayout({
  breadcrumb, eyebrow, h1Line1, h1Teal, intro, features, stats, whoFor, ctaHeading, ctaSub,
}: Props) {
  return (
    <main className="bg-[#060a0e] text-white">

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[550px] h-[450px] bg-[#54c7c2]/[0.045] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#0070de]/[0.04] blur-[90px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link><span>/</span>
            <Link href="/products" className="hover:text-white/60 transition-colors">Products</Link><span>/</span>
            <span className="text-[#54c7c2]">{breadcrumb}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">{eyebrow}</span></div>
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.08] tracking-tight mb-6">
                {h1Line1}<br /><span className="text-[#54c7c2]">{h1Teal}</span>
              </h1>
              <p className="text-white/55 text-lg leading-relaxed mb-8">{intro}</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://calendly.com/110solutions" target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#54c7c2] text-[#060a0e] font-bold text-sm rounded-xl hover:brightness-110 transition-all hover:-translate-y-0.5">
                  Book a Free Demo
                </a>
                <Link href="/contact" className="px-6 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-xl hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all">
                  Request a Quote →
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center">
                  <div className="text-3xl font-extrabold text-[#54c7c2] mb-1">{s.val}</div>
                  <div className="text-white/45 text-xs leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#080c10] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/25 to-transparent" />
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Key Features</span><div className="w-6 h-[2px] bg-[#54c7c2]" /></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Everything You Need, Nothing You Don&apos;t</h2>
            <p className="text-white/45 text-base mt-3 max-w-[480px] mx-auto">Purpose-built features that address real operational challenges — not a bloated feature list you&apos;ll never use.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#54c7c2]/20 hover:bg-[#54c7c2]/[0.03] transition-all group">
                <div className="text-[#54c7c2] text-xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[14px] mb-2 group-hover:text-[#54c7c2] transition-colors">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8 text-center">
          <p className="text-white/35 text-xs font-bold tracking-[0.2em] uppercase mb-6">Who This Is Built For</p>
          <div className="flex flex-wrap justify-center gap-3">
            {whoFor.map((w) => (
              <span key={w} className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/50 text-sm">{w}</span>
            ))}
          </div>
        </div>
      </section>

      <PageCTA heading={ctaHeading} sub={ctaSub} />
    </main>
  );
}