"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Configuration for easy toggle
export const POPUP_CONFIG = {
  enabled: true,
  title: "Website Under Development",
  message: "Our website is under active development. Some sections may be unavailable for now, but we’ll be back soon with new features and improvements designed just for you. Thank you for your patience.",
  buttonText: "Learn More",
  buttonLink: "/services",
  delay: 2000 
}

export function SitePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already dismissed it in this session (optional, but good UX)
    // For now, staying consistent with previous behavior (always show on reload)
    if (POPUP_CONFIG.enabled) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, POPUP_CONFIG.delay)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-white/20 ring-1 ring-black/5"
            >
                {/* Modern Gradient Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#1e2d4d] via-[#ef7e1a] to-[#1e2d4d]" />

                {/* Close Button - High Z-Index & Hover Effect */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-50 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all duration-200"
                    aria-label="Close popup"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 pt-10 text-center">
                    {/* Icon with soft glow background */}
                    <div className="mx-auto mb-6 relative">
                        <div className="absolute inset-0 bg-[#ef7e1a]/20 blur-xl rounded-full transform scale-150"></div>
                        <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-slate-100 dark:border-slate-700 text-[#ef7e1a]">
                            <Info className="w-10 h-10" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {POPUP_CONFIG.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                        {POPUP_CONFIG.message}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <Button 
                            variant="ghost" 
                            onClick={() => setIsOpen(false)}
                            className="w-full sm:w-auto text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            Dismiss
                        </Button>
                        <Button 
                            asChild
                            className="w-full sm:w-auto bg-[#1e2d4d] hover:bg-[#2a3f6a] text-white shadow-lg shadow-blue-900/20"
                        >
                            <Link href={POPUP_CONFIG.buttonLink} onClick={() => setIsOpen(false)}>
                                {POPUP_CONFIG.buttonText}
                            </Link>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
