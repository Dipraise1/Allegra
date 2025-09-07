// Token data service for fetching real-time prices and information
export interface TokenData {
  symbol: string
  name: string
  address: string
  chainId: string
  priceUsd: number
  balance: number
  value: number
  change24h: number
  imageId: string
  allocation: number
}

export interface DexScreenerPair {
  chainId: string
  dexId: string
  pairAddress: string
  baseToken: {
    address: string
    symbol: string
    name: string
  }
  quoteToken: {
    address: string
    symbol: string
    name: string
  }
  priceUsd: string
  priceChange: {
    h24: number
  }
  liquidity: {
    usd: number
  }
}

// Token addresses for different chains
export const TOKEN_ADDRESSES = {
  // Ethereum tokens
  ethereum: {
    USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    WBTC: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  },
  // Solana tokens
  solana: {
    USDC: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    USDT: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    SOL: 'So11111111111111111111111111111111111111112',
    RAY: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    SRM: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
  },
  // Polygon tokens
  polygon: {
    MATIC: '0x0000000000000000000000000000000000001010',
    USDC: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    USDT: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    WETH: '0x7ceb23fd6fc0ad599bb52aa2f9c9c0f0326fd7a4',
  }
}

// Mock balances for demo (in real app, these would come from wallet)
export const MOCK_BALANCES = {
  // Ethereum
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': 2450.32, // USDC
  '0xdac17f958d2ee523a2206206994597c13d831ec7': 1200.00, // USDT
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': 1.25,    // WETH
  '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': 0.15,    // WBTC
  
  // Solana
  'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': 3500.00, // USDC
  'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB': 800.00,  // USDT
  'So11111111111111111111111111111111111111112': 15.5,     // SOL
  '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R': 250.0,   // RAY
  
  // Polygon
  '0x0000000000000000000000000000000000001010': 1250.50, // MATIC
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174': 1800.00, // USDC
}

// Fetch token data from DexScreener API
export async function fetchTokenData(address: string, chainId: string = 'ethereum'): Promise<TokenData | null> {
  try {
    const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${address}`)
    const data = await response.json()
    
    if (!data.pairs || data.pairs.length === 0) {
      console.warn(`No pairs found for token ${address}`)
      return null
    }
    
    // Find the pair with highest liquidity
    const bestPair = data.pairs.reduce((best: DexScreenerPair, current: DexScreenerPair) => {
      return current.liquidity.usd > best.liquidity.usd ? current : best
    })
    
    const priceUsd = parseFloat(bestPair.priceUsd)
    const change24h = bestPair.priceChange?.h24 || 0
    const balance = MOCK_BALANCES[address as keyof typeof MOCK_BALANCES] || 0
    const value = balance * priceUsd
    
    return {
      symbol: bestPair.baseToken.symbol,
      name: bestPair.baseToken.name,
      address,
      chainId,
      priceUsd,
      balance,
      value,
      change24h,
      imageId: getImageId(bestPair.baseToken.symbol),
      allocation: 0 // Will be calculated based on total portfolio value
    }
  } catch (error) {
    console.error(`Error fetching data for token ${address}:`, error)
    return null
  }
}

// Get CoinGecko image ID for token symbol
function getImageId(symbol: string): string {
  const imageMap: Record<string, string> = {
    'USDC': '6319',
    'USDT': '325',
    'WETH': '279',
    'ETH': '279',
    'WBTC': '7598',
    'BTC': '1',
    'SOL': '4128',
    'RAY': '13928',
    'SRM': '10365',
    'MATIC': '4713',
  }
  return imageMap[symbol] || '1' // Default to Bitcoin if not found
}

// Fetch multiple tokens data
export async function fetchMultipleTokens(addresses: string[], chainId: string = 'ethereum'): Promise<TokenData[]> {
  const promises = addresses.map(address => fetchTokenData(address, chainId))
  const results = await Promise.all(promises)
  return results.filter((token): token is TokenData => token !== null)
}

// Calculate portfolio allocation percentages
export function calculateAllocations(tokens: TokenData[]): TokenData[] {
  const totalValue = tokens.reduce((sum, token) => sum + token.value, 0)
  
  return tokens.map(token => ({
    ...token,
    allocation: totalValue > 0 ? (token.value / totalValue) * 100 : 0
  }))
}

// Get popular token combinations for different chains
export function getPopularTokens(chainId: string = 'ethereum'): string[] {
  const tokens = TOKEN_ADDRESSES[chainId as keyof typeof TOKEN_ADDRESSES]
  return tokens ? Object.values(tokens) : []
}

