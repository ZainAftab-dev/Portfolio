import { Search, Palette, Code2, Rocket, type LucideIcon } from "lucide-react";

export type ProcessStep = {
  title: string;
  label: string;
  icon: LucideIcon;
  variant: number;
};

export const processSteps: ProcessStep[] = [
  { title: "Discover", label: "Research", icon: Search, variant: 0 },
  { title: "Design", label: "Experience", icon: Palette, variant: 1 },
  { title: "Develop", label: "Engineering", icon: Code2, variant: 2 },
  { title: "Deploy", label: "Launch", icon: Rocket, variant: 3 },
];
