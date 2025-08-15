import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  // Plugins Array
  plugins: [
    react(),
    // We have centralized path resolution in tsconfig, now vite and eslint need to pick paths from that thats why we have used this plugin to be able to get paths from tsconfig and removed the resolve object
    tsconfigPaths(),
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

  //Server Config for Dev Server not Prod
  //after vite build, it outputs plain static files (HTML, JS, CSS, assets). Vite is completely gone. It does not run a server in production, so it can’t send headers — it’s just files.
  ///In prod → you need to configure the server that actually serves your built files (e.g., NGINX, Apache, Express, Fastify) to send those headers.
  //They’re for security hardening — even in dev mode.
  server: {
    // "0.0.0.0" tells it to listen on all available network interfaces.
    //So other devices on your network (e.g., your phone) can access your dev server.
    //Example: If your PC IP is 192.168.1.20, you can open the site on your phone by going to it
    host: "0.0.0.0",
    port: 5173,
    // those headers in your vite.config.js will only be applied in development mode. they dont get shipped to prod

    //
    headers: {
      //Prevents the browser from trying to guess the file type (MIME sniffing).
      "X-Content-Type-Options": "nosniff",
      //Prevents the site from being embedded in an <iframe> on another domain.
      "X-Frame-Options": "SAMEORIGIN",
    },
  },
});
