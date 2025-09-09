"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Shield, 
  DollarSign, 
  ArrowRight
} from "lucide-react"

export default function GovernanceTransparency() {
  return (
    <section className="py-16 px-4 bg-white/50 dark:bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
            Built on Trust and Decentralization
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Community-driven governance and transparent operations ensure the long-term 
            success and sustainability of ALLEGRA Protocol.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Governance Structure</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">ALLEGRA DAO</h4>
                      <p className="text-muted-foreground text-sm">
                        Community-driven governance through ALGT token holders. 
                        Progressive decentralization with key decisions made by token holders.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Smart Contract Security</h4>
                      <p className="text-muted-foreground text-sm">
                        Multi-signature wallets, automated auditing, and continuous 
                        monitoring ensure the security of user funds.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Fee Structure</h4>
                      <p className="text-muted-foreground text-sm">
                        15% performance fee on earnings, transparently distributed 
                        between AI operations, development, and governance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Legal Framework</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Registered Entity</h4>
                      <p className="text-muted-foreground text-sm">
                        Allegra Technologies Ltd. operates as a registered entity 
                        with proper legal structure and compliance frameworks.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/20 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Regulatory Compliance</h4>
                      <p className="text-muted-foreground text-sm">
                        Proactive engagement with regulatory frameworks and 
                        compliance with applicable financial regulations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Transparency Commitment</h4>
                      <p className="text-muted-foreground text-sm">
                        All operations are transparent and verifiable on-chain, 
                        with regular reporting and audit trails.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="gradient" size="lg" asChild>
            <a href="/about">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
