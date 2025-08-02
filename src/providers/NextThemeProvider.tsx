'use client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'

export function ThemeProviderNext({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
