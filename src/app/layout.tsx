import type { Metadata } from 'next'
import { GlobalStyle } from '../GlobalStyle'

import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'InsanyShop',
  description: 'Desafio front-edn para Insany Design'
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} antialiased`}>
        <GlobalStyle />
        {children}
      </body>
    </html>
  )
}
