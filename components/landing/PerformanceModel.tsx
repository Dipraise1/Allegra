"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Shield,
  Zap
} from "lucide-react"

export default function PerformanceModel() {
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
            Verifiable Yields from Real Trades
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ALLEGRA Protocol delivers sustainable returns through transparent, professional trading strategies. 
            All performance is verifiable on-chain and based on actual market results.
          </p>
        </motion.div>

        {/* Key Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Mirror effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="pt-6 relative z-10">
                <TrendingUp className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">0.1% - 4%</h3>
                <p className="text-muted-foreground">Daily Returns</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              rotateY: -2,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Mirror effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="pt-6 relative z-10">
                <BarChart3 className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Variable</h3>
                <p className="text-muted-foreground">Based on Market</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Mirror effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="pt-6 relative z-10">
                <Eye className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">100%</h3>
                <p className="text-muted-foreground">Transparent</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              rotateY: -2,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Mirror effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="pt-6 relative z-10">
                <Zap className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Daily</h3>
                <p className="text-muted-foreground">Distribution</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">How Returns Are Generated</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Strategy Execution</h4>
                  <p className="text-muted-foreground text-sm">
                    Advanced algorithms identify and execute profitable trading opportunities 
                    across arbitrage, liquidity provision, and lending strategies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Real Market Performance</h4>
                  <p className="text-muted-foreground text-sm">
                    Returns are based on actual trading results, not theoretical models. 
                    Performance varies with market conditions and opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Daily Distribution</h4>
                  <p className="text-muted-foreground text-sm">
                    Profits are calculated and distributed daily in USDT, 
                    with flexible withdrawal or compounding options.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Performance Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Conservative Days</span>
                  <span className="font-bold">0.1% - 1%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Normal Market</span>
                  <span className="font-bold">1% - 3%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>High Opportunity</span>
                  <span className="font-bold">3% - 5%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <p className="text-sm mt-4 opacity-90">
                * Returns are variable and depend on market conditions and available opportunities
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="gradient" size="lg" asChild>
            <a href="/performance">
              View Live Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
