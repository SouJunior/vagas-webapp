import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/',
    plugins: [commonjs(), react()],
    build: {
        outDir: 'build',
        assetsDir: 'assets',
        sourcemap: true,
        rollupOptions: {
            input: {
                main: './index.html',
            },
        },
    },
    server: {
        port: 3000,
    },
});
