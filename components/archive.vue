
<script setup lang="ts">

	import type { MicroCMSQueries } from 'microcms-js-sdk';
	import { WORK_LIMIT_PAGE } from '~/server/setting/siteSettings'

	type Props = {
		page: number,
		tagId: string// ↓オプショナルで追加
	}

	const { page, tagId } = defineProps<Props>()

	const limit = WORK_LIMIT_PAGE;
	const queries: MicroCMSQueries = {
    limit: limit,
    offset: (page - 1) * limit,
	}

	// tagIdを渡されているときはqueriesに加える
	// タグIDが存在しないこともあるのでif分でparamに追加
	if (tagId) {
		queries.filters = `tag[contains]${tagId}`
	}

	const { data: products } = await useFetch('/api/workList', {params: queries})
	const { data: tags } = await useFetch('/api/tagList')
	
	// Nullチェックを行う
	const numPages = products.value ? Math.ceil(products.value.totalCount / limit) : 0;

</script>

<template>
	<div class="c-contents mgb20 mgb20s">

		<!-- 検索フォーム -->
		<PartsSearchForm/>

		<!-- タグ一覧 -->
		<PartsTagList :tags="tags?.contents" :selectedTagId="tagId"/>

		<!-- 投稿 -->
		<PartsPostList :posts="products?.contents"/>

		<!-- ページネーション -->
		<PartsPagination :numPages="numPages" :current="page" :selectedTagId="tagId"/>

	</div>

</template>