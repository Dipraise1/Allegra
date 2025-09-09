"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Command } from "cmdk"
import { 
  Search, 
  FileText, 
  Brain, 
  Shield, 
  Home,
  TrendingUp,
  Zap,
  BarChart3,
  AlertTriangle
} from "lucide-react"

const commands = [
  {
    id: "home",
    title: "Home",
    description: "Go to the main landing page",
    icon: Home,
    href: "#home",
    category: "Navigation"
  },
  {
    id: "whitepaper",
    title: "Executive Summary",
    description: "Read the ALLEGRA Protocol overview",
    icon: FileText,
    href: "#whitepaper",
    category: "Whitepaper"
  },
  {
    id: "how-it-works",
    title: "How ALLEGRA Works",
    description: "Learn about the 4-step process",
    icon: TrendingUp,
    href: "#how-it-works",
    category: "Whitepaper"
  },
  {
    id: "features",
    title: "Key Features",
    description: "Explore ALLEGRA's capabilities",
    icon: Zap,
    href: "#features",
    category: "Whitepaper"
  },
  {
    id: "technology",
    title: "Technology Explained",
    description: "Deep dive into AI engine and smart contracts",
    icon: Brain,
    href: "#technology",
    category: "Technology"
  },
  {
    id: "returns",
    title: "Returns Structure",
    description: "Understand yield tiers and fee structure",
    icon: BarChart3,
    href: "#returns",
    category: "Whitepaper"
  },
  {
    id: "security",
    title: "Security Measures",
    description: "Learn about our security protocols",
    icon: Shield,
    href: "#security",
    category: "Security"
  },
  {
    id: "disclaimer",
    title: "Important Notes",
    description: "Read risk warnings and disclaimers",
    icon: AlertTriangle,
    href: "#disclaimer",
    category: "Legal"
  }
]

interface CommandPaletteProps {
  onClose?: () => void
}

export default function CommandPalette({ onClose }: CommandPaletteProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
      if (e.key === "Escape") {
        setOpen(false)
        onClose?.()
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [onClose])

  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setOpen(false)
    setSearch("")
  }

  const filteredCommands = commands.filter((command) =>
    command.title.toLowerCase().includes(search.toLowerCase()) ||
    command.description.toLowerCase().includes(search.toLowerCase()) ||
    command.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* Command Palette Trigger */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-40 glass px-4 py-2 rounded-lg flex items-center space-x-2 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-200"
      >
        <Search size={16} />
        <span className="hidden sm:inline text-xs">Search</span>
        <kbd className="hidden sm:inline-flex items-center px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-xs">
          ⌘K
        </kbd>
      </motion.button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 dark:bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white/95 dark:bg-black/95 backdrop-blur-md w-full max-w-2xl rounded-xl shadow-2xl border border-black/10 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Command className="rounded-xl">
                <div className="flex items-center border-b border-black/10 dark:border-white/10 px-4 py-3">
                  <Search size={20} className="text-gray-600 dark:text-gray-400 mr-3" />
                  <Command.Input
                    value={search}
                    onValueChange={setSearch}
                    placeholder="Search sections, features, or topics..."
                    className="flex-1 bg-transparent text-sm text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 outline-none"
                  />
                  <kbd className="hidden sm:inline-flex items-center px-2 py-1 bg-black/10 dark:bg-white/10 rounded text-xs text-gray-600 dark:text-gray-400">
                    ESC
                  </kbd>
                </div>
                
                <Command.List className="max-h-96 overflow-y-auto p-2">
                  <Command.Empty className="py-8 text-center text-gray-600 dark:text-gray-400">
                    No results found.
                  </Command.Empty>
                  
                  {Object.entries(
                    filteredCommands.reduce((acc, command) => {
                      if (!acc[command.category]) {
                        acc[command.category] = []
                      }
                      acc[command.category].push(command)
                      return acc
                    }, {} as Record<string, typeof commands>)
                  ).map(([category, categoryCommands]) => (
                    <div key={category}>
                      <Command.Group
                        heading={
                          <div className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                            {category}
                          </div>
                        }
                      >
                        {categoryCommands.map((command) => (
                          <Command.Item
                            key={command.id}
                            value={command.title}
                            onSelect={() => scrollToSection(command.href)}
                            className="flex items-center space-x-3 px-3 py-3 rounded-lg cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
                          >
                            <div className="w-8 h-8 bg-black/10 dark:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <command.icon size={16} className="text-black dark:text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-black dark:text-white font-medium text-sm">{command.title}</div>
                              <div className="text-gray-600 dark:text-gray-400 text-xs truncate">{command.description}</div>
                            </div>
                          </Command.Item>
                        ))}
                      </Command.Group>
                    </div>
                  ))}
                </Command.List>
                
                <div className="border-t border-white/10 px-4 py-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↑</kbd>
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↓</kbd>
                        <span>Navigate</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↵</kbd>
                        <span>Select</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <kbd className="px-1.5 py-0.5 bg-white/10 rounded">ESC</kbd>
                      <span>Close</span>
                    </div>
                  </div>
                </div>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
