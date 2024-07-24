<!-- works > 制作物 > 詳細ページ -->
<script setup lang="ts">

		const route = useRoute();
		const slug  = route.params.id;

		const { data: article } = await useFetch('/api/workDetail', {
			params: { slug: String(slug) },
		})
		useHead({title: article.value?.title + " | Ryot21-Portfolio",})

		if (!article.value) {
			throw createError({
				statusCode: 404, statusMessage: 'お探しのページが見つかりません'
			})
		}
</script>


<template>
	<div v-if="article" class="c-contents mgt-contents">
		<div class="c-contents__inner w1100 mgb10 mgb20s">
			<!-- パンくず -->
			<PartsBreadcrumb />

			<ul class="c-detailArea">
				<li class="c-detailArea__left mgb5s">
					<ul class="c-detailArea__imgLists">
						<!-- 1枚目 -->
						<li v-for="image in article.images.workImage" :key="image" class="c-detailArea__imgItem a-fade -tm25 -sp1">
							<div class="c-detailArea__img">
								<div class="imgBox">
									<img :src="image.url" alt="制作したサイトの実際の画像" />
								</div>
							</div>
						</li>
					</ul>
				</li>
				<li class="c-detailArea__right mgb20s">

					<!-- タイトル -->
					<h2 class="c-detailArea__title s-LL -ls-1 mgb2 mgb2s a-fade -sp1">{{ article.title }}</h2>

					<!-- リリース日 -->
					<p class="c-detailArea__day s-S -ls-1 mgb5 mgb10s a-fade -sp1">リリース日 : {{ article.date }}</p>

					<!-- ジャンル -->
					<div class="mgb5 mgb5s a-fade -tm05 -sp1">
						<h3 class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-ML -b">ジャンル</span></h3>
						<ul class="c-detailArea__genreLists c-flex -h-cen">
							<li v-for="(label, labelIndex) in article?.genre" :key="labelIndex"  class="">
								<p class="s-S -s10 -ls-1">- {{ label }}</p>
							</li>
						</ul>
					</div>

					<!-- タグ_サイト種類 -->
					<div class="mgb5 mgb5s a-fade -tm1 -sp1">
						<h3 class="c-detailArea__subTitle -left -ls-1 mgb2 mgb2s"><span class="s-ML -b">種類</span></h3>
						<ul class="c-detailArea__categoryLists">
							<li v-for="(label, labelIndex) in article?.tag" :key="labelIndex" class="mgb1">
								<p class="s-S -s10 -ls-1">#{{ label.name }}</p>
							</li>
						</ul>
					</div>

					<!-- 説明 -->
					<div v-if="article.description" class="mgb5 mgb5s a-fade -tm15 -sp1">
						<h3 class="c-detailArea__subTitle -left -ls-1 mgb2 mgb2s"><span class="s-ML -b">説明</span></h3>
						<p  class="c-detailArea__text s-S -s12 -lh-2 -left">{{ article.description }}</p>
					</div>

					<!-- URL -->
					<div class="mgb5 mgb5s a-fade -tm15 -sp1">
						<h3 class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-ML -b -ls-1">URL</span></h3>
						<p  class="c-detailArea__link s-S -s12 -ls-1 -lh-2 -left">{{ article.url }}</p>
					</div>

					<!-- CONTACTページに戻る -->
					<div class="c-btn -pageLink -right mgb20s a-fade -tm2 -sp1">
						<NuxtLink to="/contact" class="s-M -center">制作のご依頼</NuxtLink>
					</div>

				</li>
			</ul>
		</div>
	</div>
</template>

