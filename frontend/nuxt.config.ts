import { Configuration } from '@nuxt/types'
import dotenv from 'dotenv'

dotenv.config()

const config: Configuration = {
  mode: 'universal',
  router: {
    middleware: ['auth'],
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth-next',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org
   */
  auth: {
    redirect: {
      callback: '/callback',
    },
    strategies: {
      facebook: {
        responseType: 'code',
        clientId: process.env.FACEBOOK_KEY,
        scope: ['public_profile', 'email', 'user_birthday'],
        endpoints: {
          token: `${process.env.API_URL}/auth/social/facebook/`,
          userInfo: `${process.env.API_URL}/api/me/`,
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    watch: ['types'],
    extend(config, ctx) {
      // Fixes @nuxtjs/auth using fs on the client
      if (!ctx.isServer) {
        config.node = {
          fs: 'empty',
        }
      }
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
}

export default config
