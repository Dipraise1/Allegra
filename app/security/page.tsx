import SecurityMeasures from "@/components/whitepaper/SecurityMeasures"

export const metadata = {
  title: "Security - ALLEGRA Protocol",
  description: "Comprehensive security measures and AI-powered audits protecting ALLEGRA Protocol users.",
}

export default function SecurityPage() {
  return (
    <div className="pt-20">
      <SecurityMeasures />
    </div>
  )
}
