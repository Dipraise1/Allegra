"use client"

import { useEffect, useState } from "react"
import { DAppInterface } from "@/components/dapp/DAppInterface"
import MobileDAppInterface from "@/components/dapp/MobileDAppInterface"

export default function DAppPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Show mobile interface for mobile devices, desktop interface for larger screens
  return isMobile ? <MobileDAppInterface /> : <DAppInterface />
}
