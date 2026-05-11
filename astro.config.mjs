// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://getkakeibo.com",
  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return pathname !== "/" && pathname !== "/hn" && pathname !== "/hn/";
      },
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
  ],
  vite: {
    server: {
      watch: {
        awaitWriteFinish: {
          stabilityThreshold: 150,
          pollInterval: 25,
        },
      },
    },
  },
});
