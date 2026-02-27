"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import { milestones } from "@/lib/data"
import { Card } from "@/components/ui/card"

// Animated Counter
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useRef({ current: 0 }).current
  const { theme } = useTheme()

  const animateValue = (target: number, duration = 2000) => {
    const start = performance.now()
    const initial = motionValue.current

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      const current = initial + (target - initial) * progress
      motionValue.current = current
      if (ref.current) ref.current.textContent = Math.floor(current).toLocaleString()
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) animateValue(value)
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div
      className={`text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg ${
        theme === "dark"
          ? "text-[#ef731a]"
          : "bg-clip-text text-transparent bg-primary"
      }`}
    >
      <span ref={ref}>0</span>
      <span className="ml-1">{suffix}</span>
    </div>
  )
}

// Modern Milestones Section
export function MilestonesSection() {
  const { t, language } = useLanguage()
  const { theme } = useTheme()

  return (
    <section className="relative py-8 lg:py-10 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl top-10 left-10 opacity-30"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 opacity-30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-2">
            {t.milestones.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Our journey towards innovation, sustainability, and growth."
              : "नवप्रवर्तन, दिगोपन र वृद्धितर्फ हाम्रो यात्राको तथ्याङ्क।"}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  theme === "dark"
                    ? "bg-[#ef731a]/20"
                    : "bg-gradient-to-r from-primary/20 to-blue-400/20"
                } blur-xl`}
              />

              <Card
                className={`relative z-10 border rounded-2xl p-6 h-48 flex flex-col justify-center items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === "dark"
                    ? "bg-[#1e2d4d]/80 border-[#ef731a]/50"
                    : "bg-white/70 border-border/30"
                } backdrop-blur-md`}
              >
                <Counter value={milestone.value} suffix={milestone.suffix} />
                <p
                  className={`mt-3 text-sm md:text-base font-medium ${
                    theme === "dark" ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {language === "en" ? milestone.label : milestone.labelNe}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
