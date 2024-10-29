import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Trendify_Ecommerce/',  // Replace <repository-name> with your repo name
});

