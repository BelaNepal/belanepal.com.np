"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import Link from "next/link"
import Image from "next/image"
import { locations } from "@/lib/data"
import { basePath } from "@/lib/utils"

// Helper Component for Office Status
function OfficeStatus() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<"open" | "closed" | "saturday" | "closing-soon">("closed")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkStatus = () => {
      // Create date object for Nepal Time (UTC+5:45)
      // Since we can't reliably get Client timezone, we use local time as proxy or UTC offset
      // For simplicity in this demo, we use local system time.
      // Pro implementation would use date-fns-tz or similar.
      const now = new Date()
      const day = now.getDay() // 0 = Sunday, 6 = Saturday
      const hour = now.getHours()
      const minute = now.getMinutes()
      
      // Saturday is Closed
      if (day === 6) {
        setStatus("saturday")
        return
      }

      // Check hours (10:00 - 17:00)
      const currentTime = hour * 60 + minute
      const openTime = 10 * 60 // 10:00 AM
      const closeTime = 17 * 60 // 5:00 PM
      const closingWarning = closeTime - 30 // 30 mins before closing

      if (currentTime >= openTime && currentTime < closeTime) {
        if (currentTime >= closingWarning) {
          setStatus("closing-soon")
        } else {
          setStatus("open")
        }
      } else {
        setStatus("closed")
      }
    }

    checkStatus()
    const interval = setInterval(checkStatus, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null // Avoid hydration mismatch

  const getStatusConfig = () => {
    switch (status) {
      case "open":
        return { 
          color: "text-green-400", 
          bg: "bg-green-500/10 border-green-500/20", 
          icon: CheckCircle2, 
          text: t.footer.status.open 
        }
      case "closing-soon":
        return { 
          color: "text-yellow-400", 
          bg: "bg-yellow-500/10 border-yellow-500/20", 
          icon: AlertCircle, 
          text: t.footer.status.closingSoon 
        }
      case "saturday":
        return { 
          color: "text-red-400", 
          bg: "bg-red-500/10 border-red-500/20", 
          icon: XCircle, 
          text: t.footer.status.saturdayClosed 
        }
      case "closed":
      default:
        return { 
          color: "text-gray-400", 
          bg: "bg-gray-500/10 border-gray-500/20", 
          icon: Clock, 
          text: t.footer.status.closed 
        }
    }
  }

  const config = getStatusConfig()
  const StatusIcon = config.icon

  return (
    <div className={`mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${config.bg} backdrop-blur-sm self-start`}>
      <span className={`relative flex h-2.5 w-2.5`}>
        {(status === "open" || status === "closing-soon") && (
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status === "open" ? "bg-green-500" : "bg-yellow-500"}`}></span>
        )}
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${status === "open" ? "bg-green-500" : status === "closing-soon" ? "bg-yellow-500" : "bg-gray-500"}`}></span>
      </span>
      <span className={`text-xs font-bold uppercase tracking-wider ${config.color}`}>
        {config.text}
      </span>
    </div>
  )
}

// TikTok Icon
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M448,209.9a210.1,210.1,0,0,1-122.6-39.2V330.6A181.4,181.4,0,0,1,144.4,512C64.7,512,0,447.3,0,367.6S64.7,223.2,144.4,223.2a144,144,0,0,1,28.4,2.9v87.8a57,57,0,0,0-28.4-7.3,57.2,57.2,0,1,0,57.2,57.2V0h74.2a135.9,135.9,0,0,0,133.8,106.5Z" />
  </svg>
)

// X (Twitter) Icon
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor">
    <path d="M239.1 0L124 120.7 8.9 0 0 8.9 114.1 129.6 0 250.3l8.9 8.9 115.1-120.7 115.1 120.7 8.9-8.9-114.1-120.7L248 8.9z" />
  </svg>
)

// Instagram Icon
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
      <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54.69,54.69,0,0,0-30.16-30.16C284.36,124,224,124,224,124s-60.36,0-94.55,7.55a54.69,54.69,0,0,0-30.16,30.16C88.73,158.64,88.73,224,88.73,224s0,65.36,10.56,94.55a54.69,54.69,0,0,0,30.16,30.16C163.64,324,224,324,224,324s60.36,0,94.55-7.55a54.69,54.69,0,0,0,30.16-30.16C359.27,289.36,359.27,224,359.27,224S359.27,158.64,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.4-148.8a19,19,0,1,1,19-19A19,19,0,0,1,309.4,189.2Z"/>
    </svg>
  )
}

