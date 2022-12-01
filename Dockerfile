FROM node:16.15-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm run build

COPY . .
