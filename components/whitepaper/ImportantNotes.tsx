"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Info, Shield, TrendingDown } from "lucide-react"

const warnings = [
  {
    icon: AlertTriangle,
    title: "Market Risk",
    description: "Cryptocurrency markets are highly volatile and unpredictable. Past performance does not guarantee future results.",
    type: "warning"
  },
  {
    icon: TrendingDown,
    title: "Potential Losses",
    description: "You may lose some or all of your invested capital. Only invest what you can afford to lose.",
    type: "error"
  },
  {
    icon: Shield,
    title: "Smart Contract Risk",
    description: "While audited, smart contracts may contain bugs or vulnerabilities that could result in loss of funds.",
    type: "warning"
  },
  {
    icon: Info,
    title: "Regulatory Risk",
    description: "Regulatory changes may affect the protocol's operations and your ability to access funds.",
    type: "info"
  }
]

const disclaimers = [
  "This whitepaper is for informational purposes only and does not constitute financial advice.",
  "ALLEGRA Protocol is not a registered investment advisor or financial institution.",
  "Returns are variable and based on market performance and protocol operations.",
  "Users are responsible for their own investment decisions and risk assessment.",
  "The protocol may be subject to regulatory changes that could impact operations.",
  "Smart contract interactions carry inherent risks including potential loss of funds.",
  "Past performance does not guarantee future results or returns.",
  "Users should conduct their own research before investing in any DeFi protocol."
]

export default function ImportantNotes() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Important Notes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please read and understand these important disclaimers and risk warnings before participating
          </p>
        </motion.div>

        {/* Risk Warnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {warnings.map((warning, index) => (
            <motion.div
              key={warning.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className={`glass hover:bg-white/20 transition-all duration-300 h-full ${
                warning.type === "error" ? "border-red-500/30" : 
                warning.type === "warning" ? "border-yellow-500/30" : 
                "border-blue-500/30"
              }`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      warning.type === "error" ? "bg-red-500/20" : 
                      warning.type === "warning" ? "bg-yellow-500/20" : 
                      "bg-blue-500/20"
                    }`}>
                      <warning.icon 
                        size={24} 
                        className={
                          warning.type === "error" ? "text-red-400" : 
                          warning.type === "warning" ? "text-yellow-400" : 
                          "text-blue-400"
                        } 
                      />
                    </div>
                    <CardTitle className={`text-lg ${
                      warning.type === "error" ? "text-red-400" : 
                      warning.type === "warning" ? "text-yellow-400" : 
                      "text-blue-400"
                    }`}>
                      {warning.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{warning.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclaimers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Card className="glass max-w-4xl mx-auto mb-16 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-400 text-center flex items-center justify-center">
                <AlertTriangle size={32} className="mr-3" />
                Legal Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {disclaimers.map((disclaimer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{disclaimer}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Questions or Concerns?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about the risks, terms, or operations of ALLEGRA Protocol, 
                  please contact our team before making any investment decisions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="text-center">
                    <div className="text-white font-semibold">Email Support</div>
                    <div className="text-blue-400">support@allegraprotocol.com</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold">Documentation</div>
                    <div className="text-blue-400">docs.allegraprotocol.com</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold">Community</div>
                    <div className="text-blue-400">discord.gg/allegra</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
