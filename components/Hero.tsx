"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { HiArrowRight, HiPlay, HiTrendingUp, HiShieldCheck, HiChip } from "react-icons/hi"
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
      {/* Enhanced Background with Dynamic Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
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
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground"/>
          </svg>
        </motion.div>

        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-green-500/3 via-transparent to-cyan-500/3"></div>
        
        {/* Enhanced Floating Elements with Mouse Interaction */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            x: mousePosition.x * -0.008,
            y: mousePosition.y * -0.008,
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-xl"
        />
        
        {/* Additional Floating Elements for Depth */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/3 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500/8 to-orange-500/8 rounded-full blur-lg"
        />
        
        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-12 h-12 border border-blue-500/20 rounded-lg"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/3 w-8 h-8 border border-green-500/20 rounded-full"
        />
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">ALLEGRA</span>
              <span className="gradient-text ml-4">Protocol</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-Powered DeFi Protocol delivering sustainable yields through intelligent asset allocation
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="glass-light rounded-xl p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <HiTrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Daily Returns</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-green-500">0.1% - 4%</div>
            </div>
            
            <div className="glass-light rounded-xl p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <HiShieldCheck className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-muted-foreground">Security</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-500">transparency</div>
            </div>
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
              className="group px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              asChild
            >
              <a href="/dapp">
                Start Earning Today
                <HiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="glass"
              className="group px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              asChild
            >
              <a href="/whitepaper">
                <HiPlay className="mr-2 h-5 w-5" />
                Learn More
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
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>$50M+ Assets Under Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>10,000+ Active Investors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>24/7 AI Monitoring</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
