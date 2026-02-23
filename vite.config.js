import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", 
  assetsInclude: ['**/*.JPG'], // ← This fixes the "Invalid JS syntax" error for images
});