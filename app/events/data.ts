export interface UpcomingEvent {
  slug: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  image: string;
  summary: string;
  spots: string;
  cta: string;
  ctaLink: string;
  description: string[];
  highlights: string[];
  agenda: { time: string; title: string }[];
  speakers?: { name: string; role: string }[];
}

export interface PastEvent {
  slug: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  image: string;
  summary: string;
  attendees: string;
  recording: boolean;
  description: string[];
  highlights: string[];
}

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    slug: "campus-management-live-demo-march-2026",
    title: "Campus Management System — Live Product Demo",
    type: "Webinar",
    date: "2026-03-18",
    time: "2:00 PM — 3:00 PM AEDT",
    location: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80",
    summary:
      "See our Campus Management System in action — student records, timetabling, fee management, and parent portals. Live Q&A included.",
    spots: "Limited spots available",
    cta: "Register Now",
    ctaLink:
      "https://calendly.com/110solutions-info/30min?back=1&month=2026-03",
    description: [
      "Join us for a comprehensive live demonstration of the 110 Solutions Campus Management System — the all-in-one platform trusted by school networks across Australia.",
      "In this 60-minute session, our product team will walk you through the complete system including student record management, automated timetabling with clash detection, online fee collection with parent portals, and role-based dashboards for teachers, parents, and administrators.",
      "Whether you're managing a single campus or a multi-school network, this demo will show you exactly how our platform can streamline operations, reduce admin workload, and improve the experience for students and parents alike.",
    ],
    highlights: [
      "Live walkthrough of all core modules",
      "See automated timetabling in real time",
      "Parent portal and fee collection demo",
      "Live Q&A with the product team",
      "Exclusive attendee discount on first-year licensing",
    ],
    agenda: [
      { time: "2:00 PM", title: "Welcome & Introduction" },
      { time: "2:10 PM", title: "Student Records & Enrolment Management" },
      { time: "2:25 PM", title: "Automated Timetabling Demo" },
      { time: "2:40 PM", title: "Fee Management & Parent Portal" },
      { time: "2:50 PM", title: "Live Q&A" },
    ],
    speakers: [
      { name: "Product Team", role: "110 Solutions" },
    ],
  },
  {
    slug: "hr-payroll-masterclass-april-2026",
    title: "HR & Payroll Automation Masterclass",
    type: "Workshop",
    date: "2026-04-08",
    time: "10:00 AM — 12:00 PM AEDT",
    location: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80",
    summary:
      "A hands-on workshop covering payroll automation, tax compliance, leave management, and employee self-service portal setup.",
    spots: "Free — 50 spots",
    cta: "Reserve Your Spot",
    ctaLink:
      "https://calendly.com/110solutions-info/30min?back=1&month=2026-04",
    description: [
      "Payroll errors, compliance risks, and manual admin are costing Australian businesses thousands every year. This hands-on masterclass will show you exactly how to eliminate them.",
      "Over two hours, our HR & Payroll specialists will guide you through automated award interpretation, penalty rate calculations, leave management workflows, and employee self-service portal setup — using our HR & Payroll platform.",
      "You'll leave with practical knowledge you can apply immediately — whether you're evaluating payroll solutions or looking to optimise your current setup.",
    ],
    highlights: [
      "Hands-on payroll automation walkthrough",
      "Australian award rate interpretation demo",
      "Leave management & self-service setup",
      "Tax compliance & STP reporting",
      "Free consultation for all attendees",
    ],
    agenda: [
      { time: "10:00 AM", title: "Welcome & Payroll Challenges Overview" },
      { time: "10:15 AM", title: "Automated Payroll Processing Demo" },
      { time: "10:45 AM", title: "Award Interpretation & Tax Compliance" },
      { time: "11:15 AM", title: "Leave Management & Self-Service Portal" },
      { time: "11:40 AM", title: "Q&A & Free Consultation Booking" },
    ],
  },
  {
    slug: "retail-pos-demo-april-2026",
    title: "Retail & POS System — Live Demo for Store Owners",
    type: "Webinar",
    date: "2026-04-22",
    time: "1:00 PM — 2:00 PM AEDT",
    location: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Designed for retail business owners — see how our POS system handles inventory, barcode scanning, multi-store management, and sales analytics.",
    spots: "Limited spots available",
    cta: "Register Now",
    ctaLink:
      "https://calendly.com/110solutions-info/30min?back=1&month=2026-04",
    description: [
      "If you're running a retail business with one store or twenty, this live demo is for you. We'll show you exactly how our Retail & POS system works — from the checkout counter to the back office.",
      "See real-time inventory sync across multiple stores, barcode scanning, customer loyalty programmes, and the analytics dashboard that gives you instant visibility into what's selling, where, and why.",
      "This session is designed for retail business owners and operations managers who want to modernise their point of sale and gain a competitive edge through data-driven decisions.",
    ],
    highlights: [
      "Multi-store POS walkthrough",
      "Real-time inventory sync demo",
      "Customer loyalty programme setup",
      "Sales analytics & reporting dashboard",
      "Live Q&A with our retail team",
    ],
    agenda: [
      { time: "1:00 PM", title: "Welcome & Retail Challenges" },
      { time: "1:10 PM", title: "POS Checkout & Barcode Scanning" },
      { time: "1:25 PM", title: "Inventory Management Across Stores" },
      { time: "1:40 PM", title: "Analytics & Loyalty Programme" },
      { time: "1:50 PM", title: "Live Q&A" },
    ],
  },
  {
    slug: "supply-chain-visibility-workshop-may-2026",
    title: "End-to-End Supply Chain Visibility Workshop",
    type: "Workshop",
    date: "2026-05-06",
    time: "10:00 AM — 12:30 PM AEDT",
    location: "110 Solutions HQ, Bella Vista + Online",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
    summary:
      "Learn how to gain real-time visibility across procurement, inventory, logistics, and supplier management using our SCM platform.",
    spots: "In-person: 20 spots | Online: Unlimited",
    cta: "Register Now",
    ctaLink:
      "https://calendly.com/110solutions-info/30min?back=1&month=2026-05",
    description: [
      "Supply chain disruptions are the new normal. This workshop will show you how to build resilience and real-time visibility into every link of your supply chain.",
      "Our SCM specialists will demonstrate procurement automation, multi-warehouse inventory tracking, supplier management, carrier integration, and AI-assisted demand forecasting — live on our platform.",
      "Available both in-person at our Bella Vista HQ and online via Zoom. In-person attendees get hands-on access to the platform during the session.",
    ],
    highlights: [
      "Procurement automation walkthrough",
      "Multi-warehouse inventory tracking",
      "Supplier management & scoring",
      "AI demand forecasting demo",
      "Hybrid: In-person + Online",
    ],
    agenda: [
      { time: "10:00 AM", title: "Welcome & Supply Chain Challenges" },
      { time: "10:20 AM", title: "Procurement & Supplier Management" },
      { time: "10:50 AM", title: "Inventory & Warehouse Tracking" },
      { time: "11:20 AM", title: "Break" },
      { time: "11:30 AM", title: "Logistics & Demand Forecasting" },
      { time: "12:00 PM", title: "Q&A & Networking" },
    ],
  },
];

