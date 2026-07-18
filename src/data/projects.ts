import {
  Globe,
  HeartPulse,
  CloudSun,
  Clapperboard,
  ShoppingBag,
  PenTool,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  /** Bento tile size on the desktop grid. */
  size: "large" | "wide" | "small" | "full";
  /** Decorative tile visual: icon + node-layout variant (see TechVisual). */
  icon: LucideIcon;
  variant: number;
};

export const projects: Project[] = [
  {
    name: "Strategeon Softwares",
    description:
      "Our agency site — positioning, services, and case studies for a full-stack dev shop serving US clients.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/ZainAftab-dev/strategeon-softwares",
    demo: "https://strategeonsoftwares.com/",
    size: "large",
    icon: Globe,
    variant: 0,
  },
  {
    name: "Hospital Management System",
    description:
      "Full-stack healthcare platform with role-based auth, pharmacy dispensing, and PDF-invoice billing.",
    tech: ["Next.js", "NestJS", "SQL Server", "Docker"],
    github: "https://github.com/ZainAftab-dev/Hospital-Management-System-React",
    demo: "https://hospital-management-system-react-ap.vercel.app/",
    size: "wide",
    icon: HeartPulse,
    variant: 1,
  },
  {
    name: "Weather App",
    description: "Real-time forecasts with geolocation and a 5-day outlook.",
    tech: ["React", "Next.js"],
    github: "https://github.com/ZainAftab-dev/Weather-App",
    demo: "https://v0-weathers-app.vercel.app/",
    size: "small",
    icon: CloudSun,
    variant: 2,
  },
  {
    name: "Movie Search",
    description: "Browse movies and TV shows with ratings and a watchlist.",
    tech: ["React", "Next.js"],
    github: "https://github.com/ZainAftab-dev/Movie-Search-App",
    demo: "https://v0-movies-search.vercel.app/",
    size: "small",
    icon: Clapperboard,
    variant: 3,
  },
  {
    name: "Strategeon LLC",
    description:
      "E-commerce storefront for a UK networking-equipment retailer — product comparisons and guided buying.",
    tech: ["Next.js", "E-commerce"],
    github: "https://github.com/ZainAftab-dev/StrategeonLLC",
    demo: "https://www.strategeonllc.com/",
    size: "wide",
    icon: ShoppingBag,
    variant: 0,
  },
  {
    name: "Digital Whiteboard",
    description:
      "Canvas-based drawing app — freehand tools, shapes, undo/redo, and image export.",
    tech: ["React", "Canvas API"],
    github: "https://github.com/ZainAftab-dev/Digital-Whiteboard-App",
    demo: "https://v0-digital-whiteboard-app-mauve.vercel.app/",
    size: "wide",
    icon: PenTool,
    variant: 1,
  },
  {
    name: "Personal Finance Manager",
    description:
      "AI-powered finance dashboard — fraud detection, subscription tracking, budget planning, and a conversational AI assistant.",
    tech: ["Python", "Streamlit", "scikit-learn", "Claude API"],
    github: "https://github.com/ZainAftab-dev/Personal-Finance-Manager",
    demo: "https://github.com/ZainAftab-dev/Personal-Finance-Manager",
    // no live deploy — both buttons point to the repo
    size: "full",
    icon: Wallet,
    variant: 2,
  },
];
