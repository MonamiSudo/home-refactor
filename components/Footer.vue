<template>
  <footer>
    <div class="bg-blue-dark py-10">
      <figure>
        <img class="mx-auto" src="@/assets/image/footer/logo-white.svg" alt="クオースのロゴ">
      </figure>
    </div>
    <small class="inline-block bg-white w-full py-1 text-center">©︎ 2021 SMILE CREATE GROUP Co., Ltd</small>
    <figure class="banner-half hidden sp:block">
      <img src="@/assets/image/footer/limited-banner2.png" alt="" @click="scrollToCta()">
    </figure>
  </footer>
</template>

<script>
export default {
  methods: {
    bannerToggleActive() { // 下にバナーを固定表示させる
      const target = document.querySelector('.banner-half'); // 表示させるバナー
      const scrollY = window.scrollY; // スクロール量（Y）
      const trigger = document.querySelector('.p-fv'); // 最初のエリア要素
      const triggerHeight = trigger.clientHeight; // 最初のエリアの高さ

      if( triggerHeight - scrollY < 0 ) // スクロール量が最初の高さを超えたらバナー表示
        target.classList.add('active');
      else
        target.classList.remove('active')
    },
    scrollToCta() { // バナークリック時にCTAまでスクロール
      const target = document.querySelector('.p-cta'); // CTAエリア取得
      const targetRect = target.getBoundingClientRect(); // CTAエリアのブラウザからの相対位置
      const destination = targetRect.top + window.pageYOffset; // CTAエリアのブラウザからの絶対位置（ゴール）
      window.scrollTo({ // スクロール関数
        top: destination,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.bannerToggleActive); // スクロールによってバナーを表示or非表示
  }
}
</script>

<style scoped lang="scss">
  .banner-half {
    transition: all .5s;
    transform: translateY(81.55px);
    position: fixed;
    bottom: 0;
    &.active {
      transform: translateY(0);
    }
  }
</style>