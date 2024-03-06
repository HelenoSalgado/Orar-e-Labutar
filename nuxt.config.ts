export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    },
    output: {
      publicDir: 'dist',
    },
    baseURL: process.env.NUXT_APP_BASE_URL,
    minify: true
  },
  experimental: {
    renderJsonPayloads: false,
    payloadExtraction: true
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
    baseURL: process.env.NUXT_APP_BASE_URL,
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'theme-color',
          content: '#161616'
        }
      ],
      link: [
        {
          rel: 'icon',
          href: '/img/licoes1-p.jpg'
        },
        {
          rel: 'manifest',
          href: '/pwa/manifest.webmanifest',
          type: 'application/manifest+json'
        }
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
  css: ['../assets/css/main.css'],
  devtools: {
     enabled: false
  },
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
  }
})