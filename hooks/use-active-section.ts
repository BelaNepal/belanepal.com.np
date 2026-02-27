"use client"

import { useState, useEffect } from "react"

export function useActiveSection(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            return
          }
        }
      }
      
      // If we're at the very top, set active to the first section
      if (window.scrollY < offset && sectionIds.length > 0) {
         setActiveSection(sectionIds[0])
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
