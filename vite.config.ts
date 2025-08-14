import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@services": path.resolve(__dirname, "services"),
      "@deps": path.resolve(__dirname, "deps"),
      "@features": path.resolve(__dirname, "src/features"),
    },
  },
  // Plugins Array
  plugins: [
    react(),

    // These are ESLINT Plungin Options not ESLINT Options, these are for the Plugin Configuration and not for the ESLINT Configuration. ESLING Configuration options will be declared in its own configuration file. ESLINT Options will go in eslint.config.js.
    eslintPlugin({
      cache: false,
      exclude: ["node_modules", "dist", "scripts"],
    }),

    svgr({
      // https://github.com/pd4d10/vite-plugin-svgr#options
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
    }),
  ],
});