export const PAST_EVENTS: PastEvent[] = [
  {
    slug: "accounting-finance-demo-feb-2026",
    title: "Accounting & Finance Software — Product Walkthrough",
    type: "Webinar",
    date: "2026-02-20",
    time: "2:00 PM — 3:00 PM AEDT",
    location: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    summary:
      "A complete walkthrough of our Accounting & Finance platform — multi-entity support, automated bank feeds, tax compliance, and reporting.",
    attendees: "87 attendees",
    recording: true,
    description: [
      "This session provided a complete walkthrough of the 110 Solutions Accounting & Finance platform, covering multi-entity consolidation, automated bank feeds, real-time financial reporting, and Australian tax compliance.",
      "87 finance professionals and business owners attended the live session, with over 30 questions answered during the Q&A.",
    ],
    highlights: [
      "Multi-entity financial consolidation",
      "Automated bank feed reconciliation",
      "BAS/IAS tax compliance engine",
      "Real-time reporting dashboards",
    ],
  },
  {
    slug: "visitor-management-launch-jan-2026",
    title: "Visitor Management System — Product Launch Event",
    type: "Product Launch",
    date: "2026-01-30",
    time: "11:00 AM — 12:30 PM AEDT",
    location: "110 Solutions HQ, Bella Vista",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    summary:
      "The official launch of our Visitor Management System — featuring live demos of kiosk check-in, badge printing, and host notifications.",
    attendees: "45 attendees",
    recording: true,
    description: [
      "We officially launched our Visitor Management System at our Bella Vista HQ with 45 attendees from corporate facilities, government, and education sectors.",
      "The event featured live demonstrations of tablet kiosk check-in, automatic badge printing, digital NDA signing, instant host notifications, and real-time evacuation roll call capabilities.",
    ],
    highlights: [
      "Live kiosk check-in demo",
      "Badge printing & NDA signing",
      "Host notification system",
      "Emergency roll call feature",
    ],
  },
  {
    slug: "digital-transformation-summit-dec-2025",
    title: "Digital Transformation Summit 2025",
    type: "Conference",
    date: "2025-12-05",
    time: "9:00 AM — 5:00 PM AEDT",
    location: "ICC Sydney",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    summary:
      "110 Solutions was a featured exhibitor and speaker at the Digital Transformation Summit, presenting our enterprise product suite to 500+ attendees.",
    attendees: "500+ attendees",
    recording: false,
    description: [
      "110 Solutions was a featured exhibitor and speaker at the Digital Transformation Summit 2025 at ICC Sydney, Australia's premier enterprise technology event.",
      "Our team presented the full 110 Solutions product suite to over 500 attendees, including CIOs, CTOs, and IT decision-makers from Australia's largest enterprises. We also delivered a keynote on 'Practical Digital Transformation for SMBs'.",
    ],
    highlights: [
      "Featured exhibitor at ICC Sydney",
      "Keynote: Practical Digital Transformation for SMBs",
      "Full product suite showcase",
      "500+ enterprise attendees",
    ],
  },
  {
    slug: "e-voting-security-webinar-nov-2025",
    title: "E-Voting Security: Building Trust in Digital Democracy",
    type: "Webinar",
    date: "2025-11-14",
    time: "2:00 PM — 3:30 PM AEDT",
    location: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80",
    summary:
      "A deep dive into the security architecture behind our E-Voting System — encryption, audit trails, voter authentication, and compliance.",
    attendees: "120 attendees",
    recording: true,
    description: [
      "This technical webinar explored the security architecture behind the 110 Solutions E-Voting System, covering end-to-end encryption, immutable audit trails, multi-factor voter authentication, and compliance frameworks.",
      "120 attendees including government officials, university administrators, and IT security professionals joined the live session.",
    ],
    highlights: [
      "End-to-end encryption architecture",
      "Immutable audit trail system",
      "Multi-factor voter authentication",
      "Compliance & certification overview",
    ],
  },
  {
    slug: "attendance-tracking-workshop-oct-2025",
    title: "Smart Attendance Tracking for Modern Workplaces",
    type: "Workshop",
    date: "2025-10-22",
    time: "10:00 AM — 11:30 AM AEDT",
    location: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
    summary:
      "A practical workshop on implementing biometric, GPS, and QR-based attendance tracking for businesses with distributed teams.",
    attendees: "65 attendees",
    recording: true,
    description: [
      "This hands-on workshop covered the implementation of modern attendance tracking solutions for businesses with distributed teams — including biometric, GPS-based, and QR code attendance methods.",
      "65 HR managers and operations leaders participated, with live demos of integration with payroll systems for automated timesheet generation.",
    ],
    highlights: [
      "Biometric attendance setup",
      "GPS & QR code tracking",
      "Payroll integration demo",
      "Multi-site deployment strategies",
    ],
  },
];

export const ALL_EVENTS = [...UPCOMING_EVENTS, ...PAST_EVENTS];

export const EVENT_TYPES_ALL = [
  "All",
  ...Array.from(
    new Set([
      ...UPCOMING_EVENTS.map((e) => e.type),
      ...PAST_EVENTS.map((e) => e.type),
    ])
  ),
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getTypeColor(type: string) {
  switch (type) {
    case "Webinar":
      return "bg-[#0e8c86] text-white";
    case "Workshop":
      return "bg-amber-500 text-white";
    case "Conference":
      return "bg-blue-600 text-white";
    case "Product Launch":
      return "bg-purple-600 text-white";
    default:
      return "bg-gray-500 text-white";
  }
}