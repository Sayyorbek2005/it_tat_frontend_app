# --- build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# lock-fayl bo'yicha toza o'rnatish
COPY package*.json ./
RUN npm ci

# source kodni ko'chiramiz va prod build qilamiz (CRA -> build/)
COPY . .
RUN npm run build

# --- runtime stage ---
FROM nginx:1.27-alpine

# Nginx konfiguratsiyasi
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Build natijasini Nginx rootiga ko'chiramiz
COPY --from=build /app/build /usr/share/nginx/html
