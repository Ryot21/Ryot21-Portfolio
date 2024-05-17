<!-- ブログ > アーカイブページ -->
<script setup lang="ts">
	import type { Blog } from "~~/types/Blog";
	// const { params } = useRoute();
	const { data } = await useMicroCMSGetList<Blog>({
		endpoint: "blogs",
	});

	console.log(data);
</script>

<template>
	<div>
		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100">
				<div class="c-profile mgb5 mgb10s">
					<ruby class="s-S -ls-2 -left">ブログ</ruby>
					<h2 class="c-profile__title s-3L -b -ls-2 -left">BLOG<span class="s-S">煌めく明日に向かって</span></h2>
				</div>
				<p class="c-profile__des s-M -left -lh-2 -ls-2 mgb10 mgb20s">
					私はWEBエンジニアとしての日々の学びや体験をポートフォリオサイトに訪れてくださった皆様に共有したいと思いブログを始めました。
					ここでは、仕事を通じて学んだ話からプライベートな出来事まで、様々な話題を取り上げていきます。
					フロントエンドの最新トレンド、実践的なプログラミングのヒント、日々の生活で感じたことなど、多岐にわたる内容を綴っていく予定です。
					私のブログが皆様の知識の一助となり、また時には共感やインスピレーションの源となれば幸いです。
					是非、コメントやフィードバックを通じて、お互いの経験を共有しましょう。
				</p>

				<!-- 今まで制作したWEBサイトのご紹介 -->
				<div class="c-contents mgb20 mgb20s">
					<ul class="c-flex -col2_3">
						<li v-for="blog in data?.contents" :key="blog.id" class="mgb5 mgb5s">
							<NuxtLink :to="`/media/blog/${blog.id}`" class="">
								<div class="c-archive__img c-blogArea__img a-zoomImg">
									<div class="imgBox a-imgMono mgb3 mgb3s"><img :src="blog.thumbnail?.url"></div>
								</div>
								<p class="s-ML -s14 -b -left mgb3 mgb3s">{{ blog.title }}</p>
								<p class="s-SS -detail">詳しく見る</p>
							</NuxtLink>
						</li>

					</ul>
				</div>
			</div>
		</div>
	</div>
</template>