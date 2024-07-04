<template>
		<!-- ハンバーガーメニュー -->
		<nav class="sp c-hnav a-scroll-on">
			<input id="c-hnav__checkbox" class="c-hnav__cheakbox" type="checkbox"/>
			<label class="c-hnav__button" for="c-hnav__checkbox">
							<span></span>
					</label>
			<label id="" class="c-hnav__cheakbox c-hnav__close" for="c-hnav__checkbox"></label>
			<div class="c-hnav__content">
				<ul class="">
					<li class=""><NuxtLink class="s-SS -ws-n -left"  to="/about#top"><span class="s-ML -s14 -b -ls-2 pdr5 pdr4s">ABOUT</span></NuxtLink></li>
					<li class=""><NuxtLink class="s-SS -ws-n -left"  to="/media#top"><span class="s-ML -s14 -b -ls-2 pdr5 pdr4s">BLOG</span></NuxtLink></li>
					<li class=""><NuxtLink class="s-SS -ws-n -left"  to="/product#top"><span class="s-ML -s14 -b -ls-2 pdr5 pdr4s">PRODUCT</span></NuxtLink></li>
					<li class=""><NuxtLink class="s-SS -ws-n -left"  to="/ses#top"><span class="s-ML -s14 -b -ls-2 pdr5 pdr4s">SES</span></NuxtLink></li>
					<li class="mgb15 mgb15s">
											<NuxtLink class="s-SS -ws-n -left"  to="/contact#top"><span class="s-ML -s14 -b -ls-2 pdr5 pdr4s">CONTACT</span></NuxtLink>
					</li>
				</ul>
							<!--　ハンバーガー > ロゴ関係 -->
							<!-- <div class="c-hnav__logo"><img src="images/logo/SVG/.svg" alt=""></div>
							<div class="c-hnav__icon"><img src="images/favicon.ico" alt=""></div> -->
			</div>
		</nav>
</template>

<style lang="scss"></style>