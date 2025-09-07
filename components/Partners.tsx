"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    name: "Polygon",
    logo: "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png",
    width: 120,
    height: 40
  },
  {
    name: "Ethereum",
    logo: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    width: 120,
    height: 40
  },
  {
    name: "Chainlink",
    logo: "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png",
    width: 120,
    height: 40
  },
  {
    name: "Uniswap",
    logo: "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png",
    width: 120,
    height: 40
  },
  {
    name: "Aave",
    logo: "https://assets.coingecko.com/coins/images/12645/large/AAVE.png",
    width: 120,
    height: 40
  },
  {
    name: "Compound",
    logo: "https://assets.coingecko.com/coins/images/10775/large/COMP.png",
    width: 120,
    height: 40
  },
  {
    name: "MakerDAO",
    logo: "https://assets.coingecko.com/coins/images/1364/large/Mark_Maker.png",
    width: 120,
    height: 40
  },
  {
    name: "Curve",
    logo: "https://assets.coingecko.com/coins/images/12124/large/Curve.png",
    width: 120,
    height: 40
  }
]

export default function Partners() {
  return (
    <section className="py-16 bg-white/5 dark:bg-black/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold gradient-text mb-4">Trusted by Leading Protocols</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ALLEGRA Protocol integrates with the most established and secure DeFi platforms
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: [0, -100 * partners.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the partners array for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'text-muted-foreground font-semibold text-sm';
                    fallback.textContent = partner.name;
                    e.currentTarget.parentNode?.appendChild(fallback);
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
