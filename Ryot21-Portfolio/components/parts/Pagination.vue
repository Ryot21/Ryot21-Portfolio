
<script setup lang="ts">

	type Props = {
		numPages: number,
		current: number,
		selectedTagId?: string | undefined;// タグIDを受け取るようにする
    keyword?: string;
	}

	const { numPages, current, selectedTagId, keyword } = defineProps<Props>();


	const pager: number[] = []
	for (let i = 1; i < numPages + 1; i++) {// 現在のページプラスマイナス２のページを表示
		if (i < current - 2) continue
		if (i > current + 2) continue
		pager.push(i)
	}
	// ページリンクを返す。
	
	function getPath(p: number) {// 2ページ目のリンクをクリックした場合、PaginationのgetPath関数が呼ばれる。
			if (selectedTagId) return `${p}`// 追加　タグありのリンク
			if (keyword) return `/search?q=${keyword}&page=${p}`// 検索キーワードにヒットした場合
			return `/works/product/page/${p}`;// その他 
	}

</script>

<template>
	<!-- ページネーション / 2ページ以上ある場合、表示させる -->
	<div v-if="numPages > 2" class="c-pagination">
		<ul class="c-pagination__lists">

			<!-- ①戻る / 2ページ以降の場合、「1」表示させる -->
			<li v-if="current > 1">
					<NuxtLink class="c-pagination__left s-M -center" :to="getPath(current - 1)">&laquo; Prev</NuxtLink>
			</li>
			
			<!-- ②4ページ目以降だったら１ページ目を表示 -->
			<li v-if="3 < current" class="c-pagination__item">
					<NuxtLink :to="getPath(1)" class="c-pagination__link s-M -center">1</NuxtLink>
			</li>
			
			<!-- ③5ページ目以降だったら「…」を表示 -->
			<li v-if="4 < current">・・・</li>

			<!-- ④配列の数字を書き出す-->
			<li v-for="p in pager" :key="p" :class="{ active: current === p }" class="c-pagination__item">
					<NuxtLink :to="getPath(p)" class="c-pagination__link s-M -center">{{ p }}</NuxtLink>
			</li>

			<!-- ⑤現在のページが全ページ数の-4以下だったら「…」を打つ-->
			<li v-if="current < numPages-3">・・・</li>

			<!-- ⑥現在のページが全ページ数の-3以下だったら最後のページを表示-->
			<li v-if="current + 2 < numPages" class="c-pagination__item">
					<NuxtLink :to="getPath(numPages)" class="c-pagination__link s-M -center">{{ numPages }}</NuxtLink>
			</li>
			
			<!-- ⑦進む / 現在地よりページ数がある場合、表示させる -->
			<li v-if="current < numPages">
					<NuxtLink class="c-pagination__right s-M -center" :to="getPath(current + 1)">Next &raquo;</NuxtLink>
			</li>
		
			<!-- 全ページ表示 -->
			<!-- <li v-for="page in numPages" :key="page" class="c-pagination__item">
				<NuxtLink class="c-pagination__link s-ML -center" :class="getClass(page, current)" :to="getPath(page)">
					{{ page }}
				</NuxtLink>
			</li> -->
		</ul>
	</div>
</template>