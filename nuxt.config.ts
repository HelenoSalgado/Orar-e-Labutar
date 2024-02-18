export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: 'dist'
    },
    prerender: {
      autoSubfolderIndex: true,
      crawlLinks: true
    }
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
  experimental: {
     renderJsonPayloads: false,
     asyncEntry: false,
     noVueServer: true,
     respectNoSSRHeader: true,
     sharedPrerenderData: true,
  },
  // vite: {
  //   optimizeDeps: {
  //     exclude: ['nuxtjs/color-mode', 'types/remarkable', 'nuxt']
  //   }
  // },
  vue: {
    compilerOptions: {
      hoistStatic: true
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
    },
    ipx: {
      modifiers: {
        fit: 'cover'
      }
    }
  },
  strapi: {
    url: process.env.BASE_URL_API,
  },
  colorMode: {
    preference: 'light'
  }
})