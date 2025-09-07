"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Lock, 
  Globe, 
  BarChart3, 
  Users,
  Smartphone,
  Clock
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Optimization",
    description: "Advanced machine learning algorithms continuously optimize your portfolio for maximum returns with minimal risk.",
    color: "from-white to-gray-200"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Multi-signature wallets, AI-powered security audits, and institutional-grade security measures protect your assets.",
    color: "from-gray-200 to-gray-400"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Gas-optimized transactions and instant settlements ensure your funds are deployed efficiently.",
    color: "from-gray-300 to-gray-500"
  },
  {
    icon: TrendingUp,
    title: "Sustainable Yields",
    description: "8-15% APY through diversified strategies including lending, liquidity provision, and yield farming.",
    color: "from-white to-gray-300"
  },
  {
    icon: Lock,
    title: "Non-Custodial",
    description: "You maintain full control of your private keys. We never have access to your funds.",
    color: "from-gray-400 to-gray-600"
  },
  {
    icon: Globe,
    title: "Multi-Chain Support",
    description: "Deploy across Ethereum, Polygon, BSC, and other major networks for maximum flexibility.",
    color: "from-gray-200 to-gray-400"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Comprehensive dashboard with detailed performance metrics, risk analysis, and yield tracking.",
    color: "from-white to-gray-300"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Governance tokens allow community participation in protocol decisions and upgrades.",
    color: "from-gray-300 to-gray-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Seamless experience across all devices with responsive design and mobile-first approach.",
    color: "from-gray-200 to-gray-400"
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock monitoring and automated rebalancing ensure optimal performance at all times.",
    color: "from-white to-gray-300"
  }
]

export default function KeyFeatures() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the powerful features that make ALLEGRA Protocol the future of DeFi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="glass hover:bg-white/20 transition-all duration-300 h-full group hover:scale-105">
                <CardHeader className="pb-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-3`}
                  >
                    <feature.icon size={20} className="text-black" />
                  </motion.div>
                  <CardTitle className="text-foreground text-sm group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-foreground text-center">
                Why Choose ALLEGRA?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-black">A+</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Security Rating</div>
                    <div className="text-gray-400 text-xs">AI-powered security audits</div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-gray-200 to-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-black">$0</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Setup Fees</div>
                    <div className="text-gray-400 text-xs">No hidden costs</div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-black">50+</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Supported Assets</div>
                    <div className="text-gray-400 text-xs">Major cryptocurrencies</div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-black">24/7</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">AI Monitoring</div>
                    <div className="text-gray-400 text-xs">Continuous optimization</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
