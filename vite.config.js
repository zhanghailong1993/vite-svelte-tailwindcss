import { defineConfig } from 'vite'
import path from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteVConsole } from 'vite-plugin-vconsole'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      svelte(),
      viteVConsole({
        entry: [path.resolve('src/main.js')],
        localEnabled: command === 'serve',
        enabled: command === 'serve',
        config: {
          maxLogNumber: 1000,
          theme: 'dark'
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      port: 3344,
      proxy: {
        '/api': {
          target: 'http://api.coindesk.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
