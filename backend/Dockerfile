# Build context is the repository root: the backend imports ../constants.js
# and depends on the root package ("projet_aie": "file:..").
FROM node:22-alpine
WORKDIR /app

COPY package.json package-lock.json ./
COPY backend/package.json backend/package-lock.json ./backend/
# morgan is a devDependency but server.js imports it, so install everything
RUN npm ci --prefix backend

COPY constants.js ./
COPY backend ./backend

WORKDIR /app/backend
EXPOSE 3000
CMD ["node", "server.js"]
