"use client";

import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import AnimatedCounter from "../../components/AnimatedCounter";
import PageCTA from "../../components/PageCTA";
import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────���────────────

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Student Information System",
    desc: "Complete student profiles — enrolment, academic history, attendance, behaviour records, and parent communications in one place.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Timetable & Scheduling",
    desc: "Intelligent timetabling that avoids clashes, manages room allocation, teacher assignments, and adapts to changes in real time.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Fee Management & Billing",
    desc: "Automated fee schedules, online payment collection, receipt generation, instalment plans, and outstanding balance tracking.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Parent & Student Portal",
    desc: "Self-service portal for parents and students to view attendance, grades, fee status, assignments, and receive notifications.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
    title: "Staff & HR Management",
    desc: "Staff records, timetable assignments, leave management, attendance tracking, and payroll system connectivity.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Compliance & Reporting",
    desc: "Accreditation documents, regulatory reporting, custom analytics for leadership, and board-ready dashboards.",
  },
];

const PORTALS = [
  {
    title: "Admin Dashboard",
    desc: "Full control over students, staff, fees, timetables, and institutional settings from a centralised command centre.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    users: "Principals, Registrars, Admin Staff",
  },
  {
    title: "Teacher Portal",
    desc: "Class rosters, attendance marking, grade entry, assignment management, and parent communications.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    users: "Teachers, Lecturers, Department Heads",
  },
  {
    title: "Parent Portal",
    desc: "View child's attendance, grades, fee balances, school calendar, and communicate with teachers directly.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    users: "Parents, Guardians",
  },
  {
    title: "Student Portal",
    desc: "Access timetable, assignments, grades, attendance records, library resources, and fee payment history.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 3.33 4 6 4s6-2 6-4v-5" />
      </svg>
    ),
    users: "Students (Secondary & Higher Ed)",
  },
];

