"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, type FormState } from "./actions";

const initialState: FormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-5">
      {/* Success / Error banner */}
      {state.status !== "idle" && (
        <div
          className={`px-5 py-4 rounded-xl text-sm font-medium border ${
            state.status === "success"
              ? "bg-[#0e8c86]/10 border-[#0e8c86]/30 text-[#0e8c86]"
              : "bg-red-500/10 border-red-500/30 text-red-500"
          }`}
        >
          {state.status === "success" ? "✓ " : "✕ "}
          {state.message}
        </div>
      )}

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="First Name" name="first_name" placeholder="John" required />
        <FormField label="Last Name" name="last_name" placeholder="Smith" required />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Work Email" name="email" type="email" placeholder="john@company.com" required />
        <FormField label="Phone Number" name="phone" type="tel" placeholder="+61 400 000 000" />
      </div>

      {/* Company */}
      <FormField label="Company / Organisation" name="company" placeholder="Your company name" />

      {/* Interest dropdown */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
          I&apos;m Interested In
        </label>
        <select
          name="interest"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#0e8c86]/60 focus:ring-2 focus:ring-[#0e8c86]/10 transition-all appearance-none cursor-pointer"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='rgba(0,0,0,0.3)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px center",
            backgroundSize: "12px",
          }}
        >
          <option value="">Select an option…</option>
          <optgroup label="Services">
            <option value="Custom Software Development">Custom Software Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Web & E-Commerce Development">Web & E-Commerce Development</option>
            <option value="Software Maintenance & Support">Software Maintenance & Support</option>
            <option value="IT Consulting">IT Consulting</option>
            <option value="Cloud Migration & Hosting">Cloud Migration & Hosting</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </optgroup>
          <optgroup label="Products">
            <option value="Attendance Management System">Attendance Management System</option>
            <option value="HR & Payroll Software">HR & Payroll Software</option>
            <option value="Campus Management System">Campus Management System</option>
            <option value="Accounting & Finance Software">Accounting & Finance Software</option>
            <option value="E-Voting System">E-Voting System</option>
            <option value="Visitor Management System">Visitor Management System</option>
            <option value="Canada Payroll & Taxation Software">Canada Payroll & Taxation Software</option>
          </optgroup>
          <option value="Something else / Not sure yet">Something else / Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
          Message <span className="text-[#0e8c86]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, timeline, or any questions you have…"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#0e8c86]/60 focus:ring-2 focus:ring-[#0e8c86]/10 transition-all resize-none"
        />
      </div>

      <SubmitButton />

      <p className="text-gray-400 text-[11px] text-center leading-relaxed">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-[#0e8c86] transition-colors">
          Privacy Policy
        </a>
        . We never share your information with third parties.
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group w-full relative py-4 rounded-xl font-bold text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(14,140,134,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
    >
      <span className="absolute inset-0 bg-[#0e8c86]" />
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#12a89f] to-[#0e8c86] transition-opacity duration-300" />
      <span className="relative text-white tracking-wide">
        {pending ? "Sending…" : "Send Message →"}
      </span>
    </button>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
        {label} {required && <span className="text-[#0e8c86]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#0e8c86]/60 focus:ring-2 focus:ring-[#0e8c86]/10 transition-all"
      />
    </div>
  );
}