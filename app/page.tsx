"use client"

import { useEffect, useState } from "react"
import Hero from '@/components/Hero'
import { AboutUs } from '@/components/AboutUs'
import Partners from '@/components/Partners'
import ExecutiveSummary from '@/components/whitepaper/ExecutiveSummary'
import CommandPalette from '@/components/CommandPalette'
import MobileHomePage from './mobile/page'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768 // md breakpoint
      setIsMobile(mobile)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  if (isMobile) {
    return <MobileHomePage />
  }

  return (
    <>
      <Hero />
      <AboutUs />
      <Partners />
      <ExecutiveSummary />
      <CommandPalette />
    </>
  )
}
