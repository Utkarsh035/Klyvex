import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Klyvex/',   // 👈 VERY IMPORTANT
  server: {
    host: true,
    allowedHosts: true
  }
})