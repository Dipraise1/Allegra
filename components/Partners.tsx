"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    width: 120,
    height: 40
  },
  {
    name: "Anthropic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Anthropic_logo.svg",
    width: 120,
    height: 40
  },
  {
    name: "Google AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    width: 120,
    height: 40
  },
  {
    name: "Microsoft AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    width: 120,
    height: 40
  },
  {
    name: "Meta AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    width: 120,
    height: 40
  },
  {
    name: "Hugging Face",
    logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
    width: 120,
    height: 40
  },
  {
    name: "Cohere",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Cohere_Logo.svg",
    width: 120,
    height: 40
  },
  {
    name: "Stability AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Stability_AI_logo.svg",
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
          <h2 className="text-2xl font-bold gradient-text mb-4">Powered by Leading AI Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ALLEGRA Protocol leverages cutting-edge AI technology from industry leaders
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
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-muted-foreground font-semibold text-sm px-4 py-2 border border-border rounded-lg';
                      fallback.textContent = partner.name;
                      target.parentElement.appendChild(fallback);
                    }
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
