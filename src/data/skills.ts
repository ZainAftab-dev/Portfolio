import {
  Layers,
  Atom,
  FileCode2,
  Wind,
  Server,
  Database,
  Table2,
  Cloud,
  TrainFront,
  Triangle,
  Container,
  GitBranch,
  Wand2,
  Boxes,
  PenTool,
  Zap,
  Gauge,
  Accessibility,
  Cuboid,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export const skills: Skill[] = [
  { name: "Next.js", icon: Layers },
  { name: "React", icon: Atom },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Tailwind CSS", icon: Wind },
  { name: "NestJS", icon: Server },
  { name: "Prisma", icon: Database },
  { name: "SQL Server", icon: Table2 },
  { name: "Azure", icon: Cloud },
  { name: "Railway", icon: TrainFront },
  { name: "Vercel", icon: Triangle },
  { name: "Docker", icon: Container },
  { name: "Git / GitHub", icon: GitBranch },
  { name: "Framer Motion", icon: Wand2 },
  { name: "Spline / WebGL", icon: Boxes },
  { name: "Three.js", icon: Cuboid },
  { name: "Canvas Animation", icon: PenTool },
  { name: "CSS Animations", icon: Zap },
  { name: "Stripe Payments", icon: CreditCard },
  { name: "Performance Optimization", icon: Gauge },
  { name: "Accessibility (WCAG)", icon: Accessibility },
];
