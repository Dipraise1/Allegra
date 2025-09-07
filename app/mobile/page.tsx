"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiArrowRight, HiPlay, HiTrendingUp, HiShieldCheck, HiChip, HiSearch } from "react-icons/hi"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import Image from "next/image"
import CommandPalette from "@/components/CommandPalette"

export default function MobileHomePage() {
  const { theme } = useTheme()
  const [currentStat, setCurrentStat] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)

  const stats = [
    { value: "0.1% - 4%", label: "Daily Returns", icon: HiTrendingUp, color: "text-black dark:text-white" },
    { value: "100%", label: "Secure", icon: HiShieldCheck, color: "text-black dark:text-white" },
    { value: "24/7", label: "AI Monitoring", icon: HiChip, color: "text-black dark:text-white" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [stats.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="mobile-grid" width="15" height="15" patternUnits="userSpaceOnUse">
                <path d="M 15 0 L 0 0 0 15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mobile-grid)" className="text-foreground"/>
          </svg>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            x: mousePosition.x * 0.005,
            y: mousePosition.y * 0.005,
          }}
          className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            x: mousePosition.x * -0.003,
            y: mousePosition.y * -0.003,
          }}
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-xl"
        />
        
        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-8 h-8 border border-blue-500/30 rounded-lg"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/3 w-6 h-6 border border-green-500/30 rounded-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 py-8">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 mx-auto relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border border-green-500/30 rounded-full"
              />
              <div className="absolute inset-4 flex items-center justify-center">
                <Image
                  src="/images/logo-transparent.png"
                  alt="ALLEGRA Protocol Logo"
                  width={64}
                  height={64}
                  className="object-contain logo-white w-full h-full"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-bold mb-2"
          >
            <span className="text-foreground">ALLEGRA</span>
            <br />
            <span className="gradient-text">
              Protocol
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-muted-foreground text-sm max-w-xs mx-auto leading-relaxed"
          >
            AI-Powered DeFi Protocol delivering sustainable yields through intelligent asset allocation
          </motion.p>
        </motion.div>

        {/* Dynamic Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-8"
        >
          <div className="glass-light rounded-2xl p-6 mx-auto max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStat}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex items-center justify-center space-x-2 mb-3">
                  {(() => {
                    const IconComponent = stats[currentStat].icon
                    return <IconComponent className={`w-6 h-6 ${stats[currentStat].color}`} />
                  })()}
                  <span className="text-muted-foreground text-sm">{stats[currentStat].label}</span>
                </div>
                <div className={`text-3xl font-bold ${stats[currentStat].color}`}>
                  {stats[currentStat].value}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-light rounded-xl p-4 text-center"
          >
            <div className="w-8 h-8 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <HiTrendingUp className="w-4 h-4 text-black dark:text-white" />
            </div>
            <div className="text-xs text-muted-foreground">Daily Returns</div>
            <div className="text-lg font-bold text-black dark:text-white">0.1% - 4%</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-light rounded-xl p-4 text-center"
          >
            <div className="w-8 h-8 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <HiShieldCheck className="w-4 h-4 text-black dark:text-white" />
            </div>
            <div className="text-xs text-muted-foreground">Security</div>
            <div className="text-lg font-bold text-black dark:text-white">100%</div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="space-y-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              variant="gradient"
              className="w-full py-4 text-lg font-semibold group"
              asChild
            >
              <a href="/dapp">
                Start Earning Today
                <HiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              variant="glass"
              className="w-full py-4 text-lg font-semibold group"
              asChild
            >
              <a href="/whitepaper">
                <HiPlay className="mr-2 h-5 w-5" />
                Learn More
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="flex flex-col space-y-3 text-xs text-muted-foreground">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
              <span>$50M+ Assets Under Management</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
              <span>10,000+ Active Investors</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
              <span>24/7 AI Monitoring</span>
            </div>
          </div>
        </motion.div>

        {/* Search Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsCommandPaletteOpen(true)}
            className="w-14 h-14 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-black"
          >
            <HiSearch className="w-6 h-6 text-white dark:text-black" />
          </motion.button>
        </motion.div>

        {/* Command Palette */}
        {isCommandPaletteOpen && (
          <CommandPalette onClose={() => setIsCommandPaletteOpen(false)} />
        )}
      </div>
    </div>
  )
}