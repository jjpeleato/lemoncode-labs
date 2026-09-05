import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
        autoStaticPathsDiscovery: false,
      },
      pages: [
        { path: '/houses/1' },
        { path: '/houses/2' },
        { path: '/houses/3' },
        { path: '/houses/4' },
        { path: '/houses/5' },
        { path: '/houses/6' },
      ],
      sitemap: {
        enabled: false,
      },
    }),
    viteReact(),
  ],
})

export default config
