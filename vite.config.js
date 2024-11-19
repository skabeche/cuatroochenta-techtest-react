import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@layouts": path.resolve(__dirname, "./src/layouts/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@public": path.resolve(__dirname, "./public/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
