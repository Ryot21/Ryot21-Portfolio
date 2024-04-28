<template>
		<!-- header / TOPと各ページの構造が異なる -->
		<header id="header" class="c-header -fixed pdt1">
        <div class="c-header-wrapper pdb1"><!-- バナー表示エリア -->
            <div class="c-header__popArea">
                <ul class="c-header__lists c-flex -h-c">
                    <li class="logoArea">
											<div class="imgBox"><img class="" src="~/assets/images/logo/site-logo01.png"></div>
                    </li>
                    <li class="navArea c-mainNav -borderVer">
											<ul class="c-mainNav__lists -col4">
												<li class="navItem">
														<a href="" class="-active navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-L -ls-3 -f-En01">TOP</span>
														</a>
												</li>
												<li class="navItem">
														<a href="concept.html" class="navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-L -ls-3 -f-En01">ABOUT</span>
														</a>
												</li>
												<li class="navItem d-menu">
														<input id="d-menu__checkbox" class="d-menu__cheakbox" type="checkbox"/>
														<label class="d-menu__title -lh-1 navItem__link" for="d-menu__checkbox">
															<span class="navItem-title -main -s-nav s-L -ls-3 -f-En01">WORKS</span>
														</label>
														<ul class="d-menu__lists">
																<li class="d-menu__item -top">
																		<label class="d-menu__subTitle s-SS popup popup-open" for="popup01">サイト制作</label>
																</li>
																<li class="d-menu__item -btm">
																		<label class="d-menu__subTitle s-SS popup popup-open" for="popup02">SES事業</label>
																</li>
														</ul>
												</li>
												<li class="navItem">
														<a href="" class="navItem__link -lh-1">
															<span class="navItem-title -main -s-nav s-L -ls-3 -f-En01">CONTACT</span>
														</a>
												</li>
											</ul>
										</li>
                </ul>

            </div>
        </div>
    </header>
    <!-- //header -->
</template>