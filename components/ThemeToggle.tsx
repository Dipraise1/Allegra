"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={16} />
      case "dark":
        return <Moon size={16} />
      case "system":
        return <Monitor size={16} />
      default:
        return <Sun size={16} />
    }
  }

  return (
    <Button
      variant="glass"
      size="icon"
      onClick={cycleTheme}
      className="w-9 h-9"
    >
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
