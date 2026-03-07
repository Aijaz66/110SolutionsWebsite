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
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Clean white
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(14,140,134,0.4) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0e8c86]/[0.04] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0e8c86]/[0.03] blur-[120px] rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0e8c86]/25 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-28 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0e8c86]/20 bg-[#0e8c86]/[0.06] mb-6">
            <svg className="w-4 h-4 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <span className="text-[#0e8c86] text-[10px] font-semibold tracking-[0.15em] uppercase">
              Get in Touch
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight text-gray-900 mb-5">
            Start a Conversation.{" "}
            <span className="text-[#0e8c86]">Build Something Great.</span>
          </h1>
          <p className="text-gray-500 text-[16px] leading-relaxed max-w-[560px] mx-auto">
            Whether you&apos;re ready to kick off a project or just exploring your options —
            our team is here to help you make the right technology decision.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT INFO STRIP — Light gray
      ═══════════════════════════════════════════ */}
      <section className="py-12 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M1 5.5l7 4.5 7-4.5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                ),
                label: "Email Us",
                value: "info@110solutions.com.au",
                href: "mailto:info@110solutions.com.au",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5a4.5 4.5 0 014.5 4.5c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 018 1.5z" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                ),
                label: "Our Office",
                value: "Unit 4.15, 29-31 Lexington Drive, Bella Vista, Australia",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M8 4.5V8l2.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                ),
                label: "Business Hours",
                value: "Monday – Friday, 9:00 AM – 6:00 PM AEST",
              },
            ].map((item) => {
              const inner = (
                <div className="p-5 rounded-xl border border-gray-100 bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-[#0e8c86] font-bold tracking-[0.15em] uppercase mb-1">{item.label}</p>
                    <p className="text-gray-600 text-[13px] leading-relaxed">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block hover:opacity-90 transition-opacity">
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FORM + SIDEBAR — White
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
            {/* Left — Form */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-5 h-[2px] bg-[#0e8c86]" />
                <span className="text-[#0e8c86] text-[10px] font-bold tracking-[0.2em] uppercase">
                  Send a Message
                </span>
              </div>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mb-2">
                Tell Us About Your{" "}
                <span className="text-[#0e8c86]">Project</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-8">
                Fill in the form and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50/30">
                <ContactForm />
              </div>
            </div>

            {/* Right — Sidebar */}
            <div className="space-y-5 lg:sticky lg:top-28">
              {/* Live Demo CTA */}
              <div className="relative p-6 rounded-xl border border-[#0e8c86]/20 bg-[#0e8c86]/[0.04] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0e8c86]/10 rounded-full blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/15 flex items-center justify-center text-[#0e8c86] mb-4">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-2">Prefer a Live Demo?</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-5">
                    See our products and services in action. Book a free, no-obligation demo with one of our solutions specialists.
                  </p>
                  <a
                    href="https://calendly.com/110solutions-info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-[13px] overflow-hidden transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-[#0e8c86]" />
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#12a89f] to-[#0e8c86] transition-opacity" />
                    <span className="relative text-white tracking-wide">Book a Free Demo →</span>
                  </a>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/30">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-5 h-[2px] bg-[#0e8c86]" />
                  <span className="text-[#0e8c86] text-[10px] font-bold tracking-[0.2em] uppercase">
                    What Happens Next
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { step: "01", text: "We review your enquiry within 1 business day." },
                    { step: "02", text: "A solutions specialist reaches out to discuss your needs." },
                    { step: "03", text: "We prepare a tailored proposal or schedule a demo." },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 bg-white hover:border-[#0e8c86]/20 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0e8c86] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[9px] font-extrabold">{s.step}</span>
                      </div>
                      <p className="text-gray-500 text-[13px] leading-relaxed pt-1">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "< 24h", label: "Response Time" },
                  { val: "100+", label: "Clients Served" },
                  { val: "Free", label: "Initial Consult" },
                  { val: "7+", label: "Products Live" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl border border-gray-100 bg-gray-50/30 text-center hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300"
                  >
                    <p className="text-[#0e8c86] font-extrabold text-[18px] mb-0.5">{stat.val}</p>
                    <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MAP / LOCATION — Light gray
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center gap-2.5 justify-center">
              <div className="w-5 h-[2px] bg-[#0e8c86]" />
              <span className="text-[#0e8c86] text-[10px] font-bold tracking-[0.2em] uppercase">Our Location</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mt-3">
              Visit Us in <span className="text-[#0e8c86]">Bella Vista, Sydney</span>
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-black/[0.03]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5!2d150.9572!3d-33.7340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a1d!2sBella+Vista+NSW+2153!5e0!3m2!1sen!2sau!4v1709000000000!5m2!1sen!2sau"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="110 Solutions Office Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}