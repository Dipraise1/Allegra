'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface AccessGateProps {
  title: string
  description: string
  redirectTo?: string
}

export function AccessGate({ title, description, redirectTo = '/auth' }: AccessGateProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleRedirect = async () => {
    setIsLoading(true)
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push(redirectTo)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/20 p-8 text-center">
          {/* Logo/Icon */}
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-sm"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            {title}
          </h1>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRedirect}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Redirecting...
              </div>
            ) : (
              'Continue to Authentication'
            )}
          </motion.button>

           {/* Security Note */}
           <p className="text-xs text-slate-500 dark:text-slate-400 mt-6">
             Secure authentication required for DApp access
           </p>

           {/* Debug buttons for testing */}
           {process.env.NODE_ENV === 'development' && (
             <div className="mt-4 space-y-2">
               <button
                 onClick={() => {
                   localStorage.setItem('allegra_auth_status', 'authenticated')
                   localStorage.setItem('allegra_auth_timestamp', Date.now().toString())
                   router.push('/dapp')
                 }}
                 className="block text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline"
               >
                 [DEV] Skip Auth (Testing Only)
               </button>
               <button
                 onClick={() => {
                   console.log('Current auth status:', localStorage.getItem('allegra_auth_status'))
                   console.log('Current auth timestamp:', localStorage.getItem('allegra_auth_timestamp'))
                 }}
                 className="block text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline"
               >
                 [DEV] Check Auth Status
               </button>
             </div>
           )}
        </div>
      </motion.div>
    </div>
  )
}