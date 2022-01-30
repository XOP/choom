import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    ssr: false,
    isProduction: true,
    reactivityTransform: true
  })],
  build: {
    // https://github.com/vitejs/vite/issues/2679
    commonjsOptions: {
      exclude: ["choom-theme/*"],
      include: [],
    },
    // waiting on the cssExtract: false option
    // https://github.com/vitejs/vite/issues/4345
    cssCodeSplit: true,
    outDir: "lib",
    lib: {
      entry: resolve(__dirname, "../src/index.js"),
      formats: ["umd", "es"],
      name: "choom-vue",
    },
    rollupOptions: {
      external: ["vue", "choom-theme"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
