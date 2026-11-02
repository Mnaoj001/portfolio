import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // This repository is published at https://mnaoj001.github.io/portfolio/.
  base: '/portfolio/',
  plugins: [react()],
});
