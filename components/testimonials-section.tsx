"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { testimonials } from "@/lib/data"
import { Card } from "@/components/ui/card"
import { ChevronUp, ChevronDown, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { basePath } from "@/lib/utils"

export function TestimonialsSection() {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Use all testimonials
  const items = testimonials

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
        handleNext()
    }, 8000)
    return () => clearInterval(timer)
  }, [currentIndex])


  const currentTestimonial = items[currentIndex]

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-10 lg:py-20 overflow-hidden bg-white dark:bg-gray-950 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        
        {/* Arctic Wrapper: Flex container */}
        <div className="flex flex-col lg:flex-row relative">
          
          {/* Left Text Box */}
          <motion.div 
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[480px] bg-gray-100 dark:bg-gray-900 p-12 lg:p-20 shadow-xl lg:shadow-[0_0_8px_rgba(255,255,255,0.1)] z-10 shrink-0 text-center lg:text-left rounded-3xl lg:rounded-none lg:rounded-l-3xl lg:h-[460px] flex flex-col justify-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20 self-center lg:self-start">
              {language === 'en' ? 'Testimonials' : 'प्रशंसापत्र'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
              {language === 'en' ? 'Trusted by' : 'विश्वास गरिएको'}
              <br />
              <span className="text-[#ef7e1a]">{language === 'en' ? 'Industry Leaders' : 'उद्योग नेताहरूद्वारा'}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {language === 'en' 
                ? "Hear directly from leaders on how they build their future with our sustainable solutions."
                : "हाम्रा दिगो समाधानहरूसँग उनीहरूले आफ्नो भविष्य कसरी निर्माण गर्छन् भन्ने बारे नेताहरूबाट सीधै सुन्नुहोस्।"
              }
            </p>
          </motion.div>

          {/* Right Quote Box Wrapper */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:flex-1 relative lg:-ml-[40px] lg:mt-[50px] z-20 mt-8"
          >
            <div className="bg-[#1e2d4d] p-8 md:p-16 lg:p-[70px_60px] text-white shadow-2xl relative h-[600px] lg:h-[550px] flex flex-col justify-between rounded-3xl lg:rounded-3xl">
              
              {/* Quote Header Line */}
              <div className="w-16 h-1 bg-[#ef7e1a] mb-8 rounded absolute top-10 left-8 md:left-16" />

              {/* Decorative Quote Icon */}
              <Quote className="absolute top-8 right-8 text-white/5 w-24 h-24 rotate-12" />

              {/* Slider Content */}
              <div className="relative overflow-hidden mt-8 flex-1">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-col gap-6"
                  >
                    <p className="text-xl md:text-2xl lg:text-3xl italic font-medium leading-relaxed font-serif text-white/95">
                      &ldquo;{language === 'en' ? currentTestimonial.content : currentTestimonial.contentNe}&rdquo;
                    </p>
                    
                    <div className="flex items-center gap-4 mt-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#ef7e1a] shrink-0">
                            <Image 
                                src={`${basePath}${currentTestimonial.image}`} 
                                alt={currentTestimonial.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[#ef7e1a] font-bold text-lg tracking-wide uppercase">
                                {language === 'en' ? currentTestimonial.name : currentTestimonial.nameNe}
                            </p>
                            <p className="text-white/60 text-sm">
                                {language === 'en' ? currentTestimonial.position : currentTestimonial.positionNe}, {language === 'en' ? currentTestimonial.company : currentTestimonial.companyNe}
                            </p>
                        </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-[#ef7e1a]/30 rounded-full mt-12 overflow-hidden relative">
                 <motion.div 
                   key={currentIndex} 
                   initial={{ width: "0%" }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 8, ease: "linear" }}
                   className="h-full bg-[#ef7e1a]"
                 />
              </div>

              {/* Navigation Arrows */}
              <div className="absolute right-4 bottom-4 lg:right-[-24px] lg:top-1/2 lg:-translate-y-1/2 flex lg:flex-col gap-3 z-30">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 bg-[#ef7e1a] hover:bg-[#1e2d4d] text-white rounded-lg lg:rounded flex items-center justify-center shadow-lg transition-all duration-300 group ring-4 ring-white/10 lg:ring-0"
                  aria-label="Previous"
                >
                  <ArrowLeft className="w-5 h-5 lg:hidden" />
                  <ChevronUp className="w-6 h-6 hidden lg:block group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 bg-[#ef7e1a] hover:bg-[#1e2d4d] text-white rounded-lg lg:rounded flex items-center justify-center shadow-lg transition-all duration-300 group ring-4 ring-white/10 lg:ring-0"
                  aria-label="Next"
                >
                  <ArrowRight className="w-5 h-5 lg:hidden" />
                  <ChevronDown className="w-6 h-6 hidden lg:block group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
