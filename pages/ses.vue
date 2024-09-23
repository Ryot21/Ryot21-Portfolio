<!-- works > お仕事紹介ページ -->
<script setup lang="ts">
	useHead({
		title: "お仕事紹介 | Ryot21-Portfolio",
		meta: [
			{ name: 'description', content: '埼玉県狭山市在住のWEBエンジニア「RYOTA MAEDA」です。経験の浅いエンジニア・コーダー志望の方や新しい技術や異なる言語のプロジェクトに挑戦したいと考えている方々をサポートするため、エンジニア・コーダー向けにエージェント業も行っております。' }
		]
	})

	const t = "エンジニア向けのお仕事紹介"
	const sTE = "System Engineering Service"
	const sTJ = "SES"
	const des = "経験の浅いエンジニア・コーダー志望の方や新しい技術や異なる言語のプロジェクトに挑戦したいと考えている方々をサポートするため、エンジニア・コーダー向けにエージェント業も行っております。現状のプロジェクトに不満を抱えているエンジニアや異なる技術に興味を持つエンジニアにとって、適切なプロジェクトを見つけることはキャリアの重要なステップです。各エンジニアのスキルとキャリアの目標に合わせたプロジェクトを提供し、実務経験を積みながら自信と能力を高める機会を提供します。お気軽にお問い合わせください。"

</script>

<template>
	<div>
		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100 mgb10 mgb20s">
				<!-- パンくず -->
				<PartsBreadcrumb/>

				<div class="c-profile mgb5 mgb10s">
					<ruby class="s-S -ls-2 -left">{{ t }}</ruby>
					<h2 class="c-profile__title s-3L -b -ls-2 -left pdr10 pdr10s">{{ sTE }}<span class="s-S -ls-1">{{ sTJ }}</span></h2>
				</div>
				<p class="c-profile__des s-M -left -lh-2 -ls-2 mgb10 mgb10s">{{ des }}</p>
				<!-- お問い合わせページへ -->
				<div class="c-btn -pageLink -right a-fade -sp1">
					<NuxtLink to="/contact" class="s-M -center">お問い合わせ</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>