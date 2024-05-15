<template>
    <footer id="footer" class="c-footer mgt-2">
        <!-- <div class="c-footer-wrapper mgb1 mgb10s">
            <div class="c-footer__contactArea">
                <ul class="c-footer__contactLists">
                    <li class="contactItem">
                        <a href="" class="-lh-1">
                            <span class="contactItem_main s-L -s-nav">WEBサイト制作</span>
                            <br>
                            <span class="contactItem_sub s-SS -s-nav">WEBSITE CREATE</span>
                        </a>
                    </li>
                    <li class="contactItem">
                        <a href="" class="-lh-1">
                            <span class="contactItem_main s-L -s-nav">お仕事紹介</span>
                            <br>
                            <span class="contactItem_sub s-SS -s-nav">SES</span>
                        </a>
                    </li>
                    <li class="tb-pc contactItem">
                        <a href="" class="-lh-1">
                            <span class="contactItem_main s-L -s-nav">お問い合わせ</span>
                            <br>
                            <span class="contactItem_sub s-SS -s-nav">CONTACT</span>
                        </a>
                    </li>
                    <li class="tb-pc contactItem">
                        <a href="" class="-lh-1">
                            <span class="contactItem_main s-L -s-nav">トップページ</span>
                            <br>
                            <span class="contactItem_sub s-SS -s-nav">HOME</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div> -->
        <div class="c-footer-wrapper -v02 mgb2 mgb10s">
            <nav class="c-footer__navArea">
                <ul class="c-footer__navLists -col5">
                    <!-- アクティブ箇所に「.-active」を付与して下さい。 -->
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/" class=" -lh-1 -center">
                            <span class="s-M -s-nav -ls-2 -f-En01">トップ</span>
                        </NuxtLink>
                    </li>
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/about" class="-lh-1 -center">
                            <span class="s-M -s-nav -ls-2 -f-En01">作者について</span>
                        </NuxtLink>
                    </li>
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/works/" class="-lh-1 -center">
                            <span class="s-M -s-nav -ls-2 -f-En01">制作実績</span>
                        </NuxtLink>
                    </li>
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/works/ses" class="-lh-1 -center">
                            <span class="s-M -s-nav -ls-2 -f-En01">エージェント</span>
                        </NuxtLink>
                    </li>
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/contact" class="-lh-1 -center">
                            <span class="s-M -s-nav -ls-2 -f-En01">お問い合わせ</span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="c-footer__shopArea">
            <ul class="c-footer__shopFlex">
                <li><img src="~/assets/images/logo/site-logo02.png" alt="Ryot21-Portfolio | WEBエンジニア"></li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss">
		.navItem_footer{
			.router-link-active{// アクティブ
                pointer-events: none;
                span{
                    color: #929090;
                    &::after{
                        width: 100% !important;
                        height: 1px !important;
                        background: #929090 !important;
                    }
                }
			}
		}
</style>