"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Wallet, 
  Brain, 
  DollarSign, 
  ArrowRight,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react"

export default function HowAllegraWorks() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            HOW ALLEGRA WORKS
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A simple, transparent process that turns your deposits into sustainable returns
          </p>
        </motion.div>

        {/* Main Flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 p-6 md:p-8 shadow-lg">
            <CardContent className="p-0">
              {/* Flowchart Container */}
              <div className="grid grid-cols-2 lg:flex lg:flex-row items-start justify-between gap-6 lg:gap-8">
                
                {/* Step 1: Deposit */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-auto"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 cursor-pointer hover:shadow-xl transition-all duration-300 shadow-lg">
                    <CardContent className="p-6 md:p-8 text-center">
                      <motion.div 
                        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <Wallet className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2">Deposit</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        Deposit USDT into your ALLEGRA account
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Arrow 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  <ArrowRight className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Step 2: AI Trades */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-auto"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 cursor-pointer hover:shadow-xl transition-all duration-300 shadow-lg">
                    <CardContent className="p-6 md:p-8 text-center">
                      <motion.div 
                        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <Brain className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2">AI Trades</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        Advanced AI analyzes markets and executes trades
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Arrow 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  <ArrowRight className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Step 3: Activities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-auto"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 cursor-pointer hover:shadow-xl transition-all duration-300 shadow-lg">
                    <CardContent className="p-6 md:p-8 text-center">
                      <motion.div 
                        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2">Activities</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <motion.div 
                          className="font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                        >
                          Arbitrage
                        </motion.div>
                        <motion.div 
                          className="font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                        >
                          Liquidity
                        </motion.div>
                        <motion.div 
                          className="font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                        >
                          Lending
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Arrow 3 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  <ArrowRight className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Step 4: Earnings */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-auto"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 cursor-pointer hover:shadow-xl transition-all duration-300 shadow-lg">
                    <CardContent className="p-6 md:p-8 text-center">
                      <motion.div 
                        className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </motion.div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2">Earnings</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        Daily returns of 0.1% to 4%
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Mobile Arrows - Hidden */}
              <div className="lg:hidden hidden">
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-primary rotate-180" />
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Process Summary - Hidden on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 text-center hidden md:block"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 md:py-4 border border-white/20 dark:border-gray-700/50 shadow-lg">
            <span className="text-sm md:text-lg font-semibold text-foreground">Deposit</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary hidden sm:block" />
            <ArrowRight className="w-4 h-4 text-primary rotate-90 sm:hidden" />
            <span className="text-sm md:text-lg font-semibold text-foreground">AI Trades</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary hidden sm:block" />
            <ArrowRight className="w-4 h-4 text-primary rotate-90 sm:hidden" />
            <span className="text-sm md:text-lg font-semibold text-foreground">Earn Daily</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary hidden sm:block" />
            <ArrowRight className="w-4 h-4 text-primary rotate-90 sm:hidden" />
            <span className="text-sm md:text-lg font-semibold text-foreground">Withdraw</span>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  <Shield className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="text-base font-semibold text-foreground mb-3">Secure & Audited</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Smart contracts audited by leading security firms
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <motion.div 
                  className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  <Clock className="w-6 h-6 text-secondary" />
                </motion.div>
                <h4 className="text-base font-semibold text-foreground mb-3">24/7 Trading</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AI never sleeps, continuously optimizing your returns
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <motion.div 
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  <TrendingUp className="w-6 h-6 text-accent" />
                </motion.div>
                <h4 className="text-base font-semibold text-foreground mb-3">Transparent</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All trades and returns are verifiable on-chain
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-sm md:text-base">
            Start Earning Today
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
