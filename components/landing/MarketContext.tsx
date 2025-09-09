"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  Zap, 
  Globe, 
  ArrowRight
} from "lucide-react"

export default function MarketContext() {
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
            Navigating Crypto Opportunities
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Understanding the challenges and opportunities in today's financial landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span>Challenges in TradFi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• High minimum investment requirements</li>
                <li>• Limited access to sophisticated strategies</li>
                <li>• Opaque fee structures</li>
                <li>• Geographic restrictions</li>
                <li>• Slow settlement times</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span>Challenges in DeFi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• High volatility and impermanent loss</li>
                <li>• Complex yield farming mechanics</li>
                <li>• Smart contract risks</li>
                <li>• Limited risk management tools</li>
                <li>• Technical barriers for users</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span>Opportunities in Crypto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 24/7 global market access</li>
                <li>• Transparent on-chain operations</li>
                <li>• Programmable money and smart contracts</li>
                <li>• Decentralized governance models</li>
                <li>• Innovation in financial products</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="/about">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
