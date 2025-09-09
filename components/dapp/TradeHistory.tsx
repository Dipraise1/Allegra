"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiExternalLink, HiRefresh, HiFilter, HiDownload, HiTrendingUp, HiTrendingDown } from "react-icons/hi"
import { FaHistory, FaCoins, FaChartLine, FaExchangeAlt } from "react-icons/fa"
import { format } from "date-fns"

interface Trade {
  id: string
  type: "deposit" | "withdrawal" | "arbitrage" | "yield" | "swap"
  amount: number
  token: string
  pair?: string
  profit?: number
  timestamp: Date
  txHash: string
  status: "completed" | "pending" | "failed"
  gasUsed: number
  gasPrice: number
  blockNumber: number
}

interface FilterOptions {
  type: string
  status: string
  dateRange: string
}

export function TradeHistory() {
  const [trades, setTrades] = useState<Trade[]>([])
  const [filteredTrades, setFilteredTrades] = useState<Trade[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<FilterOptions>({
    type: "all",
    status: "all",
    dateRange: "all"
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  useEffect(() => {
    fetchTradeHistory()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [trades, filters])

  const fetchTradeHistory = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockTrades: Trade[] = [
        {
          id: "1",
          type: "deposit",
          amount: 5000,
          token: "USDT",
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          txHash: "0x1234567890abcdef1234567890abcdef12345678",
          status: "completed",
          gasUsed: 21000,
          gasPrice: 20,
          blockNumber: 18500000
        },
        {
          id: "2",
          type: "arbitrage",
          amount: 2500,
          token: "USDT",
          pair: "ALLEGRA/USDT",
          profit: 45.23,
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          txHash: "0x2345678901bcdef1234567890abcdef123456789",
          status: "completed",
          gasUsed: 150000,
          gasPrice: 25,
          blockNumber: 18501000
        },
        {
          id: "3",
          type: "yield",
          amount: 1500,
          token: "USDT",
          pair: "ALLEGRA-ETH",
          profit: 12.45,
          timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
          txHash: "0x3456789012cdef1234567890abcdef1234567890",
          status: "completed",
          gasUsed: 180000,
          gasPrice: 22,
          blockNumber: 18502000
        },
        {
          id: "4",
          type: "swap",
          amount: 1000,
          token: "USDT",
          pair: "ALLEGRA/BTC",
          profit: 35.75,
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
          txHash: "0x4567890123def1234567890abcdef1234567890",
          status: "completed",
          gasUsed: 200000,
          gasPrice: 18,
          blockNumber: 18503000
        },
        {
          id: "5",
          type: "withdrawal",
          amount: 250,
          token: "USDT",
          timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
          txHash: "0x5678901234ef1234567890abcdef1234567890",
          status: "pending",
          gasUsed: 21000,
          gasPrice: 30,
          blockNumber: 18504000
        },
        {
          id: "6",
          type: "arbitrage",
          amount: 3000,
          token: "USDT",
          pair: "ALLEGRA/USDC",
          profit: 67.80,
          timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
          txHash: "0x6789012345f1234567890abcdef1234567890",
          status: "completed",
          gasUsed: 160000,
          gasPrice: 24,
          blockNumber: 18505000
        },
        {
          id: "7",
          type: "yield",
          amount: 2000,
          token: "USDT",
          pair: "ALLEGRA/USDT",
          profit: 28.90,
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          txHash: "0x78901234561234567890abcdef1234567890",
          status: "completed",
          gasUsed: 170000,
          gasPrice: 26,
          blockNumber: 18506000
        },
        {
          id: "8",
          type: "swap",
          amount: 800,
          token: "USDT",
          pair: "ALLEGRA/ETH",
          profit: 15.30,
          timestamp: new Date(Date.now() - 15 * 60 * 1000),
          txHash: "0x8901234567234567890abcdef1234567890",
          status: "failed",
          gasUsed: 0,
          gasPrice: 0,
          blockNumber: 0
        }
      ]
      
      setTrades(mockTrades)
    } catch (error) {
      console.error("Failed to fetch trade history:", error)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...trades]

    if (filters.type !== "all") {
      filtered = filtered.filter(trade => trade.type === filters.type)
    }

    if (filters.status !== "all") {
      filtered = filtered.filter(trade => trade.status === filters.status)
    }

    if (filters.dateRange !== "all") {
      const now = new Date()
      const filterDate = new Date()
      
      switch (filters.dateRange) {
        case "today":
          filterDate.setHours(0, 0, 0, 0)
          break
        case "week":
          filterDate.setDate(now.getDate() - 7)
          break
        case "month":
          filterDate.setMonth(now.getMonth() - 1)
          break
        case "year":
          filterDate.setFullYear(now.getFullYear() - 1)
          break
      }
      
      filtered = filtered.filter(trade => trade.timestamp >= filterDate)
    }

    setFilteredTrades(filtered)
    setCurrentPage(1)
  }

  const getTradeTypeIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <FaCoins className="h-4 w-4 text-green-500" />
      case "withdrawal":
        return <FaCoins className="h-4 w-4 text-red-500" />
      case "arbitrage":
        return <HiTrendingUp className="h-4 w-4 text-blue-500" />
      case "yield":
        return <FaChartLine className="h-4 w-4 text-blue-500" />
      case "swap":
        return <FaExchangeAlt className="h-4 w-4 text-orange-500" />
      default:
        return <FaHistory className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 dark:text-green-400"
      case "pending":
        return "text-yellow-600 dark:text-yellow-400"
      case "failed":
        return "text-red-600 dark:text-red-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium"
    switch (status) {
      case "completed":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`
      case "pending":
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`
      case "failed":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200`
    }
  }

  const formatAmount = (amount: number) => {
    return amount.toLocaleString()
  }

  const formatGasCost = (gasUsed: number, gasPrice: number) => {
    if (gasUsed === 0) return "N/A"
    const cost = (gasUsed * gasPrice) / 1e9 // Convert from gwei to ETH
    return `${cost.toFixed(6)} ETH`
  }

  const exportToCSV = () => {
    const csvData = [
      ["Date", "Type", "Amount", "Token", "Pair", "Profit", "Status", "Transaction Hash", "Gas Cost", "Block Number"],
      ...filteredTrades.map(trade => [
        format(trade.timestamp, 'yyyy-MM-dd HH:mm:ss'),
        trade.type,
        trade.amount.toString(),
        trade.token,
        trade.pair || "",
        trade.profit?.toString() || "",
        trade.status,
        trade.txHash,
        formatGasCost(trade.gasUsed, trade.gasPrice),
        trade.blockNumber.toString()
      ])
    ]
    
    const csvContent = csvData.map(row => row.join(",")).join("\n")
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `allegra-trade-history-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const paginatedTrades = filteredTrades.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredTrades.length / itemsPerPage)

  if (loading) {
    return (
      <div className="p-6 space-y-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Trade History</h2>
          <p className="text-muted-foreground">
            View all your on-chain transactions and trading activity
          </p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={exportToCSV}
            className="flex items-center space-x-2"
          >
            <HiDownload className="h-4 w-4" />
            <span>Export CSV</span>
          </Button>
          <Button
            variant="outline"
            onClick={fetchTradeHistory}
            className="flex items-center space-x-2"
          >
            <HiRefresh className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="glass">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Type</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Types</option>
                <option value="deposit">Deposits</option>
                <option value="withdrawal">Withdrawals</option>
                <option value="arbitrage">Arbitrage</option>
                <option value="yield">Yield</option>
                <option value="swap">Swaps</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Date Range</label>
              <select
                value={filters.dateRange}
                onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
                <option value="year">Last Year</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={() => setFilters({ type: "all", status: "all", dateRange: "all" })}
                className="w-full"
              >
                <HiFilter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {filteredTrades.length}
            </p>
            <p className="text-sm text-muted-foreground">Total Trades</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {filteredTrades.filter(t => t.status === "completed").length}
            </p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              {filteredTrades.filter(t => t.status === "pending").length}
            </p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${filteredTrades.reduce((sum, t) => sum + (t.profit || 0), 0).toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">Total Profit</p>
          </CardContent>
        </Card>
      </div>

      {/* Trades Table */}
      <Card className="glass">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="text-left p-4 font-medium">Type</th>
                  <th className="text-left p-4 font-medium">Amount</th>
                  <th className="text-left p-4 font-medium">Pair</th>
                  <th className="text-left p-4 font-medium">Profit</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Date</th>
                  <th className="text-left p-4 font-medium">Gas Cost</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTrades.map((trade) => (
                  <tr key={trade.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {getTradeTypeIcon(trade.type)}
                        <span className="font-medium capitalize">{trade.type}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-semibold">
                        {formatAmount(trade.amount)} {trade.token}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-muted-foreground">
                        {trade.pair || "N/A"}
                      </span>
                    </td>
                    <td className="p-4">
                      {trade.profit ? (
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                          +${trade.profit.toFixed(2)}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">N/A</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className={getStatusBadge(trade.status)}>
                        {trade.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm">{format(trade.timestamp, 'MMM dd, yyyy')}</p>
                        <p className="text-xs text-muted-foreground">
                          {format(trade.timestamp, 'HH:mm:ss')}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm">
                        {formatGasCost(trade.gasUsed, trade.gasPrice)}
                      </span>
                    </td>
                    <td className="p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(`https://etherscan.io/tx/${trade.txHash}`, '_blank')}
                        className="flex items-center space-x-1"
                      >
                        <HiExternalLink className="h-3 w-3" />
                        <span>View</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {paginatedTrades.length === 0 && (
            <div className="text-center py-12">
              <FaHistory className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-muted-foreground">No trades found matching your filters</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredTrades.length)} of {filteredTrades.length} trades
          </p>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="px-3 py-1 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
