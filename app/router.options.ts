import type { RouterOptions } from '@nuxt/schema';

// scrollBehaviorの定義
export default <RouterOptions>{
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' }; // スムーズスクロールを適用
    } else {
      return { top: 0, behavior: 'smooth' }; // スムーズスクロールでページトップへ
    }
  }
}