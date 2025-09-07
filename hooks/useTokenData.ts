"use client"

import { useState, useEffect } from 'react'
import { TokenData, fetchMultipleTokens, calculateAllocations, getPopularTokens } from '@/lib/tokenData'

export function useTokenData(chainId: string = 'ethereum') {
  const [tokens, setTokens] = useState<TokenData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadTokenData() {
      try {
        setLoading(true)
        setError(null)
        
        // Get popular tokens for the selected chain
        const tokenAddresses = getPopularTokens(chainId)
        
        // Fetch token data
        const tokenData = await fetchMultipleTokens(tokenAddresses, chainId)
        
        // Calculate allocations
        const tokensWithAllocations = calculateAllocations(tokenData)
        
        setTokens(tokensWithAllocations)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load token data')
        console.error('Error loading token data:', err)
      } finally {
        setLoading(false)
      }
    }

    loadTokenData()
  }, [chainId])

  const totalValue = tokens.reduce((sum, token) => sum + token.value, 0)
  const totalChange24h = tokens.reduce((sum, token) => sum + (token.value * token.change24h / 100), 0)

  return {
    tokens,
    loading,
    error,
    totalValue,
    totalChange24h,
    refresh: () => {
      setLoading(true)
      // Re-trigger the effect
      const tokenAddresses = getPopularTokens(chainId)
      fetchMultipleTokens(tokenAddresses, chainId)
        .then(calculateAllocations)
        .then(setTokens)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }
  }
}

