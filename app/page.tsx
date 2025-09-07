"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Hero from '@/components/Hero'
import { AboutUs } from '@/components/AboutUs'
import Partners from '@/components/Partners'
import ExecutiveSummary from '@/components/whitepaper/ExecutiveSummary'
import CommandPalette from '@/components/CommandPalette'
import MobileHomePage from './mobile/page'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768 // md breakpoint
      setIsMobile(mobile)
    }

    // Show loader for minimum 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="relative w-24 h-24">
          {/* Outer spinning circle */}
          <div className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full animate-spin"></div>
          
          {/* Middle spinning circle */}
          <div className="absolute inset-2 border-2 border-transparent border-b-primary rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          {/* Inner spinning circle */}
          <div className="absolute inset-4 border-2 border-transparent border-l-primary rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          
          {/* Logo in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/logo-transparent.png"
              alt="ALLEGRA Protocol Logo"
              width={48}
              height={48}
              className="object-contain logo-white w-12 h-12"
            />
          </div>
        </div>
      </div>
    )
  }

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
