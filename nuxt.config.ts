// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Paul@SF",
      titleTemplate: "%s",
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
      titleTemplate: "%s",
      author: "Paul Singh",

      title: "Paul's website",
      ogTitle: "Paul's website",
      description: "Paul's blogs and projects in one website!",
      ogDescription: "Paul's blogs and projects in one website!",
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
