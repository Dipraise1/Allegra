"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiOfficeBuilding, HiUser, HiArrowRight, HiArrowLeft, HiLogin } from "react-icons/hi"
import { FaWallet } from "react-icons/fa"

type AuthStep = "auth-mode" | "account-type" | "regular-signup" | "enterprise-signup" | "login" | "wallet-setup"

export function AuthFlow() {
  const [currentStep, setCurrentStep] = useState<AuthStep>("auth-mode")
  const [accountType, setAccountType] = useState<"regular" | "enterprise" | null>(null)
  const router = useRouter()

  const handleAccountTypeSelect = (type: "regular" | "enterprise") => {
    setAccountType(type)
    if (type === "regular") {
      setCurrentStep("regular-signup")
    } else {
      setCurrentStep("enterprise-signup")
    }
  }

  const handleSignupComplete = () => {
    setCurrentStep("wallet-setup")
  }

  const handleLoginSuccess = async () => {
    // Set authentication status in localStorage
    localStorage.setItem('allegra_auth_status', 'authenticated')
    // Also set a timestamp for debugging
    localStorage.setItem('allegra_auth_timestamp', Date.now().toString())
    console.log('Authentication set, redirecting to DApp...')
    
    // Small delay to ensure localStorage is set
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // Redirect to DApp using Next.js router
    router.push("/dapp")
  }

  const handleBack = () => {
    if (currentStep === "account-type") {
      setCurrentStep("auth-mode")
    } else if (currentStep === "regular-signup" || currentStep === "enterprise-signup") {
      setCurrentStep("account-type")
    } else if (currentStep === "login") {
      setCurrentStep("auth-mode")
    } else if (currentStep === "wallet-setup") {
      if (accountType === "regular") {
        setCurrentStep("regular-signup")
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
                <div className={`w-8 h-0.5 ${currentStep === "regular-signup" || currentStep === "enterprise-signup" || currentStep === "wallet-setup" ? "bg-blue-500" : "bg-gray-300"}`} />
                <div className={`w-3 h-3 rounded-full ${currentStep === "regular-signup" || currentStep === "enterprise-signup" ? "bg-blue-500" : "bg-gray-300"}`} />
                <div className={`w-8 h-0.5 ${currentStep === "wallet-setup" ? "bg-blue-500" : "bg-gray-300"}`} />
                <div className={`w-3 h-3 rounded-full ${currentStep === "wallet-setup" ? "bg-blue-500" : "bg-gray-300"}`} />
              </div>
          </div>

          {/* Auth Mode Selection */}
          {currentStep === "auth-mode" && (
            <Card className="glass">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold gradient-text">Welcome to ALLEGRA</CardTitle>
                <p className="text-muted-foreground">Choose how you'd like to proceed</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="glass"
                  className="w-full h-16 flex flex-col items-center justify-center space-y-2 hover:bg-white/20 dark:hover:bg-black/20"
                  onClick={() => setCurrentStep("account-type")}
                >
                  <HiUser className="h-8 w-8" />
                  <span className="font-semibold">Create New Account</span>
                  <span className="text-sm text-muted-foreground">Sign up for a new account</span>
                </Button>
                
                <Button
                  variant="glass"
                  className="w-full h-16 flex flex-col items-center justify-center space-y-2 hover:bg-white/20 dark:hover:bg-black/20"
                  onClick={() => setCurrentStep("login")}
                >
                  <HiLogin className="h-8 w-8" />
                  <span className="font-semibold">Sign In</span>
                  <span className="text-sm text-muted-foreground">Access your existing account</span>
                </Button>
              </CardContent>
            </Card>
          )}

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
                  onClick={() => handleAccountTypeSelect("regular")}
                >
                  <HiUser className="h-8 w-8" />
                  <span className="font-semibold">Regular Account</span>
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

          {/* Regular Signup */}
          {currentStep === "regular-signup" && (
            <RegularSignupForm onComplete={handleSignupComplete} onBack={handleBack} />
          )}

          {/* Enterprise Signup */}
          {currentStep === "enterprise-signup" && (
            <EnterpriseSignupForm onComplete={handleSignupComplete} onBack={handleBack} />
          )}

          {/* Login Form */}
          {currentStep === "login" && (
            <LoginForm onBack={handleBack} onSuccess={handleLoginSuccess} />
          )}

          {/* Wallet Setup */}
          {currentStep === "wallet-setup" && (
            <WalletSetupForm onBack={handleBack} router={router} />
          )}
        </motion.div>
      </div>
    </div>
  )
}

// Regular Signup Form Component
function RegularSignupForm({ onComplete, onBack }: { onComplete: () => void; onBack: () => void }) {
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
          <CardTitle className="text-xl">Regular Account</CardTitle>
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
    businessName: "",
    businessAddress: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    website: "",
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
            <label className="text-sm font-medium">Business Name</label>
            <input
              type="text"
              required
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Business Address</label>
            <textarea
              required
              rows={3}
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.businessAddress}
              onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
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
            <label className="text-sm font-medium">Phone (Optional)</label>
            <input
              type="tel"
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Website (Optional)</label>
            <input
              type="url"
              className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
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

// Login Form Component
function LoginForm({ onBack, onSuccess }: { onBack: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    // For now, call onSuccess to set auth status and redirect
    onSuccess()
  }

  return (
    <Card className="glass">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <HiArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl">Sign In</CardTitle>
        </div>
        <p className="text-muted-foreground">Welcome back! Please sign in to your account</p>
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
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                className="rounded"
              />
              <label htmlFor="remember" className="text-sm text-muted-foreground">
                Remember me
              </label>
            </div>
            <button type="button" className="text-sm text-primary hover:underline">
              Forgot password?
            </button>
          </div>
          
          <Button type="submit" variant="gradient" className="w-full">
            Sign In
            <HiArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

// Wallet Setup Form Component
function WalletSetupForm({ onBack, router }: { onBack: () => void; router: any }) {
  const [walletType, setWalletType] = useState<"create" | "import" | null>(null)

  const handleWalletTypeSelect = (type: "create" | "import") => {
    setWalletType(type)
    // Set authentication status and redirect to DApp after wallet setup
    localStorage.setItem('allegra_auth_status', 'authenticated')
    router.push("/dapp")
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
        <p className="text-muted-foreground">Connect or create your wallet to access the DApp</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          variant="glass"
          className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:bg-white/20 dark:hover:bg-black/20"
          onClick={() => handleWalletTypeSelect("create")}
        >
          <FaWallet className="h-8 w-8" />
          <span className="font-semibold">Create New Wallet</span>
          <span className="text-sm text-muted-foreground">Generate a new wallet with seed phrase</span>
        </Button>
        
        <Button
          variant="glass"
          className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:bg-white/20 dark:hover:bg-black/20"
          onClick={() => handleWalletTypeSelect("import")}
        >
          <HiArrowRight className="h-8 w-8" />
          <span className="font-semibold">Connect Existing Wallet</span>
          <span className="text-sm text-muted-foreground">Connect MetaMask, WalletConnect, etc.</span>
        </Button>
      </CardContent>
    </Card>
  )
}
