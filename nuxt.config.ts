// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Paul@SF",
      titleTemplate: "%s . Paul@SF",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  site: {
    name: "Paul@SF",
    url: "https://superfusiom.net",
  },
  seo: {
    meta: {
      titleTemplate: "%s . %siteName",
    },
  },
  vite: {
    optimizeDeps: {
      include: [],
    },
  },
  ogImage: { enabled: false },
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxt/icon",
    "@vueuse/nuxt",
  ],
});
