// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      titleTemplate: "%s | Paul@SF",
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
      title: "%s",
      titleTemplate: "%s",
      author: "Paul Singh",
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

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/fonts",
  ],
});
