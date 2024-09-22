import type { RouterOptions } from '@nuxt/schema';

// scrollBehaviorの定義
export default <RouterOptions>{
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
}