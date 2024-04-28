import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  devServer: {
    proxy: 'https://localhost:8000'
  },
  server: {
    proxy: 'https://localhost:8000',
    port: 3000
  }
})
