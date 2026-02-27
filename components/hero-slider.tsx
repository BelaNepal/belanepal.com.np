"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { basePath } from "@/lib/utils"

const heroImages = [
  { src: `${basePath}/hero-image.png`, alt: "Hero image" },
  { src: `${basePath}/bela-eco-panel.jpg`, alt: "Bela eco panels" },
  { src: `${basePath}/sustainable-building-materials-manufacturing.jpg`, alt: "Sustainable building materials manufacturing" },
  { src: `${basePath}/modular-construction-assembly-process.jpg`, alt: "Modular construction assembly process" },
]

export function HeroSlider() {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [flipIndex, setFlipIndex] = useState(0)
  const [typedText, setTypedText] = useState("")

  const flipWords = t.hero.flipWords || []

  // Next/Prev slide
  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [])

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Auto slide
  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 5000)
    return () => clearInterval(slideTimer)
  }, [nextSlide])

  // Flip index
  useEffect(() => {
    if (flipWords.length === 0) return
    const flipTimer = setInterval(() => {
      setFlipIndex((prev) => (prev + 1) % flipWords.length)
    }, 2500)
    return () => clearInterval(flipTimer)
  }, [flipWords])

  // Typing effect for English
  useEffect(() => {
    if (language !== "en") return
    const word = flipWords[flipIndex] || ""
    let i = 0
    setTypedText("")
    const typingInterval = setInterval(() => {
      setTypedText(word.slice(0, i + 1))
      i++
      if (i === word.length) clearInterval(typingInterval)
    }, 150)
    return () => clearInterval(typingInterval)
  }, [flipIndex, flipWords, language])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <section id="home" className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black">
      {/* Image Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={heroImages[currentIndex].src || "/placeholder.svg"}
              alt={heroImages[currentIndex].alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Title */}
              <motion.h1
                key={t.hero.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight text-left"
              >
                {t.hero.title}
              </motion.h1>

              {/* Flip Word */}
              {flipWords.length > 0 && (
                <div className="mt-2 flex justify-start">
                  <AnimatePresence mode="wait">
                    {language === "ne" ? (
                      <motion.span
                        key={flipIndex}
                        initial={{ rotateX: -90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: 90, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="text-[#1b5e20] font-extrabold text-3xl md:text-4xl lg:text-5xl block 
                                   px-4 py-2 bg-white/30 backdrop-blur-sm rounded-lg shadow-md origin-top"
                      >
                        {flipWords[flipIndex]}
                      </motion.span>
                    ) : (
                      <motion.span
                        key={flipIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-primary font-extrabold text-3xl md:text-4xl lg:text-5xl block 
                                   px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg shadow-md"
                      >
                        {typedText}
                        <span className="animate-pulse">|</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Subtitle */}
              <motion.p
                key={t.hero.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base md:text-lg lg:text-xl text-white/90 mt-4 leading-relaxed text-pretty max-w-2xl text-left"
              >
                {t.hero.subtitle}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-primary/50 transition-all mt-6"
                  asChild
                >
                  <a href="#services">{t.hero.cta}</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full h-12 w-12 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full h-12 w-12 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
