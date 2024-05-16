<!-- blogs > 詳細ページ -->
<script setup lang="ts">

	import type { Blog } from "~~/types/Blog";
	const { params } = useRoute();
	const { data } = await useMicroCMSGetListDetail<Blog>({
		endpoint: "blogs",
		contentId: Array.isArray(params.id) ? params.id[0] : params.id,
	});
	console.log(data);

	definePageMeta({// 数字以外のパラメーターは「404エラー」を表示。
		validate: async(route) => {
			return /^\d+$/.test(route.params.id)
		}
	})

</script>


<template>
	<div v-if="data" class="c-contents mgt-contents">
		<div class="c-contents__inner w1100 mgb10 mgb20s">
			<PartsBreadcrumb />
			<div class="c-blogArea">
					<!-- 画像 -->
					<div v-for="imgList in data?.images" class="c-blogArea__img mgb8 mgb10s a-fadeUp -sp1">
						<div class="imgBox">
							<img :src="imgList.url" alt="ブログ画像">
						</div>
					</div>
					<!-- タイトル -->
					<h2  class="c-blogArea__title s-LL -left mgb2 mgb2s">{{ data.title }}</h2>
					<!-- カテゴリー -->
					<ul class="c-blogArea__categoryLists">
						<li v-for="categoryItem in data?.category" :key="categoryItem" class="c-tag">
							<p class="s-S">{{ categoryItem }}</p>
						</li>
					</ul>

					<!-- サブタイトル -->
					<!-- <h2  class="c-blogArea__title s-M -left mgb1 mgb1s">{{ data.subTitle }}</h2> -->

					<!-- リリース日 -->
					<p class="c-blogArea__day s-S -right mgb5 mgb10s">{{ data.date }}</p>

					<!-- 本文 -->
					<p class="c-blogArea__text s-ML -s12 -lh-2 mgb5 mgb5s">{{ data.text }}</p>

					<!-- 書籍(未実装) -->
					<!-- <div v-if="data.book">
						<h3 class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-ML -b">参考書籍</span></h3>
						<p class="c-detailArea__link s-S -lh-2 -left">{{ data.book?.title }}</p>
					</div> -->
				</div>
		</div>
	</div>
</template> 


