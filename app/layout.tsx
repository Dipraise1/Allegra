import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import LoadingWrapper from '@/components/LoadingWrapper'
import ConditionalLayout from '@/components/ConditionalLayout'
import { ToastProvider } from '@/components/dapp/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ALLEGRA: AI-Driven DeFi Trading Protocol | Sustainable Yields',
  description: 'ALLEGRA Protocol delivers sustainable yields through AI-powered trading strategies. Daily returns of 0.1% to 4% with transparent, verifiable on-chain performance. No minimum deposit required.',
  keywords: ['DeFi', 'AI', 'Yield Farming', 'Blockchain', 'Cryptocurrency', 'ALLEGRA Protocol', 'Sustainable Yields', 'AI Trading', 'USDT', 'Smart Contracts'],
  authors: [{ name: 'ALLEGRA Protocol Team' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'ALLEGRA Protocol - AI-Powered DeFi',
    description: 'AI-Powered DeFi with Sustainable Yields',
    type: 'website',
    images: [
      {
        url: '/images/logo-transparent.png',
        width: 1200,
        height: 630,
        alt: 'ALLEGRA Protocol Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ALLEGRA Protocol" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-black`}>
        <ThemeProvider defaultTheme="dark" storageKey="allegra-theme">
          <ToastProvider />
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
