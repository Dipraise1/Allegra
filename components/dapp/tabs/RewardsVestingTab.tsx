"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiClock, HiTrendingUp, HiDownload, HiRefresh, HiCheckCircle, HiExclamationCircle, HiUserAdd, HiLink, HiInformationCircle } from "react-icons/hi"
import { FaCoins, FaGift, FaHistory, FaUsers } from "react-icons/fa"
import { formatDistanceToNow, format } from "date-fns"
import toast from "react-hot-toast"

interface Reward {
  id: string
  amount: number
  earnedDate: Date
  vestingEndDate: Date
  source: string
  status: "pending" | "vested" | "claimed"
  claimedDate?: Date
  txHash?: string
}

interface VestingSummary {
  totalVested: number
  totalUnvested: number
  totalClaimed: number
  pendingRewards: number
}

interface ReferralData {
  referralCode: string
  referralLink: string
  totalReferrals: number
  totalReferralEarnings: number
  pendingReferralRewards: number
  referralStats: {
    thisMonth: number
    lastMonth: number
    totalEarnings: number
  }
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

export function RewardsVestingTab() {
  const [rewards, setRewards] = useState<Reward[]>([])
  const [vestingSummary, setVestingSummary] = useState<VestingSummary>({
    totalVested: 0,
    totalUnvested: 0,
    totalClaimed: 0,
    pendingRewards: 0
  })
  const [loading, setLoading] = useState(true)
  const [claiming, setClaiming] = useState<string | null>(null)
  const [referralData, setReferralData] = useState<ReferralData>({
    referralCode: "ALLEGRA2024",
    referralLink: "https://allegra-protocol.com/ref/ALLEGRA2024",
    totalReferrals: 12,
    totalReferralEarnings: 2450.75,
    pendingReferralRewards: 850.25,
    referralStats: {
      thisMonth: 3,
      lastMonth: 5,
      totalEarnings: 2450.75
    }
  })
  const [referralRewards, setReferralRewards] = useState<ReferralReward[]>([])
  const [activeTab, setActiveTab] = useState<"rewards" | "referrals">("rewards")

  useEffect(() => {
    fetchRewards()
    fetchReferralData()
    
    // Update timers every second
    const interval = setInterval(() => {
      setRewards(prev => prev.map(reward => ({ ...reward })))
      setReferralRewards(prev => prev.map(reward => ({ ...reward })))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const fetchRewards = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockRewards: Reward[] = [
        {
          id: "1",
          amount: 45.23,
          earnedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
          vestingEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
          source: "Arbitrage Strategy",
          status: "pending"
        },
        {
          id: "2",
          amount: 32.15,
          earnedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
          vestingEndDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
          source: "Yield Farming",
          status: "pending"
        },
        {
          id: "3",
          amount: 28.75,
          earnedDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000), // 8 days ago
          vestingEndDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago (vested)
          source: "Swap Strategy",
          status: "vested"
        },
        {
          id: "4",
          amount: 15.50,
          earnedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
          vestingEndDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
          source: "Liquidity Mining",
          status: "claimed",
          claimedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          txHash: "0x1234...5678"
        },
        {
          id: "5",
          amount: 67.80,
          earnedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
          vestingEndDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // 6 days from now
          source: "AI Strategy Alpha",
          status: "pending"
        },
        {
          id: "ref-1",
          amount: 150.00,
          source: "Referral Bonus - User #1",
          status: "vested",
          earnedDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
          vestingEndDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          claimedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          txHash: "0x1234...5678"
        },
        {
          id: "ref-2",
          amount: 200.00,
          source: "Referral Bonus - User #2",
          status: "pending",
          earnedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
          vestingEndDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000)
        },
        {
          id: "ref-3",
          amount: 75.50,
          source: "Referral Bonus - User #3",
          status: "vested",
          earnedDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          vestingEndDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
          claimedDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
          txHash: "0x9876...5432"
        }
      ]
      
      setRewards(mockRewards)
      
      // Calculate summary
      const summary: VestingSummary = {
        totalVested: mockRewards.filter(r => r.status === "vested").reduce((sum, r) => sum + r.amount, 0),
        totalUnvested: mockRewards.filter(r => r.status === "pending").reduce((sum, r) => sum + r.amount, 0),
        totalClaimed: mockRewards.filter(r => r.status === "claimed").reduce((sum, r) => sum + r.amount, 0),
        pendingRewards: mockRewards.filter(r => r.status === "vested").reduce((sum, r) => sum + r.amount, 0)
      }
      
      setVestingSummary(summary)
    } catch (error) {
      console.error("Failed to fetch rewards:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchReferralData = async () => {
    try {
      // Simulate API call for referral data
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const mockReferralRewards: ReferralReward[] = [
        {
          id: "ref-1",
          referrerAddress: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
          refereeAddress: "0x1234...5678",
          amount: 150.00,
          earnedDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
          status: "claimed",
          vestingEndDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
        },
        {
          id: "ref-2",
          referrerAddress: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
          refereeAddress: "0x8765...4321",
          amount: 200.00,
          earnedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
          status: "pending",
          vestingEndDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000)
        },
        {
          id: "ref-3",
          referrerAddress: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
          refereeAddress: "0x1111...2222",
          amount: 75.50,
          earnedDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          status: "claimed",
          vestingEndDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
        }
      ]
      
      setReferralRewards(mockReferralRewards)
    } catch (error) {
      console.error("Failed to fetch referral data:", error)
    }
  }

  const getTimeRemaining = (endDate: Date) => {
    const now = new Date()
    const diff = endDate.getTime() - now.getTime()
    
    if (diff <= 0) {
      return "Vested"
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    return `${days}d ${hours}h ${minutes}m`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "vesting":
        return "text-orange-600 dark:text-orange-400"
      case "vested":
        return "text-green-600 dark:text-green-400"
      case "claimed":
        return "text-blue-600 dark:text-blue-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "vesting":
        return <HiClock className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      case "vested":
        return <HiCheckCircle className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      case "claimed":
        return <HiDownload className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      default:
        return <HiExclamationCircle className="h-4 w-4 text-gray-600 dark:text-gray-300" />
    }
  }

  const handleClaimReward = async (rewardId: string) => {
    setClaiming(rewardId)
    try {
      // Simulate smart contract call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Update reward status
      setRewards(prev => prev.map(reward => 
        reward.id === rewardId 
          ? { 
              ...reward, 
              status: "claimed" as const,
              claimedDate: new Date(),
              txHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 8)}`
            }
          : reward
      ))
      
      // Update summary
      setVestingSummary(prev => ({
        ...prev,
        totalClaimed: prev.totalClaimed + (rewards.find(r => r.id === rewardId)?.amount || 0),
        pendingRewards: prev.pendingRewards - (rewards.find(r => r.id === rewardId)?.amount || 0)
      }))
      
    } catch (error) {
      console.error("Failed to claim reward:", error)
    } finally {
      setClaiming(null)
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

  const handleClaimAllVested = async () => {
    const vestedRewards = rewards.filter(r => r.status === "vested")
    if (vestedRewards.length === 0) return
    
    setClaiming("all")
    try {
      // Simulate batch claim
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Update all vested rewards
      setRewards(prev => prev.map(reward => 
        reward.status === "vested"
          ? { 
              ...reward, 
              status: "claimed" as const,
              claimedDate: new Date(),
              txHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 8)}`
            }
          : reward
      ))
      
      // Update summary
      const totalVestedAmount = vestedRewards.reduce((sum, r) => sum + r.amount, 0)
      setVestingSummary(prev => ({
        ...prev,
        totalClaimed: prev.totalClaimed + totalVestedAmount,
        pendingRewards: 0
      }))
      
    } catch (error) {
      console.error("Failed to claim all rewards:", error)
    } finally {
      setClaiming(null)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Rewards & Vesting</h2>
          <p className="text-muted-foreground">
            Track your daily rewards and vesting schedule
          </p>
        </div>
        <Button
          variant="outline"
          onClick={fetchRewards}
          className="flex items-center space-x-2"
        >
          <HiRefresh className="h-4 w-4" />
          <span>Refresh</span>
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("rewards")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === "rewards"
              ? "bg-white dark:bg-gray-700 text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <FaGift className="h-4 w-4" />
            <span>Rewards</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab("referrals")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === "referrals"
              ? "bg-white dark:bg-gray-700 text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <FaUsers className="h-4 w-4" />
            <span>Referrals</span>
          </div>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "rewards" && (
        <>
          {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glass hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Vested</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${vestingSummary.totalVested.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <HiCheckCircle className="h-6 w-6 text-gray-600 dark:text-gray-300" />
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
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Unvested</p>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    ${vestingSummary.totalUnvested.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <HiClock className="h-6 w-6 text-gray-600 dark:text-gray-300" />
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
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Claimed</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${vestingSummary.totalClaimed.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <HiDownload className="h-6 w-6 text-gray-600 dark:text-gray-300" />
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
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Claims</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${vestingSummary.pendingRewards.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <FaGift className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Claim All Button */}
      {vestingSummary.pendingRewards > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">
                    Ready to Claim
                  </h3>
                  <p className="text-muted-foreground">
                    You have ${vestingSummary.pendingRewards.toFixed(2)} in vested rewards ready to claim
                  </p>
                </div>
                <Button
                  variant="gradient"
                  onClick={handleClaimAllVested}
                  disabled={claiming === "all"}
                  className="flex items-center space-x-2"
                >
                  {claiming === "all" ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <HiDownload className="h-4 w-4" />
                  )}
                  <span>{claiming === "all" ? "Claiming..." : "Claim All Vested"}</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Rewards List */}
      <div className="space-y-4">
        {rewards.map((reward, index) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  {/* Reward Amount */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Reward Amount</p>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                      ${reward.amount.toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {format(reward.earnedDate, 'MMM dd, yyyy')}
                    </p>
                  </div>

                  {/* Source */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Source</p>
                    <p className="text-lg font-semibold">{reward.source}</p>
                    <p className="text-xs text-muted-foreground">Daily reward</p>
                  </div>

                  {/* Vesting Status */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Vesting Status</p>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(reward.status)}
                      <p className={`text-lg font-semibold ${getStatusColor(reward.status)}`}>
                        {reward.status.charAt(0).toUpperCase() + reward.status.slice(1)}
                      </p>
                    </div>
                    {reward.status === "pending" && (
                      <p className="text-xs text-muted-foreground">
                        {getTimeRemaining(reward.vestingEndDate)} remaining
                      </p>
                    )}
                  </div>

                  {/* Vesting Timer */}
                  {reward.status === "pending" && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Vesting Ends</p>
                      <p className="text-lg font-semibold">
                        {getTimeRemaining(reward.vestingEndDate)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {format(reward.vestingEndDate, 'MMM dd, yyyy')}
                      </p>
                    </div>
                  )}

                  {/* Claimed Info */}
                  {reward.status === "claimed" && reward.claimedDate && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Claimed</p>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {format(reward.claimedDate, 'MMM dd')}
                      </p>
                      {reward.txHash && (
                        <button
                          onClick={() => window.open(`https://etherscan.io/tx/${reward.txHash}`, '_blank')}
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          View Transaction
                        </button>
                      )}
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="flex justify-end">
                    {reward.status === "vested" && (
                      <Button
                        variant="gradient"
                        size="sm"
                        onClick={() => handleClaimReward(reward.id)}
                        disabled={claiming === reward.id}
                        className="flex items-center space-x-2"
                      >
                        {claiming === reward.id ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          <HiDownload className="h-4 w-4" />
                        )}
                        <span>{claiming === reward.id ? "Claiming..." : "Claim"}</span>
                      </Button>
                    )}
                    {reward.status === "pending" && (
                      <Button variant="outline" size="sm" disabled>
                        <HiClock className="h-4 w-4 mr-2" />
                        Vesting
                      </Button>
                    )}
                    {reward.status === "claimed" && (
                      <Button variant="outline" size="sm" disabled>
                        <HiCheckCircle className="h-4 w-4 mr-2" />
                        Claimed
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Withdrawal History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FaHistory className="h-5 w-5" />
              <span>Withdrawal History</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {rewards.filter(r => r.status === "claimed").map((reward) => (
                <div
                  key={reward.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div>
                    <p className="font-medium">${reward.amount.toFixed(2)} from {reward.source}</p>
                    <p className="text-sm text-muted-foreground">
                      Claimed {reward.claimedDate && format(reward.claimedDate, 'MMM dd, yyyy HH:mm')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-600 dark:text-green-400">Completed</p>
                    {reward.txHash && (
                      <button
                        onClick={() => window.open(`https://etherscan.io/tx/${reward.txHash}`, '_blank')}
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View TX
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {rewards.filter(r => r.status === "claimed").length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No withdrawal history yet
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
        </>
      )}

      {/* Referrals Tab */}
      {activeTab === "referrals" && (
        <>
          {/* Referral Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Referrals</p>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {referralData.totalReferrals}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <FaUsers className="h-6 w-6 text-gray-600 dark:text-gray-300" />
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
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        ${referralData.totalReferralEarnings.toFixed(2)}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <FaCoins className="h-6 w-6 text-gray-600 dark:text-gray-300" />
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
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pending Rewards</p>
                      <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        ${referralData.pendingReferralRewards.toFixed(2)}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                      <HiClock className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Referral Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HiLink className="h-5 w-5" />
                  <span>Your Referral Link</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                    <p className="text-sm font-mono text-muted-foreground break-all">
                      {referralData.referralLink}
                    </p>
                  </div>
                  <Button onClick={copyReferralLink} variant="outline" size="sm">
                    <HiLink className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button onClick={shareReferralLink} variant="outline" size="sm">
                    <HiUserAdd className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <HiInformationCircle className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-800 dark:text-blue-200">
                        Referral Program
                      </p>
                      <p className="text-blue-700 dark:text-blue-300">
                        Earn 5% of your referrals' trading fees and 2% of their staking rewards. 
                        Referral rewards are vested for 30 days before they can be claimed.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Referral Rewards List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FaGift className="h-5 w-5" />
                  <span>Referral Rewards</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {referralRewards.map((reward) => (
                    <div
                      key={reward.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <FaUsers className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <p className="font-medium">${reward.amount.toFixed(2)}</p>
                          <p className="text-sm text-muted-foreground">
                            From {reward.refereeAddress}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {format(reward.earnedDate, 'MMM dd, yyyy')}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(reward.status)}
                          <span className={`text-sm font-medium ${
                            reward.status === "vested" ? "text-green-600 dark:text-green-400" :
                            reward.status === "claimed" ? "text-blue-600 dark:text-blue-400" :
                            "text-orange-600 dark:text-orange-400"
                          }`}>
                            {reward.status.charAt(0).toUpperCase() + reward.status.slice(1)}
                          </span>
                        </div>
                        {reward.status === "vested" && (
                          <Button
                            size="sm"
                            onClick={() => handleClaimReward(reward.id)}
                            disabled={claiming === reward.id}
                            className="mt-2"
                          >
                            {claiming === reward.id ? "Claiming..." : "Claim"}
                          </Button>
                        )}
                        {reward.status === "pending" && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Vests in {getTimeRemaining(reward.vestingEndDate)}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </div>
  )
}
