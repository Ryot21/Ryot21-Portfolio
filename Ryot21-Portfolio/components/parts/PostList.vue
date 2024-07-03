
<script setup lang="ts">
	import type { Product } from '~/types/product';

	type Props = {
		posts: Product[];
	};

	const { posts } = defineProps<Props>()

	// console.log(posts[0].id)
</script>

<template>
	<!-- 今まで制作したWEBサイトのご紹介 -->
		<ul class="c-flex -col2_3 mgb5 mgb5s a-fade -tm1 -sp2">
			<li v-for="post in posts" :key="post.id" class="flexItem mgb5 mgb5s">
				<NuxtLink :to="`/product/${post.id}`" class="">
					<div class="c-archive__img a-zoomImg">
						<div class="imgBox mgb3 mgb3s"><img :src="post.thumbnail?.url"></div>
					</div>
					<p class="s-S -s12 -ls-1 -left">{{ post.date }}</p>
					<p class="s-ML -s14 -b -left -ellipsis mgb3 mgb5s">{{ post.title }}</p>
					<!-- タグ -->
					<ul class="c-archive__tagLists mgb5 mgb5s">
						<li v-for="label in post.tag" :key="label.id" class="tagItem mgb1">
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


</template>