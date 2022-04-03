FROM node:16-alpine

WORKDIR /home/api

COPY package.json .
# COPY package-lock.json .
COPY yarn.lock .

RUN yarn install

CMD yarn start:dev