
<template>
	<div class="c-contents -f-view mgt-view">
		<div class="imgBox -cv">
			<!-- <img src="~assets/images/f-view/top/top-view_bg.png" alt="透明な背景"> -->
		</div>
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
			<h1 class="s-LL -center -f-En02 -ls-3">RYOTA MAEDA</h1>
		</div>
		<div class="c-contentsBox -f-des">
			<p class="s-L -center -f-En02 -ls-2">THIS SITE IS A PORTFOLIO SITE FOR <br class="sp">WEB ENGINEERS.</p>
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