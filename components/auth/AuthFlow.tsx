"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiOfficeBuilding, HiUser, HiArrowRight, HiArrowLeft } from "react-icons/hi"
import { FaWallet } from "react-icons/fa"

type AuthStep = "account-type" | "entity-signup" | "enterprise-signup" | "wallet-setup"

export function AuthFlow() {
  const [currentStep, setCurrentStep] = useState<AuthStep>("account-type")
  const [accountType, setAccountType] = useState<"entity" | "enterprise" | null>(null)

  const handleAccountTypeSelect = (type: "entity" | "enterprise") => {
    setAccountType(type)
    if (type === "entity") {
      setCurrentStep("entity-signup")
    } else {
      setCurrentStep("enterprise-signup")
    }
  }

  const handleSignupComplete = () => {
    setCurrentStep("wallet-setup")
  }

  const handleBack = () => {
    if (currentStep === "entity-signup" || currentStep === "enterprise-signup") {
      setCurrentStep("account-type")
    } else if (currentStep === "wallet-setup") {
      if (accountType === "entity") {
        setCurrentStep("entity-signup")
      } else {
        setCurrentStep("enterprise-signup")
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${currentStep === "account-type" ? "bg-blue-500" : "bg-gray-300"}`} />
              <div className={`w-8 h-0.5 ${currentStep === "entity-signup" || currentStep === "enterprise-signup" || currentStep === "wallet-setup" ? "bg-blue-500" : "bg-gray-300"}`} />
              <div className={`w-3 h-3 rounded-full ${currentStep === "entity-signup" || currentStep === "enterprise-signup" ? "bg-blue-500" : "bg-gray-300"}`} />
              <div className={`w-8 h-0.5 ${currentStep === "wallet-setup" ? "bg-blue-500" : "bg-gray-300"}`} />
              <div className={`w-3 h-3 rounded-full ${currentStep === "wallet-setup" ? "bg-blue-500" : "bg-gray-300"}`} />
            </div>
          </div>

          {/* Account Type Selection */}
          {currentStep === "account-type" && (
            <Card className="glass">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold gradient-text">Create Account</CardTitle>
                <p className="text-muted-foreground">Choose your account type to get started</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="glass"
                  className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:bg-white/20 dark:hover:bg-black/20"
                  onClick={() => handleAccountTypeSelect("entity")}
                >
                  <HiUser className="h-8 w-8" />
                  <span className="font-semibold">Individual Entity</span>
                  <span className="text-sm text-muted-foreground">Personal investment account</span>
                </Button>
                
                <Button
                  variant="glass"
                  className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:bg-white/20 dark:hover:bg-black/20"
                  onClick={() => handleAccountTypeSelect("enterprise")}
                >
                  <HiOfficeBuilding className="h-8 w-8" />
                  <span className="font-semibold">Enterprise</span>
                  <span className="text-sm text-muted-foreground">Business investment account</span>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Entity Signup */}
          {currentStep === "entity-signup" && (
            <EntitySignupForm onComplete={handleSignupComplete} onBack={handleBack} />
          )}

          {/* Enterprise Signup */}
          {currentStep === "enterprise-signup" && (
            <EnterpriseSignupForm onComplete={handleSignupComplete} onBack={handleBack} />
          )}

          {/* Wallet Setup */}
          {currentStep === "wallet-setup" && (
            <WalletSetupForm onBack={handleBack} />
          )}
        </motion.div>
      </div>
    </div>
  )
}

// Entity Signup Form Component
function EntitySignupForm({ onComplete, onBack }: { onComplete: () => void; onBack: () => void }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password === formData.confirmPassword && formData.agreeToTerms) {
      onComplete()
    }
  }

  return (
    <Card className="glass">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <HiArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl">Individual Account</CardTitle>
        </div>
        <p className="text-muted-foreground">Create your personal investment account</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              required
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
              className="rounded"
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          
          <Button type="submit" variant="gradient" className="w-full">
            Create Account
            <HiArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

// Enterprise Signup Form Component
function EnterpriseSignupForm({ onComplete, onBack }: { onComplete: () => void; onBack: () => void }) {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessType: "",
    agreeToTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password === formData.confirmPassword && formData.agreeToTerms) {
      onComplete()
    }
  }

  return (
    <Card className="glass">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <HiArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl">Enterprise Account</CardTitle>
        </div>
        <p className="text-muted-foreground">Create your business investment account</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Company Name</label>
            <input
              type="text"
              required
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Business Email</label>
            <input
              type="email"
              required
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Business Type</label>
            <select
              required
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            >
              <option value="">Select Business Type</option>
              <option value="corporation">Corporation</option>
              <option value="llc">LLC</option>
              <option value="partnership">Partnership</option>
              <option value="sole-proprietorship">Sole Proprietorship</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms-enterprise"
              checked={formData.agreeToTerms}
              onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
              className="rounded"
            />
            <label htmlFor="terms-enterprise" className="text-sm text-muted-foreground">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          
          <Button type="submit" variant="gradient" className="w-full">
            Create Enterprise Account
            <HiArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

// Wallet Setup Form Component
function WalletSetupForm({ onBack }: { onBack: () => void }) {
  const [walletType, setWalletType] = useState<"create" | "import" | null>(null)

  const handleWalletTypeSelect = (type: "create" | "import") => {
    setWalletType(type)
    // Redirect to DApp after wallet setup
    window.location.href = "/dapp"
  }

  return (
    <Card className="glass">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <HiArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl">Wallet Setup</CardTitle>
        </div>
        <p className="text-muted-foreground">Choose how you'd like to set up your wallet</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          variant="glass"
          className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:bg-white/20 dark:hover:bg-black/20"
          onClick={() => handleWalletTypeSelect("create")}
        >
          <FaWallet className="h-8 w-8" />
          <span className="font-semibold">Create New Wallet</span>
          <span className="text-sm text-muted-foreground">Use our built-in wallet system</span>
        </Button>
        
        <Button
          variant="glass"
          className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:bg-white/20 dark:hover:bg-black/20"
          onClick={() => handleWalletTypeSelect("import")}
        >
          <HiArrowRight className="h-8 w-8" />
          <span className="font-semibold">Connect Web3 Wallet</span>
          <span className="text-sm text-muted-foreground">Import existing MetaMask, WalletConnect, etc.</span>
        </Button>
      </CardContent>
    </Card>
  )
}
