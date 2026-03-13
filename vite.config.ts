import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  server: { port: 4000 },
  plugins: [
    react({
      reactRefreshHost:'http://localhost:5173' // TO make HMR works on host when changes are made in remote app
    }),
    federation({
      dts: true,
      publicPath: 'auto', // To make remoteLoading works
      name: "app1_remote",
      filename: "remote.app1.[hash].js",
      manifest: {
        fileName: 'manifest.app1.json',
      },
      exposes: {
        './AppOne': './src/App',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
})
