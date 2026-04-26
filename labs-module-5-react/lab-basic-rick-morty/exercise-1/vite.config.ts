import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@features": resolve(__dirname, "src/features"),
      "@pages": resolve(__dirname, "src/pages"),
      "@router": resolve(__dirname, "src/router"),
      "@shared": resolve(__dirname, "src/shared"),
    },
  },
});
