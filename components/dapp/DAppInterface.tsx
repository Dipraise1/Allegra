"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ChartAnalysis from "./ChartAnalysis"
import DepositContainer from "./DepositContainer"
import Image from "next/image"
import { HiUser, HiTrendingUp, HiTrendingDown, HiRefresh, HiPlus, HiMinus, HiClock, HiChevronDown, HiChevronUp, HiBell, HiX } from "react-icons/hi"
import { FaWallet, FaChartLine, FaUsers, FaCog, FaCopy } from "react-icons/fa"
import { ThemeToggle } from "@/components/ThemeToggle"

type ActiveSection = "overview" | "investments" | "rewards" | "options" | "account"

export function DAppInterface() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("overview")
  const [walletAddress] = useState("0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6")
  const [userProfile] = useState({
    name: "Raphael Divine",
    email: "raphaeldivine2@gmail.com",
    memberSince: "January 2024",
    totalInvested: "$8,200",
    totalReturns: "$1,250",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    kycStatus: "Verified",
    securityLevel: "High"
  })
  const [liveActivities, setLiveActivities] = useState([
    {
      id: 1,
      type: "arbitrage",
      pair: "ALLEGRA/USDT",
      amount: "+$2,340.12",
      time: "Just now",
      status: "completed",
      profit: "+$45.23"
    },
    {
      id: 2,
      type: "yield",
      pair: "ALLEGRA-ETH",
      amount: "+$127.43",
      time: "3 seconds ago",
      status: "completed",
      profit: "+$2.34"
    },
    {
      id: 3,
      type: "swap",
      pair: "ALLEGRA/BTC",
      amount: "+0.152 BTC",
      time: "7 seconds ago",
      status: "completed",
      profit: "+$1,247.50"
    },
    {
      id: 4,
      type: "deposit",
      pair: "ALLEGRA Pool",
      amount: "+2.5 ETH",
      time: "12 seconds ago",
      status: "completed",
      profit: "+$4,125.00"
    },
    {
      id: 5,
      type: "withdrawal",
      pair: "ALLEGRA Pool",
      amount: "-$5,000.00",
      time: "18 seconds ago",
      status: "completed",
      profit: "+$125.00"
    }
  ])

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    // You could add a toast notification here
  }

  // Simulate live platform activity updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveActivities(prev => {
        const newActivity = {
          id: Date.now(),
          type: ["arbitrage", "yield", "swap", "deposit", "withdrawal"][Math.floor(Math.random() * 5)],
          pair: ["ALLEGRA/USDT", "ALLEGRA-ETH", "ALLEGRA/BTC", "ALLEGRA Pool", "ALLEGRA/USDC"][Math.floor(Math.random() * 5)],
          amount: `+$${(Math.random() * 5000 + 100).toFixed(2)}`,
          time: "Just now",
          status: "completed",
          profit: `+$${(Math.random() * 100 + 10).toFixed(2)}`
        }
        return [newActivity, ...prev.slice(0, 4)] // Keep only the latest 5 activities
      })
    }, 3000) // Add new activity every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "arbitrage": return <HiTrendingUp className="w-4 h-4 text-foreground" />
      case "yield": return <HiTrendingUp className="w-4 h-4 text-foreground" />
      case "swap": return <HiRefresh className="w-4 h-4 text-foreground" />
      case "deposit": return <HiPlus className="w-4 h-4 text-foreground" />
      case "withdrawal": return <HiMinus className="w-4 h-4 text-foreground" />
      default: return <HiTrendingUp className="w-4 h-4 text-foreground" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "arbitrage": return "bg-gradient-to-r from-green-500/5 to-green-600/5 border border-border"
      case "yield": return "bg-gradient-to-r from-blue-500/5 to-blue-600/5 border border-border"
      case "swap": return "bg-gradient-to-r from-blue-500/5 to-blue-600/5 border border-border"
      case "deposit": return "bg-gradient-to-r from-green-500/5 to-green-600/5 border border-border"
      case "withdrawal": return "bg-gradient-to-r from-red-500/5 to-red-600/5 border border-red-500/20"
      default: return "bg-gradient-to-r from-green-500/5 to-green-600/5 border border-border"
    }
  }

  const navigationItems = [
    { id: "overview", label: "Overview", icon: FaChartLine },
    { id: "wallet", label: "Wallet", icon: FaWallet },
    { id: "referral", label: "Referral", icon: FaUsers },
    { id: "trade-results", label: "Trade Results", icon: HiTrendingDown },
    { id: "transaction-history", label: "Transaction History", icon: HiClock },
    { id: "platform-activity", label: "Platform Activity", icon: HiTrendingUp },
    { id: "options", label: "Options Wheel", icon: FaCog },
  ] as const

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/images/logo-transparent.png"
                    alt="ALLEGRA Protocol Logo"
                    width={32}
                    height={32}
                    className="object-contain logo-white"
                  />
                </div>
                <span className="text-xl font-bold text-foreground">ALLEGRA</span>
              </div>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <button 
                  onClick={() => setActiveSection("overview")}
                  className={`transition-colors pb-1 ${
                    activeSection === "overview" 
                      ? "text-foreground font-semibold border-b-2 border-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveSection("investments")}
                  className={`transition-colors pb-1 ${
                    activeSection === "investments" 
                      ? "text-foreground font-semibold border-b-2 border-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Investments
                </button>
                <button 
                  onClick={() => setActiveSection("rewards")}
                  className={`transition-colors pb-1 ${
                    activeSection === "rewards" 
                      ? "text-foreground font-semibold border-b-2 border-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Rewards & Vesting
                </button>
                <button 
                  onClick={() => setActiveSection("options")}
                  className={`transition-colors pb-1 ${
                    activeSection === "options" 
                      ? "text-foreground font-semibold border-b-2 border-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Options
                </button>
              </nav>
            </div>

            {/* User Profile and Settings */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <HiBell className="h-5 w-5" />
              </Button>
              <button 
                onClick={() => setActiveSection("account")}
                className="flex items-center space-x-3 hover:bg-muted/20 rounded-lg p-2 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{userProfile.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-foreground">{userProfile.name}</p>
                  <p className="text-xs text-muted-foreground">PRO user</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TVL and APY Bar */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-muted rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Total Value Locked (TVL)</span>
                <span className="text-xl font-bold text-foreground">$2.45B</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-muted rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">APY</span>
                <span className="text-xl font-bold text-foreground">18.7%</span>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        
        {/* Render different sections based on activeSection */}
        {activeSection === "overview" && (
          <div>
            {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <HiTrendingUp className="h-6 w-6 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 font-medium">Protocol Backing Ratio</p>
              <p className="text-3xl font-bold text-foreground">100.66%</p>
              <p className="text-xs text-foreground mt-2">+0.12% from last week</p>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWallet className="h-6 w-6 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 font-medium">Total Backing (+ Reserve Fund)</p>
              <p className="text-3xl font-bold text-foreground">$2.45B</p>
              <p className="text-xs text-foreground mt-2">+$127M this month</p>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="h-6 w-6 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 font-medium">ALLEGRA Total Supply</p>
              <p className="text-3xl font-bold text-foreground">2.22B</p>
              <p className="text-xs text-foreground mt-2">Growing steadily</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <HiTrendingUp className="h-6 w-6 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 font-medium">ALLEGRA Price</p>
              <p className="text-3xl font-bold text-foreground">$1.000</p>
              <p className="text-xs text-foreground mt-2">Stable peg maintained</p>
            </div>
          </div>
        </div>

        {/* Main Dashboard Layout - Only on Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Main Chart Section */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-lg p-4 mb-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-foreground">System Backing</h2>
                  <p className="text-xs text-muted-foreground mt-1">Protocol backing ratio and asset distribution over time</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded font-medium">S</button>
                  <button className="px-3 py-1 text-xs text-muted-foreground hover:text-foreground rounded transition-colors">%</button>
                  <button className="px-3 py-1 text-xs text-muted-foreground hover:text-foreground rounded transition-colors">All</button>
                </div>
              </div>
              
              {/* System Backing Chart */}
              <SystemBackingChart />
            </div>

            {/* Backing Table */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-foreground">Backing</h2>
                  <p className="text-xs text-muted-foreground mt-1">Asset distribution across exchanges and custodians</p>
                </div>
                <p className="text-xs text-muted-foreground">Last Updated: 30 Aug 25 07:00</p>
              </div>
              
              <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                <span className="text-sm text-muted-foreground">Backing Notional</span>
                <span className="text-2xl font-bold text-foreground ml-3">2.31B</span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 text-muted-foreground font-semibold">##</th>
                      <th className="text-left py-4 text-muted-foreground font-semibold">BINANCE 25%</th>
                      <th className="text-left py-4 text-muted-foreground font-semibold">BYBIT 15%</th>
                      <th className="text-left py-4 text-muted-foreground font-semibold">OKX 8%</th>
                      <th className="text-left py-4 text-muted-foreground font-semibold">DERIBIT 1%</th>
                      <th className="text-left py-4 text-muted-foreground font-semibold">COINBASE 0%</th>
                      <th className="text-left py-4 text-muted-foreground font-semibold">BITGET</th>
                      <th className="text-left py-4 text-muted-foreground font-semibold">UNDELEGATED 50%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="py-4 text-foreground font-semibold">BTC 31%</td>
                      <td className="py-4 text-foreground">$1.86B</td>
                      <td className="py-4 text-foreground">$1.11B</td>
                      <td className="py-4 text-foreground">$726.43M</td>
                      <td className="py-4 text-foreground">$112.94M</td>
                      <td className="py-4 text-muted-foreground">$0</td>
                      <td className="py-4 text-muted-foreground">$0</td>
                      <td className="py-4 text-foreground">$0.01M</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="py-4 text-foreground font-semibold">ETH & ETH LSTs 14%</td>
                      <td className="py-4 text-foreground">$906.3M</td>
                      <td className="py-4 text-foreground">$594.05M</td>
                      <td className="py-4 text-foreground">$246.29M</td>
                      <td className="py-4 text-foreground">$2.83M</td>
                      <td className="py-4 text-muted-foreground">$0</td>
                      <td className="py-4 text-muted-foreground">$0</td>
                      <td className="py-4 text-foreground">$0.15M</td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="py-4 text-foreground font-semibold">SOL 0%</td>
                      <td className="py-4 text-foreground">$58.78M</td>
                      <td className="py-4 text-muted-foreground">$0</td>
                      <td className="py-4 text-muted-foreground">$0</td>
                      <td className="py-4 text-muted-foreground">$0</td>
                      <td className="py-4 text-muted-foreground">$0</td>
                      <td className="py-4 text-muted-foreground">$0</td>
                      <td className="py-4 text-muted-foreground">$0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Side Panel - Live Platform Activity */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-muted rounded-full animate-pulse"></div>
                  <h2 className="text-lg font-bold text-foreground">Platform Live Activity</h2>
                </div>
                <p className="text-xs text-muted-foreground">Real-time trading and price updates</p>
              </div>
              
              {/* Live Price Ticker */}
              <div className="mb-6 p-4 bg-muted/20 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">ALLEGRA/USDT</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-muted rounded-full animate-pulse"></div>
                    <span className="text-xs text-foreground">Live</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">$1.000</span>
                  <div className="flex items-center space-x-1">
                    <HiTrendingUp className="h-4 w-4 text-foreground" />
                    <span className="text-sm text-foreground font-medium">+0.12%</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Volume: $2.45M • 24h High: $1.002 • 24h Low: $0.998
                </div>
              </div>

              {/* Live Activity Feed */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground font-medium">Live Transactions</span>
                  <span className="text-xs text-muted-foreground">Auto-refresh</span>
                </div>
                
                {/* Live Transaction Items */}
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {liveActivities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      className={`p-3 rounded-lg border ${getActivityColor(activity.type)}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-background/50 rounded-full flex items-center justify-center relative">
                            {getActivityIcon(activity.type)}
                            {activity.time === "Just now" && (
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-muted rounded-full animate-pulse"></div>
                            )}
                          </div>
                          <span className="text-xs font-medium text-foreground capitalize">
                            {activity.type}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground font-medium">{activity.pair}</span>
                        <div className="text-right">
                          <div className="text-sm font-bold text-foreground">{activity.amount}</div>
                          <div className="text-xs text-foreground">+{activity.profit}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Market Stats */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm p-3 bg-muted/20 rounded-lg">
                  <span className="text-foreground font-medium">24h Volume</span>
                  <span className="text-foreground font-bold">$127.3M</span>
                </div>
                <div className="flex items-center justify-between text-sm p-3 bg-muted/20 rounded-lg">
                  <span className="text-foreground font-medium">Active Users</span>
                  <span className="text-foreground font-bold">2,847</span>
                </div>
                <div className="flex items-center justify-between text-sm p-3 bg-muted/20 rounded-lg">
                  <span className="text-foreground font-medium">Total Trades</span>
                  <span className="text-foreground font-bold">15,234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )}

        {/* Portfolio Section */}
        {activeSection === "overview" && <OverviewSection />}

        {/* Investments Section */}
        {activeSection === "investments" && <InvestmentSection />}

        {/* Rewards & Vesting Section */}
        {activeSection === "rewards" && <ReferralSection />}

        {/* Options Section */}
        {activeSection === "options" && <OptionsWheelSection />}

        {/* Account Section */}
        {activeSection === "account" && <AccountSection userProfile={userProfile} />}

      </div>
    </div>
  )
}

// Overview Section
function OverviewSection() {

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Total Portfolio Value</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <HiTrendingUp className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">$15,420.73</p>
            <p className="text-sm text-foreground">+$2,340.12 (+17.9%)</p>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Total Yield Earned</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <HiTrendingUp className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">$3,824.67</p>
            <p className="text-sm text-foreground">+$127.43 today</p>
            <p className="text-xs text-muted-foreground">All time</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Average APY</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <FaChartLine className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">18.73%</p>
            <p className="text-sm text-foreground">+2.1% from last month</p>
            <p className="text-xs text-muted-foreground">Weighted average</p>
          </div>
        </div>
      </div>

                  {/* Holdings and Deposit Side by Side */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Holdings Breakdown */}
                    <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-foreground">Holdings Breakdown</h3>
                        <Button variant="outline" size="sm">
                          <HiRefresh className="h-4 w-4 mr-2" />
                          Refresh
                        </Button>
                      </div>

                      <div className="space-y-4">
                        {/* ETH */}
                        <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                              <span className="text-foreground font-bold text-sm">ETH</span>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">Ethereum</p>
                              <p className="text-sm text-muted-foreground">APY: 20.47%</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-foreground">1.247 ETH</p>
                            <p className="text-sm text-muted-foreground">+$8.47 today</p>
                          </div>
                        </div>

                        {/* USDT */}
                        <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                              <span className="text-foreground font-bold text-sm">USDT</span>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">Tether USD</p>
                              <p className="text-sm text-muted-foreground">APY: 18.73%</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-foreground">$8,450.23</p>
                            <p className="text-sm text-muted-foreground">+$4.23 today</p>
                          </div>
                        </div>

                        {/* BSC (BNB) */}
                        <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                              <span className="text-foreground font-bold text-sm">BNB</span>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">BNB Smart Chain</p>
                              <p className="text-sm text-muted-foreground">APY: 15.23%</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-foreground">2.847 BNB</p>
                            <p className="text-sm text-muted-foreground">+$12.34 today</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Deposit Container */}
                    <div>
                      <DepositContainer isMobile={false} />
                    </div>
                  </div>
    </div>
  )
}

// Investment Section
function InvestmentSection() {
  return (
    <div className="space-y-6">
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <HiTrendingUp className="h-5 w-5" />
            <span>Make Investment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Investment Amount (USDT)</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Strategy</label>
              <select className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Conservative (0.1-1% daily)</option>
                <option>Balanced (1-2.5% daily)</option>
                <option>Aggressive (2.5-4% daily)</option>
              </select>
            </div>
            <Button variant="gradient" className="w-full">
              <HiPlus className="mr-2 h-4 w-4" />
              Invest Now
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Active Investments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
              <div>
                <p className="font-semibold">$5,000 USDT</p>
                <p className="text-sm text-muted-foreground">Balanced Strategy</p>
              </div>
              <div className="text-right">
                <p className="text-foreground font-semibold">+$45.23</p>
                <p className="text-sm text-muted-foreground">Today's Return</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
              <div>
                <p className="font-semibold">$3,200 USDT</p>
                <p className="text-sm text-muted-foreground">Conservative Strategy</p>
              </div>
              <div className="text-right">
                <p className="text-foreground font-semibold">+$12.45</p>
                <p className="text-sm text-muted-foreground">Today's Return</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Wallet Section
function WalletSection() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="glass">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <Button variant="glass" className="h-10 sm:h-12 flex flex-col items-center justify-center">
                <HiPlus className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
                <span className="text-xs">Deposit USDT</span>
              </Button>
              <Button variant="glass" className="h-10 sm:h-12 flex flex-col items-center justify-center">
                <HiPlus className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
                <span className="text-xs">Deposit ETH</span>
              </Button>
              <Button variant="glass" className="h-10 sm:h-12 flex flex-col items-center justify-center">
                <HiPlus className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
                <span className="text-xs">Deposit BNB</span>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <Button variant="glass" className="h-10 sm:h-12 flex flex-col items-center justify-center">
                <HiMinus className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
                <span className="text-xs">Withdraw USDT</span>
              </Button>
              <Button variant="glass" className="h-10 sm:h-12 flex flex-col items-center justify-center">
                <HiMinus className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
                <span className="text-xs">Withdraw ETH</span>
              </Button>
              <Button variant="glass" className="h-10 sm:h-12 flex flex-col items-center justify-center">
                <HiMinus className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
                <span className="text-xs">Withdraw BNB</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FaWallet className="h-5 w-5" />
            <span>Wallet Balance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            {/* USDT-USDC Pool */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-lg border border-border">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center overflow-hidden border-2 border-background">
                    <Image
                      src="https://assets.coingecko.com/coins/images/325/large/Tether.png"
                      alt="USDT"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center overflow-hidden border-2 border-background">
                    <Image
                      src="https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
                      alt="USDC"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">USDT-USDC</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">UNISWAP V3</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="px-2 py-0.5 bg-muted/20 text-foreground text-xs rounded-full">CLM VAULT</span>
                    <span className="px-2 py-0.5 bg-muted/20 text-foreground text-xs rounded-full">BOOST</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm sm:text-base">$8,450.23</p>
                <p className="text-xs sm:text-sm text-foreground">+2.1%</p>
                <p className="text-xs text-muted-foreground">APY: 18.73%</p>
              </div>
            </div>

            {/* ETH-USDT Pool */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-lg border border-border">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center overflow-hidden border-2 border-background">
                    <Image
                      src="https://assets.coingecko.com/coins/images/279/large/ethereum.png"
                      alt="ETH"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center overflow-hidden border-2 border-background">
                    <Image
                      src="https://assets.coingecko.com/coins/images/325/large/Tether.png"
                      alt="USDT"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">ETH-USDT</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">ETHEREX</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="px-2 py-0.5 bg-muted/20 text-foreground text-xs rounded-full">CLM VAULT</span>
                    <span className="px-2 py-0.5 bg-muted/20 text-foreground text-xs rounded-full">IGNITION</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm sm:text-base">1.247 ETH</p>
                <p className="text-xs sm:text-sm text-foreground">+1.8%</p>
                <p className="text-xs text-muted-foreground">APY: 20.47%</p>
              </div>
            </div>

            {/* WBTC-ETH Pool */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-lg border border-orange-500/20">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center overflow-hidden border-2 border-background">
                    <Image
                      src="https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
                      alt="WBTC"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center overflow-hidden border-2 border-background">
                    <Image
                      src="https://assets.coingecko.com/coins/images/279/large/ethereum.png"
                      alt="ETH"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">WBTC-ETH</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">ETHEREX</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="px-2 py-0.5 bg-muted/20 text-foreground text-xs rounded-full">CLM VAULT</span>
                    <span className="px-2 py-0.5 bg-muted/20 text-foreground text-xs rounded-full">IGNITION</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm sm:text-base">0.152 WBTC</p>
                <p className="text-xs sm:text-sm text-foreground">+3.2%</p>
                <p className="text-xs text-muted-foreground">APY: 187.23%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Referral Section
function ReferralSection() {
  return (
    <div className="space-y-6">
      {/* Referral Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Total Referrals</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <FaUsers className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">47</p>
            <p className="text-sm text-foreground">+3 this week</p>
            <p className="text-xs text-muted-foreground">Active referrals</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Total Earned</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <HiTrendingUp className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">$8,420</p>
            <p className="text-sm text-foreground">+$127 this week</p>
            <p className="text-xs text-muted-foreground">Lifetime earnings</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Commission Rate</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <FaChartLine className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">5%</p>
            <p className="text-sm text-foreground">Tier 1 rate</p>
            <p className="text-xs text-muted-foreground">On all trades</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Referral Code</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <HiUser className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-foreground font-mono">ALLEGRA123</p>
            <p className="text-sm text-foreground">Your unique code</p>
            <p className="text-xs text-muted-foreground">Share with friends</p>
          </div>
        </div>
      </div>

      {/* Referral Link */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">Your Referral Link</h3>
          <Button variant="outline" size="sm">
            <FaCopy className="h-4 w-4 mr-2" />
            Copy Link
          </Button>
        </div>
        <div className="p-4 bg-muted/20 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Share this link to earn 5% commission on all trades</p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value="https://allegra.com/ref/ALLEGRA123"
              readOnly
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-sm font-mono"
            />
            <Button variant="default" size="sm">
              <FaCopy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Referral Tiers */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-foreground mb-6">Referral Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h4 className="font-semibold text-foreground">Bronze Tier</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">0-10 referrals</p>
            <p className="text-2xl font-bold text-foreground">3%</p>
            <p className="text-xs text-muted-foreground">Commission rate</p>
          </div>

          <div className="p-4 bg-muted/20 rounded-lg border-2 border-primary">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h4 className="font-semibold text-foreground">Silver Tier</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">11-50 referrals</p>
            <p className="text-2xl font-bold text-primary">5%</p>
            <p className="text-xs text-muted-foreground">Commission rate</p>
          </div>

          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h4 className="font-semibold text-foreground">Gold Tier</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">50+ referrals</p>
            <p className="text-2xl font-bold text-foreground">7%</p>
            <p className="text-xs text-muted-foreground">Commission rate</p>
          </div>
        </div>
      </div>

      {/* Recent Referrals */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-foreground mb-6">Recent Referrals</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JD</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">john.doe@email.com</p>
                <p className="text-sm text-muted-foreground">Joined 2 days ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground">$127.50</p>
              <p className="text-sm text-foreground">Earned</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">alice.smith@email.com</p>
                <p className="text-sm text-muted-foreground">Joined 5 days ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground">$89.20</p>
              <p className="text-sm text-foreground">Earned</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MJ</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">mike.johnson@email.com</p>
                <p className="text-sm text-muted-foreground">Joined 1 week ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground">$234.75</p>
              <p className="text-sm text-foreground">Earned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Trade Results Section
function TradeResultsSection() {
  return (
    <div className="space-y-6">
      {/* Trading Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Total P&L</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <HiTrendingUp className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">+$2,847.50</p>
            <p className="text-sm text-foreground">+$127.43 today</p>
            <p className="text-xs text-muted-foreground">All time</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Win Rate</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <FaChartLine className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">73.2%</p>
            <p className="text-sm text-foreground">+2.1% this week</p>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Total Trades</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <HiRefresh className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">1,247</p>
            <p className="text-sm text-foreground">+23 this week</p>
            <p className="text-xs text-muted-foreground">Completed trades</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Avg. Trade Size</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <HiTrendingUp className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">$1,247</p>
            <p className="text-sm text-foreground">+$45 this week</p>
            <p className="text-xs text-muted-foreground">Per trade</p>
          </div>
        </div>
      </div>

      {/* Strategy Performance */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">Strategy Performance</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">1D</Button>
            <Button variant="default" size="sm">7D</Button>
            <Button variant="outline" size="sm">30D</Button>
            <Button variant="outline" size="sm">1Y</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <HiTrendingUp className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">Arbitrage</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Market inefficiency strategy</p>
            <p className="text-2xl font-bold text-foreground">+$1,247.50</p>
            <p className="text-xs text-muted-foreground">+12.3% this week</p>
          </div>

          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <HiTrendingUp className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">Yield Farming</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Liquidity provision strategy</p>
            <p className="text-2xl font-bold text-foreground">+$892.30</p>
            <p className="text-xs text-muted-foreground">+8.7% this week</p>
          </div>

          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <HiRefresh className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">DCA Strategy</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Dollar cost averaging</p>
            <p className="text-2xl font-bold text-foreground">+$707.70</p>
            <p className="text-xs text-muted-foreground">+5.2% this week</p>
          </div>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">Recent Trades</h3>
          <Button variant="outline" size="sm">
            <HiRefresh className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-muted/10 rounded-full flex items-center justify-center">
                <HiTrendingUp className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">ALLEGRA/USDT Arbitrage</p>
                <p className="text-sm text-muted-foreground">2 hours ago • Strategy: Market Inefficiency</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground">+$127.50</p>
              <p className="text-sm text-muted-foreground">+2.3%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-muted/10 rounded-full flex items-center justify-center">
                <HiTrendingDown className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">ETH/USDT Yield Farm</p>
                <p className="text-sm text-muted-foreground">4 hours ago • Strategy: Liquidity Provision</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground">-$45.20</p>
              <p className="text-sm text-muted-foreground">-0.8%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-muted/10 rounded-full flex items-center justify-center">
                <HiTrendingUp className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">BTC/USDT DCA</p>
                <p className="text-sm text-muted-foreground">6 hours ago • Strategy: Dollar Cost Average</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground">+$89.75</p>
              <p className="text-sm text-muted-foreground">+1.8%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-muted/10 rounded-full flex items-center justify-center">
                <HiTrendingUp className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">ALLEGRA/ETH Swap</p>
                <p className="text-sm text-muted-foreground">8 hours ago • Strategy: Market Making</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground">+$234.50</p>
              <p className="text-sm text-muted-foreground">+4.2%</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

// Options Wheel Section
function OptionsWheelSection() {
  return (
    <div className="space-y-6">
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FaCog className="h-5 w-5" />
            <span>Options Wheel</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="glass" className="h-16 flex flex-col items-center justify-center">
              <HiRefresh className="h-6 w-6 mb-2" />
              <span className="text-sm">Auto Reinvest</span>
            </Button>
            <Button variant="glass" className="h-16 flex flex-col items-center justify-center">
              <HiTrendingUp className="h-6 w-6 mb-2" />
              <span className="text-sm">Risk Level</span>
            </Button>
            <Button variant="glass" className="h-16 flex flex-col items-center justify-center">
              <FaChartLine className="h-6 w-6 mb-2" />
              <span className="text-sm">Analytics</span>
            </Button>
            <Button variant="glass" className="h-16 flex flex-col items-center justify-center">
              <FaCog className="h-6 w-6 mb-2" />
              <span className="text-sm">Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Sidebar Components
function QuickStatsCard() {
  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Quick Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 sm:space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-muted-foreground">Total in Pool</span>
          <span className="font-semibold text-sm sm:text-base text-black dark:text-white">$2,450,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-muted-foreground">Daily Trade P/L</span>
          <span className="font-semibold text-sm sm:text-base text-black dark:text-white">+$45,230</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-muted-foreground">Current ROI</span>
          <span className="font-semibold text-sm sm:text-base text-black dark:text-white">12.4%</span>
        </div>
      </CardContent>
    </Card>
  )
}

function PlatformActivityCard() {
  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Platform Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 sm:space-y-3">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-2 h-2 bg-foreground rounded-full flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium truncate">Investment Added</p>
            <p className="text-xs text-muted-foreground">2 hours ago</p>
          </div>
          <span className="text-xs sm:text-sm text-black dark:text-white flex-shrink-0">+$500</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-2 h-2 bg-muted-foreground rounded-full flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium truncate">Returns Claimed</p>
            <p className="text-xs text-muted-foreground">4 hours ago</p>
          </div>
          <span className="text-xs sm:text-sm text-black dark:text-white flex-shrink-0">+$45</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium truncate">Referral Bonus</p>
            <p className="text-xs text-muted-foreground">1 day ago</p>
          </div>
          <span className="text-xs sm:text-sm text-black dark:text-white flex-shrink-0">+$25</span>
        </div>
      </CardContent>
    </Card>
  )
}

function MarketInsightsCard() {
  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Market Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 sm:space-y-3">
        <div className="p-2 sm:p-3 bg-background/50 rounded-lg">
          <p className="text-xs sm:text-sm font-medium">AI Analysis</p>
          <p className="text-xs text-muted-foreground">Market conditions favor conservative strategies</p>
        </div>
        <div className="p-2 sm:p-3 bg-background/50 rounded-lg">
          <p className="text-xs sm:text-sm font-medium">Trend Alert</p>
          <p className="text-xs text-muted-foreground">DeFi yields trending upward</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Transaction History Section
function TransactionHistorySection() {
  const [activeTab, setActiveTab] = useState<'personal' | 'platform'>('personal')
  
  const personalTransactions = [
    {
      id: "tx001",
      type: "Deposit",
      amount: "+1,000 USDT",
      status: "completed",
      date: "2024-01-15 14:30",
      description: "Deposit to USDT-USDC Pool",
      hash: "0x1234...5678",
      platform: "Uniswap V3",
      fee: "0.3%"
    },
    {
      id: "tx002", 
      type: "Yield",
      amount: "+$24.50",
      status: "completed",
      date: "2024-01-15 12:00",
      description: "Yield Harvested",
      hash: "0x2345...6789",
      platform: "Auto-compound",
      fee: "0.1%"
    },
    {
      id: "tx003",
      type: "Withdrawal",
      amount: "-0.5 ETH",
      status: "pending",
      date: "2024-01-14 16:45",
      description: "Withdraw from ETH-USDT",
      hash: "0x3456...7890",
      platform: "Eterex",
      fee: "0.25%"
    },
    {
      id: "tx004",
      type: "Deposit",
      amount: "+0.15 WBTC",
      status: "completed",
      date: "2024-01-14 10:15",
      description: "Deposit to WBTC-ETH Pool",
      hash: "0x4567...8901",
      platform: "Eterex",
      fee: "0.2%"
    },
    {
      id: "tx005",
      type: "Yield",
      amount: "+$127.50",
      status: "completed",
      date: "2024-01-13 18:20",
      description: "Daily Yield Claimed",
      hash: "0x5678...9012",
      platform: "CLM Vault",
      fee: "0.05%"
    }
  ]

  const platformTransactions = [
    {
      id: "ptx001",
      type: "Arbitrage",
      amount: "+$2,340.12",
      status: "completed",
      date: "2024-01-15 15:45",
      description: "ALLEGRA/USDT arbitrage executed",
      hash: "0x7890...1234",
      platform: "Binance",
      profit: "+$45.23"
    },
    {
      id: "ptx002",
      type: "Yield",
      amount: "+$127.43",
      status: "completed",
      date: "2024-01-15 15:30",
      description: "USDT-USDC yield farming",
      hash: "0x8901...2345",
      platform: "Uniswap V3",
      profit: "+$2.34"
    },
    {
      id: "ptx003",
      type: "Swap",
      amount: "+0.152 WBTC",
      status: "completed",
      date: "2024-01-15 15:15",
      description: "WBTC/ETH swap executed",
      hash: "0x9012...3456",
      platform: "Eterex",
      profit: "+$1,247.50"
    },
    {
      id: "ptx004",
      type: "Deposit",
      amount: "+2.5 ETH",
      status: "completed",
      date: "2024-01-15 15:00",
      description: "ETH pool deposit",
      hash: "0x0123...4567",
      platform: "CLM Vault",
      profit: "+$4,125.00"
    },
    {
      id: "ptx005",
      type: "Withdrawal",
      amount: "-$5,000.00",
      status: "completed",
      date: "2024-01-15 14:45",
      description: "USDT pool withdrawal",
      hash: "0x1234...5678",
      platform: "Uniswap V3",
      profit: "+$125.00"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-foreground"
      case "pending": return "text-foreground"
      case "failed": return "text-foreground"
      default: return "text-muted-foreground"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Investment": return "text-foreground"
      case "Returns": return "text-foreground"
      case "Withdrawal": return "text-foreground"
      case "Referral": return "text-foreground"
      default: return "text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Transaction Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Total Transactions</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <HiClock className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">1,247</p>
            <p className="text-sm text-foreground">+23 this week</p>
            <p className="text-xs text-muted-foreground">All time</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Total Volume</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <HiTrendingUp className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">$2.45M</p>
            <p className="text-sm text-foreground">+$127K this week</p>
            <p className="text-xs text-muted-foreground">Traded volume</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Success Rate</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <FaChartLine className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">98.7%</p>
            <p className="text-sm text-foreground">+0.3% this week</p>
            <p className="text-xs text-muted-foreground">Completed successfully</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Avg. Fee</h3>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <HiTrendingUp className="h-5 w-5 text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-foreground">0.18%</p>
            <p className="text-sm text-foreground">-0.02% this week</p>
            <p className="text-xs text-muted-foreground">Per transaction</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">Transaction History</h3>
          <div className="flex space-x-2">
            <Button
              variant={activeTab === 'personal' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('personal')}
            >
              Personal
            </Button>
            <Button
              variant={activeTab === 'platform' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('platform')}
            >
              Platform
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {(activeTab === 'personal' ? personalTransactions : platformTransactions).map((tx) => (
            <div
              key={tx.id}
              className={`p-4 rounded-lg border ${
                tx.type === "Deposit" 
                  ? "bg-gradient-to-r from-green-500/5 to-green-600/5 border-border"
                  : tx.type === "Yield"
                  ? "bg-gradient-to-r from-blue-500/5 to-blue-600/5 border-border"
                  : tx.type === "Arbitrage"
                  ? "bg-gradient-to-r from-blue-500/5 to-blue-600/5 border-border"
                  : "bg-gradient-to-r from-orange-500/5 to-orange-600/5 border-orange-500/20"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === "Deposit" 
                      ? "bg-muted/20"
                      : tx.type === "Yield"
                      ? "bg-muted/20"
                      : tx.type === "Arbitrage"
                      ? "bg-muted/20"
                      : "bg-muted/20"
                  }`}>
                    {tx.type === "Deposit" ? (
                      <HiPlus className="h-5 w-5 text-foreground" />
                    ) : tx.type === "Yield" ? (
                      <HiTrendingUp className="h-5 w-5 text-foreground" />
                    ) : tx.type === "Arbitrage" ? (
                      <HiTrendingUp className="h-5 w-5 text-foreground" />
                    ) : (
                      <HiMinus className="h-5 w-5 text-foreground" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{tx.type}</p>
                    <p className="text-sm text-muted-foreground">{tx.platform}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-lg ${
                    tx.type === "Withdrawal" ? "text-foreground" : "text-foreground"
                  }`}>
                    {tx.amount}
                  </p>
                  <p className={`text-sm ${getStatusColor(tx.status)}`}>
                    {tx.status}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>{tx.description}</span>
                <span>{tx.date}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono">{tx.hash}</span>
                <div className="flex items-center space-x-4">
                  {'fee' in tx && tx.fee && <span>Fee: {tx.fee}</span>}
                  {'profit' in tx && tx.profit && <span className="text-foreground">Profit: {tx.profit}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Platform Activity Section
function PlatformActivitySection() {
  const [showTradingActivity, setShowTradingActivity] = useState(false)
  const [showSeedPhrase, setShowSeedPhrase] = useState(false)
  const [liveActivities, setLiveActivities] = useState([
    {
      id: 1,
      type: "arbitrage",
      pair: "USDT/ETH",
      amount: "+$2,340.12",
      time: "2 seconds ago",
      status: "completed",
      profit: "+$45.23"
    },
    {
      id: 2,
      type: "yield",
      pair: "USDT-USDC",
      amount: "+$127.43",
      time: "5 seconds ago",
      status: "completed",
      profit: "+$2.34"
    },
    {
      id: 3,
      type: "swap",
      pair: "WBTC/ETH",
      amount: "+0.152 WBTC",
      time: "8 seconds ago",
      status: "completed",
      profit: "+$1,247.50"
    },
    {
      id: 4,
      type: "deposit",
      pair: "ETH-USDT",
      amount: "+1.247 ETH",
      time: "12 seconds ago",
      status: "completed",
      profit: "+$3,125.00"
    },
    {
      id: 5,
      type: "withdrawal",
      pair: "USDT-USDC",
      amount: "-$8,450.23",
      time: "15 seconds ago",
      status: "completed",
      profit: "-$8,450.23"
    }
  ])

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveActivities(prev => {
        const newActivity = {
          id: Date.now(),
          type: ["arbitrage", "yield", "swap", "deposit", "withdrawal"][Math.floor(Math.random() * 5)],
          pair: ["USDT/ETH", "USDT-USDC", "WBTC/ETH", "ETH-USDT", "BNB/USDT"][Math.floor(Math.random() * 5)],
          amount: `+$${(Math.random() * 5000 + 100).toFixed(2)}`,
          time: "Just now",
          status: "completed",
          profit: `+$${(Math.random() * 100 + 10).toFixed(2)}`
        }
        return [newActivity, ...prev.slice(0, 4)]
      })
    }, 3000) // Add new activity every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "arbitrage": return <HiTrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
      case "yield": return <HiTrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
      case "swap": return <HiRefresh className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
      case "deposit": return <HiPlus className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
      case "withdrawal": return <HiMinus className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
      default: return <HiTrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "arbitrage": return "bg-muted/10 border-border"
      case "yield": return "bg-muted/10 border-border"
      case "swap": return "bg-muted/10 border-border"
      case "deposit": return "bg-muted/10 border-border"
      case "withdrawal": return "bg-muted/10 border-red-500/20"
      default: return "bg-muted/10 border-border"
    }
  }
  
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Live Activity Feed */}
      <Card className="glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-muted rounded-full animate-pulse"></div>
              <span>Trading Activity</span>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTradingActivity(!showTradingActivity)}
              className="p-2"
            >
              {showTradingActivity ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4 max-h-96 overflow-y-auto">
            {liveActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 rounded-lg space-y-2 sm:space-y-0 border ${getActivityColor(activity.type)}`}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-background/50 rounded-full flex items-center justify-center flex-shrink-0 relative">
                    {getActivityIcon(activity.type)}
                    {activity.time === "Just now" && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-muted rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm sm:text-base text-foreground truncate capitalize">
                      {activity.type} Trade Executed
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {activity.pair} • {activity.time}
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                  <p className="text-base sm:text-lg font-bold text-foreground">{activity.amount}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Profit: {activity.profit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fund Allocation Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Fund Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between p-2 sm:p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-muted rounded flex-shrink-0"></div>
                  <span className="font-medium text-sm sm:text-base">DeFi Yield Farming</span>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-sm sm:text-base">$450K</p>
                  <p className="text-xs text-muted-foreground">18.4%</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-muted rounded flex-shrink-0"></div>
                  <span className="font-medium text-sm sm:text-base">Liquidity Pools</span>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-sm sm:text-base">$1.2M</p>
                  <p className="text-xs text-muted-foreground">49.0%</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-muted rounded flex-shrink-0"></div>
                  <span className="font-medium text-sm sm:text-base">Arbitrage Trading</span>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-sm sm:text-base">$800K</p>
                  <p className="text-xs text-muted-foreground">32.6%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              <div className="text-center p-3 sm:p-4 bg-muted/10 rounded-lg">
                <p className="text-xl sm:text-2xl font-bold text-foreground">+12.4%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">30-day growth</p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="text-center p-2 sm:p-3 bg-muted/20 rounded-lg">
                  <p className="text-base sm:text-lg font-bold text-foreground">94.2%</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
                <div className="text-center p-2 sm:p-3 bg-muted/20 rounded-lg">
                  <p className="text-base sm:text-lg font-bold text-foreground">2.3%</p>
                  <p className="text-xs text-muted-foreground">Avg Daily</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seed Phrase Management */}
      <Card className="glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <FaWallet className="h-5 w-5" />
              <span>Wallet Security</span>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSeedPhrase(!showSeedPhrase)}
              className="p-2"
            >
              {showSeedPhrase ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {showSeedPhrase && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="p-4 bg-muted/10 border border-yellow-500/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-muted/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-foreground text-sm">⚠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Important Security Notice</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your seed phrase is the master key to your wallet. Never share it with anyone. 
                      Store it securely offline and never enter it on suspicious websites.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm">Recovery Phrase</h4>
                    <p className="text-xs text-muted-foreground">12-word mnemonic phrase</p>
                  </div>
                  <Button variant="glass" size="sm">
                    View Seed Phrase
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm">Backup Status</h4>
                    <p className="text-xs text-muted-foreground">Last backup: Never</p>
                  </div>
                  <Button variant="glass" size="sm">
                    Create Backup
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm">Wallet Connection</h4>
                    <p className="text-xs text-muted-foreground">Connected to ALLEGRA Protocol</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-muted rounded-full"></div>
                    <span className="text-xs text-foreground">Connected</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>

    </div>
  )
}

// Account Section
function AccountSection({ userProfile }: { userProfile: any }) {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState(userProfile)


  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">{profileData.name.split(' ').map((n: string) => n[0]).join('')}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{profileData.name}</h2>
              <p className="text-muted-foreground">{profileData.email}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-sm bg-muted/10 text-foreground px-2 py-1 rounded-full">
                  {profileData.kycStatus}
                </span>
                <span className="text-sm bg-muted/10 text-foreground px-2 py-1 rounded-full">
                  {profileData.securityLevel} Security
                </span>
              </div>
            </div>
          </div>
          <Button 
            variant={isEditing ? "default" : "outline"} 
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-foreground mb-6">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground"
                />
              ) : (
                <p className="text-muted-foreground mt-1">{profileData.name}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground"
                />
              ) : (
                <p className="text-muted-foreground mt-1">{profileData.email}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground"
                />
              ) : (
                <p className="text-muted-foreground mt-1">{profileData.phone}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Location</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.location}
                  onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                  className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground"
                />
              ) : (
                <p className="text-muted-foreground mt-1">{profileData.location}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Member Since</label>
              <p className="text-muted-foreground mt-1">{profileData.memberSince}</p>
            </div>
          </div>
        </div>

        {/* Account Statistics */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-foreground mb-6">Account Statistics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
              <div>
                <p className="text-sm font-medium text-foreground">Total Invested</p>
                <p className="text-2xl font-bold text-foreground">{profileData.totalInvested}</p>
              </div>
              <div className="w-12 h-12 bg-muted/10 rounded-full flex items-center justify-center">
                <HiTrendingUp className="h-6 w-6 text-foreground" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
              <div>
                <p className="text-sm font-medium text-foreground">Total Returns</p>
                <p className="text-2xl font-bold text-foreground">{profileData.totalReturns}</p>
              </div>
              <div className="w-12 h-12 bg-muted/10 rounded-full flex items-center justify-center">
                <HiTrendingUp className="h-6 w-6 text-foreground" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
              <div>
                <p className="text-sm font-medium text-foreground">ROI</p>
                <p className="text-2xl font-bold text-foreground">+15.24%</p>
              </div>
              <div className="w-12 h-12 bg-muted/10 rounded-full flex items-center justify-center">
                <FaChartLine className="h-6 w-6 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

// System Backing Chart Component
function SystemBackingChart() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  
  // Sample data for the chart - similar to Ethena's backing data
  const chartData = [
    { date: '1/25', value: 8.2, btc: 2.1, eth: 1.8 },
    { date: '2/25', value: 8.8, btc: 2.3, eth: 1.9 },
    { date: '3/25', value: 9.1, btc: 2.4, eth: 2.0 },
    { date: '4/25', value: 9.5, btc: 2.6, eth: 2.1 },
    { date: '5/25', value: 10.2, btc: 2.8, eth: 2.3 },
    { date: '6/25', value: 10.8, btc: 3.0, eth: 2.4 },
    { date: '7/25', value: 11.5, btc: 3.2, eth: 2.6 },
    { date: '8/25', value: 12.3, btc: 3.75, eth: 1.23 }
  ]

  const maxValue = Math.max(...chartData.map(d => d.value))
  const minValue = Math.min(...chartData.map(d => d.value))
  const range = maxValue - minValue

  return (
    <div className="h-80 relative">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full w-12 flex flex-col justify-between text-xs text-muted-foreground">
        <span>$12B</span>
        <span>$9B</span>
        <span>$6B</span>
        <span>$3B</span>
        <span>$0</span>
      </div>

      {/* Chart area */}
      <div className="ml-12 mr-4 h-full relative">
        {/* Grid lines */}
        <div className="absolute inset-0">
          {[0, 25, 50, 75, 100].map((percent, index) => (
            <div
              key={index}
              className="absolute w-full border-t border-border/20"
              style={{ top: `${percent}%` }}
            />
          ))}
        </div>

        {/* Chart line */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Line path */}
          <path
            d={chartData.map((point, index) => {
              const x = (index / (chartData.length - 1)) * 100
              const y = 100 - ((point.value - minValue) / range) * 100
              return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`
            }).join(' ')}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="drop-shadow-sm"
          />

          {/* Data points */}
          {chartData.map((point, index) => {
            const x = (index / (chartData.length - 1)) * 100
            const y = 100 - ((point.value - minValue) / range) * 100
            const isHovered = hoveredPoint === index
            
            return (
              <g key={index}>
                {/* Hover circle */}
                <circle
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r={isHovered ? "6" : "4"}
                  fill="hsl(var(--primary))"
                  className="transition-all duration-200 cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                
                {/* Tooltip */}
                {isHovered && (
                  <g>
                    {/* Tooltip background */}
                    <rect
                      x={`${x}%`}
                      y={`${y - 8}%`}
                      width="120"
                      height="60"
                      rx="8"
                      fill="hsl(var(--card))"
                      stroke="hsl(var(--border))"
                      className="transform -translate-x-1/2 -translate-y-full"
                    />
                    
                    {/* Tooltip content */}
                    <text
                      x={`${x}%`}
                      y={`${y - 25}%`}
                      textAnchor="middle"
                      className="text-xs fill-foreground font-medium transform -translate-x-1/2 -translate-y-full"
                    >
                      Aug 17, 2025
                    </text>
                    <text
                      x={`${x}%`}
                      y={`${y - 10}%`}
                      textAnchor="middle"
                      className="text-xs fill-foreground transform -translate-x-1/2 -translate-y-full"
                    >
                      ${point.btc}B BTC
                    </text>
                    <text
                      x={`${x}%`}
                      y={`${y + 5}%`}
                      textAnchor="middle"
                      className="text-xs fill-foreground transform -translate-x-1/2 -translate-y-full"
                    >
                      ${point.eth}B ETH
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      {/* X-axis labels */}
      <div className="absolute bottom-0 left-12 right-4 h-8 flex justify-between items-center text-xs text-muted-foreground">
        {chartData.map((point) => (
          <span key={point.date} className="text-center">
            {point.date}
          </span>
        ))}
      </div>
    </div>
  )
}
