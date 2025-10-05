FROM node:20 AS build
ARG VITE_BACKEND_URL=https://solid-space-palm-tree-gxv6wp6r96r2p4v4-3001.app.github.dev/api/v1
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist .