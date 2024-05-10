<!-- works > 制作物 > 詳細ページ -->
<template>
	<div class="c-contents mgt-contents">
		<div class="c-contents__inner w1100 mgb10 mgb20s">
			<PartsBreadcrumb />
			<ul class="c-detailArea">
				<li class="c-detailArea__left mgb5s">
					<!-- 1枚目 -->
					<div class="c-detailArea__img imgBox a-fade-blur">
						<img src="https://via.placeholder.com/1500x800/?text=1500x800" alt="WEBサイトのメインビジュアル">
						<!-- <img src="~assets/images/f-view/top/top-view_bg.png" alt="WEBサイトのメインビジュアル"> -->
					</div>
					<!-- 2枚目 -->
					<div class="c-detailArea__img imgBox a-fade-blur">
						<img src="https://via.placeholder.com/1500x800/?text=1500x800" alt="2枚目">
						<!-- <img src="~assets/images/f-view/top/top-view_bg.png" alt="WEBサイトのメインビジュアル"> -->
					</div>
				</li>
				<li class="c-detailArea__right">
					<h2  class="c-detailArea__title s-LL -center mgb2 mgb2s">タイトルタイトルタイトル</h2>
					<p   class="c-detailArea__day s-S -center mgb5 mgb5s">リリース日 : 2024.05.10</p>
					<p   class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-M -b">説明</span></p>
					<p   class="c-detailArea__text s-M -lh-2 -left mgb5 mgb5s">
						テキストテキストテキストテキストテキストテキストテキストテキスト
						テキストテキストテキストテキストテキストテキストテキストテキスト
						テキストテキストテキストテキストテキストテキストテキストテキスト
						テキストテキストテキストテキストテキストテキスト
					</p>
					<p   class="c-detailArea__subTitle -left mgb2 mgb2s"><span class="s-M -b">URL</span></p>
					<a   class="c-detailArea__link s-M -lh-2 -left" href="">https://test.com</a>
				</li>
			</ul>
			<!-- <h1>Product/{{ $route.params.id }}を表示中</h1> -->

		</div>
	</div>
</template>

<script setup>
	definePageMeta({// 数字以外のパラメーターは「404エラー」を表示。
		validate: async(route) => {
			return /^\d+$/.test(route.params.id)
		}
	})
</script>