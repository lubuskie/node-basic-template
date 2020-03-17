FROM node:12.14.0-alpine

WORKDIR /usr/src/node-auth-service

COPY package.json .
RUN npm install && npm install -g nodemon
COPY . .

# CMD [ "npm", "start"]

