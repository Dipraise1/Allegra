"use client"

import { useEffect, useState } from "react"
import { EnhancedDAppInterface } from "@/components/dapp/EnhancedDAppInterface"
import NewMobileDApp from "@/components/dapp/NewMobileDApp"
import { AccessGate } from "@/components/auth/AccessGate"

export default function DAppPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    // Check authentication status (in a real app, this would check localStorage, cookies, or API)
    const checkAuth = () => {
      const authStatus = localStorage.getItem('allegra_auth_status')
      const authTimestamp = localStorage.getItem('allegra_auth_timestamp')
      console.log('Auth check:', { authStatus, authTimestamp, isAuthenticated: authStatus === 'authenticated' })
      setIsAuthenticated(authStatus === 'authenticated')
    }

    checkIsMobile()
    checkAuth()
    window.addEventListener('resize', checkIsMobile)

    // Listen for storage changes (when auth status is updated in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'allegra_auth_status') {
        setIsAuthenticated(e.newValue === 'authenticated')
      }
    }
    window.addEventListener('storage', handleStorageChange)

    // Set loading to false after initial check
    setIsLoading(false)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  // Show authentication gate if not authenticated
  if (!isAuthenticated) {
    return (
      <AccessGate 
        title="DApp Access Required"
        description="Please authenticate to access the ALLEGRA Protocol DApp"
        redirectTo="/auth"
      />
    )
  }

  // Show mobile interface for mobile devices, enhanced interface for larger screens
  if (isMobile) {
    return <NewMobileDApp />
  }

  return (
    <div className="relative min-h-screen">
      {/* Professional DApp Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 dark:from-slate-900 dark:via-black dark:to-indigo-900/10"></div>
        <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.03]">
          <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dapp-grid" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M 200 0 L 0 0 0 200" fill="none" stroke="currentColor" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dapp-grid)" className="text-foreground"/>
          </svg>
        </div>
      </div>
      
      <EnhancedDAppInterface />
    </div>
  )
}
