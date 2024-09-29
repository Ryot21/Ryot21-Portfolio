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


		// デフォルトのインデックスを設定
		const isActiveIndex = ref<number | null>(null)

		// ボタンの状態を管理
		const active01 = ref<boolean>(false)
		const active02 = ref<boolean>(false)

		// ボタンの切り替え
		const toggleActiveIndex = (type: 'pc' | 'sp'): void => {
			if (type === 'pc') {
				active01.value = !active01.value
				active02.value = false
				isActiveIndex.value = active01.value ? 0 : null // PCボタンが押されたとき、最初の画像をアクティブに
			} else if (type === 'sp') {
				active02.value = !active02.value
				active01.value = false
				isActiveIndex.value = active02.value ? 1 : null // SPボタンが押されたとき、2番目の画像をアクティブに
			}
		}

		// ページが読み込まれた時にPCボタンをアクティブにする
		onMounted(() => {
			toggleActiveIndex('pc')
		})
</script>


<template>
	<div v-if="article" class="c-contents mgt-contents">
		<div class="c-contents__inner w1100 mgb10 mgb20s">
			<!-- パンくず -->
			<PartsBreadcrumb />

			<ul class="c-detailArea">
				<li class="c-detailArea__left">
					<ul class="c-detailArea__imgLists a-fade -tm2 -sp1">
						<!-- 1枚目 -->
						<li 
							v-for="(image, index) in article.images.workImage" 
							:key="image.url" 
							:class="{ active: isActiveIndex === index }" 
							class="c-detailArea__imgItem"
						>
							<div class="c-detailArea__img">
								<div class="imgBox">
									<img :src="image.url" alt="制作したサイトの実際の画像" />
								</div>
							</div>
						</li>
						
					</ul>
				</li>
				<li class="c-detailArea__right mgb10s">

					<!-- タイトル -->
					<h2 class="c-detailArea__title s-LL -ls-1 mgb2 mgb2s a-fade -sp1">{{ article.title }}</h2>

					<!-- リリース日 -->
					<p class="c-detailArea__day s-S -ls-1 mgb5 mgb5s a-fade -sp1">リリース日 : {{ article.date }}</p>

					<!-- 切り替えボタン -->
					<ul class="c-btn -switch c-flex -col2_2 -jc-sb mgb5 mgb10s a-fade -sp1">
						<li class="flexItem">
							<button
								@click="toggleActiveIndex('pc')"
								:class="{ active: active01 }"
							>
								<svg id="pc-icon" data-name="pc-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.52 42.52">
									<g id="layer01">
										<rect class="cls-1" width="42.52" height="42.52"/>
										<path d="M1.69,4.22h39.15c.52,0,1,.43,1,1v24.91c0,.52-.47,1-1,1h-14.57l.57,2.7h1.8c.95,0,1.8.38,2.47,1h0c.62.66,1,1.52,1,2.47,0,.57-.43,1-.95,1H11.37c-.52,0-.95-.43-.95-1,0-.95.38-1.8,1-2.47l.05-.05c.66-.57,1.47-.95,2.42-.95h1.8l.57-2.7H1.69c-.57,0-1-.47-1-1V5.22c0-.57.43-1,1-1h0ZM26.03,35.78h-12.15c-.43,0-.76.14-1.04.43l-.14.14h17.08l-.05-.09v-.05c-.28-.24-.66-.43-1.09-.43h-2.61ZM24.27,31.13h-6.03l-.57,2.7h7.17l-.57-2.7ZM4.3,6.69h33.93c.52,0,1,.47,1,1v17.46c0,.57-.47,1-1,1H4.3c-.52,0-1-.43-1-1V7.69c0-.52.47-1,1-1h0ZM37.23,8.68H5.29v15.52h31.94v-15.52ZM39.84,6.17H2.63v22.97h37.2V6.17Z"/>
									</g>
								</svg>
							</button>
						</li>
						<li class="flexItem">
							<button
								@click="toggleActiveIndex('sp')"
								:class="{ active: active02 }"
							>
								<svg id="sp-icon" data-name="sp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.52 42.52">
									<g id="layer01">
										<rect class="cls-1" width="42.52" height="42.52"/>
										<path class="cls-2" d="M12.5,1.64h17.51c.81,0,1.57.33,2.09.9l.05.05c.52.52.81,1.23.81,1.99v33.41c0,.81-.33,1.52-.85,2.04l-.05.09c-.52.47-1.23.76-2.04.76H12.5c-.81,0-1.52-.28-2.04-.85h-.05c-.52-.52-.85-1.23-.85-2.04V4.58c0-.81.33-1.52.9-2.04.52-.57,1.23-.9,2.04-.9h0ZM21.28,35c.9,0,1.61.71,1.61,1.57,0,.9-.71,1.61-1.61,1.61s-1.66-.71-1.66-1.61c0-.85.76-1.57,1.66-1.57h0ZM13.55,4.58h15.42c.57,0,1,.43,1,.95v27.85c0,.57-.43,1-1,1h-15.42c-.52,0-.95-.43-.95-1V5.53c0-.52.43-.95.95-.95h0ZM28.02,6.53h-13.48v25.91h13.48V6.53ZM30.01,3.63H12.5c-.24,0-.52.09-.66.28-.19.14-.28.43-.28.66v33.41c0,.24.09.52.28.66h0c.14.19.43.28.66.28h17.51c.28,0,.52-.09.66-.24l.05-.05c.19-.19.28-.43.28-.66V4.58c0-.24-.09-.47-.24-.66h-.05c-.19-.19-.43-.28-.71-.28h0Z"/>
									</g>
								</svg>
							</button>
						</li>
					 </ul>

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

<style scoped lang="scss">
</style>