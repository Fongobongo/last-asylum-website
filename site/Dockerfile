# ==============================================================================
# Stage 1: Build Astro static site
# ==============================================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci || npm install

# Copy site sources
COPY . .

# Build static site
ENV NODE_ENV=production
RUN npm run build

# ==============================================================================
# Stage 2: Serve with Nginx Alpine
# ==============================================================================
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
