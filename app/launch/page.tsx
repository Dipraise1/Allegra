"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { cn } from "@/lib/utils"
import { 
  Wallet, 
  TrendingUp, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  ExternalLink,
  Lock,
  BarChart3
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Securely connect your wallet to get started",
    status: "ready"
  },
  {
    icon: TrendingUp,
    title: "Choose Strategy",
    description: "Select from Conservative, Balanced, or Aggressive yield strategies",
    status: "ready"
  },
  {
    icon: Shield,
    title: "Deposit Funds",
    description: "Deposit supported tokens with enterprise-grade security",
    status: "ready"
  },
  {
    icon: Zap,
    title: "Start Earning",
    description: "Watch your funds grow with AI-optimized returns",
    status: "coming-soon"
  }
]

const supportedNetworks = [
  { name: "Ethereum", status: "live" },
  { name: "Polygon", status: "live" },
  { name: "BSC", status: "live" },
  { name: "Arbitrum", status: "coming-soon" },
  { name: "Optimism", status: "coming-soon" }
]

const supportedTokens = [
  { symbol: "USDC", name: "USD Coin", apy: "8-12%" },
  { symbol: "USDT", name: "Tether", apy: "8-12%" },
  { symbol: "ETH", name: "Ethereum", apy: "10-15%" },
  { symbol: "BTC", name: "Bitcoin", apy: "9-14%" },
  { symbol: "DAI", name: "Dai Stablecoin", apy: "8-12%" }
]

export default function LaunchApp() {
  const { theme } = useTheme()
  
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 relative">
              <Image
                src="/images/logo-transparent.png"
                alt="ALLEGRA Protocol Logo"
                width={128}
                height={128}
                className="object-contain logo-white"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Launch ALLEGRA
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start earning sustainable yields with AI-powered DeFi strategies
          </p>
        </motion.div>

        {/* Main Launch Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="glass dark:glass light:glass-light">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-foreground mb-4">
                Ready to Launch
              </CardTitle>
              <p className="text-muted-foreground">
                Connect your wallet and start earning with ALLEGRA Protocol
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Connect Wallet Button */}
              <div className="text-center">
                <Button
                  size="lg"
                  variant="gradient"
                  className="group px-12 py-6 text-xl font-semibold"
                  asChild
                >
                  <a href="/dashboard">
                    <Wallet className="mr-3 h-6 w-6" />
                    Connect Wallet
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Supported: MetaMask, WalletConnect, Coinbase Wallet
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                    className="flex items-center space-x-4 p-4 glass dark:glass light:glass-light rounded-lg"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      feature.status === "ready" 
                        ? "bg-gradient-to-r from-white to-gray-300" 
                        : "bg-gradient-to-r from-gray-400 to-gray-600"
                    }`}>
                      <feature.icon size={24} className={feature.status === "ready" ? "text-black" : "text-white"} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        {feature.status === "ready" ? (
                          <>
                            <CheckCircle size={16} className="text-green-400" />
                            <span className="text-green-400 text-sm font-medium">Ready</span>
                          </>
                        ) : (
                          <>
                            <Lock size={16} className="text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">Coming Soon</span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Network and Token Support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Supported Networks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card className="glass dark:glass light:glass-light h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <BarChart3 className="mr-3 h-6 w-6" />
                  Supported Networks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportedNetworks.map((network, index) => (
                    <div key={network.name} className="flex items-center justify-between p-3 glass dark:glass light:glass-light rounded-lg">
                      <span className="text-foreground font-medium">{network.name}</span>
                      <div className="flex items-center space-x-2">
                        {network.status === "live" ? (
                          <>
                            <CheckCircle size={16} className="text-green-400" />
                            <span className="text-green-400 text-sm font-medium">Live</span>
                          </>
                        ) : (
                          <>
                            <Lock size={16} className="text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">Coming Soon</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Supported Tokens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="glass dark:glass light:glass-light h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Supported Tokens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportedTokens.map((token, index) => (
                    <div key={token.symbol} className="flex items-center justify-between p-3 glass dark:glass light:glass-light rounded-lg">
                      <div>
                        <span className="text-foreground font-semibold">{token.symbol}</span>
                        <p className="text-muted-foreground text-sm">{token.name}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-foreground font-semibold">{token.apy}</span>
                        <p className="text-muted-foreground text-sm">APY</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="glass dark:glass light:glass-light max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of users already earning with ALLEGRA Protocol
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  variant="gradient"
                  className="group px-8 py-4"
                  asChild
                >
                  <a href="/dashboard">
                    <Wallet className="mr-2 h-5 w-5" />
                    Connect Wallet
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="glass"
                  className="px-8 py-4"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
