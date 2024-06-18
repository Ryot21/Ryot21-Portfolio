<!-- works > 制作物 > 詳細ページ -->
<script setup lang="ts">

		const route = useRoute();
		const slug  = route.params.id;

		const { data: article } = await useFetch('/api/workDetail', {
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
			<ul class="c-detailArea">
				<li class="c-detailArea__left mgb5s">
					<ul class="c-detailArea__imgLists">
						<!-- 1枚目 -->
						<li v-for="image in article.images.workImage" :key="image" class="c-detailArea__imgItem">
							<div class="c-detailArea__img">
								<div class="imgBox">
									<NuxtImg :src="image.url" alt="制作したサイトの実際の画像" />
								</div>
							</div>
						</li>
					</ul>

				</li>
				<li class="c-detailArea__right mgb20s">

					<!-- タイトル -->
					<h2  class="c-detailArea__title s-LL mgb2 mgb2s">{{ article.title }}</h2>

					<!-- リリース日 -->
					<p   class="c-detailArea__day s-S mgb5 mgb10s">リリース日 : {{ article.date }}</p>

					<!-- タグ_サイト種類 -->
					<h3   class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-ML -b">種類</span></h3>
					<ul class="c-detailArea__categoryLists mgb5 mgb5s">
						<li v-for="label in article?.tag" :key="label" class="mgb1">
							<p class="s-S -s12">#{{ label.name }}</p>
						</li>
					</ul>

					<!-- 説明 -->
					<div v-if="article.description">
						<h3   class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-ML -b">説明</span></h3>
						<p   class="c-detailArea__text s-S -s12 -lh-2 -left mgb5 mgb5s">{{ article.description }}</p>
					</div>

					<!-- URL -->
					<h3   class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-ML -b">URL</span></h3>
					<p   class="c-detailArea__link s-S -s12 -lh-2 -left">{{ article.url }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

