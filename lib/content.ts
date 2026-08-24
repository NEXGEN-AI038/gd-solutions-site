// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here. No component code needs to change.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "GD Solutions",
  tagline: "AI · Technology · Digital Innovation",
  description:
    "GD Solutions empowers businesses and individuals through AI automation, IT infrastructure, BMS (Building Management System), Business Process Outsourcing interview assistance and beginner-friendly AI, cybersecurity and OSINT training.",
  email: "business.gdsolutions@gmail.com",
  address: {
    line1: "5th Floor, RDB Boulevard, Plot-K1, Block EP & GP",
    line2: "Sector V, Kolkata - 700091",
  },
  // WhatsApp numbers for enquiries — displayed and linked as click-to-chat.
  whatsapp: [
    { label: "+91 98318 22045", number: "919831822045" },
    { label: "+91 98300 08641", number: "919830008641" },
  ],
  social: {
    linkedin: "https://linkedin.com/company/gdsolutions",
    instagram: "https://instagram.com/gdsolutions",
    // Edit this to your real Google Business review link.
    reviewUrl: "https://g.page/r/gdsolutions/review",
  },
  year: new Date().getFullYear(),
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Training", href: "#training" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "AI · Technology · Digital Innovation",
  headline: "Transforming ideas into intelligent systems.",
  sub: "From AI-powered automation and IT infrastructure to technology services and professional training, GD Solutions helps businesses and individuals move confidently into the digital future.",
  ctaPrimary: { label: "Explore Services", href: "#services" },
  ctaSecondary: { label: "Get Started", href: "#contact" },
  tags: ["AI Automation", "IT Infrastructure", "Cyber & OSINT Training"],
  // Once you have a real product screenshot or explainer-video clip, drop
  // the file in /public and switch this to show it instead of the
  // built-in illustration:
  //   image → { type: "image", src: "/showcase/dashboard.png", alt: "..." }
  //   video → { type: "video", src: "/showcase/demo.mp4" }
  media: { type: "illustration" as "illustration" | "image" | "video", src: "", alt: "" },
};

export const about = {
  eyebrow: "About GD Solutions",
  heading: "Technology. Automation. Growth.",
  body: "GD Solutions is focused on helping businesses and individuals leverage the power of modern technology. We combine AI automation, IT expertise, building management systems, infrastructure solutions, and practical technology training to create meaningful and efficient solutions.",
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
  // Edit these to your real numbers — they animate into view on scroll.
  stats: [
    { value: 10, suffix: "+", label: "AI & Automation Solutions" },
    { value: 12, suffix: "+", label: "IT Projects Delivered" },
    { value: 100, suffix: "+", label: "Learners Trained" },
    { value: 24, suffix: "/7", label: "Professional Support" },
  ],
};

// Continuous ticker strip — shown as a scrolling band under the hero.
// Edit labels/order freely; the marquee duplicates the list automatically.
export const ticker = [
  "AI Automation",
  "IT Infrastructure Projects",
  "BMS (Building Management System)",
  "IT Services",
  "Business Process Outsourcing Interview Assistance",
  "AI Training",
  "Cybersecurity Training",
  "OSINT Training",
];

// Nodes for the animated AI network map. "center" is the hub (rendered
// with the company logo); each other node orbits it with a pulsing
// connection line.
export const aiNetwork = {
  eyebrow: "Powered by intelligence",
  heading: "One hub. Every workflow connected.",
  sub: "A live look at how GD Solutions links automation, infrastructure and training around a single intelligent core.",
  nodes: [
    "AI Automation",
    "IT Infrastructure",
    "BMS",
    "Cybersecurity",
    "OSINT",
    "Training",
  ],
};

export const services = {
  eyebrow: "Services",
  heading: "Solutions that move you forward",
  sub: "Practical technology services across automation, infrastructure, operations and careers.",
  items: [
    {
      code: "01",
      title: "AI Automation",
      body: "Automate repetitive tasks and business workflows using intelligent AI-powered solutions.",
    },
    {
      code: "02",
      title: "IT Infrastructure Projects",
      body: "Reliable and scalable IT infrastructure solutions designed to support business growth.",
    },
    {
      code: "03",
      title: "BMS (Building Management System)",
      body: "Smart building management systems for monitoring and controlling lighting, HVAC, security, and other facility operations efficiently.",
    },
    {
      code: "04",
      title: "IT Services",
      body: "Flexible technology services to support organizations with their day-to-day IT requirements.",
    },
    {
      code: "05",
      title: "Business Process Outsourcing Interview Assistance",
      body: "Helping aspiring professionals prepare confidently for Business Process Outsourcing and customer service interviews.",
    },
  ],
  ctaHeading: "Not sure where to start?",
  ctaBody:
    "Tell us about your business or learning goal and we'll map the right path for you.",
  ctaLabel: "Talk to Us",
};

