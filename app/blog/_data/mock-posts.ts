import { BlogPost } from "@/app/lib/types/blog";

// ─── Mock Blog Posts ────────────────────────────────────────────────────────────

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Why Custom Software Beats Off-the-Shelf Solutions for Enterprise",
    slug: "custom-software-vs-off-the-shelf",
    excerpt:
      "Off-the-shelf software might seem cheaper upfront, but the hidden costs of workarounds, licensing, and lost productivity add up fast. Here's why custom-built wins for growing enterprises.",
    coverImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    published: true,
    authorName: "Aijaz Ahmed",
    tags: ["Custom Software", "Enterprise", "Strategy"],
    readingTime: "7 min read",
    createdAt: "2026-03-01T10:00:00Z",
    updatedAt: "2026-03-01T10:00:00Z",
    publishedAt: "2026-03-01T10:00:00Z",
    content: `
      <h2>The Allure of Off-the-Shelf</h2>
      <p>When businesses first look at software options, off-the-shelf products are incredibly tempting. They're available immediately, come with polished marketing, and have a clear price tag. For small teams with generic needs, they can be a perfectly fine choice.</p>
      <p>But as your business scales, those generic solutions start to crack. You find yourself building spreadsheets to fill gaps, paying for features you'll never use, and training your team to adapt their workflow to the software — instead of the other way around.</p>

      <h2>The Hidden Costs Nobody Talks About</h2>
      <p>Let's break down what "affordable" off-the-shelf software actually costs an enterprise over 3 years:</p>
      <ul>
        <li><strong>Per-seat licensing:</strong> $50–$200/user/month × 200 employees = $120,000–$480,000/year</li>
        <li><strong>Integration middleware:</strong> $30,000–$80,000 to connect with your existing systems</li>
        <li><strong>Workaround labor:</strong> 10+ hours/week of manual processes the software can't handle</li>
        <li><strong>Data migration:</strong> When you inevitably switch vendors, expect $50,000+ in migration costs</li>
      </ul>

      <blockquote>The most expensive software is the one that almost does what you need. The cost of "almost" compounds every single day.</blockquote>

      <h2>When Custom Software Makes Sense</h2>
      <p>Custom software isn't for everyone. But if your business meets two or more of these criteria, it's time to seriously consider it:</p>
      <ul>
        <li>Your core processes are <strong>unique to your industry</strong> or competitive advantage</li>
        <li>You're spending more than <strong>$100,000/year</strong> on SaaS subscriptions</li>
        <li>Your team spends significant time on <strong>manual workarounds</strong></li>
        <li>You need to <strong>integrate 3+ systems</strong> that don't natively talk to each other</li>
        <li>Data ownership and <strong>compliance requirements</strong> are critical to your operations</li>
      </ul>

      <h2>The ROI of Building Custom</h2>
      <p>At 110 Solutions, we've seen clients achieve 300-400% ROI within 18 months of deploying custom solutions. The key is in the compounding efficiency gains — every process you automate and every workaround you eliminate frees up your team to focus on revenue-generating activities.</p>
      <p>One of our enterprise clients replaced four separate SaaS tools with a single custom platform. Their annual software spend dropped by 60%, and their team's operational efficiency improved by 40%.</p>

      <h2>Making the Right Choice</h2>
      <p>The decision between custom and off-the-shelf isn't binary. Many successful enterprises use a hybrid approach — off-the-shelf for commodity functions (email, basic accounting) and custom-built for their core differentiating processes.</p>
      <p>The key is to be intentional. Audit your current software stack, identify where you're losing time and money, and make data-driven decisions about where custom development will deliver the highest return.</p>
    `,
  },
  {
    id: "2",
    title: "The True Cost of Technical Debt: A CTO's Survival Guide",
    slug: "true-cost-of-technical-debt",
    excerpt:
      "Technical debt is the silent killer of engineering velocity. Learn how to identify, measure, and systematically eliminate it before it cripples your team's ability to ship.",
    coverImage:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    published: true,
    authorName: "110 Solutions",
    tags: ["Technical Debt", "Engineering", "CTO Guide"],
    readingTime: "9 min read",
    createdAt: "2026-02-22T09:00:00Z",
    updatedAt: "2026-02-22T09:00:00Z",
    publishedAt: "2026-02-22T09:00:00Z",
    content: `
      <h2>What Is Technical Debt, Really?</h2>
      <p>Technical debt is a metaphor coined by Ward Cunningham to describe the implied cost of future rework caused by choosing an easy or quick solution now instead of a better approach that would take longer. Like financial debt, it accrues interest — and if left unchecked, it can bankrupt your engineering productivity.</p>
      <p>Every software team accumulates technical debt. It's not inherently bad — sometimes taking on debt is a strategic decision to meet a market window. The problem is when it's <strong>unintentional, unmeasured, and unmanaged</strong>.</p>

      <h2>The Four Types of Technical Debt</h2>
      <ul>
        <li><strong>Deliberate & Prudent:</strong> "We know this isn't ideal, but we need to ship by Friday. We'll refactor in Sprint 12." This is healthy debt with a clear repayment plan.</li>
        <li><strong>Deliberate & Reckless:</strong> "We don't have time for tests." This is the dangerous kind — you know it's wrong but do it anyway without a plan to fix it.</li>
        <li><strong>Inadvertent & Prudent:</strong> "Now we know how we should have done it." This is natural learning — you discover a better pattern after building v1.</li>
        <li><strong>Inadvertent & Reckless:</strong> "What's a design pattern?" This comes from inexperience and lack of engineering standards.</li>
      </ul>

      <blockquote>You can't manage what you can't measure. The first step to tackling technical debt is making it visible to the entire organization — not just engineering.</blockquote>

      <h2>Measuring the Impact</h2>
      <p>Here are concrete metrics that reveal technical debt's impact on your organization:</p>
      <ul>
        <li><strong>Deployment frequency:</strong> Has it dropped from weekly to monthly? Debt is likely slowing you down.</li>
        <li><strong>Bug reopen rate:</strong> If bugs keep coming back, the underlying architecture has issues.</li>
        <li><strong>Onboarding time:</strong> If new developers take 3+ months to be productive, your codebase is too complex.</li>
        <li><strong>Feature delivery time:</strong> Track how long similar-sized features take over time. If it's increasing, debt is accumulating.</li>
      </ul>

      <h2>A Systematic Approach to Repayment</h2>
      <p>At 110 Solutions, we recommend the "20% rule" for our clients: dedicate 20% of every sprint to debt repayment. This isn't a luxury — it's maintenance. You wouldn't skip oil changes on a fleet of delivery trucks, and you shouldn't skip maintenance on your software.</p>
      <p>Prioritize debt items by their "interest rate" — how much they slow down current development. A poorly designed database schema that affects every feature gets fixed before a messy utility function that rarely changes.</p>

      <h2>Prevention Is Cheaper Than Cure</h2>
      <p>The best way to handle technical debt is to prevent unnecessary accumulation. This means investing in code reviews, automated testing, clear architecture documentation, and a culture where engineers feel empowered to push back on unrealistic deadlines.</p>
    `,
  },
  {
    id: "3",
    title: "Cloud Migration in 2026: What Australian Businesses Need to Know",
    slug: "cloud-migration-australia-2026",
    excerpt:
      "With new data sovereignty laws and the rise of multi-cloud strategies, migrating to the cloud in 2026 looks very different. Here's your updated roadmap for Australian enterprises.",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    published: true,
    authorName: "110 Solutions",
    tags: ["Cloud Migration", "Australia", "Infrastructure"],
    readingTime: "6 min read",
    createdAt: "2026-02-15T08:30:00Z",
    updatedAt: "2026-02-15T08:30:00Z",
    publishedAt: "2026-02-15T08:30:00Z",
    content: `
      <h2>The Australian Cloud Landscape Has Changed</h2>
      <p>Australia's cloud computing market has matured significantly. With AWS Sydney and Melbourne regions, Azure Australia East and Central, and Google Cloud's Sydney region all operating at full capacity, Australian businesses now have world-class infrastructure options without compromising on data sovereignty.</p>
      <p>But the landscape in 2026 brings new considerations that didn't exist even two years ago — particularly around the updated Privacy Act amendments and the Critical Infrastructure Act's expanded scope.</p>

      <h2>Data Sovereignty: It's Not Optional Anymore</h2>
      <p>The amended Privacy Act now requires Australian businesses handling personal data of Australian citizens to ensure that data remains within Australian borders unless explicit consent is obtained and appropriate safeguards are in place. This has significant implications for your cloud architecture:</p>
      <ul>
        <li><strong>Region selection matters:</strong> Ensure your primary data stores are in Australian regions</li>
        <li><strong>Backup and DR:</strong> Your disaster recovery site should also be within Australia</li>
        <li><strong>Third-party services:</strong> Audit every SaaS tool that processes your customer data</li>
        <li><strong>CDN caching:</strong> Even cached data fragments must comply with sovereignty requirements</li>
      </ul>

      <blockquote>Cloud migration is no longer just a technology decision. In 2026, it's a compliance decision, a security decision, and a business strategy decision — all rolled into one.</blockquote>

      <h2>The Multi-Cloud Reality</h2>
      <p>Gone are the days of going "all in" on a single cloud provider. The smartest Australian enterprises are adopting multi-cloud strategies — not for redundancy's sake, but to leverage each provider's strengths. AWS for compute-heavy workloads, Azure for Microsoft-integrated enterprises, and GCP for data analytics and ML.</p>

      <h2>Migration Strategies for 2026</h2>
      <p>We recommend a phased approach for most businesses:</p>
      <ul>
        <li><strong>Phase 1 — Assess:</strong> Full audit of current infrastructure, dependencies, and compliance requirements (2-4 weeks)</li>
        <li><strong>Phase 2 — Pilot:</strong> Migrate a non-critical workload to validate your architecture and processes (4-6 weeks)</li>
        <li><strong>Phase 3 — Migrate:</strong> Systematic migration of production workloads with rollback plans (8-16 weeks)</li>
        <li><strong>Phase 4 — Optimise:</strong> Right-sizing, cost optimisation, and performance tuning (ongoing)</li>
      </ul>

      <h2>Cost Realities</h2>
      <p>Cloud isn't always cheaper than on-premises — at least not in the way most vendors advertise. The real savings come from agility, scalability, and reduced operational overhead. At 110 Solutions, we help clients model the true total cost of ownership before making migration decisions, ensuring there are no surprises post-migration.</p>
    `,
  },
  {
    id: "4",
    title:
      "How We Delivered a Campus Management System in 12 Weeks",
    slug: "campus-management-system-case-study",
    excerpt:
      "A behind-the-scenes look at how the 110 Solutions team designed, built, and deployed a full campus management platform for a major Australian university — in just 12 weeks.",
    coverImage:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    published: true,
    authorName: "Owais Alam",
    tags: ["Case Study", "Campus Management", "Agile"],
    readingTime: "8 min read",
    createdAt: "2026-02-08T11:00:00Z",
    updatedAt: "2026-02-08T11:00:00Z",
    publishedAt: "2026-02-08T11:00:00Z",
    content: `
      <h2>The Challenge</h2>
      <p>A leading Australian university approached us with an urgent need: their legacy campus management system was failing under the weight of 15,000+ students, and the new semester was 14 weeks away. They needed a complete replacement — not a patch job.</p>
      <p>The requirements were extensive: student enrollment, course scheduling, attendance tracking, grade management, fee processing, and a student/parent portal. Oh, and it needed to integrate with their existing LMS and financial system.</p>

      <h2>Our Approach: Aggressive but Disciplined</h2>
      <p>We assembled a focused team of 6 — two senior full-stack developers, one UI/UX designer, one QA engineer, one DevOps specialist, and a project manager. We adopted a modified Agile approach with 1-week sprints instead of the typical 2 weeks, allowing for faster feedback cycles.</p>
      <ul>
        <li><strong>Week 1-2:</strong> Discovery, architecture design, and UI prototyping (we got sign-off on Figma designs by Day 10)</li>
        <li><strong>Week 3-6:</strong> Core module development — enrollment, scheduling, and attendance</li>
        <li><strong>Week 7-9:</strong> Grade management, fee processing, and portal development</li>
        <li><strong>Week 10-11:</strong> Integration work, load testing, and security audit</li>
        <li><strong>Week 12:</strong> UAT, bug fixes, deployment, and handover</li>
      </ul>

      <blockquote>Speed doesn't mean cutting corners. It means cutting scope to what matters, making decisions fast, and having a team that's done this before.</blockquote>

      <h2>Technical Decisions That Saved Us Time</h2>
      <p>Several key architectural decisions enabled the aggressive timeline:</p>
      <ul>
        <li><strong>Next.js App Router</strong> for the student portal — SSR for performance, React for rich interactivity</li>
        <li><strong>PostgreSQL with row-level security</strong> — one database serving multiple user roles without complex middleware</li>
        <li><strong>Modular monolith architecture</strong> — faster to develop and deploy than microservices, with clear boundaries for future extraction</li>
        <li><strong>Component library from Day 1</strong> — we invested 3 days upfront building a shared UI kit, which saved weeks of duplicated work</li>
      </ul>

      <h2>The Results</h2>
      <p>The system went live 2 days before the semester started. Key outcomes:</p>
      <ul>
        <li>15,000+ students onboarded in the first week with zero critical incidents</li>
        <li>Page load times under 1.2 seconds (the old system averaged 6+ seconds)</li>
        <li>95% reduction in manual data entry for administrative staff</li>
        <li>The university estimated $200,000/year in operational savings</li>
      </ul>
    `,
  },
  {
    id: "5",
    title: "5 Signs Your Business Needs a Custom Mobile App",
    slug: "5-signs-business-needs-mobile-app",
    excerpt:
      "Not every business needs a mobile app — but some absolutely do. Here are the five clearest indicators that a custom app will deliver real ROI for your organisation.",
    coverImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    published: true,
    authorName: "Aijaz Ahmed",
    tags: ["Mobile Apps", "Business Strategy", "ROI"],
    readingTime: "5 min read",
    createdAt: "2026-01-28T14:00:00Z",
    updatedAt: "2026-01-28T14:00:00Z",
    publishedAt: "2026-01-28T14:00:00Z",
    content: `
      <h2>The Mobile App Question</h2>
      <p>Every business owner has asked themselves: "Do we need a mobile app?" The honest answer is that most businesses don't. A responsive website handles 80% of use cases. But for the remaining 20%, a native or cross-platform mobile app is a game-changer.</p>
      <p>Here are the five signs that your business falls into that 20%:</p>

      <h2>1. Your Field Team Needs Offline Access</h2>
      <p>If your employees work in areas with unreliable internet — construction sites, rural service areas, warehouses, or mining operations — a mobile app with offline capability is essential. Web apps simply can't match the offline experience of a properly built native app with local data synchronization.</p>

      <h2>2. You Need Device Hardware Integration</h2>
      <p>Cameras for document scanning, GPS for fleet tracking, Bluetooth for IoT device pairing, NFC for contactless operations, biometrics for authentication — if your core use case requires deep integration with device hardware, you need a mobile app.</p>

      <h2>3. Speed and Responsiveness Are Critical</h2>
      <p>For applications where milliseconds matter — trading platforms, real-time monitoring dashboards, or point-of-sale systems — native mobile apps deliver performance that web apps simply cannot match. The difference between a 200ms and 800ms response time might not sound like much, but when your staff are performing hundreds of transactions per day, it compounds into hours of saved time.</p>

      <blockquote>A mobile app isn't a luxury — it's a tool. The question isn't "can we afford to build one?" but "can we afford not to?"</blockquote>

      <h2>4. Push Notifications Drive Your Business</h2>
      <p>If timely notifications are core to your value proposition — appointment reminders, delivery updates, approval workflows, or emergency alerts — a mobile app's push notification system is far more reliable and engaging than email or SMS alternatives.</p>

      <h2>5. You Want to Build a Recurring User Habit</h2>
      <p>Apps that live on a user's home screen benefit from something web apps can't replicate: habitual engagement. If your business model depends on daily or weekly user engagement — fitness tracking, expense management, team communication — an app icon on the home screen is a powerful psychological anchor.</p>

      <h2>What to Do Next</h2>
      <p>If two or more of these signs resonate, start with a discovery workshop. At 110 Solutions, we help businesses validate whether a mobile app is the right investment through a structured 2-week discovery process that produces a clear specification, timeline, and budget before any code is written.</p>
    `,
  },
  {
    id: "6",
    title: "The Future of HR Tech: AI-Powered Payroll & Compliance",
    slug: "future-hr-tech-ai-payroll",
    excerpt:
      "AI is transforming how businesses handle payroll, tax compliance, and workforce management. Here's what HR leaders need to know about the 2026 landscape and beyond.",
    coverImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    published: true,
    authorName: "110 Solutions",
    tags: ["HR Tech", "AI", "Payroll", "Compliance"],
    readingTime: "6 min read",
    createdAt: "2026-01-20T09:30:00Z",
    updatedAt: "2026-01-20T09:30:00Z",
    publishedAt: "2026-01-20T09:30:00Z",
    content: `
      <h2>The HR Tech Revolution Is Here</h2>
      <p>The days of HR being a purely administrative function are over. In 2026, the most effective HR teams are leveraging AI and automation to handle compliance, payroll processing, and workforce analytics — freeing them to focus on what actually matters: people.</p>
      <p>This isn't about replacing HR professionals. It's about giving them superpowers.</p>

      <h2>AI-Powered Payroll: Beyond Basic Calculations</h2>
      <p>Modern AI-powered payroll systems go far beyond simple salary calculations. They can:</p>
      <ul>
        <li><strong>Predict payroll anomalies</strong> before they become expensive errors — flagging unusual overtime patterns, duplicate payments, or missing deductions</li>
        <li><strong>Auto-classify workers</strong> based on their engagement patterns, helping ensure correct employment status for tax purposes</li>
        <li><strong>Optimise pay runs</strong> by analyzing cash flow patterns and suggesting optimal payment scheduling</li>
        <li><strong>Generate compliance reports</strong> automatically, pulling from multiple data sources and formatting to regulatory requirements</li>
      </ul>

      <blockquote>The average Australian business spends 5-8 hours per week on payroll-related tasks. AI can reduce that to under 1 hour — while improving accuracy from 96% to 99.8%.</blockquote>

      <h2>Compliance Automation: The Game Changer</h2>
      <p>Australia's employment law landscape is notoriously complex. Between Fair Work Act obligations, superannuation requirements, state-specific WorkCover regulations, and Single Touch Payroll (STP) reporting, staying compliant is a full-time job in itself.</p>
      <p>AI compliance engines now monitor regulatory changes in real-time and automatically adjust your payroll and HR processes. When the ATO updates STP Phase 2 requirements, your system adapts before your HR team even reads the newsletter.</p>

      <h2>What This Means for Your Business</h2>
      <p>At 110 Solutions, we've built AI-enhanced payroll modules for our HR & Payroll product that handle Australian compliance automatically. Our clients report 70% less time spent on payroll administration and a 95% reduction in compliance-related penalties.</p>
      <p>The technology exists today. The question is whether your current HR tech stack is holding you back.</p>
    `,
  },
  {
    id: "7",
    title: "Choosing the Right Tech Stack for Your Next Enterprise Project",
    slug: "choosing-enterprise-tech-stack",
    excerpt:
      "React or Angular? PostgreSQL or MongoDB? AWS or Azure? The tech stack decision can make or break your project. Here's a practical framework for making the right choice.",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    published: true,
    authorName: "Owais Alam",
    tags: ["Tech Stack", "Architecture", "Enterprise"],
    readingTime: "8 min read",
    createdAt: "2026-01-12T10:00:00Z",
    updatedAt: "2026-01-12T10:00:00Z",
    publishedAt: "2026-01-12T10:00:00Z",
    content: `
      <h2>Why Tech Stack Decisions Matter More Than You Think</h2>
      <p>The technology stack you choose for an enterprise project isn't just a technical decision — it's a business decision that will affect your team's velocity, hiring ability, maintenance costs, and scalability for years to come. Choose wrong, and you'll feel the pain compounding with every feature you build.</p>

      <h2>A Practical Decision Framework</h2>
      <p>At 110 Solutions, we use a weighted evaluation framework that considers five dimensions:</p>
      <ul>
        <li><strong>Team expertise:</strong> What does your existing team know? Adopting a completely new stack adds 3-6 months of learning overhead.</li>
        <li><strong>Ecosystem maturity:</strong> Are there well-maintained libraries for your core needs? A vibrant ecosystem means fewer things you need to build from scratch.</li>
        <li><strong>Hiring market:</strong> Can you find developers for this stack in your market? A niche technology with a tiny talent pool is a long-term risk.</li>
        <li><strong>Performance requirements:</strong> Do you need sub-100ms response times? Real-time capabilities? Offline support? These narrow your options significantly.</li>
        <li><strong>Long-term maintainability:</strong> Will this technology still be actively developed in 5 years? Who backs it?</li>
      </ul>

      <blockquote>The best tech stack is the one your team can ship great software with today and maintain confidently for the next five years. Hype is not a qualification.</blockquote>

      <h2>Our Recommendations for 2026</h2>
      <p>Based on hundreds of enterprise projects, here's what we're recommending to clients in 2026:</p>
      <ul>
        <li><strong>Frontend:</strong> Next.js (App Router) with TypeScript — the React ecosystem's maturity is unmatched, and Next.js handles SSR, API routes, and deployment beautifully</li>
        <li><strong>Backend:</strong> Node.js/TypeScript for most projects; Go or Rust for performance-critical services</li>
        <li><strong>Database:</strong> PostgreSQL as the default; MongoDB for document-heavy content systems; Redis for caching and real-time features</li>
        <li><strong>Cloud:</strong> AWS for most workloads; Azure for Microsoft-heavy enterprises; multi-cloud for critical systems</li>
        <li><strong>Mobile:</strong> React Native or Flutter depending on the team's background</li>
      </ul>

      <h2>The Decision Is Yours</h2>
      <p>There's no universally "best" stack. The right choice depends on your specific context — your team, your timeline, your requirements, and your long-term vision. Use the framework above to make an informed, defensible decision rather than following trends.</p>
    `,
  },
];

// ─── Query Functions (will be replaced by MongoDB calls later) ──────────────

export function getPublishedPosts(): BlogPost[] {
  return MOCK_POSTS
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | null {
  return MOCK_POSTS.find((p) => p.slug === slug && p.published) || null;
}

export function getAllSlugs(): string[] {
  return MOCK_POSTS.filter((p) => p.published).map((p) => p.slug);
}

export function getAllTags(): string[] {
  const tags = MOCK_POSTS.filter((p) => p.published).flatMap((p) => p.tags);
  return Array.from(new Set(tags)).sort();
}

export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return getPublishedPosts().slice(0, limit);

  const currentTags = new Set(current.tags);
  return getPublishedPosts()
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aOverlap = a.tags.filter((t) => currentTags.has(t)).length;
      const bOverlap = b.tags.filter((t) => currentTags.has(t)).length;
      return bOverlap - aOverlap;
    })
    .slice(0, limit);
}