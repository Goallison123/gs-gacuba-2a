import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 5173,
    strictPort: true,
  },

  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
    strictPort: true,
  },

  build: {
    target: "es2022",
    sourcemap: false,
    minify: "esbuild",
    cssMinify: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },
});