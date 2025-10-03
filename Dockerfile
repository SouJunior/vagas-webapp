FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --ignore-scripts

COPY src/ ./src/
COPY public/ ./public/
COPY index.html vite.config.js tsconfig.json ./

RUN yarn build

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

RUN mkdir -p node_modules/.cache node_modules/.vite && \
    chmod -R 755 /app

USER nodejs

EXPOSE 3000
CMD ["yarn", "serve", "--host", "0.0.0.0", "--port", "3000"]