<template>
		<!-- header / TOPと各ページの構造が異なる -->
		<!-- <header id="header" class="c-header -fixed a-scroll-header"> -->
		<header id="header" class="c-header pdt2 pdb3 pdt2s pdb2s">
        <div class="c-header-wrapper -no-b "><!-- バナー表示エリア -->
            <div class="c-header__popArea ">
                <ul class="c-header__lists c-flex -h-c">
                    <li class="logoArea">
											<NuxtLink to="/" class="">
												<h1 class="imgBox"><img class="" src="~/assets/images/logo/site-logo01.png"></h1>
											</NuxtLink>
											</li>
                    <li class="tb-pc navArea c-mainNav -borderVer">
											<ul class="c-mainNav__lists -col4">
												<li class="navItem">
														<NuxtLink to="/about" class="navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-ML -b -ls-1">ABOUT</span>
														</NuxtLink>
												</li>
												<li class="navItem">
														<NuxtLink to="/media" class="navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-ML -b -ls-1">BLOG</span>
														</NuxtLink>
												</li>
												<li class="navItem">
														<NuxtLink to="/works" class="navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-ML -b -ls-1">WORKS</span>
														</NuxtLink>
												</li>
												<li class="navItem">
														<NuxtLink to="/works/ses" class="navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-ML -b -ls-1">SES</span>
														</NuxtLink>
												</li>
												<li class="navItem">
														<NuxtLink to="/contact/" class="navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-ML -b -ls-1">CONTACT</span>
														</NuxtLink>
												</li>
											</ul>
										</li>
                </ul>

            </div>
        </div>
    </header>
    <!-- //header -->
</template>

<script setup>

</script>

<style lang="scss">
	.navItem{
		.navItem__link,
		.d-menu__title{
			&.router-link-active{// アクティブ
				pointer-events: none;
				&::after{
					background: #929090 !important;
				}
			}
		}
		.d-menu__subTitle{
			&.router-link-exact-active{
				color: #ffffff !important;
				background: #929090 !important;
			}
		}
	}

</style>