const FAQS = [
  { q: "Does it work for both K-12 and universities?", a: "Yes. The system is fully configurable for primary schools, secondary schools, TAFE institutes, colleges, and universities. Terminology, grading scales, fee structures, and workflows adapt to your institution type." },
  { q: "Can we manage multiple campuses?", a: "Absolutely. Multi-campus support lets you manage separate locations with their own staff, students, and timetables while rolling up reporting to a central administration." },
  { q: "Does it include an online fee payment system?", a: "Yes. Parents and students can pay fees online via credit card, debit card, or bank transfer. The system generates receipts, tracks instalments, and sends automated payment reminders." },
  { q: "Can parents access their child's records?", a: "Yes. The Parent Portal gives real-time access to attendance, grades, fee balances, school calendar, and allows direct communication with teachers — all from any device." },
  { q: "How does the timetabling work?", a: "Our intelligent scheduler considers teacher availability, room capacity, subject requirements, and constraint rules to generate clash-free timetables automatically. Manual adjustments are supported with real-time conflict detection." },
  { q: "How long does implementation take?", a: "A standard single-campus deployment takes 3-4 weeks including data migration, configuration, and staff training. Multi-campus implementations typically take 6-8 weeks." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CampusManagementPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          HERO — Full-width image with left-aligned content
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[100vh] flex items-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1920&q=80)",
            }}
          />
          {/* Fallback gradient in case image fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#091e2a]" style={{ mixBlendMode: "multiply" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/70 to-[#000000]/40" />
          <div className="absolute inset-0 bg-[#091e2a]/20" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54c7c2]/40 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 xl:px-8 w-full py-32">
          <div className="max-w-[580px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54c7c2]/20 bg-[#54c7c2]/[0.08] mb-6">
              <svg className="w-4 h-4 text-[#54c7c2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 3.33 4 6 4s6-2 6-4v-5" />
              </svg>
              <span className="text-[#54c7c2] text-[10px] font-semibold tracking-[0.15em] uppercase">
                Campus Management System
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.06] tracking-tight mb-5">
              Run Your Campus.{" "}
              <span className="text-[#54c7c2]">Not Your Paperwork.</span>
            </h1>
            <p className="text-white/45 text-[15px] leading-relaxed mb-8">
              Educational institutions run on data — student records, timetables,
              fee collections, communications, and compliance. Our platform brings
              all of it together, reducing admin burden so staff can focus on what
              matters: education.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com/110solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 rounded-lg font-bold text-[13px] overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-[#54c7c2]" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity" />
                <span className="relative text-[#060a0e] tracking-wide flex items-center gap-2">
                  Book a Free Demo
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-lg font-semibold text-[13px] border border-white/25 text-white/75 hover:border-[#54c7c2]/50 hover:text-[#54c7c2] transition-all"
              >
                Request a Quote →
              </Link>
            </div>

            {/* Inline stats */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { val: "K–12 to Uni", label: "All Levels" },
                { val: "60%", label: "Admin Reduction" },
                { val: "Multi-Campus", label: "Ready" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-[3px] h-8 rounded-full bg-[#54c7c2]" />
                  <div>
                    <div className="text-white font-bold text-[14px] leading-tight">
                      {s.val}
                    </div>
                    <div className="text-white/35 text-[10px]">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OVERVIEW (White — text + image zigzag)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="right" delay={100}>
              <div>
                <LightEyebrow>Overview</LightEyebrow>
                <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-4">
                  One Platform for{" "}
                  <span className="text-[#0e8c86]">Your Entire Institution</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  Stop juggling spreadsheets, paper forms, and disconnected tools.
                  Our Campus Management System centralises student data, academic
                  operations, finances, and communications — giving administrators,
                  teachers, parents, and students each a tailored experience.
                </p>

                <div className="space-y-3">
                  {[
                    "Student enrolment, records, and academic tracking in one system",
                    "Clash-free timetabling with room and teacher management",
                    "Online fee collection with automated reminders and receipts",
                    "Dedicated portals for admin, teachers, parents, and students",
                    "Multi-campus support with centralised reporting",
                    "Configurable grading, terms, and academic structures",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-[13.5px] text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-[#0e8c86]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#0e8c86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES (Light gray — 3-column cards)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Core Modules</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                Everything Your Institution{" "}
                <span className="text-[#0e8c86]">Needs to Operate</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full group">
                  <div className="w-10 h-10 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] mb-4 group-hover:bg-[#0e8c86]/15 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px] mb-2 group-hover:text-[#0e8c86] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PORTALS — Unique section (White)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[540px] mx-auto">
              <LightEyebrow center>Role-Based Portals</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                A Tailored Experience for{" "}
                <span className="text-[#0e8c86]">Every User</span>
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Admins, teachers, parents, and students each get a purpose-built
                portal — showing only what they need, nothing they don&apos;t.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTALS.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="relative p-6 rounded-xl border border-gray-100 bg-gray-50/40 hover:bg-white hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-3 right-5 text-[52px] font-black text-gray-100 leading-none select-none group-hover:text-[#0e8c86]/[0.06] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="flex gap-4 items-start relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[#0e8c86]/10 border border-[#0e8c86]/12 flex items-center justify-center text-[#0e8c86] flex-shrink-0 group-hover:bg-[#0e8c86]/15 transition-colors">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-[15px] mb-1 group-hover:text-[#0e8c86] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed mb-2">
                        {p.desc}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3 h-3 text-[#0e8c86]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span className="text-[#0e8c86]/60 text-[11px] font-medium">
                          {p.users}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS (Dark Navy)
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden bg-[#091e2a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2535] via-[#091e2a] to-[#071a24]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#54c7c2]/20 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#54c7c2]/[0.04] blur-[80px]" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { end: 60, suffix: "%", label: "Admin Time Reduced" },
              { end: 4, suffix: "", label: "Dedicated Portals" },
              { end: 95, suffix: "%", label: "Fee Collection Rate" },
              { end: 30, suffix: "+", label: "Institutions Served" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 120}>
                <div className="text-center relative text-white">
                  {i < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#54c7c2]/15" />
                  )}
                  <p className="text-4xl md:text-5xl font-extrabold text-[#54c7c2] tracking-tight">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2200} />
                  </p>
                  <p className="mt-2 text-[11px] text-[#7fb8c9] uppercase tracking-[0.18em] font-semibold">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ACADEMIC LIFECYCLE — Visual flow (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-[520px] mx-auto">
              <LightEyebrow center>Academic Lifecycle</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3 mb-3">
                From Enrolment to{" "}
                <span className="text-[#0e8c86]">Graduation — Covered</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#0e8c86]/10 via-[#0e8c86]/20 to-[#0e8c86]/10 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { step: "Enquiry" },
                { step: "Enrolment" },
                { step: "Academics" },
                { step: "Assessment" },
                { step: "Reporting" },
                { step: "Graduation" },
              ].map((s, i) => (
                <ScrollReveal key={s.step} delay={i * 80}>
                  <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#0e8c86]/15 flex items-center justify-center mb-3 shadow-sm group-hover:border-[#0e8c86]/40 group-hover:shadow-md transition-all">
                      <svg className="w-6 h-6 text-[#0e8c86]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />}
                        {i === 1 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></>}
                        {i === 2 && <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>}
                        {i === 3 && <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                        {i === 4 && <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>}
                        {i === 5 && <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 3.33 4 6 4s6-2 6-4v-5" /></>}
                      </svg>
                    </div>
                    <p className="text-gray-900 text-[13px] font-bold">
                      {s.step}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO IT'S FOR (White)
      ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <LightEyebrow center>Who It&apos;s For</LightEyebrow>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mt-3">
                Built for <span className="text-[#0e8c86]">Every Level of Education</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Primary Schools",
              "Secondary Schools",
              "TAFE Institutes",
              "Colleges & Universities",
              "International Schools",
              "Training Organisations",
            ].map((w, i) => (
              <ScrollReveal key={w} delay={i * 50}>
                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 text-center hover:border-[#0e8c86]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300">
                  <p className="text-gray-600 text-[12.5px] font-medium">{w}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ (Light gray)
      ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[800px] mx-auto px-6 xl:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <LightEyebrow center>FAQ</LightEyebrow>
              <h2 className="text-3xl md:text-[36px] font-extrabold leading-tight tracking-tight text-gray-900 mt-3">
                Frequently Asked{" "}
                <span className="text-[#0e8c86]">Questions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <FAQItem question={faq.q} answer={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <div className="bg-[#000000]">
        <PageCTA
          heading="Want to See the Campus System Live?"
          sub="Book a free demo tailored to your institution type and size."
        />
      </div>
    </main>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function LightEyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
      <div className="w-5 h-[2px] bg-[#0e8c86]" />
      <span className="text-[#0e8c86] text-[10px] font-bold tracking-[0.2em] uppercase">{children}</span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border transition-all duration-300 ${open ? "border-[#0e8c86]/20 bg-[#0e8c86]/[0.02]" : "border-gray-200 bg-white hover:border-gray-300"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className={`font-semibold text-[14px] pr-4 transition-colors ${open ? "text-[#0e8c86]" : "text-gray-900"}`}>{question}</span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-[#0e8c86] rotate-180" : "bg-gray-100"}`}>
          <svg className={`w-3.5 h-3.5 ${open ? "text-white" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-4 text-gray-500 text-[13px] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}