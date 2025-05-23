import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: { open: true, port: 3001, host: true },
  plugins: [react(), tailwindcss()],

  base: "/central-texas-fly-fishing",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
