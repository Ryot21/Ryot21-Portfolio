
<script setup lang="ts">

	type Props = {
		numPages: number,
		current: number
	}

	const { numPages, current } = defineProps<Props>();

	function getPath(p: number) {// ページリンクを返す。
		return `/works/product/page/${p}`;
	}
	function getClass(page: number, current: number) {
		if( page == current) return 'current';
		return 'link';
	}
</script>

<template>
	<!-- ページネーション -->
	<div class="c-pagination">
		<ul class="c-pagination__lists">
			<li v-for="page in numPages" :key="page" class="c-pagination__item">
				<NuxtLink class="c-pagination__link s-ML -center" :class="getClass(page, current)" :to="getPath(page)">
					{{ page }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>