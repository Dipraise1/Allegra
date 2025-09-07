"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Wallet, Brain, TrendingUp, Download } from "lucide-react"

const steps = [
  {
    icon: Wallet,
    title: "Deposit",
    description: "Connect your wallet and deposit supported tokens (USDC, USDT, ETH, BTC)",
    details: "Minimum deposit: $100. Supported on Ethereum, Polygon, and BSC networks."
  },
  {
    icon: Brain,
    title: "AI Allocates",
    description: "Our AI engine analyzes market conditions and allocates your funds optimally",
    details: "Real-time market analysis, risk assessment, and yield optimization algorithms."
  },
  {
    icon: TrendingUp,
    title: "Earn Rewards",
    description: "Receive sustainable yields of 8-15% APY through diversified strategies",
    details: "Daily compounding, automated reinvestment, and transparent performance tracking."
  },
  {
    icon: Download,
    title: "Withdraw",
    description: "Withdraw your funds anytime with no lock-up periods or penalties",
    details: "Instant withdrawals, low fees, and full control over your assets."
  }
]

export default function HowItWorks() {
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
            How ALLEGRA Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Simple, secure, and intelligent. Get started with ALLEGRA in just four easy steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center text-black font-bold text-sm z-10">
                  {index + 1}
                </div>

                <Card className="glass hover:bg-white/20 transition-all duration-300 h-full group">
                  <CardHeader className="text-center pt-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center"
                    >
                      <step.icon size={32} className="text-black" />
                    </motion.div>
                    <CardTitle className="text-foreground text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center">{step.description}</p>
                    <div className="glass p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">{step.details}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <ArrowRight className="text-muted-foreground" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">
                Key Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">8-15%</div>
                  <div className="text-foreground font-semibold">APY Range</div>
                  <div className="text-muted-foreground text-sm">Sustainable yields</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-foreground font-semibold">AI Monitoring</div>
                  <div className="text-muted-foreground text-sm">Continuous optimization</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">0%</div>
                  <div className="text-foreground font-semibold">Lock-up Period</div>
                  <div className="text-muted-foreground text-sm">Withdraw anytime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
