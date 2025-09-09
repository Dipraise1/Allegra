"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { ethers } from "ethers"
import toast from "react-hot-toast"

interface Web3ContextType {
  provider: ethers.BrowserProvider | null
  signer: ethers.JsonRpcSigner | null
  account: string | null
  chainId: number | null
  isConnected: boolean
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
  switchNetwork: (chainId: number) => Promise<void>
  getBalance: (address: string) => Promise<string>
  sendTransaction: (to: string, value: string) => Promise<string | null>
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined)

interface Web3ProviderProps {
  children: ReactNode
}

export function Web3Provider({ children }: Web3ProviderProps) {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null)
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null)
  const [account, setAccount] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    checkConnection()
    setupEventListeners()
  }, [])

  const checkConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const accounts = await provider.listAccounts()
        
        if (accounts.length > 0) {
          const signer = await provider.getSigner()
          const network = await provider.getNetwork()
          
          setProvider(provider)
          setSigner(signer)
          setAccount(accounts[0].address)
          setChainId(Number(network.chainId))
          setIsConnected(true)
        }
      } catch (error) {
        console.error("Failed to check connection:", error)
      }
    }
  }

  const setupEventListeners = () => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", handleAccountsChanged)
      window.ethereum.on("chainChanged", handleChainChanged)
      window.ethereum.on("disconnect", handleDisconnect)
    }
  }

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      disconnectWallet()
    } else {
      setAccount(accounts[0])
    }
  }

  const handleChainChanged = (chainId: string) => {
    setChainId(Number(chainId))
    window.location.reload() // Reload to ensure proper network handling
  }

  const handleDisconnect = () => {
    disconnectWallet()
  }

  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") {
      toast.error("Please install MetaMask or another Web3 wallet")
      return
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await provider.send("eth_requestAccounts", [])
      
      if (accounts.length > 0) {
        const signer = await provider.getSigner()
        const network = await provider.getNetwork()
        
        setProvider(provider)
        setSigner(signer)
        setAccount(accounts[0])
        setChainId(Number(network.chainId))
        setIsConnected(true)
        
        // Store in localStorage
        localStorage.setItem("allegra_wallet", accounts[0])
        
        toast.success("Wallet connected successfully")
      }
    } catch (error: any) {
      console.error("Failed to connect wallet:", error)
      if (error.code === 4001) {
        toast.error("User rejected the connection request")
      } else {
        toast.error("Failed to connect wallet")
      }
    }
  }

  const disconnectWallet = () => {
    setProvider(null)
    setSigner(null)
    setAccount(null)
    setChainId(null)
    setIsConnected(false)
    
    // Remove from localStorage
    localStorage.removeItem("allegra_wallet")
    
    toast.success("Wallet disconnected")
  }

  const switchNetwork = async (targetChainId: number) => {
    if (!window.ethereum) {
      toast.error("Please install MetaMask or another Web3 wallet")
      return
    }

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${targetChainId.toString(16)}` }],
      })
    } catch (error: any) {
      if (error.code === 4902) {
        // Chain not added, try to add it
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [getNetworkConfig(targetChainId)],
          })
        } catch (addError) {
          console.error("Failed to add network:", addError)
          toast.error("Failed to add network")
        }
      } else {
        console.error("Failed to switch network:", error)
        toast.error("Failed to switch network")
      }
    }
  }

  const getNetworkConfig = (chainId: number) => {
    const networks = {
      1: {
        chainId: "0x1",
        chainName: "Ethereum Mainnet",
        nativeCurrency: {
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: ["https://mainnet.infura.io/v3/"],
        blockExplorerUrls: ["https://etherscan.io"],
      },
      137: {
        chainId: "0x89",
        chainName: "Polygon",
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18,
        },
        rpcUrls: ["https://polygon-rpc.com"],
        blockExplorerUrls: ["https://polygonscan.com"],
      },
      56: {
        chainId: "0x38",
        chainName: "BSC",
        nativeCurrency: {
          name: "BNB",
          symbol: "BNB",
          decimals: 18,
        },
        rpcUrls: ["https://bsc-dataseed.binance.org"],
        blockExplorerUrls: ["https://bscscan.com"],
      },
      42161: {
        chainId: "0xa4b1",
        chainName: "Arbitrum",
        nativeCurrency: {
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: ["https://arb1.arbitrum.io/rpc"],
        blockExplorerUrls: ["https://arbiscan.io"],
      },
    }

    return networks[chainId as keyof typeof networks]
  }

  const getBalance = async (address: string): Promise<string> => {
    if (!provider) {
      throw new Error("Provider not connected")
    }

    try {
      const balance = await provider.getBalance(address)
      return ethers.formatEther(balance)
    } catch (error) {
      console.error("Failed to get balance:", error)
      throw error
    }
  }

  const sendTransaction = async (to: string, value: string): Promise<string | null> => {
    if (!signer) {
      throw new Error("Signer not connected")
    }

    try {
      const tx = await signer.sendTransaction({
        to,
        value: ethers.parseEther(value),
      })

      toast.success("Transaction sent! Waiting for confirmation...")
      
      const receipt = await tx.wait()
      toast.success(`Transaction confirmed! Hash: ${receipt?.hash}`)
      
      return receipt?.hash || null
    } catch (error: any) {
      console.error("Transaction failed:", error)
      if (error.code === 4001) {
        toast.error("User rejected the transaction")
      } else {
        toast.error("Transaction failed")
      }
      throw error
    }
  }

  const value: Web3ContextType = {
    provider,
    signer,
    account,
    chainId,
    isConnected,
    connectWallet,
    disconnectWallet,
    switchNetwork,
    getBalance,
    sendTransaction,
  }

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  const context = useContext(Web3Context)
  if (context === undefined) {
    throw new Error("useWeb3 must be used within a Web3Provider")
  }
  return context
}

// Extend window interface for ethereum
declare global {
  interface Window {
    ethereum?: any
  }
}
