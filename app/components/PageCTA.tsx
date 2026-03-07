import Link from "next/link";

export default function PageCTA({
  heading = "Ready to Get Started?",
  sub = "Talk to our team about your requirements. No obligation, no pressure.",
  demo = true,
}: {
  heading?: string;
  sub?: string;
  demo?: boolean;
}) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#54c7c2]/[0.025]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#54c7c2]/[0.06] blur-[90px]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,1) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[760px] mx-auto px-6 xl:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] tracking-tight mb-5 text-white">
          {heading}
        </h2>
        <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-[500px] mx-auto">{sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {demo && (
            <a
              href="https://calendly.com/110solutions-info/30min?back=1&month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-xl font-bold text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(84,199,194,0.35)]"
            >
              <span className="absolute inset-0 bg-[#54c7c2]" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity" />
              <span className="relative text-[#060a0e] tracking-wide">Book a Free Demo</span>
            </a>
          )}
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl font-semibold text-[15px] border border-white/20 text-white/80 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all duration-300"
          >
            Contact Our Team →
          </Link>
        </div>
      </div>
    </section>
  );
}