// リスティング広告で必要なトラッキングコード
const metaPixelCode = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1946029592242777');fbq('track', 'PageView');`
const metaPixelNoScriptCode = `<img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=1946029592242777&ev=PageView&noscript=1"/>`
// ヒートマップツールのトラッキングコード
const mierucaEmbedCode = `window.__fid = window.__fid || [];__fid.push([454328126]);(function() {function mieruca(){if(typeof window.__fjsld != "undefined") return; window.__fjsld = 1; var fjs = document.createElement('script'); fjs.type = 'text/javascript'; fjs.async = true; fjs.id = "fjssync"; var timestamp = new Date;fjs.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://hm.mieru-ca.com/service/js/mieruca-hm.js?v='+ timestamp.getTime(); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(fjs, x); };setTimeout(mieruca, 500); document.readyState != "complete" ? (window.attachEvent ? window.attachEvent("onload", mieruca) : window.addEventListener("load", mieruca, false)) : mieruca();})();`
const googleAnalyticsCode = `window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-WHE7CJ1ZEF'); gtag('config', 'UA-185752540-1');`

export default {
  router: {
    // base: '/lp/home/' // サブディレクトリのパス → デプロイ時にコメント外す
  },
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
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }, // ローカル
      // { rel: 'icon', type: 'image/x-icon', href: '/lp/home/favicon.ico' } // 本番
    ],
    // =====================================================================
    // 以下head内のscriptタグ設定
    // ====================================================================
    script: [ // headタグに<script>を追加したい場合
      // metaPixelCode
      {
        hid: 'metaPixelCodeHead', // 任意のキー名
        innerHTML: metaPixelCode // scriptタグに入れたいコード
      },
      // heat map tool
      {
        type: "text/Javascript",
        hid: 'mierucajs',
        innerHTML: mierucaEmbedCode
      },
      {
        hid: 'GA',
        innerHTML: googleAnalyticsCode,
      }
    ],
    noscript: [
      {
        hid: 'metaPixelCodeBody', // 任意のキー名
        innerHTML: metaPixelNoScriptCode,  // noscriptタグに入れたいコード
        pbody: true // <body>タグ直後に配置
      }
    ],
    __dangerouslyDisableSanitizersByTagID: { // inject許可
      'metaPixelCodeHead': ['innerHTML'],
      'metaPixelCodeBody': ['innerHTML'],
      'mierucajs': ['innerHTML'],
      'GA': ['innerHTML']
    },
    // ====================================================================
    // scriptタグ設定終わり
    // ====================================================================
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
    // https:go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics' // Google アナリティクスパッケージ
  ],
  googleAnalytics: {
    id: [ //サイトのアナリティクスID
      'UA-185752540-1'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [ '@nuxtjs/google-gtag', {
      id: 'G-WHE7CJ1ZEF',
      debug: false // trueだとlocalでも発火する。
    } ]
  ],
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
