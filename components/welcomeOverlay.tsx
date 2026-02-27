"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { basePath } from "@/lib/utils"

export function WelcomeOverlay({ duration = 4000 }: { duration?: number }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#1e2d4d]"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10, duration: 0.8 }}
            className="relative w-36 h-36 md:w-48 md:h-48 mb-8"
          >
            <Image
              src={`${basePath}/bela-logo.png`} // ✅ fixed for subpath
              alt="Bela Nepal Industries Pvt Ltd"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-6"
          >
            Welcome to Bela Nepal Industries Pvt. Ltd.
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
