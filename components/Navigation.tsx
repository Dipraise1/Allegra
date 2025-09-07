"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useTheme } from "@/components/ThemeProvider"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Whitepaper", href: "/whitepaper" },
  { name: "Market Insights", href: "/market-insights" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Set active section based on current pathname
    const currentPath = window.location.pathname
    const currentItem = navItems.find(item => item.href === currentPath)
    if (currentItem) {
      setActiveSection(currentItem.href)
    } else {
      setActiveSection("/")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      // Handle hash links for same page navigation
      const element = document.querySelector(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (href.startsWith('/')) {
      // Handle page navigation
      window.location.href = href
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-dark shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="w-16 h-16 relative">
              <Image
                src="/images/logo-transparent.png"
                alt="ALLEGRA Protocol Logo"
                width={64}
                height={64}
                className="object-contain logo-white"
              />
            </div>
            <span className="text-xl font-bold gradient-text">ALLEGRA</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative",
                  activeSection === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="gradient" size="sm" asChild>
              <a href="/dapp">DApp</a>
            </Button>
            <Button variant="glass" size="sm" asChild>
              <a href="/auth">Create Account</a>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="lg:hidden overflow-hidden bg-white/95 dark:bg-black/95 backdrop-blur-md"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200",
                  activeSection === item.href
                    ? "text-black dark:text-white bg-black/10 dark:bg-white/10 rounded-lg"
                    : "text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg"
                )}
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-4 space-y-2">
              <Button variant="gradient" size="sm" className="w-full" asChild>
                <a href="/dapp">DApp</a>
              </Button>
              <Button variant="glass" size="sm" className="w-full" asChild>
                <a href="/auth">Create Account</a>
              </Button>
              <div className="flex justify-center pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
