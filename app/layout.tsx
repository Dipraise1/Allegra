import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ALLEGRA Protocol - AI-Powered DeFi with Sustainable Yields',
  description: 'Discover ALLEGRA Protocol, the next-generation DeFi platform that uses AI to deliver sustainable yields through intelligent asset allocation and risk management.',
  keywords: ['DeFi', 'AI', 'Yield Farming', 'Blockchain', 'Cryptocurrency', 'ALLEGRA Protocol'],
  authors: [{ name: 'ALLEGRA Protocol Team' }],
  openGraph: {
    title: 'ALLEGRA Protocol - AI-Powered DeFi',
    description: 'AI-Powered DeFi with Sustainable Yields',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-black`}>
        <ThemeProvider defaultTheme="dark" storageKey="allegra-theme">
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
