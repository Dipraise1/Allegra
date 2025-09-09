"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiDocumentText, HiShieldCheck, HiLightningBolt, HiTrendingUp, HiInformationCircle, HiUsers, HiCog, HiCheckCircle, HiClock, HiCurrencyDollar } from "react-icons/hi"
import { motion } from "framer-motion"
import Link from "next/link"

export default function WhitepaperPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            ALLEGRA Protocol Whitepaper
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive documentation covering ALLEGRA Protocol's AI-powered DeFi platform with daily 0.1%-4% yields, 
            flexible reward management, and institutional-grade security measures.
          </p>
          
          {/* Interactive Stats Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            <Card className="glass hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="w-12 h-12 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center"
                >
                  <HiTrendingUp className="w-6 h-6 text-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-1">0.1% - 4%</h3>
                <p className="text-sm text-muted-foreground">Daily Returns</p>
              </CardContent>
            </Card>
            
            <Card className="glass hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                  className="w-12 h-12 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center"
                >
                  <HiShieldCheck className="w-6 h-6 text-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-1">30 Days</h3>
                <p className="text-sm text-muted-foreground">Principal Lock</p>
              </CardContent>
            </Card>
            
            <Card className="glass hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center"
                >
                  <HiCog className="w-6 h-6 text-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-1">24/7</h3>
                <p className="text-sm text-muted-foreground">AI Monitoring</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass mb-8 hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center"
                >
                  <HiDocumentText className="w-6 h-6 text-foreground" />
                </motion.div>
                <span>1. Executive Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                ALLEGRA Protocol is a next-generation DeFi platform powered by advanced artificial intelligence. It generates sustainable yields for USDT holders by combining AI-driven trading strategies with institutional-grade risk management.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ALLEGRA delivers variable daily returns between 0.1% and 4%, based on actual market performance, with no minimum deposit requirements. Our system prioritizes transparency, security, and accessibility, bringing institutional-grade trading strategies to everyday investors.
              </p>
              
              {/* Interactive Progress Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 p-4 bg-muted/20 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Platform Readiness</span>
                  <span className="text-sm text-muted-foreground">100%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="bg-foreground h-2 rounded-full"
                  />
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* How It Works & Key Features - Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          {/* How It Works */}
          <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
                >
                  <HiLightningBolt className="w-5 h-5 text-foreground" />
                </motion.div>
                <span>2. How ALLEGRA Works</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                Think of ALLEGRA as an AI-powered wealth manager for your USDT. Here's how it works:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "You Deposit USDT",
                    description: "Transfer any amount of USDT into ALLEGRA's secure smart contract vault.",
                    icon: HiCurrencyDollar
                  },
                  {
                    step: 2,
                    title: "AI Allocates Capital",
                    description: "Proprietary algorithms diversify funds across multiple strategies:",
                    details: [
                      "Arbitrage: Capturing price gaps between exchanges.",
                      "Liquidity Providing: Supplying liquidity to earn trading fees.",
                      "Lending: Generating interest on lending protocols."
                    ],
                    icon: HiCog
                  },
                  {
                    step: 3,
                    title: "Daily Rewards",
                    description: "Profits are distributed daily in USDT, ranging from 0.1% to 4%, based on actual trading results.",
                    icon: HiTrendingUp
                  },
                  {
                    step: 4,
                    title: "Flexible Rewards Management",
                    description: "You can choose to withdraw your daily rewards or compound them back into your investment for accelerated growth.",
                    icon: HiCheckCircle
                  },
                  {
                    step: 5,
                    title: "Withdraw Anytime",
                    description: "Rewards are withdrawable instantly; principal unlocks after 30 days.",
                    icon: HiClock
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 group/step"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground font-bold text-xs flex-shrink-0 group-hover/step:bg-foreground group-hover/step:text-background transition-all duration-300"
                    >
                      <item.icon className="w-4 h-4" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 text-foreground text-sm">{item.title}</h4>
                      <p className="text-muted-foreground mb-2 text-xs">{item.description}</p>
                      {item.details && (
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
                          {item.details.map((detail, idx) => (
                            <li key={idx}><strong>{detail.split(':')[0]}:</strong> {detail.split(':')[1]}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
                >
                  <HiTrendingUp className="w-5 h-5 text-foreground" />
                </motion.div>
                <span>3. Key Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "AI-Powered Trading",
                    description: "Proprietary algorithms adapt in real-time.",
                    icon: HiCog
                  },
                  {
                    title: "Daily USDT Rewards",
                    description: "Earn 0.1%–4% daily based on real trading results.",
                    icon: HiTrendingUp
                  },
                  {
                    title: "Flexible Deposits",
                    description: "No minimum deposit required.",
                    icon: HiCurrencyDollar
                  },
                  {
                    title: "30-Day Lock",
                    description: "Principal is locked for 30 days; rewards withdrawable anytime.",
                    icon: HiClock
                  },
                  {
                    title: "Reward Flexibility",
                    description: "Choose to withdraw daily rewards or compound them for growth.",
                    icon: HiCheckCircle
                  },
                  {
                    title: "On-Chain Transparency",
                    description: "All transactions are verifiable on-chain.",
                    icon: HiShieldCheck
                  },
                  {
                    title: "Institutional Security",
                    description: "Multi-signature wallets, audits, and 24/7 monitoring.",
                    icon: HiShieldCheck
                  },
                  {
                    title: "Reserve Fund",
                    description: "10% of assets kept in reserve for stability.",
                    icon: HiShieldCheck
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-3 bg-muted/10 rounded-lg hover:bg-muted/20 transition-all duration-300 group/feature"
                  >
                    <div className="flex items-start space-x-3">
                      <motion.div 
                        whileHover={{ rotate: 10 }}
                        className="w-6 h-6 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover/feature:bg-foreground group-hover/feature:text-background transition-all duration-300"
                      >
                        <feature.icon className="w-3 h-3" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass mb-8 hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center"
                >
                  <HiCog className="w-6 h-6 text-foreground" />
                </motion.div>
                <span>4. Technology Explained</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* AI Trading Engine - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">AI Trading Engine</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    ALLEGRA's core engine uses advanced machine learning models to analyze live market data, detect patterns, and execute optimized trades within milliseconds.
                  </p>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-4 bg-muted/10 rounded-lg"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <HiTrendingUp className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Real-time Analysis</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Dynamically shifts strategies between arbitrage, liquidity provision, and lending based on real-time conditions.</p>
                </motion.div>
              </div>

              {/* Smart Contract Architecture - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-4 bg-muted/10 rounded-lg"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <HiShieldCheck className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Blockchain Security</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Built on Ethereum and Layer 2 solutions with transparent, verifiable transactions.</p>
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Smart Contract Architecture</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    ALLEGRA's smart contracts handle automated yield distribution and enforce investment rules transparently. All deposits, earnings, and withdrawals are fully verifiable on-chain.
                  </p>
                </div>
              </div>

              {/* Risk Management - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Risk Management</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Comprehensive risk management strategies ensure platform stability and investor protection.
                  </p>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Diversified allocation across multiple strategies</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">No single strategy exceeds 20% of total capital</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">10% reserve fund for market volatility</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">AI-driven continuous rebalancing</span>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Returns Structure & Security Measures - Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          {/* Returns Structure */}
          <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
                >
                  <HiTrendingUp className="w-5 h-5 text-foreground" />
                </motion.div>
                <span>5. Returns Structure</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground mb-4">Key Metrics</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="p-4 bg-muted/10 rounded-lg"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <HiTrendingUp className="w-4 h-4 text-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">Daily Returns</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">0.1% - 4%</p>
                    <p className="text-xs text-muted-foreground">Based on actual trading results</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="p-4 bg-muted/10 rounded-lg"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <HiCurrencyDollar className="w-4 h-4 text-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">Performance Fee</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">15%</p>
                    <p className="text-xs text-muted-foreground">Of earnings (AI + development)</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="p-4 bg-muted/10 rounded-lg"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <HiCheckCircle className="w-4 h-4 text-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">Reward Management</span>
                    </div>
                    <p className="text-sm text-foreground">Withdraw or Compound</p>
                    <p className="text-xs text-muted-foreground">Daily rewards flexibility</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="p-4 bg-muted/10 rounded-lg"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <HiClock className="w-4 h-4 text-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">Principal Unlock</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">30 Days</p>
                    <p className="text-xs text-muted-foreground">After deposit</p>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Measures */}
          <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
                >
                  <HiShieldCheck className="w-5 h-5 text-foreground" />
                </motion.div>
                <span>6. Security Measures</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">AI-Powered Auditing: Continuous automated code and system checks.</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Multi-Signature Wallets: Multiple approvals required for fund movements.</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Strategy Limits: No single strategy exceeds 20% of total capital.</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">24/7 Monitoring: Real-time automated system surveillance.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Overview & Important Notes - Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          {/* Team Overview */}
          <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
                >
                  <HiUsers className="w-5 h-5 text-foreground" />
                </motion.div>
                <span>7. Team Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Our team combines expertise across AI, blockchain, finance, and cybersecurity:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground"><strong>Dr. Elena Rodriguez</strong> – AI Research (PhD, Machine Learning)</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground"><strong>Michael Chen</strong> – Blockchain Architecture (MSc, Computer Science)</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground"><strong>Sarah Johnson</strong> – Quantitative Finance (MSc, Financial Engineering)</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground"><strong>David Kim</strong> – Security Engineering (Cybersecurity Specialist)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
                >
                  <HiInformationCircle className="w-5 h-5 text-foreground" />
                </motion.div>
                <span>8. Important Notes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Returns are variable and based on market performance</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Daily rewards can be withdrawn immediately or compounded for accelerated growth</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Principal funds are locked for 30 days to ensure strategy stability</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">All transactions are transparent and verifiable on-chain</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">The platform maintains a 10% reserve fund for market volatility protection</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted/20 rounded-lg">
                <p className="text-xs text-muted-foreground italic">
                  This whitepaper represents the current state of ALLEGRA Protocol as of 2024. For the most up-to-date information, please visit our official channels.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center"
            >
              <HiTrendingUp className="w-8 h-8 text-foreground" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Explore the DApp and start earning with ALLEGRA Protocol's AI-powered yield generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="gradient" size="lg">
                  <Link href="/dapp">Launch DApp</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="glass" size="lg">
                  <Link href="/">Back to Home</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
