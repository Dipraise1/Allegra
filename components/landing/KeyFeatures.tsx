"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const features = [
  {
    icon: "multi-model",
    title: "Multi-Model System",
    description: "Advanced models work together to analyze market data and identify profitable opportunities",
    color: "text-gray-600 dark:text-gray-300"
  },
  {
    icon: "risk-management",
    title: "Risk Prioritization",
    description: "Capital preservation first with comprehensive risk management and automated safeguards",
    color: "text-gray-600 dark:text-gray-300"
  },
  {
    icon: "blockchain",
    title: "Blockchain Integration",
    description: "Seamless multi-chain compatibility for cross-chain arbitrage and liquidity provision",
    color: "text-gray-600 dark:text-gray-300"
  },
  {
    icon: "transparency",
    title: "Enhanced Transparency",
    description: "Complete on-chain verification of all transactions, strategies, and performance metrics",
    color: "text-gray-600 dark:text-gray-300"
  },
  {
    icon: "accessibility",
    title: "Accessibility",
    description: "No minimum deposit requirements with multi-chain support and user-friendly interface",
    color: "text-gray-600 dark:text-gray-300"
  },
  {
    icon: "liquidity",
    title: "Liquidity Terms",
    description: "Flexible reward management with daily distribution and 30-day principal lock",
    color: "text-gray-600 dark:text-gray-300"
  }
]

// Custom icon renderer function
const renderCustomIcon = (iconType: string, color: string) => {
  const iconClasses = `w-5 h-5 ${color}`
  
  switch (iconType) {
    case "multi-model":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
      )
    case "risk-management":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
      )
    case "blockchain":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      )
    case "transparency":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
      )
    case "accessibility":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
      )
    case "liquidity":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
      )
    default:
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
      )
  }
}

export default function KeyFeatures() {
  return (
    <section className="py-16 px-4 bg-white/50 dark:bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
            Protocol Highlights
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the key features that make ALLEGRA Protocol a professional 
            DeFi platform for sustainable yields and intelligent investment management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: index % 2 === 0 ? 2 : -2,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                {/* Mirror effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center space-x-2">
                    {renderCustomIcon(feature.icon, feature.color)}
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <Button variant="outline" size="sm" asChild className="group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
                    <a href="/technology">
                      Details
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="gradient" size="lg" asChild>
            <a href="/technology">
              Dive Deeper
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
