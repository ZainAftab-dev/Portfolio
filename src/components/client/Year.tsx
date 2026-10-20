"use client";

import { useState } from "react";

/** Current year, evaluated in the browser so a static build never shows a stale year. */
export function Year() {
  const [y] = useState(() => new Date().getFullYear());
  return <span suppressHydrationWarning>{y}</span>;
}
