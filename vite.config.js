import { defineConfig } from 'vitest/config';
import commonjs from 'vite-plugin-commonjs';
import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";

export default defineConfig({
    base: '/',
    plugins: [commonjs(), react(), svgr()],
    build: {
        outDir: 'build',
        assetsDir: 'assets',
        sourcemap: true,
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
