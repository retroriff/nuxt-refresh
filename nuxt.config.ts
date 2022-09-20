import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  i18n: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-GB',
        name: 'English',
        file: 'en-GB.json'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Spanish',
        file: 'es-ES.json'
      }
    ],
    parsePages: false
  },
})
