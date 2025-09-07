"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ChartAnalysis from "./ChartAnalysis"
import { HiUser, HiTrendingUp, HiTrendingDown, HiRefresh, HiPlus, HiMinus, HiClock, HiChevronDown, HiChevronUp } from "react-icons/hi"
import { FaWallet, FaChartLine, FaUsers, FaCog, FaCopy } from "react-icons/fa"

type ActiveSection = "overview" | "wallet" | "referral" | "trade-results" | "transaction-history" | "platform-activity" | "options"

export function DAppInterface() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("overview")
  const [walletAddress] = useState("0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6")
  const [userProfile] = useState({
    name: "Alex Chen",
    email: "alex.chen@example.com",
    memberSince: "January 2024",
    totalInvested: "$8,200",
    totalReturns: "$1,250"
  })

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    // You could add a toast notification here
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* Header with User Profile */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">{userProfile.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">{userProfile.name}</h1>
              <p className="text-sm sm:text-base text-muted-foreground">{userProfile.email}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Member since {userProfile.memberSince}</p>
            </div>
          </div>
          
          {/* User Avatar with Wallet Address */}
          <div className="flex items-center justify-between sm:justify-end space-x-3">
            <div className="text-left sm:text-right">
              <p className="text-xs sm:text-sm text-muted-foreground">Wallet Address</p>
              <p className="text-xs sm:text-sm font-mono">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
            </div>
            <Button
              variant="glass"
              size="icon"
              onClick={copyWalletAddress}
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <FaCopy className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        {/* Key Stats Containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <Card className="glass border-l-4 border-l-blue-500">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Total in Pool</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white">$2,450,000</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass border-l-4 border-l-green-500">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Daily Trade P/L</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white">+$45,230</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass border-l-4 border-l-purple-500 sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Current ROI</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white">12.4%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "gradient" : "glass"}
              size="sm"
              onClick={() => setActiveSection(item.id)}
              className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
            >
              <item.icon className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">{item.label}</span>
              <span className="xs:hidden">{item.label.split(' ')[0]}</span>
            </Button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            {activeSection === "overview" && <OverviewSection />}
            {activeSection === "wallet" && <WalletSection />}
            {activeSection === "referral" && <ReferralSection />}
            {activeSection === "trade-results" && <TradeResultsSection />}
            {activeSection === "transaction-history" && <TransactionHistorySection />}
            {activeSection === "platform-activity" && <PlatformActivitySection />}
            {activeSection === "options" && <OptionsWheelSection />}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <QuickStatsCard />
            <PlatformActivityCard />
            <MarketInsightsCard />
          </div>
        </div>
      </div>
    </div>
  )
}

// Overview Section
function OverviewSection() {
  return (
    <div className="space-y-6">
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FaChartLine className="h-5 w-5" />
            <span>Portfolio Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white">$12,450.32</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Total Balance</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white">+$234.56</p>
              <p className="text-xs sm:text-sm text-muted-foreground">24h Change</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white">8.42%</p>
              <p className="text-xs sm:text-sm text-muted-foreground">APY</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white">0.1-4%</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Daily ROI</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Analysis */}
      <ChartAnalysis isMobile={false} />
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
                <p className="text-green-500 font-semibold">+$45.23</p>
                <p className="text-sm text-muted-foreground">Today's Return</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
              <div>
                <p className="font-semibold">$3,200 USDT</p>
                <p className="text-sm text-muted-foreground">Conservative Strategy</p>
              </div>
              <div className="text-right">
                <p className="text-green-500 font-semibold">+$12.45</p>
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
            <div className="flex items-center justify-between p-3 sm:p-4 bg-background/50 rounded-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-muted-foreground font-bold text-xs sm:text-sm">$</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">USDT</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Tether USD</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm sm:text-base">2,450.32</p>
                <p className="text-xs sm:text-sm text-muted-foreground">$2,450.32</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 sm:p-4 bg-background/50 rounded-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-muted-foreground font-bold text-xs sm:text-sm">Ξ</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">ETH</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ethereum</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm sm:text-base">1.25</p>
                <p className="text-xs sm:text-sm text-muted-foreground">$3,125.00</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 sm:p-4 bg-background/50 rounded-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-muted-foreground font-bold text-xs sm:text-sm">BNB</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">BNB</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Binance Coin</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm sm:text-base">4.2</p>
                <p className="text-xs sm:text-sm text-muted-foreground">$1,680.00</p>
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
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FaUsers className="h-5 w-5" />
            <span>Referral Program</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-background/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Your Referral Link</p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value="https://allegra.com/ref/abc123"
                  readOnly
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm"
                />
                <Button variant="glass" size="sm">
                  <FaCopy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-green-500">12</p>
                <p className="text-sm text-muted-foreground">Referrals</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-500">$1,250</p>
                <p className="text-sm text-muted-foreground">Earned</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-500">5%</p>
                <p className="text-sm text-muted-foreground">Commission</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Trade Results Section
