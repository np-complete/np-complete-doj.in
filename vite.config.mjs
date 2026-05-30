import yaml from '@modyfi/vite-plugin-yaml'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src', // Set root to src so index.html is found at /
  plugins: [react(), yaml()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      // If there are any specific aliases, add them here
    },
  },
})
