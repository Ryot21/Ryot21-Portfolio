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
				<!-- ページ説明 -->
				<PageView :title="t" :sTE="sTE" :sTJ="sTJ" :des="des"/>
				<!-- 一覧リスト表示 -->
				<Archive :page="1" :tagId="tagId"/>
		</div>
	</div>
</template>