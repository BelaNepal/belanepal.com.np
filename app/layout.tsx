import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ClientProviders from "../components/ClientProviders" // ✅ new client wrapper
import { SitePopup } from "@/components/site-popup"
import { basePath } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://belanepal.com"), // Replace with actual domain
  title: {
    default: "Bela Nepal Industries - Sustainable Construction Solutions",
    template: "%s | Bela Nepal Industries",
  },
  description:
    "Leading manufacturer of eco-friendly panels and modular construction solutions in Nepal. Building tomorrow with sustainable innovation.",
  keywords:
    "eco panels, modular construction, sustainable building, Nepal construction, green building materials",
  authors: [{ name: "Bela Nepal Industries" }],
  openGraph: {
    title: "Bela Nepal Industries",
    description:
      "Leading manufacturer of eco-friendly panels and modular construction solutions in Nepal.",
    url: "https://belanepal.com",
    siteName: "Bela Nepal Industries",
    images: [
      {
        url: `${basePath}/og-image.jpg`, // Ensure this image exists
        width: 1200,
        height: 630,
        alt: "Bela Nepal Industries Eco Panels",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bela Nepal Industries",
    description: "Sustainable modular construction solutions in Nepal.",
    images: [`${basePath}/og-image.jpg`], // Ensure this image exists
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://belanepal.com",
    languages: {
      "en-US": "/en",
      "ne-NP": "/ne",
    },
  },
  generator: "Bela Nepal Industries IT Team",
  icons: {
    icon: `${basePath}/favicon.ico`,
  },
}

export const viewport: Viewport = {
  themeColor: "#0a192f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD structured data for AI and SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bela Nepal Industries",
  url: "https://belanepal.com",
  logo: `https://belanepal.com${basePath}/bela-logo.png`,
  sameAs: [
    "https://facebook.com/BelaNepalindustries",
    "https://instagram.com/belanepal",
    "https://twitter.com/BelaNepal",
    "https://linkedin.com/company/bela-nepal-industries",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-1-5922974",
    contactType: "customer service",
    areaServed: "NP",
    availableLanguage: ["en", "ne"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chhauni-15",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Security Headers (CSP & Others) for Static Export */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://*.google.com https://*.googleapis.com https://*.gstatic.com blob:; font-src 'self' https://fonts.gstatic.com data:; frame-src 'self' https://*.google.com;"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ClientProviders>
          <SitePopup />
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}

