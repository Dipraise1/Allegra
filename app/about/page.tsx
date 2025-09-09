"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Globe, 
  BarChart3, 
  Zap,
  CheckCircle,
  ArrowRight,
  Download
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
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
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              About ALLEGRA Protocol
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Professional DeFi Solutions
            </h1>
            <p className="text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
              ALLEGRA Protocol is a professional DeFi platform that combines advanced technology 
              with institutional-grade risk management to deliver sustainable yields for USDT holders.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">0.1% - 5%</h3>
                <p className="text-white/80">Daily Returns</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">100%</h3>
                <p className="text-white/80">On-Chain Transparency</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">$0</h3>
                <p className="text-white/80">Minimum Deposit</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-4 bg-white/50 dark:bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Executive Summary
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  ALLEGRA Protocol addresses the fundamental challenges in cryptocurrency investing by 
                  providing professional-grade, risk-adjusted returns through transparent, verifiable trading strategies. 
                  Our platform democratizes access to institutional-grade investment strategies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Daily USDT rewards based on actual trading results</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Complete transparency with on-chain verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Flexible reward management and withdrawal options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>No minimum deposit requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Institutional-grade security and governance</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">System Architecture</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <span>Market analysis systems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <span>Opportunity evaluation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <span>Strategy implementation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Context */}
      <section className="relative py-16 px-4 overflow-hidden">
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
              Navigating Crypto Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <BarChart3 className="w-5 h-5 text-white" />
                    <span>Challenges in TradFi</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white/80">
                    <li>• High minimum investment requirements</li>
                    <li>• Limited access to sophisticated strategies</li>
                    <li>• Opaque fee structures</li>
                    <li>• Geographic restrictions</li>
                    <li>• Slow settlement times</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Zap className="w-5 h-5 text-white" />
                    <span>Challenges in DeFi</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white/80">
                    <li>• High volatility and impermanent loss</li>
                    <li>• Complex yield farming mechanics</li>
                    <li>• Smart contract risks</li>
                    <li>• Limited risk management tools</li>
                    <li>• Technical barriers for users</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Globe className="w-5 h-5 text-white" />
                    <span>Opportunities in Crypto</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white/80">
                    <li>• 24/7 global market access</li>
                    <li>• Transparent on-chain operations</li>
                    <li>• Programmable money and smart contracts</li>
                    <li>• Decentralized governance models</li>
                    <li>• Innovation in financial products</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governance & Legal */}
      <section className="py-16 px-4 bg-white/50 dark:bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Built on Trust and Decentralization
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Governance Structure</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">ALLEGRA DAO</h4>
                      <p className="text-muted-foreground text-sm">
                        Community-driven governance through ALGT token holders. 
                        Progressive decentralization with key decisions made by token holders.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Smart Contract Security</h4>
                      <p className="text-muted-foreground text-sm">
                        Multi-signature wallets, automated auditing, and continuous 
                        monitoring ensure the security of user funds.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Fee Structure</h4>
                      <p className="text-muted-foreground text-sm">
                        15% performance fee on earnings, transparently distributed 
                        between AI operations, development, and governance.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Legal Framework</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Registered Entity</h4>
                      <p className="text-muted-foreground text-sm">
                        Allegra Technologies Ltd. operates as a registered entity 
                        with proper legal structure and compliance frameworks.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
                      <p className="text-muted-foreground text-sm">
                        Proactive engagement with regulatory frameworks and 
                        compliance with applicable financial regulations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Transparency Commitment</h4>
                      <p className="text-muted-foreground text-sm">
                        All operations are transparent and verifiable on-chain, 
                        with regular reporting and audit trails.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              Join the future of professional DeFi and start earning sustainable yields today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <a href="/auth">
                  Sign Up Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/whitepaper">
                  <Download className="w-4 h-4 mr-2" />
                  Read White Paper
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
