"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Languages, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { basePath } from "@/lib/utils"
import { useActiveSection } from "@/hooks/use-active-section"
import { MaintenanceBanner } from "@/components/maintenance-banner"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: t.nav.home, href: "#home", id: "home" },
    { label: t.nav.services, href: "#services", id: "services" },
    { label: t.nav.WhyUs, href: "#why-us", id: "why-us" },
    { label: t.nav.blog, href: "#blog", id: "blog" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
  ]
  
  // Use a larger offset (e.g. 150px) to account for the sticky header + banner height + scroll-mt
  const activeSection = useActiveSection(navItems.map(item => item.id), 150)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1e2d4d]/95 backdrop-blur-xl border-b border-[#ef7e2a]/30 shadow-md"
          : "bg-transparent"
      }`}
    >
      <MaintenanceBanner />
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-16" : "h-28"
          }`}
        >
          {/* ✅ Logo - fully left for mobile */}
          <Link
            href="#home"
            className="flex items-center gap-3 group 
              md:ml-0 ml-[-1rem] sm:ml-[-0.5rem]" // shifts logo far left only on mobile
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`relative transition-all duration-300 ${
                isScrolled ? "h-12 w-48" : "h-20 w-64"
              }`}
            >
              <Image
                src={`${basePath}/bela-logo.png`}
                alt="Bela Nepal Industries"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id || (item.id === "home" && activeSection === "")
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative text-base font-medium transition-colors group ${
                      isActive 
                        ? "text-[#ef7e2a]" 
                        : isScrolled
                          ? "text-[#efefef] hover:text-[#ef7e2a]"
                          : "text-white hover:text-[#ef7e2a]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-[#ef7e2a] ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* ✅ Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-full transition-all hover:scale-110 ${
                isScrolled ? "text-[#ef7e2a] hover:bg-[#ef7e2a]/20" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.div>
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className={`rounded-full transition-all hover:scale-110 ${
                isScrolled ? "text-[#ef7e2a] hover:bg-[#ef7e2a]/20" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle language"
            >
              <span className="text-xs font-semibold">{language === "en" ? "EN" : "ने"}</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden rounded-full transition-all hover:scale-110 ${
                isScrolled ? "text-[#ef7e2a] hover:bg-[#ef7e2a]/20" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* <DateTimeDisplay /> */}
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1e2d4d]/95 backdrop-blur-lg border-t border-[#ef7e2a]/30"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-[#ef7e2a] hover:text-[#ff9040] transition-colors block py-2"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
