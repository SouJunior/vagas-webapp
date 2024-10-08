FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY src/ ./src/
COPY public/ ./public/

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

USER node
EXPOSE 3000
CMD ["yarn", "start"]
