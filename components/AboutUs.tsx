"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiShieldCheck, HiTrendingUp, HiCog } from "react-icons/hi"
import { FaRobot } from "react-icons/fa"

const teamMembers = [
  {
    name: "Dr. Elena Rodriguez",
    role: "AI Research Lead",
    expertise: "Machine Learning, AI Algorithms",
    experience: "PhD in Machine Learning, 8+ years in AI research",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Blockchain Architect",
    expertise: "Blockchain Technology, Smart Contracts",
    experience: "MSc Computer Science, 10+ years in blockchain development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Sarah Johnson",
    role: "Quantitative Finance Lead",
    expertise: "Financial Engineering, Risk Management",
    experience: "MSc Financial Engineering, 12+ years in quantitative finance",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "Security Engineering Lead",
    expertise: "Cybersecurity, Smart Contract Audits",
    experience: "Cybersecurity Specialist, 15+ years in security engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
]


const keyFeatures = [
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ), 
    title: "No minimum deposit", 
    description: "Start investing with any amount you're comfortable with" 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    ), 
    title: "Full transparency", 
    description: "Complete visibility into all investment strategies and performance" 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
      </svg>
    ), 
    title: "30-day lock on initial deposit", 
    description: "Secure your investment with our 30-day lock period" 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ), 
    title: "Daily USDT rewards", 
    description: "Earn consistent daily returns in USDT" 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ), 
    title: "AI security", 
    description: "Advanced AI-powered security monitoring and protection" 
  }
]

export function AboutUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About ALLEGRA Protocol
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing the DeFi space by combining cutting-edge artificial intelligence with 
            proven investment strategies to deliver consistent, fixed returns of 0.1-4% daily. Our mission 
            is to make sophisticated investment strategies accessible to everyone while maintaining the 
            highest standards of security and transparency.
          </p>
        </motion.div>

        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold gradient-text text-center mb-12">KEY FEATURES</h3>
          <div className="space-y-6">
            {/* First row - 3 features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {keyFeatures.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 h-full">
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-4 text-primary">{feature.icon}</div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Second row - 2 features centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                {keyFeatures.slice(3, 5).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <Card className="glass hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 h-full">
                      <CardContent className="pt-6 text-center">
                        <div className="flex justify-center mb-4 text-primary">{feature.icon}</div>
                        <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>


        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2023 by a team of blockchain veterans and AI researchers, ALLEGRA Protocol 
                was born from a simple observation: traditional DeFi platforms were too complex and 
                risky for the average investor.
              </p>
              <p>
                We set out to create a platform that would democratize access to sophisticated 
                investment strategies while providing the security and transparency that institutional 
                investors expect. By combining artificial intelligence with proven DeFi protocols, 
                we've created a system that delivers consistent returns while managing risk effectively.
              </p>
              <p>
                Today, ALLEGRA Protocol serves over 10,000 investors worldwide, managing more than 
                $50 million in assets with a 94.2% success rate. Our AI-powered system has generated 
                over $2.5 million in returns for our community.
              </p>
            </div>
          </div>
          <div className="relative">
            <Card className="glass p-8">
              <h4 className="text-xl font-bold mb-4">Why Choose ALLEGRA?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiShieldCheck className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold">Institutional-Grade Security</h5>
                    <p className="text-sm text-muted-foreground">Multi-signature wallets and AI-powered audits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaRobot className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold">AI-Powered Optimization</h5>
                    <p className="text-sm text-muted-foreground">Continuous portfolio optimization for maximum returns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiTrendingUp className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold">Fixed Daily Returns</h5>
                    <p className="text-sm text-muted-foreground">Predictable 0.1-4% daily returns with full transparency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiCog className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold">24/7 Support</h5>
                    <p className="text-sm text-muted-foreground">Round-the-clock customer support and monitoring</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold gradient-text mb-6">Ready to Join Our Community?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start earning consistent returns today with our AI-powered investment platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" variant="gradient" asChild>
              <a href="/auth">Create Account</a>
            </Button>
            <Button size="lg" variant="glass" asChild>
              <a href="/investment-solutions">View Strategies</a>
            </Button>
          </div>
        </motion.div>

        {/* Team Section - Moved to last before footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold gradient-text text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${index % 2 === 0 ? 'md:mt-0' : 'md:mt-8'} ${index === 1 ? 'lg:mt-4' : ''} ${index === 3 ? 'lg:mt-4' : ''}`}
              >
                <Card className="glass hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 h-full">
                  <CardContent className="pt-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                    <p className="text-sm text-blue-500 mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-2">{member.expertise}</p>
                    <p className="text-xs text-muted-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
