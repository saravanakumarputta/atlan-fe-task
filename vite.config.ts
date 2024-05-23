import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import fixReactVirtualized from "esbuild-plugin-react-virtualized";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
    exclude: ["js-big-decimal"],
  },
});
