
<script setup lang="ts">

	import type { MicroCMSQueries } from 'microcms-js-sdk'
	import { WORK_LIMIT_PAGE } from '~/server/setting/siteSettings';

	const route = useRoute()
	const query = String(route.query.q)

	// 追加　ページ遷移時にページ情報を受け取る
	const page = Number(route.query.page || 1)
	const limit = WORK_LIMIT_PAGE

	// ページ情報を持たせる
	const queries: MicroCMSQueries = {
			q: query,
			orders: '-id',// コンテンツIDで表示順を設定
			limit: limit,
			offset: (page - 1) * limit,
	}

	const { data: products } = await useFetch('/api/workList', { params: queries })

	// Nullチェックを行う
  const numPages = computed(() => {
    return products.value ? Math.ceil(products.value.totalCount / limit) : 0;
  });

	// queryが変化した場合にページをリロードする
	watch(() => route.query, () => location.reload())

	const t = "WEBデザイン + コーディング"
	const sTE = "WEBSITE"
	const sTJ = "WEBサイト制作"
	const des = "本業でも個人でも、Webサイトを作る活動をしています。次にご紹介するのは、私がこれまで手掛けてきた様々なWEBサイトのプロジェクトです。クライアント様のニーズに細かく把握し、SEOを意識したユーザビリティの高いデザインのWEBサイトの制作を心がけております。私が制作したWEBサイトをご紹介します。"
</script>

<template>
		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100">
				<div class="c-contents mgb20 mgb20s results">

						<!-- 検索結果 > 1以上の場合 -->
						<div v-if="products && products.contents && products.contents.length > 0">

							<!-- ページ説明 -->
							<WorkView :title="t" :sTE="sTE" :sTJ="sTJ" :des="des"/>
							<!-- 検索結果 -->
							<div class="mgb3 mgb5s" v-if="query">
								<h2 class="s-L -right">検索キーワード</h2>
								<p class="s-M -right">#{{ query }}</p>
							</div>
							<!-- 検索フォーム -->
							<PartsSearchForm />
							<!-- 投稿 -->
							<PartsPostList :posts="products.contents"/>	
							<!-- ページネーション -->
							<PartsPagination :numPages="numPages" :current="page" :keyword="query"/>
						
						</div>

						<!-- 検索結果 > 無い場合 -->
						<div v-else class="pdt10 pdb10 pdt10s pdb10s mgb10 mgb10s">
							<PartsSearchForm />
							<h2 class="s-LL -s16 -b -ls-2 -center">『{{ query }}』の記事は見つかりませんでした。</h2>
            </div>
        </div>

			</div>
		</div>
</template>

