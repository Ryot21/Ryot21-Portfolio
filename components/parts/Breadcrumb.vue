<!-- パンくず -->
<script setup leng="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(x => x);
  const breadcrumbs = [];
  let path = '';
  // 複数の除外したいセグメントのリスト
  const excludedSegments = ['page', 'blog', 'tags'];

  for (const segment of pathArray) {
    if (!excludedSegments.includes(segment)) {
      path += '/' + segment;
      const label = getLabelForSegment(segment);
      breadcrumbs.push({ path, label });
    }
  }

  return breadcrumbs;
});

function getLabelForSegment(segment) {
  // URL セグメントからラベルを決定するロジック
  // 通常は翻訳ファイルやマップからラベルを取得
  const labels = {
    'about': '作者について',
		'media': 'ブログ',

    'product': '制作実績',
		'search': '検索結果',

		'tag1': 'コーポレートサイト',
		'tag2': 'サービスサイト',
		'tag3': 'ECサイト',
		'tag4': 'プロモーションサイト・LP',
		'tag5': 'ブランディングサイト',
		'tag6': 'リクルートサイト',
		'tag7': 'メディアサイト',

		'page': 'ページ',
		'ses': 'SES',
    'contact': 'お問い合わせ'
    // 他のセグメントに対応するラベルも追加
  };
  return labels[segment] || segment;
}
</script>

<template>
	<nav aria-label="c-breadcrumb__lists">
    <ol class="c-breadcrumb__lists mgb2 mgb3s">
			<!-- トップ -->
			<li class="c-breadcrumb__item">
				<NuxtLink class="c-breadcrumb__link" to="/">TOP</NuxtLink>
			</li>
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="c-breadcrumb__item">
        <NuxtLink class="c-breadcrumb__link" v-if="index !== breadcrumbs.length - 1" :to="crumb.path">{{ crumb.label }}</NuxtLink>
        <span v-else>{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>