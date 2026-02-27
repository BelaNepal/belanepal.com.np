"use client" // ⚠️ required for hooks

import React, { Suspense } from "react"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"

const ClientProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Suspense fallback={null}>{children}</Suspense>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default ClientProviders
