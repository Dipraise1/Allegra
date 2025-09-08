"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HiPlus, HiMinus, HiCurrencyDollar } from "react-icons/hi"
import Image from "next/image"

interface DepositContainerProps {
  isMobile?: boolean
}

export default function DepositContainer({ isMobile = false }: DepositContainerProps) {
  const [selectedToken, setSelectedToken] = useState<'USDT' | 'ETH' | 'BNB'>('USDT')
  const [amount, setAmount] = useState('')
  const [isDepositing, setIsDepositing] = useState(false)

  const tokens = [
    {
      symbol: 'USDT',
      name: 'Tether USD',
      icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      balance: '2,450.32',
      usdValue: '$2,450.32'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      balance: '1.25',
      usdValue: '$3,125.00'
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      icon: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
      balance: '4.2',
      usdValue: '$1,680.00'
    }
  ]

  const selectedTokenData = tokens.find(token => token.symbol === selectedToken)

  const handleDeposit = async () => {
    if (!amount || parseFloat(amount) <= 0) return
    
    setIsDepositing(true)
    // Simulate deposit process
    setTimeout(() => {
      setIsDepositing(false)
      setAmount('')
      // You could add a success notification here
    }, 2000)
  }

  const handleMaxAmount = () => {
    if (selectedTokenData) {
      setAmount(selectedTokenData.balance)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={isMobile ? "mb-6" : "mb-8"}
    >
      <Card className="bg-card text-card-foreground border border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold">Deposit to Pool</CardTitle>
          <HiCurrencyDollar className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Token Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Select Token</label>
            <div className="grid grid-cols-3 gap-2">
              {tokens.map((token) => (
                <motion.button
                  key={token.symbol}
                  onClick={() => setSelectedToken(token.symbol as 'USDT' | 'ETH' | 'BNB')}
                  className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors ${
                    selectedToken === token.symbol
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background/50 border-border hover:bg-muted/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-6 h-6 relative">
                    <Image
                      src={token.icon}
                      alt={token.symbol}
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{token.symbol}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Selected Token Info */}
          {selectedTokenData && (
            <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 relative">
                  <Image
                    src={selectedTokenData.icon}
                    alt={selectedTokenData.symbol}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">{selectedTokenData.symbol}</p>
                  <p className="text-xs text-muted-foreground">{selectedTokenData.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm">{selectedTokenData.balance}</p>
                <p className="text-xs text-muted-foreground">{selectedTokenData.usdValue}</p>
              </div>
            </div>
          )}

          {/* Amount Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Amount to Deposit</label>
            <div className="relative">
              <Input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pr-20 text-lg"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={handleMaxAmount}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-3 text-xs"
              >
                MAX
              </Button>
            </div>
            {amount && (
              <p className="text-xs text-muted-foreground">
                ≈ ${(parseFloat(amount) * (selectedTokenData?.symbol === 'USDT' ? 1 : selectedTokenData?.symbol === 'ETH' ? 2500 : 400)).toFixed(2)} USD
              </p>
            )}
          </div>

          {/* Deposit Button */}
          <Button
            onClick={handleDeposit}
            disabled={!amount || parseFloat(amount) <= 0 || isDepositing}
            className="w-full"
            size={isMobile ? "default" : "lg"}
          >
            {isDepositing ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Depositing...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <HiPlus className="w-4 h-4" />
                <span>Deposit {selectedToken}</span>
              </div>
            )}
          </Button>

          {/* Pool Info */}
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Your deposit will be added to the ALLEGRA Protocol pool and start earning daily returns
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
