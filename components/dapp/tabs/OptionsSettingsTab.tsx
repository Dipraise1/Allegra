"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiBell, HiMail, HiDownload, HiRefresh, HiShieldCheck, HiExclamation, HiCheckCircle } from "react-icons/hi"
import { FaWallet, FaUser, FaCog, FaFileExport, FaSignOutAlt } from "react-icons/fa"
import { HiOfficeBuilding } from "react-icons/hi"

interface User {
  name: string
  email: string
  accountType: "entity" | "enterprise"
  companyName?: string
  memberSince: string
  kycStatus: string
  securityLevel: string
}

interface Settings {
  emailNotifications: boolean
  unlockNotifications: boolean
  claimNotifications: boolean
  marketingEmails: boolean
  twoFactorAuth: boolean
  autoClaim: boolean
}

interface OptionsSettingsTabProps {
  user: User | null
  walletAddress: string | null
  onDisconnectWallet: () => void
}

export function OptionsSettingsTab({ user, walletAddress, onDisconnectWallet }: OptionsSettingsTabProps) {
  const [settings, setSettings] = useState<Settings>({
    emailNotifications: true,
    unlockNotifications: true,
    claimNotifications: true,
    marketingEmails: false,
    twoFactorAuth: false,
    autoClaim: false
  })
  const [loading, setLoading] = useState(true)
  const [exporting, setExporting] = useState(false)

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      // Load settings from localStorage or API
      const savedSettings = localStorage.getItem("allegra_settings")
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings))
      }
    } catch (error) {
      console.error("Failed to load settings:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateSetting = (key: keyof Settings, value: boolean) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    localStorage.setItem("allegra_settings", JSON.stringify(newSettings))
  }

  const handleExportData = async () => {
    setExporting(true)
    try {
      // Simulate CSV export
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Generate CSV data
      const csvData = [
        ["Date", "Type", "Amount", "Status", "Transaction Hash"],
        ["2024-01-15", "Deposit", "5000 USDT", "Completed", "0x1234...5678"],
        ["2024-01-20", "Reward", "45.23 USDT", "Vested", "0x2345...6789"],
        ["2024-01-25", "Withdrawal", "250 USDT", "Completed", "0x3456...7890"]
      ]
      
      const csvContent = csvData.map(row => row.join(",")).join("\n")
      const blob = new Blob([csvContent], { type: "text/csv" })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `allegra-investments-${new Date().toISOString().split('T')[0]}.csv`
      a.click()
      window.URL.revokeObjectURL(url)
      
    } catch (error) {
      console.error("Failed to export data:", error)
    } finally {
      setExporting(false)
    }
  }

  const handleDisconnectWallet = () => {
    // Wallet connection disabled for now
    alert("Wallet connection is currently disabled")
  }

  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="glass">
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
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
      <div>
        <h2 className="text-2xl font-bold">Settings & Preferences</h2>
        <p className="text-muted-foreground">
          Manage your notification preferences, security settings, and application options
        </p>
      </div>


      {/* Wallet Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FaWallet className="h-5 w-5" />
              <span>Wallet Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {walletAddress ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Connected Wallet</p>
                    <p className="text-lg font-mono font-semibold">
                      {formatWalletAddress(walletAddress)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HiCheckCircle className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="text-sm text-green-600 dark:text-green-400">Connected</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => navigator.clipboard.writeText(walletAddress)}
                    className="flex items-center space-x-2"
                  >
                    <HiDownload className="h-4 w-4" />
                    <span>Copy Address</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(`https://etherscan.io/address/${walletAddress}`, '_blank')}
                    className="flex items-center space-x-2"
                  >
                    <HiRefresh className="h-4 w-4" />
                    <span>View on Explorer</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDisconnectWallet}
                    className="flex items-center space-x-2 text-gray-400"
                    disabled
                  >
                    <FaSignOutAlt className="h-4 w-4" />
                    <span>Disconnect (Disabled)</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <FaWallet className="h-12 w-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Wallet connection is currently disabled</p>
                <Button variant="gradient" disabled>
                  Connect Wallet (Disabled)
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <HiBell className="h-5 w-5" />
              <span>Notification Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive important updates via email
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailNotifications}
                    onChange={(e) => updateSetting("emailNotifications", e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Unlock Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified when investments unlock
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.unlockNotifications}
                    onChange={(e) => updateSetting("unlockNotifications", e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Claim Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified when rewards are ready to claim
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.claimNotifications}
                    onChange={(e) => updateSetting("claimNotifications", e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about new features and promotions
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.marketingEmails}
                    onChange={(e) => updateSetting("marketingEmails", e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Security Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <HiShieldCheck className="h-5 w-5" />
              <span>Security Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.twoFactorAuth}
                    onChange={(e) => updateSetting("twoFactorAuth", e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-Claim Rewards</p>
                  <p className="text-sm text-muted-foreground">
                    Automatically claim rewards when they vest
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoClaim}
                    onChange={(e) => updateSetting("autoClaim", e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <HiExclamation className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">
                    Security Notice
                  </p>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    Never share your private keys or seed phrases. ALLEGRA Protocol will never ask for this information.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Enterprise Features */}
      {user?.accountType === "enterprise" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HiOfficeBuilding className="h-5 w-5" />
                <span>Enterprise Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Business Reporting</p>
                    <p className="text-sm text-muted-foreground">
                      Export investment data for accounting and reporting
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={handleExportData}
                    disabled={exporting}
                    className="flex items-center space-x-2"
                  >
                    {exporting ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                    ) : (
                      <FaFileExport className="h-4 w-4" />
                    )}
                    <span>{exporting ? "Exporting..." : "Export CSV"}</span>
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">API Access</p>
                    <p className="text-sm text-muted-foreground">
                      Access your data programmatically via our API
                    </p>
                  </div>
                  <Button variant="outline">
                    <HiRefresh className="h-4 w-4 mr-2" />
                    Generate API Key
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Priority Support</p>
                    <p className="text-sm text-muted-foreground">
                      Get dedicated support for your business needs
                    </p>
                  </div>
                  <Button variant="outline">
                    <HiMail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Advanced Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FaCog className="h-5 w-5" />
              <span>Advanced Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-12">
                <HiRefresh className="h-4 w-4 mr-2" />
                Reset Settings
              </Button>
              <Button variant="outline" className="h-12">
                <HiDownload className="h-4 w-4 mr-2" />
                Export All Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
