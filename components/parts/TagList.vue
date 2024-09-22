

<script setup lang="ts">

	import type { Tag } from '~/types/product';

	type Props = {
		tags: Tag[];
		selectedTagId: string | undefined;
	}

	const { tags, selectedTagId } = defineProps<Props>();

	// タグ一覧と選択中のタグIDを親から受け取り、リンクを表示させる
	function getClass(tagId: string) {
		if (tagId == selectedTagId) return 'active'
		return 'link'
	}

</script>

<template>
	<div class="c-tag mgb5 mgb5s">
		<h2 class="s-L -left mgb2 mgb5s">タグ一覧</h2>
		<ul class="c-tag__Lists">
			<li v-for="tag in tags" :key="tag.id"  class="c-tag__Item mgb2 mgb4s">
				<NuxtLink :to="`/tags/${tag.id}/page/1`" class="c-tag__Link s-S -ws-n" :class="getClass(tag.id)">
					#{{ tag.name }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>