<script setup lang="ts">

	useHead({
		title: "制作実績一覧 | Ryot21-Portfolio",
		meta: [
			{ name: 'description', content: '埼玉県狭山市在住のWEBエンジニア「RYOTA MAEDA」の制作実績一覧ページです。' }
		]
	})

	const route = useRoute();
	const page  = Number(route.params.id || 1);
	const tagId = String(route.params.tagId || "");

	const t = "WEBデザイン + コーディング"
	const sTE = "WEBSITE"
	const sTJ = "WEBサイト制作"
	const des = "本業でも個人でも、Webサイトを作る活動をしています。次にご紹介するのは、私がこれまで手掛けてきた様々なWEBサイトのプロジェクトです。クライアント様のニーズに細かく把握し、SEOを意識したユーザビリティの高いデザインのWEBサイトの制作を心がけております。私が制作したWEBサイトをご紹介します。"
</script>

<template>
	<div>
		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100">
				<!-- パンくず -->
				<PartsBreadcrumb/>
				<!-- ページ説明 -->
				<PageView :title="t" :sTE="sTE" :sTJ="sTJ" :des="des"/>
				<!-- 一覧リスト表示 -->
				<Archive :page="page" :tagId="tagId"/>
			</div>
		</div>
	</div>

</template>