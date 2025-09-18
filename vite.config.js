import react from '@vitejs/plugin-react-swc';
import path from 'path';
import commonjs from 'vite-plugin-commonjs';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@Mocks': path.resolve(__dirname, './src/Mocks'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@services': path.resolve(__dirname, './src/services'),
      '@validations': path.resolve(__dirname, './src/validations'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});
