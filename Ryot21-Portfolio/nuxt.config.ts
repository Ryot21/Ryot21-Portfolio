
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
  
  // 使用するscssファイルを指定
  css: ["@/assets/styles/style.scss"],

  // ↓microCMSモジュール導入
  modules: ["@nuxt/image"],
})
