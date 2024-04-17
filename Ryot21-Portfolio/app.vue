<template>
  <div>
    <NuxtPage /><!-- pagesディレクトリ配下の「.vueファイル」をルーティング -->
  </div>
</template>

<script setup>
  useHead(
    {
      title: "Ryot21-Portfolio | WEBエンジニア",
      link: [
        {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"}
      ]
    }
  )
</script>

<style>
  html{
    font-family: "Kanit", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style>