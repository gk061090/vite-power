import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "development" ? "/" : "/vite-power/",
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // "@fcc/react-use": require.resolve("@fcc/react-use"),
    },
  },
}));
