
<script setup lang="ts">
  useHead({title: "エラーページ",})
	const error = useError();
</script>
<template>
	<div>
  	<Header />
  	<PartsHamburgerNavi />
		<div class="">
			<div v-if="error?.statusCode===404"     ><Status404 /></div>
			<div v-else-if="error?.statusCode===403"><Status403 /></div>
			<div v-else="error?.statusCode===500"   ><Status500 /></div>
		</div>
		<Footer />
	</div>
</template>