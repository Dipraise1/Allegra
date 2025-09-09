"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { HiArrowRight, HiPlay } from "react-icons/hi"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground"/>
          </svg>
        </div>

        {/* Professional Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-transparent to-blue-50/20 dark:from-slate-900/30 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent dark:from-transparent dark:via-white/5 dark:to-transparent"></div>
        
        {/* Subtle Professional Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-100/20 to-emerald-100/20 dark:from-green-900/20 dark:to-emerald-900/20 rounded-full blur-3xl"></div>
        
        {/* Professional Accent Lines */}
        <div className="absolute top-1/3 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent dark:via-blue-800/30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-green-200/30 to-transparent dark:via-green-800/30"></div>
      </div>

      {/* Main Content with Parallax Effect */}
      <motion.div 
        style={{ y }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24">
              <Image
                src="/images/logo-transparent.png"
                alt="ALLEGRA Protocol Logo"
                width={96}
                height={96}
                priority
                className="object-contain logo-white w-full h-full"
              />
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Unlock AI-Powered Yields in Crypto Markets</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Sustainable, risk-adjusted returns through transparent, verifiable trading strategies. 
              Operated by Allegra Technologies Ltd.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <motion.div 
              className="glass-light rounded-xl p-6 text-center relative overflow-hidden group"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mirror effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-gray-600 dark:bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground">Daily Returns</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-600 dark:text-gray-300">0.1% - 5%</div>
            </motion.div>
            
            <motion.div 
              className="glass-light rounded-xl p-6 text-center relative overflow-hidden group"
              whileHover={{ scale: 1.05, rotateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mirror effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-gray-600 dark:bg-gray-300 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
                <span className="text-sm text-muted-foreground">Security</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-600 dark:text-gray-300">On-chain</div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button
              size="lg"
              variant="gradient"
              className="group px-6 py-3 text-base font-medium w-full sm:w-auto"
              asChild
            >
              <a href="/auth">
                Sign Up Now
                <HiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="glass"
              className="group px-6 py-3 text-base font-medium w-full sm:w-auto"
              asChild
            >
              <a href="/whitepaper">
                <HiPlay className="mr-2 h-4 w-4" />
                Read White Paper
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="pt-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                <span>$50M+ Assets Under Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                <span>10,000+ Active Investors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                <span>24/7 System Monitoring</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
