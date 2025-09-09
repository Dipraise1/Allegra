"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiShieldCheck, HiExclamation, HiArrowRight, HiWallet } from "react-icons/hi"
import { FaWallet, FaLock } from "react-icons/fa"
import { useRouter } from "next/navigation"

interface AccessGateProps {
  children: React.ReactNode
}

type AuthState = "loading" | "unauthenticated" | "no-wallet" | "authenticated"

export function AccessGate({ children }: AccessGateProps) {
  const [authState, setAuthState] = useState<AuthState>("loading")
  const [user, setUser] = useState<any>(null)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      // Check if user is authenticated (from localStorage or session)
      const storedUser = localStorage.getItem("allegra_user")
      
      if (!storedUser) {
        setAuthState("unauthenticated")
        return
      }

      const userData = JSON.parse(storedUser)
      setUser(userData)

      // Skip wallet check for now - go directly to authenticated state
      setAuthState("authenticated")
    } catch (error) {
      console.error("Auth check failed:", error)
      setAuthState("unauthenticated")
    }
  }

  const handleSignUp = () => {
    router.push("/auth")
  }

  const handleWalletSetup = () => {
    router.push("/auth?step=wallet")
  }

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        })
        
        if (accounts.length > 0) {
          const address = accounts[0]
          localStorage.setItem("allegra_wallet", address)
          setWalletAddress(address)
          setAuthState("authenticated")
        }
      } else {
        // Handle wallet not installed
        alert("Please install MetaMask or another Web3 wallet")
      }
    } catch (error) {
      console.error("Wallet connection failed:", error)
    }
  }

  if (authState === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (authState === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="glass">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <HiShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl font-bold gradient-text">Access Required</CardTitle>
              <p className="text-muted-foreground">
                Please sign up or log in to access the ALLEGRA Protocol DApp
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="gradient"
                className="w-full"
                onClick={handleSignUp}
              >
                <HiArrowRight className="mr-2 h-4 w-4" />
                Sign Up / Log In
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  New to ALLEGRA? Create your account to start earning sustainable yields
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  if (authState === "no-wallet") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="glass">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                <FaWallet className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle className="text-2xl font-bold gradient-text">Wallet Setup Required</CardTitle>
              <p className="text-muted-foreground">
                Connect your wallet to start using the ALLEGRA Protocol DApp
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="gradient"
                className="w-full"
                onClick={connectWallet}
              >
                <FaWallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
              
              <Button
                variant="outline"
                className="w-full"
                onClick={handleWalletSetup}
              >
                <HiArrowRight className="mr-2 h-4 w-4" />
                Setup New Wallet
              </Button>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <HiExclamation className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">
                      Security Notice
                    </p>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      Only connect wallets you control. Never share your private keys.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  // User is authenticated and has wallet connected
  return <>{children}</>
}

// Extend window interface for ethereum
declare global {
  interface Window {
    ethereum?: any
  }
}
