export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  summary: string;
  heroImage: string;
  keyStat: { val: string; label: string };
  challenge: string[];
  solution: string[];
  results: { val: string; label: string }[];
  techStack: string[];
  testimonial?: { quote: string; name: string; role: string };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "healthcare-patient-management-platform",
    title: "Unified Patient Management Platform for a Multi-Clinic Healthcare Group",
    client: "Multi-Clinic Healthcare Group",
    industry: "Healthcare",
    service: "Custom Software Development",
    summary:
      "Replaced fragmented paper-based systems across 12 clinics with a unified digital platform — reducing patient wait times by 40% and administrative workload by 60%.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
    keyStat: { val: "40%", label: "Reduced Wait Times" },
    challenge: [
      "12 clinics operating on disconnected paper-based systems with no centralised patient records.",
      "Duplicate patient data entry across locations, leading to errors and compliance risks.",
      "Appointment scheduling relied on phone calls and manual logs — causing double-bookings and long wait times.",
      "No real-time visibility into clinic capacity, staff utilisation, or patient flow across the network.",
    ],
    solution: [
      "Built a custom, cloud-based Patient Management Platform accessible across all 12 clinics with role-based access control.",
      "Centralised patient records with a single source of truth — medical history, appointments, billing, and communications.",
      "Implemented an online booking system with automated reminders, reducing no-shows by 35%.",
      "Created real-time dashboards for clinic managers showing patient flow, wait times, and staff utilisation.",
      "Integrated with Medicare and private health insurance systems for automated billing and claims processing.",
    ],
    results: [
      { val: "40%", label: "Reduced Wait Times" },
      { val: "60%", label: "Less Admin Work" },
      { val: "35%", label: "Fewer No-Shows" },
      { val: "12", label: "Clinics Connected" },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "HL7 FHIR Integration"],
    testimonial: {
      quote:
        "110 Solutions didn't just build us software — they understood our clinical workflows and designed a system that our staff actually want to use. The impact on patient experience has been remarkable.",
      name: "Dr. Sarah Mitchell",
      role: "Chief Operating Officer",
    },
  },
  {
    slug: "logistics-supply-chain-automation",
    title: "End-to-End Supply Chain Automation for a National Distributor",
    client: "National Distribution Company",
    industry: "Logistics & Distribution",
    service: "Supply Chain Management",
    summary:
      "Automated procurement, warehouse operations, and delivery tracking — resulting in 50% faster order fulfilment and 30% reduction in operational costs.",
    heroImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
    keyStat: { val: "50%", label: "Faster Fulfilment" },
    challenge: [
      "Manual procurement processes with purchase orders handled via email and spreadsheets.",
      "No real-time inventory visibility — leading to frequent stockouts and overstocking.",
      "Delivery tracking relied on phone calls to drivers with no centralised status updates.",
      "Disconnected systems between procurement, warehouse, and accounting teams.",
    ],
    solution: [
      "Deployed our Supply Chain Management platform with automated procurement workflows and supplier management.",
      "Implemented real-time inventory tracking with low-stock alerts and automated reorder points across 3 warehouses.",
      "Integrated GPS-based delivery tracking with driver mobile app and customer notification system.",
      "Connected the platform with their existing accounting system for automated PO matching and invoice processing.",
    ],
    results: [
      { val: "50%", label: "Faster Fulfilment" },
      { val: "30%", label: "Cost Reduction" },
      { val: "99%", label: "Order Accuracy" },
      { val: "3", label: "Warehouses Connected" },
    ],
    techStack: ["React", "Node.js", "MongoDB", "Google Cloud", "REST APIs"],
    testimonial: {
      quote:
        "We went from chasing spreadsheets and phone calls to having complete visibility across our entire supply chain. The efficiency gains paid for the system within 6 months.",
      name: "James Crawford",
      role: "Operations Director",
    },
  },
  {
    slug: "education-campus-management-rollout",
    title: "Campus Management System Rollout for a Private School Network",
    client: "Private School Network (K-12)",
    industry: "Education",
    service: "Campus Management System",
    summary:
      "Unified student records, timetabling, fee management, and parent communications across 5 campuses — saving 20+ hours of admin time per week.",
    heroImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80",
    keyStat: { val: "20+ hrs", label: "Saved Weekly" },
    challenge: [
      "5 campuses operating on different systems with no unified student records or reporting.",
      "Timetabling done manually in spreadsheets, frequently resulting in clashes and room conflicts.",
      "Fee collection was paper-based — parents received printed invoices and paid via bank transfer with no tracking.",
      "Teachers had no digital tools for attendance, grading, or parent communication.",
    ],
    solution: [
      "Deployed our Campus Management System across all 5 campuses with centralised admin dashboard.",
      "Automated timetabling with intelligent clash detection, room allocation, and teacher assignment.",
      "Launched online fee payment portal with automated invoicing, reminders, and instalment tracking.",
      "Rolled out dedicated portals for teachers (attendance, grading), parents (fee status, communications), and students.",
    ],
    results: [
      { val: "20+", label: "Hours Saved Weekly" },
      { val: "5", label: "Campuses Unified" },
      { val: "95%", label: "Fee Collection Rate" },
      { val: "0", label: "Timetable Clashes" },
    ],
    techStack: ["Next.js", "PostgreSQL", "AWS", "Stripe", "SendGrid"],
  },
  {
    slug: "corporate-hr-payroll-transformation",
    title: "HR & Payroll Digital Transformation for a Hospitality Group",
    client: "Multi-Venue Hospitality Group",
    industry: "Hospitality",
    service: "HR & Payroll Software",
    summary:
      "Replaced manual HR processes and error-prone payroll with an automated system — eliminating payroll errors and saving 25+ hours per month in admin time.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80",
    keyStat: { val: "100%", label: "Payroll Accuracy" },
    challenge: [
      "300+ employees across 8 venues with different award rates, penalty rates, and shift structures.",
      "Payroll calculated manually in spreadsheets — frequent errors leading to underpayments and compliance risk.",
      "Leave management handled via paper forms — no visibility into balances or upcoming absences.",
      "No employee self-service — HR team fielded dozens of payslip and leave balance queries weekly.",
    ],
    solution: [
      "Implemented our HR & Payroll platform with automated award interpretation and penalty rate calculations.",
      "Integrated attendance system for automatic timesheet generation — clock-in data flows directly to payroll.",
      "Launched employee self-service portal for payslips, leave requests, and personal details updates.",
      "Configured multi-entity management so each venue maintains its own cost centre while reporting consolidates at group level.",
    ],
    results: [
      { val: "100%", label: "Payroll Accuracy" },
      { val: "25+", label: "Hours Saved Monthly" },
      { val: "300+", label: "Employees Managed" },
      { val: "8", label: "Venues Connected" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Xero Integration"],
    testimonial: {
      quote:
        "Payroll used to take our admin team 3 days every fortnight. Now it takes 2 hours. The accuracy improvement alone was worth the investment — but the time savings changed how we operate.",
      name: "Lisa Nguyen",
      role: "Group HR Manager",
    },
  },
  {
    slug: "retail-pos-multi-store-deployment",
    title: "Multi-Store POS & Inventory System for a Fashion Retailer",
    client: "Fashion Retail Chain",
    industry: "Retail",
    service: "Retail & POS Management",
    summary:
      "Deployed a unified POS and inventory system across 15 stores — enabling real-time stock visibility, 10-second checkouts, and 35% sales increase through data-driven decisions.",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80",
    keyStat: { val: "35%", label: "Sales Increase" },
    challenge: [
      "15 retail stores using standalone cash registers with no centralised data or inventory visibility.",
      "Stock transfers between stores required manual phone calls and spreadsheet tracking.",
      "No customer purchase history or loyalty programme — missing repeat-purchase opportunities.",
      "Sales reporting was done monthly via manual compilation — too slow for seasonal retail decisions.",
    ],
    solution: [
      "Deployed our Retail & POS system across all 15 stores with centralised management dashboard.",
      "Implemented real-time inventory sync with inter-store transfer management and low-stock alerts.",
      "Launched customer loyalty programme with points, purchase history tracking, and targeted promotions.",
      "Configured real-time sales analytics with daily reports, top-seller tracking, and staff performance metrics.",
    ],
    results: [
      { val: "35%", label: "Sales Increase" },
      { val: "10s", label: "Avg Checkout Time" },
      { val: "15", label: "Stores Connected" },
      { val: "99.9%", label: "Stock Accuracy" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Barcode API"],
    testimonial: {
      quote:
        "For the first time, I can see exactly what's selling in every store in real time. The inventory visibility alone has transformed how we buy and allocate stock across locations.",
      name: "Michael Torres",
      role: "Retail Operations Manager",
    },
  },
  {
    slug: "government-visitor-management-system",
    title: "Visitor Management System for a Government Department",
    client: "State Government Department",
    industry: "Government",
    service: "Visitor Management System",
    summary:
      "Replaced paper sign-in books across 4 government buildings with a digital visitor management system — achieving full WHS compliance and enabling real-time evacuation roll calls.",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    keyStat: { val: "100%", label: "WHS Compliance" },
    challenge: [
      "4 government buildings using paper visitor logs with no digital records or search capability.",
      "No way to conduct real-time evacuation roll calls — visitor whereabouts unknown during drills.",
      "NDA and security document signing handled on paper — difficult to retrieve and audit.",
      "Reception staff spent significant time manually notifying hosts when visitors arrived.",
    ],
    solution: [
      "Deployed tablet-based kiosks at all 4 building reception areas with QR code pre-registration.",
      "Implemented real-time visitor dashboard with live roll call for emergency evacuation procedures.",
      "Configured digital NDA and security document signing at check-in — auto-archived with tamper-proof timestamps.",
      "Set up instant host notifications via email and SMS — eliminating manual reception follow-up.",
    ],
    results: [
      { val: "100%", label: "WHS Compliance" },
      { val: "<30s", label: "Check-In Time" },
      { val: "4", label: "Buildings Secured" },
      { val: "0", label: "Paper Sign-Ins" },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Twilio SMS"],
  },
];