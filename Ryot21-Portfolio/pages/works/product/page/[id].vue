<script setup lang="ts">

	const route = useRoute()
	const page = Number(route.params.id || 1)

</script>

<template><!-- 制作実績_2ページ以降 -->
	<div class="c-contents mgt-contents">
		<div class="c-contents__inner w1100">
				<!-- タイトルエリア -->
				<div class="c-profile mgb5 mgb10s">
					<ruby class="s-S -ls-2 -left">WEBデザイン + コーディング</ruby>
					<h2 class="c-profile__title s-3L -b -ls-2 -left">WEBSITE<span class="s-S">WEBサイト制作</span></h2>
				</div>
				<!-- 導入エリア -->
				<p class="c-profile__des s-M -left -lh-2 -ls-2 mgb10 mgb20s">
					本業でも個人でも、Webサイトを作る活動をしています。
					次にご紹介するのは、私がこれまで手掛けてきた様々なWEBサイトのプロジェクトです。
					クライアント様のニーズに細かく把握し、SEOを意識したユーザビリティの高いデザインのWEBサイトの制作を心がけております。
					私が制作したWEBサイトをご紹介します。
				</p>

				<!-- 一覧リスト表示 -->
				<Archive :page="page"/>

		</div>
	</div>
</template>