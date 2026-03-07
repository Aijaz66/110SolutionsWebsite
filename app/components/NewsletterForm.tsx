"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        placeholder="Enter your work email"
        className="flex-1 px-5 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder:text-white/30 text-[14px] outline-none focus:border-[#54c7c2]/50 focus:bg-white/[0.08] transition-all"
      />
      <button
        type="submit"
        className="group relative px-7 py-3.5 rounded-xl font-bold text-[14px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(84,199,194,0.3)] flex-shrink-0"
      >
        <span className="absolute inset-0 bg-[#54c7c2]" />
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6edbd5] to-[#54c7c2] transition-opacity" />
        <span className="relative text-[#060a0e] tracking-wide">
          Subscribe
        </span>
      </button>
    </form>
  );
}