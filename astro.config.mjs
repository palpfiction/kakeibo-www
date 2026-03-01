// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://getkakeibo.com',
    integrations: [
        sitemap({
            filter: (page) => !page.endsWith('getkakeibo.com/'),
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en',
                    es: 'es',
                },
            },
        }),
    ],
});
