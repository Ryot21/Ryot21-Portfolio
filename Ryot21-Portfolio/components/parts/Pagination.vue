
<script setup lang="ts">

	type Props = {
		numPages: number,
		current: number,
		selectedTagId?: string | undefined;// タグIDを受け取るようにする
    keyword?: string;
	}

	const { numPages, current, selectedTagId, keyword } = defineProps<Props>();

	// ページリンクを返す。
	// 2ページ目のリンクをクリックした場合、PaginationのgetPath関数が呼ばれる。
	function getPath(p: number) {

			// 追加　タグありのリンク
			if (selectedTagId) return `${p}`
			// 検索キーワードにヒットした場合
			if (keyword) return `/search?q=${keyword}&page=${p}`
			// その他 
			return `/works/product/page/${p}`;

	}

	function getClass(page: number, current: number) {
		if( page == current) return 'current';
		return 'link';
	}

</script>

<template>
	<!-- ページネーション / 2ページ以上ある場合、表示させる -->
	<div v-if="numPages > 2" class="c-pagination">
		<ul class="c-pagination__lists">
			<!-- 戻る / 2ページ以降の場合、表示させる -->
			<li v-if="current > 1">
				<NuxtLink class="c-pagination__left s-M -center" :to="getPath(current - 1)">&laquo; Prev</NuxtLink>
			</li>
			<!-- 全ページ表示 -->
			<li v-for="page in numPages" :key="page" class="c-pagination__item">
				<NuxtLink class="c-pagination__link s-ML -center" :class="getClass(page, current)" :to="getPath(page)">
					{{ page }}
				</NuxtLink>
			</li>
			<!-- 進む / 現在地よりページ数がある場合、表示させる -->
			<li v-if="current < numPages">
				<NuxtLink class="c-pagination__right s-M -center" :to="getPath(current + 1)">Next &raquo;</NuxtLink>
			</li>
		</ul>
	</div>
</template>