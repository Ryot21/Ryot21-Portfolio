
<script setup lang="ts">
  useHead({title: "Ryot21-Portfolio | WEBエンジニア",})
</script>

<template>
  <div id="top">
    <Header /><!-- ヘッダー -->
  </div>
  <!-- <a href="#top" class="c-btn-top -center a-fadeUp -sp2">TOPへ</a> -->
  <PartsHamburgerNavi /><!-- ハンバーガーメニュー -->

  <NuxtPage /><!-- コンテンツ -->

  <Footer /><!-- フッター -->

</template>

<style lang="scss">
  body{background: url('/body_bg.png') repeat center top;}
</style>