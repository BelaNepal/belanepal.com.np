"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { CheckCircle2, Leaf, Building2, ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import { basePath } from "@/lib/utils"

const serviceData = [
  {
    icon: Leaf,
    image: `${basePath}/sustainable-construction.jpg`, // ✅ fixed path
    gradient: "from-emerald-500/80 to-teal-600/80",
    glow: "from-emerald-400/20 to-teal-500/20",
    link: "https://belanepal.com.np/ecopanel",
    bgColor: "#1e2d4d",
    badgeColor: "#1e2d4d",
  },
  {
    icon: Building2,
    image: `${basePath}/modular-building-construction.png`, // ✅ fixed path
    gradient: "from-amber-500/80 to-orange-600/80",
    glow: "from-amber-400/20 to-orange-500/20",
    link: "https://belanepal.com.np/modularhome",
    bgColor: "linear-gradient(135deg, #ef7e1a 0%, #ffae42 100%)",
    badgeColor: "#ef7e1a",
  },
]

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      ...serviceData[0],
      title: t.services.ecoPanels.title,
      description: t.services.ecoPanels.description,
      features: t.services.ecoPanels.features,
      learnMore: t.services.ecoPanels.learnMore,
    },
    {
      ...serviceData[1],
      title: t.services.modularConstruction.title,
      description: t.services.modularConstruction.description,
      features: t.services.modularConstruction.features,
      learnMore: t.services.modularConstruction.learnMore,
    },
  ]

  return (
    <section
      id="services"
      className="relative py-12 lg:py-20 overflow-hidden bg-gray-50/50 dark:bg-gray-950/50"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-orange-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            {t.services.title}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            {t.services.title}
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-primary to-orange-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-black/40 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-700 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative h-128 md:h-152 flex flex-col bg-white dark:bg-gray-900">
                  
                  {/* Image Section */}
                  <div className="relative w-full grow transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:grow-0 group-hover:h-[40%] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-700" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-6 right-6 z-20 overflow-hidden rounded-full font-sans">
                      <div 
                        className="px-4 py-2 text-white text-sm font-semibold flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                        style={{ backgroundColor: service.badgeColor }}
                      >
                        <span>{service.learnMore}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Pre-hover Content (Bottom Left) */}
                    <div className="absolute bottom-8 left-8 right-8 z-20 transform transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-10">
                      <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white shadow-lg mb-4">
                        <Icon className="w-6 h-6" style={{ color: service.badgeColor }} />
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Revealed Content Section */}
                  <div 
                    className="relative h-0 group-hover:h-[60%] opacity-90 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
                    style={{ background: service.bgColor }}
                  >
                    <div className="absolute inset-0 p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                      
                      <div className="flex items-center gap-4 mb-4 shrink-0">
                         <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm shadow-inner">
                           <Icon className="w-6 h-6 text-white" />
                         </div>
                         <h3 className="text-2xl font-bold text-white leading-none">
                            {service.title}
                         </h3>
                      </div>

                      <ul className="space-y-3 mb-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-white/90 shrink-0 mt-0.5" />
                            <span className="text-base font-medium text-white/90 leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-auto pt-4 flex items-center text-white/80 font-semibold text-sm tracking-wide uppercase group-hover:text-white transition-colors shrink-0">
                         {service.learnMore} <ArrowRight className="ml-2 w-4 h-4 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
