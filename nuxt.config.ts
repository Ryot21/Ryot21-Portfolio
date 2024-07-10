
const { API_KEY, SERVICE_DOMAIN } = process.env;

// defineNuxtConfigには各種CSSやモジュールなどがインポートできる。
export default defineNuxtConfig({
  runtimeConfig: {
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY,
    public: {
      newt: {
        formEndpoint: '',
        recaptchaSiteKey: ''
      }
    }
  },
  
  app:{
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    },
  },
  // 使用するscssファイルを指定
  css: ["@/assets/styles/style.scss"],

  // ↓microCMSモジュール導入
  // modules: ["@nuxt/image"],
})