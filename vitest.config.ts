import * as path from "path"
import { defineConfig } from "vitest/config"

import viteConfig from './vite.config'

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  resolve: {
    alias: viteConfig.resolve!.alias,  // Viteのエイリアス設定を引き継ぐ
  },
})