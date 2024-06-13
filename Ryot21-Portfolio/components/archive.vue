
<script setup lang="ts">
	import type { MicroCMSQueries } from 'microcms-js-sdk';
	import { WORK_LIMIT_PAGE } from '~/server/setting/siteSettings'

	type Props = {
		page: number;
		// tagId?: string;// ↓オプショナルで追加
	}
	const { page,
		//  tagId
	} = defineProps<Props>()

	const limit = WORK_LIMIT_PAGE;
	const queries: MicroCMSQueries = {
    limit: limit,
    offset: (page - 1) * limit,
	}

	const { data: products } = await useFetch('/api/workList', {params: queries})
	// const { data:tags } = await useFetch('/api/tagList')
	
	//tagIdを渡されているときはqueriesに加える
	// if (tagId) {
	// 	queries.filters = `tag[contains]${tagId}`
	// }

	const numPages = Math.ceil(products.value.totalCount / limit)

</script>

<template>

		<!-- 投稿 -->
		<PartsPostList :posts="products?.contents"/>

		<!-- テスト -->
		<!-- <PartsTagList :tags="tags" :selectedTagId="tagId" /> -->

		<!-- ページネーション -->
		<PartsPagination :numPages="numPages" :current="page"/>

</template>