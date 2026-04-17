import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Split heavy dependencies into separate chunks for better caching & parallel loading
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-particles": ["react-particles", "tsparticles-slim", "tsparticles-engine"],
          "vendor-ui": ["lucide-react", "class-variance-authority", "clsx", "tailwind-merge"],
        },
      },
    },
    // Increase warning threshold since we have intentional chunks
    chunkSizeWarningLimit: 200,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minification
    minify: "esbuild",
    // Target modern browsers for smaller output
    target: "es2020",
  },
})
