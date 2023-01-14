/// <reference path="env.d.ts" />

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import env from "vite-plugin-env-compatible";

export default defineConfig({
  plugins: [env({ prefix: "", mountedPath: "process.env" }), vue()],
  base: `/${process.env.npm_package_name}/`,
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: "iife",
      },
    },
  },
});
