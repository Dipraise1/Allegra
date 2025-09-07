"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Zap, Target } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Sustainable Yields",
    description: "8-15% APY through intelligent asset allocation and risk management"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Multi-signature wallets, AI-powered security audits, and institutional-grade protection"
  },
  {
    icon: Zap,
    title: "AI-Powered",
    description: "Advanced algorithms optimize returns while minimizing risk exposure"
  },
  {
    icon: Target,
    title: "Risk Management",
    description: "Comprehensive risk assessment and automated rebalancing strategies"
  }
]

export default function ExecutiveSummary() {
  return (
    <section id="whitepaper" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Executive Summary
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ALLEGRA Protocol represents a paradigm shift in decentralized finance, 
            combining artificial intelligence with institutional-grade security to deliver 
            sustainable yields in the volatile crypto market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="glass hover:bg-white/20 transition-all duration-300 h-full group">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center"
                  >
                    <feature.icon size={32} className="text-black" />
                  </motion.div>
                  <CardTitle className="text-foreground text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">
                The ALLEGRA Advantage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Problem</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Traditional DeFi yields are unsustainable and risky</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Manual portfolio management is time-consuming</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Lack of institutional-grade security measures</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>High gas fees and complex user interfaces</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Solution</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>AI-optimized yield strategies with 8-15% APY</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Automated portfolio rebalancing and risk management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Multi-signature security and AI-powered audits</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Gas-optimized transactions and intuitive UI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
