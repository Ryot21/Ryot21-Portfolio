<script setup lang="ts">
	useHead({
		title: "送信が出来ませんでした。 | Ryot21-Portfolio",
		meta: [
			{ name: 'description', content: 'お問い合わせの送信が失敗しました（汗）' }
		]
	})

</script>

<template>
		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100 mgb10 mgb20s">
				<!-- ページ説明 -->
				<div class="c-profile mgb10 mgb10s">
					<ruby class="s-S -ls-2 -left">お問い合わせの送信が出来ませんでした。</ruby>
					<h2 class="c-profile__title s-3L -b -ls-2 -left pdr10 pdr10s">SEND ERROR</h2>
				</div>
				<p class="c-profile__des s-M -center -lh-2 -ls-2 mgb10 mgb10s">
					エラーが発生したため、<br class="sp">お問い合わせが送信出来ませんでした。<br><br class="sp">
					問題を解決するために対応を進めております。<br><br class="sp">
					しばらく時間を置いてから<br class="sp">再度アクセスしてください。
				</p>
				<!-- CONTACTページに戻る -->
				<div class="c-btn -pageLink">
					<NuxtLink to="/contact" class="s-M -center">戻る</NuxtLink>
				</div>
			</div>
		</div>
</template>