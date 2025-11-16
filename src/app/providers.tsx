"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

const getForcedTheme = (pathname: string) => {
  if (
    ["/planner", "/lezhin", "/nebula-labs", "/descension"].includes(pathname)
  ) {
    return "light";
  }
  return undefined;
};

export function Providers({ children }: { children: React.ReactNode }) {
  const forcedTheme = getForcedTheme(usePathname());
  return (
    <ThemeProvider forcedTheme={forcedTheme} attribute="class">
      {children}
    </ThemeProvider>
  );
}
