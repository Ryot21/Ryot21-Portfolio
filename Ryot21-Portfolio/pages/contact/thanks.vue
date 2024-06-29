<script setup lang="ts">
	useHead({
		title: "お問い合わせありがとうございます！ | Ryot21-Portfolio",
		meta: [
			{ name: 'description', content: 'お問い合わせ完了しました！' }
		]
	})

	const t = "お問い合わせありがとうございます。"
	const sTE = "CONTACT COMPLETION"
	const sTJ = "お返事お待ち下さい"
	const des = "お問い合わせありがとうございます！3営業日以内に担当者よりご連絡を差し上げますので、しばらくお待ちください。何かご不明な点がございましたら、お気軽に再度お問い合わせください。"

</script>

<template>
		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100">
				<!-- ページ説明 -->
				<div class="c-profile mgb10 mgb10s">
					<ruby class="s-S -ls-2 -left">お問い合わせありがとうございます。</ruby>
					<h2 class="c-profile__title s-3L -b -ls-2 -left">CONTACT COMPLETE</h2>
				</div>
				<p class="c-profile__des s-M -center -lh-2 -ls-2 mgb10 mgb20s">
					お問い合わせありがとうございます！<br><br class="sp">
					3営業日以内に担当者よりご連絡を差し上げますので、<br class="sp">しばらくお待ちください。
				</p>
				<!-- TOPページに戻る -->
				<div class="c-btn">
					<NuxtLink to="/">TOPへ戻る</NuxtLink>
				</div>

			</div>
		</div>

</template>