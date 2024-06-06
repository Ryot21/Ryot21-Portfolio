
<!-- work > 一覧ページ > リスト表示 -->
<script setup lang="ts">
	import type { MicroCMSQueries } from 'microcms-js-sdk';
	import type { Product } from "~/types/product";
	import { WORK_LIMIT_PAGE } from '~/types/setting/siteSettings';


	type Props = { page: number }

	const { page } = defineProps<Props>()

	const limit = WORK_LIMIT_PAGE;
	const queries: MicroCMSQueries = {
		limit: limit,
		offset: (page - 1) * limit,
	}

	const { data } = await useMicroCMSGetList<Product>({
		endpoint: "products",
		queries: queries
	});

	const numPages = Math.ceil(data.value.totalCount / limit)
</script>

<template>
	<!-- 今まで制作したWEBサイトのご紹介 -->
	<div class="c-contents mgb20 mgb20s">
		<ul class="c-flex -col2_3 mgb5 mgb5s">
			<li v-for="product in data?.contents" :key="product.id" class="flexItem mgb5 mgb5s">
				<NuxtLink :to="`/works/product/${product.id}`" class="">
					<div class="c-archive__img a-zoomImg">
						<div class="imgBox mgb3 mgb3s"><img :src="product.thumbnail?.url"></div>
					</div>
					<p class="s-S -s12 -ls-1 -left">{{ product.date }}</p>
					<p class="s-ML -s14 -b -left -ellipsis mgb3 mgb5s">{{ product.title }}</p>
					<!-- タグ -->
					<ul class="c-archive__tagLists mgb5 mgb5s">
						<li v-for="label in product.tag" :key="label" class="tagItem mgb1">
							<p class="s-SS">#{{ label.name }}</p>
						</li>
						<!-- <li v-for="label in product.type?.name" :key="label" class="tagItem mgb1">
							<p class="s-SS">- {{ label }}</p>
						</li> -->
					</ul>
					<div class="c-detailBtn">
						<p class="s-SS c-detailBtn--inner pdr2 pdr5s">詳しく見る</p>
					</div>
				</NuxtLink>
			</li>
		</ul>
		<!-- ページネーション -->
		<PartsPagination :numPages="numPages" :current="page"/>

	</div>

</template>