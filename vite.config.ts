import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

/** CONFIGURATION OPTIONS START */

// These are ESLINT Plungin Options not ESLINT Options, these are for the Plugin Configuration and not for the ESLINT Configuration. ESLING Configuration options will be declared in its own configuration file. ESLINT Options will go in eslint.config.js.

const ESLINT_PLUGIN_OPTIONS = {
  cache: false,
  exclude: ["node_modules", "dist"],
};

/** CONFIGURATION OPTIONS END */

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(ESLINT_PLUGIN_OPTIONS)],
});
