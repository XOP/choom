import { resolve } from "path";

import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import { scss } from 'svelte-preprocess';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        scss({
          implementation: sass
        }),
      ]
    }),
  ],
  build: {
    // https://github.com/vitejs/vite/issues/2679
    commonjsOptions: {
      include: [],
      exclude: ["choom-theme/*"],
    },
    cssCodeSplit: true,
    outDir: "lib",
    lib: {
      entry: resolve(__dirname, "../src/index.js"),
      formats: ["umd", "es"],
      name: "choom-svelte",
    },
    rollupOptions: {
      external: ["choom-theme"],
      output: {
        globals: {
          "choom-theme": "theme",
        },
      }
    },
  },
});
