// components/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}
import React, { createContext, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  attribute: string;
  defaultTheme: string;
  enableSystem: boolean;
  disableTransitionOnChange: boolean;
}

const ThemeContext = createContext({});

export const ThemeProvider = ({
  children,
}: ThemeProviderProps) => {
  // Theme provider logic here

  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  );
};