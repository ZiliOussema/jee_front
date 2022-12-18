FROM node:16.10-alpine AS build
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app
RUN  npm run build --configuration=production
FROM nginx:alpine
COPY --from=build    /app/dist/*  /usr/share/nginx/html/