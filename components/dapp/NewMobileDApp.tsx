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
    { id: "referrals", label: "Referrals", icon: FaUsers },
    { id: "profile", label: "Profile", icon: UserIcon },
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
        status: "vesting",
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
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => window.location.href = '/'}
            >
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/logo-transparent.png"
                  alt="ALLEGRA Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain logo-white"
                />
              </div>
              <h1 className="text-lg font-bold gradient-text">ALLEGRA</h1>
            </motion.div>
            {isWalletConnected ? (
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Wallet</p>
                  <p className="text-xs font-medium text-foreground">
                    {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
                  </p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            ) : (
              <Button variant="outline" size="sm" className="h-8 px-3 text-sm">
                <WalletIcon size="w-4 h-4" />
                Connect
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 pb-24">
        {activeTab === "dashboard" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Total Value</p>
                    <p className="text-xl font-bold text-blue-700 dark:text-blue-300">$12,500</p>
                  </div>
                  <CoinsIcon size="w-5 h-5" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400">APY</p>
                    <p className="text-xl font-bold text-green-700 dark:text-green-300">12.5%</p>
                  </div>
                  <TrendingUpIcon size="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            {chartData && (
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-foreground">7-Day Performance</h4>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">+2.3%</span>
                </div>
                <div className="h-62">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button 
                className="w-full justify-start h-12 text-base" 
                variant="outline"
                onClick={() => setShowDepositModal(true)}
              >
                <PlusIcon size="w-5 h-5" />
                Deposit Funds
              </Button>
              <Button className="w-full justify-start h-12 text-base" variant="outline">
                <TrendingUpIcon size="w-5 h-5" />
                View Performance
              </Button>
            </div>

            {/* Recent Activity */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <PlusIcon size="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Deposit</p>
                      <p className="text-xs text-muted-foreground">2h ago</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-green-600">+$1,000</p>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <TrendingUpIcon size="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Yield Earned</p>
                      <p className="text-xs text-muted-foreground">1d ago</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">+$45.23</p>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <ShieldIcon size="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Reward Claimed</p>
                      <p className="text-xs text-muted-foreground">3d ago</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">+$125.50</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "portfolio" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Portfolio</h3>
              <span className="text-sm text-muted-foreground">Total: $12,500.75</span>
            </div>

            {/* Portfolio Summary */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400">Total Returns</p>
                    <p className="text-xl font-bold text-green-700 dark:text-green-300">+$1,250</p>
                  </div>
                  <TrendingUpIcon size="w-5 h-5" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Active Investments</p>
                    <p className="text-xl font-bold text-blue-700 dark:text-blue-300">3</p>
                  </div>
                  <ChartIcon size="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => handleTokenClick('USDT')}
              >
                <div className="flex items-center space-x-4">
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
                    <p className="text-base font-medium">USDT</p>
                    <p className="text-sm text-muted-foreground">Tether USD</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold">$8,450.23</p>
                  <p className="text-sm text-green-600">+2.3%</p>
                </div>
              </motion.div>

              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => handleTokenClick('ETH')}
              >
                <div className="flex items-center space-x-4">
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
                    <p className="text-base font-medium">ETH</p>
                    <p className="text-sm text-muted-foreground">Ethereum</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold">1.247 ETH</p>
                  <p className="text-sm text-green-600">+5.1%</p>
                </div>
              </motion.div>

              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => handleTokenClick('BNB')}
              >
                <div className="flex items-center space-x-4">
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
                    <p className="text-base font-medium">BNB</p>
                    <p className="text-sm text-muted-foreground">Binance Coin</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold">2.1 BNB</p>
                  <p className="text-sm text-green-600">+1.8%</p>
                </div>
              </motion.div>
            </div>
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
                        reward.status === "vesting" ? "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400" :
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

        {activeTab === "profile" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">RD</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Raphael Divine</h3>
                <p className="text-xs text-muted-foreground">raphaeldivine2@gmail.com</p>
                <p className="text-xs text-green-600 dark:text-green-400">Verified</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div>
                  <p className="text-xs font-medium">Total Invested</p>
                  <p className="text-xs text-muted-foreground">Lifetime</p>
                </div>
                <p className="text-xs font-semibold">$15,420</p>
              </div>

              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div>
                  <p className="text-xs font-medium">Total Returns</p>
                  <p className="text-xs text-muted-foreground">All time</p>
                </div>
                <p className="text-xs font-semibold text-green-600">+$3,780</p>
              </div>

              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div>
                  <p className="text-xs font-medium">Member Since</p>
                  <p className="text-xs text-muted-foreground">Account creation</p>
                </div>
                <p className="text-xs font-semibold">Jan 2024</p>
              </div>
            </div>
          </motion.div>
        )}

      </div>

      {/* Compact Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 z-50">
        <div className="grid grid-cols-4 h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${
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
                  {tab.id === "referrals" ? (
                    <Icon className="h-5 w-5" />
                  ) : (
                    <Icon size="w-5 h-5" />
                  )}
                </div>
                <span className="text-xs font-medium">{tab.label}</span>
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
