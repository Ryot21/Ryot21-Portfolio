
const { API_KEY, SERVICE_DOMAIN, NUXT_PUBLIC_NEWT_FORM_ENDPOINT, NUXT_PUBLIC_NEWT_RECAPTCHA_SITE_KEY } = process.env;

// defineNuxtConfigには各種CSSやモジュールなどがインポートできる。
export default defineNuxtConfig({
  runtimeConfig: {
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY,
    public: {
      newt: {
        formEndpoint: NUXT_PUBLIC_NEWT_FORM_ENDPOINT,
        recaptchaSiteKey: NUXT_PUBLIC_NEWT_RECAPTCHA_SITE_KEY
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
        { rel: "icon", href: "/favicon.ico" }, 
        { rel: "apple-touch-icon", type: "image/png", href: "/_nuxt/site-logo01.CgLjQvva.png" }, 
      ],
    },
  },
  // 使用するscssファイルを指定
  css: ["@/assets/styles/style.scss"],

  // ↓microCMSモジュール導入
  modules: ["@nuxt/image"],
})
