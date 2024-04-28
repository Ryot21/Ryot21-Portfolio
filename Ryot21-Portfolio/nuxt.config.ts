// defineNuxtConfigには各種CSSやモジュールなどがインポートできる。
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 使用するscssファイルを指定
  css: ["@/assets/styles/style.scss"],
  // Viteのビルドの際に、SCSSのパーシャルファイルを読み込むよう指定する
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/styles/";',
        },
      },
    },
  },
})
