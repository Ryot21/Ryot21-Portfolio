<!-- works > 制作物 > アーカイブページ -->
<script setup lang="ts">
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
				content: "";
				position: absolute;
				bottom: -5%;
				left: 50%;
				transform: translateX(-50%);
				width: 100%;
				height: 1px;
				background: #545353;
			}
			&::after{
				content: "";
				display: block;
				position: absolute;
				bottom: 0;
				left: 100%;

				width: 8px;
				height: 1px;
				background-color: #545353;

			transform: rotate(-130deg);
			transform-origin: left bottom;

			}
		}
	}
</style>