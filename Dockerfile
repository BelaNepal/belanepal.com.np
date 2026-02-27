# Stage 1: Install dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Stage 2: Build the static site
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm
# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED 1
# Build command (should run "next build" which produces 'out' folder due to output: 'export' config)
RUN pnpm build

# Stage 3: Serve with Nginx
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Clean default Nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
# With basePath: '/belaweb2test', Next.js static export puts content in 'out/'
# We copy the contents of 'out' ensuring the directory structure corresponds to the URL structure.
COPY --from=builder /app/out .

# Copy custom Nginx configuration
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
