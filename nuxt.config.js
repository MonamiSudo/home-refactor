export default {
  // router: {
  //   base: '/lp/home_renewal/' // サブディレクトリのパス
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '関東で出張整体をお探しならクオースホーム',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css' // tailwindで新しくユーティリティを追加したCSS
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-gtag' // Google アナリティクスパッケージ
  ],
  'google-gtag': {
    id: [ //サイトのアナリティクスID
      'UA-185752540-1',
      'G-WHE7CJ1ZEF'
    ],
    debug: true,  // 開発確認用：デプロイ時にはfalseにする
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
