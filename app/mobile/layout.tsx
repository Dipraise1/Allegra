import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mobile - ALLEGRA Protocol",
  description: "Experience ALLEGRA Protocol's AI-powered DeFi platform optimized for mobile devices.",
}

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
