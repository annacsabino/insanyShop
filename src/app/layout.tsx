import type { Metadata } from 'next'
import { GlobalStyle } from '../GlobalStyle'

import { Inter, Saira } from 'next/font/google'

export const metadata: Metadata = {
  title: 'InsanyShop',
  description: 'Desafio front-edn para Insany Design'
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

const saira = Saira({
  variable: '--font-saira',
  subsets: ['latin'],
  weight: ['500']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${saira.variable} antialiased`}>
        <GlobalStyle />
        {children}
      </body>
    </html>
  )
}
