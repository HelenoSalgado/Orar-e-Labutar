export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: 'dist'
    },
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
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      link: [
        {
          rel: 'icon',
          href: '/img/licoes1-p.jpg'
        }
    ]
    }
  },
  // alias: {
  //   css: '/<rootDir>/assets/css'
  // },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/strapi', '@nuxtjs/color-mode', "@nuxt/image"],
  image: {
    format: ['webp'],
    domains: ['https://res.cloudinary.com'],
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/bio01/image/upload/'
    }
  },
  strapi: {
    url: process.env.BASE_URL_API,
  },
  colorMode: {
    preference: 'light'
  }
})