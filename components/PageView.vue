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

	<div class="c-profile mgb5 mgb10s a-fade -sp1">
		<ruby class="s-S -ls-2 -left">{{ title }}</ruby>
		<h2 class="c-profile__title s-3L -b -ls-2 -left pdr10 pdr10s">{{ sTE }}<span class="s-S -ls-1">{{ sTJ }}</span></h2>
	</div>
	<p class="c-profile__des s-M -left -lh-2 -ls-2 mgb10 mgb20s a-fade -tm05 -sp1">{{ des }}</p>

</template>