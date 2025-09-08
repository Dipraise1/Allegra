"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingWrapperProps {
  children: React.ReactNode
  isDAppRoute: boolean
}

export default function LoadingWrapper({ children, isDAppRoute }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loader for minimum 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
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

  return <>{children}</>
}
