import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver, ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import type { UserConfigExport } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const config: UserConfigExport = {
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
  }

  if (mode === 'development') {
    config.plugins!.unshift(PkgConfig({ packageJsonPath: 'vite-deps.json' }), OptimizationPersist())
  } else {
    config.css!.modules = {
      generateScopedName: '[hash:6]'
    }
  }

  return config
}
