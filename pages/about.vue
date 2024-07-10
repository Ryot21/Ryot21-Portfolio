<!-- Aboutページ -->
<script setup lang="ts">

	useHead({
		title: "作者について | Ryot21-Portfolio",
		meta: [
			{ name: 'description', content: '埼玉県狭山市在住のWEBエンジニア「RYOTA MAEDA」です。様々なWEBサイト制作のご依頼・お仕事紹介のご依頼お待ちしております！' }
		]
	});

	const t   = "前田 リョウタ"
	const sTE = "RYOTA MAEDA"
	const sTJ = "フロントエンジニア"
	const des = "1991年生まれの4児の父。2013年4月に都内の化学メーカーに入社後、営業として7年間勤めた経験を持つ。複数人のチームを作り、全く新しい商品を製造した経験から、仕事は自分一人だけでできるモノではなく「仲間」の大切さを知るキッカケとなった。その後、長年の興味であったWEB分野への転身を決意し、プログラミングスクールに通いながら新たなキャリアをスタートさせました。2020年3月にプログラミングスクール卒業後、都内のWEB制作会社に勤務。数年間の勤務を経て2024年6月まで関東に拠点を置く不動産会社でWEBエンジニアとして活躍。2024年7月から都内の某コンサル企業にて、WEBエンジニア兼WEBマーケターとして勤務予定。以上の経験から、ビジネスのニーズに応じた効果的なWEB戦略の提案や、ユーザーに響くデザインを生み出す能力を身につけました。これまでの経験を活かし、クライアントのビジネスが一層輝くよう支援していくことが私の仕事です。"
	
</script>

<template>
	<div>
		<!-- <picView /> -->
		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100 mgb20 mgb20s">
				<!-- パンくず -->
				<PartsBreadcrumb/>

				<!-- ページ説明 -->
				<div class="c-profile mgb5 mgb10s a-fade -sp1">
					<ruby class="s-S -ls-2 -left">{{ t }}</ruby>
					<h2 class="c-profile__title s-3L -b -ls-2 -left pdr10 pdr10s">{{ sTE }}<span class="s-S -ls-1">{{ sTJ }}</span></h2>
				</div>
				<p class="c-profile__des s-M -left -lh-2 -ls-2 mgb10 mgb10s a-fade -tm05 -sp1">
						1991年生まれの4児の父。<br>
						<br>
						2013年4月に都内の化学メーカーに入社後、営業として7年間勤めた経験を持つ。
						複数人のチームを作り、全く新しい商品を製造した経験から、仕事は自分一人だけでできるモノではなく「仲間」の大切さを知るキッカケとなった。<br>
						<br>
						その後、長年の興味であったWEB分野への転身を決意し、プログラミングスクールに通いながら新たなキャリアをスタートさせました。2020年3月にプログラミングスクール卒業後、都内のWEB制作会社に勤務。数年間の勤務を経て2024年6月まで関東に拠点を置く不動産会社でWEBエンジニアとして活躍。2024年7月から都内の某コンサル企業にて、WEBエンジニア兼WEBマーケターとして勤務予定。<br>
						<br>
						以上の経験から、ビジネスのニーズに応じた効果的なWEB戦略の提案や、ユーザーに響くデザインを生み出す能力を身につけました。これまでの経験を活かし、クライアントのビジネスが一層輝くよう支援していくことが私の仕事です。
				</p>
				<!-- お問い合わせページへ -->
				<div class="c-btn -pageLink -right a-fade -tm1 -sp1">
					<NuxtLink to="/contact" class="s-M -center">お問い合わせ</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template> 