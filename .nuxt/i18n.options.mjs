export const localeCodes = ["en","es"]

export const localeMessages = {
}

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  const vueI18nOptionsLoader = async (context) => Object({})
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader(context)
  nuxtI18nOptions.locales = [Object({"code":"en","iso":"en-GB","name":"English","file":"en-GB.json"}),Object({"code":"es","iso":"es-ES","name":"Spanish","file":"es-ES.json"})]
  nuxtI18nOptions.defaultLocale = "en"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix_except_default"
  nuxtI18nOptions.lazy = true
  nuxtI18nOptions.langDir = "locales"
  nuxtI18nOptions.detectBrowserLanguage = false
  nuxtI18nOptions.baseUrl = "http://localhost:3000"
  nuxtI18nOptions.parsePages = false
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.onBeforeLanguageSwitch = (() => ({}))
  nuxtI18nOptions.onLanguageSwitched = (() => null)
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({vueI18n: undefined,locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),baseUrl: "",parsePages: true,pages: Object({}),skipSettingLocaleOnNavigate: false,onBeforeLanguageSwitch: (() => ({})),onLanguageSwitched: (() => null)})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","iso":"en-GB","name":"English","file":"en-GB.json"}),Object({"code":"es","iso":"es-ES","name":"Spanish","file":"es-ES.json"})]})
