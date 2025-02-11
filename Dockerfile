# ----------------------------------------------------
# Dockerfile for ReactJS app with Vite
# Author: Hirusha Adikari
# ----------------------------------------------------

# ----------------------------
# Stage 1 (build react app)
# ----------------------------
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY . .

# layer squashing
RUN npm install -g npm@latest && \
  npm cache clean --force && \
  npm install --save-dev --legacy-peer-deps && \
  npm run build && \
  npm cache clean --force && \
  rm -rf /root/.npm && \
  rm -rf node_modules


# ----------------------------
# Stage 2 (deploy with nginx)
# ----------------------------
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
