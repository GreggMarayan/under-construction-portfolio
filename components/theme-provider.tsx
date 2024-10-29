"use client"

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  // Wait for the component to mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Optionally render a fallback, e.g., an empty div or a loading state
    return <div style={{ display: 'none' }} />;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
