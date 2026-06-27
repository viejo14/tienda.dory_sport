// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://dory-sport.netlify.app",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
