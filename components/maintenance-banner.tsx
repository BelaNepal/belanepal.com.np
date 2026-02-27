"use client"

import { useState } from "react"
import { X, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Configuration for easy toggle
export const MAINTENANCE_CONFIG = {
  enabled: true, // Toggle this to enable/disable
  message: "We’re improving our website. Some sections may be unavailable for now, but we’ll be back soon with a better experience. Thank you for your patience!",
  type: "info" as const, // 'alert', 'info', 'warning'
}

export function MaintenanceBanner() {
  const [isVisible, setIsVisible] = useState(MAINTENANCE_CONFIG.enabled)

  if (!isVisible) return null

  const bgColors = {
    alert: "bg-red-600",
    info: "bg-[#ef7e1a]",
    warning: "bg-yellow-500",
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ height: 0, opacity: 0 }}
           animate={{ height: "auto", opacity: 1 }}
           exit={{ height: 0, opacity: 0 }}
           className={`relative z-[100] ${bgColors[MAINTENANCE_CONFIG.type]} text-white shadow-md overflow-hidden`}
        >
          {/* Container with padding that accounts for the close button */}
          <div className="container mx-auto py-3 px-4 md:px-8 flex items-center justify-center min-h-[48px]">
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left pr-8 sm:pr-0 w-full">
              
              {/* Badge */}
              <span className="shrink-0 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 self-center sm:self-auto">
                 <Info className="w-3 h-3" />
                 {MAINTENANCE_CONFIG.type === 'info' ? 'Update' : 'Notice'}
              </span>

              {/* Message */}
              <p className="text-sm md:text-base font-medium leading-tight md:leading-normal max-w-[85ch] opacity-95">
                {MAINTENANCE_CONFIG.message}
              </p>

            </div>

            {/* Close Button - Larger touch target for mobile */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute right-2 top-2 sm:top-1/2 sm:-translate-y-1/2 p-2 hover:bg-black/10 active:bg-black/20 rounded-full transition-colors cursor-pointer"
              aria-label="Close notification"
            >
              <X className="h-5 w-5 opacity-90" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
