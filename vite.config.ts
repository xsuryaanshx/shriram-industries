import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // For GitHub Pages: defaults to /shriram-industries/ in production
  base: process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/shriram-industries/' : '/'),
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) return 'three';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('react-router') || id.includes('react-dom') || id.includes('/react/')) return 'vendor';
          }
        },
      },
    },
  },
});
