<!-- works > 制作物 > 詳細ページ -->
<template>
	<div>
		<h1>Product/{{ $route.params.id }}を表示中</h1>
	</div>
</template>

<script setup>
	definePageMeta({// 数字以外のパラメーターは「404エラー」を表示。
		validate: async(route) => {
			return /^\d+$/.test(route.params.id)
		}
	})
</script>