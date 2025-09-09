"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  User, 
  Building, 
  Briefcase, 
  Globe,
  ArrowRight
} from "lucide-react"

const useCases = [
  {
    icon: User,
    title: "Individual Investors",
    description: "Access to institutional-grade strategies with no minimum deposit requirements",
    benefits: [
      "No minimum deposit",
      "Flexible reward management", 
      "Transparent performance tracking",
      "24/7 global market access"
    ],
    color: "text-gray-600 dark:text-gray-300"
  },
  {
    icon: Building,
    title: "Institutions",
    description: "Scalable investment solutions with professional reporting and compliance",
    benefits: [
      "Scalable investment solutions",
      "Risk-adjusted returns",
      "Regulatory compliance",
      "Professional reporting"
    ],
    color: "text-gray-600 dark:text-gray-300"
  },
  {
    icon: Briefcase,
    title: "Corporate Treasury",
    description: "Treasury management solutions with yield optimization and liquidity management",
    benefits: [
      "Treasury management solutions",
      "Yield optimization",
      "Liquidity management",
      "Automated operations"
    ],
    color: "text-gray-600 dark:text-gray-300"
  }
]

export default function UseCases() {
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
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
            Who Benefits from ALLEGRA?
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ALLEGRA Protocol serves diverse user groups with tailored solutions for 
            different investment needs and risk profiles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <useCase.icon className={`w-5 h-5 ${useCase.color}`} />
                    <span>{useCase.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <Globe className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Global Accessibility</h3>
              <p className="text-muted-foreground">
                ALLEGRA Protocol is designed for global accessibility, supporting users worldwide 
                with multi-chain compatibility and 24/7 operations across all time zones.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="gradient" size="lg" asChild>
            <a href="/resources">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
