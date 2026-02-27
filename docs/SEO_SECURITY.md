# SEO & Security Setup

This project implements modern best practices for Search Engine Optimization (SEO), AI-readiness, and frontend security, suitable for a Static Web App.

## 🔍 SEO & AI Optimization

All SEO configuration is centralized in **`app/layout.tsx`**.

### 1. Next.js Metadata API
We use the Static Metadata API to generate `<head>` tags.
- **Title & Description**: Optimized for relevant keywords ("eco panels", "Nepal construction").
- **Open Graph (OG)**: Rich previews for Facebook/LinkedIn/WhatsApp.
- **Twitter Cards**: Summary card configuration.
- **Canonical URLs**: Prevents duplicate content issues.
- **Robots.txt**: Directives for search crawlers.

### 2. JSON-LD (Structured Data)
We inject `application/ld+json` script tags to help AI models (ChatGPT, Gemini) and Search Engines understand the business entity.
- **Schema Type**: `Organization`
- **Fields**: Name, Logo, ContactPoint, Address, SameAs (Social Links).

To update this data, modify the `jsonLd` object in `app/layout.tsx`.

## 🛡️ Security Measures

Since this is a static site (SPA), backend security measures (like rate limiting) are handled by the hosting provider (e.g., Cloudflare, Vercel). However, we enforce strong Client-Side Security.

### 1. Content Security Policy (CSP)
Implemented via `<meta>` tags in `app/layout.tsx`.
- **Prevents XSS**: Restricts where scripts can run from.

### 2. Tab Nabbing Protection
All external links (using `target="_blank"`) are secured with `rel="noopener noreferrer"`.
- **Why**: Prevents the destination page from controlling the parent window (Tab Nabbing).
- **Where**: Applied automatically in components like `LocationSection` (Maps) and `ServicesSection`.
- **Allowed Sources**: `'self'`, `google.com` (Maps), `gstatic.com`.
- **Inline Styles**: Allowed for run-time CSS-in-JS (Tailwind/Framer).

### 2. HTTP Headers (Meta Equivalents)
These headers protect the users directly in the browser:
- **X-Frame-Options: DENY**: Prevents Clickjacking (site cannot be embedded in an iframe).
- **X-Content-Type-Options: nosniff**: Prevents MIME-sniffing attacks.
- **Referrer-Policy: strict-origin-when-cross-origin**: Protects user privacy.
- **X-XSS-Protection: 1; mode=block**: Legacy XSS filtering.

### 3. Input Sanitization
- **React Escaping**: By default, React escapes all strings rendered in JSX, preventing 99% of XSS attacks.
- **No SQL Injection**: As a static site with no database connection, the app is immune to SQLi.
