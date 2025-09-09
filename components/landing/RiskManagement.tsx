"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Custom icon renderer function
const renderCustomIcon = (iconType: string, color: string) => {
  const iconClasses = `w-5 h-5 ${color}`
  
  switch (iconType) {
    case "diversification":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
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
    case "security":
      return (
        <div className={`${iconClasses} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-current rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
      )
    case "warning":
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

export default function RiskManagement() {
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
            Capital Preservation First
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Multiple layers of risk management protect your capital while maximizing returns 
            through intelligent diversification and real-time monitoring.
          </p>
        </motion.div>

        {/* Risk Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-12"
        >
          <div className="flex items-start space-x-3">
            {renderCustomIcon("warning", "text-gray-600 dark:text-gray-300")}
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Important Risk Disclaimer
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                Investing in cryptocurrency involves substantial risk of loss and is not suitable for all investors. 
                Past performance is not indicative of future results. Please carefully consider your investment 
                objectives, level of experience, and risk appetite before investing.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                  {renderCustomIcon("diversification", "text-gray-600 dark:text-gray-300")}
                  <span>Diversification</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-4">
                  No single strategy exceeds 20% of total capital allocation, 
                  ensuring risk is spread across multiple opportunities.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Multi-strategy allocation</li>
                  <li>• Cross-asset diversification</li>
                  <li>• Geographic risk distribution</li>
                </ul>
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
                  {renderCustomIcon("transparency", "text-gray-600 dark:text-gray-300")}
                  <span>Transparency</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-4">
                  All transactions and strategies are verifiable on-chain, 
                  providing complete visibility into fund allocation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• On-chain transaction records</li>
                  <li>• Real-time strategy monitoring</li>
                  <li>• Public audit trails</li>
                </ul>
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
                  {renderCustomIcon("security", "text-gray-600 dark:text-gray-300")}
                  <span>Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-4">
                  Multi-signature wallets and automated monitoring 
                  ensure the highest level of fund security.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Multi-sig wallet protection</li>
                  <li>• 24/7 automated monitoring</li>
                  <li>• Regular security audits</li>
                </ul>
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
            <a href="/risk-management">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
