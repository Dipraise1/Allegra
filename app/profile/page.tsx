"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  UserIcon, 
  ShieldIcon,
  XIcon,
  PlusIcon,
  CheckCircleIcon
} from "@/lib/monogramIcons"
import { AccessGate } from "@/components/auth/AccessGate"
import toast from "react-hot-toast"
import Image from "next/image"

interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  location: string
  joinDate: string
  avatar: string
  bio: string
  preferences: {
    notifications: boolean
    marketing: boolean
    security: boolean
  }
}

export default function ProfilePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    id: "1",
    name: "Raphael Divine",
    email: "raphaeldivine2@gmail.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "2024-01-15",
    avatar: "",
    bio: "DeFi enthusiast and early adopter of sustainable yield protocols. Passionate about building the future of decentralized finance.",
    preferences: {
      notifications: true,
      marketing: false,
      security: true
    }
  })

  const [editForm, setEditForm] = useState(profile)

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const authStatus = localStorage.getItem('allegra_auth_status')
      setIsAuthenticated(authStatus === 'authenticated')
      setIsLoading(false)
    }

    checkAuth()

    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'allegra_auth_status') {
        setIsAuthenticated(e.newValue === 'authenticated')
      }
    }
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const handleEdit = () => {
    setEditForm(profile)
    setIsEditing(true)
  }

  const handleSave = () => {
    setProfile(editForm)
    setIsEditing(false)
    toast.success("Profile updated successfully!")
  }

  const handleCancel = () => {
    setEditForm(profile)
    setIsEditing(false)
  }

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handlePreferenceChange = (preference: keyof UserProfile['preferences'], value: boolean) => {
    setEditForm(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: value
      }
    }))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <AccessGate 
        title="Profile Access Required"
        description="Please authenticate to access your profile settings"
        redirectTo="/auth"
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 dark:from-slate-900 dark:via-black dark:to-indigo-900/10">
      <div className="container mx-auto px-4 pt-32 pb-8 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">Profile Settings</h1>
              <p className="text-sm text-muted-foreground">Manage your account information and preferences</p>
            </div>
            <div className="relative">
              <button 
                className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V1H4v4zM15 1h5v6h-5V1z" />
                </svg>
              </button>
              {/* Notification Badge */}
              {showNotifications ? null : (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {!showNotifications ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Profile Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <Card className="glass">
                <CardContent className="p-4 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    {profile.avatar ? (
                      <Image
                        src={profile.avatar}
                        alt={profile.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    ) : (
                      <span className="text-white font-bold text-lg">
                        {profile.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-1">{profile.name}</h2>
                  <p className="text-xs text-muted-foreground mb-3">{profile.email}</p>
                  <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                    <CheckCircleIcon className="h-3 w-3" />
                    <span>Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Profile Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="glass">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2 text-base">
                      <UserIcon className="h-4 w-4" />
                      <span>Personal Information</span>
                    </CardTitle>
                    {!isEditing && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleEdit}
                        className="flex items-center space-x-1 h-7 px-2 text-xs"
                      >
                        <PlusIcon className="h-3 w-3" />
                        <span>Edit</span>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block">Full Name</label>
                    {isEditing ? (
                      <Input
                        value={editForm.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="h-8 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-foreground">{profile.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block flex items-center space-x-1">
                      <UserIcon className="h-3 w-3" />
                      <span>Email Address</span>
                    </label>
                    {isEditing ? (
                      <Input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className="h-8 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-foreground">{profile.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block flex items-center space-x-1">
                      <UserIcon className="h-3 w-3" />
                      <span>Phone Number</span>
                    </label>
                    {isEditing ? (
                      <Input
                        value={editForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="h-8 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-foreground">{profile.phone}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block flex items-center space-x-1">
                      <UserIcon className="h-3 w-3" />
                      <span>Location</span>
                    </label>
                    {isEditing ? (
                      <Input
                        value={editForm.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="Enter your location"
                        className="h-8 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-foreground">{profile.location}</p>
                    )}
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block">Bio</label>
                    {isEditing ? (
                      <textarea
                        value={editForm.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        placeholder="Tell us about yourself"
                        className="w-full px-2 py-1 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
                        rows={2}
                      />
                    ) : (
                      <p className="text-sm text-foreground">{profile.bio}</p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  {isEditing && (
                    <div className="flex space-x-2 pt-2">
                      <Button
                        variant="outline"
                        onClick={handleCancel}
                        className="flex items-center space-x-1 h-7 px-2 text-xs"
                      >
                        <XIcon className="h-3 w-3" />
                        <span>Cancel</span>
                      </Button>
                      <Button
                        onClick={handleSave}
                        className="flex items-center space-x-1 h-7 px-2 text-xs"
                      >
                        <CheckCircleIcon className="h-3 w-3" />
                        <span>Save</span>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Preferences */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Card className="glass">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-base">
                      <ShieldIcon className="h-4 w-4" />
                      <span>Preferences</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Email Notifications</p>
                        <p className="text-xs text-muted-foreground">Receive updates about your investments</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isEditing ? editForm.preferences.notifications : profile.preferences.notifications}
                          onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
                          disabled={!isEditing}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Marketing Emails</p>
                        <p className="text-xs text-muted-foreground">Receive promotional content and updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isEditing ? editForm.preferences.marketing : profile.preferences.marketing}
                          onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                          disabled={!isEditing}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Security Alerts</p>
                        <p className="text-xs text-muted-foreground">Get notified about security-related activities</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isEditing ? editForm.preferences.security : profile.preferences.security}
                          onChange={(e) => handlePreferenceChange('security', e.target.checked)}
                          disabled={!isEditing}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        ) : (
          /* Notifications Section - Full Screen */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2 text-xl">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V1H4v4zM15 1h5v6h-5V1z" />
                    </svg>
                    <span>Notifications</span>
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowNotifications(false)}
                    className="flex items-center space-x-1 h-8 px-3 text-sm"
                  >
                    <XIcon className="h-4 w-4" />
                    <span>Close</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Notification Items */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-base font-medium text-blue-800 dark:text-blue-200">
                        Investment Unlocked
                      </p>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        Your investment of $1,250.50 has been unlocked and is now available for withdrawal.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-base font-medium text-green-800 dark:text-green-200">
                        New Reward Available
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        You have earned $45.23 in rewards. Click to claim your rewards.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">1 day ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-base font-medium text-yellow-800 dark:text-yellow-200">
                        Security Alert
                      </p>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                        New login detected from a different device. If this wasn't you, please secure your account.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">3 days ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                        Welcome to ALLEGRA Protocol
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                        Thank you for joining ALLEGRA Protocol. Start your first investment to begin earning sustainable yields.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">1 week ago</p>
                    </div>
                  </div>
                </div>

                {/* Mark All as Read Button */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full h-10 text-sm"
                    onClick={() => toast.success("All notifications marked as read")}
                  >
                    Mark All as Read
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
