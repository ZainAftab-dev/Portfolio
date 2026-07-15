"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

// Using `m` components (see LazyMotion docs) instead of importing the full
// `motion` namespace in every section cuts the framer-motion bundle
// significantly, since only the `domAnimation` feature set loads up front.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
