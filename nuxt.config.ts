// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,
  runtimeConfig: {
    public: {
      cookieControl: {
        locales: ['sk'],
        localeTexts: {
          sk: {
            bannerTitle: 'Cookies',
            bannerDescription: 'Súbory cookie používame, aby sme vám mohli zobraziť túto webovú stránku a lepšie pochopiť, ako ju používate, s cieľom zlepšiť ponúkané služby.',
            save: 'Uložiť nastavenia',
            accept: 'Povoliť',
            decline: 'Odmietnuť',
            acceptAll: 'Povoliť všetky',
            declineAll: 'Odmietnuť všetky',
            close: 'Zatvoriť',
            manageCookies: 'Nastavenia',
          }
        },
        cookies: {
          necessary: [
            {
              name: 'Základné cookies',
              description: 'Umožňujú správne fungovanie stránky.',
              cookies: ['cookie_control_consent', 'cookie_control_enabled_categories']
            }
          ],
          optional: [
            {
              name: 'Google Analytics',
              description: 'Používame na analýzu návštevnosti webu.',
              cookies: ['_ga', '_gid', '_gat'],
              src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
              async: true,
              accept: true,
              accepted: () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() { window.dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-XXXXXXXXXX');
                console.log('Google Analytics cookies boli povolené.');
              },
              declined: () => {
                console.log('Google Analytics cookies boli odmietnuté.');
              }
            }
          ]
        }
      }
    }
  },
  gtag: {
    id: 'G-XXXXXXXXXX', 
    initMode: 'manual',
  },
  site: { 
    url: 'https://bikeporadca.sk', 
    name: 'Poradenstvo pri kúpe bicykla' 
  }, 
  robots: {
    UserAgent: '*',
    disallow:  '*', // ["/server/"],
    Sitemap: 'https://bikeporadca.sk/sitemap.xml'
  },
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
  modules: [
    '@nuxtjs/tailwindcss',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    'nuxt-gtag'
  ],
  plugins: [
    { src: '~/plugins/gsap.js', ssr: false },
  ],
  css: [
    '~/assets/css/style.css',
  ]
})