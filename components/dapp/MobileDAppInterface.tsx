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
  HiCog,
  HiCheckCircle
} from "react-icons/hi"
import ChartAnalysis from "./ChartAnalysis"
import DepositContainer from "./DepositContainer"
import Image from "next/image"

type ActiveSection = 'overview' | 'wallet' | 'activity' | 'profile' | 'settings'

export default function MobileDAppInterface() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('overview')
  const [showBalances, setShowBalances] = useState(true)
  const [showTradingActivity, setShowTradingActivity] = useState(false)

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: HiHome },
    { id: 'wallet', label: 'Wallet', icon: HiCash },
    { id: 'activity', label: 'Activity', icon: HiClock },
    { id: 'profile', label: 'Profile', icon: HiShieldCheck },
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

      {/* Key Stats */}
      <div className="px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="grid grid-cols-3 gap-3">
            <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                  <HiCurrencyDollar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">Total Pool</p>
                <p className="text-lg font-bold text-foreground">$2.45M</p>
                <p className="text-xs text-green-500 mt-1">+2.3%</p>
              </div>
            </Card>
            
            <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                  <HiTrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">Daily P/L</p>
                <p className="text-lg font-bold text-foreground">+$1,234</p>
                <p className="text-xs text-green-500 mt-1">+0.8%</p>
              </div>
            </Card>

            <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                  <HiChartBar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">Current ROI</p>
                <p className="text-lg font-bold text-foreground">+24.5%</p>
                <p className="text-xs text-green-500 mt-1">+1.2%</p>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Content based on activeSection */}
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Portfolio Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 mb-4">
                    <CardTitle className="text-base font-semibold text-foreground">Portfolio Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3">
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
                          <p className="text-xs text-muted-foreground">USDT</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {showBalances ? "$8,450.00" : "••••••"}
                        </p>
                        <p className="text-xs text-green-500">+2.1%</p>
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
                          <p className="text-xs text-muted-foreground">ETH</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {showBalances ? "1.25 ETH" : "••••••"}
                        </p>
                        <p className="text-xs text-green-500">+1.8%</p>
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
                          <p className="text-xs text-muted-foreground">BNB</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {showBalances ? "4.2 BNB" : "••••••"}
                        </p>
                        <p className="text-xs text-green-500">+3.2%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Deposit Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <DepositContainer isMobile={true} />
              </motion.div>

              {/* Chart Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
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
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 mb-4">
                  <CardTitle className="text-base font-semibold text-foreground">Wallet Balances</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
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
                          <p className="text-xs text-muted-foreground">USDT</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {showBalances ? "$8,450.00" : "••••••"}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">+2.1%</p>
                      </div>
                    </div>

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
                          <p className="text-xs text-muted-foreground">ETH</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {showBalances ? "1.25 ETH" : "••••••"}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">+1.8%</p>
                      </div>
                    </div>

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
                          <p className="text-xs text-muted-foreground">BNB</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {showBalances ? "4.2 BNB" : "••••••"}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">+3.2%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeSection === 'activity' && (
            <motion.div
              key="activity"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Transaction History */}
              <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 mb-4">
                  <CardTitle className="text-base font-semibold text-foreground">Transaction History</CardTitle>
                  <Button variant="outline" size="sm" className="text-xs">
                    <HiRefresh className="w-3 h-3 mr-1" />
                    Refresh
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
                    {/* Sample Transaction 1 */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                          <HiPlus className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Deposit</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600 dark:text-green-400">+1,000 USDT</p>
                        <p className="text-xs text-muted-foreground">$1,000.00</p>
                      </div>
                    </div>

                    {/* Sample Transaction 2 */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <HiTrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Yield Earned</p>
                          <p className="text-xs text-muted-foreground">5 hours ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600 dark:text-green-400">+$24.50</p>
                        <p className="text-xs text-muted-foreground">Daily yield</p>
                      </div>
                    </div>

                    {/* Sample Transaction 3 */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                          <HiMinus className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Withdrawal</p>
                          <p className="text-xs text-muted-foreground">1 day ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-red-600 dark:text-red-400">-0.5 ETH</p>
                        <p className="text-xs text-muted-foreground">$1,250.00</p>
                      </div>
                    </div>

                    {/* Sample Transaction 4 */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                          <HiPlus className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Deposit</p>
                          <p className="text-xs text-muted-foreground">2 days ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600 dark:text-green-400">+2.1 BNB</p>
                        <p className="text-xs text-muted-foreground">$840.00</p>
                      </div>
                    </div>

                    {/* Sample Transaction 5 */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <HiTrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Yield Earned</p>
                          <p className="text-xs text-muted-foreground">3 days ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600 dark:text-green-400">+$18.75</p>
                        <p className="text-xs text-muted-foreground">Daily yield</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trading Activity */}
              <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 mb-4">
                  <CardTitle className="text-base font-semibold text-foreground">Trading Activity</CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={() => setShowTradingActivity(!showTradingActivity)}
                  >
                    {showTradingActivity ? (
                      <>
                        <HiChevronUp className="w-3 h-3 mr-1" />
                        Hide
                      </>
                    ) : (
                      <>
                        <HiChevronDown className="w-3 h-3 mr-1" />
                        Show All
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
                    {/* Sample Trading Activity 1 */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                          <HiArrowUp className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">ETH/USDT Trade</p>
                          <p className="text-xs text-muted-foreground">4 hours ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600 dark:text-green-400">+2.1%</p>
                        <p className="text-xs text-muted-foreground">$45.20 profit</p>
                      </div>
                    </div>

                    {/* Sample Trading Activity 2 */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                          <HiArrowUp className="w-4 h-4 text-red-600 dark:text-red-400 rotate-180" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">BNB/USDT Trade</p>
                          <p className="text-xs text-muted-foreground">6 hours ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-red-600 dark:text-red-400">-1.2%</p>
                        <p className="text-xs text-muted-foreground">$12.50 loss</p>
                      </div>
                    </div>

                    {/* Expandable Trading Activities */}
                    {showTradingActivity && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        {/* Sample Trading Activity 3 */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <HiArrowUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">USDT/ETH Trade</p>
                              <p className="text-xs text-muted-foreground">1 day ago</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-green-600 dark:text-green-400">+3.4%</p>
                            <p className="text-xs text-muted-foreground">$78.90 profit</p>
                          </div>
                        </div>

                        {/* Sample Trading Activity 4 */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                              <HiArrowUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">BNB/ETH Trade</p>
                              <p className="text-xs text-muted-foreground">2 days ago</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-green-600 dark:text-green-400">+1.8%</p>
                            <p className="text-xs text-muted-foreground">$32.15 profit</p>
                          </div>
                        </div>

                        {/* Sample Trading Activity 5 */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                              <HiArrowUp className="w-4 h-4 text-red-600 dark:text-red-400 rotate-180" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">ETH/BNB Trade</p>
                              <p className="text-xs text-muted-foreground">3 days ago</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-red-600 dark:text-red-400">-0.8%</p>
                            <p className="text-xs text-muted-foreground">$8.75 loss</p>
                          </div>
                        </div>

                        {/* Sample Trading Activity 6 */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <HiArrowUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">USDT/BNB Trade</p>
                              <p className="text-xs text-muted-foreground">4 days ago</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-green-600 dark:text-green-400">+2.7%</p>
                            <p className="text-xs text-muted-foreground">$56.30 profit</p>
                          </div>
                        </div>

                        {/* Sample Trading Activity 7 */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                              <HiArrowUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">ETH/USDT Trade</p>
                              <p className="text-xs text-muted-foreground">5 days ago</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-green-600 dark:text-green-400">+4.2%</p>
                            <p className="text-xs text-muted-foreground">$89.45 profit</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeSection === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* User Profile */}
              <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 mb-4">
                  <CardTitle className="text-base font-semibold text-foreground">Profile</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/70 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">JD</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">John Doe</h3>
                      <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                      <p className="text-xs text-muted-foreground">Member since Jan 2024</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <HiShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Account Status</p>
                          <p className="text-xs text-muted-foreground">Verified</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600 dark:text-green-400">Active</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                          <HiTrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Trading Level</p>
                          <p className="text-xs text-muted-foreground">Advanced</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">Level 3</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                          <HiCurrencyDollar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Total Invested</p>
                          <p className="text-xs text-muted-foreground">Lifetime</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">$15,420</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                          <HiChartBar className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Total Returns</p>
                          <p className="text-xs text-muted-foreground">All time</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600 dark:text-green-400">+$3,780</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 mb-4">
                  <CardTitle className="text-base font-semibold text-foreground">Security</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
                        <p className="text-xs text-muted-foreground">Add extra security</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">Biometric Login</p>
                        <p className="text-xs text-muted-foreground">Use fingerprint/face ID</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <HiCheckCircle className="w-4 h-4 mr-1" />
                        Enabled
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">Auto-Lock</p>
                        <p className="text-xs text-muted-foreground">Lock after 5 minutes</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <HiCheckCircle className="w-4 h-4 mr-1" />
                        On
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Preferences */}
              <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 mb-4">
                  <CardTitle className="text-base font-semibold text-foreground">Preferences</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">Push Notifications</p>
                        <p className="text-xs text-muted-foreground">Price alerts & updates</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <HiCheckCircle className="w-4 h-4 mr-1" />
                        On
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">Email Notifications</p>
                        <p className="text-xs text-muted-foreground">Weekly reports</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <HiCheckCircle className="w-4 h-4 mr-1" />
                        On
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">Dark Mode</p>
                        <p className="text-xs text-muted-foreground">System preference</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Auto
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeSection === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <Card className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 mb-4">
                  <CardTitle className="text-base font-semibold text-foreground">Settings</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3">
                      <span className="text-sm text-foreground">Show Balances</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowBalances(!showBalances)}
                      >
                        {showBalances ? <HiEyeOff className="w-4 h-4" /> : <HiEye className="w-4 h-4" />}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <span className="text-sm text-foreground">Notifications</span>
                      <Button variant="outline" size="sm">
                        <HiCheckCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation (Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg">
        <div className="flex justify-around py-2">
          {navigationItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center text-xs font-medium px-3 py-1 rounded-lg transition-colors duration-200
                ${activeSection === item.id
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span>{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}