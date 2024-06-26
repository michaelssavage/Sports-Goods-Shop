/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  test: {
    setupFiles: "/src/setupTest.js",
    globals: true,
    environment: "jsdom",
  },
});
