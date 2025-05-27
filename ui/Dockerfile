# 1️⃣ Building the project
FROM node:20 AS builder
WORKDIR /app

# Copy everything, including .env.production (created by GitHub Actions)
COPY . .

# Install PNPM and build the project
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Vite will automatically use .env.production if it exists
RUN pnpm build

# 2️⃣ Serving with nginx
FROM nginx:alpine

# Copy the built frontend
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80
