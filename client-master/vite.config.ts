import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      Assets: path.resolve(__dirname, "src/Assets"),
      auth: path.resolve(__dirname, "src/auth"),
      components: path.resolve(__dirname, "src/components"),
      LandingPage: path.resolve(__dirname, "src/LandingPage"),
      view: path.resolve(__dirname, "src/view"),
      service: path.resolve(__dirname, "src/service"),
      sessions: path.resolve(__dirname, "src/sessions"),
      useAxios: path.resolve(__dirname, "src/useAxios"),
      useReactive: path.resolve(__dirname, "src/useReactive")
    }
  }
});
