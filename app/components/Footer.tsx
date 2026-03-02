"use client";

import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  { label: "Custom Software Development", href: "/services/custom-software-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Website & E-Commerce Development", href: "/services/web-ecommerce-development" },
  { label: "Software Maintenance & Support", href: "/services/software-maintenance-support" },
  { label: "IT Consulting", href: "/services/it-consulting" },
  { label: "Cloud Migration & Hosting", href: "/services/cloud-migration-hosting" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
];

const PRODUCTS = [
  { label: "Attendance Management", href: "/products/attendance-management-system" },
  { label: "HR & Payroll", href: "/products/hr-payroll-software" },
  { label: "Campus Management", href: "/products/campus-management-system" },
  { label: "Accounting & Finance", href: "/products/accounting-finance-software" },
  { label: "E-Voting System", href: "/products/e-voting-system" },
  { label: "Visitor Management", href: "/products/visitor-management-system" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Our Story", href: "/our-story" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="relative bg-[#000000] text-white overflow-hidden">
      {/* ── Decorative background ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#54c7c2]/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#000000]/[0.04] blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(84,199,194,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── CTA Banner ── */}
      <div className="relative border-b border-white/[0.06]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Ready to transform your business?
            </h2>
            <p className="text-white/50 mt-1.5 text-sm md:text-base">
              Let&apos;s build something extraordinary together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="group relative px-6 py-3 text-sm font-bold rounded-xl overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#54c7c2]" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity duration-300" />
              <span className="relative text-[#060a0e] tracking-wide">Book a Demo</span>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-semibold rounded-xl border border-white/20 text-white/80 hover:border-[#54c7c2]/60 hover:text-[#54c7c2] transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          {/* ── Col 1: Brand ── */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <img src="/logo.png" alt="110 Solutions" className="w-9 h-9 object-contain" />
              <span className="text-white font-bold text-[16px]">
                110<span className="text-[#54c7c2]">Solutions</span>
              </span>
            </Link>

            <p className="text-white/45 text-sm leading-relaxed max-w-[260px]">
              Delivering trusted enterprise software and IT solutions for SMBs, enterprises, and agencies across every industry.
            </p>

            <div className="flex flex-col gap-2.5">
              {[
                { icon: "⬡", text: "Extensive Tech Stack" },
                { icon: "◈", text: "Experienced Professionals" },
                { icon: "◉", text: "Trusted by 100+ Clients" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2.5 text-xs text-white/50">
                  <span className="text-[#54c7c2] text-sm">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-[#54c7c2] hover:bg-[#54c7c2]/10 hover:border-[#54c7c2]/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Services ── */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <FooterLink key={s.href} href={s.href}>
                  {s.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Products ── */}
          <div>
            <FooterHeading>Products</FooterHeading>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <FooterLink key={p.href} href={p.href}>
                  {p.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Company + Contact ── */}
          <div className="space-y-8">
            <div>
              <FooterHeading>Company</FooterHeading>
              <ul className="space-y-2.5">
                {COMPANY.map((c) => (
                  <FooterLink key={c.href} href={c.href}>
                    {c.label}
                  </FooterLink>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Get in Touch</FooterHeading>
              <div className="space-y-3">
                <a
                  href="mailto:info@110solutions.com.au"
                  className="flex items-center gap-2.5 text-sm text-white/50 hover:text-[#54c7c2] transition-colors group"
                >
                  <span className="w-6 h-6 rounded-md bg-[#54c7c2]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#54c7c2]/20 transition-colors">
                    <MailIcon />
                  </span>
                  info@110solutions.com.au
                </a>
                <div className="flex items-start gap-2.5 text-sm text-white/50">
                  <span className="w-6 h-6 rounded-md bg-[#54c7c2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <LocationIcon />
                  </span>
                  <span>Bella Vista, Sydney, Australia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative border-t border-white/[0.06]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} 110 Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((t) => (
              <Link
                key={t}
                href={`/${t.toLowerCase().replace(/ /g, "-")}`}
                className="text-white/30 text-xs hover:text-[#54c7c2] transition-colors"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom teal line ── */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />
    </footer>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#54c7c2]/80">
        {children}
      </h3>
      <div className="mt-2 w-8 h-[1px] bg-[#54c7c2]/40" />
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/45 hover:text-[#54c7c2] transition-colors duration-200 hover:translate-x-0.5 inline-block"
      >
        {children}
      </Link>
    </li>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function MailIcon() {
  return (
    <svg className="w-3 h-3 text-[#54c7c2]" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1 5.5l7 4.5 7-4.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-3 h-3 text-[#54c7c2]" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.5a4.5 4.5 0 014.5 4.5c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 018 1.5z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}