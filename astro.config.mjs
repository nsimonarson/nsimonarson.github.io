import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nsimonarson.github.io',
  integrations: [tailwind()],
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
      fallbackType: 'rewrite',
    },
    fallback: {
      en: 'de',
    },
  },
});
