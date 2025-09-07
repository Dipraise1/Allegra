import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mobile DApp - ALLEGRA Protocol",
  description: "Mobile-optimized ALLEGRA Protocol investment dashboard for seamless mobile DeFi experience.",
}

export default function MobileDAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
