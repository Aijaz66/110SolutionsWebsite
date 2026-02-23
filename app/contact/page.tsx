// app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | 110 Solutions — Enterprise Software & IT Solutions Australia",
  description:
    "Get in touch with 110 Solutions. Book a free demo, request a quote, or speak with our team about custom software development, IT consulting, and enterprise products in Australia.",
  keywords:
    "contact 110 solutions, software company Australia, IT solutions enquiry, book software demo Australia",
};

export default function ContactPage() {
  return (
    <main className="bg-[#060a0e] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#54c7c2]/[0.045] blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#54c7c2]/30 bg-[#54c7c2]/[0.08] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#54c7c2] animate-pulse" />
            <span className="text-[#54c7c2] text-xs font-semibold tracking-[0.15em] uppercase">Let&apos;s Talk</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-[1.08] tracking-tight mb-5">
            Start a Conversation.<br />
            <span className="text-[#54c7c2]">Build Something Great.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-[560px] mx-auto">
            Whether you&apos;re ready to kick off a project or just exploring your options —
            our team is here to help you make the right technology decision.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="pb-28">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 items-start">

            {/* Left: Info */}
            <div className="space-y-6">
              <div className="p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <h2 className="text-lg font-bold mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <ContactDetail icon={<EmailIcon />} label="Email Us" value="info@110solutions.com.au" href="mailto:info@110solutions.com.au" />
                  <ContactDetail icon={<LocationIcon />} label="Our Office" value="Unit 4.15, 29-31 Lexington Drive, Bella Vista, Australia" />
                  <ContactDetail icon={<ClockIcon />} label="Business Hours" value="Monday – Friday, 9:00 AM – 6:00 PM AEST" />
                </div>
              </div>

              <div className="relative p-7 rounded-2xl border border-[#54c7c2]/25 bg-[#54c7c2]/[0.05] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#54c7c2]/10 rounded-full blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-[#54c7c2] text-xl mb-4">◈</div>
                  <h3 className="font-bold text-base mb-2">Prefer a Live Demo?</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    See our products and services in action. Book a free, no-obligation demo with one of our solutions specialists.
                  </p>
                  <a href="https://calendly.com/110solutions" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#54c7c2] text-[#060a0e] font-bold text-sm rounded-lg hover:brightness-110 transition-all">
                    Book a Free Demo →
                  </a>
                </div>
              </div>

              <div className="p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <h3 className="text-[11px] font-bold text-[#54c7c2]/80 tracking-[0.18em] uppercase mb-5">What Happens Next</h3>
                <div className="space-y-4">
                  {[
                    { step: "01", text: "We review your enquiry within 1 business day." },
                    { step: "02", text: "A solutions specialist reaches out to discuss your needs." },
                    { step: "03", text: "We prepare a tailored proposal or schedule a demo." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-lg bg-[#54c7c2]/10 border border-[#54c7c2]/20 flex items-center justify-center text-[#54c7c2] text-[10px] font-bold flex-shrink-0">{s.step}</div>
                      <p className="text-white/50 text-sm leading-relaxed pt-0.5">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="relative p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/50 to-transparent rounded-t-2xl" />
              <h2 className="text-xl font-bold mb-1">Send Us a Message</h2>
              <p className="text-white/40 text-sm mb-8">Fill in the form and we&apos;ll get back to you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactDetail({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="w-9 h-9 rounded-lg bg-[#54c7c2]/10 border border-[#54c7c2]/20 flex items-center justify-center text-[#54c7c2] flex-shrink-0">{icon}</div>
      <div>
        <p className="text-white/35 text-[10px] font-semibold tracking-[0.15em] uppercase mb-0.5">{label}</p>
        <p className="text-white/75 text-sm leading-relaxed">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition-opacity">{inner}</a> : <div>{inner}</div>;
}

function EmailIcon() { return <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" /><path d="M1 5.5l7 4.5 7-4.5" stroke="currentColor" strokeWidth="1.3" /></svg>; }
function LocationIcon() { return <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M8 1.5a4.5 4.5 0 014.5 4.5c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 018 1.5z" stroke="currentColor" strokeWidth="1.3" /><circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3" /></svg>; }
function ClockIcon() { return <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" /><path d="M8 4.5V8l2.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>; }