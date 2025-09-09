"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  AlertTriangle, 
  TrendingDown, 
  Lock, 
  Eye,
  CheckCircle,
  ArrowRight,
  Download,
  BarChart3,
  Zap,
  Users
} from "lucide-react"

export default function RiskManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-black dark:to-blue-900/20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden md:pt-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/abstract-techno-background-with-connecting-lines.jpg')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Risk Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Capital Preservation First
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              ALLEGRA Protocol implements multiple layers of risk management to protect your capital 
              while maximizing returns through intelligent diversification and real-time monitoring.
            </p>
          </motion.div>

          {/* Risk Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-16"
          >
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-white mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Important Risk Disclaimer
                </h3>
                <p className="text-white/80 text-sm">
                  Investing in cryptocurrency involves substantial risk of loss and is not suitable for all investors. 
                  Past performance is not indicative of future results. Please carefully consider your investment 
                  objectives, level of experience, and risk appetite before investing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risk Management Principles */}
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
              Risk Management Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Diversification</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Transparency</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risk Mechanisms */}
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
              Risk Management Mechanisms
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Automated Safeguards</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                          <TrendingDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Circuit Breakers</h4>
                          <p className="text-muted-foreground text-sm">
                            Automatic trading halt when losses exceed predefined thresholds 
                            to prevent catastrophic losses.
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
                          <h4 className="font-semibold mb-1">Dynamic Hedging</h4>
                          <p className="text-muted-foreground text-sm">
                            Real-time hedging strategies to offset market volatility 
                            and protect against adverse price movements.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                          <Zap className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Reserve Fund</h4>
                          <p className="text-muted-foreground text-sm">
                            10% of total assets maintained in reserve to absorb 
                            market volatility and ensure stability.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Monitoring & Response</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                          <Eye className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">24/7 Monitoring</h4>
                          <p className="text-muted-foreground text-sm">
                            Continuous automated surveillance of all positions, 
                            strategies, and market conditions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Risk Alerts</h4>
                          <p className="text-muted-foreground text-sm">
                            Immediate notifications when risk parameters are breached, 
                            enabling rapid response and mitigation.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Governance Oversight</h4>
                          <p className="text-muted-foreground text-sm">
                            Community-driven governance through ALGT token holders 
                            for key risk management decisions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Historical Event Preparation */}
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
              Preparation for Market Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Market Crashes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Automatic position reduction</li>
                    <li>• Increased hedging ratios</li>
                    <li>• Liquidity preservation</li>
                    <li>• Circuit breaker activation</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">High Volatility</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dynamic position sizing</li>
                    <li>• Enhanced hedging strategies</li>
                    <li>• Reduced leverage exposure</li>
                    <li>• Increased monitoring frequency</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Liquidity Crises</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Reserve fund activation</li>
                    <li>• Alternative liquidity sources</li>
                    <li>• Position unwinding protocols</li>
                    <li>• Emergency withdrawal procedures</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Regulatory Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Compliance monitoring</li>
                    <li>• Strategy adjustments</li>
                    <li>• Jurisdiction diversification</li>
                    <li>• Legal framework updates</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Smart Contract Risks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Continuous code auditing</li>
                    <li>• Multi-signature protection</li>
                    <li>• Bug bounty programs</li>
                    <li>• Emergency pause mechanisms</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Operational Risks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Redundant systems</li>
                    <li>• Backup procedures</li>
                    <li>• Team continuity plans</li>
                    <li>• Disaster recovery protocols</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risk Metrics */}
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
              Key Risk Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">20%</h3>
                  <p className="text-muted-foreground text-sm">Max Strategy Allocation</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">10%</h3>
                  <p className="text-muted-foreground text-sm">Reserve Fund</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">24/7</h3>
                  <p className="text-muted-foreground text-sm">Monitoring</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Multi-Sig</h3>
                  <p className="text-muted-foreground text-sm">Wallet Security</p>
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
              Ready to Invest with Confidence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience institutional-grade risk management with transparent, 
              AI-powered investment strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <a href="/auth">
                  Start Investing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/performance">
                  View Performance
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

