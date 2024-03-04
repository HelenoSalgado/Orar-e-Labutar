export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: 'dist',
    },
    baseURL: ''
  },
  runtimeConfig: {
    public: {
      site: {
        defaultLocale: 'pt-BR',
        url: process.env.BASE_URL
      }
    },
  },
  app: {
    //baseURL: process.env.BASE_URL,
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          href: '/img/licoes1-p.jpg'
        },
        // {
        //   rel: 'dns-prefetch',
        //   href: 'https://res.cloudinary.com'
        // }
      ],
      script: [
        {
          defer: 'true',
          src: '/js/menu.js',
        }
      ]
    }
  },
  router: {
     options: {
      
     }
  },
  experimental: {
     renderJsonPayloads: false,
     noVueServer: true,
     respectNoSSRHeader: true,
     sharedPrerenderData: true,
     asyncEntry: true,
     payloadExtraction: false,
     typedPages: false,
     appManifest: false
  },
  css: ['../assets/css/main.css'],
  devtools: {
     enabled: false
  },
  // webpack: {
  //    analyze: true,
  //    optimizeCSS: true,
  //    aggressiveCodeRemoval: true
  // },
  modules: ['@nuxtjs/strapi' , '@nuxt/image'],
  image: {
    format: ['webp'],
    domains: ['https://res.cloudinary.com'],
    //cloudinary: {
      //baseURL: 'https://res.cloudinary.com/bio01/image/upload/'
    //},
    //alias: {
      //cloudinary: 'https://res.cloudinary.com'
    //},
  },
  strapi: {
    url: process.env.BASE_URL_API
  },
})