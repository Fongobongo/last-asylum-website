# ==============================================================================
# Stage 1: Build Astro static site
# ==============================================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer caching)
COPY site/package*.json ./site/
WORKDIR /app/site
RUN npm ci || npm install

# Copy site sources
WORKDIR /app
COPY site/ ./site/

# Build static site (includes sync check, astro build, and pagefind indexing)
WORKDIR /app/site
ENV NODE_ENV=production
RUN npm run build

# ==============================================================================
# Stage 2: Serve with ultralight Nginx Alpine
# ==============================================================================
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default nginx HTML files
RUN rm -rf ./*

# Copy compiled static files from builder
COPY --from=builder /app/site/dist .

# Copy custom Nginx configuration with clean URLs and gzip
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port 80 exposed for JustRunMy.App / cloud hosts
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
