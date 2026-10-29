# Build context is the repository root ("projet_aie": "file:..").
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN npm ci --prefix frontend

# Vite inlines these at build time; they must be URLs reachable from the browser
ARG VITE_API_URL=http://localhost:3000
ARG VITE_APP_URL=http://localhost:5000
ENV VITE_API_URL=$VITE_API_URL VITE_APP_URL=$VITE_APP_URL

COPY frontend ./frontend
RUN npm run build --prefix frontend

FROM nginx:alpine
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/frontend/dist /usr/share/nginx/html
EXPOSE 80
