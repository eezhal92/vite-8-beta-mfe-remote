import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),

    federation({
      dts: true,
      name: "app1_remote",
      filename: "remote.app1.[contenthash].js",
      manifest: {
        fileName: 'manifest.app1.json',
      },
      exposes: {
        './App1': './src/App',
      },

      shared: {}
    }),
  ],
})
