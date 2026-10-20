export type ProjectCategory = "web" | "ai" | "desktop";

export type Project = {
  slug: string;
  name: string;
  /** Short uppercase label shown above the title (e.g. "HEALTHCARE"). */
  kicker: string;
  category: ProjectCategory;
  /** One-line description used on the All work page. */
  summary: string;
  /** Longer description used on the homepage showcase (featured projects only). */
  description?: string;
  tech: string[];
  /** Shorter tech list for the homepage showcase, when it differs from `tech`. */
  featuredTech?: string[];
  repo: string;
  live?: string;
  image?: string;
  /** Portrait screenshots are letterboxed instead of cropped. */
  imageFit?: "cover" | "contain";
  imageBg?: string;
  /** Position on the homepage (1-based). Omitted = not on the homepage. */
  featured?: number;
};

const gh = (repo: string) => `https://github.com/ZainAftab-dev/${repo}`;

export const categories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web apps" },
  { id: "ai", label: "AI & data" },
  { id: "desktop", label: "Desktop & algorithms" },
];

export const projects: Project[] = [
  {
    slug: "strategeon-softwares",
    name: "Strategeon Softwares",
    kicker: "AGENCY WEBSITE",
    category: "web",
    summary:
      "My agency's website — statically generated pages, an interactive 3D robot hero and an AI assistant that answers visitor questions.",
    description:
      "My agency's own site — clear positioning, services and case studies for a full-stack studio, with an interactive 3D hero.",
    tech: ["Next.js", "React", "Spline 3D", "Groq"],
    featuredTech: ["Next.js", "Tailwind CSS"],
    repo: gh("strategeon-softwares"),
    live: "https://strategeonsoftwares.com/",
    image: "/images/projects/strategeon-softwares.jpg",
    featured: 1,
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    kicker: "HEALTHCARE",
    category: "web",
    summary:
      "18-module hospital platform — patients, appointments, wards, pharmacy and PDF billing behind JWT role-based access.",
    description:
      "An 18-module healthcare platform with role-based access, appointments, ward and bed tracking, pharmacy dispensing and PDF-invoice billing — containerised and ready to deploy.",
    tech: ["Next.js", "NestJS", "Prisma", "SQL Server", "Docker"],
    featuredTech: ["Next.js", "NestJS", "SQL Server", "Docker"],
    repo: gh("Hospital-Management-System-React"),
    live: "https://hospital-management-system-react-ap.vercel.app/",
    image: "/images/projects/hospital-management-system.jpg",
    featured: 2,
  },
  {
    slug: "personal-finance-manager",
    name: "Personal Finance Manager",
    kicker: "AI / FINTECH",
    category: "ai",
    summary:
      "AI finance dashboard that turns bank statements into spending trends, fraud alerts, budgets and a chat assistant.",
    description:
      "An AI-powered finance dashboard — fraud detection, subscription tracking, budget planning and a conversational assistant you can ask about your money.",
    tech: ["Python", "Streamlit", "scikit-learn", "Claude API"],
    repo: gh("Personal-Finance-Manager"),
    image: "/images/projects/personal-finance-manager.jpg",
    featured: 3,
  },
  {
    slug: "strategeon-store",
    name: "Strategeon Store",
    kicker: "E-COMMERCE",
    category: "web",
    summary: "E-commerce storefront for networking hardware, with real card payments through Stripe Checkout.",
    tech: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    repo: gh("StrategeonLLC"),
    live: "https://strategeon-llc.vercel.app/",
    image: "/images/work/strategeon-store.webp",
  },
  {
    slug: "moviefinder",
    name: "MovieFinder",
    kicker: "ENTERTAINMENT",
    category: "web",
    summary: "Search movies and TV shows, browse this week's trending titles and keep a personal watchlist.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "TMDB API"],
    repo: gh("Movie-Search-App"),
    live: "https://moviefinder-zain.vercel.app/",
    image: "/images/work/moviefinder.webp",
  },
  {
    slug: "digital-whiteboard",
    name: "Digital Whiteboard",
    kicker: "PRODUCTIVITY",
    category: "web",
    summary: "Canvas whiteboard with pen, shapes, text, sticky notes, undo/redo, zoom and PNG export.",
    tech: ["Next.js", "TypeScript", "Canvas API"],
    repo: gh("Digital-Whiteboard-App"),
    live: "https://digital-whiteboard-zain.vercel.app/",
    image: "/images/work/digital-whiteboard.webp",
  },
  {
    slug: "weathercast",
    name: "Weathercast",
    kicker: "WEATHER",
    category: "web",
    summary: "Weather app whose sky follows the real conditions — sun arc, hourly curve and a 5-day outlook.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    repo: gh("Weather-App"),
    live: "https://weathercast-zain.vercel.app/",
    image: "/images/work/weathercast.webp",
  },
  {
    slug: "smart-navigation-system",
    name: "Smart Navigation System",
    kicker: "ALGORITHMS",
    category: "desktop",
    summary: "Lahore route planner using Dijkstra's algorithm with live traffic — a C++ console app plus a web map.",
    tech: ["C++", "JavaScript", "Dijkstra"],
    repo: gh("Smart-Navigation-System"),
    live: "https://lahore-route-planner.vercel.app/",
    image: "/images/work/smart-navigation-system.webp",
  },
  {
    slug: "ml-systems",
    name: "End-to-End ML Systems",
    kicker: "MACHINE LEARNING",
    category: "ai",
    summary: "Titanic survival and heart disease predictors, from raw data to a deployed Streamlit app.",
    tech: ["Python", "scikit-learn", "Pandas", "Streamlit"],
    repo: gh("aic354-ml-systems"),
    live: "https://zain-aic354-ml-systems.streamlit.app/",
    image: "/images/work/ml-systems.webp",
    imageFit: "contain",
    imageBg: "#ffffff",
  },
  {
    slug: "diamond-price-prediction",
    name: "Diamond Price Prediction",
    kicker: "MACHINE LEARNING",
    category: "ai",
    summary: "Compares five regression models with 10-fold cross-validation and deploys the best one (Extra Trees).",
    tech: ["Python", "scikit-learn", "Streamlit"],
    repo: gh("diamond_price_model"),
    live: "https://zainaftab-diamond-price.streamlit.app/",
    image: "/images/work/diamond-price-prediction.webp",
    imageFit: "contain",
    imageBg: "#ffffff",
  },
  {
    slug: "chess-game",
    name: "Chess with AI",
    kicker: "GAME / AI",
    category: "desktop",
    summary: "Desktop chess against a Minimax / Alpha-Beta engine with four strength levels.",
    tech: ["Java", "Swing", "Minimax"],
    repo: gh("Chess-Game"),
    image: "/images/work/chess-game.webp",
  },
  {
    slug: "hms-desktop",
    name: "HMS Desktop",
    kicker: "DESKTOP APP",
    category: "desktop",
    summary: "Java Swing version of the hospital system, with PDF invoices and file-based storage.",
    tech: ["Java", "Swing", "iText"],
    repo: gh("hospital-management-system"),
    image: "/images/work/hms-desktop.webp",
  },
  {
    slug: "scientific-calculator-react",
    name: "Scientific Calculator",
    kicker: "UTILITY",
    category: "web",
    summary: "Desk-calculator UI with an LCD display, memory keys, keyboard support and a paper-tape history.",
    tech: ["Next.js", "React", "TypeScript"],
    repo: gh("Scientific-Calculator-With-React"),
    live: "https://scientific-calculator-zain.vercel.app/",
    image: "/images/work/scientific-calculator-react.webp",
    imageFit: "contain",
    imageBg: "#111315",
  },
  {
    slug: "memory-game",
    name: "Memory Game",
    kicker: "GAME",
    category: "web",
    summary: "Card-matching game with 4×4 and 6×6 boards, a timer, streaks and best scores.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: gh("Memory-Game"),
    live: "https://memory-game-zain.vercel.app/",
    image: "/images/work/memory-game.webp",
  },
  {
    slug: "scientific-calculator-tkinter",
    name: "Tkinter Calculator",
    kicker: "DESKTOP APP",
    category: "desktop",
    summary: "Desktop scientific calculator with DEG/RAD modes and a history tape — pure Python, no packages.",
    tech: ["Python", "Tkinter"],
    repo: gh("Scientific-Calculator"),
    image: "/images/work/scientific-calculator-tkinter.webp",
    imageFit: "contain",
    imageBg: "#131519",
  },
  {
    slug: "portfolio",
    name: "Developer Portfolio",
    kicker: "PORTFOLIO",
    category: "web",
    summary: "This site — a canvas particle-network hero, a scroll-driven laptop About section and the Arctic Light design.",
    tech: ["Next.js", "React", "TypeScript"],
    repo: gh("Portfolio"),
    live: "https://zainaftab-dev.vercel.app/",
    image: "/images/work/portfolio.webp",
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));
