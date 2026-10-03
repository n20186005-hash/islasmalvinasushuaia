import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://islasmalvinasushuaia.com',
  // 全站统一为「无尾斜杠」格式，消除 /es 与 /es/ 重复收录
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'zh', 'it', 'de'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    '/': '/es',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es_AR',
          en: 'en_US',
          zh: 'zh_CN',
          it: 'it_IT',
          de: 'de_DE',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
