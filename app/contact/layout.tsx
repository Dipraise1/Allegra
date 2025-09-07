import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact - ALLEGRA Protocol",
  description: "Get in touch with our team for support, partnerships, or general inquiries about ALLEGRA Protocol.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
