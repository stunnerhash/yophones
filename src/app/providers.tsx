"use client"

import { ThemeProvider, useTheme } from "next-themes"
import {ClerkProvider } from "@clerk/nextjs"
import {dark} from "@clerk/themes"

export function Providers ({children}: {children: React.ReactNode}){
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ClerkProviderWithTheme>
        {children}
      </ClerkProviderWithTheme>
    </ThemeProvider>
  )
}

function ClerkProviderWithTheme  ({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  return (
    <ClerkProvider appearance={{ baseTheme: resolvedTheme=== "dark" ? dark : undefined }}>
      {children}
    </ClerkProvider>
  );
}
