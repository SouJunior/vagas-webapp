FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --ignore-scripts

COPY src/ ./src/
COPY public/ ./public/

# Permissões padrão para node
RUN mkdir -p node_modules/.cache node_modules/.vite && \
 chmod -R 755 /app

EXPOSE 3000
CMD ["yarn", "dev", "--host"]