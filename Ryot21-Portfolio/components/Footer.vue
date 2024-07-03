<template>
    <footer id="footer" class="c-footer mgt-2">
        <div class="c-footer-wrapper -v02 mgb2 mgb10s">
            <nav class="c-footer__navArea">
                <ul class="c-footer__navLists -col6">
                    <!-- アクティブ箇所に「.-active」を付与して下さい。 -->
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/" class=" -lh-1 -center">
                            <span class="s-M -s-nav -ls-2 -f-En01">トップ</span>
                        </NuxtLink>
                    </li>
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/about#top" class="-lh-1 -center">
                            <span class="s-M -s-nav -ls-2 -f-En01">作者について</span>
                        </NuxtLink>
                    </li>
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/media#top" class="-lh-1 -center">
                            <span class="s-M -s-nav -ls-2 -f-En01">ブログ</span>
                        </NuxtLink>
                    </li>
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/product#top" class="-lh-1 -center">
                            <span class="s-M -s-nav -ls-2 -f-En01">制作実績</span>
                        </NuxtLink>
                    </li>
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/ses#top" class="-lh-1 -center">
                            <span class="s-M -s-nav -ls-2 -f-En01">エージェント</span>
                        </NuxtLink>
                    </li>
                    <li class="navItem_footer mgb2">
                        <NuxtLink to="/contact#top" class="-lh-1 -center">
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