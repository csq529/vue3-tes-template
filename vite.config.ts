import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir);
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue()
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
      comps: resolve("src/components"),
      store: resolve("src/store"),
    },
  },
  server: {
    host: 'localhost',
    port: 3001,
    open: true,
    // proxy: {
    //   '/protal': {
    //     // target: 'http://office-test.myt11.com', // 代理接口
    //     target: 'http://office-qa.myt11.com',
    //     changeOrigin: true,
    //     // rewrite: (path) => path.replace(/^\/api/, ''),
    //   }
    // }

    proxy: {
      "/api": {
        target: "http://office-qa.myt11.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
