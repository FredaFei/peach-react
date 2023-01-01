import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    define: {
      isDev: command === 'serve'
    },
    plugins: [
      Unocss(),
      react(),
    ],
  }
})
