export default defineNuxtConfig({
  nitro: {
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
      },
    }
  },
  $production: {
    app: {
      head: {
        link: [
          {
            rel: 'stylesheet',
            href: '/css/main.min.css',
            type: 'text/css'
          },
        ]
      }
    }
  },
  $development: {
    css: ['../assets/css/main.css'],
  },
  app: {
    //baseURL: process.env.BASE_URL,
    buildAssetsDir: 'nuxt',
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
      screens: {
        'xs': 320,
        'sm': 640,
        'md': 768,
        'lg': 1024,
        'xl': 1280,
        'xxl': 1536,
        '2xl': 1536
      }
    }
  },
  strapi: {
    url: process.env.BASE_URL_API
  }
})