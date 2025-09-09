"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  CoinsIcon, 
  ShieldIcon, 
  ETHIcon, 
  USDTIcon, 
  BNBIcon,
  CheckCircleIcon,
  InformationIcon,
  ExclamationIcon,
  ArrowRightIcon,
  ClockIcon
} from "@/lib/monogramIcons"
import toast from "react-hot-toast"

interface DepositInterfaceProps {
  onClose: () => void
}

interface Chain {
  id: string
  name: string
  symbol: string
  icon: string
  tokens: {
    ETH?: string
    USDT?: string
    BNB?: string
  }
  gasEstimate: number
}

export function DepositInterface({ onClose }: DepositInterfaceProps) {
  const [amount, setAmount] = useState("")
  const [selectedChain, setSelectedChain] = useState<Chain | null>(null)
  const [selectedToken, setSelectedToken] = useState<"ETH" | "USDT" | "BNB">("USDT")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [agreedToRisk, setAgreedToRisk] = useState(false)
  const [depositing, setDepositing] = useState(false)
  const [step, setStep] = useState<"amount" | "confirmation" | "processing">("amount")

  const chains: Chain[] = [
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      icon: "⟠",
      tokens: {
        ETH: "0x0000000000000000000000000000000000000000",
        USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      },
      gasEstimate: 0.005
    },
    {
      id: "bsc",
      name: "BNB Smart Chain",
      symbol: "BNB",
      icon: "◉",
      tokens: {
        BNB: "0x0000000000000000000000000000000000000000",
        USDT: "0x55d398326f99059fF775485246999027B3197955"
      },
      gasEstimate: 0.0005
    }
  ]

  useEffect(() => {
    // Set default chain
    setSelectedChain(chains[0])
  }, [])

  const handleAmountChange = (value: string) => {
    // Only allow numbers and one decimal point
    const regex = /^\d*\.?\d*$/
    if (regex.test(value)) {
      setAmount(value)
    }
  }

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString())
  }

  const validateAmount = () => {
    const numAmount = parseFloat(amount)
    return numAmount >= 100 && numAmount <= 100000
  }

  const getAmountValidationMessage = () => {
    const numAmount = parseFloat(amount)
    if (!amount) return ""
    if (numAmount < 100) return `Minimum deposit is $100 ${selectedToken}`
    if (numAmount > 100000) return `Maximum deposit is $100,000 ${selectedToken}`
    if (numAmount >= 100 && numAmount <= 100000) return "✓ Amount looks good!"
    return ""
  }

  const getAmountValidationColor = () => {
    const numAmount = parseFloat(amount)
    if (!amount) return "text-gray-500"
    if (numAmount < 100 || numAmount > 100000) return "text-red-500"
    return "text-green-500"
  }

  const getGasEstimate = () => {
    if (!selectedChain) return 0
    return selectedChain.gasEstimate
  }

  const handleDeposit = async () => {
    if (!validateAmount() || !selectedChain || !agreedToTerms || !agreedToRisk) {
      toast.error("Please fill in all required fields and agree to terms")
      return
    }

    setStep("confirmation")
    
    // Add a small delay to make it feel more natural
    setTimeout(() => {
      setStep("processing")
      simulateDepositProcess()
    }, 1500)
  }

  const simulateDepositProcess = async () => {
    setDepositing(true)
    
    // Simulate realistic blockchain transaction steps
    const steps = [
      { message: "Connecting to wallet...", delay: 800 },
      { message: "Approving USDT transfer...", delay: 1200 },
      { message: "Submitting transaction...", delay: 1500 },
      { message: "Waiting for confirmation...", delay: 2000 },
      { message: "Transaction confirmed!", delay: 1000 }
    ]
    
    for (const step of steps) {
      toast.loading(step.message, { id: 'deposit-process' })
      await new Promise(resolve => setTimeout(resolve, step.delay))
    }
    
    toast.success("Deposit successful! Your funds are now locked for 30 days.", { id: 'deposit-process' })
    setDepositing(false)
    
    // Close modal after success
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  const handleConfirmDeposit = async () => {
    setStep("processing")
    await simulateDepositProcess()

    try {
      // Simulate smart contract interaction
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Simulate transaction
      const txHash = `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 8)}`
      
      toast.success(`Deposit successful! Transaction: ${txHash}`)
      onClose()
      
    } catch (error) {
      console.error("Deposit failed:", error)
      toast.error("Deposit failed. Please try again.")
    } finally {
      setDepositing(false)
      setStep("amount")
    }
  }

  const formatAmount = (value: string) => {
    const num = parseFloat(value)
    if (isNaN(num)) return "$0.00"
    return `$${num.toLocaleString()}`
  }

  if (step === "confirmation") {
    return (
      <div className="p-6 space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircleIcon className="h-8 w-8 text-gray-600 dark:text-gray-300" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Confirm Your Deposit</h3>
          <p className="text-muted-foreground">
            Please review your deposit details before proceeding
          </p>
        </div>

        <Card className="glass">
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Amount</p>
                <p className="text-lg font-semibold">{formatAmount(amount)} {selectedToken}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Network</p>
                <p className="text-lg font-semibold">{selectedChain?.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Lock Period</p>
                <p className="text-lg font-semibold">30 Days</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Estimated Gas</p>
                <p className="text-lg font-semibold">{getGasEstimate()} {selectedChain?.symbol}</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <InformationIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-blue-800 dark:text-blue-200">
                    Important Notice
                  </p>
                  <p className="text-blue-700 dark:text-blue-300">
                    Your funds will be locked for 30 days. During this period, you cannot withdraw your deposit, but you will earn rewards that vest over 7 days after the lock period ends.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex space-x-3">
          <Button
            variant="outline"
            onClick={() => setStep("amount")}
            className="flex-1"
          >
            Back
          </Button>
          <Button
            variant="gradient"
            onClick={handleConfirmDeposit}
            className="flex-1"
          >
            Confirm Deposit
          </Button>
        </div>
      </div>
    )
  }

  if (step === "processing") {
    return (
      <div className="p-6 space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Processing Deposit</h3>
          <p className="text-muted-foreground">
            Please wait while we process your deposit...
          </p>
        </div>

        <Card className="glass">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium">Validating Amount</p>
                  <p className="text-sm text-muted-foreground">Checking deposit amount</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium">Estimating Gas</p>
                  <p className="text-sm text-muted-foreground">Calculating transaction fees</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                </div>
                <div>
                  <p className="font-medium">Executing Transaction</p>
                  <p className="text-sm text-muted-foreground">Sending to smart contract</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <CoinsIcon size="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Make a Deposit</h3>
        <p className="text-muted-foreground">
          Deposit USDT to start earning sustainable yields
        </p>
      </div>

      {/* Amount Input */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Deposit Amount</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">USDT Amount</label>
            <div className="relative mt-1">
              <input
                type="text"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                placeholder="0.00"
                className="w-full px-4 py-3 text-2xl font-semibold bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <span className="text-lg font-semibold text-muted-foreground">USDT</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Minimum: $100 | Maximum: $100,000
            </p>
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {[100, 500, 1000, 5000].map((value) => (
              <Button
                key={value}
                variant="outline"
                size="sm"
                onClick={() => handleQuickAmount(value)}
                className="text-sm"
              >
                ${value.toLocaleString()}
              </Button>
            ))}
          </div>

          {amount && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">You will deposit:</span>
                <span className="text-lg font-semibold">{formatAmount(amount)} {selectedToken}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Chain Selection */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Select Network</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {chains.map((chain) => (
              <button
                key={chain.id}
                onClick={() => setSelectedChain(chain)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedChain?.id === chain.id
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{chain.icon}</span>
                  <div className="text-left">
                    <p className="font-semibold">{chain.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Gas: ~{chain.gasEstimate} {chain.symbol}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Token Selection */}
      {selectedChain && (
        <Card className="glass">
          <CardHeader>
            <CardTitle>Select Token</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              {Object.keys(selectedChain.tokens).map((token) => {
                const tokenKey = token as keyof typeof selectedChain.tokens
                const isSelected = selectedToken === tokenKey
                const getTokenIcon = () => {
                  switch (tokenKey) {
                    case "ETH": return <ETHIcon size="w-6 h-6" />
                    case "USDT": return <USDTIcon size="w-6 h-6" />
                    case "BNB": return <BNBIcon size="w-6 h-6" />
                    default: return <CoinsIcon size="w-6 h-6" />
                  }
                }
                
                return (
                  <button
                    key={tokenKey}
                    onClick={() => setSelectedToken(tokenKey)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      {getTokenIcon()}
                      <span className="font-semibold text-sm">{tokenKey}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Terms and Risk Disclaimers */}
      <Card className="glass">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 rounded"
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="risk"
              checked={agreedToRisk}
              onChange={(e) => setAgreedToRisk(e.target.checked)}
              className="mt-1 rounded"
            />
            <label htmlFor="risk" className="text-sm">
              I understand the risks associated with DeFi investments and the 30-day lock period
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Risk Warning */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <ExclamationIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-yellow-800 dark:text-yellow-200">
              Risk Disclaimer
            </p>
            <p className="text-yellow-700 dark:text-yellow-300">
              DeFi investments carry inherent risks. Your funds will be locked for 30 days. 
              Past performance does not guarantee future results. Only invest what you can afford to lose.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Button
          variant="outline"
          onClick={onClose}
          className="flex-1"
        >
          Cancel
        </Button>
        <Button
          variant="gradient"
          onClick={handleDeposit}
          disabled={!validateAmount() || !selectedChain || !agreedToTerms || !agreedToRisk}
          className="flex-1 flex items-center space-x-2"
        >
          <span>Continue</span>
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
