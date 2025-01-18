// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'sk'
      },
      title: 'Poradenstvo pri kúpe bicykla',
      meta: [
        { name: 'description', content: 'Hľadáte ideálny bicykel? Získajte bezplatné telefonické poradenstvo od odborníka. Pomôžem Vám vybrať ten správny bicykel a odporučíme najlepšiu predajňu.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Stanislav Malík' },
        { property: 'og:title', content: 'Poradenstvo pri kúpe bicykla' },
        { property: 'og:description', content: 'Získajte odborné rady pre výber ideálneho bicykla. Zavolajte a využite bezplatné poradenstvo.' },
        { property: 'og:image', content: 'https://bike-poradca.vercel.app/_nuxt/hero-image.CCGH2dlL.jpg' },
        { property: 'og:url', content: 'https://bike-poradca.vercel.app' },
      ],
       script: [
      {
        src: "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js",
        async: false,
        'data-name': "BMC-Widget",
        'data-cfasync': "false",
        'data-id': "bikeporadca",
        'data-description': "Support me on Buy me a coffee!",
        'data-message': "Zaplaťte mi kávu.",
        'data-color': "#40DCA5",
        'data-position': "Right",
        'data-x_margin': "18",
        'data-y_margin': "18"
      }
    ]
    }
  },
  compatibilityDate: '2024-11-01',
  ssr: true,
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    { src: '~/plugins/gsap.js', ssr: false }
  ]
})