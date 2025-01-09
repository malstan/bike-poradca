// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    { src: '~/plugins/gsap.client.js', mode: 'client' }
  ]
})