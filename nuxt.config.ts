// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // فعال‌سازی همزمان پینیا و تیلوند در پروژه
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
})