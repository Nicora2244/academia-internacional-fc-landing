import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/academia-internacional-fc-landing/',
  server: {
    host: true,
    // Allow Cloudflare quick-tunnel hosts (and any *.trycloudflare.com) so
    // the dev server doesn't block externally shared preview links.
    allowedHosts: ['.trycloudflare.com'],
  },
})