export const training = {
  eyebrow: "Training",
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
  heading: "Why GD Solutions?",
  points: [
    { title: "Innovation", body: "Modern solutions powered by AI and technology." },
    {
      title: "Practical Approach",
      body: "Solutions focused on real-world business needs.",
    },
    {
      title: "Technology Expertise",
      body: "Experience across automation, IT services, infrastructure, and building management systems.",
    },
    {
      title: "Continuous Learning",
      body: "Helping individuals build relevant technology skills.",
    },
    {
      title: "Flexible Solutions",
      body: "Services designed around different business and individual requirements.",
    },
    {
      title: "Customer-Focused",
      body: "Clear communication and a solution-oriented approach.",
    },
  ],
};

// Screenshot / demo-video slots — drop your own files in /public/showcase
// and fill in `src` below; leave `src` empty to keep the placeholder card.
export const showcase = {
  eyebrow: "See it in action",
  heading: "Real workflows, real results",
  sub: "Screenshots and short clips from our automation and infrastructure work — swap these in any time.",
  items: [
    {
      title: "Automation Dashboard",
      caption: "Add a screenshot of an automation workflow or dashboard here.",
      type: "image" as "image" | "video",
      src: "", // e.g. "/showcase/automation-dashboard.png"
      alt: "Automation dashboard screenshot",
    },
    {
      title: "Infrastructure Monitoring",
      caption: "Add a screenshot of an infrastructure or BMS monitoring view here.",
      type: "image" as "image" | "video",
      src: "", // e.g. "/showcase/infra-monitoring.png"
      alt: "Infrastructure monitoring screenshot",
    },
    {
      title: "Explainer Walkthrough",
      caption: "Add a short explainer video clip here.",
      type: "video" as "image" | "video",
      src: "", // e.g. "/showcase/explainer.mp4"
      alt: "Explainer video",
    },
  ],
};

export const reviews = {
  eyebrow: "Reviews",
  heading: "What clients and learners say",
  sub: "Real feedback from businesses we've automated and learners we've trained — replace with your own as they come in.",
  ctaLabel: "Leave us a review",
  items: [
    {
      quote:
        "GD Solutions mapped our lead intake workflow and automated most of it within two weeks. Our team spends far less time on repetitive data entry now.",
      name: "Priya Nair",
      role: "Operations Lead, retail client",
      rating: 5,
    },
    {
      quote:
        "The OSINT fundamentals course was clear, practical and genuinely beginner-friendly. I went from zero background to comfortable with the core techniques.",
      name: "Arjun Mehta",
      role: "Course participant",
      rating: 5,
    },
    {
      quote:
        "Our IT infrastructure migration was handled with clear communication at every stage. No surprises, and the team was responsive throughout.",
      name: "Sana Iqbal",
      role: "IT Manager, logistics client",
      rating: 4,
    },
  ],
};

export const finalCta = {
  heading: "Ready to transform your ideas into solutions?",
  body: "Whether you're looking to automate your business, improve your IT operations, implement technology solutions, or start your journey into AI and cybersecurity, GD Solutions is ready to help.",
  ctaPrimary: { label: "Talk to Us", href: "#contact" },
  ctaSecondary: { label: "Explore Services", href: "#services" },
};

export const contact = {
  eyebrow: "Contact",
  heading: "Let's build something intelligent",
  sub: "Share your requirement — automation, infrastructure, IT services, interview preparation or training — and our team will get back to you.",
  serviceOptions: [
    "AI Automation",
    "IT Infrastructure Projects",
    "BMS (Building Management System)",
    "IT Services",
    "Business Process Outsourcing Interview Assistance",
    "AI Course",
    "Cybersecurity Course",
    "OSINT Course",
    "Other",
  ],
};
