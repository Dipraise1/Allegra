"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HiShieldCheck, HiTrendingUp, HiGlobe, HiLightningBolt, HiChartBar, HiUsers, HiCog, HiDocumentText, HiDownload } from "react-icons/hi"
import { FaEthereum, FaRobot, FaEye, FaWallet } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import HowAllegraWorks from '@/components/landing/HowAllegraWorks'

export default function MobilePage() {
  const features = [
    {
      icon: FaRobot,
      title: "Multi-model AI Ensemble",
      description: "Advanced AI models working together for optimal trading decisions"
    },
    {
      icon: HiShieldCheck,
      title: "Risk Prioritization",
      description: "Capital preservation first with comprehensive risk management"
    },
    {
      icon: FaEthereum,
      title: "Blockchain Integration",
      description: "Transparent, verifiable trades on multiple blockchains"
    },
    {
      icon: FaEye,
      title: "Enhanced Transparency",
      description: "All trades and strategies are publicly verifiable on-chain"
    },
    {
      icon: HiGlobe,
      title: "Accessibility",
      description: "No minimum deposit, multi-chain support for global access"
    },
    {
      icon: HiLightningBolt,
      title: "Liquidity Terms",
      description: "30-day lock period with daily rewards and flexible options"
    }
  ]

  const stats = [
    { label: "Daily Returns", value: "0.1% to 4%", icon: HiTrendingUp },
    { label: "Transparency", value: "On-chain", icon: FaEye },
    { label: "Security", value: "Audited contracts", icon: HiShieldCheck }
  ]

  const useCases = [
    {
      title: "Individual Investors",
      description: "Access professional-grade AI trading strategies with no minimum investment",
      icon: HiUsers
    },
    {
      title: "Institutions",
      description: "Enterprise-grade solutions with advanced reporting and compliance features",
      icon: HiChartBar
    },
    {
      title: "Corporate Treasury",
      description: "Diversify treasury holdings with transparent, yield-generating strategies",
      icon: HiCog
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="mobile-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mobile-grid)" className="text-foreground"/>
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-transparent to-blue-50/20 dark:from-slate-900/30 dark:via-transparent dark:to-blue-900/20"></div>
        </div>

        <div className="relative z-10 text-center max-w-md mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src="/images/logo-transparent.png"
                alt="ALLEGRA Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain logo-white"
              />
            </div>
            <h1 className="text-2xl font-bold gradient-text mb-2">ALLEGRA</h1>
            <p className="text-xs text-muted-foreground">AI-Driven Trading Protocol: Integrating AI with blockchain for transparent, verifiable trading strategies.</p> 
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-foreground mb-3">
              Unlock AI-Powered Yields in Crypto Markets
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sustainable, risk-adjusted returns through transparent, verifiable trading strategies. 
              Operated by Allegra Technologies Ltd.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 gap-3 mb-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-medium text-foreground">{stat.label}</p>
                      <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <Button size="lg" className="w-full h-10 text-sm" asChild>
              <Link href="/auth">
                <FaWallet className="w-4 h-4 mr-2" />
                Sign Up & Connect Wallet
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full h-10 text-sm" asChild>
              <Link href="/whitepaper">
                <HiDocumentText className="w-4 h-4 mr-2" />
                Read White Paper
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How ALLEGRA Works */}
      <HowAllegraWorks />

      {/* Executive Summary */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">Revolutionizing DeFi with AI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ALLEGRA addresses the core challenges in crypto markets through advanced AI ensemble models 
              that provide sustainable, transparent, and verifiable trading strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {[
              "Daily Returns: 0.1% to 4%",
              "Transparency: On-chain verifiable",
              "Rewards: Daily distribution",
              "Deposits: No minimum required",
              "Security: Audited smart contracts",
              "Governance: Community-driven DAO"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">Protocol Highlights</h3>
            <p className="text-sm text-muted-foreground">
              Advanced features that set ALLEGRA apart in the DeFi landscape
            </p>
          </motion.div>

          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">The Allegra Core</h3>
            <p className="text-sm text-muted-foreground">
              Advanced AI framework with multiple specialized models
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center space-x-2">
                  <FaRobot className="w-4 h-4 text-blue-600" />
                  <span>AI Framework</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div>
                    <h5 className="text-sm font-medium text-foreground">Searchers</h5>
                    <p className="text-xs text-muted-foreground">GNN, LSTM, Transformer models for market analysis</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-foreground">Judge</h5>
                    <p className="text-xs text-muted-foreground">Random Forest and NLP for decision validation</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-foreground">Executor</h5>
                    <p className="text-xs text-muted-foreground">Automated trade execution with risk controls</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center space-x-2">
                  <HiShieldCheck className="w-4 h-4 text-green-600" />
                  <span>Safeguards</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Hedging strategies</p>
                  <p className="text-xs text-muted-foreground">• Circuit breakers</p>
                  <p className="text-xs text-muted-foreground">• Risk monitoring</p>
                  <p className="text-xs text-muted-foreground">• Emergency protocols</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">Capital Preservation First</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive risk management framework
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-3">
                <h4 className="text-sm font-semibold text-foreground mb-2">Risk Principles</h4>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Capital preservation over profit maximization</p>
                  <p className="text-xs text-muted-foreground">• Diversified strategies across multiple markets</p>
                  <p className="text-xs text-muted-foreground">• Real-time monitoring and adjustment</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-3">
              <div className="flex items-start space-x-3">
                <HiShieldCheck className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">Risk Disclaimer</h5>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">
                    Investing involves risks; past performance is not indicative of future results. 
                    Please read our risk disclosure before investing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Model */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">Verifiable Yields from Real Trades</h3>
            <p className="text-sm text-muted-foreground">
              Transparent performance with on-chain verification
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-3">
                <h4 className="text-sm font-semibold text-foreground mb-2">Performance Metrics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Yield Range</span>
                    <span className="text-xs font-medium text-foreground">0.1% - 4% daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Distribution</span>
                    <span className="text-xs font-medium text-foreground">Non-compounding</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Verification</span>
                    <span className="text-xs font-medium text-foreground">On-chain</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border border-blue-200 dark:border-blue-800">
              <CardContent className="p-3">
                <h4 className="text-sm font-semibold text-foreground mb-2">Example: $10,000 Deposit</h4>
                <p className="text-xs text-muted-foreground">
                  With average 2% daily returns, you could earn approximately $200 per day, 
                  with all trades verifiable on-chain.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">Who Benefits from ALLEGRA?</h3>
            <p className="text-sm text-muted-foreground">
              Designed for users across the spectrum
            </p>
          </motion.div>

          <div className="space-y-4">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">{useCase.title}</h4>
                          <p className="text-xs text-muted-foreground">{useCase.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources & CTA */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">Get Started Today</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Join the future of AI-driven DeFi trading
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <Button size="lg" className="w-full h-10 text-sm" asChild>
              <Link href="/auth">
                <FaWallet className="w-4 h-4 mr-2" />
                Sign Up & Connect Wallet
              </Link>
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="lg" className="h-10 text-sm" asChild>
                <Link href="/whitepaper">
                  <HiDocumentText className="w-4 h-4 mr-2" />
                  White Paper
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-10 text-sm" asChild>
                <Link href="/resources">
                  <HiDownload className="w-4 h-4 mr-2" />
                  Backtests
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
