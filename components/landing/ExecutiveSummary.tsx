"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Shield, 
  Eye, 
  Users, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Download
} from "lucide-react"

export default function ExecutiveSummary() {
  return (
    <section className="py-16 px-4 bg-white/50 dark:bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Executive Summary
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
            Revolutionizing DeFi with AI
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ALLEGRA Protocol addresses the fundamental challenges in cryptocurrency investing by 
            providing professional-grade, risk-adjusted returns through transparent, verifiable trading strategies. 
            Our platform democratizes access to institutional-grade investment strategies powered by advanced AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Key Benefits</h3>
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

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">0.1% - 4%</h3>
              <p className="text-muted-foreground">Daily Returns</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Eye className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">100%</h3>
              <p className="text-muted-foreground">On-Chain Transparency</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">$0</h3>
              <p className="text-muted-foreground">Minimum Deposit</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Audited</h3>
              <p className="text-muted-foreground">Smart Contracts</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
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
  )
}
