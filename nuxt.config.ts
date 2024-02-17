export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: 'dist'
    }
  },
  runtimeConfig: {
    public: {
      site: {
        defaultLocale: 'pt-BR',
        url: process.env.BASE_URL
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.5',
      link: [
        {
          rel: 'icon',
          href: '/img/licoes1-p.jpg'
        }
      ],
      script: [
        {
          defer: 'true',
          src: '/js/menu.js'
        }
      ]
    }
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
  modules: ['@nuxtjs/strapi', '@nuxtjs/color-mode', '@nuxt/image'],
  image: {
    format: ['webp'],
    domains: ['https://res.cloudinary.com'],
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/bio01/image/upload/'
    },
    alias: {
      cloudinary: 'https://res.cloudinary.com'
    }
  },
  strapi: {
    url: process.env.BASE_URL_API,
  },
  colorMode: {
    preference: 'light'
  }
})