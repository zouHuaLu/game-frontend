import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver, ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: 'less' }), ElementPlusResolver({ importStyle: 'sass' }), VantResolver({ importStyle: 'less' })]
    })
  ],
  build: {
    outDir: '../server/dist/static/client',
    chunkSizeWarningLimit: 1024
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#736af2',
          'link-color': '#736af2'
        },
        javascriptEnabled: true
      },
      scss: {
        charset: false,
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  },
  server: {
    port: 3001
  }
})
