<script setup lang="ts">

	type Props = {
		title: String,
		sTE: String,
		sTJ: String,
		des: String
	}

	const { title, sTE, sTJ, des } = defineProps<Props>()

</script>

<template>

	<div class="c-profile mgb5 mgb10s">
		<ruby class="s-S -ls-2 -left">{{ title }}</ruby>
		<h2 class="c-profile__title s-3L -b -ls-2 -left">{{ sTE }}<span class="s-S">{{ sTJ }}</span></h2>
	</div>
	<p class="c-profile__des s-M -left -lh-2 -ls-2 mgb10 mgb20s">{{ des }}</p>

</template>