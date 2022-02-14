import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "src",
    },
  },
  plugins: [vue()],
  build: {
    outDir: "lib",
    lib: {
      entry: "./src/components/preview-image/index.ts",
      name: "previewImage",
    },
  },
});
