"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Network, 
  Shield, 
  Zap, 
  ArrowRight,
  Download,
  Code,
  Database,
  Cpu,
  GitBranch,
  Lock,
  Eye,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Layers,
  Settings
} from "lucide-react"

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/abstract-red-particles-digital-technology-background/23148.jpg')"
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
              Technology & Architecture
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Allegra Core
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered architecture combining machine learning, blockchain technology, 
              and institutional-grade risk management to deliver sustainable yields.
            </p>
          </motion.div>

          {/* Key Technology Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16"
          >
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-3 md:pt-6">
                <Brain className="w-8 h-8 md:w-12 md:h-12 text-white mx-auto mb-2 md:mb-4" />
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">Multi-Model</h3>
                <p className="text-white/80 text-sm md:text-base">AI Ensemble</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-3 md:pt-6">
                <Network className="w-8 h-8 md:w-12 md:h-12 text-white mx-auto mb-2 md:mb-4" />
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">Multi-Chain</h3>
                <p className="text-white/80 text-sm md:text-base">Compatibility</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-3 md:pt-6">
                <Shield className="w-8 h-8 md:w-12 md:h-12 text-white mx-auto mb-2 md:mb-4" />
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">100%</h3>
                <p className="text-white/80 text-sm md:text-base">On-Chain</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-3 md:pt-6">
                <Zap className="w-8 h-8 md:w-12 md:h-12 text-white mx-auto mb-2 md:mb-4" />
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">Real-Time</h3>
                <p className="text-white/80 text-sm md:text-base">Processing</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* AI Framework */}
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
              AI Framework Architecture
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Searchers</span>
                  </CardTitle>
                  <CardDescription>
                    Advanced AI models that analyze market data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Graph Neural Networks (GNN)</h4>
                      <p className="text-sm text-muted-foreground">
                        Analyze complex relationships between assets, markets, and economic indicators 
                        to identify arbitrage opportunities and market inefficiencies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">LSTM Networks</h4>
                      <p className="text-sm text-muted-foreground">
                        Process sequential market data to predict price movements and identify 
                        optimal entry and exit points for trading strategies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Transformer Models</h4>
                      <p className="text-sm text-muted-foreground">
                        Analyze large-scale market data and news sentiment to understand 
                        market dynamics and emerging trends.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Judge</span>
                  </CardTitle>
                  <CardDescription>
                    Decision-making engine that evaluates opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Random Forest Classifier</h4>
                      <p className="text-sm text-muted-foreground">
                        Combines multiple decision trees to evaluate the probability of success 
                        for each identified trading opportunity.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Natural Language Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        Analyzes news, social media sentiment, and market reports to assess 
                        the impact of external factors on trading decisions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Risk Assessment Engine</h4>
                      <p className="text-sm text-muted-foreground">
                        Evaluates potential risks and returns for each strategy, ensuring 
                        optimal risk-adjusted decision making.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Executor</span>
                  </CardTitle>
                  <CardDescription>
                    Automated execution system for trading strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Smart Contract Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        Seamlessly executes trades through smart contracts on multiple 
                        blockchain networks with automated settlement.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Multi-Exchange Connectivity</h4>
                      <p className="text-sm text-muted-foreground">
                        Connects to major cryptocurrency exchanges to execute arbitrage 
                        strategies and liquidity provision across platforms.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Real-Time Monitoring</h4>
                      <p className="text-sm text-muted-foreground">
                        Continuously monitors executed trades and automatically adjusts 
                        strategies based on real-time performance data.
                      </p>
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
              Experience the Future of DeFi
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the next generation of AI-powered investment strategies 
              built on cutting-edge technology and proven security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <a href="/auth">
                  Start Investing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/whitepaper">
                  <Download className="w-4 h-4 mr-2" />
                  Technical Documentation
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}