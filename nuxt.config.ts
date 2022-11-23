export default defineNuxtConfig({
  ssr: true,
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
        code: 'fi',
        iso: 'fi-FI',
        name: 'Suomi',
        file: 'fi-FI.json'
      }
    ],
    parsePages: false
  },
})
