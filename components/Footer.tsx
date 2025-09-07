"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:contact@allegraprotocol.com" },
]

const footerLinks = {
  Product: [
    { name: "Whitepaper", href: "#whitepaper" },
    { name: "Technology", href: "#technology" },
    { name: "Security", href: "#security" },
    { name: "Launch App", href: "#", external: true },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
  Resources: [
    { name: "Documentation", href: "#docs" },
    { name: "API", href: "#api" },
    { name: "Support", href: "#support" },
    { name: "Community", href: "#community" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Disclaimer", href: "#disclaimer" },
    { name: "Risk Warning", href: "#risk" },
  ],
} as const

export default function Footer() {
  const { theme } = useTheme()
  const [openSections, setOpenSections] = useState<string[]>([])
  
  const toggleSection = (category: string) => {
    setOpenSections(prev => 
      prev.includes(category) 
        ? prev.filter(section => section !== category)
        : [...prev, category]
    )
  }
  
  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/images/logo-transparent.png"
                    alt="ALLEGRA Protocol Logo"
                    width={48}
                    height={48}
                    className="object-contain logo-white"
                  />
                </div>
                <span className="text-2xl font-bold gradient-text">ALLEGRA</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                AI-Powered DeFi Protocol delivering sustainable yields through intelligent asset allocation and risk management.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 glass rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <social.icon size={20} className="text-muted-foreground hover:text-foreground" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections - Desktop Grid */}
          <div className="hidden md:contents">
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>{link.name}</span>
                        {'external' in link && link.external && <ExternalLink size={12} />}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border border-white/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(category)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider">
                    {category}
                  </h3>
                  <motion.div
                    animate={{ rotate: openSections.includes(category) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} className="text-muted-foreground" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openSections.includes(category) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3 space-y-3">
                        {links.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            className="block text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 flex items-center space-x-1"
                          >
                            <span>{link.name}</span>
                            {'external' in link && link.external && <ExternalLink size={12} />}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 ALLEGRA Protocol. All rights reserved.
            </div>
            <div className="glass px-4 py-2 rounded-lg">
              <p className="text-yellow-400 text-sm font-medium flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                <span>Returns are variable and based on market performance</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </footer>
  )
}
