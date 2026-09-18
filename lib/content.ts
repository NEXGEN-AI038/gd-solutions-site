// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here. No component code needs to change.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "GD Solutions",
  tagline: "AI · Technology · Digital Innovation",
  description:
    "GD Solutions empowers businesses and individuals through AI automation, IT infrastructure, surveillance systems, website designing and hosting, Business Process Outsourcing interview assistance and beginner-friendly AI, cybersecurity and OSINT training.",
  email: "business.gdsolutions@gmail.com",
  address: {
    line1: "5th Floor, RDB Boulevard, Plot-K1, Block EP & GP,",
    line2: "Sector V, Kolkata - 700091",
  },
  // WhatsApp numbers for enquiries — displayed and linked as click-to-chat.
  whatsapp: [
    { label: "+91 98318 22045", number: "919831822045" },
    { label: "+91 98309 08641", number: "919830908641" },
  ],
  // Default prefilled WhatsApp message — removes friction for the visitor.
  // Individual pages (e.g. a service page) can pass their own message
  // instead via the buildWhatsappLink helper below.
  whatsappDefaultMessage:
    "Hi GD Solutions, I'd like to know more about your services.",
  social: {
    linkedin: "https://linkedin.com/company/gdsolutions",
    instagram: "https://instagram.com/gdsolutions",
    // Edit this to your real Google Business review link.
    reviewUrl: "https://g.page/r/gdsolutions/review",
  },
  year: new Date().getFullYear(),
};

