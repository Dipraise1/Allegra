"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Shield, BarChart3, Cpu, Database, Network } from "lucide-react"

const technologySections = [
  {
    id: "ai-engine",
    title: "AI Engine",
    icon: Brain,
    content: {
      description: "Our proprietary AI engine uses advanced machine learning algorithms to optimize yield strategies in real-time.",
      features: [
        "Deep learning models trained on historical market data",
        "Real-time risk assessment and portfolio optimization",
        "Adaptive algorithms that learn from market conditions",
        "Multi-factor analysis including volatility, liquidity, and correlation"
      ],
      technical: {
        "Model Type": "Ensemble Learning with LSTM Networks",
        "Training Data": "5+ years of DeFi market data",
        "Update Frequency": "Real-time (every block)",
        "Accuracy": "94.7% prediction accuracy on backtests"
      }
    }
  },
  {
    id: "smart-contracts",
    title: "Smart Contracts",
    icon: Shield,
    content: {
      description: "AI-audited smart contracts ensure secure, transparent, and efficient execution of all protocol operations.",
      features: [
        "Multi-signature wallet integration for enhanced security",
        "Automated yield distribution and compounding",
        "Emergency pause mechanisms for risk management",
        "Upgradeable architecture with governance controls"
      ],
      technical: {
        "Language": "Solidity 0.8.19+",
        "Audits": "AI-Powered Continuous Security Analysis",
        "Gas Optimization": "Average 15% lower gas costs",
        "Test Coverage": "98.5% code coverage"
      }
    }
  },
  {
    id: "risk-management",
    title: "Risk Management",
    icon: BarChart3,
    content: {
      description: "Comprehensive risk management system protects your assets through diversification and automated monitoring.",
      features: [
        "Dynamic position sizing based on risk metrics",
        "Automated stop-loss and take-profit mechanisms",
        "Correlation analysis to prevent over-concentration",
        "Real-time monitoring of protocol health and market conditions"
      ],
      technical: {
        "Risk Models": "VaR, CVaR, and Monte Carlo simulations",
        "Monitoring": "24/7 automated risk assessment",
        "Alert System": "Real-time notifications for risk events",
        "Recovery": "Automated emergency procedures"
      }
    }
  }
]

export default function Technology() {
  return (
    <section id="technology" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technology Explained
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology powering the future of decentralized finance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Tabs defaultValue="ai-engine" className="max-w-6xl mx-auto">
            <TabsList className="glass grid w-full grid-cols-3 mb-8">
              {technologySections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="flex items-center space-x-2 data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  <section.icon size={20} />
                  <span className="hidden sm:inline">{section.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {technologySections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="space-y-8">
                <Card className="glass">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center">
                        <section.icon size={32} className="text-black" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-foreground">{section.title}</CardTitle>
                        <p className="text-muted-foreground mt-2">{section.content.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.content.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-3 glass p-4 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specifications */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">Technical Specifications</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(section.content.technical).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-4 rounded-lg"
                          >
                            <div className="text-sm text-muted-foreground mb-1">{key}</div>
                            <div className="text-foreground font-semibold">{value}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16"
        >
          <Card className="glass max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                System Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
                    <Cpu size={32} className="text-black" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">AI Layer</div>
                    <div className="text-gray-400 text-sm">Machine learning models and optimization algorithms</div>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-gray-200 to-gray-400 rounded-full flex items-center justify-center">
                    <Database size={32} className="text-black" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Smart Contracts</div>
                    <div className="text-gray-400 text-sm">Decentralized execution and asset management</div>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center">
                    <Network size={32} className="text-black" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Multi-Chain</div>
                    <div className="text-gray-400 text-sm">Cross-chain compatibility and interoperability</div>
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
