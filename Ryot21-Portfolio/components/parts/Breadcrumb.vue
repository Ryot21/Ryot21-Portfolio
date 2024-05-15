<!-- パンくず -->
<script setup lang="ts">

	import type { Product } from "~~/types/Product";
	const { params } = useRoute();
	const { data } = await useMicroCMSGetListDetail<Product>({
		endpoint: "products",
		contentId: Array.isArray(params.id) ? params.id[0] : params.id,
	});
	console.log(data);

</script>

<template>
	<ul class="c-breadcrumb__lists mgb2 mgb10s">
			<li class="c-breadcrumb__item">
					<NuxtLink class="c-breadcrumb__link" to="/">トップ</NuxtLink>
			</li>
			<li class="c-breadcrumb__item">
					<NuxtLink class="c-breadcrumb__link" to="/works/">制作実績</NuxtLink>
			</li>
			<li class="c-breadcrumb__item">{{ data.title }}</li>
		</ul>
</template>