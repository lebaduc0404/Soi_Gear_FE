import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// Vite configuration
export default defineConfig({
  plugins: [
    // Plugin to resolve TypeScript path aliases
    tsconfigPaths(),
    // Plugin to support React features
    react(),
  ],
  // Base URL for deployment
  base: "/",
});
