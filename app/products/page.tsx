// app/products/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "../components/PageCTA";

export const metadata: Metadata = {
  title: "Enterprise Software Products Australia | HR, Payroll, Attendance & More — 110 Solutions",
  description:
    "110 Solutions offers a suite of enterprise software products for Australian businesses — HR & payroll, attendance management, campus management, supply chain, e-voting, and more. Ready to deploy.",
  keywords:
    "enterprise software products Australia, HR payroll software, attendance management system, campus management software, supply chain management software, accounting software Australia",
};

const PRODUCTS = [
  { icon: "▣", title: "Attendance Management System", href: "/products/attendance-management-system", keyword: "Time & Attendance Tracking", desc: "Real-time attendance tracking, automated timesheets, and detailed reporting for organisations of any size." },
  { icon: "◫", title: "HR & Payroll Software", href: "/products/hr-payroll-software", keyword: "Human Resources & Payroll", desc: "End-to-end HR management and payroll automation — from onboarding to payslips, all in one platform." },
  { icon: "◪", title: "Campus Management System", href: "/products/campus-management-system", keyword: "Academic Administration", desc: "A complete suite for educational institutions — student records, timetabling, fees, and communications." },
  { icon: "◩", title: "Retail & POS Management", href: "/products/retail-pos-management", keyword: "Inventory & Point of Sale", desc: "Unified inventory management, billing, and sales analytics for modern retail businesses." },
  { icon: "◨", title: "Supply Chain Management Software", href: "/products/supply-chain-management-software", keyword: "End-to-End Supply Chain", desc: "Full visibility across your supply chain — procurement, inventory, logistics, and supplier management." },
  { icon: "◧", title: "Accounting & Finance Software", href: "/products/accounting-finance-software", keyword: "Financial Management", desc: "Streamlined financial management — invoicing, expense tracking, reporting, and compliance." },
  { icon: "⬢", title: "E-Voting System", href: "/products/e-voting-system", keyword: "Secure Digital Voting", desc: "A tamper-proof, transparent digital voting platform for organisations, institutions, and government bodies." },
  { icon: "⬡", title: "Visitor Management System", href: "/products/visitor-management-system", keyword: "Smart Visitor Tracking", desc: "Digitise your front desk — visitor check-in, badge printing, host notifications, and compliance logs." },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#060a0e] text-white">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#54c7c2]/[0.04] blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(84,199,194,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(84,199,194,0.8) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 mb-6"><div className="w-6 h-[2px] bg-[#54c7c2]" /><span className="text-[#54c7c2] text-xs font-bold tracking-[0.2em] uppercase">Our Products</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.08] tracking-tight mb-6">
              Enterprise Products,<br /><span className="text-[#54c7c2]">Ready to Deploy.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Eight purpose-built software products covering the core operational needs of modern businesses. Configurable to your requirements, deployable within days, and backed by ongoing support.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRODUCTS.map((p, i) => (
              <Link key={p.href} href={p.href}
                className="group relative p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#54c7c2]/25 hover:bg-[#54c7c2]/[0.04] transition-all duration-300 overflow-hidden flex gap-6 items-start">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#54c7c2]/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-10 -translate-y-10 pointer-events-none" />
                <div className="absolute bottom-4 right-6 font-black text-[64px] leading-none text-white/[0.025] select-none">{String(i + 1).padStart(2, "0")}</div>

                <div className="w-12 h-12 rounded-xl bg-[#54c7c2]/10 border border-[#54c7c2]/20 flex items-center justify-center text-[#54c7c2] text-2xl flex-shrink-0 group-hover:bg-[#54c7c2]/20 transition-colors">
                  {p.icon}
                </div>
                <div className="relative z-10 flex-1">
                  <p className="text-[#54c7c2] text-[10px] font-bold tracking-[0.18em] uppercase mb-1">{p.keyword}</p>
                  <h2 className="text-white font-bold text-[16px] mb-2 group-hover:text-[#54c7c2] transition-colors leading-snug">{p.title}</h2>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="text-[#54c7c2]/60 text-xs font-medium group-hover:text-[#54c7c2] transition-colors flex items-center gap-1">
                    Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-16">
        <PageCTA heading="Want to See a Product in Action?" sub="Book a free demo and we'll walk you through any of our products live." />
      </div>
    </main>
  );
}