import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import checker from "vite-plugin-checker";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
    visualizer({
      filename: "stats.html",
      open: true,
    }),
  ],
});
