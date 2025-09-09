"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewTab } from "./tabs/OverviewTab"
import { InvestmentsTab } from "./tabs/InvestmentsTab"
import { RewardsVestingTab } from "./tabs/RewardsVestingTab"
import { OptionsSettingsTab } from "./tabs/OptionsSettingsTab"
import { DepositInterface } from "./DepositInterface"
import { TradeHistory } from "./TradeHistory"
import { HiX } from "react-icons/hi"
import { 
  WalletIcon, 
  ChartIcon, 
  CoinsIcon, 
  SettingsIcon, 
  UserIcon, 
  BellIcon, 
  TrendingUpIcon, 
  ShieldIcon, 
  PlusIcon,
  ETHIcon,
  USDTIcon,
  BNBIcon,
  SendIcon,
  ReceiveIcon,
  SwapIcon,
  XIcon
} from "@/lib/monogramIcons"
import { ThemeToggle } from "@/components/ThemeToggle"
import toast from "react-hot-toast"
import Image from "next/image"

type ActiveTab = "overview" | "investments" | "rewards" | "options" | "profile"
type ModalType = "deposit" | "trade-history" | "platform-transactions" | null
type TransactionType = "send" | "receive" | "swap"
type TokenType = "ETH" | "USDT" | "BNB"

export function EnhancedDAppInterface() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview")
  const [activeModal, setActiveModal] = useState<ModalType>(null)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)
  const [notifications, setNotifications] = useState<any[]>([])
  
  // Platform transaction state
  const [transactionType, setTransactionType] = useState<TransactionType>("send")
  const [selectedToken, setSelectedToken] = useState<TokenType>("ETH")
  const [transactionAmount, setTransactionAmount] = useState("")
  const [recipientAddress, setRecipientAddress] = useState("")
  const [isProcessingTransaction, setIsProcessingTransaction] = useState(false)

  useEffect(() => {
    // Load user data (wallet connection disabled for now)
    const storedUser = localStorage.getItem("allegra_user")
    
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    
    // Set a mock wallet address for demo purposes
    setWalletAddress("0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6")

    // Simulate notifications
    setNotifications([
      {
        id: 1,
        type: "unlock",
        message: "Investment #1 will unlock in 2 days",
        timestamp: new Date(),
        read: false
      },
      {
        id: 2,
        type: "reward",
        message: "New reward available for claiming",
        timestamp: new Date(),
        read: false
      }
    ])
  }, [])

  const copyWalletAddress = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress)
      toast.success("Wallet address copied to clipboard")
    }
  }

  const disconnectWallet = () => {
    // Wallet connection disabled for now
    toast.success("Wallet connection is currently disabled")
  }

  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const handlePlatformTransaction = async () => {
    if (!transactionAmount || (transactionType === "send" && !recipientAddress)) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsProcessingTransaction(true)
    
    try {
      // Simulate transaction processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success(`${transactionType === "send" ? "Sent" : transactionType === "receive" ? "Received" : "Swapped"} ${transactionAmount} ${selectedToken} successfully!`)
      
      // Reset form
      setTransactionAmount("")
      setRecipientAddress("")
      setActiveModal(null)
    } catch (error) {
      toast.error("Transaction failed. Please try again.")
    } finally {
      setIsProcessingTransaction(false)
    }
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
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
                <span className="text-xl font-bold gradient-text">ALLEGRA Protocol</span>
              </motion.div>

              {/* User Info & Actions */}
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                    onClick={() => setActiveModal("trade-history")}
                  >
                    <BellIcon />
                    {notifications.filter(n => !n.read).length > 0 && (
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {notifications.filter(n => !n.read).length}
                      </span>
                    )}
                  </Button>
                </div>

                {/* Wallet Info */}
                {walletAddress && (
                  <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
                    <WalletIcon size="w-4 h-4" />
                    <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
                      {formatWalletAddress(walletAddress)}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyWalletAddress}
                      className="h-6 w-6 p-0"
                    >
                      <UserIcon className="h-3 w-3" />
                    </Button>
                  </div>
                )}

                {/* Platform Transactions */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveModal("platform-transactions")}
                  className="flex items-center space-x-2"
                >
                  <SendIcon size="w-4 h-4" />
                  <span>Transactions</span>
                </Button>

                {/* Theme Toggle */}
                <ThemeToggle />

              {/* Logout Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  localStorage.removeItem('allegra_auth_status')
                  window.location.href = '/auth'
                }}
                className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
              >
                Logout
              </Button>

                {/* Disconnect Wallet */}
                {walletAddress && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={disconnectWallet}
                    className="text-gray-400"
                    disabled
                  >
                    Disconnect (Disabled)
                  </Button>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full">
            {/* Desktop Tabs */}
            <div className="hidden lg:block">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="overview" className="flex items-center space-x-2">
                  <ChartIcon size="w-4 h-4" />
                  <span>Overview</span>
                </TabsTrigger>
                <TabsTrigger value="investments" className="flex items-center space-x-2">
                  <CoinsIcon size="w-4 h-4" />
                  <span>Investments</span>
                </TabsTrigger>
                <TabsTrigger value="rewards" className="flex items-center space-x-2">
                  <WalletIcon size="w-4 h-4" />
                  <span>Rewards & Vesting</span>
                </TabsTrigger>
                <TabsTrigger value="options" className="flex items-center space-x-2">
                  <SettingsIcon size="w-4 h-4" />
                  <span>Options</span>
                </TabsTrigger>
                <TabsTrigger value="profile" className="flex items-center space-x-2">
                  <UserIcon size="w-4 h-4" />
                  <span>Profile</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 z-40">
            <div className="grid grid-cols-5 h-16">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`flex flex-col items-center justify-center space-y-1 ${
                    activeTab === "overview" ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <ChartIcon className="h-5 w-5" />
                  <span className="text-xs">Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab("investments")}
                  className={`flex flex-col items-center justify-center space-y-1 ${
                    activeTab === "investments" ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <CoinsIcon className="h-5 w-5" />
                  <span className="text-xs">Investments</span>
                </button>
                <button
                  onClick={() => setActiveTab("rewards")}
                  className={`flex flex-col items-center justify-center space-y-1 ${
                    activeTab === "rewards" ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <WalletIcon className="h-5 w-5" />
                  <span className="text-xs">Rewards</span>
                </button>
                <button
                  onClick={() => setActiveTab("options")}
                  className={`flex flex-col items-center justify-center space-y-1 ${
                    activeTab === "options" ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <SettingsIcon className="h-5 w-5" />
                  <span className="text-xs">Options</span>
                </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex flex-col items-center justify-center space-y-1 ${
                  activeTab === "profile" ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <UserIcon className="h-5 w-5" />
                <span className="text-xs">Profile</span>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="lg:pb-8 pb-20">
              <TabsContent value="overview" className="mt-0">
                <OverviewTab onMakeDeposit={() => setActiveModal("deposit")} />
              </TabsContent>

              <TabsContent value="investments" className="mt-0">
                <InvestmentsTab />
              </TabsContent>

              <TabsContent value="rewards" className="mt-0">
                <RewardsVestingTab />
              </TabsContent>

              <TabsContent value="options" className="mt-0">
                <OptionsSettingsTab 
                  user={user}
                  walletAddress={walletAddress}
                  onDisconnectWallet={disconnectWallet}
                />
              </TabsContent>

            <TabsContent value="profile" className="mt-0">
              <ProfileTab onMakeDeposit={() => setActiveModal("deposit")} />
              </TabsContent>
            </div>
          </Tabs>
        </main>

        {/* Modals */}
        {activeModal === "deposit" && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-8 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold">Make a Deposit</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setActiveModal(null)}
                  className="h-10 w-10"
                >
                  <HiX className="h-6 w-6" />
                </Button>
              </div>
              <DepositInterface onClose={() => setActiveModal(null)} />
            </motion.div>
          </div>
        )}

        {activeModal === "trade-history" && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold">Trade History</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setActiveModal(null)}
                >
                  <HiX className="h-5 w-5" />
                </Button>
              </div>
              <TradeHistory />
            </motion.div>
          </div>
        )}

        {/* Platform Transactions Modal */}
        {activeModal === "platform-transactions" && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">Platform Transactions</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setActiveModal(null)}
                  >
                    <XIcon size="w-5 h-5" />
                  </Button>
                </div>

                {/* Transaction Type Selector */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <Button
                    variant={transactionType === "send" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTransactionType("send")}
                    className="flex items-center space-x-2"
                  >
                    <SendIcon size="w-4 h-4" />
                    <span>Send</span>
                  </Button>
                  <Button
                    variant={transactionType === "receive" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTransactionType("receive")}
                    className="flex items-center space-x-2"
                  >
                    <ReceiveIcon size="w-4 h-4" />
                    <span>Receive</span>
                  </Button>
                  <Button
                    variant={transactionType === "swap" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTransactionType("swap")}
                    className="flex items-center space-x-2"
                  >
                    <SwapIcon size="w-4 h-4" />
                    <span>Swap</span>
                  </Button>
                </div>

                {/* Token Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-2">Token</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant={selectedToken === "ETH" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedToken("ETH")}
                      className="flex items-center space-x-2"
                    >
                      <ETHIcon size="w-4 h-4" />
                      <span>ETH</span>
                    </Button>
                    <Button
                      variant={selectedToken === "USDT" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedToken("USDT")}
                      className="flex items-center space-x-2"
                    >
                      <USDTIcon size="w-4 h-4" />
                      <span>USDT</span>
                    </Button>
                    <Button
                      variant={selectedToken === "BNB" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedToken("BNB")}
                      className="flex items-center space-x-2"
                    >
                      <BNBIcon size="w-4 h-4" />
                      <span>BNB</span>
                    </Button>
                  </div>
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-2">Amount</label>
                  <input
                    type="number"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-foreground"
                  />
                </div>

                {/* Recipient Address (for send) */}
                {transactionType === "send" && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-foreground mb-2">Recipient Address</label>
                    <input
                      type="text"
                      value={recipientAddress}
                      onChange={(e) => setRecipientAddress(e.target.value)}
                      placeholder="0x..."
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-foreground"
                    />
                  </div>
                )}

                {/* Action Button */}
                <Button
                  onClick={handlePlatformTransaction}
                  disabled={isProcessingTransaction}
                  className="w-full"
                >
                  {isProcessingTransaction ? (
                    "Processing..."
                  ) : (
                    `${transactionType === "send" ? "Send" : transactionType === "receive" ? "Receive" : "Swap"} ${selectedToken}`
                  )}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
  )
}

// Profile Tab Component
function ProfileTab({ onMakeDeposit }: { onMakeDeposit: () => void }) {
  const [selectedToken, setSelectedToken] = useState<"ETH" | "BNB" | "USDT">("USDT")
  const [depositAmount, setDepositAmount] = useState("")
  const [walletAction, setWalletAction] = useState<"deposit" | "send" | "receive">("deposit")
  const [sendAmount, setSendAmount] = useState("")
  const [sendAddress, setSendAddress] = useState("")
  const [receiveAddress, setReceiveAddress] = useState("0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6")

  const tokens = [
    {
      symbol: "ETH",
      name: "Ethereum",
      image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      balance: "1.247 ETH",
      value: "$2,847.50",
      apy: "20.47%",
      walletBalance: "0.5 ETH",
      stakedBalance: "0.747 ETH"
    },
    {
      symbol: "BNB",
      name: "BNB Smart Chain",
      image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
      balance: "4.2 BNB",
      value: "$1,247.50",
      apy: "15.23%",
      walletBalance: "1.2 BNB",
      stakedBalance: "3.0 BNB"
    },
    {
      symbol: "USDT",
      name: "Tether USD",
      image: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
      balance: "$8,450.23",
      value: "$8,450.23",
      apy: "18.73%",
      walletBalance: "$2,450.23",
      stakedBalance: "$6,000.00"
    }
  ]

  const walletMetrics = {
    personalTVL: 12500.75,
    currentAPY: 12.5,
    reserveFund: 2500000,
    dailyPL: 45.23
  }

  const handleDeposit = () => {
    if (!depositAmount || parseFloat(depositAmount) <= 0) {
      toast.error("Please enter a valid amount")
      return
    }
    onMakeDeposit()
  }

  const handleSend = () => {
    if (!sendAmount || parseFloat(sendAmount) <= 0) {
      toast.error("Please enter a valid amount")
      return
    }
    if (!sendAddress) {
      toast.error("Please enter a valid address")
      return
    }
    toast.success(`Sending ${sendAmount} ${selectedToken} to ${sendAddress.slice(0, 6)}...${sendAddress.slice(-4)}`)
    setSendAmount("")
    setSendAddress("")
  }

  const copyReceiveAddress = () => {
    navigator.clipboard.writeText(receiveAddress)
    toast.success("Address copied to clipboard")
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">RD</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Raphael Divine</h2>
                <p className="text-muted-foreground">raphaeldivine2@gmail.com</p>
                <div className="flex items-center space-x-2 mt-2">
                  <ShieldIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  <span className="text-sm text-green-600 dark:text-green-400">Verified Account</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Wallet Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <WalletIcon className="h-5 w-5" />
              <span>Wallet Metrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ${walletMetrics.personalTVL.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Personal TVL</p>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {walletMetrics.currentAPY}%
                </p>
                <p className="text-sm text-muted-foreground">Current APY</p>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ${(walletMetrics.reserveFund / 1000000).toFixed(1)}M
                </p>
                <p className="text-sm text-muted-foreground">Reserve Fund</p>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  +${walletMetrics.dailyPL.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">Daily P/L</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Wallet Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserIcon className="h-5 w-5" />
              <span>Wallet Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 mb-6">
              <Button
                variant={walletAction === "deposit" ? "default" : "outline"}
                onClick={() => setWalletAction("deposit")}
                className="flex-1"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Deposit
              </Button>
              <Button
                variant={walletAction === "send" ? "default" : "outline"}
                onClick={() => setWalletAction("send")}
                className="flex-1"
              >
                <TrendingUpIcon className="h-4 w-4 mr-2" />
                Send
              </Button>
              <Button
                variant={walletAction === "receive" ? "default" : "outline"}
                onClick={() => setWalletAction("receive")}
                className="flex-1"
              >
                <UserIcon className="h-4 w-4 mr-2" />
                Receive
              </Button>
            </div>

            {/* Wallet Action Content */}
            {walletAction === "deposit" && (
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Deposit Tokens</h3>
                  <p className="text-muted-foreground">Add tokens to your wallet to start earning</p>
                </div>
              </div>
            )}

            {walletAction === "send" && (
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Send Tokens</h3>
                  <p className="text-muted-foreground">Transfer tokens to another wallet</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Recipient Address
                  </label>
                  <input
                    type="text"
                    value={sendAddress}
                    onChange={(e) => setSendAddress(e.target.value)}
                    placeholder="0x..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Amount
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-3 text-lg font-semibold bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <span className="text-lg font-semibold text-muted-foreground">{selectedToken}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={handleSend}
                  disabled={!sendAmount || !sendAddress}
                  className="w-full"
                >
                  Send {selectedToken}
                </Button>
              </div>
            )}

            {walletAction === "receive" && (
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Receive Tokens</h3>
                  <p className="text-muted-foreground">Share your wallet address to receive tokens</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Wallet Address
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={receiveAddress}
                      readOnly
                      className="flex-1 px-4 py-3 bg-background border border-border rounded-lg font-mono text-sm"
                    />
                    <Button
                      variant="outline"
                      onClick={copyReceiveAddress}
                      className="px-4"
                    >
                      Copy
                    </Button>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <ShieldIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-800 dark:text-blue-200">
                        Security Notice
                      </p>
                      <p className="text-blue-700 dark:text-blue-300">
                        Only send supported tokens to this address. Sending unsupported tokens may result in permanent loss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Token Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CoinsIcon className="h-5 w-5" />
              <span>Select Token to Deposit</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tokens.map((token) => (
                <button
                  key={token.symbol}
                  onClick={() => setSelectedToken(token.symbol as "ETH" | "BNB" | "USDT")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedToken === token.symbol
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={token.image}
                        alt={token.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{token.symbol}</p>
                      <p className="text-sm text-muted-foreground">{token.name}</p>
                      <p className="text-xs text-green-600 dark:text-green-400">APY: {token.apy}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-right">
                    <p className="text-sm font-semibold text-foreground">{token.balance}</p>
                    <p className="text-xs text-muted-foreground">{token.value}</p>
                    <div className="mt-1 space-y-1">
                      <p className="text-xs text-blue-600 dark:text-blue-400">Wallet: {token.walletBalance}</p>
                      <p className="text-xs text-green-600 dark:text-green-400">Staked: {token.stakedBalance}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Deposit Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PlusIcon className="h-5 w-5" />
              <span>Deposit {selectedToken}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Amount to Deposit
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 text-lg font-semibold bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-lg font-semibold text-muted-foreground">{selectedToken}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Minimum: {selectedToken === "USDT" ? "$100" : selectedToken === "ETH" ? "0.1 ETH" : "0.5 BNB"}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {selectedToken === "USDT" ? (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDepositAmount("100")}
                    className="text-sm"
                  >
                    $100
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDepositAmount("500")}
                    className="text-sm"
                  >
                    $500
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDepositAmount("1000")}
                    className="text-sm"
                  >
                    $1,000
                  </Button>
                </>
              ) : selectedToken === "ETH" ? (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDepositAmount("0.1")}
                    className="text-sm"
                  >
                    0.1 ETH
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDepositAmount("0.5")}
                    className="text-sm"
                  >
                    0.5 ETH
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDepositAmount("1.0")}
                    className="text-sm"
                  >
                    1.0 ETH
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDepositAmount("0.5")}
                    className="text-sm"
                  >
                    0.5 BNB
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDepositAmount("2.0")}
                    className="text-sm"
                  >
                    2.0 BNB
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDepositAmount("5.0")}
                    className="text-sm"
                  >
                    5.0 BNB
                  </Button>
                </>
              )}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <TrendingUpIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-blue-800 dark:text-blue-200">
                    Expected Returns
                  </p>
                  <p className="text-blue-700 dark:text-blue-300">
                    {selectedToken === "USDT" && depositAmount && `$${depositAmount} USDT`}
                    {selectedToken === "ETH" && depositAmount && `${depositAmount} ETH`}
                    {selectedToken === "BNB" && depositAmount && `${depositAmount} BNB`}
                    {" "}will earn approximately{" "}
                    {selectedToken === "USDT" && depositAmount && `$${(parseFloat(depositAmount) * 0.1873).toFixed(2)}`}
                    {selectedToken === "ETH" && depositAmount && `${(parseFloat(depositAmount) * 0.2047).toFixed(4)} ETH`}
                    {selectedToken === "BNB" && depositAmount && `${(parseFloat(depositAmount) * 0.1523).toFixed(4)} BNB`}
                    {" "}annually at current APY rates.
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="gradient"
              size="lg"
              onClick={handleDeposit}
              disabled={!depositAmount || parseFloat(depositAmount) <= 0}
              className="w-full"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Deposit {selectedToken}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Account Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle>Account Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">$15,420</p>
                <p className="text-sm text-muted-foreground">Total Deposited</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">+$3,780</p>
                <p className="text-sm text-muted-foreground">Total Returns</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">18.73%</p>
                <p className="text-sm text-muted-foreground">Average APY</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}