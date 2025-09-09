"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Custom icon renderer function
const renderCustomIcon = (iconType: string, color: string) => {
  const iconClasses = `w-5 h-5 ${color}`
  
  switch (iconType) {
    case "system":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
      )
    case "safeguards":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
      )
    case "architecture":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
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

export default function TechnologyOverview() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
            The Allegra Core
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advanced system architecture combining machine learning, blockchain technology, 
            and institutional-grade risk management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            whileHover={{ 
              scale: 1.02, 
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Mirror effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center space-x-2">
                    {renderCustomIcon("system", "text-gray-600 dark:text-gray-300")}
                    <span>System Framework</span>
                  </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Analysis Systems</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced models analyze market data to identify 
                      arbitrage opportunities and market inefficiencies.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Evaluation Engine</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced models evaluate opportunities and assess 
                      the impact of external factors on trading decisions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Execution System</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated execution system with smart contract integration and 
                      real-time monitoring for optimal strategy implementation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.02, 
              rotateY: -2,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Mirror effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center space-x-2">
                  {renderCustomIcon("safeguards", "text-gray-600 dark:text-gray-300")}
                  <span>Safeguards</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Dynamic Hedging</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time hedging strategies to offset market volatility 
                      and protect against adverse price movements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Circuit Breakers</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatic trading halt when losses exceed predefined thresholds 
                      to prevent catastrophic losses.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Reserve Fund</h4>
                    <p className="text-sm text-muted-foreground">
                      10% of total assets maintained in reserve to absorb 
                      market volatility and ensure stability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.02, 
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Mirror effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center space-x-2">
                  {renderCustomIcon("architecture", "text-gray-600 dark:text-gray-300")}
                  <span>Architecture</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Smart Contracts</h4>
                    <p className="text-sm text-muted-foreground">
                      Built on Ethereum and Layer 2 solutions with automated 
                      yield distribution and transparent investment rules.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Multi-Chain Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Seamless integration across multiple blockchain networks 
                      for enhanced accessibility and reduced costs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Real-Time Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Sub-100ms processing speed with 99.9% uptime for 
                      optimal performance and reliability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
