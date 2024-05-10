<!-- works > 制作物 > 詳細ページ -->
<template>
	<div class="c-contents mgt-contents">
		<div class="c-contents__inner w1100">
			<PartsBreadcrumb />



			<h1>Product/{{ $route.params.id }}を表示中</h1>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({// 数字以外のパラメーターは「404エラー」を表示。
		validate: async(route) => {
			return /^\d+$/.test(route.params.id)
		}
	})
</script>