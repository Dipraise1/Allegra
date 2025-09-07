"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Lock, Eye, AlertTriangle, FileCheck } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Multi-Signature Wallets",
    description: "All funds are secured in multi-signature wallets requiring multiple approvals for transactions",
    status: "implemented"
  },
  {
    icon: Lock,
    title: "Smart Contract Audits",
    description: "Comprehensive audits by leading security firms including CertiK and ConsenSys Diligence",
    status: "implemented"
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "24/7 monitoring of all protocol activities with automated threat detection",
    status: "implemented"
  },
  {
    icon: FileCheck,
    title: "Code Coverage",
    description: "98.5% test coverage ensuring robust and reliable smart contract execution",
    status: "implemented"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Procedures",
    description: "Automated emergency pause mechanisms and rapid response protocols",
    status: "implemented"
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description: "Comprehensive insurance coverage for smart contract risks and protocol failures",
    status: "pending"
  }
]

const auditResults = [
  {
    firm: "CertiK",
    rating: "A+",
    date: "Q4 2024",
    findings: "No critical issues found",
    color: "from-white to-gray-300"
  },
  {
    firm: "ConsenSys Diligence",
    rating: "A",
    date: "Q3 2024",
    findings: "Minor recommendations addressed",
    color: "from-gray-200 to-gray-400"
  },
  {
    firm: "OpenZeppelin",
    rating: "A+",
    date: "Q2 2024",
    findings: "Security best practices confirmed",
    color: "from-gray-300 to-gray-500"
  }
]

const securityMetrics = [
  { metric: "Security Score", value: "A+", description: "Overall security rating" },
  { metric: "Audit Coverage", value: "100%", description: "Smart contracts audited" },
  { metric: "Bug Bounty", value: "$100K", description: "Maximum reward" },
  { metric: "Response Time", value: "<24h", description: "Security incident response" }
]

export default function SecurityMeasures() {
  return (
    <section id="security" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Security Measures
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade security protecting your assets with industry-leading safeguards
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="glass hover:bg-white/20 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center">
                      <feature.icon size={24} className="text-black" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <CheckCircle 
                          size={16} 
                          className={feature.status === "implemented" ? "text-green-400" : "text-yellow-400"} 
                        />
                        <span className={`text-sm font-medium ${
                          feature.status === "implemented" ? "text-green-400" : "text-yellow-400"
                        }`}>
                          {feature.status === "implemented" ? "Implemented" : "In Progress"}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Audit Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="glass max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Security Audit Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {auditResults.map((audit, index) => (
                  <motion.div
                    key={audit.firm}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center space-y-4"
                  >
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${audit.color} rounded-full flex items-center justify-center`}>
                      <span className="text-2xl font-bold text-black">{audit.rating}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">{audit.firm}</div>
                      <div className="text-gray-400 text-sm">{audit.date}</div>
                      <div className="text-gray-300 text-sm mt-2">{audit.findings}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Card className="glass max-w-4xl mx-auto mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Security Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {securityMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.metric}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center space-y-2"
                  >
                    <div className="text-3xl font-bold gradient-text">{metric.value}</div>
                    <div className="text-white font-semibold">{metric.metric}</div>
                    <div className="text-gray-400 text-sm">{metric.description}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Security Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Multi-signature wallet implementation",
                  "Smart contract audits completed",
                  "Bug bounty program active",
                  "Emergency pause mechanisms",
                  "Real-time monitoring systems",
                  "Insurance coverage in place",
                  "Regular security updates",
                  "Penetration testing performed"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    >
                      <CheckCircle size={20} className="text-green-400" />
                    </motion.div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
