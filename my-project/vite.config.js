import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      path: 'path-browserify',
      url: 'url',
      'source-map-js': 'source-map-js'
    }
  }
})
