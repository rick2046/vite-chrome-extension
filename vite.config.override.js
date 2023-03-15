import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  root: 'src/override',
  build: {
    rollupOptions: {
      output: {
        dir: "dist/override"
      }
    }
  }
})