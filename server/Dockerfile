FROM node:fermium
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

# the command that starts our app
CMD ["node", "index.js"]
