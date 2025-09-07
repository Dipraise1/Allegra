"use client"

import { motion } from "framer-motion"
import { HiTrendingUp, HiShieldCheck, HiCog, HiPlus, HiEye, HiEyeOff, HiRefresh } from "react-icons/hi"
import { FaWallet } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "@/components/ThemeProvider"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import { useTokenData } from "@/hooks/useTokenData"

export default function Dashboard() {
  const { theme } = useTheme()
  const [showBalances, setShowBalances] = useState(true)
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [selectedChain, setSelectedChain] = useState('ethereum')
  
  // Use real token data
  const { tokens, loading, error, totalValue, totalChange24h, refresh } = useTokenData(selectedChain)
  

  // Calculate portfolio metrics from real token data
  const portfolioData = {
    totalBalance: `$${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    availableBalance: `$${(totalValue * 0.3).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    stakedAmount: `$${(totalValue * 0.7).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    totalReturn: `${totalChange24h >= 0 ? '+' : ''}$${totalChange24h.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    totalReturnPercent: `${totalChange24h >= 0 ? '+' : ''}${((totalChange24h / totalValue) * 100).toFixed(2)}%`,
    assets: tokens.map(token => ({
      symbol: token.symbol,
      name: token.name,
      balance: token.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 }),
      value: `$${token.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      apy: `${(Math.random() * 15 + 5).toFixed(1)}%`, // Mock APY for now
      change: `${token.change24h >= 0 ? '+' : ''}${token.change24h.toFixed(2)}%`,
      allocation: `${token.allocation.toFixed(1)}%`,
      imageId: token.imageId
    })),
    transactions: [
      { type: "Deposit", asset: "MATIC", amount: "500.00", value: "$500.00", time: "2 hours ago", status: "Completed", hash: "0x1a2b3c...", imageId: "4713" },
      { type: "Stake", asset: "MATIC", amount: "1,000.00", value: "$1,000.00", time: "1 day ago", status: "Active", hash: "0x4d5e6f...", imageId: "4713" },
      { type: "Send", asset: "USDC", amount: "100.00", value: "$100.00", time: "3 days ago", status: "Completed", hash: "0x7g8h9i...", imageId: "6319" },
      { type: "Deposit", asset: "ETH", amount: "0.5", value: "$1,250.00", time: "1 week ago", status: "Completed", hash: "0x1j2k3l...", imageId: "279" },
      { type: "Reward", asset: "MATIC", amount: "12.50", value: "$12.50", time: "2 days ago", status: "Completed", hash: "0x4m5n6o...", imageId: "4713" }
    ],
    performance: {
      daily: "+$45.32",
      weekly: "+$234.56",
      monthly: "+$1,250.32",
      yearly: "+$8,750.50"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Dashboard Header */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Image
              src="/images/logo-transparent.png"
              alt="ALLEGRA Protocol Logo"
              width={32}
              height={32}
              className="object-contain logo-white"
            />
            <span className="text-lg font-semibold gradient-text">Portfolio</span>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBalances(!showBalances)}
              className="text-xs"
            >
              {showBalances ? <HiEyeOff className="h-3 w-3 mr-1" /> : <HiEye className="h-3 w-3 mr-1" />}
              {showBalances ? 'Hide' : 'Show'} Balances
            </Button>
            <Button variant="glass" size="sm" className="text-xs">
              <HiCog className="h-3 w-3 mr-1" />
              Settings
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-4">
        {!isWalletConnected ? (
          /* Connect Wallet Section */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
              <FaWallet className="h-12 w-12 text-black" />
            </div>
            <h1 className="text-3xl font-bold gradient-text mb-4">Connect Your Wallet</h1>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect your wallet to start earning sustainable yields with AI-powered DeFi strategies
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                variant="gradient"
                className="px-8"
                onClick={() => setIsWalletConnected(true)}
              >
                <FaWallet className="mr-2 h-5 w-5" />
                Connect Wallet
              </Button>
              <Button size="lg" variant="glass" className="px-8">
                Learn More
              </Button>
            </div>
          </motion.div>
        ) : (
          /* Portfolio Dashboard */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Portfolio Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Total Value</div>
                      <div className="text-sm font-bold gradient-text">
                        {showBalances ? portfolioData.totalBalance : "••••••"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Available</span>
                    <span className="font-medium">{showBalances ? portfolioData.availableBalance : "••••••"}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Total Return</div>
                      <div className="text-sm font-bold text-green-500">
                        {showBalances ? portfolioData.totalReturn : "••••••"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Return %</span>
                    <span className="font-medium text-green-500">{portfolioData.totalReturnPercent}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Staked</div>
                      <div className="text-sm font-bold gradient-text">
                        {showBalances ? portfolioData.stakedAmount : "••••••"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">24h Change</div>
                      <div className="text-sm font-bold text-green-500">
                        {showBalances ? portfolioData.performance.daily : "••••••"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">7d Change</span>
                    <span className="font-medium text-green-500">{showBalances ? portfolioData.performance.weekly : "••••••"}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="glass">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-sm">
                  <div className="w-4 h-4">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <Button variant="glass" className="h-16 flex flex-col items-center justify-center space-y-1">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
                    </svg>
                    <span className="text-xs">Deposit</span>
                  </Button>
                  <Button variant="glass" className="h-16 flex flex-col items-center justify-center space-y-1">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                    </svg>
                    <span className="text-xs">Send</span>
                  </Button>
                  <Button variant="glass" className="h-16 flex flex-col items-center justify-center space-y-1">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/>
                    </svg>
                    <span className="text-xs">Stake</span>
                  </Button>
                  <Button variant="glass" className="h-16 flex flex-col items-center justify-center space-y-1">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" fill="currentColor"/>
                    </svg>
                    <span className="text-xs">Swap</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Assets */}
              <Card className="glass">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-sm">
                    <div className="w-4 h-4">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span>Your Assets</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {portfolioData.assets.map((asset, index) => (
                      <div key={index} className="flex items-center justify-between p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                            <img 
                              src={`https://assets.coingecko.com/coins/images/${asset.imageId}/large/${asset.symbol.toLowerCase()}.png`}
                              alt={asset.symbol}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                // Fallback to a generic crypto icon if image fails to load
                                e.currentTarget.style.display = 'none';
                                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                            <div className="w-full h-full bg-gradient-to-r from-white to-gray-300 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                              <span className="text-black font-bold text-xs">{asset.symbol}</span>
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground text-sm">{asset.symbol}</div>
                            <div className="text-xs text-muted-foreground">{asset.name}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-foreground text-sm">
                            {showBalances ? asset.balance : "••••••"}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {showBalances ? asset.value : "••••••"}
                          </div>
                          <div className="flex items-center space-x-1 text-xs">
                            <span className="text-green-500">{asset.apy}</span>
                            <span className={`px-1 py-0.5 rounded text-xs ${
                              asset.change.startsWith('+') ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                            }`}>
                              {asset.change}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Transaction History */}
              <Card className="glass">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-sm">
                    <div className="w-4 h-4">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span>Recent Transactions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {portfolioData.transactions.map((tx, index) => (
                      <div key={index} className="flex items-center justify-between p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                            <img 
                              src={`https://assets.coingecko.com/coins/images/${tx.imageId}/large/${tx.asset.toLowerCase()}.png`}
                              alt={tx.asset}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                // Fallback to transaction type icon if crypto image fails to load
                                e.currentTarget.style.display = 'none';
                                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                            <div className={`w-full h-full rounded-lg flex items-center justify-center ${
                              tx.type === 'Deposit' ? 'bg-green-500' :
                              tx.type === 'Stake' ? 'bg-blue-500' :
                              tx.type === 'Reward' ? 'bg-purple-500' :
                              'bg-orange-500'
                            }`} style={{display: 'none'}}>
                              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                                {tx.type === 'Deposit' ? (
                                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
                                ) : tx.type === 'Stake' ? (
                                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/>
                                ) : tx.type === 'Reward' ? (
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                                ) : (
                                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                                )}
                              </svg>
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground text-sm">{tx.type} {tx.asset}</div>
                            <div className="text-xs text-muted-foreground">{tx.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-foreground text-sm">
                            {showBalances ? tx.amount : "••••••"}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {showBalances ? tx.value : "••••••"}
                          </div>
                          <div className={`text-xs px-1 py-0.5 rounded inline-block ${
                            tx.status === 'Completed' ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'
                          }`}>
                            {tx.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* MATIC Staking Demo */}
            <Card className="glass">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span>MATIC Staking Pool</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-500">Active</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png"
                        alt="MATIC"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-white font-bold text-sm">MATIC</span>
                      </div>
                    </div>
                    <div className="text-lg font-bold gradient-text mb-1">8.5%</div>
                    <div className="text-xs text-muted-foreground">APY</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text mb-1">
                      {showBalances ? "1,000 MATIC" : "••••••"}
                    </div>
                    <div className="text-xs text-muted-foreground">Staked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-500 mb-1">
                      {showBalances ? "+$85.00" : "••••••"}
                    </div>
                    <div className="text-xs text-muted-foreground">Monthly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text mb-1">
                      {showBalances ? "45 days" : "••••••"}
                    </div>
                    <div className="text-xs text-muted-foreground">Period</div>
                  </div>
                </div>
                
                <div className="bg-white/5 dark:bg-black/5 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Progress</span>
                    <span className="text-xs font-medium">15/30 days</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-1.5 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button variant="gradient" className="px-6 text-sm">
                    Stake More MATIC
                  </Button>
                  <Button variant="glass" className="px-6 text-sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
