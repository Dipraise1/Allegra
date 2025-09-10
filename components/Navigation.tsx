"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
// Removed AI-looking icons - using custom elements instead
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useTheme } from "@/components/ThemeProvider"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Technology", href: "/technology" },
  { name: "Risk Management", href: "/risk-management" },
  { name: "Performance", href: "/performance" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

const authenticatedNavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Technology", href: "/technology" },
  { name: "Risk Management", href: "/risk-management" },
  { name: "Performance", href: "/performance" },
  { name: "Resources", href: "/resources" },
  { name: "DApp", href: "/dapp" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      // Don't update scroll state when mobile menu is open
      if (!isMobileMenuOpen) {
        setIsScrolled(window.scrollY > 50)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('allegra_auth_status')
      setIsAuthenticated(authStatus === 'authenticated')
    }

    checkAuth()

    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'allegra_auth_status') {
        setIsAuthenticated(e.newValue === 'authenticated')
      }
    }
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
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
              {(isAuthenticated ? authenticatedNavItems : navItems).map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative px-3 py-2 rounded-lg",
                    isActive(item.href)
                      ? "text-foreground bg-muted/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/10"
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-600 dark:bg-gray-300"
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
                <a href="/auth">Sign Up</a>
              </Button>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex items-center space-x-2 lg:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-muted/20 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  {isMobileMenuOpen ? (
                    <>
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 45, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-0.5 bg-current absolute"
                      />
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: -45, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-0.5 bg-current absolute"
                      />
                    </>
                  ) : (
                    <>
                      <motion.div
                        initial={{ rotate: 45, y: 0 }}
                        animate={{ rotate: 0, y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-0.5 bg-current"
                      />
                      <motion.div
                        initial={{ rotate: -45, y: 0 }}
                        animate={{ rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-0.5 bg-current"
                      />
                      <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: 4 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-0.5 bg-current"
                      />
                    </>
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Outside of main nav container */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-[60] lg:hidden flex flex-col"
              style={{ backgroundColor: '#000000' }}
            >
              <div className="h-full w-full bg-black shadow-2xl flex flex-col">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 relative">
                      <Image
                        src="/images/logo-transparent.png"
                        alt="ALLEGRA Protocol Logo"
                        width={32}
                        height={32}
                        className="object-contain logo-white"
                      />
                    </div>
                    <span className="text-lg font-bold text-white">ALLEGRA</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-6 h-6 flex flex-col justify-center items-center"
                    >
                      <div className="w-5 h-0.5 bg-current rotate-45 absolute"></div>
                      <div className="w-5 h-0.5 bg-current -rotate-45 absolute"></div>
                    </motion.div>
                  </Button>
                </div>

                {/* Scrollable Navigation Items */}
                <div className="flex-1 overflow-y-auto">
                  <div className="px-6 py-8 space-y-2">
                    {(isAuthenticated ? authenticatedNavItems : navItems).map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-200 rounded-2xl group relative",
                          isActive(item.href)
                            ? "text-white bg-gray-800 border border-gray-600 shadow-lg"
                            : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xl">{item.name}</span>
                          {isActive(item.href) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-3 h-3 bg-white rounded-full"
                            />
                          )}
                        </div>
                        {isActive(item.href) && (
                          <motion.div
                            layoutId="mobileActiveIndicator"
                            className="absolute left-0 top-0 bottom-0 w-1.5 bg-white rounded-r-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Fixed Bottom CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (isAuthenticated ? authenticatedNavItems : navItems).length * 0.1 + 0.2, duration: 0.4 }}
                  className="p-6 border-t border-gray-700 bg-gray-900/50 flex-shrink-0"
                >
                  <div className="space-y-4">
                    <Button 
                      variant="gradient" 
                      size="lg" 
                      className="w-full font-semibold text-lg py-6" 
                      asChild
                    >
                      <a href="/auth">Get Started</a>
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-4 py-3">
                      <span className="text-sm text-gray-400">Theme</span>
                      <ThemeToggle />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
