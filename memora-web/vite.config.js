import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração para o Vite reconhecer a pasta do GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/memora-web/',
})
