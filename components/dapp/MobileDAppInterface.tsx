"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  HiTrendingUp, 
  HiChartBar,
  HiPlus,
  HiMinus,
  HiArrowUp,
  HiRefresh,
  HiShieldCheck,
  HiCurrencyDollar,
  HiChevronDown,
  HiChevronUp,
  HiEye,
  HiEyeOff,
  HiHome,
  HiCash,
  HiClock,
  HiCog
} from "react-icons/hi"
import ChartAnalysis from "./ChartAnalysis"
import Image from "next/image"

type ActiveSection = 'overview' | 'wallet' | 'activity' | 'settings'

export default function MobileDAppInterface() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('overview')
  const [showTransactions, setShowTransactions] = useState(false)
  const [showTradingActivity, setShowTradingActivity] = useState(false)
  const [showBalances, setShowBalances] = useState(true)

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: HiHome },
    { id: 'wallet', label: 'Wallet', icon: HiCash },
    { id: 'activity', label: 'Activity', icon: HiClock },
    { id: 'settings', label: 'Settings', icon: HiCog },
  ] as const

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/logo-transparent.png"
                  alt="ALLEGRA Protocol Logo"
                  width={40}
                  height={40}
                  className="object-contain logo-white"
                />
              </div>
              <span className="text-xl font-bold gradient-text">ALLEGRA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowBalances(!showBalances)}
                className="p-2"
              >
                {showBalances ? <HiEyeOff className="w-4 h-4" /> : <HiEye className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Stats - Professional Mobile Design */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                  <HiCurrencyDollar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">Total Pool</p>
                <p className="text-lg font-bold text-foreground">$2.45M</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">+2.3%</p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                  <HiTrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">Daily P/L</p>
                <p className="text-lg font-bold text-gray-600 dark:text-gray-400">+$45.2K</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">+1.8%</p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                  <HiChartBar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">ROI</p>
                <p className="text-lg font-bold text-foreground">12.4%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">+0.5%</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation Tabs */}
      <div className="px-4 mb-6">
        <div className="flex space-x-2 bg-muted/50 rounded-xl p-1.5 backdrop-blur-sm">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id as ActiveSection)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-background text-foreground shadow-lg border border-border/50'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden xs:inline">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="px-3 pb-20">
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
          {/* Professional Portfolio Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-5 bg-gradient-to-br from-background to-muted/20 border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <HiChartBar className="w-3 h-3 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Portfolio Overview</h3>
                </div>
                <motion.button
                  whileHover={{ rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-muted/50 rounded-full transition-colors"
                >
                  <HiRefresh className="w-4 h-4 text-muted-foreground" />
                </motion.button>
              </div>
              <div className="space-y-4">
                {/* Wallet Balances */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Wallet Balances</h4>
                  
                  {/* USDT Balance */}
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                        <Image
                          src="https://assets.coingecko.com/coins/images/325/large/Tether.png"
                          alt="USDT"
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Tether USD</p>
                        <p className="text-xs text-muted-foreground">Stablecoin</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">
                        {showBalances ? "$8,450.00" : "••••••"}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">+2.1%</p>
                    </div>
                  </div>

                  {/* ETH Balance */}
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                        <Image
                          src="https://assets.coingecko.com/coins/images/279/large/ethereum.png"
                          alt="ETH"
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Ethereum</p>
                        <p className="text-xs text-muted-foreground">Smart Contract</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">
                        {showBalances ? "1.25 ETH" : "••••••"}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">+1.8%</p>
                    </div>
                  </div>

                  {/* BNB Balance */}
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                        <Image
                          src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png"
                          alt="BNB"
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Binance Coin</p>
                        <p className="text-xs text-muted-foreground">Native Token</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">
                        {showBalances ? "4.2 BNB" : "••••••"}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">+1.8%</p>
                    </div>
                  </div>
                </div>

                {/* Total Portfolio Value */}
                <div className="text-center p-4 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800">
                  <p className="text-xs text-muted-foreground mb-1">Total Portfolio Value</p>
                  <p className="text-2xl font-bold text-foreground">
                    {showBalances ? "$12,450.00" : "••••••"}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">+1.9% (24h)</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Professional Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-5 bg-gradient-to-br from-background to-muted/20 border-border/50">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <HiArrowUp className="w-3 h-3 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="h-12 w-full flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black">
                      <HiPlus className="w-4 h-4" />
                      <span className="text-sm font-medium">Deposit USDT</span>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="h-12 w-full flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black">
                      <HiPlus className="w-4 h-4" />
                      <span className="text-sm font-medium">Deposit BNB</span>
                    </Button>
                  </motion.div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="h-12 w-full flex items-center space-x-2 border-2">
                      <HiMinus className="w-4 h-4" />
                      <span className="text-sm font-medium">Withdraw USDT</span>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="h-12 w-full flex items-center space-x-2 border-2">
                      <HiMinus className="w-4 h-4" />
                      <span className="text-sm font-medium">Withdraw BNB</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Trading Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="p-5 bg-gradient-to-br from-background to-muted/20 border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <HiChartBar className="w-3 h-3 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Trading Activity</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTradingActivity(!showTradingActivity)}
                  className="p-1"
                >
                  {showTradingActivity ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
                </Button>
              </div>
              
              {showTradingActivity && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
                      <p className="text-xs text-muted-foreground">24h Volume</p>
                      <p className="text-sm font-bold text-foreground">$2.1M</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
                      <p className="text-xs text-muted-foreground">Active Trades</p>
                      <p className="text-sm font-bold text-foreground">47</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
                    <p className="text-xs text-muted-foreground mb-2">Recent Trades</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-foreground">USDT/BNB</span>
                        <span className="text-gray-600 dark:text-gray-400">+0.8%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-foreground">ETH/USDT</span>
                        <span className="text-gray-600 dark:text-gray-400">-0.3%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Transaction History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Card className="p-5 bg-gradient-to-br from-background to-muted/20 border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <HiRefresh className="w-3 h-3 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Transaction History</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTransactions(!showTransactions)}
                  className="p-1"
                >
                  {showTransactions ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
                </Button>
              </div>
              
              {showTransactions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3"
                >
                  {[
                    { type: 'Deposit', token: 'USDT', amount: '+$1,000.00', time: '2h ago', status: 'Confirmed', hash: '0x1234...5678' },
                    { type: 'Deposit', token: 'BNB', amount: '+2.5 BNB', time: '1d ago', status: 'Confirmed', hash: '0x9876...5432' },
                    { type: 'Trading Fee', token: 'USDT', amount: '-$2.50', time: '1d ago', status: 'Confirmed', hash: '0xabcd...efgh' },
                    { type: 'Withdraw', token: 'USDT', amount: '-$500.00', time: '3d ago', status: 'Confirmed', hash: '0x5678...9abc' },
                    { type: 'Gas Fee', token: 'BNB', amount: '-0.001 BNB', time: '3d ago', status: 'Confirmed', hash: '0xdef0...1234' },
                  ].map((tx, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                      className="flex items-center justify-between py-3 px-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="text-sm font-medium text-foreground">{tx.type}</p>
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                            {tx.token}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{tx.time}</p>
                        <p className="text-xs text-gray-500 font-mono">{tx.hash}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-600 dark:text-gray-400">
                          {tx.amount}
                        </p>
                        <p className="text-xs text-muted-foreground">{tx.status}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Chart Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <ChartAnalysis />
          </motion.div>
            </motion.div>
          )}

          {activeSection === 'wallet' && (
            <motion.div
              key="wallet"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {/* Wallet Balances */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-5 bg-gradient-to-br from-background to-muted/20 border-border/50">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <HiCash className="w-3 h-3 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">Wallet Balances</h3>
                  </div>
                  <div className="space-y-3">
                    {/* USDT Balance */}
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                          <Image
                            src="https://assets.coingecko.com/coins/images/325/large/Tether.png"
                            alt="USDT"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Tether USD</p>
                          <p className="text-xs text-muted-foreground">Stablecoin</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {showBalances ? "$8,450.00" : "••••••"}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">+2.1%</p>
                      </div>
                    </div>

                    {/* ETH Balance */}
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                          <Image
                            src="https://assets.coingecko.com/coins/images/279/large/ethereum.png"
                            alt="ETH"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Ethereum</p>
                          <p className="text-xs text-muted-foreground">Smart Contract</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {showBalances ? "1.25 ETH" : "••••••"}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">+1.8%</p>
                      </div>
                    </div>

                    {/* BNB Balance */}
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                          <Image
                            src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png"
                            alt="BNB"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Binance Coin</p>
                          <p className="text-xs text-muted-foreground">Native Token</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {showBalances ? "4.2 BNB" : "••••••"}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">+1.8%</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-5 bg-gradient-to-br from-background to-muted/20 border-border/50">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <HiArrowUp className="w-3 h-3 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">Quick Actions</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <Button className="h-12 w-full flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black">
                        <HiPlus className="w-4 h-4" />
                        <span className="text-sm font-medium">Deposit USDT</span>
                      </Button>
                      <Button className="h-12 w-full flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black">
                        <HiPlus className="w-4 h-4" />
                        <span className="text-sm font-medium">Deposit BNB</span>
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-12 w-full flex items-center space-x-2 border-2">
                        <HiMinus className="w-4 h-4" />
                        <span className="text-sm font-medium">Withdraw USDT</span>
                      </Button>
                      <Button variant="outline" className="h-12 w-full flex items-center space-x-2 border-2">
                        <HiMinus className="w-4 h-4" />
                        <span className="text-sm font-medium">Withdraw BNB</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'activity' && (
            <motion.div
              key="activity"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {/* Trading Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-5 bg-gradient-to-br from-background to-muted/20 border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <HiChartBar className="w-3 h-3 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">Trading Activity</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowTradingActivity(!showTradingActivity)}
                      className="p-1"
                    >
                      {showTradingActivity ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
                    </Button>
                  </div>
                  
                  {showTradingActivity && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
                          <p className="text-xs text-muted-foreground">24h Volume</p>
                          <p className="text-sm font-bold text-foreground">$2.1M</p>
                        </div>
                        <div className="p-3 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
                          <p className="text-xs text-muted-foreground">Active Trades</p>
                          <p className="text-sm font-bold text-foreground">47</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>

              {/* Transaction History */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-5 bg-gradient-to-br from-background to-muted/20 border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <HiRefresh className="w-3 h-3 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">Transaction History</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowTransactions(!showTransactions)}
                      className="p-1"
                    >
                      {showTransactions ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
                    </Button>
                  </div>
                  
                  {showTransactions && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      {[
                        { type: 'Deposit', token: 'USDT', amount: '+$1,000.00', time: '2h ago', status: 'Confirmed', hash: '0x1234...5678' },
                        { type: 'Deposit', token: 'BNB', amount: '+2.5 BNB', time: '1d ago', status: 'Confirmed', hash: '0x9876...5432' },
                        { type: 'Trading Fee', token: 'USDT', amount: '-$2.50', time: '1d ago', status: 'Confirmed', hash: '0xabcd...efgh' },
                      ].map((tx, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center justify-between py-3 px-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800"
                        >
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <p className="text-sm font-medium text-foreground">{tx.type}</p>
                              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                                {tx.token}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">{tx.time}</p>
                            <p className="text-xs text-gray-500 font-mono">{tx.hash}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-gray-600 dark:text-gray-400">
                              {tx.amount}
                            </p>
                            <p className="text-xs text-muted-foreground">{tx.status}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {/* Security Settings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-5 bg-gradient-to-br from-background to-muted/20 border-border/50">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <HiShieldCheck className="w-3 h-3 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">Security Settings</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Balance Visibility</p>
                        <p className="text-xs text-muted-foreground">Hide/show wallet balances</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowBalances(!showBalances)}
                        className="p-2"
                      >
                        {showBalances ? <HiEyeOff className="w-4 h-4" /> : <HiEye className="w-4 h-4" />}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
                        <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Enable 2FA
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}