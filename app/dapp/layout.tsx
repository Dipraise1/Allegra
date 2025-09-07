import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DApp - ALLEGRA Protocol',
  description: 'ALLEGRA Protocol DApp Interface',
}

export default function DAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