export function Footer() {
  const { t, language } = useLanguage()

  const quickLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.blog, href: "#blog" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const services = [
    { label: language === "en" ? "Eco Panels" : "इको प्यानल", href: "https://belanepal.com.np/ecopanel" },
    { label: language === "en" ? "Modular Construction" : "मोड्युलर निर्माण", href: "https://belanepal.com.np/modularhome" },
    { label: language === "en" ? "Consultation" : "परामर्श", href: "#contact" },
    { label: language === "en" ? "Custom Solutions" : "अनुकूलित समाधान", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/BelaNepalindustries/", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: XIcon, href: "https://twitter.com/BelaNepal", label: "X", color: "hover:bg-black" },
    { icon: InstagramIcon, href: "https://www.instagram.com/belanepal/", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/bela-nepal-industries/", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@belanepal", label: "TikTok", color: "hover:bg-black" },
  ]

  return (
    <footer className="bg-[#1e2d4d] text-white">
      {/* Wave Divider */}
      <div className="h-16 md:h-24 bg-white dark:bg-gray-950 w-full relative -mt-0.5">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            className="fill-[#1e2d4d]"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">

        {/* ===== Desktop Footer ===== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <div className="relative h-20 w-56 mb-2">
              <Image src={`${basePath}/bela-logo.png`} alt="Bela Nepal Industries" fill className="object-contain" priority />
            </div>
            <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-6">{t.footer.description}</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className={`bg-white/10 hover:text-white text-white/80 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}>
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            
            {/* Office Hours */}
            <div className="mt-8 pt-6 border-t border-white/10 w-full">
              <h4 className="text-sm font-semibold text-white/90 mb-2 uppercase tracking-wide opacity-80">{t.footer.officeHoursLabel}</h4>
              <div className="flex flex-col gap-1">
                <p className="text-white/80 text-sm flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-primary-foreground/60 shrink-0" />
                    <span className="font-medium tracking-wide">{t.footer.officeHoursValue}</span>
                </p>
                
                {/* Modern Status Badge */}
                <OfficeStatus />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-[#ef7e2a] rounded-full" />
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-[#ef7e2a] transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-[#ef7e2a] rounded-full" />
              {language === "en" ? "Our Services" : "हाम्रा सेवाहरू"}
            </h3>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.label}>
                  <Link href={service.href} className="text-sm text-white/70 hover:text-[#ef7e2a] transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-[#ef7e2a] rounded-full" />
              {t.footer.contact}
            </h3>
            {locations.map((location, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-semibold text-white/90">{language === "en" ? location.name : location.nameNe}</h4>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-5 w-5 text-[#ef7e2a] flex-shrink-0" />
                  <span>{language === "en" ? location.address : location.addressNe}</span>
                </div>
                {location.phone && <div className="flex items-center gap-2 text-sm text-white/70"><Phone className="h-5 w-5 text-[#ef7e2a] flex-shrink-0"/><a href={`tel:${location.phone}`} className="hover:text-[#ef7e2a] transition-colors">{location.phone}</a></div>}
                {location.email && <div className="flex items-center gap-2 text-sm text-white/70"><Mail className="h-5 w-5 text-[#ef7e2a] flex-shrink-0"/><a href={`mailto:${location.email}`} className="hover:text-[#ef7e2a] transition-colors">{location.email}</a></div>}
              </div>
            ))}
            <Button className="mt-4 bg-[#ef7e2a] hover:bg-[#ff9040] text-white rounded-full px-6 transition-all hover:scale-105" asChild>
              <Link href="#contact">{language === "en" ? "Get in Touch" : "सम्पर्क गर्नुहोस्"}</Link>
            </Button>
          </div>
        </div>

        {/* ===== Mobile Footer ===== */}
        <div className="md:hidden space-y-4">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <div className="relative h-16 w-40">
              <Image src={`${basePath}/bela-logo.png`} alt="Bela Nepal Industries" fill className="object-contain" priority />
            </div>
          </div>
          {/* Description below logo */}
          <p className="text-center text-white/70 text-sm px-4">{t.footer.description}</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 my-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`bg-white/10 hover:text-white text-white/80 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}>
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>

          {/* Quick Links Accordion */}
          <Collapsible>
            <CollapsibleTrigger className="w-full flex justify-between items-center text-white font-semibold py-2 px-2 bg-white/10 rounded-lg">{t.footer.quickLinks}</CollapsibleTrigger>
            <CollapsibleContent className="pl-2 mt-2 space-y-2 transition-all duration-300 ease-in-out">
              {quickLinks.map(link => <Link key={link.href} href={link.href} className="block text-white/70 hover:text-[#ef7e2a]">{link.label}</Link>)}
            </CollapsibleContent>
          </Collapsible>

          {/* Services Accordion */}
          <Collapsible>
            <CollapsibleTrigger className="w-full flex justify-between items-center text-white font-semibold py-2 px-2 bg-white/10 rounded-lg">{language === "en" ? "Our Services" : "हाम्रा सेवाहरू"}</CollapsibleTrigger>
            <CollapsibleContent className="pl-2 mt-2 space-y-2 transition-all duration-300 ease-in-out">
              {services.map(service => <Link key={service.label} href={service.href} className="block text-white/70 hover:text-[#ef7e2a]">{service.label}</Link>)}
            </CollapsibleContent>
          </Collapsible>

          {/* Contacts Accordion */}
          <Collapsible>
            <CollapsibleTrigger className="w-full flex justify-between items-center text-white font-semibold py-2 px-2 bg-white/10 rounded-lg">{t.footer.contact}</CollapsibleTrigger>
            <CollapsibleContent className="pl-2 mt-2 space-y-3 transition-all duration-300 ease-in-out">
              {locations.map((location, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-white/90">{language === "en" ? location.name : location.nameNe}</h4>
                  <p className="text-sm text-white/70">{language === "en" ? location.address : location.addressNe}</p>
                  {location.phone && <p className="text-sm text-white/70">📞 {location.phone}</p>}
                  {location.email && <p className="text-sm text-white/70">✉️ {location.email}</p>}
                </div>
              ))}
              <Button className="mt-2 w-full bg-[#ef7e2a] hover:bg-[#ff9040] text-white rounded-full px-4 py-2" asChild>
                <Link href="#contact">{language === "en" ? "Get in Touch" : "सम्पर्क गर्नुहोस्"}</Link>
              </Button>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center text-sm text-white/60">{t.footer.copyright}</p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link href="#" className="hover:text-[#ef7e2a] transition-colors">{language === "en" ? "Privacy Policy" : "गोपनीयता नीति"}</Link>
              <Link href="#" className="hover:text-[#ef7e2a] transition-colors">{language === "en" ? "Terms of Service" : "सेवा सर्तहरू"}</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
