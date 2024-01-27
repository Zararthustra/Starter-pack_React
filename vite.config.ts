/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      // add this to cache all the imports
      workbox: {
        globPatterns: ['**/*']
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ['**/*'],
      manifest: {
        theme_color: '#FAFAFA',
        background_color: '#FAFAFA',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: 'MY_PROJECT',
        description: 'MY_PROJECT description',
        name: 'MY_PROJECT',
        icons: [
          // {
          //   src: '/logo-192.png',
          //   sizes: '192x192',
          //   type: 'image/png'
          // },
          // {
          //   src: '/logo-512.png',
          //   sizes: '512x512',
          //   type: 'image/png'
          // }
        ]
      }
    })
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  },
  test: {
    coverage: {
      provider: 'v8',
      exclude: ['src/assets', 'src/services', 'src/components']
    },
    typecheck: {
      include: ['src/queries']
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/setupTest.ts'],
    exclude: ['./node_modules'],
    include: ['**/*.test.ts?(x)']
  }
});
