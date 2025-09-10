"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiTrendingUp, HiTrendingDown, HiRefresh, HiPlus, HiInformationCircle } from "react-icons/hi"
import { FaChartLine, FaCoins, FaShieldAlt } from "react-icons/fa"
import Image from "next/image"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface OverviewTabProps {
  onMakeDeposit: () => void
}

interface Transaction {
  id: string
  type: 'deposit' | 'withdrawal' | 'swap'
  token: string
  amount: string
  value: string
  timestamp: Date
  status: 'pending' | 'completed' | 'failed'
  user: string
}

function LiveTransactionsContainer() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLive, setIsLive] = useState(true)

  useEffect(() => {
    // Generate initial transactions
    const generateTransaction = (): Transaction => {
      const types: Transaction['type'][] = ['deposit', 'withdrawal', 'swap']
      const tokens = ['ETH', 'USDT', 'BNB']
      const statuses: Transaction['status'][] = ['pending', 'completed', 'failed']
      const users = ['0x742d...8b6', '0x1a2b...c3d', '0x9f8e...7d6', '0x5c4d...3e2']
      
      return {
        id: Math.random().toString(36).substr(2, 9),
        type: types[Math.floor(Math.random() * types.length)],
        token: tokens[Math.floor(Math.random() * tokens.length)],
        amount: (Math.random() * 10).toFixed(4),
        value: `$${(Math.random() * 50000).toFixed(2)}`,
        timestamp: new Date(),
        status: statuses[Math.floor(Math.random() * statuses.length)],
        user: users[Math.floor(Math.random() * users.length)]
      }
    }

    // Initial transactions
    const initialTransactions = Array.from({ length: 8 }, generateTransaction)
    setTransactions(initialTransactions)

    // Add new transactions every 3-8 seconds
    const interval = setInterval(() => {
      if (isLive) {
        const newTransaction = generateTransaction()
        setTransactions(prev => [newTransaction, ...prev.slice(0, 9)]) // Keep only 10 transactions
      }
    }, Math.random() * 5000 + 3000)

    return () => clearInterval(interval)
  }, [isLive])

  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'deposit':
        return <HiPlus className="h-4 w-4 text-green-600" />
      case 'withdrawal':
        return <HiTrendingDown className="h-4 w-4 text-red-600" />
      case 'swap':
        return <HiRefresh className="h-4 w-4 text-blue-600" />
    }
  }

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 dark:text-green-400'
      case 'pending':
        return 'text-yellow-600 dark:text-yellow-400'
      case 'failed':
        return 'text-red-600 dark:text-red-400'
    }
  }

  const formatTime = (timestamp: Date) => {
    const now = new Date()
    const diff = now.getTime() - timestamp.getTime()
    const seconds = Math.floor(diff / 1000)
    
    if (seconds < 60) return `${seconds}s ago`
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    return `${Math.floor(seconds / 3600)}h ago`
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="sticky top-6"
    >
      <Card className="glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Transactions</span>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLive(!isLive)}
              className="text-xs"
            >
              {isLive ? 'Pause' : 'Resume'}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="max-h-96 overflow-y-auto">
            {transactions.map((tx, index) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getTransactionIcon(tx.type)}
                    <span className="text-sm font-medium capitalize">{tx.type}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(tx.status)} bg-opacity-20`}>
                      {tx.status}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formatTime(tx.timestamp)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">
                      {tx.amount} {tx.token}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {tx.value}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground font-mono">
                      {tx.user}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {transactions.length === 0 && (
            <div className="p-8 text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiRefresh className="h-6 w-6 text-gray-400" />
              </div>
              <p className="text-sm text-muted-foreground">No transactions yet</p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface Metrics {
  personalTVL: number
  currentAPY: number
  reserveFundSize: number
  dailyPL: number
  totalReturns: number
  activeInvestments: number
}

export function OverviewTab({ onMakeDeposit }: OverviewTabProps) {
  const [metrics, setMetrics] = useState<Metrics>({
    personalTVL: 0,
    currentAPY: 0,
    reserveFundSize: 0,
    dailyPL: 0,
    totalReturns: 0,
    activeInvestments: 0
  })
  const [performanceData, setPerformanceData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [cryptoLoading, setCryptoLoading] = useState(true)
  const [cryptoPrices, setCryptoPrices] = useState({
    BTC: { 
      price: 43250, 
      change: 2.3, 
      symbol: 'BTC', 
      name: 'Bitcoin',
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      color: 'orange' 
    },
    ETH: { 
      price: 2650, 
      change: 1.8, 
      symbol: 'ETH', 
      name: 'Ethereum',
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      color: 'blue' 
    },
    USDT: { 
      price: 1.00, 
      change: 0.0, 
      symbol: 'USDT', 
      name: 'Tether',
      image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      color: 'green' 
    },
    BNB: { 
      price: 315, 
      change: -0.5, 
      symbol: 'BNB', 
      name: 'BNB',
      image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
      color: 'yellow' 
    },
    MATIC: { 
      price: 0.85, 
      change: 3.2, 
      symbol: 'MATIC', 
      name: 'Polygon',
      image: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png',
      color: 'purple' 
    }
  })

  useEffect(() => {
    fetchMetrics()
    fetchPerformanceData()
    fetchLiveCryptoData()
    
    // Fetch live crypto data every 30 seconds
    const priceInterval = setInterval(() => {
      fetchLiveCryptoData()
    }, 30000)

    return () => clearInterval(priceInterval)
  }, [])

  const fetchLiveCryptoData = async () => {
    try {
      setCryptoLoading(true)
      // Using CoinGecko API for live data
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,matic-network&vs_currencies=usd&include_24hr_change=true'
      )
      
      if (!response.ok) {
        throw new Error('Failed to fetch crypto data')
      }
      
      const data = await response.json()
      
      setCryptoPrices(prev => ({
        ...prev,
        BTC: {
          ...prev.BTC,
          price: data.bitcoin?.usd || prev.BTC.price,
          change: data.bitcoin?.usd_24h_change || prev.BTC.change
        },
        ETH: {
          ...prev.ETH,
          price: data.ethereum?.usd || prev.ETH.price,
          change: data.ethereum?.usd_24h_change || prev.ETH.change
        },
        USDT: {
          ...prev.USDT,
          price: data.tether?.usd || prev.USDT.price,
          change: data.tether?.usd_24h_change || prev.USDT.change
        },
        BNB: {
          ...prev.BNB,
          price: data.binancecoin?.usd || prev.BNB.price,
          change: data.binancecoin?.usd_24h_change || prev.BNB.change
        },
        MATIC: {
          ...prev.MATIC,
          price: data['matic-network']?.usd || prev.MATIC.price,
          change: data['matic-network']?.usd_24h_change || prev.MATIC.change
        }
      }))
    } catch (error) {
      console.error('Failed to fetch live crypto data:', error)
      // Fallback to simulated data if API fails
      setCryptoPrices(prev => {
        const updated = { ...prev }
        Object.keys(updated).forEach(key => {
          const coin = updated[key as keyof typeof updated]
          const fluctuation = (Math.random() - 0.5) * 0.02
          const newPrice = coin.price * (1 + fluctuation)
          const newChange = (Math.random() - 0.5) * 4
          
          updated[key as keyof typeof updated] = {
            ...coin,
            price: Math.round(newPrice * 100) / 100,
            change: Math.round(newChange * 10) / 10
          }
        })
        return updated
      })
    } finally {
      setCryptoLoading(false)
    }
  }

  const fetchMetrics = async () => {
    try {
      // Simulate API call to fetch on-chain data
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMetrics({
        personalTVL: 12500.75,
        currentAPY: 12.5,
        reserveFundSize: 2500000,
        dailyPL: 45.23,
        totalReturns: 1250.50,
        activeInvestments: 3
      })
    } catch (error) {
      console.error("Failed to fetch metrics:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchPerformanceData = () => {
    // Generate realistic performance data for the last 30 days
    const labels: string[] = []
    const data: number[] = []
    const today = new Date()
    
    // Start with a base value and simulate realistic market movements
    let currentValue = 10000 // Starting portfolio value
    const dailyReturns: number[] = []
    
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
      
      // Simulate realistic daily returns (0.1% to 4% as per whitepaper)
      // Add some market correlation and volatility
      const marketTrend = Math.sin((29 - i) * 0.1) * 0.02 // Market cycle
      const volatility = (Math.random() - 0.5) * 0.03 // ±1.5% daily volatility
      const aiAlpha = Math.random() * 0.02 + 0.005 // AI-generated alpha (0.5% to 2.5%)
      
      const dailyReturn = marketTrend + volatility + aiAlpha
      dailyReturns.push(dailyReturn)
      
      // Apply compound effect (but remember: non-compounding as per protocol)
      currentValue = currentValue * (1 + dailyReturn)
      data.push(Math.round(currentValue * 100) / 100)
    }

    // Calculate performance metrics
    const totalReturn = ((data[data.length - 1] - data[0]) / data[0]) * 100
    const maxDrawdown = Math.min(...data.map((value, index) => 
      ((value - Math.max(...data.slice(0, index + 1))) / Math.max(...data.slice(0, index + 1))) * 100
    ))
    const volatility = Math.sqrt(dailyReturns.reduce((sum, ret) => sum + Math.pow(ret - (dailyReturns.reduce((a, b) => a + b) / dailyReturns.length), 2), 0) / dailyReturns.length) * Math.sqrt(365) * 100

    setPerformanceData({
      labels,
      datasets: [
        {
          label: 'Portfolio Value (USDT)',
          data,
          borderColor: totalReturn >= 0 ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)',
          backgroundColor: totalReturn >= 0 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.2,
          pointBackgroundColor: totalReturn >= 0 ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: totalReturn >= 0 ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)',
          pointHoverBorderColor: '#fff',
          pointHoverBorderWidth: 3
        }
      ]
    })
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        titleFont: {
          size: 14,
          weight: 'bold' as const
        },
        bodyFont: {
          size: 13
        },
        callbacks: {
          title: function(context: any) {
            return context[0].label
          },
          label: function(context: any) {
            const value = context.parsed.y
            const change = context.dataIndex > 0 ? 
              ((value - context.dataset.data[context.dataIndex - 1]) / context.dataset.data[context.dataIndex - 1] * 100) : 0
            return [
              `Portfolio Value: $${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
              `Daily Change: ${change >= 0 ? '+' : ''}${change.toFixed(2)}%`
            ]
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#6B7280'
        }
      },
      y: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)'
        },
        ticks: {
          color: '#6B7280',
          callback: function(value: any) {
            return `$${value.toFixed(0)}`
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="glass">
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="glass">
          <CardContent className="p-6">
            <div className="animate-pulse">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glass hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Personal TVL</p>
                  <p className="text-3xl font-bold">${metrics.personalTVL.toLocaleString()}</p>
                </div>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <FaCoins className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Current APY</p>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {metrics.currentAPY}%
                  </p>
                </div>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <HiTrendingUp className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Reserve Fund</p>
                  <p className="text-3xl font-bold">${(metrics.reserveFundSize / 1000000).toFixed(1)}M</p>
                </div>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <FaShieldAlt className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Daily P/L</p>
                  <p className={`text-3xl font-bold ${metrics.dailyPL >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {metrics.dailyPL >= 0 ? '+' : ''}${metrics.dailyPL.toFixed(2)}
                  </p>
                </div>
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${metrics.dailyPL >= 0 ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                  {metrics.dailyPL >= 0 ? (
                    <HiTrendingUp className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                  ) : (
                    <HiTrendingDown className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <FaChartLine className="h-5 w-5" />
                <span>Performance History</span>
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={fetchPerformanceData}
                className="flex items-center space-x-2"
              >
                <HiRefresh className="h-4 w-4" />
                <span>Refresh</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              {performanceData && (
                <Line data={performanceData} options={chartOptions} />
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="gradient"
                size="lg"
                onClick={onMakeDeposit}
                className="h-16 flex items-center justify-center space-x-2"
              >
                <HiPlus className="h-6 w-6" />
                <span>Make a Deposit</span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="h-16 flex items-center justify-center space-x-2"
              >
                <HiInformationCircle className="h-6 w-6" />
                <span>View Documentation</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>


      {/* Live Crypto Data Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8"
      >
        <Card className="glass">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4 overflow-hidden">
              <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground whitespace-nowrap">
                <span>Live Prices:</span>
                {cryptoLoading && (
                  <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                )}
              </div>
              <div className="flex space-x-8 animate-marquee">
                {Object.entries(cryptoPrices).map(([symbol, data]) => (
                  <div key={symbol} className="flex items-center space-x-2 whitespace-nowrap">
                    <div className="w-6 h-6 relative">
                      <Image
                        src={data.image}
                        alt={data.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain rounded-full"
                        unoptimized
                      />
                    </div>
                    <span className="text-sm font-semibold">{symbol}</span>
                    <span className="text-sm">${data.price.toLocaleString()}</span>
                    <span className={`text-xs ${data.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {data.change >= 0 ? '+' : ''}{data.change.toFixed(2)}%
                    </span>
                  </div>
                ))}
                {Object.entries(cryptoPrices).map(([symbol, data]) => (
                  <div key={`${symbol}-2`} className="flex items-center space-x-2 whitespace-nowrap">
                    <div className="w-6 h-6 relative">
                      <Image
                        src={data.image}
                        alt={data.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain rounded-full"
                        unoptimized
                      />
                    </div>
                    <span className="text-sm font-semibold">{symbol}</span>
                    <span className="text-sm">${data.price.toLocaleString()}</span>
                    <span className={`text-xs ${data.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {data.change >= 0 ? '+' : ''}{data.change.toFixed(2)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      </div>

      {/* Live Transactions Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        <LiveTransactionsContainer />
        
        {/* Investment Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass">
            <CardHeader>
              <CardTitle>Investment Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Active Investments */}
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  $1,250.50
                </p>
                <p className="text-sm text-muted-foreground">Active Investments</p>
              </div>
              
              {/* Total Returns */}
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  $2,847.50
                </p>
                <p className="text-sm text-muted-foreground">Total Returns</p>
              </div>
              
              {/* Average Lock Period */}
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  30 Days
                </p>
                <p className="text-sm text-muted-foreground">Average Lock Period</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
