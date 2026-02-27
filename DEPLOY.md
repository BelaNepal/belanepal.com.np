# Deployment Guide for Bela Landing Page

This project is configured as a **Static Web Application** (SPA) with Server-Side optimizations using Next.js.
It is production-ready with modern security standards and performance optimizations.

## 🚀 Deployment Options

### Option 1: Docker (Recommended for VPS)
This method ensures the environment is identical to development and handles the web server configuration (Nginx) automatically.

1. **Upload Files to VPS**:
   Upload the entire project folder to your VPS.
   ```bash
   scp -r bela-landing-page user@your-vps-ip:/opt/
   ```

2. **Build and Run**:
   SSH into your VPS and run:
   ```bash
   cd /opt/bela-landing-page
   docker-compose up -d --build
   ```

3. **Verify**:
   The site should be accessible at `http://your-vps-ip`.

   *Note: If you have a domain, you should set up an Nginx Reverse Proxy or Traefik on the host machine to handle SSL (HTTPS), or modify the `Dockerfile`/`nginx.conf` to include Certbot.*

### Option 2: Manual Nginx Deployment
If you prefer not to use Docker:

1. **Build Locally**:
   ```bash
   pnpm install
   pnpm build
   ```
   This generates an `out` folder.

2. **Transfer**:
   Copy the `out` folder to your VPS web root (e.g., `/var/www/belanepal`).

3. **Configure Nginx**:
   Use the configuration provided in `nginx/nginx.conf` as a reference for your system's `/etc/nginx/sites-available/default`.

## 🛡️ Security Features Implemented

1. **Security Headers (Nginx)**:
   - `Strict-Transport-Security`: Enforces HTTPS (enable in nginx.conf if SSL is ready).
   - `X-Frame-Options: DENY`: Prevents clickjacking (cannot be embedded in iframes).
   - `X-Content-Type-Options: nosniff`: Prevents MIME type sniffing.
   - `Referrer-Policy`: Protects user data when navigating away.
   - `Permissions-Policy`: disables access to sensitive features like camera/mic by default.

2. **Content Security Policy (CSP)**:
   - Restricts script execution to 'self' and trusted Google domains (Maps, Fonts, Analytics).
   - Prevents XSS attacks.

3. **Code Quality**:
   - `next.config.mjs` enforces Strict Linting and Type Checking during build.
   - Project dependencies are locked via `pnpm-lock.yaml`.

## ⚙️ Configuration Notes

- **Base Path**: The current configuration uses `/belaweb2test` as a base path. 
  - If you are deploying to the **root** of a domain (e.g., `belanepal.com`), modify `next.config.mjs` to set `basePath` to `""` (empty string) before building.
  
- **Environment**:
  - `NODE_ENV=production` is set automatically in Docker.
