"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiSupport, HiChat, HiArrowRight } from "react-icons/hi"
import { FaTelegram, FaDiscord, FaTwitter } from "react-icons/fa"

const contactMethods = [
  {
    icon: HiMail,
    title: "Email Support",
    description: "Get help with your account or investments",
    contact: "support@allegra.com",
    responseTime: "Within 24 hours",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: HiChat,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    contact: "Available 24/7",
    responseTime: "Instant",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FaTelegram,
    title: "Telegram",
    description: "Join our community for updates and support",
    contact: "@AllegraProtocol",
    responseTime: "Within 1 hour",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FaDiscord,
    title: "Discord",
    description: "Connect with other investors and get help",
    contact: "Allegra Protocol",
    responseTime: "Within 2 hours",
    color: "from-indigo-500 to-blue-500"
  }
]

const faqs = [
  {
    question: "How do I get started with ALLEGRA Protocol?",
    answer: "Simply create an account, choose your investment strategy, and start earning. Our AI will handle the rest."
  },
  {
    question: "What are the minimum investment amounts?",
    answer: "You can start with as little as $100 USDT. There's no maximum limit for qualified investors."
  },
  {
    question: "How often are returns paid?",
    answer: "Returns are calculated and paid daily. You can withdraw your earnings anytime after the 30-day lock period."
  },
  {
    question: "Is my investment secure?",
    answer: "Yes, we use multi-signature wallets, AI-powered audits, and institutional-grade security measures."
  },
  {
    question: "Can I change my investment strategy?",
    answer: "Yes, you can switch strategies at any time. Changes take effect on the next investment cycle."
  },
  {
    question: "What happens if the market crashes?",
    answer: "Our AI continuously monitors market conditions and automatically adjusts strategies to protect your capital."
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Have questions about our platform? Need support with your investments? 
              We're here to help you succeed with ALLEGRA Protocol.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods - Side by Side Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold gradient-text text-center mb-8">Get in Touch</h2>
            
            {/* Side by Side Layout for Contact Methods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Primary Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">Primary Support</h3>
                {contactMethods.slice(0, 2).map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-300"
                          >
                            <method.icon className="h-6 w-6" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-foreground mb-2">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-foreground">{method.contact}</p>
                              <p className="text-xs text-muted-foreground">Response: {method.responseTime}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Community Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">Community Support</h3>
                {contactMethods.slice(2, 4).map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-300"
                          >
                            <method.icon className="h-6 w-6" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-foreground mb-2">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-foreground">{method.contact}</p>
                              <p className="text-xs text-muted-foreground">Response: {method.responseTime}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container mx-auto px-4">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HiMail className="h-5 w-5" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Inquiry Type</label>
                  <select
                    className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="investment">Investment Questions</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <Button type="submit" variant="gradient" className="w-full">
                  Send Message
                  <HiArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
                >
                  <HiSupport className="h-5 w-5 text-foreground" />
                </motion.div>
                <span>Frequently Asked Questions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-all duration-300 group/faq"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0 group-hover/faq:bg-foreground transition-colors duration-300"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-foreground">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Office Information - Side by Side Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text text-center mb-8">Office Information</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Office Location & Phone */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-300"
                        >
                          <HiLocationMarker className="h-6 w-6" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">Office Location</h4>
                          <p className="text-sm text-muted-foreground">
                            123 Financial District<br />
                            New York, NY 10004<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-300"
                        >
                          <HiPhone className="h-6 w-6" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">Phone Support</h4>
                          <p className="text-sm text-muted-foreground">
                            +1 (555) 123-4567<br />
                            Mon-Fri: 9AM-6PM EST<br />
                            Emergency: 24/7
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Business Hours */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-300"
                        >
                          <HiClock className="h-6 w-6" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">Business Hours</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Monday - Friday:</span>
                              <span className="text-sm font-medium text-foreground">9:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Saturday:</span>
                              <span className="text-sm font-medium text-foreground">10:00 AM - 4:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Sunday:</span>
                              <span className="text-sm font-medium text-foreground">Closed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Support Status */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="glass hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">Support Status</h4>
                          <p className="text-sm text-muted-foreground">All systems operational</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-500">Online</p>
                          <p className="text-xs text-muted-foreground">24/7 Support</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-8">Follow Us</h2>
            <div className="flex justify-center space-x-6">
              <Button variant="glass" size="lg" className="flex items-center space-x-2">
                <FaTwitter className="h-5 w-5" />
                <span>Twitter</span>
              </Button>
              <Button variant="glass" size="lg" className="flex items-center space-x-2">
                <FaTelegram className="h-5 w-5" />
                <span>Telegram</span>
              </Button>
              <Button variant="glass" size="lg" className="flex items-center space-x-2">
                <FaDiscord className="h-5 w-5" />
                <span>Discord</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
