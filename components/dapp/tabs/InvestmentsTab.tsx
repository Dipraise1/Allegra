"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HiClock, HiTrendingUp, HiTrendingDown, HiExternalLink, HiRefresh, HiChevronDown } from "react-icons/hi"
import { FaCoins, FaChartLine, FaHistory } from "react-icons/fa"
import { formatDistanceToNow, format } from "date-fns"

interface Investment {
  id: string
  depositAmount: number
  depositDate: Date
  lockEndDate: Date
  currentValue: number
  accumulatedRewards: number
  strategy: string
  status: "locked" | "unlocked" | "withdrawn"
  tradeHistory: Trade[]
}

interface Trade {
  id: string
  type: "arbitrage" | "yield" | "swap"
  pair: string
  amount: number
  profit: number
  timestamp: Date
  txHash: string
  status: "completed" | "pending" | "failed"
}

export function InvestmentsTab() {
  const [investments, setInvestments] = useState<Investment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchInvestments()
    
    // Update timers every second
    const interval = setInterval(() => {
      setInvestments(prev => prev.map(inv => ({ ...inv })))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const fetchInvestments = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockInvestments: Investment[] = [
        {
          id: "1",
          depositAmount: 5000,
          depositDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
          lockEndDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
          currentValue: 5250.75,
          accumulatedRewards: 250.75,
          strategy: "Arbitrage-focused",
          status: "locked",
          tradeHistory: [
            {
              id: "tx1",
              type: "arbitrage",
              pair: "ALLEGRA/USDT",
              amount: 2500,
              profit: 45.23,
              timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
              txHash: "0x1234...5678",
              status: "completed"
            },
            {
              id: "tx2",
              type: "yield",
              pair: "ALLEGRA-ETH",
              amount: 1500,
              profit: 12.45,
              timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
              txHash: "0x2345...6789",
              status: "completed"
            }
          ]
        },
        {
          id: "2",
          depositAmount: 3000,
          depositDate: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000), // 25 days ago
          lockEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
          currentValue: 3180.50,
          accumulatedRewards: 180.50,
          strategy: "Yield-focused",
          status: "locked",
          tradeHistory: [
            {
              id: "tx3",
              type: "yield",
              pair: "ALLEGRA/USDC",
              amount: 3000,
              profit: 25.30,
              timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
              txHash: "0x3456...7890",
              status: "completed"
            }
          ]
        },
        {
          id: "3",
          depositAmount: 2000,
          depositDate: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000), // 35 days ago
          lockEndDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago (unlocked)
          currentValue: 2120.25,
          accumulatedRewards: 120.25,
          strategy: "Balanced",
          status: "unlocked",
          tradeHistory: [
            {
              id: "tx4",
              type: "swap",
              pair: "ALLEGRA/BTC",
              amount: 1000,
              profit: 35.75,
              timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
              txHash: "0x4567...8901",
              status: "completed"
            }
          ]
        }
      ]
      
      setInvestments(mockInvestments)
    } catch (error) {
      console.error("Failed to fetch investments:", error)
    } finally {
      setLoading(false)
    }
  }

  const getTimeRemaining = (endDate: Date) => {
    const now = new Date()
    const diff = endDate.getTime() - now.getTime()
    
    if (diff <= 0) {
      return "Unlocked"
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    return `${days}d ${hours}h ${minutes}m`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "locked":
        return "text-orange-600 dark:text-orange-400"
      case "unlocked":
        return "text-green-600 dark:text-green-400"
      case "withdrawn":
        return "text-gray-600 dark:text-gray-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  const getTradeTypeIcon = (type: string) => {
    switch (type) {
      case "arbitrage":
        return <HiTrendingUp className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      case "yield":
        return <FaCoins className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      case "swap":
        return <FaChartLine className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      default:
        return <FaHistory className="h-4 w-4 text-gray-600 dark:text-gray-300" />
    }
  }

  const getTradeStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 dark:text-green-400"
      case "pending":
        return "text-yellow-600 dark:text-yellow-400"
      case "failed":
        return "text-red-600 dark:text-red-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="glass">
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Your Investments</h2>
          <p className="text-muted-foreground">
            Track your deposits, lock periods, and performance
          </p>
        </div>
        <Button
          variant="outline"
          onClick={fetchInvestments}
          className="flex items-center space-x-2"
        >
          <HiRefresh className="h-4 w-4" />
          <span>Refresh</span>
        </Button>
      </div>

      {/* Investments List */}
      <div className="space-y-4">
        {investments.map((investment, index) => (
          <motion.div
            key={investment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                  {/* Deposit Amount */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Deposit Amount</p>
                    <p className="text-lg font-semibold">${investment.depositAmount.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(investment.depositDate, 'MMM dd, yyyy')}
                    </p>
                  </div>

                  {/* Lock Timer */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Lock Timer</p>
                    <div className="flex items-center space-x-2">
                      <HiClock className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      <p className="text-lg font-semibold">
                        {getTimeRemaining(investment.lockEndDate)}
                      </p>
                    </div>
                    <p className={`text-xs ${getStatusColor(investment.status)}`}>
                      {investment.status.charAt(0).toUpperCase() + investment.status.slice(1)}
                    </p>
                  </div>

                  {/* Current Value */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Current Value</p>
                    <p className="text-lg font-semibold">${investment.currentValue.toLocaleString()}</p>
                    <p className="text-xs text-green-600 dark:text-green-400">
                      +${(investment.currentValue - investment.depositAmount).toFixed(2)}
                    </p>
                  </div>

                  {/* Accumulated Rewards */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Rewards</p>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                      ${investment.accumulatedRewards.toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {((investment.accumulatedRewards / investment.depositAmount) * 100).toFixed(2)}% return
                    </p>
                  </div>

                  {/* Strategy */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Strategy</p>
                    <p className="text-lg font-semibold">{investment.strategy}</p>
                    <p className="text-xs text-muted-foreground">AI-optimized</p>
                  </div>
                </div>

                {/* Expandable Details */}
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${investment.id}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center space-x-2">
                        <FaHistory className="h-4 w-4" />
                        <span>Trade History & Details</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {/* Trade History */}
                        <div>
                          <h4 className="font-semibold mb-3">Recent Trades</h4>
                          <div className="space-y-2">
                            {investment.tradeHistory.map((trade) => (
                              <div
                                key={trade.id}
                                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                              >
                                <div className="flex items-center space-x-3">
                                  {getTradeTypeIcon(trade.type)}
                                  <div>
                                    <p className="font-medium capitalize">{trade.type}</p>
                                    <p className="text-sm text-muted-foreground">{trade.pair}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="font-semibold">+${trade.profit.toFixed(2)}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {formatDistanceToNow(trade.timestamp, { addSuffix: true })}
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className={`text-xs ${getTradeStatusColor(trade.status)}`}>
                                    {trade.status}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => window.open(`https://etherscan.io/tx/${trade.txHash}`, '_blank')}
                                    className="h-6 w-6 p-0"
                                  >
                                    <HiExternalLink className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                          {investment.status === "unlocked" && (
                            <Button variant="gradient" size="sm">
                              Withdraw Funds
                            </Button>
                          )}
                          {investment.status === "locked" && (
                            <Button variant="outline" size="sm" disabled>
                              Locked for {getTimeRemaining(investment.lockEndDate)}
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            View Full History
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle>Investment Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ${investments.reduce((sum, inv) => sum + inv.depositAmount, 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total Deposited</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  ${investments.reduce((sum, inv) => sum + inv.accumulatedRewards, 0).toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">Total Rewards</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {investments.filter(inv => inv.status === "locked").length}
                </p>
                <p className="text-sm text-muted-foreground">Active Locks</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {investments.filter(inv => inv.status === "unlocked").length}
                </p>
                <p className="text-sm text-muted-foreground">Ready to Withdraw</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
