import React from 'react'

// Custom monogram-style icon components
export const MonogramIcon = ({ 
  children, 
  className = "", 
  size = "w-5 h-5" 
}: { 
  children: React.ReactNode
  className?: string
  size?: string 
}) => (
  <div className={`${size} flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 ${className}`}>
    {children}
  </div>
)

// Specific monogram icons
export const WalletIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 bg-gray-600 dark:bg-gray-300 rounded-sm"></div>
  </MonogramIcon>
)

export const ChartIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-2 bg-gray-600 dark:bg-gray-300 rounded-sm"></div>
  </MonogramIcon>
)

export const CoinsIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
  </MonogramIcon>
)

export const SettingsIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 border border-gray-600 dark:border-gray-300 rounded-sm"></div>
  </MonogramIcon>
)

export const UserIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
  </MonogramIcon>
)

export const BellIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
  </MonogramIcon>
)

export const TrendingUpIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-2 bg-gray-600 dark:bg-gray-300 rounded-sm transform rotate-45"></div>
  </MonogramIcon>
)

export const ShieldIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 border-2 border-gray-600 dark:border-gray-300 rounded-sm"></div>
  </MonogramIcon>
)

export const PlusIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 flex items-center justify-center">
      <div className="w-2 h-0.5 bg-gray-600 dark:bg-gray-300 rounded"></div>
      <div className="w-0.5 h-2 bg-gray-600 dark:bg-gray-300 rounded absolute"></div>
    </div>
  </MonogramIcon>
)

export const XIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 flex items-center justify-center">
      <div className="w-2 h-0.5 bg-gray-600 dark:bg-gray-300 rounded transform rotate-45 absolute"></div>
      <div className="w-2 h-0.5 bg-gray-600 dark:bg-gray-300 rounded transform -rotate-45 absolute"></div>
    </div>
  </MonogramIcon>
)

// Token icons
export const ETHIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
  </MonogramIcon>
)

export const USDTIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
  </MonogramIcon>
)

export const BNBIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
  </MonogramIcon>
)

// Platform transaction icons
export const SendIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-2 bg-gray-600 dark:bg-gray-300 rounded-sm transform rotate-45"></div>
  </MonogramIcon>
)

export const ReceiveIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-2 bg-gray-600 dark:bg-gray-300 rounded-sm transform -rotate-45"></div>
  </MonogramIcon>
)

export const SwapIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 flex items-center justify-center">
      <div className="w-1 h-1 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
      <div className="w-1 h-1 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
    </div>
  </MonogramIcon>
)

// Additional icons for deposit interface
export const CheckCircleIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 border-2 border-gray-600 dark:border-gray-300 rounded-full flex items-center justify-center">
      <div className="w-1 h-1 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
    </div>
  </MonogramIcon>
)

export const InformationIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 border-2 border-gray-600 dark:border-gray-300 rounded-full flex items-center justify-center">
      <div className="w-0.5 h-1 bg-gray-600 dark:bg-gray-300 rounded"></div>
    </div>
  </MonogramIcon>
)

export const ExclamationIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 flex flex-col items-center justify-center">
      <div className="w-0.5 h-1.5 bg-gray-600 dark:bg-gray-300 rounded"></div>
      <div className="w-0.5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full mt-0.5"></div>
    </div>
  </MonogramIcon>
)

export const ArrowRightIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 flex items-center justify-center">
      <div className="w-2 h-0.5 bg-gray-600 dark:bg-gray-300 rounded"></div>
      <div className="w-0.5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded transform rotate-45 absolute ml-1"></div>
    </div>
  </MonogramIcon>
)

export const ClockIcon = ({ className = "", size = "w-5 h-5" }) => (
  <MonogramIcon className={className} size={size}>
    <div className="w-3 h-3 border-2 border-gray-600 dark:border-gray-300 rounded-full flex items-center justify-center">
      <div className="w-0.5 h-1 bg-gray-600 dark:bg-gray-300 rounded transform rotate-45"></div>
    </div>
  </MonogramIcon>
)
