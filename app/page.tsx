"use client"

import { useEffect, useState } from "react"
import Hero from '@/components/Hero'
import ExecutiveSummary from '@/components/landing/ExecutiveSummary'
import HowAllegraWorks from '@/components/landing/HowAllegraWorks'
import KeyFeatures from '@/components/landing/KeyFeatures'
import TechnologyOverview from '@/components/landing/TechnologyOverview'
import RiskManagement from '@/components/landing/RiskManagement'
import PerformanceModel from '@/components/landing/PerformanceModel'
import GovernanceTransparency from '@/components/landing/GovernanceTransparency'
import UseCases from '@/components/landing/UseCases'
import ResourcesCTA from '@/components/landing/ResourcesCTA'
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
    <div className="relative">
      {/* Professional Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-black dark:to-blue-900/20"></div>
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="professional-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#professional-grid)" className="text-foreground"/>
          </svg>
        </div>
      </div>
      
      <Hero />
      <ExecutiveSummary />
      <HowAllegraWorks />
      <KeyFeatures />
      <TechnologyOverview />
      <RiskManagement />
      <PerformanceModel />
      <GovernanceTransparency />
      <UseCases />
      <ResourcesCTA />
      <CommandPalette />
    </div>
  )
}
