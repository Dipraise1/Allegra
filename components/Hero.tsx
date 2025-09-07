"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Hero() {
  const { theme } = useTheme()
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
              <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.05"/>
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground"/>
          </svg>
        </div>

        {/* Futuristic Circuit Pattern */}
        <div className="absolute inset-0 opacity-35">
          <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            
            {/* Circuit Lines */}
            <g stroke="url(#circuitGradient)" strokeWidth="1" fill="none" className="text-foreground">
              <path d="M50,100 L200,100 L200,200 L350,200 L350,300 L500,300"/>
              <path d="M750,150 L600,150 L600,250 L450,250 L450,350 L300,350"/>
              <path d="M100,400 L250,400 L250,500 L400,500 L400,550 L550,550"/>
              <path d="M700,450 L550,450 L550,350 L400,350 L400,250 L250,250"/>
              
              {/* Diagonal connections */}
              <path d="M150,50 L300,200 L450,50 L600,200 L750,50"/>
              <path d="M50,550 L200,400 L350,550 L500,400 L650,550"/>
            </g>
            
            {/* Circuit Nodes */}
            <g fill="url(#circuitGradient)" className="text-foreground">
              <circle cx="200" cy="100" r="3"/>
              <circle cx="350" cy="200" r="3"/>
              <circle cx="500" cy="300" r="3"/>
              <circle cx="600" cy="150" r="3"/>
              <circle cx="450" cy="250" r="3"/>
              <circle cx="300" cy="350" r="3"/>
              <circle cx="250" cy="400" r="3"/>
              <circle cx="400" cy="500" r="3"/>
              <circle cx="550" cy="450" r="3"/>
              <circle cx="400" cy="350" r="3"/>
              <circle cx="250" cy="250" r="3"/>
            </g>
          </svg>
        </div>

        {/* Hexagonal Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
                <polygon points="20,2 38,10 38,25 20,33 2,25 2,10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
        </div>
        
        {/* Floating Tech Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-white/10 dark:bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gray-500/10 dark:bg-gray-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gray-300/10 dark:bg-gray-300/10 rounded-full blur-3xl"
        />

        {/* Animated Tech Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-foreground/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          {/* Logo and Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col items-center space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-96 h-96 relative"
            >
              <Image
                src="/images/logo-transparent.png"
                alt="ALLEGRA Protocol Logo"
                width={384}
                height={384}
                className="object-contain logo-white"
              />
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight text-center">
              <span className="gradient-text animate-gradient-x">ALLEGRA</span>
              <br />
              <span className="text-foreground">Protocol</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            AI-Powered DeFi with Sustainable Yields
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <Button
              size="lg"
              variant="gradient"
              className="group px-10 py-6 text-xl font-semibold"
            >
              Read Whitepaper
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="glass"
              className="group px-10 py-6 text-xl font-semibold"
              asChild
            >
              <a href="/dashboard">
                <Play className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                Launch App
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
