<template>
		<!-- header / TOPと各ページの構造が異なる -->
		<header id="header" class="tb-pc c-header -fixed pdt1">
        <div class="c-header-wrapper pdb1"><!-- バナー表示エリア -->
            <div class="c-header__popArea">
                <ul class="c-header__lists c-flex -h-c">
                    <li class="logoArea">
											<div class="imgBox"><img class="" src="~/assets/images/logo/site-logo01.png"></div>
                    </li>
                    <li class="navArea c-mainNav -borderVer">
											<ul class="c-mainNav__lists -col4">
												<li class="navItem">
														<NuxtLink to="/" class="navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-L -ls-3 -f-En01">TOP</span>
														</NuxtLink>
												</li>
												<li class="navItem">
														<NuxtLink to="/about" class="navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-L -ls-3 -f-En01">ABOUT</span>
														</NuxtLink>
												</li>
												<li class="navItem d-menu">
														<input id="d-menu__checkbox" class="d-menu__cheakbox" type="checkbox"/>
														<label class="d-menu__title -lh-1 navItem__link" for="d-menu__checkbox">
															<span class="navItem-title -main -s-nav s-L -ls-3 -f-En01">WORKS</span>
														</label>
														<ul class="d-menu__lists">
																<li class="d-menu__item -top">
																		<NuxtLink to="/works/products" class="d-menu__subTitle s-SS">サイト制作</NuxtLink>
																</li>
																<li class="d-menu__item -btm">
																		<NuxtLink to="/works/ses" class="d-menu__subTitle s-SS" >SES事業</NuxtLink>
																</li>
														</ul>
												</li>
												<li class="navItem">
														<NuxtLink to="/contact" class="navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-L -ls-3 -f-En01">CONTACT</span>
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