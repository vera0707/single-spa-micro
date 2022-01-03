import { defineConfig } from 'vite'

export default defineConfig({
  server:{
    cors: false,
    port: 4000,
    proxy:{
      '/fm-webser/api': 'http://10.1.193.27:6061',
      '/crm': 'http://10.1.193.27:6061',
      '/websocket/*': {
        target: 'http://10.1.193.27:8083',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/websocket/, '')
      },
      '/socket': {
        target: 'http://10.1.193.27:8083',
        rewrite: (path) => path.replace(/^\/socket/, '')
      },
      '/tdtvector': 'http://192.168.74.189:9999'
    }
  },
})