function TradeResultsSection() {
  return (
    <div className="space-y-6">
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <HiTrendingDown className="h-5 w-5" />
            <span>Trade Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
              <div>
                <p className="font-semibold">USDT/ETH Trade</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <div className="text-right">
                <p className="text-green-500 font-semibold">+$45.23</p>
                <p className="text-sm text-muted-foreground">+2.3%</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
              <div>
                <p className="font-semibold">BTC/USDT Trade</p>
                <p className="text-sm text-muted-foreground">4 hours ago</p>
              </div>
              <div className="text-right">
                <p className="text-red-500 font-semibold">-$12.45</p>
                <p className="text-sm text-muted-foreground">-0.8%</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
              <div>
                <p className="font-semibold">ETH/USDT Trade</p>
                <p className="text-sm text-muted-foreground">6 hours ago</p>
              </div>
              <div className="text-right">
                <p className="text-green-500 font-semibold">+$67.89</p>
                <p className="text-sm text-muted-foreground">+3.2%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
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
  const [showTransactions, setShowTransactions] = useState(false)
  
  const transactions = [
    {
      id: "tx001",
      type: "Investment",
      amount: "+$500.00",
      status: "completed",
      date: "2024-01-15 14:30",
      description: "Conservative Strategy Investment",
      hash: "0x1234...5678"
    },
    {
      id: "tx002", 
      type: "Returns",
      amount: "+$45.23",
      status: "completed",
      date: "2024-01-15 12:00",
      description: "Daily Returns Claimed",
      hash: "0x2345...6789"
    },
    {
      id: "tx003",
      type: "Withdrawal",
      amount: "-$200.00",
      status: "pending",
      date: "2024-01-14 16:45",
      description: "USDT Withdrawal",
      hash: "0x3456...7890"
    },
    {
      id: "tx004",
      type: "Investment",
      amount: "+$1,000.00",
      status: "completed",
      date: "2024-01-14 10:15",
      description: "Balanced Strategy Investment",
      hash: "0x4567...8901"
    },
    {
      id: "tx005",
      type: "Referral",
      amount: "+$25.00",
      status: "completed",
      date: "2024-01-13 18:20",
      description: "Referral Bonus",
      hash: "0x5678...9012"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-500"
      case "pending": return "text-yellow-500"
      case "failed": return "text-red-500"
      default: return "text-muted-foreground"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Investment": return "text-blue-500"
      case "Returns": return "text-green-500"
      case "Withdrawal": return "text-orange-500"
      case "Referral": return "text-purple-500"
      default: return "text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <HiClock className="h-5 w-5" />
              <span>Transaction History</span>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTransactions(!showTransactions)}
              className="p-2"
            >
              {showTransactions ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {showTransactions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {transactions.map((tx) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-background/50 rounded-lg border border-border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        tx.status === 'completed' ? 'bg-green-500' :
                        tx.status === 'pending' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></div>
                      <div>
                        <h4 className="font-semibold text-sm">{tx.description}</h4>
                        <p className="text-xs text-muted-foreground">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${getTypeColor(tx.type)}`}>{tx.amount}</p>
                      <p className={`text-xs ${getStatusColor(tx.status)}`}>{tx.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className={`px-2 py-1 rounded-full bg-muted ${getTypeColor(tx.type)}`}>
                      {tx.type}
                    </span>
                    <span className="font-mono">{tx.hash}</span>
                  </div>
                </motion.div>
              ))}
              
              <div className="mt-6 text-center">
                <Button variant="glass" size="sm">
                  Load More Transactions
                </Button>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// Platform Activity Section
function PlatformActivitySection() {
  const [showTradingActivity, setShowTradingActivity] = useState(false)
  const [showSeedPhrase, setShowSeedPhrase] = useState(false)
  
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Live Activity Feed */}
      <Card className="glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
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
          {showTradingActivity && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 sm:space-y-4"
            >
              {/* Trading Activity Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-lg space-y-2 sm:space-y-0"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiTrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm sm:text-base text-green-500 truncate">Arbitrage Trade Executed</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">USDT/ETH • 2 seconds ago</p>
                  </div>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                  <p className="text-base sm:text-lg font-bold text-green-500">+$2,340</p>
                  <p className="text-xs text-muted-foreground">0.8% profit</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg space-y-2 sm:space-y-0"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm sm:text-base text-blue-500 truncate">Liquidity Pool Growth</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Uniswap V3 • 1 minute ago</p>
                  </div>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                  <p className="text-base sm:text-lg font-bold text-blue-500">+$1,890</p>
                  <p className="text-xs text-muted-foreground">2.1% APY</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg space-y-2 sm:space-y-0"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiRefresh className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm sm:text-base text-purple-500 truncate">Portfolio Rebalance</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Multi-chain • 3 minutes ago</p>
                  </div>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                  <p className="text-base sm:text-lg font-bold text-purple-500">+$3,120</p>
                  <p className="text-xs text-muted-foreground">1.5% return</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg space-y-2 sm:space-y-0"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaWallet className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm sm:text-base text-orange-500 truncate">New Investment Added</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Conservative Strategy • 5 minutes ago</p>
                  </div>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                  <p className="text-base sm:text-lg font-bold text-orange-500">+$5,000</p>
                  <p className="text-xs text-muted-foreground">0.1-4% daily</p>
                </div>
              </motion.div>
            </motion.div>
          )}
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
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded flex-shrink-0"></div>
                  <span className="font-medium text-sm sm:text-base">DeFi Yield Farming</span>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-sm sm:text-base">$450K</p>
                  <p className="text-xs text-muted-foreground">18.4%</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded flex-shrink-0"></div>
                  <span className="font-medium text-sm sm:text-base">Liquidity Pools</span>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-sm sm:text-base">$1.2M</p>
                  <p className="text-xs text-muted-foreground">49.0%</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded flex-shrink-0"></div>
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
              <div className="text-center p-3 sm:p-4 bg-green-500/10 rounded-lg">
                <p className="text-xl sm:text-2xl font-bold text-green-500">+12.4%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">30-day growth</p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="text-center p-2 sm:p-3 bg-muted/20 rounded-lg">
                  <p className="text-base sm:text-lg font-bold text-blue-500">94.2%</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
                <div className="text-center p-2 sm:p-3 bg-muted/20 rounded-lg">
                  <p className="text-base sm:text-lg font-bold text-purple-500">2.3%</p>
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
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-500 text-sm">⚠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-500 mb-2">Important Security Notice</h4>
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
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-500">Connected</span>
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
