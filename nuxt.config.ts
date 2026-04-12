// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [],
    },
  },
  ogImage: { enabled: false },
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/seo", "@nuxt/icon"],
});
