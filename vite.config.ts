import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ViteImageOptimizer()],
  base: process.env.GITHUB_ACTIONS ? "/umkm-kuliner-template/" : "/",
});
