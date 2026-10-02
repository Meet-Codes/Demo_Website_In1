import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components/ui': path.resolve(__dirname, './components/ui'),
    },
  },
  server: {
    port: 5173,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096
  }
});
