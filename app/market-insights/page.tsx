import { MarketInsights } from "@/components/pages/MarketInsights"

export const metadata = {
  title: "Market Insights - ALLEGRA Protocol",
  description: "Stay informed with the latest market analysis, trends, and insights from our AI-powered research team.",
}

export default function MarketInsightsPage() {
  return (
    <div className="pt-20">
      <MarketInsights />
    </div>
  )
}
