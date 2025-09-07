import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import ExecutiveSummary from '@/components/whitepaper/ExecutiveSummary'
import HowItWorks from '@/components/whitepaper/HowItWorks'
import KeyFeatures from '@/components/whitepaper/KeyFeatures'
import Technology from '@/components/whitepaper/Technology'
import ReturnsStructure from '@/components/whitepaper/ReturnsStructure'
import SecurityMeasures from '@/components/whitepaper/SecurityMeasures'
import ImportantNotes from '@/components/whitepaper/ImportantNotes'
import CommandPalette from '@/components/CommandPalette'

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <ExecutiveSummary />
      <HowItWorks />
      <KeyFeatures />
      <Technology />
      <ReturnsStructure />
      <SecurityMeasures />
      <ImportantNotes />
      <CommandPalette />
    </>
  )
}
