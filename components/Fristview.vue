
<template>
	<div class="c-contents -f-view mgt-view">
		<div class="imgBox -cv"></div>
		<div class="c-contentsBox -f-circle"><!-- ロゴ / サークル -->
			<div class="">
				<svg viewBox="0 0 100 100">
					<path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
					<text>
						<textPath xlink:href="#circle">
							WEBENGiNEER&nbsp;&nbsp;&nbsp;&nbsp;HEML5CSS3CODER&nbsp;&nbsp;&nbsp;&nbsp;WEBDESIGNER&nbsp;&nbsp;&nbsp;&nbsp;SES&nbsp;&nbsp;&nbsp;&nbsp;
						</textPath>
					</text>
				</svg>
			</div>
		</div>
		<div class="c-contentsBox -f-logo"><!-- ロゴ / アイコン -->
			<img src="~assets/images/logo/site-logo01.png" alt="">
		</div>
		<div class="c-contentsBox -f-title">
			<div class="a-fade -tm05 -sp2"><h2 class="s-LL -center -f-En0 -lh-2 -b -ls-3">RYOTA MAEDA</h2></div>
		</div>
		<div class="c-contentsBox -f-des">
			<div class="a-fade -tm1 -sp2"><p class="s-ML -center -f-En0 -lh-1_5_s -ls-2 -ws-n">This Site is a Portfolio Site <br class="sp">for Web Engineers.</p></div>
		</div>
	</div>
</template>

<style lang="scss">
.-f-circle{
	svg {overflow: visible;}
	path {fill: none;}
	textPath{font-size: .95rem;}
}
</style>