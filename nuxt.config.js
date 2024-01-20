export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  dev: process.env.NODE_ENV !== 'production',

  env: {
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://sharegro.com' : 'http://localhost:3000'
  },

  head: {
    title: 'ShareGro',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'og:title', property: 'og:title', content: '' },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'og:type', property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicons/favicon.ico' },
      { rel: 'apple-touch-icon-precomposed', href: '/images/favicons/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', href: '/images/favicons/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', href: '/images/favicons/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', href: '/images/favicons/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', href: '/images/favicons/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon-precomposed', href: '/images/favicons/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', href: '/images/favicons/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon-precomposed', href: '/images/favicons/apple-touch-icon-152x152.png' },
      { rel: 'icon', type: 'image/png', href: '/images/favicons/favicon-196x196.png' },
      { rel: 'icon', type: 'image/png', href: '/images/favicons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', href: '/images/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: '/images/favicons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', href: '/images/favicons/favicon-128.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg',
    ['@nuxtjs/google-analytics', {
      id: 'XX-XXXXXXXX-X'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/dayjs',
    '@nuxtjs/gtm',
    'cookie-universal-nuxt'
  ],

  markdownit: {
    injected: true,
    linkify: true,
    breaks: true,
    html: true
  },

  gtm: {
    id: 'XXX-XXXXXXX',
    debug: true
  },

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  styleResources: {
    scss: [
      'bootstrap/scss/_functions.scss',
      'bootstrap/scss/_variables.scss',
      'bootstrap/scss/_mixins.scss',
      '@/assets/scss/_variables.scss'
    ]
  },

  googleFonts: {
    families: {
      Outfit: {
        wght: [300, 400, 500, 600, 700]
      }
    },
    display: 'swap'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    middleware: ['redirect']
  },
  serverMiddleware: [
    {
      path: '/download',
      handler: (req, res, next) => {
        res.writeHead(301, { Location: '/' })
        res.end()
      }
    },
    {
      path: '/terms-of-use',
      handler: (req, res, next) => {
        res.writeHead(
          301,
          {
            Location: 'https://sharegro.zendesk.com/hc/en-us/articles/16561299202715-Member-Agreement-Terms-of-Service'
          }
        )
        res.end()
      }
    }
  ]
}
