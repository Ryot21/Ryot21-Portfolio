
<script setup lang="ts">
import { ref } from 'vue';

type Props = {
    keyword?: string
}

const { keyword } = defineProps<Props>()

const query = ref(keyword)

// search.vueに遷移させるコンポーネント
function canSubmit() {
    // 空白もしくはスペースのみの場合false
    return !!query.value && !/^\s+$/.test(query.value)
}

function submit() {
    if (canSubmit()) {
        return navigateTo({
            path: '/search',
            query: {
                q: query.value
            }
        })
    }
}

</script>

<template>
	<div class="c-search__area mgb3 mgb5s">
		<!-- 検索フォーム -->
		<form class="c-search__form" @submit.prevent="submit">
            <input id="search-input" type="text" v-model="query" ref="searchForm" placeholder="検索してみてね">
		</form>
	</div>
</template>
