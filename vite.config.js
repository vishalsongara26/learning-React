import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/learning-React/'   // <-- EXACT repo name (case-sensitive)
})
