<!-- works > 制作物 > アーカイブページ -->
<template>
	<div>
		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100">
				<div class="c-profile mgb5 mgb10s">
					<ruby class="s-S -ls-2 -left">WEBデザイン + コーディング</ruby>
					<h2 class="c-profile__title s-3L -b -ls-2 -left">WEBSITE<span class="s-S">WEBサイト制作</span></h2>
				</div>
				<p class="c-profile__des s-M -left -lh-2 -ls-2 mgb10 mgb20s">
					次にご紹介するのは、私がこれまで手掛けてきた様々なWEBサイトのプロジェクトです。<br>
					クライアント様のニーズに細かく把握し、SEOを意識したユーザビリティの高いデザインのWEBサイトの制作を心がけております。<br>
					以下で、私の代表的な作品をいくつかご紹介します。
				</p>

				<!-- 今まで制作したWEBサイトのご紹介 -->
				<div class="c-contents mgb20 mgb20s">
					<ul class="c-flex -col2_3">
						<li class="a-fadeUp -sc-auto mgb5 mgb5s">
							<NuxtLink to="" class="">
								<div class="c-portfolio a-zoomImg">
									<div class="imgBox mgb3 mgb3s"><img src="https://via.placeholder.com/480x320/?text=480x320"></div>
									<p class="s-ML -b -left mgb3 mgb3s">タイトルタイトル</p>
									<p class="s-SS -detail">詳しく見る</p>
								</div>
							</NuxtLink>
						</li>
						<li class="a-fadeUp -sc1 mgb5 mgb5s">
							<NuxtLink to="" class="">
								<div class="c-portfolio a-zoomImg">
									<div class="imgBox mgb3 mgb3s"><img src="https://via.placeholder.com/480x320/?text=480x320"></div>
									<p class="s-ML -b -left mgb3 mgb3s">タイトルタイトル</p>
									<p class="s-SS -detail">詳しく見る</p>
								</div>
							</NuxtLink>
						</li>
						<li class="a-fadeUp -sc2 mgb5 mgb5s">
							<NuxtLink to="" class="">
								<div class="c-portfolio a-zoomImg">
									<div class="imgBox mgb3 mgb3s"><img src="https://via.placeholder.com/480x320/?text=480x320"></div>
									<p class="s-ML -b -left mgb3 mgb3s">タイトルタイトル</p>
									<p class="s-SS -detail">詳しく見る</p>
								</div>
							</NuxtLink>
						</li>
						<li class="a-fadeUp -sc-auto mgb5 mgb5s">
							<NuxtLink to="" class="">
								<div class="c-portfolio a-zoomImg">
									<div class="imgBox mgb3 mgb3s"><img src="https://via.placeholder.com/480x320/?text=480x320"></div>
									<p class="s-ML -b -left mgb3 mgb3s">タイトルタイトル</p>
									<p class="s-SS -detail">詳しく見る</p>
								</div>
							</NuxtLink>
						</li>
						<li class="a-fadeUp -sc1 mgb5 mgb5s">
							<NuxtLink to="" class="">
								<div class="c-portfolio a-zoomImg">
									<div class="imgBox mgb3 mgb3s"><img src="https://via.placeholder.com/480x320/?text=480x320"></div>
									<p class="s-ML -b -left mgb3 mgb3s">タイトルタイトル</p>
									<p class="s-SS -detail">詳しく見る</p>
								</div>
							</NuxtLink>
						</li>
						<li class="a-fadeUp -sc2 mgb5 mgb5s">
							<NuxtLink to="" class="">
								<div class="c-portfolio a-zoomImg">
									<div class="imgBox mgb3 mgb3s"><img src="https://via.placeholder.com/480x320/?text=480x320"></div>
									<p class="s-ML -b -left mgb3 mgb3s">タイトルタイトル</p>
									<p class="s-SS -detail">詳しく見る</p>
								</div>
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.-detail{
		position: relative;
		display: inline-block;

		&::before{
			content: "";
			position: absolute;
			bottom: -5%;
			left: 58%;
			transform: translateX(-50%);
			width: 118%;
			height: 1px;
			background: #545353;
		}
		&::after{
			content: "";
			display: block;
			position: absolute;
			bottom: 0;
			left: 118%;

			width: 8px;
			height: 1px;
			background-color: #545353;

    transform: rotate(-130deg);
    transform-origin: left bottom;

		}
	}
</style>