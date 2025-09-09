"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Download, 
  FileText, 
  BarChart3, 
  Shield,
  ArrowRight
} from "lucide-react"

export default function ResourcesCTA() {
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
            Get Started Today
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access comprehensive documentation, performance data, and community resources 
            to make informed investment decisions with ALLEGRA Protocol.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span>White Paper</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Complete technical documentation and protocol overview
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="/whitepaper">
                  <Download className="w-3 h-3 mr-1" />
                  Download PDF
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span>Performance Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Historical performance data and analysis
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="/performance">
                  View Reports
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span>Security Audits</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Third-party security assessments and audits
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="/risk-management">
                  View Audits
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span>Backtests</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Historical strategy performance and simulations
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="/resources">
                  View Data
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <a href="/auth">
                Sign Up & Connect Wallet
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">
                Contact Support
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
