"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Download,
  Calculator,
  Eye,
  Shield,
  Zap,
  Target,
  DollarSign,
  Clock
} from "lucide-react"

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-black dark:to-blue-900/20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-6 px-4 overflow-hidden md:pt-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/background-realistic-abstract-technology-particle/3409297.jpg')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <Badge variant="outline" className="mb-3 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Performance & Yields
            </Badge>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Verifiable Yields from Real Trades
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
              ALLEGRA Protocol delivers sustainable returns through transparent, AI-powered trading strategies. 
              All performance is verifiable on-chain and based on actual market results.
            </p>
          </motion.div>

          {/* Key Performance Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
          >
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-3">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white mx-auto mb-1" />
                <h3 className="text-sm md:text-lg font-bold mb-1 text-white">0.1% - 5%</h3>
                <p className="text-white/80 text-xs md:text-sm">Daily Returns</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-3">
                <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-white mx-auto mb-1" />
                <h3 className="text-sm md:text-lg font-bold mb-1 text-white">Variable</h3>
                <p className="text-white/80 text-xs md:text-sm">Based on Market</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-3">
                <Eye className="w-6 h-6 md:w-8 md:h-8 text-white mx-auto mb-1" />
                <h3 className="text-sm md:text-lg font-bold mb-1 text-white">100%</h3>
                <p className="text-white/80 text-xs md:text-sm">Transparent</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-3">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-white mx-auto mb-1" />
                <h3 className="text-sm md:text-lg font-bold mb-1 text-white">Daily</h3>
                <p className="text-white/80 text-xs md:text-sm">Distribution</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Yield Model */}
      <section className="py-6 px-4 bg-white/50 dark:bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
              Yield Model & Distribution
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3">How Returns Are Generated</h3>
                <div className="space-y-2">
                  <Card>
                    <CardContent className="pt-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                          <Target className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">AI Strategy Execution</h4>
                          <p className="text-muted-foreground text-sm">
                            Advanced algorithms identify and execute profitable trading opportunities 
                            across arbitrage, liquidity provision, and lending strategies.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Real Market Performance</h4>
                          <p className="text-muted-foreground text-sm">
                            Returns are based on actual trading results, not theoretical models. 
                            Performance varies with market conditions and opportunities.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Daily Distribution</h4>
                          <p className="text-muted-foreground text-sm">
                            Profits are calculated and distributed daily in USDT, 
                            with flexible withdrawal or compounding options.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-3">Performance Range</h3>
                  <div className="space-y-3">
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
          </motion.div>
        </div>
      </section>

      {/* Verification & Transparency */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Verification & Transparency
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>On-Chain Verification</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    All transactions, trades, and distributions are recorded on-chain 
                    and can be independently verified by anyone.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Public transaction records</li>
                    <li>• Smart contract transparency</li>
                    <li>• Real-time performance tracking</li>
                    <li>• Independent audit trails</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Performance Auditing</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Regular third-party audits ensure accuracy of reported performance 
                    and compliance with stated strategies.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Quarterly performance audits</li>
                    <li>• Strategy compliance checks</li>
                    <li>• Risk assessment reviews</li>
                    <li>• Regulatory compliance</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Real-Time Monitoring</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Live dashboard provides real-time insights into strategy performance, 
                    allocations, and current positions.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Live performance metrics</li>
                    <li>• Strategy allocation tracking</li>
                    <li>• Risk monitoring alerts</li>
                    <li>• Historical performance data</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Examples */}
      <section className="py-16 px-4 bg-white/50 dark:bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Investment Examples
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">$10,000 Investment Scenario</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Initial Investment</span>
                        <span className="text-lg font-bold">$10,000</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Daily Returns (avg 2%)</span>
                        <span className="text-green-600">$200/day</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Monthly Returns</span>
                        <span className="text-green-600">~$6,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Annual Projection*</span>
                        <span className="text-green-600">~$73,000</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        * Based on average 2% daily returns. Actual results may vary significantly.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-3">
                      <h4 className="font-semibold mb-3">Reward Management Options</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          <span>Withdraw daily rewards immediately</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          <span>Compound rewards for accelerated growth</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          <span>Mix of withdrawal and compounding</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Performance Calculator</h3>
                <Card>
                  <CardContent className="pt-3">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Investment Amount (USDT)</label>
                        <input 
                          type="number" 
                          placeholder="10000" 
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Expected Daily Return (%)</label>
                        <input 
                          type="number" 
                          placeholder="2" 
                          step="0.1"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Time Period (days)</label>
                        <input 
                          type="number" 
                          placeholder="30" 
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <Button className="w-full" variant="gradient">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Returns
                      </Button>
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Projected Returns</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Daily Return:</span>
                            <span className="font-semibold">$200</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Return:</span>
                            <span className="font-semibold">$6,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>ROI:</span>
                            <span className="font-semibold text-green-600">60%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Transparent Fee Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Fee</CardTitle>
                  <CardDescription>15% of earnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>AI Operations</span>
                      <span>8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Development & Maintenance</span>
                      <span>4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Governance & Community</span>
                      <span>3%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>No Hidden Fees</CardTitle>
                  <CardDescription>Complete transparency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No deposit fees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No withdrawal fees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No management fees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No minimum balance fees</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-black/50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Earning Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of investors earning sustainable yields through 
              AI-powered trading strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <a href="/auth">
                  Start Investing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/dapp">
                  View Live Dashboard
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

