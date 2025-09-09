"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Download, 
  FileText, 
  BarChart3, 
  Users, 
  Globe,
  Twitter,
  Github,
  Linkedin,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Building,
  User,
  Briefcase
} from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black dark:from-black dark:via-purple-900 dark:to-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/background-realistic-abstract-technology-particle 2/3409297.jpg')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Resources & Documentation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Everything You Need to Know
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive documentation, performance data, backtests, and community resources 
              to make informed investment decisions with ALLEGRA Protocol.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Documentation & Downloads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>White Paper</span>
                  </CardTitle>
                  <CardDescription>
                    Complete technical documentation and protocol overview
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Comprehensive guide covering AI architecture, risk management, 
                    governance, and economic model.
                  </p>
                  <Button variant="gradient" className="w-full" asChild>
                    <a href="/whitepaper">
                      <Download className="w-4 h-4 mr-2" />
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
                  <CardDescription>
                    Historical performance data and analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Detailed performance metrics, risk analysis, and 
                    strategy effectiveness reports.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/performance">
                      <ExternalLink className="w-4 h-4 mr-2" />
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
                  <CardDescription>
                    Third-party security assessments and audits
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Comprehensive security audits, penetration testing, 
                    and smart contract verification reports.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/security">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Audits
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Backtests & Simulations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Backtests & Simulations
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Historical Performance Analysis</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Strategy Backtesting</h4>
                          <p className="text-muted-foreground text-sm">
                            Comprehensive backtesting of AI strategies across various market conditions 
                            and time periods.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Risk Analysis</h4>
                          <p className="text-muted-foreground text-sm">
                            Detailed risk metrics including maximum drawdown, volatility analysis, 
                            and stress testing results.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                          <Zap className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Monte Carlo Simulations</h4>
                          <p className="text-muted-foreground text-sm">
                            Statistical modeling to project potential future performance 
                            under various market scenarios.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Interactive Data Explorer</h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                        <h4 className="font-bold mb-2">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="opacity-80">Average Daily Return:</span>
                            <div className="font-bold">2.1%</div>
                          </div>
                          <div>
                            <span className="opacity-80">Sharpe Ratio:</span>
                            <div className="font-bold">1.8</div>
                          </div>
                          <div>
                            <span className="opacity-80">Max Drawdown:</span>
                            <div className="font-bold">-8.2%</div>
                          </div>
                          <div>
                            <span className="opacity-80">Win Rate:</span>
                            <div className="font-bold">78%</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full" asChild>
                          <a href="/performance">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            View Detailed Analytics
                          </a>
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <a href="/dapp">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Access Live Dashboard
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Who Benefits from ALLEGRA?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Individual Investors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Access to institutional-grade strategies</li>
                    <li>• No minimum deposit requirements</li>
                    <li>• Flexible reward management</li>
                    <li>• Transparent performance tracking</li>
                    <li>• 24/7 global market access</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Institutions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Scalable investment solutions</li>
                    <li>• Risk-adjusted returns</li>
                    <li>• Regulatory compliance</li>
                    <li>• Professional reporting</li>
                    <li>• Custom allocation strategies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span>Corporate Treasury</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Treasury management solutions</li>
                    <li>• Yield optimization</li>
                    <li>• Liquidity management</li>
                    <li>• Risk mitigation</li>
                    <li>• Automated operations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <Globe className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Global Accessibility</h3>
                  <p className="text-muted-foreground">
                    ALLEGRA Protocol is designed for global accessibility, supporting users worldwide 
                    with multi-chain compatibility and 24/7 operations across all time zones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Links & Community */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Join Our Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-6">
                  <Twitter className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Twitter</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Follow for updates, announcements, and market insights
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Follow
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-6">
                  <Github className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">GitHub</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Open source code, smart contracts, and development updates
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-6">
                  <Linkedin className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Professional updates, team insights, and industry news
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Discord</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Join our community for discussions and support
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Join
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Access all resources and start your journey with ALLEGRA Protocol today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <a href="/auth">
                  Sign Up Now
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
    </div>
  )
}

