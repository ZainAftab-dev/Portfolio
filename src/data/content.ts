// All homepage copy lives here so content updates never touch component code.

export type SkillGroup = {
  label: string;
  icon: "frontend" | "backend" | "cloud" | "motion";
  color: string;
  speed: string;
  /** [name, isCore] */
  items: [string, boolean][];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    icon: "frontend",
    color: "#4f46e5",
    speed: "26s",
    items: [["Next.js", true], ["React", true], ["TypeScript", true], ["Tailwind CSS", false]],
  },
  {
    label: "Backend & Data",
    icon: "backend",
    color: "#0284c7",
    speed: "30s",
    items: [
      ["Node.js", true], ["NestJS", true], ["PostgreSQL", true], ["Stripe", true],
      ["Prisma", false], ["SQL Server", false], ["MongoDB", false],
    ],
  },
  {
    label: "DevOps & Cloud",
    icon: "cloud",
    color: "#0d9488",
    speed: "34s",
    items: [["Docker", true], ["Vercel", false], ["Railway", false], ["Azure", false], ["Git & GitHub", false]],
  },
  {
    label: "3D & Motion",
    icon: "motion",
    color: "#9333ea",
    speed: "38s",
    items: [
      ["Three.js", false], ["WebGL", false], ["Spline", false],
      ["GSAP", false], ["Framer Motion", false], ["Canvas", false],
    ],
  },
];

export const aboutTags = [
  "React", "Next.js", "Node.js", "NestJS", "TypeScript",
  "PostgreSQL", "Docker", "Stripe", "Tailwind CSS", "Three.js",
];

export type ProcessStep = { title: string; tag: string; icon: "search" | "palette" | "code" | "rocket"; text: string };

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    tag: "01 · Research",
    icon: "search",
    text: "We talk through your goals, users and constraints. I look at what already exists and turn it into a clear scope, timeline and fixed quote.",
  },
  {
    title: "Design",
    tag: "02 · Experience",
    icon: "palette",
    text: "User flows and wireframes first, then polished UI. You see and approve how everything looks and works before any code is written.",
  },
  {
    title: "Develop",
    tag: "03 · Engineering",
    icon: "code",
    text: "Built in milestones on a live staging link you can click through anytime, with regular updates. Clean, typed code stored in your own GitHub.",
  },
  {
    title: "Deploy",
    tag: "04 · Launch",
    icon: "rocket",
    text: "Launched to production with your domain, analytics and monitoring set up. Full handover, plus support while everything settles in.",
  },
];

export type Certificate = { title: string; issuer: string; seal: string; color: string; url: string };

export const certificates: Certificate[] = [
  { title: "Introduction to Android Mobile Application Development", issuer: "Meta", seal: "M", color: "#0866ff", url: "https://www.coursera.org/account/accomplishments/verify/QCLFS2INEZW5" },
  { title: "AI Infrastructure and Operations Fundamentals", issuer: "NVIDIA", seal: "NV", color: "#5e9400", url: "https://www.coursera.org/account/accomplishments/verify/YQ7UP1ZONRDX" },
  { title: "Programming with JavaScript", issuer: "Meta", seal: "M", color: "#0866ff", url: "https://www.coursera.org/account/accomplishments/verify/ZVYXOUP0POLX" },
  { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", seal: "AWS", color: "#e47911", url: "https://www.coursera.org/account/accomplishments/verify/UQB0ECYSJWVU" },
  { title: "Programming for Everybody (Python)", issuer: "University of Michigan", seal: "UM", color: "#00274c", url: "https://www.coursera.org/account/accomplishments/verify/4L23ZHRP4VOK" },
  { title: "Generative AI: Introduction and Applications", issuer: "IBM", seal: "IBM", color: "#0f62fe", url: "https://www.coursera.org/account/accomplishments/verify/WUNMWM6VLXH6" },
  { title: "Databases and SQL for Data Science with Python", issuer: "IBM", seal: "IBM", color: "#0f62fe", url: "https://www.coursera.org/account/accomplishments/verify/LZ66YLQTJHTD" },
  { title: "Introduction to AI", issuer: "Google", seal: "G", color: "#1a73e8", url: "https://www.coursera.org/account/accomplishments/verify/T7AX23RIJI9Z" },
];

/** Only real, verifiable client reviews (Upwork). */
export const testimonials = [
  {
    name: "Usama A.",
    role: "Owner, e-commerce hardware retail client",
    initials: "UA",
    alt: false,
    quote:
      "Worked with Zain on an e-commerce website for our hardware retail business. He delivered a fully functional platform with product pages and mobile compatibility — on time and within budget. The quality of work was excellent and he was responsive throughout the project. Would highly recommend Zain for any web development work.",
  },
  {
    name: "Hunain R.",
    role: "Co-Owner, CRM / financial dashboard client",
    initials: "HR",
    alt: true,
    quote:
      "Zain built us a React-based financial dashboard, and it turned out excellent. Clean UI, real-time data, and everything worked smoothly. He was responsive, professional, and delivered on time. Highly recommend for React/full-stack projects.",
  },
];

export const faqs = [
  { short: "Timeline?", q: "How long does a typical project take?", a: "Most projects take 2–6 weeks. A landing page or marketing site is usually 1–2 weeks; a full web app with dashboards, payments and logins is 4–8 weeks. You get a week-by-week plan before we start, so you always know what's shipping next." },
  { short: "Payment?", q: "How does payment work?", a: "Work is split into milestones — usually 50% to start and 50% at launch for smaller projects, or 3–4 milestones for larger builds. Invoices come from Strategeon Softwares and can be paid by card or bank transfer." },
  { short: "Revisions?", q: "How many revisions are included?", a: "Two rounds of revisions per milestone. You review a live staging link, leave comments, and I apply the changes before we move on. Anything that changes the agreed scope is quoted separately first — no surprise bills." },
  { short: "Time zones?", q: "You're in Pakistan — how do time zones work?", a: "I'm in Lahore (PKT, UTC+5) and keep a flexible schedule, so we'll always find a daily window for calls — whatever your time zone. Between calls you get written async updates on Slack or email." },
  { short: "Getting started?", q: "What do you need from me to get started?", a: "A short call about your goals, any designs or sites you like, and access to existing code or hosting if there is any. Then I send a scoped proposal with timeline and price — we start once you're happy with it." },
  { short: "Code ownership?", q: "Who owns the code when it's done?", a: "You do. Once the final invoice is paid, the full source code, designs and accounts are handed over — deployed to your own GitHub, Vercel and database accounts, not mine." },
  { short: "After launch?", q: "Do you offer support after launch?", a: "Every project includes 30 days of free bug fixes after launch. After that you can keep me on a monthly retainer for updates, new features and monitoring, or book me per task when you need something." },
  { short: "Tech stack?", q: "What do you build with — and can you work on my existing code?", a: "My core stack is Next.js, React, Node.js/NestJS, TypeScript, PostgreSQL, Docker and Stripe. I'm happy to join an existing codebase — I start with a short audit so you know exactly what I'll change and why." },
];
