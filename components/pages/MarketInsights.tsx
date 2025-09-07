"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiTrendingUp, HiTrendingDown, HiRefresh, HiArrowRight, HiCalendar, HiChartBar } from "react-icons/hi"
import { FaRobot, FaBitcoin, FaEthereum } from "react-icons/fa"

const marketData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$43,250.00",
    change: "+2.34%",
    changeType: "positive",
    icon: FaBitcoin,
    color: "from-orange-500 to-yellow-500"
  },
  {
    symbol: "ETH", 
    name: "Ethereum",
    price: "$2,650.00",
    change: "+1.87%",
    changeType: "positive",
    icon: FaEthereum,
    color: "from-blue-500 to-purple-500"
  },
  {
    symbol: "USDT",
    name: "Tether",
    price: "$1.00",
    change: "+0.01%",
    changeType: "positive",
    icon: HiTrendingUp,
    color: "from-green-500 to-emerald-500"
  }
]

const insights = [
  {
    title: "DeFi Yield Farming Opportunities",
    description: "Our AI has identified several high-yield farming opportunities in the current market conditions, with potential returns of 15-25% APY.",
    type: "opportunity",
    date: "2 hours ago",
    impact: "High"
  },
  {
    title: "Market Volatility Analysis",
    description: "Current market conditions show increased volatility in the DeFi sector, presenting both risks and opportunities for strategic investors.",
    type: "analysis",
    date: "4 hours ago", 
    impact: "Medium"
  },
  {
    title: "New Protocol Integration",
    description: "ALLEGRA Protocol has successfully integrated with three new DeFi protocols, expanding our investment options and potential returns.",
    type: "update",
    date: "6 hours ago",
    impact: "High"
  }
]

const strategies = [
  {
    name: "Conservative Strategy",
    currentROI: "0.3%",
    recommendation: "Maintain",
    reasoning: "Stable market conditions favor conservative approaches"
  },
  {
    name: "Balanced Strategy", 
    currentROI: "1.2%",
    recommendation: "Increase",
    reasoning: "Market opportunities support moderate risk-taking"
  },
  {
    name: "Aggressive Strategy",
    currentROI: "2.8%",
    recommendation: "Monitor",
    reasoning: "High volatility requires careful risk management"
  }
]

export function MarketInsights() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Market Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay ahead of the market with our AI-powered analysis, real-time data, and expert insights 
              to optimize your investment strategy.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <HiRefresh className="h-4 w-4" />
              <span>Last updated: 2 minutes ago</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold gradient-text text-center mb-8">Market Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketData.map((coin, index) => (
                <Card key={coin.symbol} className="glass hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <coin.icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{coin.symbol}</h3>
                          <p className="text-sm text-muted-foreground">{coin.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{coin.price}</p>
                        <p className={`text-sm ${coin.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                          {coin.change}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto px-4">
        {/* AI Insights */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FaRobot className="h-5 w-5" />
                  <span>AI-Powered Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="p-4 bg-background/50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">{insight.title}</h4>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            insight.impact === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                            insight.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          }`}>
                            {insight.impact} Impact
                          </span>
                          <span className="text-xs text-muted-foreground">{insight.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Strategy Recommendations */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HiChartBar className="h-5 w-5" />
                  <span>Strategy Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {strategies.map((strategy, index) => (
                    <div key={index} className="p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">{strategy.name}</h4>
                        <span className="text-sm font-bold text-green-500">{strategy.currentROI}</span>
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">Recommendation:</span>
                        <span className={`text-xs font-medium ${
                          strategy.recommendation === 'Increase' ? 'text-green-500' :
                          strategy.recommendation === 'Maintain' ? 'text-blue-500' :
                          'text-yellow-500'
                        }`}>
                          {strategy.recommendation}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{strategy.reasoning}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HiCalendar className="h-5 w-5" />
                  <span>Market Calendar</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Fed Meeting</p>
                      <p className="text-xs text-muted-foreground">Interest Rate Decision</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Tomorrow</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">CPI Data Release</p>
                      <p className="text-xs text-muted-foreground">Inflation Report</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Friday</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Ethereum Upgrade</p>
                      <p className="text-xs text-muted-foreground">Network Update</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Next Week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Ready to Act on These Insights?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Put our market analysis to work with our AI-powered investment strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" variant="gradient" asChild>
                <a href="/dapp">Launch DApp</a>
              </Button>
              <Button size="lg" variant="glass" asChild>
                <a href="/investment-solutions">View Strategies</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
