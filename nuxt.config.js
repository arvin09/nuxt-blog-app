const bodyParser = require('body-parser');
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/global-components.js',
    '~plugins/date-filter.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [

  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-9bc00-default-rtdb.firebaseio.com',
    credentials: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  // setting environment variables
  env: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-9bc00-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyBDByaCdsNJQxxrWyVkXUKEHzFXKaZwUsE'
  },
  
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  loading: {color: '#fa932f', height: '5px', duration: 5000 },

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
