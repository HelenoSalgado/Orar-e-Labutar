export default defineNuxtConfig({
  nitro: {
    // prerender: {
    //   crawlLinks: true,
    //   failOnError: false
    // },
    future: {
      nativeSWR: true
    },
    static: true,
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
      base: {
        href: process.env.BASE_URL
      },
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
    presets: {
      avatar: {
        modifiers: {
          width: 60,
          height: 60
        }
      },
    },
    screens: {
      'xs': 360,
      'md': 600,
      'lg': 1200,
    },
  },
  strapi: {
    url: process.env.BASE_URL_API
  }
})