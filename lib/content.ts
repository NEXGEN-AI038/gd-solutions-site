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
      title: "Automated WhatsApp Lead Follow-Up",
      tag: "AI Automation",
      image: "/case-studies/whatsapp-lead-bot.png",
      story: {
        client: "Sales & Lead Generation",
        scenario:
          "New leads landed in a shared Google Sheet, but nobody messaged them until someone remembered to check it — often a day or two later, by which point many had already gone with a competitor.",
        challenges: [
          "Leads sat untouched for hours or days after signing up",
          "Follow-up depended on someone remembering to check the sheet",
          "No consistent first message, so tone and info varied lead to lead",
        ],
        solution:
          "A Make.com automation watches the Google Sheet for new rows and instantly sends a templated WhatsApp Business message the moment a lead is added — no manual step required.",
        benefit:
          "Every lead now gets a reply within seconds instead of hours or days, and the team no longer has to babysit a spreadsheet to keep leads warm.",
      },
    },
    {
      title: "Lucky — Multilingual AI Voice Assistant",
      tag: "Voice AI",
      image: "/case-studies/voice-bot.png",
      story: {
        client: "Client Intake & Qualification",
        scenario:
          "Every inbound call had to be answered live, then manually written up, checked, and followed up by email — a 15–20 minute process per call, even for simple questions.",
        challenges: [
          "Calls outside business hours went to voicemail and were often never returned",
          "Language switching (English, Hindi, Bengali) meant only certain staff could take certain calls",
          "Lead details were written down by hand, so information sometimes got lost or wrong",
        ],
        solution:
          "Lucky answers every call, detects and switches languages automatically, asks qualifying questions, then — through Vapi and Make.com — logs the call report and sends a confirmation email before handing qualified leads to the team.",
        benefit:
          "Calls are answered day or night in the caller's own language, every lead is captured accurately with no manual note-taking, and the team only steps in once a lead is already qualified.",
      },
    },
    {
      title: "Sahayak AI — Case Triage Dashboard",
      tag: "AI Automation",
      image: "/case-studies/sahayak-ai.png",
      story: {
        client: "Community Support Services",
        scenario:
          "Requests for help arrived through multiple channels and had to be read, categorized, and prioritized by hand before anyone could act — a bottleneck that grew worse as volume increased.",
        challenges: [
          "Urgent cases could sit behind routine ones with no automatic flagging",
          "Categorizing each request by hand was slow and inconsistent between staff",
          "No single view of how many cases were open, in progress, or resolved",
        ],
        solution:
          "Sahayak AI reads each incoming request, suggests a category and priority, and organizes everything into a live dashboard — Today's Cases, Needs Review, In Progress, and Resolved.",
        benefit:
          "Critical cases surface immediately instead of waiting in a queue, and the team can see their full caseload at a glance instead of digging through scattered records.",
      },
    },
    {
      title: "Paws & Wellness — Pet Care Storefront",
      tag: "Website Design",
      image: "/case-studies/paws-and-wellness.png",
      story: {
        client: "Pet Care & Veterinary Retail",
        scenario:
          "Before the site, booking a grooming slot or asking about vaccination meant calling during business hours and hoping someone would pick up, with no way to browse products online first.",
        challenges: [
          "Appointment requests only came in by phone, with no after-hours option",
          "No online storefront meant every product question needed a call or a visit",
          "No consistent, branded first impression for people finding the business online",
        ],
        solution:
          "A single site now covers the shop, grooming and vaccination booking, and vet consultation requests, with WhatsApp and appointment buttons on every page.",
        benefit:
          "Customers can browse, book, and message the business at any hour instead of only during store hours, and the brand now looks as trustworthy online as it does in person.",
      },
    },
    {
      title: "MPS Relocations — Booking & Quote Website",
      tag: "Website Design",
      image: "/case-studies/logistics-website.png",
      story: {
        client: "Packers, Movers & Logistics",
        scenario:
          "Getting a moving quote meant calling in, describing the job, and waiting for a callback with a price — often losing the customer to whichever competitor responded first.",
        challenges: [
          "No way to request a quote outside of a phone call",
          "Local, same-day delivery requests were handled the same slow way as long-distance moves",
          "No visible proof of coverage area to build trust before someone called",
        ],
        solution:
          "The site lets customers request a free moving quote or book instant local delivery directly from the homepage, with coverage area and guarantees shown up front.",
        benefit:
          "Quote requests come in anytime without a phone call, and instant local delivery bookings are now self-serve instead of a manual back-and-forth.",
      },
    },
  ],
};

export const pricing = {
  eyebrow: "Pricing",
  heading: "Professional Website Design Packages",
  sub: "Modern, responsive websites built for growth — choose the plan that fits your business.",
  yearlyDiscountPercent: 20,
  note: "Costs mentioned are exclusive of domain, hosting and annual maintenance — these are chargeable on actuals.",
  plans: [
    {
      name: "Basic",
      monthlyPrice: 1000,
      description: "Basic Website with 5-8 web pages.",
      recommended: false,
      features: [
        { label: "Free Domain", included: true },
        { label: "Free Hosting", included: true },
        { label: "5 - 8 Web Pages", included: true },
        { label: "2 business webmail email id", included: true },
        { label: "1 enquiry form", included: true },
        { label: "Basic SEO Done", included: true },
        { label: "Free Chat Integration", included: true },
        { label: "Content", included: false },
      ],
    },
    {
      name: "Economy",
      monthlyPrice: 1500,
      description: "Standard Website with 8-10 web pages.",
      recommended: true,
      features: [
        { label: "Free Domain", included: true },
        { label: "Free Hosting", included: true },
        { label: "8 - 10 Web Pages", included: true },
        { label: "2 business webmail email id", included: true },
        { label: "2 enquiry form", included: true },
        { label: "Basic SEO Done", included: true },
        { label: "Free Chat Integration", included: true },
        { label: "Content", included: true },
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: 2000,
      description: "Pro Website with 10-15 web pages.",
      recommended: false,
      features: [
        { label: "Free Domain", included: true },
        { label: "Free Hosting", included: true },
        { label: "10 - 12 Web Pages", included: true },
        { label: "5 business webmail email id", included: true },
        { label: "3 - 5 enquiry form", included: true },
        { label: "Basic SEO Done", included: true },
        { label: "Free Chat Integration", included: true },
        { label: "Content", included: true },
      ],
    },
  ],
  highlights: [
    { title: "Fast & Reliable", body: "Turbo speed loading for better performance." },
    { title: "Mobile Responsive", body: "Looks great on all devices." },
    { title: "Secure & Scalable", body: "Built for long-term growth." },
    { title: "Dedicated Support", body: "We're here when you need us." },
    { title: "Modern Design", body: "Clean, professional and engaging." },
  ],
  ctaLabel: "Order Now",
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
