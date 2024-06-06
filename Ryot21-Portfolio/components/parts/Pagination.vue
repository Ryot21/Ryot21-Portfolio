
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
	console.log()
</script>

<template>
	<!-- ページネーション -->
	<div class="c-pagination">
		<ul class="c-pagination__lists">
			<!-- 戻る -->
			<li v-if="current > 1">
				<NuxtLink class="c-pagination__left s-M -center" :to="getPath(current - 1)">&laquo; Prev</NuxtLink>
			</li>
			<!-- 全ページ表示 -->
			<li v-for="page in numPages" :key="page" class="c-pagination__item">
				<NuxtLink class="c-pagination__link s-ML -center" :class="getClass(page, current)" :to="getPath(page)">
					{{ page }}
				</NuxtLink>
			</li>
			<!-- 進む -->
			<li v-if="current < numPages">
				<NuxtLink class="c-pagination__right s-M -center" :to="getPath(current + 1)">Next &raquo;</NuxtLink>
			</li>
		</ul>
	</div>
</template>