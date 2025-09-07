import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Whitepaper - ALLEGRA Protocol",
  description: "Complete whitepaper documentation for ALLEGRA Protocol's AI-powered DeFi platform.",
}

export default function WhitepaperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
