import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://staging.seavicai.com",
  base: "/seavicAI",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory"
  }
});
