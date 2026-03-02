"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─── Nav Data ────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    mega: true,
    navigable: true,
    description:
      "End-to-end IT services tailored to your business — from strategy to deployment and beyond.",
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
        label: "Website & E-Commerce",
        href: "/services/web-ecommerce-development",
        icon: "◉",
        desc: "Conversion-first web experiences",
      },
      {
        label: "Software Maintenance & Support",
        href: "/services/software-maintenance-support",
        icon: "◎",
        desc: "Reliable, ongoing technical support",
      },
      {
        label: "IT Consulting",
        href: "/services/it-consulting",
        icon: "◬",
        desc: "Strategic technology advisory",
      },
      {
        label: "Cloud Migration & Hosting",
        href: "/services/cloud-migration-hosting",
        icon: "⬟",
        desc: "AWS, Azure & GCP migration",
      },
      {
        label: "UI/UX Design",
        href: "/services/ui-ux-design",
        icon: "◍",
        desc: "User-centred design & prototyping",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    mega: true,
    navigable: true,
    description:
      "Enterprise-grade software products, configurable to your needs and deployable within days.",
    children: [
      {
        label: "Attendance Management",
        href: "/products/attendance-management-system",
        icon: "▣",
        desc: "Smart time & attendance tracking",
      },
      {
        label: "HR & Payroll",
        href: "/products/hr-payroll-software",
        icon: "◫",
        desc: "End-to-end payroll automation",
      },
      {
        label: "Campus Management",
        href: "/products/campus-management-system",
        icon: "◪",
        desc: "Academic administration suite",
      },
      {
        label: "Accounting & Finance",
        href: "/products/accounting-finance-software",
        icon: "◧",
        desc: "Financial management made simple",
      },
      {
        label: "E-Voting System",
        href: "/products/e-voting-system",
        icon: "⬢",
        desc: "Secure digital voting platform",
      },
      {
        label: "Visitor Management",
        href: "/products/visitor-management-system",
        icon: "⬡",
        desc: "Smart visitor check-in & tracking",
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    mega: false,
    navigable: false,
    description: "",
    children: [
      { label: "About Us", href: "/about", icon: "◈", desc: "Who we are & what we do" },
      { label: "Our Story", href: "/our-story", icon: "◉", desc: "Our journey & milestones" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    mega: false,
    navigable: false,
    description: "",
    children: [
      { label: "Blog", href: "/blog", icon: "▣", desc: "Insights & tech articles" },
      {
        label: "Case Studies",
        href: "/case-studies",
        icon: "◫",
        desc: "Real results, real clients",
      },
      { label: "Events", href: "/events", icon: "◉", desc: "Webinars & conferences" },
    ],
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type NavItem = (typeof NAV_ITEMS)[number];
type NavChild = NavItem["children"][number];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      <header className="fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 bg-[#000000]/95 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.6)] border-b border-white/[0.06]">
        <nav className="mx-auto max-w-[1320px] px-6 xl:px-8 flex items-center justify-between h-[72px]">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full bg-[#54c7c2]/20 scale-0 group-hover:scale-150 transition-transform duration-500 blur-md" />
              <img
                src="/logo.png"
                alt="110 Solutions Logo"
                className="w-10 h-10 object-contain relative z-10"
              />
            </div>
            <span className="text-white font-bold text-[17px] tracking-tight font-[family-name:var(--font-display)]">
              110<span className="text-[#54c7c2]">Solutions</span>
            </span>
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
                {item.navigable ? (
                  <div
                    className={`flex items-center rounded-lg transition-all duration-200 ${
                      activeMenu === item.label
                        ? "bg-[#54c7c2]/10"
                        : "hover:bg-white/[0.06]"
                    }`}
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        activeMenu === item.label
                          ? "text-[#54c7c2]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === item.label ? null : item.label
                        )
                      }
                      className="pr-3 py-2 -ml-2"
                      aria-label={`Toggle ${item.label} dropdown`}
                    >
                      <ChevronIcon
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMenu === item.label
                            ? "rotate-180 text-[#54c7c2]"
                            : "text-white/40"
                        }`}
                      />
                    </button>
                  </div>
                ) : (
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
                        activeMenu === item.label
                          ? "rotate-180 text-[#54c7c2]"
                          : "text-white/40"
                      }`}
                    />
                  </button>
                )}

                {/* Dropdown */}
                {activeMenu === item.label && (
                  <DropdownPanel
                    item={item}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    onLinkClick={() => setActiveMenu(null)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ── Right Actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://calendly.com/110solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              Book a Demo
            </a>
            <Link
              href="/contact"
              className="relative group px-5 py-2.5 text-sm font-semibold rounded-lg overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#54c7c2] transition-all duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#54c7c2] via-[#6edbd5] to-[#54c7c2]" />
              <span className="relative text-[#060a0e] font-bold tracking-wide">
                Contact Us
              </span>
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
                <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/[0.06] transition-all">
                  {item.navigable ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-white/80 hover:text-white font-medium flex-1"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label
                        )
                      }
                      className="text-white/80 hover:text-white font-medium flex-1 text-left"
                    >
                      {item.label}
                    </button>
                  )}
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                    className="p-1 -mr-1"
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <ChevronIcon
                      className={`w-4 h-4 text-white/40 transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileExpanded === item.label && (
                  <div className="ml-4 mt-1 border-l border-[#54c7c2]/30 pl-4 space-y-1">
                    {item.children.map((child: NavChild) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-[#54c7c2] hover:bg-[#54c7c2]/10 transition-all text-sm"
                      >
                        <span className="text-[#54c7c2] text-xs">
                          {child.icon}
                        </span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 pb-2 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 bg-[#54c7c2] text-[#060a0e] font-bold rounded-lg text-sm"
              >
                Contact Us
              </Link>
              <a
                href="https://calendly.com/110solutions"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 border border-white/20 text-white/70 rounded-lg text-sm hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[74px]" />
    </>
  );
}

// ─── Mega Dropdown Panel ──────────────────────────────────────────────────────

function DropdownPanel({
  item,
  onMouseEnter,
  onMouseLeave,
  onLinkClick,
}: {
  item: NavItem;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick: () => void;
}) {
  // Full-width mega menu for Services & Products
  if (item.mega) {
    return (
      <div
        className="fixed top-[74px] left-0 right-0 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="bg-[#0d1117] border-b border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Top accent */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/50 to-transparent" />

          <div className="max-w-[1320px] mx-auto px-6 xl:px-8 py-8">
            <div className="grid grid-cols-[280px_1fr] gap-10">
              {/* Left — Description panel */}
              <div className="border-r border-white/[0.06] pr-8">
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.label}
                </h3>
                <p className="text-white/40 text-[13px] leading-relaxed mb-5">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  onClick={onLinkClick}
                  className="inline-flex items-center gap-2 text-[#54c7c2] text-[13px] font-semibold hover:underline group"
                >
                  View All {item.label}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>

              {/* Right — Links grid */}
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#54c7c2]/60 uppercase font-semibold mb-4">
                  All {item.label}
                </p>
                <div
                  className={`grid gap-x-6 gap-y-1 ${
                    item.children.length > 6
                      ? "grid-cols-3"
                      : "grid-cols-3"
                  }`}
                >
                  {item.children.map((child: NavChild) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onLinkClick}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#54c7c2]/[0.06] transition-all duration-200"
                    >
                      <span className="text-[#54c7c2]/50 group-hover:text-[#54c7c2] text-sm mt-0.5 transition-colors flex-shrink-0">
                        {child.icon}
                      </span>
                      <div>
                        <p className="text-white/80 group-hover:text-white text-[13px] font-medium transition-colors leading-tight">
                          {child.label}
                        </p>
                        <p className="text-white/30 group-hover:text-white/45 text-[11px] mt-0.5 leading-snug transition-colors">
                          {child.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Small dropdown for Company & Resources
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#54c7c2]" />

      <div className="w-[260px] bg-[#0d1117] border border-white/[0.08] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden p-3">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/60 to-transparent" />
        <div className="space-y-1">
          {item.children.map((child: NavChild) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onLinkClick}
              className="group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-[#54c7c2]/[0.08]"
            >
              <span className="text-[#54c7c2]/60 group-hover:text-[#54c7c2] text-base mt-0.5 transition-colors flex-shrink-0">
                {child.icon}
              </span>
              <div>
                <p className="text-white/85 group-hover:text-white text-[13px] font-medium transition-colors leading-tight">
                  {child.label}
                </p>
                <p className="text-white/40 text-[11px] mt-0.5 leading-snug">
                  {child.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}