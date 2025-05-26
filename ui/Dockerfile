# Budowanie projektu
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install && pnpm build

# Serwowanie przez nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80