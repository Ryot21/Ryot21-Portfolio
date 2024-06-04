<!-- works > 制作物 > 詳細ページ -->
<script setup lang="ts">

	import type { Product } from "~~/types/Product";
	const { params } = useRoute();
	const { data } = await useMicroCMSGetListDetail<Product>({
		endpoint: "products",
		contentId: Array.isArray(params.id) ? params.id[0] : params.id,
	});

	definePageMeta({// 数字以外のパラメーターは「404エラー」を表示。
		validate: async(route) => {
			return /^\d+$/.test(route.params.id)
		}
	})
</script>


<template>
	<div v-if="data" class="c-contents mgt-contents">
		<div class="c-contents__inner w1100 mgb10 mgb20s">
			<!-- <PartsBreadcrumb /> -->
			<ul class="c-detailArea">
				<li class="c-detailArea__left mgb5s">
					<ul class="c-detailArea__imgLists">
						<!-- <p>{{ data }}</p> -->
						<!-- 1枚目 -->
						<li v-for="imgList in data?.images.web_post_images" :key="imgList" class="c-detailArea__imgItem">
							<div class="c-detailArea__img">
								<div class="imgBox">
									<NuxtImg :src="imgList.url" alt="制作したサイトの実際の画像" />
								</div>
							</div>
						</li>
					</ul>

				</li>
				<li class="c-detailArea__right mgb20s">

					<!-- タイトル -->
					<h2  class="c-detailArea__title s-LL mgb2 mgb2s">{{ data.title }}</h2>

					<!-- リリース日 -->
					<p   class="c-detailArea__day s-S mgb5 mgb10s">リリース日 : {{ data.date }}</p>

					<!-- タグ_サイト種類 -->
					<h3   class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-ML -b">種類</span></h3>
					<ul class="c-detailArea__categoryLists mgb5 mgb5s">
						<li v-for="label in data?.tag" :key="label" class="mgb1">
							<p class="s-S -s12">- {{ label.name }}</p>
						</li>
					</ul>

					<!-- 説明 -->
					<h3   class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-ML -b">説明</span></h3>
					<p   class="c-detailArea__text s-S -s12 -lh-2 -left mgb5 mgb5s">{{ data.description }}</p>

					<!-- URL -->
					<h3   class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-ML -b">URL</span></h3>
					<p   class="c-detailArea__link s-S -s12 -lh-2 -left">{{ data.url }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

