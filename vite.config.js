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
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    styles: ['styled-components', '@emotion/react', '@emotion/styled'],
                    ui: ['@mui/material', '@mui/icons-material']
                }
            }
        }
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
