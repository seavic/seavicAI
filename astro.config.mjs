import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://siehlui-seavic.github.io",
  base: "/seavicAI",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory"
  }
});
