
<script setup lang="ts">
  useHead({title: "Ryot21-Portfolio | WEBエンジニア",})
</script>

<template>
  
  <Header /><!-- ヘッダー -->

  <PartsHamburgerNavi /><!-- ハンバーガーメニュー -->

  <NuxtPage /><!-- コンテンツ -->

  <Footer /><!-- フッター -->

</template>

<style lang="scss">
  body{background: url('/body_bg.png') repeat center top;}
</style>