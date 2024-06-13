<!-- works > 制作物 > アーカイブページ -->
<script setup lang="ts">

</script>

<template>
	<div>
		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100">
				<div class="c-profile mgb5 mgb10s">
					<ruby class="s-S -ls-2 -left">WEBデザイン + コーディング</ruby>
					<h2 class="c-profile__title s-3L -b -ls-2 -left">WEBSITE<span class="s-S">WEBサイト制作</span></h2>
				</div>
				<p class="c-profile__des s-M -left -lh-2 -ls-2 mgb10 mgb20s">
					本業でも個人でも、Webサイトを作る活動をしています。
					次にご紹介するのは、私がこれまで手掛けてきた様々なWEBサイトのプロジェクトです。
					クライアント様のニーズに細かく把握し、SEOを意識したユーザビリティの高いデザインのWEBサイトの制作を心がけております。
					私が制作したWEBサイトをご紹介します。
				</p>
				<!-- 一覧リスト表示 -->
				<Archive :page="1"/>
			</div>
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