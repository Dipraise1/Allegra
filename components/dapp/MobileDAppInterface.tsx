"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  HiHome, 
  HiTrendingUp, 
  HiCash, 
  HiClock, 
  HiChartBar,
  HiPlus,
  HiMinus,
  HiArrowUp,
  HiRefresh,
  HiCog,
  HiShieldCheck,
  HiCurrencyDollar
} from "react-icons/hi"
import Image from "next/image"
import ChartAnalysis from "./ChartAnalysis"

type ActiveSection = 'overview' | 'wallet' | 'activity' | 'settings'

export default function MobileDAppInterface() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('overview')

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
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/logo-transparent.png"
                  alt="ALLEGRA Protocol Logo"
                  width={32}
                  height={32}
                  className="object-contain logo-white"
                />
              </div>
              <span className="text-lg font-bold gradient-text">ALLEGRA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                <HiShieldCheck className="w-3 h-3 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Stats - Mobile Optimized */}
      <div className="px-3 py-4">
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Card className="p-3">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Total Pool</p>
              <p className="text-sm font-bold text-foreground">$2.45M</p>
            </div>
          </Card>
          <Card className="p-3">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Daily P/L</p>
              <p className="text-sm font-bold text-green-500">+$45.2K</p>
            </div>
          </Card>
          <Card className="p-3">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">ROI</p>
              <p className="text-sm font-bold text-foreground">12.4%</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Mobile Navigation Tabs */}
      <div className="px-3 mb-4">
        <div className="flex space-x-1 bg-muted rounded-lg p-1">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as ActiveSection)}
              className={`flex-1 flex items-center justify-center space-x-1 py-2 px-3 rounded-md text-xs font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden xs:inline">{item.label}</span>
            </button>
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
              {/* Portfolio Overview */}
              <Card className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-foreground">Portfolio Overview</h3>
                  <HiRefresh className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Total Value</p>
                    <p className="text-lg font-bold text-foreground">$12,450</p>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">24h Change</p>
                    <p className="text-lg font-bold text-green-500">+$234</p>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button className="h-12 flex items-center space-x-2">
                    <HiPlus className="w-4 h-4" />
                    <span className="text-sm">Deposit</span>
                  </Button>
                  <Button variant="outline" className="h-12 flex items-center space-x-2">
                    <HiMinus className="w-4 h-4" />
                    <span className="text-sm">Withdraw</span>
                  </Button>
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <HiArrowUp className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Deposit</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                    <p className="text-sm font-bold text-green-500">+$1,000</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <HiTrendingUp className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Daily Rewards</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                    <p className="text-sm font-bold text-foreground">+$45.23</p>
                  </div>
                </div>
              </Card>
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
              {/* Wallet Balance */}
              <Card className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Wallet Balance</h3>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground mb-1">$12,450.00</p>
                  <p className="text-xs text-muted-foreground">USDT Balance</p>
                </div>
              </Card>

              {/* Transaction Actions */}
              <Card className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Transactions</h3>
                <div className="space-y-3">
                  <Button className="w-full h-12 flex items-center justify-center space-x-2">
                    <HiPlus className="w-4 h-4" />
                    <span>Deposit USDT</span>
                  </Button>
                  <Button variant="outline" className="w-full h-12 flex items-center justify-center space-x-2">
                    <HiMinus className="w-4 h-4" />
                    <span>Withdraw USDT</span>
                  </Button>
                </div>
              </Card>

              {/* Transaction History */}
              <Card className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Recent Transactions</h3>
                <div className="space-y-3">
                  {[
                    { type: 'Deposit', amount: '+$1,000', time: '2h ago', status: 'Completed' },
                    { type: 'Rewards', amount: '+$45.23', time: '1d ago', status: 'Completed' },
                    { type: 'Withdraw', amount: '-$500', time: '3d ago', status: 'Completed' },
                  ].map((tx, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-foreground">{tx.type}</p>
                        <p className="text-xs text-muted-foreground">{tx.time}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-bold ${tx.type === 'Withdraw' ? 'text-red-500' : 'text-green-500'}`}>
                          {tx.amount}
                        </p>
                        <p className="text-xs text-muted-foreground">{tx.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
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
              {/* Live Activity */}
              <Card className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Live Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: 'Fund Investment', amount: '$2,450,000', time: '2 min ago', type: 'investment' },
                    { action: 'Liquidity Pool Growth', amount: '+5.2%', time: '5 min ago', type: 'growth' },
                    { action: 'Trading Activity', amount: '127 trades', time: '10 min ago', type: 'trading' },
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-muted/10 rounded-lg"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'investment' ? 'bg-blue-500/20' :
                        activity.type === 'growth' ? 'bg-green-500/20' : 'bg-purple-500/20'
                      }`}>
                        <HiChartBar className={`w-4 h-4 ${
                          activity.type === 'investment' ? 'text-blue-500' :
                          activity.type === 'growth' ? 'text-green-500' : 'text-purple-500'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                      <p className="text-sm font-bold text-foreground">{activity.amount}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Chart Analysis */}
              <ChartAnalysis isMobile={true} />
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
              {/* Settings Options */}
              <Card className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Account Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Auto-compound</span>
                    <div className="w-10 h-6 bg-muted rounded-full relative">
                      <div className="w-4 h-4 bg-foreground rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Notifications</span>
                    <div className="w-10 h-6 bg-muted rounded-full relative">
                      <div className="w-4 h-4 bg-foreground rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Dark Mode</span>
                    <div className="w-10 h-6 bg-muted rounded-full relative">
                      <div className="w-4 h-4 bg-foreground rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Security */}
              <Card className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Security</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full h-10 text-sm">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full h-10 text-sm">
                    Enable 2FA
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="flex">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as ActiveSection)}
              className={`flex-1 flex flex-col items-center py-2 px-1 ${
                activeSection === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
