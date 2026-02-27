"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { whyUsFeatures } from "@/lib/data"
import Image from "next/image"
import { basePath } from "@/lib/utils"

export function WhyUsSection() {
  const { language } = useLanguage()

  return (
    <section
      id="why-us"
      className="py-12 sm:py-16 lg:py-20 bg-background dark:bg-gray-900 relative overflow-hidden scroll-mt-32"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 pointer-events-none" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 sm:mb-6 md:mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            {language === 'en' ? 'Our Advantages' : 'हाम्रा फाइदाहरु'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-1 sm:mb-2 tracking-tight">
            {language === "en"
              ? "Why Choose Bela Nepal Industries"
              : "बेला नेपाल इन्डस्ट्रीज किन रोज्ने?"}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-3"></div>
          <p className="text-muted-foreground dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-snug">
            {language === "en"
              ? "Affordable, sustainable, and modular construction solutions that redefine modern living."
              : "किफायती, दिगो र मोड्युलर निर्माण समाधान जसले आधुनिक बासस्थानलाई नयाँ परिभाषा दिन्छ।"}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-2 sm:gap-y-3 md:gap-y-4">
          {whyUsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group perspective"
            >
              <div className="relative w-full">
                {/* Desktop Flip */}
                <div className="hidden lg:block relative h-[230px] transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <Card className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-card text-card-foreground dark:bg-gray-800 dark:text-white border-2 group-hover:border-4 group-hover:border-primary rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 backface-hidden">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 rounded-full bg-primary/10 dark:bg-white group-hover:bg-primary/20 transition-colors duration-300">
                        <Image
                          src={`${basePath}${feature.icon}`}
                          alt={language === "en" ? feature.title : feature.titleNe}
                          width={48}
                          height={48}
                          className="object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-black dark:text-primary group-hover:text-primary-dark transition-colors">
                        {language === "en" ? feature.title : feature.titleNe}
                      </h3>
                    </div>
                  </Card>

                  {/* Back */}
                  <Card className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center bg-[#1e2d4d] dark:bg-gray-700 text-white border-4 border-primary rounded-2xl rotate-y-180 backface-hidden shadow-md hover:shadow-primary/30 transition-all duration-500">
                    <p className="text-sm md:text-base leading-relaxed">
                      {language === "en" ? feature.description : feature.descriptionNe}
                    </p>
                  </Card>
                </div>

                {/* Tablet & Mobile: stacked */}
                <Card className="lg:hidden flex flex-col items-center p-3 text-center bg-card dark:bg-gray-800 text-card-foreground dark:text-white border-2 border-border group-hover:border-4 group-hover:border-primary rounded-2xl shadow-md transition-all duration-500">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-2 rounded-full bg-primary/10 dark:bg-white">
                      <Image
                        src={`${basePath}${feature.icon}`}
                        alt={language === "en" ? feature.title : feature.titleNe}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black dark:text-primary">
                      {language === "en" ? feature.title : feature.titleNe}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground dark:text-gray-300 mt-1">
                      {language === "en" ? feature.description : feature.descriptionNe}
                    </p>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
