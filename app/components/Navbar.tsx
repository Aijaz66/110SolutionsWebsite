"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Nav Data ────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    mega: true,
    children: [
      {
        label: "Custom Software Development",
        href: "/services/custom-software-development",
        icon: "⬡",
        desc: "Tailored software built around your business logic",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
        icon: "◈",
        desc: "iOS & Android apps that users love",
      },
      {
        label: "Website & E-Commerce Development",
        href: "/services/website-ecommerce-development",
        icon: "◉",
        desc: "Conversion-first web experiences",
      },
      {
        label: "Software Maintenance & Support",
        href: "/services/software-maintenance-support",
        icon: "◎",
        desc: "Reliable, ongoing technical support",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    mega: true,
    children: [
      {
        label: "Attendance Management",
        href: "/products/attendance-management",
        icon: "▣",
        desc: "Smart time & attendance tracking",
      },
      {
        label: "HR Payroll",
        href: "/products/hr-payroll",
        icon: "◫",
        desc: "End-to-end payroll automation",
      },
      {
        label: "Campus Management",
        href: "/products/campus-management",
        icon: "◪",
        desc: "Complete academic administration suite",
      },
      {
        label: "Mart Management",
        href: "/products/mart-management",
        icon: "◩",
        desc: "Inventory and POS for modern retail",
      },
      {
        label: "Supply Chain Management",
        href: "/products/supply-chain-management",
        icon: "◨",
        desc: "End-to-end supply chain visibility",
      },
      {
        label: "Accounting Management",
        href: "/products/accounting-management",
        icon: "◧",
        desc: "Financial management made simple",
      },
      {
        label: "E-Voting System",
        href: "/products/e-voting-system",
        icon: "⬢",
        desc: "Secure and transparent digital voting",
      },
      {
        label: "Visitor Management",
        href: "/products/visitor-management",
        icon: "⬡",
        desc: "Streamlined visitor check-in & tracking",
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    mega: false,
    children: [
      { label: "About Us", href: "/about", icon: "◈", desc: "Our story & mission" },
      { label: "Events", href: "/events", icon: "◉", desc: "Upcoming & past events" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    mega: false,
    children: [
      { label: "Blog", href: "/blog", icon: "▣", desc: "Insights & tech articles" },
      { label: "Case Studies", href: "/case-studies", icon: "◫", desc: "Real results, real clients" },
      { label: "Events", href: "/events", icon: "◉", desc: "Webinars & conferences" },
    ],
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type NavItem = (typeof NAV_ITEMS)[number];
type NavChild = NavItem["children"][number];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      {/* ── Top accent bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2] to-transparent" />

      {/* ── Main Navbar ── */}
      <header
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#000000]/95 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.6)] border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1320px] px-6 xl:px-8 flex items-center justify-between h-[72px]">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10">
              {/* Glow ring on hover */}
              <div className="absolute inset-0 rounded-full bg-[#54c7c2]/20 scale-0 group-hover:scale-150 transition-transform duration-500 blur-md" />
              <img
                src="/logo.png"
                alt="110 Solutions Logo"
                className="w-10 h-10 object-contain relative z-10"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-[17px] tracking-tight font-[family-name:var(--font-display)]">
                110<span className="text-[#54c7c2]">Solutions</span>
              </span>
              <span className="text-white/35 text-[9px] tracking-[0.18em] uppercase mt-0.5">
                Enterprise Software
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeMenu === item.label
                      ? "text-[#54c7c2] bg-[#54c7c2]/10"
                      : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {item.label}
                  <ChevronIcon
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === item.label ? "rotate-180 text-[#54c7c2]" : "text-white/40"
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {activeMenu === item.label && (
                  <DropdownPanel item={item} onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave} />
                )}
              </div>
            ))}
          </div>

          {/* ── Right Actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/resources/blog"
              className="text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="relative group px-5 py-2.5 text-sm font-semibold rounded-lg overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#54c7c2] transition-all duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#54c7c2] via-[#6edbd5] to-[#54c7c2]" />
              <span className="relative text-[#060a0e] font-bold tracking-wide">Contact Us</span>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-[5px] group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-6"
              }`}
            />
          </button>
        </nav>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden transition-all duration-400 overflow-hidden border-t border-white/[0.06] ${
            mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          } bg-[#080b0f]/98 backdrop-blur-xl overflow-y-auto`}
        >
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                  }
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  <span className="font-medium">{item.label}</span>
                  <ChevronIcon
                    className={`w-4 h-4 text-white/40 transition-transform duration-200 ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="ml-4 mt-1 border-l border-[#54c7c2]/30 pl-4 space-y-1">
                    {item.children.map((child: NavChild) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-[#54c7c2] hover:bg-[#54c7c2]/10 transition-all text-sm"
                      >
                        <span className="text-[#54c7c2] text-xs">{child.icon}</span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTAs */}
            <div className="pt-4 pb-2 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 bg-[#54c7c2] text-[#060a0e] font-bold rounded-lg text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/book-demo"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 border border-white/20 text-white/70 rounded-lg text-sm hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[74px]" />
    </>
  );
}

// ─── Dropdown Panel ───────────────────────────────────────────────────────────

function DropdownPanel({
  item,
  onMouseEnter,
  onMouseLeave,
}: {
  item: NavItem;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const isMega = item.mega && item.children.length > 4;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Connector dot */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#54c7c2]" />

      <div
        className={`bg-[#0d1117] border border-white/[0.08] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden ${
          isMega ? "w-[560px] p-5" : "w-[280px] p-3"
        }`}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/60 to-transparent" />

        {isMega ? (
          <>
            <p className="text-[10px] tracking-[0.2em] text-[#54c7c2]/70 uppercase font-semibold mb-4 pl-1">
              {item.label}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {item.children.map((child: NavChild) => (
                <DropdownItem key={child.href} child={child} />
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-white/40 text-xs">View all {item.label.toLowerCase()}</span>
              <Link
                href={item.href}
                className="text-[#54c7c2] text-xs font-medium hover:underline flex items-center gap-1"
              >
                Explore →
              </Link>
            </div>
          </>
        ) : (
          <div className="space-y-1">
            {item.children.map((child: NavChild) => (
              <DropdownItem key={child.href} child={child} compact />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DropdownItem({ child, compact = false }: { child: NavChild; compact?: boolean }) {
  return (
    <Link
      href={child.href}
      className={`group flex items-start gap-3 rounded-xl transition-all duration-200 hover:bg-[#54c7c2]/[0.08] ${
        compact ? "px-3 py-2.5" : "p-3"
      }`}
    >
      <span className="text-[#54c7c2]/60 group-hover:text-[#54c7c2] text-base mt-0.5 transition-colors flex-shrink-0">
        {child.icon}
      </span>
      <div>
        <p className="text-white/85 group-hover:text-white text-[13px] font-medium transition-colors leading-tight">
          {child.label}
        </p>
        {!compact && (
          <p className="text-white/40 text-[11px] mt-0.5 leading-snug">{child.desc}</p>
        )}
      </div>
    </Link>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}