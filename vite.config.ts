import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "/vite-power/",
  plugins: [
    react(),
    legacy({
      targets: ["defaults"],
    }),
  ],
});
