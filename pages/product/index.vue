<!-- works > 制作物 > アーカイブページ -->
<script setup lang="ts">

	useHead({
		title: "制作実績一覧 | Ryot21-Portfolio",
		meta: [
			{ name: 'description', content: '埼玉県狭山市在住のWEBエンジニア「RYOTA MAEDA」の制作実績一覧ページです。' }
		]
	})

	const route = useRoute()
	const tagId = String(route.params.tagId || "");

	const t = "WEBデザイン + コーディング"
	const sTE = "WEBSITE"
	const sTJ = "WEBサイト制作"
	const des = "本業でも個人でも、Webサイトを作る活動をしています。次にご紹介するのは、私がこれまで手掛けてきた様々なWEBサイトのプロジェクトです。クライアント様のニーズに細かく把握し、SEOを意識したユーザビリティの高いデザインのWEBサイトの制作を心がけております。私が制作したWEBサイトをご紹介します。"
</script>

<template>
		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100">
				<!-- パンくず -->
				<PartsBreadcrumb />

				<!-- ページ説明 -->
				<PageView :title="t" :sTE="sTE" :sTJ="sTJ" :des="des"/>
				
				<!-- 一覧リスト表示 -->
				<Archive :page="1" :tagId="tagId"/>
			</div>
		</div>
</template>

<style lang="scss">
	.c-detailBtn{
		text-align: end;

		&--inner{
			position: relative;
			display: inline-block;
			width: auto;
			&::before{
				background: #545353;
				bottom: -5%;
				content: "";
				height: 1px;
				left: 45%;
				position: absolute;
				transform: translate(-50%);
				width: 110%;
				border-radius: 30px;

			}
			&::after{
				content: "";
				display: block;
				position: absolute;
				bottom: 0;
				left: 100%;

				width: 8px;
				height: 1px;
				background: #545353;
				border-radius: 30px;

			transform: rotate(-130deg);
			transform-origin: left bottom;

			}
		}
	}
</style>