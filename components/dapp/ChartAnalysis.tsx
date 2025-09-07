"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  HiChartBar
} from "react-icons/hi"

interface ChartAnalysisProps {
  isMobile?: boolean
}

export default function ChartAnalysis({ isMobile = false }: ChartAnalysisProps) {
  const chartData = [
    { day: 'Mon', value: 12.4, change: 2.1 },
    { day: 'Tue', value: 13.8, change: 1.4 },
    { day: 'Wed', value: 11.2, change: -2.6 },
    { day: 'Thu', value: 14.5, change: 3.3 },
    { day: 'Fri', value: 15.1, change: 0.6 },
    { day: 'Sat', value: 16.3, change: 1.2 },
    { day: 'Sun', value: 17.8, change: 1.5 },
  ]

  const maxValue = Math.max(...chartData.map(d => d.value))
  const minValue = Math.min(...chartData.map(d => d.value))


  return (
    <div className={`space-y-${isMobile ? '3' : '6'}`}>
      {/* Chart */}
      <Card className="p-4">
        <CardHeader className={`pb-${isMobile ? '2' : '4'}`}>
          <CardTitle className={`flex items-center space-x-2 ${isMobile ? 'text-base' : 'text-lg'}`}>
            <HiChartBar className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-foreground`} />
            <span>Performance Chart</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Chart Visualization */}
          <div className={`${isMobile ? 'h-32' : 'h-48'} relative bg-muted/10 rounded-lg p-4`}>
            <div className="flex items-end justify-between h-full space-x-1">
              {chartData.map((data, index) => {
                const height = ((data.value - minValue) / (maxValue - minValue)) * 100
                return (
                  <motion.div
                    key={data.day}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`flex-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t ${
                      isMobile ? 'min-h-[8px]' : 'min-h-[12px]'
                    } relative group`}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className={`bg-foreground text-background px-2 py-1 rounded text-xs whitespace-nowrap ${
                        isMobile ? 'text-xs' : 'text-sm'
                      }`}>
                        {data.day}: {data.value}% ({data.change > 0 ? '+' : ''}{data.change}%)
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            
            {/* X-axis labels */}
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              {chartData.map((data) => (
                <span key={data.day} className="text-center">
                  {data.day}
                </span>
              ))}
            </div>
          </div>

          {/* Chart Stats */}
          <div className={`grid grid-cols-2 gap-3 mt-4`}>
            <div className="text-center p-3 bg-muted/10 rounded-lg">
              <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground mb-1`}>Current ROI</p>
              <p className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-foreground`}>17.8%</p>
            </div>
            <div className="text-center p-3 bg-muted/10 rounded-lg">
              <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground mb-1`}>7-Day Change</p>
              <p className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-green-500`}>+12.4%</p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
