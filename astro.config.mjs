import { defineConfig } from 'astro/config';

export default defineConfig({
  site: import.meta.env.PUBLIC_SITE,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
