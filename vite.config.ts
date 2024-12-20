import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@axiosInstanse': path.resolve(
        __dirname,
        './src/share/utils/axiosInstanse.ts'
      ),
    },
  },
  plugins: [react()],
  server: {
    port: 5555,
  },
  build: {
    outDir: 'build',
    copyPublicDir: true,
  },
});
