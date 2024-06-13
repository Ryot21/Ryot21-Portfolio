<!-- blogs > 詳細ページ -->
<script setup lang="ts">

		const route = useRoute();
		const slug  = route.params.id;

		const { data: article } = await useFetch('/api/blogDetail', {
			params: { slug: String(slug) },
		})

		if (!article.value) {
			throw createError({
				statusCode: 404, statusMessage: 'お探しのページが見つかりません'
			})
		}

</script>


<template>
	<div v-if="article" class="c-contents mgt-contents">
		<div class="c-contents__inner w1100 mgb10 mgb20s">
			<!-- <PartsBreadcrumb /> -->
			<div class="c-blogArea">
					<!-- 画像 -->
					<div v-for="image in article?.images" :key="image" class="c-blogArea__img mgb8 mgb10s a-fadeUp -sp1">
						<div v-if="image" class="imgBox">
							<img :src="image.url" alt="ブログ画像">
						</div>
					</div>
					<!-- タイトル -->
					<h2  class="c-blogArea__title s-LL -left mgb2 mgb2s">{{ article.title }}</h2>
					<!-- カテゴリー -->
					<ul class="c-blogArea__categoryLists">
						<li v-for="categoryItem in article?.category" :key="categoryItem" class="c-tag">
							<p class="s-S">#{{ categoryItem }}</p>
						</li>
					</ul>

					<!-- サブタイトル -->
					<!-- <h2  class="c-blogArea__title s-M -left mgb1 mgb1s">{{ data.subTitle }}</h2> -->

					<!-- リリース日 -->
					<p class="c-blogArea__day s-S -right mgb5 mgb10s">{{ article.date }}</p>

					<!-- 本文 -->
					<p class="c-blogArea__text s-ML -s12 -lh-2 mgb5 mgb5s">{{ article.text }}</p>

					<!-- 書籍(未実装) -->
					<!-- <div v-if="data.book">
						<h3 class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-ML -b">参考書籍</span></h3>
						<p class="c-detailArea__link s-S -lh-2 -left">{{ data.book?.title }}</p>
					</div> -->
				</div>
		</div>
	</div>
</template> 


