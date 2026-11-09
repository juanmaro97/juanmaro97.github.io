import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://juanmaro97.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
