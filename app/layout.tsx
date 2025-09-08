import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { headers } from 'next/headers'
import LoadingWrapper from '@/components/LoadingWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ALLEGRA Protocol - AI-Powered DeFi with Sustainable Yields',
  description: 'Discover ALLEGRA Protocol, the next-generation DeFi platform that uses AI to deliver sustainable yields through intelligent asset allocation and risk management.',
  keywords: ['DeFi', 'AI', 'Yield Farming', 'Blockchain', 'Cryptocurrency', 'ALLEGRA Protocol'],
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
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || ''
  
  // Check if we're on the DApp route
  const isDAppRoute = pathname.startsWith('/dapp')
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ALLEGRA Protocol" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-black`}>
        <ThemeProvider defaultTheme="light" storageKey="allegra-theme">
          <LoadingWrapper isDAppRoute={isDAppRoute}>
            {isDAppRoute ? (
              <>{children}</>
            ) : (
              <>
                <Navigation />
                <main className="relative">
                  {children}
                </main>
                <Footer />
              </>
            )}
          </LoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
