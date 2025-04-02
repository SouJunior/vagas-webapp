FROM oven/bun:1.2.5-alpine

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --ignore-scripts

COPY src/ ./src/
COPY public/ ./public/

# Create directories and set permissions for the bun user
RUN mkdir -p node_modules/.cache node_modules/.vite && \
    chown -R bun:bun /app && \
    chmod -R 755 /app

USER bun
EXPOSE 3000
CMD ["bun", "run", "dev", "--host"]
