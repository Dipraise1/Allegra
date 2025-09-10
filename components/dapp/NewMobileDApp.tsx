"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import { 
  WalletIcon, 
  ChartIcon, 
  CoinsIcon, 
  SettingsIcon, 
  UserIcon, 
  TrendingUpIcon, 
  PlusIcon,
  ETHIcon,
  USDTIcon,
  BNBIcon,
  XIcon,
  ShieldIcon
} from "@/lib/monogramIcons"
import { HiLink, HiUserAdd, HiInformationCircle } from "react-icons/hi"
import { FaUsers, FaGift } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

interface ReferralData {
  referralCode: string
  referralLink: string
  totalReferrals: number
  totalReferralEarnings: number
  pendingReferralRewards: number
}

interface ReferralReward {
  id: string
  referrerAddress: string
  refereeAddress: string
  amount: number
  earnedDate: Date
  status: "pending" | "vested" | "claimed"
  vestingEndDate: Date
}

export default function NewMobileDApp() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [chartData, setChartData] = useState<any>(null)
  const [showDepositModal, setShowDepositModal] = useState(false)
  const [depositAmount, setDepositAmount] = useState("")
  const [isDepositing, setIsDepositing] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [showDepositAddressModal, setShowDepositAddressModal] = useState(false)
  const [selectedTokenForDeposit, setSelectedTokenForDeposit] = useState<{
    symbol: string
    name: string
    address: string
    chain: string
  } | null>(null)
  const [referralData, setReferralData] = useState<ReferralData>({
    referralCode: "ALLEGRA2024",
    referralLink: "https://allegra-protocol.com/ref/ALLEGRA2024",
    totalReferrals: 8,
    totalReferralEarnings: 1250.50,
    pendingReferralRewards: 450.25
  })
  const [referralRewards, setReferralRewards] = useState<ReferralReward[]>([])
  const [showReferralModal, setShowReferralModal] = useState(false)

  const tabs = [
    { id: "dashboard", label: "Home", icon: UserIcon },
    { id: "portfolio", label: "Portfolio", icon: ChartIcon },
    { id: "investments", label: "Investments", icon: CoinsIcon },
    { id: "rewards", label: "Rewards", icon: TrendingUpIcon },
    { id: "referrals", label: "Referrals", icon: FaUsers },
  ]

  const depositAddresses = {
    USDT: {
      symbol: "USDT",
      name: "Tether USD",
      address: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
      chain: "Ethereum (ERC-20)"
    },
    ETH: {
      symbol: "ETH",
      name: "Ethereum",
      address: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
      chain: "Ethereum"
    },
    BNB: {
      symbol: "BNB",
      name: "Binance Coin",
      address: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
      chain: "BSC (BEP-20)"
    }
  }

  const handleTokenClick = (tokenSymbol: keyof typeof depositAddresses) => {
    setSelectedTokenForDeposit(depositAddresses[tokenSymbol])
    setShowDepositAddressModal(true)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success("Address copied to clipboard!")
    } catch (err) {
      toast.error("Failed to copy address")
    }
  }

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralData.referralLink)
    toast.success("Referral link copied to clipboard!")
  }

  const shareReferralLink = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join ALLEGRA Protocol",
        text: "Earn rewards with ALLEGRA Protocol's advanced DeFi strategies",
        url: referralData.referralLink
      })
    } else {
      copyReferralLink()
    }
  }

  useEffect(() => {
    // Generate simple performance chart data
    const labels = []
    const data = []
    const today = new Date()
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
      
      // Simple upward trend with some volatility
      const baseValue = 12000 + (6 - i) * 50
      const volatility = (Math.random() - 0.5) * 200
      data.push(Math.round((baseValue + volatility) * 100) / 100)
    }

    setChartData({
      labels,
      datasets: [
        {
          label: 'Portfolio Value',
          data,
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6
        }
      ]
    })

    // Simulate wallet connection
    setWalletAddress("0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6")
    setIsWalletConnected(true)

    // Mock referral rewards data
    const mockReferralRewards: ReferralReward[] = [
      {
        id: "ref-1",
        referrerAddress: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
        refereeAddress: "0x1234...5678",
        amount: 75.00,
        earnedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        status: "claimed",
        vestingEndDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      },
      {
        id: "ref-2",
        referrerAddress: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
        refereeAddress: "0x8765...4321",
        amount: 125.00,
        earnedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        status: "pending",
        vestingEndDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000)
      },
      {
        id: "ref-3",
        referrerAddress: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
        refereeAddress: "0x1111...2222",
        amount: 50.25,
        earnedDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
        status: "claimed",
        vestingEndDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
      }
    ]
    
    setReferralRewards(mockReferralRewards)
  }, [])

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `$${context.parsed.y.toLocaleString()}`
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
          color: '#6B7280',
          font: {
            size: 12
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)'
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12
          },
          callback: function(value: any) {
            return '$' + (value / 1000).toFixed(0) + 'k'
          }
        }
      }
    }
  }

  const handleDeposit = async () => {
    if (!depositAmount || parseFloat(depositAmount) < 100) {
      return
    }
    
    setIsDepositing(true)
    
    // Simulate deposit process
    const steps = [
      "Connecting to wallet...",
      "Approving USDT transfer...",
      "Submitting transaction...",
      "Transaction confirmed!"
    ]
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    
    setIsDepositing(false)
    setShowDepositModal(false)
    setDepositAmount("")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Compact Header */}
      <div className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="px-3 py-2">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => window.location.href = '/'}
            >
              <div className="w-6 h-6 relative">
                <Image
                  src="/images/logo-transparent.png"
                  alt="ALLEGRA Logo"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain logo-white"
                />
              </div>
              <h1 className="text-sm font-bold gradient-text">ALLEGRA</h1>
            </motion.div>
            {isWalletConnected ? (
              <div className="flex items-center space-x-1">
                <div 
                  className="text-right cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => window.location.href = '/profile'}
                >
                  <p className="text-xs text-muted-foreground">Profile</p>
                  <p className="text-xs font-medium text-foreground">
                    {walletAddress?.slice(0, 4)}...{walletAddress?.slice(-3)}
                  </p>
                </div>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              </div>
            ) : (
              <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                <WalletIcon size="w-3 h-3" />
                Connect
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-3 py-4 pb-20">
        {activeTab === "dashboard" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-blue-600 dark:text-blue-400">Total Value</p>
                    <p className="text-lg font-bold text-blue-700 dark:text-blue-300">$12,500</p>
                  </div>
                  <CoinsIcon size="w-4 h-4" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-green-600 dark:text-green-400">APY</p>
                    <p className="text-lg font-bold text-green-700 dark:text-green-300">12.5%</p>
                  </div>
                  <TrendingUpIcon size="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            {chartData && (
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold text-foreground">7-Day Performance</h4>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">+2.3%</span>
                </div>
                <div className="h-32">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="space-y-2">
              <Button 
                className="w-full justify-start h-10 text-sm" 
                variant="outline"
                onClick={() => setShowDepositModal(true)}
              >
                <PlusIcon size="w-4 h-4" />
                Deposit Funds
              </Button>
            </div>

            {/* Recent Activity */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-foreground">Recent Activity</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <PlusIcon size="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Deposit</p>
                      <p className="text-xs text-muted-foreground">2h ago</p>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-green-600">+$1,000</p>
                </div>

                <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <TrendingUpIcon size="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Yield Earned</p>
                      <p className="text-xs text-muted-foreground">1d ago</p>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-blue-600">+$45.23</p>
                </div>

                <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <ShieldIcon size="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Reward Claimed</p>
                      <p className="text-xs text-muted-foreground">3d ago</p>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-blue-600">+$125.50</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "portfolio" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">Portfolio</h3>
              <span className="text-xs text-muted-foreground">Total: $12,500.75</span>
            </div>

            {/* Portfolio Summary */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-green-600 dark:text-green-400">Total Returns</p>
                    <p className="text-lg font-bold text-green-700 dark:text-green-300">+$1,250</p>
                  </div>
                  <TrendingUpIcon size="w-4 h-4" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-blue-600 dark:text-blue-400">Active Investments</p>
                    <p className="text-lg font-bold text-blue-700 dark:text-blue-300">3</p>
                  </div>
                  <ChartIcon size="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Transfer Out Section */}
            <Card className="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Transfer Out</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    className="h-8 flex items-center justify-center space-x-1 text-xs"
                    onClick={() => toast.success("Transfer to external wallet feature coming soon!")}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-8 flex items-center justify-center space-x-1 text-xs"
                    onClick={() => toast.success("Withdraw to bank account feature coming soon!")}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span>Withdraw</span>
                  </Button>
                </div>
                
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Available for Transfer</span>
                    <span className="font-semibold">$8,250.25</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span className="text-muted-foreground">Locked in Investments</span>
                    <span className="font-semibold">$4,250.50</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <div className="mb-2">
                <h4 className="text-xs font-semibold text-foreground mb-1">Click tokens to get deposit addresses</h4>
                <p className="text-xs text-muted-foreground">Tap any token below to view its deposit address and network details</p>
              </div>
              
              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                onClick={() => handleTokenClick('USDT')}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src="https://assets.coingecko.com/coins/images/325/large/Tether.png"
                      alt="USDT"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">USDT</p>
                    <p className="text-xs text-muted-foreground">Tether USD</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Tap for deposit address →</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">$8,450.23</p>
                  <p className="text-xs text-green-600">+2.3%</p>
                </div>
              </motion.div>

              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                onClick={() => handleTokenClick('ETH')}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src="https://assets.coingecko.com/coins/images/279/large/ethereum.png"
                      alt="ETH"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">ETH</p>
                    <p className="text-xs text-muted-foreground">Ethereum</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Tap for deposit address →</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">1.247 ETH</p>
                  <p className="text-xs text-green-600">+5.1%</p>
                </div>
              </motion.div>

              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                onClick={() => handleTokenClick('BNB')}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png"
                      alt="BNB"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">BNB</p>
                    <p className="text-xs text-muted-foreground">Binance Coin</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Tap for deposit address →</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">2.1 BNB</p>
                  <p className="text-xs text-green-600">+1.8%</p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        )}

        {activeTab === "investments" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="text-center">
              <h2 className="text-lg font-bold text-foreground mb-1">My Investments</h2>
              <p className="text-xs text-muted-foreground">Track your active investments and returns</p>
            </div>

            {/* Investment Cards */}
            <div className="space-y-2">
              <Card className="glass">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">USDT Investment</p>
                        <p className="text-xs text-muted-foreground">Locked for 30 days</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-green-600 dark:text-green-400">+12.5%</p>
                      <p className="text-xs text-muted-foreground">APY</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-semibold">$1,250.50</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Returns</p>
                      <p className="font-semibold text-green-600 dark:text-green-400">+$45.23</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>15/30 days</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">ETH Investment</p>
                        <p className="text-xs text-muted-foreground">Locked for 30 days</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-green-600 dark:text-green-400">+18.7%</p>
                      <p className="text-xs text-muted-foreground">APY</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-semibold">0.5 ETH</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Returns</p>
                      <p className="font-semibold text-green-600 dark:text-green-400">+0.023 ETH</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>8/30 days</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div className="bg-orange-600 h-1.5 rounded-full" style={{ width: '27%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}

        {activeTab === "rewards" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Rewards & Vesting</h2>
              <p className="text-muted-foreground">Claim your earned rewards</p>
            </div>

            {/* Rewards Summary */}
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUpIcon size="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  $2,847.50
                </h3>
                <p className="text-muted-foreground mb-4">Total Rewards Available</p>
                <Button className="w-full" size="lg">
                  Claim All Rewards
                </Button>
              </CardContent>
            </Card>

            {/* Vesting Schedule */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Vesting Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div>
                    <p className="font-semibold">USDT Rewards</p>
                    <p className="text-sm text-muted-foreground">Vesting over 7 days</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$1,250.50</p>
                    <p className="text-xs text-green-600 dark:text-green-400">Available now</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div>
                    <p className="font-semibold">ETH Rewards</p>
                    <p className="text-sm text-muted-foreground">Vesting over 7 days</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">0.023 ETH</p>
                    <p className="text-xs text-green-600 dark:text-green-400">Available now</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "referrals" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Referral Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Total Referrals</p>
                    <p className="text-xl font-bold text-blue-700 dark:text-blue-300">{referralData.totalReferrals}</p>
                  </div>
                  <FaUsers className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400">Total Earnings</p>
                    <p className="text-xl font-bold text-green-700 dark:text-green-300">${referralData.totalReferralEarnings.toFixed(2)}</p>
                  </div>
                  <CoinsIcon size="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Referral Link Card */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-foreground">Your Referral Link</h4>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowReferralModal(true)}
                  className="h-8 px-3 text-xs"
                >
                  <HiLink className="h-3 w-3 mr-1" />
                  Share
                </Button>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border">
                <p className="text-xs font-mono text-muted-foreground break-all">
                  {referralData.referralLink}
                </p>
              </div>
            </div>

            {/* Referral Rewards */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">Recent Referral Rewards</h3>
              <div className="space-y-3">
                {referralRewards.map((reward) => (
                  <div key={reward.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <FaUsers className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">${reward.amount.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground">From {reward.refereeAddress}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        reward.status === "claimed" ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400" :
                        reward.status === "pending" ? "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400" :
                        "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      }`}>
                        {reward.status.charAt(0).toUpperCase() + reward.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button 
                className="w-full justify-start h-12 text-base" 
                variant="outline"
                onClick={copyReferralLink}
              >
                <HiLink className="h-5 w-5 mr-3" />
                Copy Referral Link
              </Button>
              <Button 
                className="w-full justify-start h-12 text-base" 
                variant="outline"
                onClick={shareReferralLink}
              >
                <HiUserAdd className="h-5 w-5 mr-3" />
                Share with Friends
              </Button>
            </div>
          </motion.div>
        )}


      </div>

      {/* Compact Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 z-50">
        <div className="flex overflow-x-auto h-16 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 min-w-[80px] px-2 ${
                  activeTab === tab.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                <div className={`p-1 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-100 dark:bg-blue-900/30"
                    : ""
                }`}>
                  {tab.id === "dashboard" ? (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                    </svg>
                  ) : tab.id === "portfolio" ? (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ) : tab.id === "investments" ? (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  ) : tab.id === "rewards" ? (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ) : tab.id === "referrals" ? (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ) : null}
                </div>
                <span className="text-xs font-medium whitespace-nowrap">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Deposit Modal */}
      {showDepositModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="bg-white dark:bg-gray-900 w-full rounded-t-xl p-6 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Deposit USDT</h3>
              <button
                onClick={() => setShowDepositModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 -m-2"
              >
                <XIcon size="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-base font-medium text-foreground mb-3 block">
                  Amount (USDT)
                </label>
                <input
                  type="number"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  placeholder="Enter amount (min: $100)"
                  className="w-full px-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {depositAmount && (
                  <p className={`text-sm mt-2 ${parseFloat(depositAmount) >= 100 ? 'text-green-500' : 'text-red-500'}`}>
                    {parseFloat(depositAmount) >= 100 ? '✓ Amount looks good!' : 'Minimum deposit is $100 USDT'}
                  </p>
                )}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center space-x-3 mb-3">
                  <ShieldIcon size="w-5 h-5" />
                  <span className="text-base font-medium text-blue-700 dark:text-blue-300">30-Day Lock Period</span>
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400 leading-relaxed">
                  Your funds will be locked for 30 days to ensure system stability. You'll earn daily rewards during this period.
                </p>
              </div>

              <div className="flex space-x-3 pt-2">
                <Button
                  variant="outline"
                  className="flex-1 h-12 text-base font-medium"
                  onClick={() => setShowDepositModal(false)}
                  disabled={isDepositing}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 h-12 text-base font-medium"
                  onClick={handleDeposit}
                  disabled={!depositAmount || parseFloat(depositAmount) < 100 || isDepositing}
                >
                  {isDepositing ? "Processing..." : "Deposit"}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Deposit Address Modal */}
      {showDepositAddressModal && selectedTokenForDeposit && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="bg-white dark:bg-gray-900 w-full rounded-t-xl p-6 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Deposit {selectedTokenForDeposit.symbol}</h3>
              <button
                onClick={() => setShowDepositAddressModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 -m-2"
              >
                <XIcon size="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center space-x-3 mb-3">
                  <ShieldIcon size="w-5 h-5" />
                  <span className="text-base font-medium text-blue-700 dark:text-blue-300">Deposit Address</span>
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400 leading-relaxed">
                  Send only {selectedTokenForDeposit.symbol} to this address. Sending other tokens may result in permanent loss.
                </p>
              </div>

              <div>
                <label className="text-base font-medium text-foreground mb-3 block">
                  {selectedTokenForDeposit.name} Address
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={selectedTokenForDeposit.address}
                    readOnly
                    className="flex-1 px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-foreground text-sm font-mono"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(selectedTokenForDeposit.address)}
                    className="px-4 py-4 h-auto"
                  >
                    Copy
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-base font-medium text-foreground mb-3 block">
                  Network
                </label>
                <div className="px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-foreground text-base">
                  {selectedTokenForDeposit.chain}
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center space-x-3 mb-3">
                  <ShieldIcon size="w-5 h-5" />
                  <span className="text-base font-medium text-yellow-700 dark:text-yellow-300">Important</span>
                </div>
                <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2 leading-relaxed">
                  <li>• Only send {selectedTokenForDeposit.symbol} to this address</li>
                  <li>• Ensure you're on the correct network ({selectedTokenForDeposit.chain})</li>
                  <li>• Deposits may take a few minutes to appear</li>
                  <li>• Minimum deposit: $100 equivalent</li>
                </ul>
              </div>

              <Button
                className="w-full h-12 text-base font-medium"
                onClick={() => setShowDepositAddressModal(false)}
              >
                Got it
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Referral Modal */}
      {showReferralModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="bg-white dark:bg-gray-900 w-full rounded-t-xl p-4 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Referral Program</h3>
              <button
                onClick={() => setShowReferralModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <XIcon size="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Referral Link */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Referral Link
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={referralData.referralLink}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-foreground text-sm font-mono"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyReferralLink}
                    className="px-3"
                  >
                    Copy
                  </Button>
                </div>
              </div>

              {/* Referral Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {referralData.totalReferrals}
                  </p>
                  <p className="text-xs text-muted-foreground">Referrals</p>
                </div>
                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">
                    ${referralData.totalReferralEarnings.toFixed(0)}
                  </p>
                  <p className="text-xs text-muted-foreground">Earned</p>
                </div>
                <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                    ${referralData.pendingReferralRewards.toFixed(0)}
                  </p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </div>

              {/* Program Info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <HiInformationCircle className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                      How Referrals Work
                    </p>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-xs">
                      <li>• Earn 5% of your referrals' trading fees</li>
                      <li>• Earn 2% of their staking rewards</li>
                      <li>• Rewards vest for 30 days</li>
                      <li>• No limit on number of referrals</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={copyReferralLink}
                >
                  <HiLink className="h-4 w-4 mr-2" />
                  Copy Link
                </Button>
                <Button
                  className="flex-1"
                  onClick={shareReferralLink}
                >
                  <HiUserAdd className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
