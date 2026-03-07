export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  summary: string;
  heroImage: string;
  image: string;
  keyStat: { val: string; label: string };
  challenge: string[];
  solution: string[];
  results: { val: string; label: string }[];
  techStack: string[];
  testimonial?: { quote: string; name: string; role: string; org?: string };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "national-school-network-campus-system",
    industry: "Education",
    service: "Product Deployment",
    title: "Unifying 12 Campuses Under One Digital Platform",
    client: "National School Network",
    summary:
      "A large school network operating 12 campuses struggled with fragmented student data, manual timetabling, and inconsistent fee collection. We deployed our Campus Management System across all locations — centralising operations and cutting admin workload by 60%.",
    heroImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    keyStat: { val: "60%", label: "Admin Time Reduced" },
    challenge: [
      "12 campuses using 5 different systems. No centralised student records.",
      "Manual timetabling took 3 weeks per term with frequent clashes.",
      "Fee collection was inconsistent with 25% of invoices going unpaid past 30 days.",
      "No unified reporting across locations — school board had no visibility into network-wide performance.",
    ],
    solution: [
      "Deployed the 110 Solutions Campus Management System across all 12 campuses with centralised student records.",
      "Automated timetabling with intelligent clash detection, reducing generation time from 3 weeks to 3 hours.",
      "Launched online fee collection with parent portal, automated invoicing, reminders, and instalment tracking.",
      "Rolled out role-based portals for teachers, parents, and admin with real-time analytics dashboards.",
    ],
    results: [
      { val: "60%", label: "Admin Time Reduced" },
      { val: "95%", label: "Fee Collection Rate" },
      { val: "3 hrs", label: "Timetable Generation" },
      { val: "12", label: "Campuses Unified" },
    ],
    techStack: ["Next.js", "PostgreSQL", "AWS", "Stripe", "SendGrid"],
    testimonial: {
      quote:
        "We went from managing chaos across 12 schools to having everything in one place. The parent portal alone saved us hundreds of hours per term.",
      name: "Director of Operations",
      role: "Director of Operations",
      org: "National School Network",
    },
  },
  {
    slug: "construction-firm-hr-payroll",
    industry: "Construction",
    service: "Custom Software",
    title: "Automating HR & Payroll for 300+ Field Workers",
    client: "Regional Construction Firm",
    summary:
      "A construction company with 300+ employees across multiple sites was processing payroll manually in spreadsheets — leading to errors, compliance risks, and 20+ hours of admin per pay cycle. We implemented our HR & Payroll system with biometric attendance integration.",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    keyStat: { val: "100%", label: "Payroll Accuracy" },
    challenge: [
      "Payroll processed manually in Excel for 300+ workers across 8 construction sites.",
      "Attendance tracked on paper timesheets — impossible to verify hours or detect discrepancies.",
      "Frequent payroll errors causing employee disputes and compliance risks.",
      "No leave tracking system — managers tracked leave in personal notebooks.",
    ],
    solution: [
      "Implemented the 110 Solutions HR & Payroll system with biometric attendance integration at all 8 sites.",
      "Automated timesheet generation from biometric clock-in data flowing directly to payroll.",
      "Launched employee self-service portal for payslips, leave requests, and personal details updates.",
      "Configured automated tax calculations, superannuation processing, and compliance reporting.",
    ],
    results: [
      { val: "20+ hrs", label: "Saved Per Pay Cycle" },
      { val: "100%", label: "Payroll Accuracy" },
      { val: "Zero", label: "Payroll Disputes" },
      { val: "8", label: "Sites Integrated" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Biometric API"],
    testimonial: {
      quote:
        "Payroll used to take our admin team an entire week. Now it's done in half a day with zero errors. The ROI was immediate.",
      name: "Operations Manager",
      role: "Operations Manager",
      org: "Regional Construction Firm",
    },
  },
  {
    slug: "retail-chain-pos-rollout",
    industry: "Retail",
    service: "Product Deployment",
    title: "Rolling Out POS Across 22 Retail Stores",
    client: "Fashion Retail Chain",
    summary:
      "A growing fashion retailer with 22 stores was using outdated cash registers with no inventory visibility. We deployed our Retail & POS system across all locations — giving them real-time stock tracking, unified sales analytics, and a 35% increase in sales efficiency.",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    keyStat: { val: "35%", label: "Sales Efficiency Increase" },
    challenge: [
      "22 stores using basic cash registers with no digital inventory or centralised data.",
      "No visibility into stock levels across locations — frequent stockouts and overstocking.",
      "Sales reporting was manual and delayed by 2 weeks — too slow for seasonal decisions.",
      "No customer purchase history or loyalty programme — missing repeat-purchase opportunities.",
    ],
    solution: [
      "Deployed the 110 Solutions Retail & POS system at all 22 locations with real-time inventory sync.",
      "Implemented barcode scanning, inter-store transfer management, and low-stock alerts.",
      "Launched customer loyalty programme with points, purchase history, and targeted promotions.",
      "Configured multi-store analytics dashboard with daily reports and staff performance metrics.",
    ],
    results: [
      { val: "35%", label: "Sales Efficiency Increase" },
      { val: "99.9%", label: "Stock Accuracy" },
      { val: "Real-Time", label: "Inventory Visibility" },
      { val: "22", label: "Stores Deployed" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Barcode API"],
    testimonial: {
      quote:
        "We finally know what's in stock, what's selling, and where. The inter-store transfer feature alone saved us from thousands in dead stock.",
      name: "Head of Retail Operations",
      role: "Head of Retail Operations",
      org: "Fashion Retail Chain",
    },
  },
  {
    slug: "logistics-company-supply-chain",
    industry: "Logistics",
    service: "Custom Software",
    title: "End-to-End Supply Chain Visibility for National Distributor",
    client: "National Distribution Company",
    summary:
      "A national distributor managing 200+ suppliers and 3 warehouses had zero real-time visibility into their supply chain. We built a custom SCM solution that reduced fulfilment time by 3x and cut procurement costs by 40%.",
    heroImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    keyStat: { val: "3x", label: "Faster Fulfilment" },
    challenge: [
      "200+ suppliers managed in spreadsheets with no centralised supplier management.",
      "No real-time inventory visibility across 3 warehouses.",
      "Order fulfilment took 5-7 days on average — well below industry standards.",
      "Procurement decisions were reactive with no demand forecasting capability.",
    ],
    solution: [
      "Built a custom supply chain management platform integrated with their existing ERP.",
      "Implemented multi-warehouse inventory tracking with real-time stock levels and automated reorder points.",
      "Deployed carrier integration with GPS tracking and customer delivery notifications.",
      "Configured AI-assisted demand forecasting to enable proactive procurement decisions.",
    ],
    results: [
      { val: "3x", label: "Faster Fulfilment" },
      { val: "40%", label: "Procurement Cost Reduction" },
      { val: "200+", label: "Suppliers Managed" },
      { val: "Real-Time", label: "Warehouse Visibility" },
    ],
    techStack: ["React", "Node.js", "MongoDB", "Google Cloud", "REST APIs"],
    testimonial: {
      quote:
        "We went from flying blind to having complete visibility across our entire supply chain. The demand forecasting alone has saved us hundreds of thousands.",
      name: "Supply Chain Director",
      role: "Supply Chain Director",
      org: "National Distribution Company",
    },
  },
  {
    slug: "corporate-hq-visitor-management",
    industry: "Corporate",
    service: "Product Deployment",
    title: "Digitising Reception for a 2,000-Person Corporate HQ",
    client: "National Financial Services Firm",
    summary:
      "A financial services company with 2,000+ employees and 200+ daily visitors was using paper sign-in books — creating security gaps and compliance risks. We deployed our Visitor Management System with badge printing and instant host notifications.",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    keyStat: { val: "100%", label: "Digital Compliance" },
    challenge: [
      "Paper sign-in books at 3 reception points with no digital records or search capability.",
      "No way to know who was on-site during emergencies — visitor whereabouts unknown during drills.",
      "NDA and security document signing was manual and inconsistent — difficult to audit.",
      "Reception staff spent 30% of their time chasing hosts to collect visitors.",
    ],
    solution: [
      "Deployed the 110 Solutions Visitor Management System with iPad kiosks at all 3 reception points.",
      "Implemented pre-registration with QR check-in, automatic badge printing, and instant host notifications via Teams.",
      "Configured digital NDA and security document signing at check-in — auto-archived with tamper-proof timestamps.",
      "Set up real-time visitor dashboard with live roll call for emergency evacuation procedures.",
    ],
    results: [
      { val: "< 30s", label: "Avg Check-In Time" },
      { val: "100%", label: "Digital Compliance" },
      { val: "Zero", label: "Paper Sign-Ins" },
      { val: "3", label: "Receptions Digitised" },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Twilio SMS"],
    testimonial: {
      quote:
        "The professionalism of our reception area transformed overnight. Visitors are impressed, hosts are notified instantly, and we're fully compliant for audits.",
      name: "Facilities Manager",
      role: "Facilities Manager",
      org: "National Financial Services Firm",
    },
  },
  {
    slug: "accounting-firm-finance-software",
    industry: "Professional Services",
    service: "Product Deployment",
    title: "Replacing Legacy Accounting for a Multi-Entity Practice",
    client: "Mid-Tier Accounting Practice",
    summary:
      "An accounting practice managing 5 business entities was running on outdated desktop software with no multi-entity consolidation. We deployed our Accounting & Finance system — giving them real-time reporting, automated tax compliance, and 60% faster month-end close.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    keyStat: { val: "60%", label: "Faster Month-End Close" },
    challenge: [
      "5 entities managed on separate desktop accounting software with no consolidated view.",
      "Month-end close took 2 weeks of manual effort across the team.",
      "Tax compliance was manual and error-prone — risking penalties.",
      "Bank reconciliation done by hand — time-consuming and prone to mismatches.",
    ],
    solution: [
      "Deployed the 110 Solutions Accounting & Finance system with multi-entity support.",
      "Configured automated bank feeds with intelligent transaction matching and reconciliation.",
      "Set up real-time financial reporting with consolidated dashboards across all 5 entities.",
      "Implemented tax compliance engine with automated BAS/IAS preparation and lodgement.",
    ],
    results: [
      { val: "60%", label: "Faster Month-End Close" },
      { val: "5", label: "Entities Consolidated" },
      { val: "Real-Time", label: "Financial Reporting" },
      { val: "100%", label: "Tax Compliance" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Xero Integration"],
    testimonial: {
      quote:
        "Having all five entities in one system with real-time consolidated reporting has been transformational. We can't believe we waited this long to switch.",
      name: "Managing Partner",
      role: "Managing Partner",
      org: "Mid-Tier Accounting Practice",
    },
  },
];