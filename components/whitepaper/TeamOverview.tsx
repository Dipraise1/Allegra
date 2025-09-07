"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former Goldman Sachs VP with 15+ years in quantitative finance and DeFi protocols.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    expertise: ["Quantitative Finance", "DeFi", "Risk Management"]
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI researcher specializing in machine learning and blockchain technology.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    expertise: ["Machine Learning", "Blockchain", "AI Research"]
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Security",
    bio: "Former NSA cybersecurity expert with deep experience in smart contract security.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    expertise: ["Cybersecurity", "Smart Contracts", "AI Security"]
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of Research",
    bio: "PhD in Computer Science from MIT, specializing in algorithmic trading and DeFi protocols.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    expertise: ["Algorithmic Trading", "DeFi Research", "Computer Science"]
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Former Coinbase senior engineer with expertise in scalable blockchain infrastructure.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    expertise: ["Blockchain Infrastructure", "Scalability", "Engineering"]
  },
  {
    name: "Lisa Thompson",
    role: "Head of Operations",
    bio: "Former McKinsey consultant with extensive experience in fintech operations and strategy.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    expertise: ["Operations", "Strategy", "Fintech"]
  }
]

const advisors = [
  {
    name: "Prof. Robert Zhang",
    role: "Advisor - AI/ML",
    bio: "Professor of Computer Science at Stanford, AI research pioneer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Jennifer Liu",
    role: "Advisor - DeFi",
    bio: "Former Aave protocol contributor, DeFi ecosystem expert",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Dr. James Wilson",
    role: "Advisor - Security",
    bio: "Former Chainlink security lead, blockchain security specialist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
  }
]

export default function TeamOverview() {
  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Team Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            World-class team of experts from leading technology and finance companies
          </p>
        </motion.div>

        {/* Core Team */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white text-center mb-12"
          >
            Core Team
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className="glass hover:bg-white/20 transition-all duration-300 h-full group hover:scale-105">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                    <div className="text-blue-400 font-semibold">{member.role}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                    
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4 pt-4">
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 glass rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Linkedin size={16} className="text-gray-300 hover:text-white" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 glass rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Twitter size={16} className="text-gray-300 hover:text-white" />
                      </motion.a>
                      <motion.a
                        href={member.social.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 glass rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Github size={16} className="text-gray-300 hover:text-white" />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Advisors
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className="glass hover:bg-white/20 transition-all duration-300 h-full group">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20"
                    >
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <CardTitle className="text-white text-lg">{advisor.name}</CardTitle>
                    <div className="text-purple-400 font-semibold text-sm">{advisor.role}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm text-center leading-relaxed">{advisor.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Team Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-white font-semibold">Years Experience</div>
                  <div className="text-gray-400 text-sm">Combined team experience</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="text-white font-semibold">Companies</div>
                  <div className="text-gray-400 text-sm">Previous employers</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">3</div>
                  <div className="text-white font-semibold">PhD Holders</div>
                  <div className="text-gray-400 text-sm">Advanced degrees</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-white font-semibold">Remote First</div>
                  <div className="text-gray-400 text-sm">Global team</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
