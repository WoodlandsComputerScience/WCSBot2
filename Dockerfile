FROM node:fermium-alpine
#FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install

COPY . ./

#EXPOSE 8080
CMD npm start

