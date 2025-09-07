"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, PieChart, Target } from "lucide-react"

const returnTiers = [
  {
    tier: "Conservative",
    apy: "8-10%",
    risk: "Low",
    description: "Stable yield strategies with minimal risk exposure",
    allocation: {
      "Stablecoin Lending": "40%",
      "Liquidity Provision": "30%",
      "Yield Farming": "20%",
      "Cash Reserve": "10%"
    },
    color: "from-white to-gray-200"
  },
  {
    tier: "Balanced",
    apy: "10-12%",
    risk: "Medium",
    description: "Diversified portfolio with moderate risk for higher returns",
    allocation: {
      "Stablecoin Lending": "30%",
      "Liquidity Provision": "35%",
      "Yield Farming": "25%",
      "Cash Reserve": "10%"
    },
    color: "from-gray-200 to-gray-400"
  },
  {
    tier: "Aggressive",
    apy: "12-15%",
    risk: "High",
    description: "High-yield strategies with increased risk tolerance",
    allocation: {
      "Stablecoin Lending": "20%",
      "Liquidity Provision": "40%",
      "Yield Farming": "30%",
      "Cash Reserve": "10%"
    },
    color: "from-gray-300 to-gray-500"
  }
]

const feeStructure = [
  { type: "Management Fee", rate: "2%", description: "Annual fee on assets under management" },
  { type: "Performance Fee", rate: "20%", description: "Fee on profits above 8% APY threshold" },
  { type: "Withdrawal Fee", rate: "0%", description: "No fees for withdrawals" },
  { type: "Gas Fees", rate: "Variable", description: "Network transaction costs" }
]

export default function ReturnsStructure() {
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
            Returns Structure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transparent, sustainable yields with flexible risk profiles to match your investment goals
          </p>
        </motion.div>

        {/* Return Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {returnTiers.map((tier, index) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="glass hover:bg-white/20 transition-all duration-300 h-full group">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center`}>
                    <TrendingUp size={32} className="text-black" />
                  </div>
                  <CardTitle className="text-white text-2xl">{tier.tier}</CardTitle>
                  <div className="text-3xl font-bold gradient-text">{tier.apy}</div>
                  <div className="text-gray-400">APY Range</div>
                  <div className="glass px-3 py-1 rounded-full inline-block">
                    <span className="text-sm font-medium text-white">Risk: {tier.risk}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 text-center">{tier.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <PieChart size={20} className="mr-2" />
                      Asset Allocation
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(tier.allocation).map(([asset, percentage]) => (
                        <div key={asset} className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{asset}</span>
                          <span className="text-white font-semibold">{percentage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fee Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Card className="glass max-w-4xl mx-auto mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center flex items-center justify-center">
                <DollarSign size={32} className="mr-3" />
                Fee Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {feeStructure.map((fee, index) => (
                  <motion.div
                    key={fee.type}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-semibold">{fee.type}</h4>
                      <span className="text-lg font-bold gradient-text">{fee.rate}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{fee.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Card className="glass max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center flex items-center justify-center">
                <Target size={32} className="mr-3" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold gradient-text">94.7%</div>
                  <div className="text-white font-semibold">Success Rate</div>
                  <div className="text-gray-400 text-sm">Profitable strategies</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold gradient-text">2.3%</div>
                  <div className="text-white font-semibold">Max Drawdown</div>
                  <div className="text-gray-400 text-sm">Risk management</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold gradient-text">1.8</div>
                  <div className="text-white font-semibold">Sharpe Ratio</div>
                  <div className="text-gray-400 text-sm">Risk-adjusted returns</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold gradient-text">365</div>
                  <div className="text-white font-semibold">Days Active</div>
                  <div className="text-gray-400 text-sm">Continuous operation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
