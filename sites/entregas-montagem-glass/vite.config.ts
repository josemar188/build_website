import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import securityHeaders from './security-headers.json' with { type: 'json' }

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // `npm run preview` usa os mesmos cabeçalhos de segurança que o site publicado
  // (vercel.json para a Vercel, public/_headers para Netlify/Cloudflare Pages).
  // O `npm run dev` fica sem eles, porque o recarregamento automático usa scripts inline.
  preview: { headers: securityHeaders },
  build: { sourcemap: false },
})
