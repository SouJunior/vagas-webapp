import { defineConfig } from 'vitest/config';
import commonjs from 'vite-plugin-commonjs';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    base: '/',
    plugins: [commonjs(), react()],
    build: {
        outDir: 'build',
        assetsDir: 'assets',
        sourcemap: false,
    },
    server: {
        port: 3000,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.tsx',
        css: true,
        reporters: ['verbose'],
    },
});