// Builds a wa.me link with a prefilled message — use this instead of a
// bare wa.me/<number> link anywhere a WhatsApp CTA appears.
export function buildWhatsappLink(number: string, message?: string) {
  const text = encodeURIComponent(message ?? site.whatsappDefaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Training", href: "/#training" },
  { label: "Why Us", href: "/#why" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "AI · Technology · Digital Innovation",
  headline: "Transforming ideas into",
  // The tail of the headline rotates through these, one at a time, each
  // in a different accent color — keeps the hero feeling alive instead
  // of static. Edit freely; keep phrases short so the line doesn't wrap.
  rotatingPhrases: [
    "intelligent systems.",
    "automated workflows.",
    "smarter businesses.",
    "reliable infrastructure.",
    "secure operations.",
  ],
  sub: "From AI-powered automation and IT infrastructure to technology services and professional training, GD Solutions helps businesses and individuals move confidently into the digital future.",
  ctaPrimary: { label: "Explore Services", href: "#services" },
  ctaSecondary: { label: "Book a Free Consultation", href: "#contact" },
  tags: ["AI Automation", "IT Infrastructure", "Cyber & OSINT Training"],
  media: {
    type: "carousel" as "illustration" | "image" | "video" | "carousel",
    src: "",
    alt: "",
    images: [
      { src: "/hero/network-globe.webp", alt: "Global connected network" },
      { src: "/hero/ai-mind-profile.webp", alt: "AI-augmented human intelligence" },
      { src: "/hero/ai-city-hand.webp", alt: "AI technology over a city skyline" },
      { src: "/hero/ai-circuit-head.webp", alt: "Circuit-board rendering of a human head" },
      { src: "/hero/code-matrix.webp", alt: "Streaming code and data" },
    ],
  },
};

export const about = {
  eyebrow: "About GD Solutions",
  heading: "Technology. Automation. Growth.",
  body: "GD Solutions is focused on helping businesses and individuals leverage the power of modern technology. We combine AI automation, IT expertise, surveillance systems, infrastructure solutions, web design and hosting, and practical technology training to create meaningful and efficient solutions.",
  values: [
    {
      title: "Innovation",
      body: "Modern AI-first thinking applied to everyday business problems.",
    },
    {
      title: "Practical Problem-Solving",
      body: "Solutions built around real workflows, not theory.",
    },
    {
      title: "Reliability",
      body: "Stable delivery, clear ownership, predictable outcomes.",
    },
    {
      title: "Continuous Learning",
      body: "We keep teams and learners ahead of the technology curve.",
    },
  ],
  stats: [
    { value: 10, suffix: "+", label: "AI & Automation Solutions" },
    { value: 12, suffix: "+", label: "IT Projects Delivered" },
    { value: 100, suffix: "+", label: "Learners Trained" },
    { value: 24, suffix: "/7", label: "Professional Support" },
  ],
};

export const ticker = [
  "AI Automation",
  "IT Infrastructure Projects",
  "Surveillance Systems (CCTV)",
  "IT Services",
  "Website Designing & Hosting",
  "Business Process Outsourcing Interview Assistance",
  "AI Training",
  "Cybersecurity Training",
  "OSINT Training",
];

export const aiNetwork = {
  eyebrow: "Powered by intelligence",
  heading: "One hub. Every workflow connected.",
  sub: "A live look at how GD Solutions links automation, infrastructure and training around a single intelligent core.",
  nodes: [
    "AI Automation",
    "IT Infrastructure",
    "Surveillance",
    "Website Design",
    "Cybersecurity",
    "OSINT",
    "Training",
  ],
};

// ── Business Technology services ───────────────────────────────────────
// Each has a slug (used for its own page at /services/<slug>), a short
// card blurb ("body"), and richer detail-page content (tagline, details,
// benefits, idealFor). Career support (BPO) is a separate track — see
// careerSupport below — since it serves individuals, not businesses.
export const services = {
  eyebrow: "Business Technology",
  heading: "Solutions that move you forward",
  sub: "Practical technology services across automation, infrastructure and operations.",
  items: [
    {
      code: "01",
      slug: "ai-automation",
      title: "AI Automation",
      body: "Automate repetitive tasks and business workflows using intelligent AI-powered solutions.",
      tagline: "Stop wasting hours on repetitive work.",
      details:
        "We build AI-powered automation around the tasks that quietly eat your team's time — email processing, data entry, lead management, invoice handling, reporting and more. Every workflow is designed around how your business actually operates, not a generic template.",
      benefits: [
        "Email and document processing",
        "Data entry and reporting automation",
        "Lead management workflows",
        "Invoice and receipt processing",
        "Notification and alert automation",
        "Ongoing monitoring after launch",
      ],
      idealFor: "SMEs, operations teams and growing businesses looking to cut manual work.",
    },
    {
      code: "02",
      slug: "it-infrastructure",
      title: "IT Infrastructure Projects",
      body: "Reliable and scalable IT infrastructure solutions designed to support business growth.",
      tagline: "Infrastructure built for where your business is going.",
      details:
        "From network design to server deployment, we plan and deliver IT infrastructure that scales with your business, with clear documentation and support after go-live.",
      benefits: [
        "Network design, setup and configuration",
        "Server deployment and management",
        "Infrastructure planning for scaling businesses",
        "Migration and upgrade projects",
        "Ongoing support after delivery",
      ],
      idealFor: "Businesses setting up new offices, scaling operations, or replacing aging infrastructure.",
    },
    {
      code: "03",
      slug: "surveillance-systems",
      title: "Surveillance Systems",
      body: "End-to-end installation and maintenance of CCTV camera systems for homes, offices and facilities.",
      tagline: "End-to-end CCTV, from planning to ongoing upkeep.",
      details:
        "We handle the full surveillance system lifecycle — site assessment, camera placement, professional installation, remote-viewing setup, and ongoing maintenance — so you get reliable coverage without the guesswork.",
      benefits: [
        "Site assessment and camera placement planning",
        "Professional installation and cabling",
        "Remote viewing setup for mobile monitoring",
        "NVR/DVR configuration",
        "Ongoing maintenance and support",
      ],
      idealFor: "Homes, offices, retail stores and facilities that need reliable, professionally installed coverage.",
    },
    {
      code: "04",
      slug: "it-services",
      title: "IT Services",
      body: "Remote IT support, desktop and laptop support, Microsoft 365 support, network troubleshooting, server support and IT consulting — flexible day-to-day support for your organization.",
      tagline: "Day-to-day IT support that doesn't slow your team down.",
      details:
        "Remote support, troubleshooting and consulting for the technology your team already relies on — so small issues get resolved before they become big ones.",
      benefits: [
        "Remote IT support for individuals and teams",
        "Desktop and laptop support",
        "Microsoft 365 setup and support",
        "Network troubleshooting",
        "IT consulting and advice",
      ],
      idealFor: "Small businesses and teams who need reliable IT support without a full in-house department.",
    },
    {
      code: "05",
      slug: "website-design-hosting",
      title: "Website Designing & Hosting",
      body: "Custom website design, development and reliable hosting to give your business a strong online presence.",
      tagline: "A website that actually represents your business.",
      details:
        "Custom design and development paired with reliable hosting — no generic templates, no unpredictable downtime. Built to load fast and work properly on every device.",
      benefits: [
        "Custom design tailored to your business",
        "Mobile-responsive, fast-loading builds",
        "Reliable hosting and deployment",
        "Domain and DNS setup assistance",
        "Ongoing updates and maintenance available",
      ],
      idealFor: "Businesses that need a professional online presence or are outgrowing their current site.",
    },
  ],
  ctaHeading: "Not sure where to start?",
  ctaBody: "Tell us about your business or learning goal and we'll map the right path for you.",
  ctaLabel: "Talk to Us",
};

// ── Career Support ───────────────────────────────────────────────────
// A separate track from Business Technology — this serves individual job
// seekers, not businesses, so it's kept visually and structurally apart.
export const careerSupport = {
  eyebrow: "Career Support",
  heading: "Get interview-ready",
  item: {
    slug: "bpo-interview-assistance",
    title: "Business Process Outsourcing Interview Assistance",
    body: "Helping aspiring professionals prepare confidently for Business Process Outsourcing and customer service interviews.",
    tagline: "Walk into your BPO interview prepared, not just hopeful.",
    details:
      "Practical, honest interview preparation for Business Process Outsourcing and customer service roles — mock interviews, real feedback, and the specific communication skills interviewers actually look for.",
    benefits: [
      "Mock interviews with real feedback",
      "Communication and voice clarity coaching",
      "Common BPO interview question preparation",
      "Confidence-building for first-time applicants",
    ],
    idealFor: "Job seekers preparing for their first BPO or customer service interview.",
  },
  ctaLabel: "Book Interview Prep",
};

export const training = {
  eyebrow: "AI & Cyber Training",
  heading: "Learn. Build. Grow.",
  sub: "Beginner-friendly courses designed to help you understand today's most important technologies — taught ethically, legally and practically.",
  courses: [
    {
      title: "Introduction to Artificial Intelligence",
      topics: [
        "Understanding AI",
        "Generative AI",
        "AI tools",
        "Prompt engineering basics",
        "AI productivity",
        "Practical AI applications",
      ],
      cta: "Explore AI Basics",
    },
    {
      title: "Cybersecurity Fundamentals",
      topics: [
        "Introduction to cybersecurity",
        "Common cyber threats",
        "Online safety",
        "Security fundamentals",
        "Ethical cybersecurity concepts",
        "Basic security practices",
      ],
      cta: "Start Learning Cybersecurity",
    },
    {
      title: "OSINT Fundamentals",
      topics: [
        "Introduction to OSINT",
        "Open-source information research",
        "Digital investigation fundamentals",
        "Search techniques",
        "Information verification",
        "Responsible and ethical use of information",
      ],
      cta: "Explore OSINT",
    },
  ],
};

export const process = {
  eyebrow: "Process",
  heading: "How we work",
  steps: [
    {
      step: "01",
      title: "Understand",
      body: "We understand your business, technology, or learning requirements.",
    },
    {
      step: "02",
      title: "Analyze",
      body: "We analyze the best possible approach and solution.",
    },
    {
      step: "03",
      title: "Build",
      body: "We implement practical technology, automation, infrastructure, or training solutions.",
    },
    {
      step: "04",
      title: "Grow",
      body: "We help you improve efficiency, knowledge, and digital capabilities.",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why Us",
  heading: "Why businesses choose GD Solutions",
  points: [
    {
      title: "Faster Workflow Automation",
      body: "We turn manual, repetitive processes into automated workflows that save hours every week.",
    },
    {
      title: "Practical AI Implementation",
      body: "AI applied to real business problems, not buzzwords — built to solve what's actually slowing you down.",
    },
    {
      title: "End-to-End Technology Support",
      body: "From infrastructure and surveillance to websites and IT services, one team handles it all.",
    },
    {
      title: "Solutions Built Around Your Workflow",
      body: "Every automation and system we build is designed around how your business actually operates.",
    },
    {
      title: "Personalized Consultation",
      body: "We start by understanding your specific requirements before recommending a solution.",
    },
    {
      title: "Local Support, Modern Expertise",
      body: "Kolkata-based support backed by current AI, automation and infrastructure expertise.",
    },
  ],
};

export const caseStudies = {
  eyebrow: "Case Studies",
  heading: "Automation in the wild",
  sub: "A closer look at workflows we've actually built — real infographics from live projects.",
  items: [
    {
      title: "From Webhook to Inbox: an Automated Data Workflow",
      tag: "Data Automation",
      image: "/case-studies/automated-data-workflow-process.webp",
      story: {
        client: "Operations team handling incoming data feeds",
        scenario:
          "The team received a constant stream of unpredictable webhook data that needed converting into usable records and communicating to stakeholders.",
        challenges: [
          "Manual JSON parsing was slow and error-prone",
          "No consistent way to cross-reference new records against existing data",
          "File retrieval and email updates were done by hand",
        ],
        solution:
          "Built an automated pipeline that captures webhook data, iterates through each record, cross-references it against a database and spreadsheet, then retrieves relevant files and sends updates via Gmail automatically.",
        benefit:
          "Eliminated manual data entry entirely and cut the time from data receipt to stakeholder notification from hours to minutes.",
      },
    },
    {
      title: "The Automated Invoice & Receipt Management Workflow",
      tag: "Finance Automation",
      image: "/case-studies/automated-invoice-management-process.webp",
      story: {
        client: "Finance team managing a high email volume",
        scenario:
          "Invoices and receipts arrived in a shared Gmail inbox faster than the team could manually sort, extract data from, and log them.",
        challenges: [
          "High volume of unsorted invoices and receipts",
          "Manual data entry led to duplicate ledger entries",
          "No consistent validation before entries were finalized",
        ],
        solution:
          "An AI-powered pipeline monitors the inbox, classifies each document as an invoice or receipt, extracts the relevant data, validates it across channels, checks for duplicates, and logs every entry to the ledger automatically.",
        benefit:
          "Removed manual sorting and data entry, cut duplicate entries to near zero, and gave the finance team a fully validated, always-current ledger.",
      },
    },
    {
      title: "The Anatomy of a Telegram Cloth Store Bot",
      tag: "Conversational AI",
      image: "/case-studies/messaging-store-bot-anatomy.webp",
      story: {
        client: "Retail store selling via Telegram",
        scenario:
          "Customers messaged the store directly on Telegram to browse items, ask questions and place orders — all handled manually by staff.",
        challenges: [
          "Staff had to manually respond to every message",
          "No easy way to track customer history or order status",
          "Payment and order data lived in disconnected spreadsheets",
        ],
        solution:
          "Built a five-path logic router inside Telegram that handles menu browsing, item selection, checkout and payment automatically, synced live to Sheets and a data store.",
        benefit:
          "The bot now handles the full purchase flow with no manual intervention, freeing up staff time and giving the business a live, always-accurate record of every order.",
      },
    },
  ],
};

export const techStack = {
  eyebrow: "Our Stack",
  heading: "Technology we work with",
  sub: "The specific tools and platforms behind our automation, development and AI work.",
  items: [
    { name: "OpenAI", color: "#10141A" },
    { name: "Claude", color: "#CC785C" },
    { name: "Make.com", color: "#7A3FE0" },
    { name: "Next.js", color: "#10141A" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Java", color: "#ED8B00" },
    { name: "Perplexity", color: "#1FB8CD" },
    { name: "n8n", color: "#EA4560" },
  ],
};

// Review content is now fetched live from Google Places API (see
// lib/googleReviews.ts and README.md → "Connecting live Google Reviews")
// instead of hardcoded here — this text is just the section framing.
export const reviews = {
  eyebrow: "Reviews",
  heading: "What clients and learners say",
  sub: "Real feedback from the businesses we've automated for and the learners we've trained.",
  ctaLabel: "Leave us a review",
};

export const finalCta = {
  heading: "Have a process you want to automate?",
  body: "Tell us what your team currently does manually — we'll identify where AI and automation can save you time.",
  ctaPrimary: { label: "Book a Free Automation Consultation", href: "#contact" },
  ctaSecondary: { label: "Explore Services", href: "#services" },
};

export const contact = {
  eyebrow: "Contact",
  heading: "Let's build something intelligent",
  sub: "Share your requirement — automation, infrastructure, IT services, interview preparation or training — and our team will get back to you.",
  serviceOptions: [
    "AI Automation",
    "IT Infrastructure Projects",
    "Surveillance Systems (CCTV)",
    "IT Services",
    "Website Designing & Hosting",
    "Business Process Outsourcing Interview Assistance",
    "AI Course",
    "Cybersecurity Course",
    "OSINT Course",
    "Other",
  ],
};
