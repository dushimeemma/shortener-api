
FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5000

RUN yarn build

CMD ["yarn", "start:dev"]
